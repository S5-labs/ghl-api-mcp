# Associations API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/associations.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Associations API

## Relations

### Create Relation for you associated entities.

**Endpoint:** `POST /associations/relations`
**Scope:** `associations/relation.write`
**Token Type:** bearer

Create Relation.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `createRelationReqDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all relations By record Id

**Endpoint:** `GET /associations/relations/{recordId}`
**Scope:** `associations/relation.readonly`
**Token Type:** bearer

Get all relations by record Id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `recordId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Your Sub Account's ID |
| `skip` | query | `number` | Yes | — |
| `limit` | query | `number` | Yes | — |
| `associationIds` | query | `array<string>` | No | Association Ids |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Relation

**Endpoint:** `DELETE /associations/relations/{relationId}`
**Scope:** `associations/relation.write`
**Token Type:** bearer

Delete Relation

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `relationId` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | Your Sub Account's ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Associations

### Get association key by key name

**Endpoint:** `GET /associations/key/{key_name}`
**Scope:** `associations.readonly`
**Token Type:** bearer

Using this api you can get standard / user defined association by key

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `key_name` | path | `string` | Yes | — |
| `locationId` | query | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get association by object keys

**Endpoint:** `GET /associations/objectKey/{objectKey}`
**Scope:** `associations.readonly`
**Token Type:** bearer

Get association by object keys like contacts, custom objects and opportunities. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `objectKey` | path | `string` | No | — |
| `locationId` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Association By Id

**Endpoint:** `PUT /associations/{associationId}`
**Scope:** `associations.write`
**Token Type:** bearer

Update Association , Allows you to update labels of an associations. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `associationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateAssociationReqDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Association

**Endpoint:** `DELETE /associations/{associationId}`
**Scope:** `associations.write`
**Token Type:** bearer

Delete USER_DEFINED Association By Id, deleting an association will also all the relations for that association

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `associationId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteAssociationsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get association by ID

**Endpoint:** `GET /associations/{associationId}`
**Scope:** `associations.readonly`
**Token Type:** bearer

Using this api you can get SYSTEM_DEFINED / USER_DEFINED association by id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `associationId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Association

**Endpoint:** `POST /associations/`
**Scope:** `associations.write`
**Token Type:** bearer

Allow you to create contact - contact , contact - custom objects associations, will add more in the future.Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-293776/cd0f4122abc04d3)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `createAssociationReqDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get all associations for a sub-account / location

**Endpoint:** `GET /associations/`
**Scope:** `associations.readonly`
**Token Type:** bearer

Get all Associations

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | — |
| `skip` | query | `number` | Yes | — |
| `limit` | query | `number` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetPostSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### createRelationReqDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Your Sub Account's ID |
| `associationId` | `string` | Yes | Association's Id |
| `firstRecordId` | `string` | Yes | First Record's Id. For instance, if you have an association between a contact and a custom object, and you specify the contact as the first object while creating the association, then your firstRecordId would be the contactId |
| `secondRecordId` | `string` | Yes | Second Record's Id.For instance, if you have an association between a contact and a custom object, and you specify the custom object as the second entity while creating the association, then your secondRecordId would be the customObject record Id |

### GetPostSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `id` | `string` | Yes | — |
| `key` | `string` | Yes | First Objects Association Label (custom_objects.children) |
| `firstObjectLabel` | `object` | Yes | First Objects Association Label (custom_objects.children) |
| `firstObjectKey` | `object` | Yes | First Objects Key |
| `secondObjectLabel` | `object` | Yes | Second Object Association Label (contact) |
| `secondObjectKey` | `object` | Yes | Second Objects Key |
| `associationType` | `object` | Yes | Association Type can be USER_DEFINED or SYSTEM_DEFINED |

### createAssociationReqDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `key` | `string` | Yes | Association's Unique key |
| `firstObjectLabel` | `object` | Yes | First Objects Association Label (custom_objects.children) |
| `firstObjectKey` | `object` | Yes | First Objects Key |
| `secondObjectLabel` | `object` | Yes | Second Object Association Label (contact) |
| `secondObjectKey` | `object` | Yes | Second Objects Key |

### UpdateAssociationReqDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstObjectLabel` | `object` | Yes | — |
| `secondObjectLabel` | `object` | Yes | — |

### DeleteAssociationsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deleted` | `boolean` | Yes | Deletion status |
| `id` | `string` | Yes | Association Id |
| `message` | `string` | Yes | — |
