> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/RecordUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Record Update

## Overview

This webhook response is triggered when a record or business is updated.

## Schema

The webhook response follows the JSON schema below:

```json
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

## Field Descriptions

### `type`

- Type: `string`
- Indicates the type of record created.

### `locationId`

- Type: `string`
- Identifies the location associated with the created record.

### `owners`

- Type: `array of strings`
- Represents the unique identifiers of users who own the record.

### `followers`

- Type: `array of strings`
- List of users who are following the record for updates.

### `properties`

- Type: `array of objects`
- Contains key-value pairs representing additional details about the record.
  - **`key`**: The property name.
  - **`valueString`**: The corresponding value as a string.

### `id`

- Type: `string`
- Unique identifier for the created record.

### `timestamp`

- Type: `string`
- Format: `date-time`
- Represents the date and time when the record was created.

## Example Response

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

## Additional Notes

- Ensure that your webhook listener is capable of processing `POST` requests.
- The `owners` and `followers` fields help in managing record access and tracking.
- The `properties` array allows extensibility by enabling dynamic field storage.

---
