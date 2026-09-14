> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/RelationCreate.md). Do not edit this generated file directly.

---
tags: [Webhook Response]
---

# Relation Create

## Overview

This webhook response is triggered when an relation between objects is created. 

For example, in a business management system, a company may want to establish an association between a custom object record and a contact. In this case:
- The **second object** (contact) would represent a person associated with the custom object record.
- The **first object** (custom object) could represent an entity such as a project or a transaction.
- The system allows for dynamic relationships between entities, facilitating better data management.

## Schema

The webhook response follows the JSON schema below:

```json json_schema
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "firstObjectKey": {
      "type": "string"
    },
    "firstRecordId": {
      "type": "string"
    },
    "secondObjectKey": {
      "type": "string"
    },
    "secondRecordId": {
      "type": "string"
    },
    "associationId": {
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
- Unique identifier for the created association.

### `firstObjectKey`
- Type: `string`
- Key representing the first object in the association.

### `firstRecordId`
- Type: `string`
- Identifier of the first object’s specific record.

### `secondObjectKey`
- Type: `string`
- Key representing the second object in the association.

### `secondRecordId`
- Type: `string`
- Identifier of the second object’s specific record.

### `associationId`
- Type: `string`
- Unique identifier for the association that was created.

### `locationId`
- Type: `string`
- Identifies the location associated with the created association.


## Example Response

```json
{
  "id": "67ae0d741119d218c9d0c477",
  "firstObjectKey": "custom_objects.mad",
  "firstRecordId": "67a349a79b28947ec1f65bb5",
  "secondObjectKey": "contact",
  "secondRecordId": "emqfhnG3g9D9chy9inTz",
  "associationId": "669e5795add2094075906c65",
  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"
}
```

## Additional Notes

- The `firstObjectKey` and `secondObjectKey` define the relationship between the created entities.
