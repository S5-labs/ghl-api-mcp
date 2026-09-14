> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/proposals/list-documents-contracts-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List templates

**Endpoint:** `GET /proposals/templates`

List document contract templates for a location

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

Location Id

**dateFrom**

string

Date start from (ISO 8601)

**dateTo**

string

Date to (ISO 8601)

**type**

string

Comma-separated template types. Valid values: proposal, estimate, contentLibrary

**name**

string

Template Name

**isPublicDocument**

boolean

If the docForm is a DocForm

**userId**

string

User Id, required when isPublicDocument is true

**limit**

string

Limit

**skip**

string

Skip

application/json

Templates fetched successfully

- application/json

- Schema
- Example (auto)

**Schema**

**data**object[]requiredArray of templates**total**numberrequiredTotal number of templates**traceId**stringTrace ID for request tracking

```json
{
  "data": [
    {
      "_id": "685d11c371c22e636e9c04b2",
      "deleted": false,
      "version": 2,
      "name": "New Template",
      "locationId": "5rORm9p7RtxWQPzBIbTG",
      "type": "proposal",
      "updatedBy": "K9PSPnWjfNoE8DCf5LJZ",
      "isPublicDocument": true,
      "createdAt": "2025-06-26T09:24:19.305Z",
      "updatedAt": "2025-06-26T09:27:32.119Z",
      "id": "685d11c371c22e636e9c04b2",
      "documentCount": 0,
      "docFormUrl": "https://staging.sendlink.co/documents/doc-form/685d11c371c22e636e9c04b2?locale=en_US"
    }
  ],
  "total": 2,
  "traceId": "d5656876-86a5-46fb-84df-788f1da7937a"
}
```
