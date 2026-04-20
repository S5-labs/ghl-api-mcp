#!/usr/bin/env python3
"""
GHL API Documentation Generator
Generates comprehensive review documents for all GHL API sections.
"""

import json
import os
import glob
from collections import defaultdict

RAW_DIR = "/home/ubuntu/ghl_docs/raw"
OUT_DIR = "/home/ubuntu/ghl_docs"

BASE_URL = "https://marketplace.gohighlevel.com/docs/ghl"
GITHUB_BASE = "https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps"
SERVICES_URL = "https://services.leadconnectorhq.com"

METHOD_COLORS = {
    "GET": "GET",
    "POST": "POST",
    "PUT": "PUT",
    "PATCH": "PATCH",
    "DELETE": "DELETE",
}

def load_json(filepath):
    with open(filepath) as f:
        return json.load(f)

def get_type_str(prop_data):
    """Get a human-readable type string from a property definition."""
    if "$ref" in prop_data:
        return prop_data["$ref"].split("/")[-1]
    t = prop_data.get("type", "")
    fmt = prop_data.get("format", "")
    items = prop_data.get("items", {})
    if t == "array":
        item_type = items.get("type", items.get("$ref", "object").split("/")[-1] if "$ref" in items else "object")
        return f"array[{item_type}]"
    if fmt:
        return f"{t} ({fmt})"
    return t or "object"

def extract_schema_fields(schema_name, components, depth=0):
    """Recursively extract fields from a schema."""
    if depth > 3:
        return []
    schemas = components.get("schemas", {})
    if schema_name not in schemas:
        return []
    schema = schemas[schema_name]
    props = schema.get("properties", {})
    required = schema.get("required", [])
    fields = []
    for name, prop_data in props.items():
        field = {
            "name": name,
            "type": get_type_str(prop_data),
            "required": name in required,
            "description": prop_data.get("description", ""),
            "example": prop_data.get("example", ""),
            "enum": prop_data.get("enum", []),
        }
        fields.append(field)
    return fields

def format_fields_table(fields, title="Fields"):
    """Format a list of fields as a Markdown table."""
    if not fields:
        return ""
    lines = [f"\n**{title}**\n"]
    lines.append("| Field | Type | Required | Description | Example |")
    lines.append("|-------|------|----------|-------------|---------|")
    for f in fields:
        req = "Yes" if f.get("required") else "No"
        desc = f.get("description", "").replace("|", "\\|").replace("\n", " ")[:100]
        ex = str(f.get("example", "")).replace("|", "\\|")[:60]
        ftype = f.get("type", "").replace("|", "\\|")
        lines.append(f"| `{f['name']}` | `{ftype}` | {req} | {desc} | {ex} |")
    return "\n".join(lines)

def format_params_table(params, title="Parameters"):
    """Format path/query parameters as a Markdown table."""
    if not params:
        return ""
    lines = [f"\n**{title}**\n"]
    lines.append("| Parameter | Type | Required | Description | Example |")
    lines.append("|-----------|------|----------|-------------|---------|")
    for p in params:
        schema = p.get("schema", {})
        ptype = schema.get("type", "string")
        req = "Yes" if p.get("required") else "No"
        desc = p.get("description", "").replace("|", "\\|")[:100]
        ex = str(p.get("example", "")).replace("|", "\\|")[:60]
        lines.append(f"| `{p['name']}` | `{ptype}` | {req} | {desc} | {ex} |")
    return "\n".join(lines)

def generate_curl_sample(method, path, has_body=False, sample_body=None):
    """Generate a sample cURL command."""
    url = f"{SERVICES_URL}{path}"
    # Replace path params with placeholders
    import re
    url = re.sub(r'\{(\w+)\}', r':<\1>', url)
    lines = [f"```bash", f"curl -X {method} \\"]
    lines.append(f"  '{url}' \\")
    lines.append(f"  -H 'Authorization: Bearer <YOUR_TOKEN>' \\")
    lines.append(f"  -H 'Version: 2021-07-28' \\")
    if has_body:
        lines.append(f"  -H 'Content-Type: application/json' \\")
        if sample_body:
            body_str = json.dumps(sample_body, indent=4)
            lines.append(f"  -d '{body_str}'")
        else:
            lines.append(f"  -d '{{}}'")
    else:
        # Remove trailing backslash from last line
        lines[-1] = lines[-1].rstrip(" \\")
    lines.append("```")
    return "\n".join(lines)

