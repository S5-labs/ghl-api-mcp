> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/create-recurring-task). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Recurring Task

**Endpoint:** `POST /locations/:locationId/recurring-tasks`

Create Recurring Task

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**title**stringrequiredName of the task**description**stringDescription of the task**contactIds**string[]Contact Id**owners**string[]Assigned To**rruleOptions**objectrequiredRecurring rules**ignoreTaskCreation**booleanCreate initial task or not

```json
{
  "title": "Task Name",
  "description": "Task Description",
  "contactIds": [
    "sx6wyHhbFdRXh302Lunr"
  ],
  "owners": [
    "sx6wyHhbFdRXh302Lunr"
  ],
  "rruleOptions": {
    "intervalType": "hourly",
    "interval": 1,
    "startDate": "2025-07-23T10:00:00.000Z",
    "dueAfterSeconds": 600
  },
  "ignoreTaskCreation": true
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**recurringTask**objectrequiredRecurring Tasks

```json
{
  "recurringTask": {
    "id": "sx6wyHhbFdRXh302Lunr",
    "title": "Task Name",
    "description": "Task Description",
    "locationId": "sx6wyHhbFdRXh302Lunr",
    "updatedAt": "2021-04-15T10:00:00.000Z",
    "createdAt": "2021-04-15T10:00:00.000Z",
    "rruleOptions": {
      "createTaskIfOverDue": false,
      "interval": 1,
      "intervalType": "hourly",
      "startDate": "2024-10-29T12:34:03.000Z",
      "dueAfterSeconds": 600,
      "count": 550
    },
    "totalOccurrence": 10,
    "deleted": false,
    "assignedTo": "sx6wyHhbFdRXh302Lunr",
    "contactId": "v5cEPM428h8vShlRW1KT"
  }
}
```
