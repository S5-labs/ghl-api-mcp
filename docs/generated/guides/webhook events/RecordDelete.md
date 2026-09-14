> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/RecordDelete.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# Delete Record

## Overview
The `Delete Record` is triggered whenever a record or business (company) is deleted from the system.

## Schema
The webhook payload follows a structured JSON schema, which defines the format and expected data types of the event payload.

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
    "owners": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "followers": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "properties": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "valueString": {
            "type": "string"
          }
        }
      }
    },
    "id": {
      "type": "string"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    }
  }
}
```

## Explanation of Fields

| Field        | Type     | Description |
|-------------|----------|-------------|
| `type` | `string` | The type of event. |
| `locationId` | `string` | Unique identifier for the location associated with the deleted record. |
| `owners` | `array of strings` | List of user IDs that were assigned as owners of the deleted record. |
| `followers` | `array of strings` | List of user IDs that were following the deleted record. |
| `properties` | `array of objects` | Key-value pairs containing additional metadata about the record. |
| `id` | `string` | Unique identifier of the deleted record. |
| `timestamp` | `string (ISO 8601 format)` | The timestamp when the deletion event occurred. |

## Example Payload

```json
{
  "id": "679b8f9bde6a0c356a0311b3",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P",
  "timestamp": "2025-02-10T08:26:05.961Z",
  "owners": ["60d5ec49f72b2a001f5f9d91"],
  "followers": ["60d5ec49f72b2a001f5f9d93", "60d5ec49f72b2a001f5f9d94"],
  "properties": [
    {
      "key": "pet_name",
      "valueString": "buddy"
    }
  ]
}
```