def build_sample_body(fields):
    """Build a sample JSON body from fields."""
    body = {}
    for f in fields[:8]:  # Limit to first 8 fields
        ex = f.get("example")
        if ex:
            body[f["name"]] = ex
        elif f.get("type") == "string":
            body[f["name"]] = f"<{f['name']}>"
        elif f.get("type") in ("number", "integer"):
            body[f["name"]] = 0
        elif f.get("type", "").startswith("array"):
            body[f["name"]] = []
        elif f.get("type") == "boolean":
            body[f["name"]] = False
    return body

def process_api(filepath):
    """Process a single API JSON file and return structured data."""
    data = load_json(filepath)
    info = data.get("info", {})
    paths = data.get("paths", {})
    components = data.get("components", {})
    schemas = components.get("schemas", {})
    
    title = info.get("title", "")
    description = info.get("description", "")
    version = info.get("version", "1.0")
    
    endpoints = []
    for path, methods in paths.items():
        for method, details in methods.items():
            if method.upper() not in METHOD_COLORS:
                continue
            
            summary = details.get("summary", "")
            op_id = details.get("operationId", "")
            desc = details.get("description", "")
            tags = details.get("tags", [])
            
            # Scopes
            security = details.get("security", [])
            scopes = []
            for s in security:
                for scheme, scope_list in s.items():
                    scopes.extend(scope_list)
            
            # Parameters
            params = details.get("parameters", [])
            path_params = [p for p in params if p.get("in") == "path"]
            query_params = [p for p in params if p.get("in") == "query"]
            header_params = [p for p in params if p.get("in") == "header" and p.get("name") != "Version"]
            
            # Request body
            req_body = details.get("requestBody", {})
            req_fields = []
            req_schema_name = ""
            if req_body:
                content = req_body.get("content", {})
                for ct, ct_data in content.items():
                    schema = ct_data.get("schema", {})
                    ref = schema.get("$ref", "")
                    if ref:
                        req_schema_name = ref.split("/")[-1]
                        req_fields = extract_schema_fields(req_schema_name, components)
            
            # Response schema
            responses = details.get("responses", {})
            resp_fields = []
            for code, resp_data in responses.items():
                if code in ("200", "201"):
                    resp_content = resp_data.get("content", {})
                    for ct, ct_data in resp_content.items():
                        schema = ct_data.get("schema", {})
                        ref = schema.get("$ref", "")
                        if ref:
                            resp_schema_name = ref.split("/")[-1]
                            resp_fields = extract_schema_fields(resp_schema_name, components)
                    break
            
            endpoints.append({
                "method": method.upper(),
                "path": path,
                "summary": summary,
                "operationId": op_id,
                "description": desc,
                "tags": tags,
                "scopes": scopes,
                "path_params": path_params,
                "query_params": query_params,
                "header_params": header_params,
                "req_fields": req_fields,
                "resp_fields": resp_fields,
                "responses": list(responses.keys()),
            })
    
    return {
        "title": title,
        "description": description,
        "version": version,
        "endpoints": endpoints,
        "schemas": schemas,
    }

