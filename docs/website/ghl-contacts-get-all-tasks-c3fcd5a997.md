> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-all-tasks). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get all Tasks

**Endpoint:** `GET /contacts/:contactId/tasks`

Get all Tasks

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

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**tasks**object[]List of tasks

```json
{
  "tasks": [
    {
      "id": "lJpzYrWdpkC2hX6t2yue",
      "title": "test",
      "body": "testing",
      "assignedTo": "tesTUcmRxWrjqzJS8EjkxNK",
      "dueDate": "2021-07-08T02:30:00.000Z",
      "completed": true,
      "contactId": "lJpzYrWdpkC2hX6t2yue"
    }
  ]
}
```
