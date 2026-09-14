> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/TaskDelete.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Task

Called whenever a task is deleted

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
  "type": "TaskDelete",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "UlRWGLSXh0ji5qbiGu4i",
  "assignedTo": "63e4qiWDsFJjOYAC8phG",
  "body": "Loram ipsum",
  "contactId": "CWBf1PR9LvvBkcYqiXlc",
  "title": "Loram ipsum",
  "dateAdded": "2021-11-26T12:41:02.193Z",
  "dueDate": "2021-11-26T12:41:02.193Z"
}
```
