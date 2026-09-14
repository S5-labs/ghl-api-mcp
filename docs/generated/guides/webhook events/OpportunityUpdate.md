> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/OpportunityUpdate.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Opportunity

Called whenever an opportunity is updated

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
    "contactId": {
      "type": "string"
    },
    "monetaryValue": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "pipelineId": {
      "type": "string"
    },
    "pipelineStageId": {
      "type": "string"
    },
    "pipelineStageId": {
      "type": "string"
    },
    "source": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "dateAdded": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "type": "OpportunityUpdate",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "id": "wWhVuzqpRuOA1ZVWi4FC",
  "assignedTo": "bNl8QNGXhIQJLv8eeASQ",
  "contactId": "cJAWDskpkJHbRbhAT7bs",
  "monetaryValue": 40,
  "name": "Loram ipsu",
  "pipelineId": "VDm7RPYC2GLUvdpKmBfC",
  "pipelineStageId": "e93ba61a-53b3-45e7-985a-c7732dbcdb69",
  "source": "Loram ipsu",
  "status": "open",
  "dateAdded": "2021-11-26T12:41:02.193Z"
}
```
