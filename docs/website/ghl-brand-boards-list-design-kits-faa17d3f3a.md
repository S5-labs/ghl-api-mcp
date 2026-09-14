> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/list-design-kits). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List Design Kits

**Endpoint:** `GET /brand-boards/locations/:locationId/design-kits`

Get list of design kits for a location

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

ID of the location to list design kits for.

**limit**

number

Maximum number of design kits to return.

**Possible values:** `>= 1` and `<= 20`

`10`

**offset**

number

Number of design kits to skip for pagination.

**Possible values:** `>= 0`

`0`

**search**

string

Filter results by design kit name (case-insensitive partial match).

**deleted**

boolean

Include soft-deleted design kits in the results.

`false`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**items**object[]requiredList of design kits for the current page.**total**numberrequiredTotal number of design kits matching the query.**traceId**stringTrace identifier for the request, useful for debugging and support.

```json
{
  "items": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "My Design Kit",
      "isDefault": false,
      "createdAt": "2024-01-05T12:00:00.000Z",
      "updatedAt": "2024-01-05T12:00:00.000Z"
    }
  ],
  "total": 25,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
