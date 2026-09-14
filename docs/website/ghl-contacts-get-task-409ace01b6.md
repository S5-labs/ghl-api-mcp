> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-task). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Task

**Endpoint:** `GET /contacts/:contactId/tasks/:taskId`

Get Task

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

**taskId**

string

required

Task Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**task**objectTask details

```json
{
  "task": {
    "id": "lJpzYrWdpkC2hX6t2yue",
    "title": "test",
    "body": "testing",
    "assignedTo": "tesTUcmRxWrjqzJS8EjkxNK",
    "dueDate": "2021-07-08T02:30:00.000Z",
    "completed": true,
    "contactId": "lJpzYrWdpkC2hX6t2yue"
  }
}
```
