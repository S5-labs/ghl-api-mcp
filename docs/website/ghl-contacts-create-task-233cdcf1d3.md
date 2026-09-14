> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/create-task). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Task

**Endpoint:** `POST /contacts/:contactId/tasks`

Create Task

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

**title**stringrequiredTitle of the task**body**stringBody or description of the task**dueDate**stringrequiredDue date of the task (ISO 8601 format)**completed**booleanrequiredWhether the task is completed**assignedTo**stringUser Id to whom the task is assigned

```json
{
  "title": "First Task",
  "body": "loram ipsum",
  "dueDate": "2020-10-25T11:00:00Z",
  "completed": true,
  "assignedTo": "hxHGVRb1YJUscrCB8eXK"
}
```

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
