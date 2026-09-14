> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-search-targeting). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Search targeting options

**Endpoint:** `GET /ad-publishing/linkedin/targeting/search`

Search LinkedIn targeting facets such as locations, industries, and job titles

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location identifier

**facet**

string

required

Targeting facet

**query**

string

Search query

**q**

string

Query parameter

application/json

Matching targeting entities for the requested facet

- application/json

- Schema
- Example (auto)

**Schema**

- Array [
- ]

```json
[
  {
    "name": "Mumbai, Maharashtra, India",
    "urn": "urn:li:geo:106164952",
    "facetUrn": "urn:li:adTargetingFacet:locations"
  }
]
```
