# CUSTOM_OBJECTS API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/objects-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Custom objects are completely customizable objects that allow you to store and manage information tailored to your unique business needs. With custom objects, you can create custom fields, establish relationships, and integrate them into workflows, providing flexibility beyond standard objects like Contacts, Opportunities or Companies.

## Object Schema

### Get Object Schema by key / id

**Endpoint:** `GET /objects/{key}`
**Scope:** `objects/schema.readonly`
**Token Type:** bearer

Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `key` | path | `string` | Yes | key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI. |
| `locationId` | query | `string` | Yes | location id of the sub account |
| `fetchProperties` | query | `string` | No | Fetch Properties , Fetches all the standard / custom fields of the object when set to true |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomObjectByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Object Schema By Key / Id

**Endpoint:** `PUT /objects/{key}`
**Scope:** `objects/schema.write`
**Token Type:** bearer

Update Custom Object Schema  or standard object's like contact, opportunity, business searchable fields. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `key` | path | `string` | Yes | key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomObjectSchemaDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomObjectResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all objects for a location

**Endpoint:** `GET /objects/`
**Scope:** `objects/schema.readonly`
**Token Type:** bearer

Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | location id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomObjectListResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Custom Object

**Endpoint:** `POST /objects/`
**Scope:** `objects/schema.write`
**Token Type:** Agency-Access

Allows you to create a custom object schema. To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomObjectSchemaDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CustomObjectResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Records

### Get Record By Id

**Endpoint:** `GET /objects/{schemaKey}/records/{id}`
**Token Type:** bearer

Allows you to get a Standard Object like business and custom object record by Id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `schemaKey` | path | `string` | Yes | The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. |
| `id` | path | `string` | Yes | id of the record to be updated. Available on the Record details page under the 3 dots or in the url |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `RecordByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Record

**Endpoint:** `PUT /objects/{schemaKey}/records/{id}`
**Token Type:** bearer

Update a Custom Object Record by Id. Supported Objects are business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-175596/e2f3e9f2e111d69/87cpx-275676)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `schemaKey` | path | `string` | Yes | The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. |
| `id` | path | `string` | Yes | id of the record to be updated. Available on the Record details page under the 3 dots or in the url |
| `locationId` | query | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomObjectRecordDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `RecordByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Record

**Endpoint:** `DELETE /objects/{schemaKey}/records/{id}`
**Token Type:** bearer

Delete Record By Id . Supported Objects are business and custom objects.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `schemaKey` | path | `string` | Yes | The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. |
| `id` | path | `string` | Yes | id of the record to be updated. Available on the Record details page under the 3 dots or in the url |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ObjectRecordDeleteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Record

**Endpoint:** `POST /objects/{schemaKey}/records`
**Scope:** `objects/record.write`
**Token Type:** bearer

Create a Custom Object Record. Supported Objects business and custom objects. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-175596/e2f3e9f2e111d69/87cpx-275236)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `schemaKey` | path | `string` | Yes | The key of the Custom Object / Standard Object Schema. For custom objects, the key must include the “custom_objects.” prefix, while standard objects use their respective object keys. This information is available on the Custom Objects Details page under Settings. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomObjectRecordDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `RecordByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Search Object Records

### Search Object Records

**Endpoint:** `POST /objects/{schemaKey}/records/search`
**Scope:** `objects/record.readonly`
**Token Type:** bearer

Supported Objects are custom objects and standard objects like "business". Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `schemaKey` | path | `string` | No | custom object key |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SearchRecordsBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchRecordResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

### CustomObjectLabelDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `singular` | `string` | Yes | Singular name of the custom object |
| `plural` | `string` | Yes | Plural name of the custom object |

### ICustomObjectSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | id of the custom / standard object schema |
| `standard` | `boolean` | Yes | false in case of custom objects and true in case of standard objects like contacts and opportunities |
| `key` | `string` | Yes | key that would be used to refer the custom / standard Object internally (lowercase + underscore_separated). For custom objects, 'custom_objects.' would be added as prefix by default |
| `labels` | `CustomObjectLabelDto` | Yes | This is what your custom / standard  object will be called. These labels will be used to display your custom object on the UI |
| `description` | `string` | No | Custom / Standard  Object Descriptions for example , Pet Object`s description |
| `locationId` | `string` | Yes | location's id |
| `primaryDisplayProperty` | `string` | Yes | Primary property for the custom / standard  Object. This would be used as primary data when rendering the UI. 'custom_objects.{{object_key}} or business.{{object_key}} (for company)' would be added as prefix by default for all the custom / standard objects |
| `dateAdded` | `string (date-time)` | Yes | Date and time when the object was added |
| `dateUpdated` | `string (date-time)` | Yes | Date and time when the object was last updated |
| `type` | `object` | No | Object`s Type |

### OptionDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | Key of the option (Included in Create and Response, excluded in Update) |
| `label` | `string` | Yes | Value of the option |
| `url` | `string` | No | URL associated with the option (Optional, valid only for RADIO type) |

### ICustomField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Description of the field |
| `placeholder` | `string` | No | Placeholder text for the field |
| `showInForms` | `boolean` | Yes | Whether the field should be shown in forms |
| `options` | `array<OptionDTO>` | No | Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type) |
| `acceptedFormats` | `string` | No | Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all |
| `id` | `string` | Yes | Unique identifier of the object |
| `objectKey` | `string` | Yes | The key for your custom / standard object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `dataType` | `string` | Yes | Type of field that you are trying to create |
| `parentId` | `string` | Yes | ID of the parent folder |
| `fieldKey` | `string` | Yes | Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldName}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object. |
| `allowCustomOption` | `boolean` | No | Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records. |
| `maxFileLimit` | `number` | No | Maximum file limit for uploads |
| `dateAdded` | `string (date-time)` | Yes | Date and time when the object was added |
| `dateUpdated` | `string (date-time)` | Yes | Date and time when the object was last updated |

### CustomObjectByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `object` | `ICustomObjectSchema` | No | — |
| `cache` | `boolean` | Yes | Is the response served from cache |
| `fields` | `array<ICustomField>` | No | — |

### CustomObjectListResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objects` | `array<ICustomObjectSchema>` | No | — |

