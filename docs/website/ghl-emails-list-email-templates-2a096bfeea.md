> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/list-email-templates). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List templates

**Endpoint:** `GET /emails/locations/:locationId/templates`

Get list of templates by location

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

Location ID

**limit**

number

Number of templates to return

**Possible values:** `>= 1` and `<= 20`

`10`

**offset**

number

Number of templates to skip

**Possible values:** `>= 0`

`0`

**search**

string

Search by template name

**sortBy**

string

Field to sort by

Available options

`updatedAt`

**sortOrder**

string

Sort direction

Available options

`asc`

`desc`

**archived**

boolean

Return archived templates

`false`

**folderId**

string

Folder to list templates from. Use 'root' for top-level listing.

**include**

string

Whether to include templates, folders, or both in the response. `templates` will return only templates, `folders` will return only folders, and `all` will return both.

Available options

`all`

`templates`

`folders`

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**items**object[]requiredList of template and folder resources**total**numberrequiredTotal count of templates and folders**traceId**stringTrace ID of the request

```json
{
  "items": [
    {
      "id": "67f15c2ae99226d5bcccb8f3",
      "name": "February Newsletter",
      "type": "template"
    }
  ],
  "total": 25,
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