def generate_api_section(api_name, api_data, doc_url_base):
    """Generate a Markdown section for a single API."""
    title = api_data["title"]
    description = api_data["description"]
    endpoints = api_data["endpoints"]
    
    lines = []
    lines.append(f"\n---\n")
    lines.append(f"## {title}\n")
    if description and description != title:
        lines.append(f"{description}\n")
    
    # Endpoint summary table
    if endpoints:
        lines.append(f"\n**Endpoint Summary**\n")
        lines.append("| Method | Path | Summary | Scope |")
        lines.append("|--------|------|---------|-------|")
        for ep in endpoints:
            scope = ", ".join(ep["scopes"]) if ep["scopes"] else "—"
            lines.append(f"| `{ep['method']}` | `{ep['path']}` | {ep['summary']} | `{scope}` |")
    
    # Detailed endpoint docs
    for ep in endpoints:
        lines.append(f"\n### {ep['method']} {ep['summary']}\n")
        lines.append(f"**Endpoint:** `{ep['method']} {SERVICES_URL}{ep['path']}`\n")
        
        if ep.get("description") and ep["description"] != ep["summary"]:
            lines.append(f"{ep['description']}\n")
        
        if ep["scopes"]:
            scope_str = ", ".join(f"`{s}`" for s in ep["scopes"])
            lines.append(f"**Required Scope(s):** {scope_str}\n")
        
        if ep["path_params"]:
            lines.append(format_params_table(ep["path_params"], "Path Parameters"))
        
        if ep["query_params"]:
            lines.append(format_params_table(ep["query_params"], "Query Parameters"))
        
        if ep["req_fields"]:
            lines.append(format_fields_table(ep["req_fields"], "Request Body Fields"))
        
        if ep["resp_fields"]:
            lines.append(format_fields_table(ep["resp_fields"][:12], "Response Fields (200/201)"))
        
        # cURL sample
        has_body = bool(ep["req_fields"]) or ep["method"] in ("POST", "PUT", "PATCH")
        sample_body = build_sample_body(ep["req_fields"]) if ep["req_fields"] else None
        lines.append(f"\n**Sample Request**\n")
        lines.append(generate_curl_sample(ep["method"], ep["path"], has_body, sample_body))
        
        # Response codes
        if ep["responses"]:
            resp_str = " | ".join(f"`{r}`" for r in ep["responses"])
            lines.append(f"\n**Response Codes:** {resp_str}\n")
    
    return "\n".join(lines)

# ─── DOCUMENT DEFINITIONS ────────────────────────────────────────────────────

DOCUMENTS = {
    "GHL_Core_CRM_Business_API_Review.md": {
        "title": "GHL Core CRM & Business APIs — Comprehensive Review",
        "intro": """This document provides a comprehensive review of the GoHighLevel Core CRM & Business API sections, covering Businesses, Companies, Sub-Accounts (Locations), and Users. These APIs form the foundational layer of the GHL platform, enabling management of the organizational hierarchy from agency level down to individual sub-accounts and their associated users and business entities.""",
        "apis": ["businesses", "companies", "locations", "users"],
        "source_note": "Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)",
    },
    "GHL_Scheduling_Communication_API_Review.md": {
        "title": "GHL Scheduling & Communication APIs — Comprehensive Review",
        "intro": """This document covers the GoHighLevel Scheduling and Communication API sections: Calendars, Conversations, Emails, Email ISV, Phone System, and Voice AI. These APIs power the core communication and scheduling capabilities of the GHL platform, enabling programmatic management of appointments, multi-channel conversations, email campaigns, and AI-powered voice interactions.""",
        "apis": ["calendars", "conversations", "emails", "email-isv", "phone-system", "voice-ai"],
        "source_note": "Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)",
    },
    "GHL_Marketing_Content_API_Review.md": {
        "title": "GHL Marketing & Content APIs — Comprehensive Review",
        "intro": """This document covers the GoHighLevel Marketing and Content API sections: Blogs, Campaigns, Courses, Forms, Funnels, Links (Trigger Links), Media Library, Social Media Posting, and Surveys. These APIs enable programmatic management of marketing assets, content delivery, lead capture, and social media automation within the GHL platform.""",
        "apis": ["blogs", "campaigns", "courses", "forms", "funnels", "links", "medias", "social-media-posting", "surveys"],
        "source_note": "Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)",
    },
    "GHL_Sales_Commerce_API_Review.md": {
        "title": "GHL Sales & Commerce APIs — Comprehensive Review",
        "intro": """This document covers the GoHighLevel Sales and Commerce API sections: Invoices, Opportunities, Payments, Products, Proposals (Documents & Contracts), and Store. These APIs power the revenue-generating capabilities of the GHL platform, enabling programmatic management of the sales pipeline, payment processing, product catalogs, and e-commerce operations.""",
        "apis": ["invoices", "opportunities", "payments", "products", "proposals", "store"],
        "source_note": "Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)",
    },
    "GHL_Platform_Automation_API_Review.md": {
        "title": "GHL Platform & Automation APIs — Comprehensive Review",
        "intro": """This document covers the GoHighLevel Platform and Automation API sections: Custom Menus, Marketplace, OAuth 2.0, SaaS API, Snapshots, and Workflows. These APIs provide the infrastructure layer of the GHL platform, enabling app marketplace integrations, white-label SaaS management, account snapshots, and workflow automation.""",
        "apis": ["custom-menus", "marketplace", "saas-api", "snapshots", "workflows"],
        "source_note": "Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)",
    },
}

