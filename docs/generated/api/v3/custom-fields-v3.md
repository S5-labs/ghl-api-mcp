# Custom Fields V2 API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/custom-fields-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Custom fields are data points that allow you to capture and store specific information tailored to your business requirements. You can create fields across field types like text, numeric, selection options and special fields like date/time or signature

## Custom Fields V2

### Get Custom Field / Folder By Id

**Endpoint:** `GET /custom-fields/{id}`
**Scope:** `locations/customFields.readonly`
**Token Type:** bearer

<div>
<p> Get Custom Field / Folder By Id.</p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Custom Field By Id

**Endpoint:** `PUT /custom-fields/{id}`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
 <p> Update Custom Field By Id </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomFieldsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Custom Field By Id

**Endpoint:** `DELETE /custom-fields/{id}`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
 <p> Delete Custom Field By Id </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFolderDeleteResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Custom Fields By Object Key

**Endpoint:** `GET /custom-fields/object-key/{objectKey}`
**Scope:** `locations/customFields.readonly`
**Token Type:** bearer

<div>
 <p> Get Custom Fields By Object Key </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `objectKey` | path | `string` | Yes | key of the Object. Must include "custom_objects." prefix for custom objects. Available on the Custom Objects details Page under settings |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Custom Field Folder

**Endpoint:** `POST /custom-fields/folder`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
 <p> Create Custom Field Folder </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateFolder` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `ICustomFieldFolder` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Custom Field Folder Name

**Endpoint:** `PUT /custom-fields/folder/{id}`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
 <p> Create Custom Field Folder </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateFolder` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ICustomFieldFolder` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Custom Field Folder

**Endpoint:** `DELETE /custom-fields/folder/{id}`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
<p> Create Custom Field Folder </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFolderDeleteResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Custom Field

**Endpoint:** `POST /custom-fields/`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

<div>
<p> Create Custom Field </p> 
 </div> 
 :::info
 Only supports Custom Objects and Company (Business) today. Will be extended to other Standard Objects in the future.
 :::

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomFieldsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

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

### CustomFieldSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `field` | `ICustomField` | No | — |

### CustomFieldsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fields` | `array<ICustomField>` | No | Custom Fields for the object. |
| `folders` | `array<ICustomField>` | No | Custom Fields folder for the object. |

### CreateCustomFieldsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Description of the field |
| `placeholder` | `string` | No | Placeholder text for the field |
| `showInForms` | `boolean` | Yes | Whether the field should be shown in forms |
| `options` | `array<OptionDTO>` | No | Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type) |
| `acceptedFormats` | `string` | No | Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all |
| `dataType` | `string` | Yes | Type of field that you are trying to create |
| `fieldKey` | `string` | Yes | Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldKey}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object. |
| `objectKey` | `string` | Yes | The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `maxFileLimit` | `number` | No | Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD. |
| `allowCustomOption` | `boolean` | No | Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records. |
| `parentId` | `string` | Yes | ID of the parent folder |

### CreateFolder

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `objectKey` | `string` | Yes | The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `name` | `string` | Yes | Field name |
| `locationId` | `string` | Yes | Location Id |

### ICustomFieldFolder

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of the object |
| `objectKey` | `string` | Yes | The key for your custom object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets. |
| `locationId` | `string` | Yes | Location Id |
| `name` | `string` | Yes | Field name |

### UpdateFolder

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Field name |
| `locationId` | `string` | Yes | Location Id |

### CustomFolderDeleteResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | Yes | — |
| `id` | `string` | Yes | — |
| `key` | `string` | Yes | — |

### UpdateCustomFieldsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `name` | `string` | No | Field name |
| `description` | `string` | No | Description of the field |
| `placeholder` | `string` | No | Placeholder text for the field |
| `showInForms` | `boolean` | Yes | Whether the field should be shown in forms |
| `options` | `array<OptionDTO>` | No | Options for the field. Important: Providing options will completely replace the existing options array. You must include all existing options alongside any new options you wish to add. Removal of options is not supported through this update. Applicable only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST types. |
| `acceptedFormats` | `string` | No | Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all |
| `maxFileLimit` | `number` | No | Maximum file limit for uploads. Applicable only for fields with a data type of FILE_UPLOAD. |
