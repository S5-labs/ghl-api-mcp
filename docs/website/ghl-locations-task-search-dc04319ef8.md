> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/task-search). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Task Search Filter

**Endpoint:** `POST /locations/:locationId/tasks/search`

Task Search

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**contactId**string[]Contact Ids**completed**booleanTask Completed Or Pending**assignedTo**string[]Assigned User Ids**query**stringSearch Value**limit**numberLimit To Api**Default value:**`25`**skip**numberNumber Of Tasks To Skip**Default value:**`0`**businessId**stringBussiness Id

```json
{
  "contactId": [
    "dSMo5jnqkJyh8YeGXM7k",
    "j5WESpmRj816VtyUuWwh"
  ],
  "completed": true,
  "assignedTo": [
    "0004Mtfsd11SBU1mBPgd"
  ],
  "query": "Task Name",
  "limit": 10,
  "skip": 10,
  "businessId": "6348240b98722079e5417332"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**tasks**array[]

```json
{
  "tasks": [
    null
  ]
}
```
