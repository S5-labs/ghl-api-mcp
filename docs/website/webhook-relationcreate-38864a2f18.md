> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Relation Create

## Overview

This webhook response is triggered when an relation between objects is created.

For example, in a business management system, a company may want to establish an association between a custom object record and a contact. In this case:

- The **second object** (contact) would represent a person associated with the custom object record.
- The **first object** (custom object) could represent an entity such as a project or a transaction.
- The system allows for dynamic relationships between entities, facilitating better data management.

This event is **not** emitted for the built-in company-to-contact association — see [Unsupported associations](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#unsupported-associations).

## Schema

The webhook response follows the JSON schema below:

```json
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

## Unsupported associations

**`RelationCreate` is not emitted for the built-in company-to-contact association (`BUSINESSES_CONTACTS_ASSOCIATION`).** Linking a contact to a company does not currently trigger this event.

This limitation applies to all API versions. Webhook coverage for this association is tracked as a known gap and is being evaluated for future support. This page will be updated when that changes.

## Additional Notes

- The `firstObjectKey` and `secondObjectKey` define the relationship between the created entities.
