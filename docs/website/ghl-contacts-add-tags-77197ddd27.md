> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-tags). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add Tags

**Endpoint:** `POST /contacts/:contactId/tags`

Add Tags

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

Contact Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**tags**string[]requiredList of tags to add or remove

```json
{
  "tags": [
    "minim",
    "velit magna"
  ]
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**tags**string[]Current tags on the contact after the operation

```json
{
  "tags": [
    "minim",
    "velit magna"
  ]
}
```
