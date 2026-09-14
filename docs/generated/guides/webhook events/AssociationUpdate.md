> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/AssociationUpdate.md). Do not edit this generated file directly.

---
tags: [Webhook Response]
---

# Association Updated

## Overview

This webhook response is triggered when a new association is updated between objects, such as linking contacts to custom objects. Currently, only contact-to-contact , contact to custom object and custom object to custom object associations are supported. There are plans to expand support for additional associations in the future.

For example, in a real estate system, a company may want to associate potential buyers with specific properties. In this case:
- The **first object** (buyer) would be a custom object representing the interested person.
- The **second object** (property) would be a custom object representing the real estate listing.
- The **association label** might be "Interested Buyer," indicating that the buyer has shown interest in the property.
- The system could store multiple buyers per property (many-to-many relationship), allowing for flexible tracking of interest.

## Schema

The webhook response follows the JSON schema below:

```json json_schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "associationType": {
      "type": "string"
    },
    "firstObjectKey": {
      "type": "string"
    },
    "firstObjectLabel": {
      "type": "string"
    },
    "firstObjectToSecondObjectCardinality": {
      "type": "string"
    },
    "secondObjectKey": {
      "type": "string"
    },
    "secondObjectLabel": {
      "type": "string"
    },
    "secondObjectToFirstObjectCardinality": {
      "type": "string"
    },
    "key": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    }
  }
}
```

## Field Descriptions

### `id`
- Type: `string`
- Unique identifier for the association.

### `associationType`
- Type: `string`
- Specifies the type of association (e.g., `USER_DEFINED` or `SYSTEM_DEFINED`).

### `firstObjectKey`
- Type: `string`
- Key representing the first object in the association.

### `firstObjectLabel`
- Type: `string`
- Human-readable label for the first object.

### `firstObjectToSecondObjectCardinality`
- Type: `string`
- Indicates the relationship between the first and second object (e.g., `MANY_TO_MANY`).

### `secondObjectKey`
- Type: `string`
- Key representing the second object in the association.

### `secondObjectLabel`
- Type: `string`
- Human-readable label for the second object.

### `secondObjectToFirstObjectCardinality`
- Type: `string`
- Defines the reverse relationship between objects.

### `key`
- Type: `string`
- Unique key assigned to the association.

### `locationId`
- Type: `string`
- Identifies the location associated with the created association.

## Example Response

```json
{
  "id": "67ade73d1119d2ac7ad0c475",
  "associationType": "USER_DEFINED",
  "firstObjectKey": "custom_objects.real_estate_buyer",
  "firstObjectLabel": "Interested Buyer",
  "firstObjectToSecondObjectCardinality": "MANY_TO_MANY",
  "secondObjectKey": "custom_objects.property",
  "secondObjectLabel": "Property",
  "secondObjectToFirstObjectCardinality": "MANY_TO_MANY",
  "key": "buyer_property_interest",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"
}
```

## Additional Notes

- Ensure that your webhook listener is capable of processing `POST` requests.
- The `firstObjectKey` and `secondObjectKey` help define relationships between entities.
- The `traceId` is useful for debugging and logging purposes.
