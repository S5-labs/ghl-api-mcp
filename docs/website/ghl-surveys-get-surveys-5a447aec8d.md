> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/surveys/get-surveys). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Surveys

**Endpoint:** `GET /surveys/`

Get Surveys

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

**skip**

number

**limit**

number

Limit Per Page records count. will allow maximum up to 50 and default will be 10

`10`

**type**

string

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**surveys**object[]**total**numberNumber of surveys

```json
{
  "surveys": [
    {
      "id": "I5GFa3d3cKjojpe4VVUx",
      "name": "Survey 1",
      "locationId": "ve9EPM428h8vShlRW1KT"
    }
  ],
  "total": 20
}
```