# ─── GENERATE ALL DOCUMENTS ──────────────────────────────────────────────────

# Load all API data
all_api_data = {}
for filepath in glob.glob(f"{RAW_DIR}/*.json"):
    api_name = os.path.basename(filepath).replace(".json", "")
    if api_name != "all_endpoints_summary":
        all_api_data[api_name] = process_api(filepath)

print("Loaded APIs:", sorted(all_api_data.keys()))

for filename, doc_def in DOCUMENTS.items():
    outpath = os.path.join(OUT_DIR, filename)
    lines = []
    
    # Header
    lines.append(f"# {doc_def['title']}\n")
    lines.append(f"*Generated: March 2026 | Source: GHL API v2 Official Documentation*\n")
    lines.append(f"\n---\n")
    
    # Introduction
    lines.append(f"## Overview\n")
    lines.append(doc_def["intro"])
    lines.append(f"\n{doc_def['source_note']}\n")
    
    # Endpoint count summary
    total_eps = sum(len(all_api_data.get(a, {}).get("endpoints", [])) for a in doc_def["apis"])
    lines.append(f"\nThis document covers **{len(doc_def['apis'])} API sections** with a total of **{total_eps} endpoints**.\n")
    
    # Quick reference table
    lines.append(f"\n## Quick Reference\n")
    lines.append("| API Section | Endpoints | Key Scopes |")
    lines.append("|-------------|-----------|------------|")
    for api_name in doc_def["apis"]:
        api_data = all_api_data.get(api_name, {})
        eps = api_data.get("endpoints", [])
        all_scopes = set()
        for ep in eps:
            all_scopes.update(ep.get("scopes", []))
        scope_str = ", ".join(f"`{s}`" for s in sorted(all_scopes)[:4])
        if len(all_scopes) > 4:
            scope_str += f" _(+{len(all_scopes)-4} more)_"
        lines.append(f"| **{api_data.get('title', api_name)}** | {len(eps)} | {scope_str} |")
    
    # Detailed sections
    lines.append(f"\n## Detailed API Reference\n")
    for api_name in doc_def["apis"]:
        api_data = all_api_data.get(api_name, {})
        if not api_data:
            lines.append(f"\n---\n## {api_name.title()} API\n\n_No endpoints documented in the current schema._\n")
            continue
        section = generate_api_section(api_name, api_data, BASE_URL)
        lines.append(section)
    
    # References
    lines.append(f"\n---\n## References\n")
    lines.append(f"[1]: https://marketplace.gohighlevel.com/docs/ghl/ \"GHL API Marketplace Documentation\"")
    lines.append(f"[2]: https://github.com/GoHighLevel/highlevel-api-docs \"GHL API v2 GitHub Repository\"")
    lines.append(f"[3]: https://services.leadconnectorhq.com \"GHL API Base URL\"")
    for i, api_name in enumerate(doc_def["apis"], start=4):
        lines.append(f"[{i}]: {GITHUB_BASE}/{api_name}.json \"GHL {api_name.title()} API OpenAPI Schema\"")
    
    content = "\n".join(lines)
    with open(outpath, "w") as f:
        f.write(content)
    
    print(f"Written: {filename} ({len(content)} chars, {content.count(chr(10))} lines)")

print("\nAll documents generated successfully!")
