> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/TaskComplete.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Task

Called whenever a task is completed

#### Schema

```json json_schema
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "assignedTo": {
      "type": "string"
    },
    "body": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "title": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    },
    "dueDate": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "type": "TaskComplete",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "5HrB1IbmnKMBXloldFuP",
  "assignedTo": "bNl8QNGXhIQJLv8eeASQ",
  "body": "testing",
  "contactId": "WFwVrSSjZ2CNHbZThQX2",
  "dateAdded": "2021-11-29T13:37:28.304Z",
  "dueDate": "2021-12-22T06:55:00.000Z",
  "title": "test"
}
```