### CustomObjectDisplayPropertyDetails

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `key` | `string` | Yes | key that would be used to refer the custom field internally (lowercase + underscore_separated). 'custom_objects.{{objectKey}}' would be added as prefix by default is not passed |
| `name` | `string` | Yes | Name of the Primary property name which will be displayed on the record page |
| `dataType` | `string` | Yes | Primary property data Type (it can either be TEXT or NUMERICAL type) |

### CreateCustomObjectSchemaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `labels` | `CustomObjectLabelDto` | Yes | This is what your custom object will be called. These labels will be used to display your custom object on the UI |
| `key` | `string` | Yes | key that would be used to refer the Custom Object internally (lowercase + underscore_separated). 'custom_objects.' would be added as prefix by default |
| `description` | `string` | No | Pet Object`s description |
| `locationId` | `string` | Yes | Location Id |
| `primaryDisplayPropertyDetails` | `CustomObjectDisplayPropertyDetails` | Yes | Primary property which will be displayed on the record page |

### CustomObjectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `object` | `ICustomObjectSchema` | No | — |

### CustomObjectLabelUpdateDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `singular` | `string` | No | Singular name of the custom object |
| `plural` | `string` | No | Plural name of the custom object |

### UpdateCustomObjectSchemaDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `labels` | `CustomObjectLabelUpdateDto` | No | This is how your custom object will  be  displayed |
| `description` | `string` | No | Pet Object`s description |
| `locationId` | `string` | Yes | location id |
| `searchableProperties` | `array<string>` | Yes | Searchable Fields: Provide the field key of your object that you want to search on, using the format (custom_object.<object_name>.<field_key>). |

### IRecordSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | id of the record |
| `owner` | `array<string>` | Yes | Owner (User's id). Limited to 1 for now. Only Supported with custom objects |
| `followers` | `array<string>` | Yes | Follower (User's ids). Limited to 10 for now |
| `properties` | `string` | Yes | Properties of the record |
| `dateAdded` | `string (date-time)` | Yes | Date and time when the object was added |
| `dateUpdated` | `string (date-time)` | Yes | Date and time when the object was last updated |

### RecordByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `record` | `IRecordSchema` | No | — |

### CreateCustomObjectRecordDto

Type: `object`

### UpdateCustomObjectRecordDto

Type: `object`

### ObjectRecordDeleteResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | id of the deleted object |
| `success` | `boolean` | No | boolean that defines if the operation was a success or not |

### SearchRecordsBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `page` | `number` | Yes | Page |
| `pageLimit` | `number` | Yes | Page Limit |
| `query` | `string` | Yes | Pass this query parameter to search using your searchable properties. For example, if you have a custom object called “Pets” and have configured “name” as a searchable property, you can pass name:Buddy to search for pets with the name “Buddy.” |
| `searchAfter` | `array<string>` | Yes | — |

### CreatedByResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `channel` | `string` | Yes | Creation Channel |
| `createdAt` | `string` | Yes | Created At |
| `source` | `string` | Yes | From where the record was created |
| `sourceId` | `string` | Yes | User/Resource Id |

### RecordResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | id of the record |
| `owner` | `array<string>` | Yes | Owner (User's id). Limited to 1 for now . Only supported for custom objects for now |
| `followers` | `array<string>` | Yes | Follower (User's ids). Limited to 10 and supported for custom objects for now |
| `properties` | `string` | Yes | Properties of the record |
| `createdAt` | `string (date-time)` | Yes | Date and time when the object was added |
| `updatedAt` | `string (date-time)` | Yes | Date and time when the object was last updated |
| `locationId` | `string` | Yes | Location Id |
| `objectId` | `string` | Yes | ObjectId Id |
| `objectKey` | `string` | Yes | ObjectId key |
| `createdBy` | `CreatedByResponseDTO` | Yes | Created By Meta |
| `lastUpdatedBy` | `CreatedByResponseDTO` | Yes | Last Updated By Meta |
| `searchAfter` | `array<number>` | Yes | — |

### SearchRecordResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `records` | `array<RecordResponseDTO>` | No | Records |
| `total` | `number` | Yes | Total Number of records |
