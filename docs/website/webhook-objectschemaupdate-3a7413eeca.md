> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Custom Object

## Overview

The **Update Custom Object** is triggered whenever a custom object is Updated. This webhook allows systems to listen for new custom objects and take appropriate actions based on the event.

## Schema

The webhook payload follows the JSON schema below:

```json
{
  "type": "object",
  "properties": {
    "labels": {
      "type": "object",
      "required": true
    },
    "description": {
      "type": "string"
    },
    "searchableProperties": {
      "type": "array"
    },
    "primaryDisplayProperty": {
      "type": "string",
      "required": true
    },
    "key": {
      "type": "string",
      "required": true
    },
    "locationId": {
      "type": "string",
      "required": true
    },
    "createdBy": {
      "type": "object"
    },
    "updatedBy": {
      "type": "object"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    },
    "objectType": {
      "type": "string",
      "enum": ["USER_DEFINED"],
      "default": "USER_DEFINED"
    }
  }
}
```

## Field Descriptions

### `labels`

An object that defines the human-readable names associated with the custom object.

- **`singular`**: The name of the object in singular form (e.g., `"pet"`).
- **`plural`**: The name of the object in plural form (e.g., `"pets"`).

### `description`

- Type: `string`
- A brief explanation of the custom object.

### `searchableProperties`

- Type: `array`
- List of properties that are indexed for search.

### `primaryDisplayProperty`

- Type: `string`
- Required: ✅
- The key property used to display the custom object.

### `key`

- Type: `string`
- Required: ✅
- Unique identifier for the custom object type.

### `locationId`

- Type: `string`
- Required: ✅
- Identifies the location associated with the custom object.

### `createdBy`

- Type: `object`
- Metadata about the user who created the object.

### `updatedBy`

- Type: `object`
- Metadata about the user who last updated the object.

### `timestamp`

- Type: `string`
- Format: `date-time`
- The date and time when the object was created.

### `objectType`

- Type: `string`
- Default: `"USER_DEFINED"`
- Specifies the type of object, currently supports only `USER_DEFINED`.

## Example Payload

```json
{
  "id": "6798a1a18fc746e0eba2ccfe",
  "labels": {
    "singular": "pet",
    "plural": "pets"
  },
  "description": "Pet's Description",
  "searchableProperties": [
    "custom_objects.pets.pet_name"
  ],
  "primaryDisplayProperty": "custom_objects.pets.pet_name",
  "key": "custom_objects.pets",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P",
  "updatedAt": "2025-01-28T09:21:37.311Z",
  "createdAt": "2025-01-28T09:21:37.311Z",
  "objectType": "USER_DEFINED",
  "timestamp": "2025-02-10T08:26:05.961Z"
}
```

## Additional Notes

- Ensure your webhook listener is set up to handle `POST` requests.
- The payload format may change in future versions; check for updates regularly.
- The `key` field should be unique within a given `locationId`.

---
