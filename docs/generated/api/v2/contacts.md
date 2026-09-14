# Contacts API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/contacts.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Contacts API

## Search

### Search Contacts

**Endpoint:** `POST /contacts/search`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Search contacts based on combinations of advanced filters. Documentation Link - https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad

[Additional documentation](https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `SearchBodyV2DTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Success | `—` |
| `400` | Bad Request | `—` |
| `401` | Unauthorized | `—` |

### Get Duplicate Contact

**Endpoint:** `GET /contacts/search/duplicate`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Duplicate Contact.<br/><br/>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `number` | query | `string` | No | Phone Number - Pass in URL Encoded form. i.e +1423164516 will become `%2B1423164516` |
| `email` | query | `string` | No | Email - Pass in URL Encoded form. i.e test+abc@gmail.com will become `test%2Babc%40gmail.com` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Tasks

### Get all Tasks

**Endpoint:** `GET /contacts/{contactId}/tasks`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get all Tasks

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `TasksListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Task

**Endpoint:** `POST /contacts/{contactId}/tasks`
**Scope:** `contacts.write`
**Token Type:** bearer

Create Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateTaskParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `TaskByIsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Task

**Endpoint:** `GET /contacts/{contactId}/tasks/{taskId}`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `taskId` | path | `string` | Yes | Task Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `TaskByIsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Task

**Endpoint:** `PUT /contacts/{contactId}/tasks/{taskId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Update Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `taskId` | path | `string` | Yes | Task Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateTaskBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `TaskByIsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Task

**Endpoint:** `DELETE /contacts/{contactId}/tasks/{taskId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Delete Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `taskId` | path | `string` | Yes | Task Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteTaskSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Task Completed

**Endpoint:** `PUT /contacts/{contactId}/tasks/{taskId}/completed`
**Scope:** `contacts.write`
**Token Type:** bearer

Update Task Completed

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `taskId` | path | `string` | Yes | Task Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateTaskStatusParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `TaskByIsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Appointments

### Get Appointments for Contact

**Endpoint:** `GET /contacts/{contactId}/appointments`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Appointments for Contact

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetEventsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Tags

### Add Tags

**Endpoint:** `POST /contacts/{contactId}/tags`
**Scope:** `contacts.write`
**Token Type:** bearer

Add Tags

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `TagsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateAddTagSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Tags

**Endpoint:** `DELETE /contacts/{contactId}/tags`
**Scope:** `contacts.write`
**Token Type:** bearer

Remove Tags

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `TagsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateDeleteTagSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Notes

### Get All Notes

**Endpoint:** `GET /contacts/{contactId}/notes`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get All Notes

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetNotesListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Note

**Endpoint:** `POST /contacts/{contactId}/notes`
**Scope:** `contacts.write`
**Token Type:** bearer

Create Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `NotesDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GetCreateUpdateNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Note

**Endpoint:** `GET /contacts/{contactId}/notes/{id}`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `id` | path | `string` | Yes | Note Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCreateUpdateNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Note

**Endpoint:** `PUT /contacts/{contactId}/notes/{id}`
**Scope:** `contacts.write`
**Token Type:** bearer

Update Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `id` | path | `string` | Yes | Note Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateNoteDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCreateUpdateNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Note

**Endpoint:** `DELETE /contacts/{contactId}/notes/{id}`
**Scope:** `contacts.write`
**Token Type:** bearer

Delete Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `id` | path | `string` | Yes | Note Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Bulk

### Update Contacts Tags

**Endpoint:** `POST /contacts/bulk/tags/update/{type}`

Allows you to update tags to multiple contacts at once, you can add or remove tags from the contacts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateTagsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `UpdateTagsResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Add/Remove Contacts From Business

**Endpoint:** `POST /contacts/bulk/business`

Add/Remove Contacts From Business . Passing a `null` businessId will remove the businessId from the contacts

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ContactsBusinessUpdate` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsBulkUpateResponse` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Contacts

### Get Contact

**Endpoint:** `GET /contacts/{contactId}`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Contact

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsByIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Contact

**Endpoint:** `PUT /contacts/{contactId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateContactDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateContactsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Contact

**Endpoint:** `DELETE /contacts/{contactId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Delete Contact

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteContactsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert Contact

**Endpoint:** `POST /contacts/upsert`
**Scope:** `contacts.write`
**Token Type:** bearer

Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a><br/><br/>The Upsert API will adhere to the configuration defined under the “Allow Duplicate Contact” setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.<br/><br/>If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertContactDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpsertContactsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Contacts By BusinessId

**Endpoint:** `GET /contacts/business/{businessId}`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Get Contacts By BusinessId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `businessId` | path | `string` | Yes | — |
| `limit` | query | `string` | No | — |
| `locationId` | query | `string` | Yes | — |
| `skip` | query | `string` | No | — |
| `query` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsSearchSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Contact

**Endpoint:** `POST /contacts/`
**Scope:** `contacts.write`
**Token Type:** bearer

Please find the list of acceptable values for the `country` field  <a href="https://highlevel.stoplight.io/docs/integrations/ZG9jOjI4MzUzNDIy-country-list" target="_blank">here</a>

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateContactDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateContactsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Contacts

**Endpoint:** `GET /contacts/`
**Scope:** `contacts.readonly`
**Token Type:** bearer
**Deprecated:** Yes

Get Contacts

 **Note:** This API endpoint is deprecated. Please use the [Search Contacts](https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced) endpoint instead.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `startAfterId` | query | `string` | No | Start After Id |
| `startAfter` | query | `number` | No | Start Afte |
| `query` | query | `string` | No | Contact Query |
| `limit` | query | `number` | No | Limit Per Page records count. will allow maximum up to 100 and default will be 20 |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsSearchSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Followers

### Add Followers

**Endpoint:** `POST /contacts/{contactId}/followers`
**Scope:** `contacts.write`
**Token Type:** bearer

Add Followers

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FollowersDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateAddFollowersSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Followers

**Endpoint:** `DELETE /contacts/{contactId}/followers`
**Scope:** `contacts.write`
**Token Type:** bearer

Remove Followers

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `FollowersDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteFollowersSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Campaigns

### Add Contact to Campaign

**Endpoint:** `POST /contacts/{contactId}/campaigns/{campaignId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Add contact to Campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `campaignId` | path | `string` | Yes | Campaigns Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AddContactToCampaignDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateDeleteCantactsCampaignsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Contact From Campaign

**Endpoint:** `DELETE /contacts/{contactId}/campaigns/{campaignId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Remove Contact From Campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `campaignId` | path | `string` | Yes | Campaigns Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateDeleteCantactsCampaignsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Contact From Every Campaign

**Endpoint:** `DELETE /contacts/{contactId}/campaigns/removeAll`
**Scope:** `contacts.write`
**Token Type:** bearer

Remove Contact From Every Campaign

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateDeleteCantactsCampaignsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Workflow

### Add Contact to Workflow

**Endpoint:** `POST /contacts/{contactId}/workflow/{workflowId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Add Contact to Workflow

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `workflowId` | path | `string` | Yes | Workflow Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateWorkflowDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsWorkflowSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Contact from Workflow

**Endpoint:** `DELETE /contacts/{contactId}/workflow/{workflowId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Delete Contact from Workflow

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Contact Id |
| `workflowId` | path | `string` | Yes | Workflow Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateWorkflowDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsWorkflowSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### SearchBodyV2DTO

Type: `object`

### TaskSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `title` | `string` | No | — |
| `body` | `string` | No | — |
| `assignedTo` | `string` | No | — |
| `dueDate` | `string` | No | — |
| `completed` | `boolean` | No | — |
| `contactId` | `string` | No | — |

### TasksListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tasks` | `array<TaskSchema>` | No | — |

### TaskByIsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task` | `TaskSchema` | No | — |

### CreateTaskParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | — |
| `body` | `string` | No | — |
| `dueDate` | `string` | Yes | — |
| `completed` | `boolean` | Yes | — |
| `assignedTo` | `string` | No | — |

### UpdateTaskBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | — |
| `body` | `string` | No | — |
| `dueDate` | `string` | No | — |
| `completed` | `boolean` | No | — |
| `assignedTo` | `string` | No | — |

### UpdateTaskStatusParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `boolean` | Yes | — |

### DeleteTaskSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### GetEventSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `calendarId` | `string` | No | — |
| `status` | `string` | No | — |
| `title` | `string` | No | — |
| `assignedUserId` | `string` | No | — |
| `notes` | `string` | No | — |
| `startTime` | `string` | No | — |
| `endTime` | `string` | No | — |
| `address` | `string` | No | — |
| `locationId` | `string` | No | — |
| `contactId` | `string` | No | — |
| `groupId` | `string` | No | — |
| `appointmentStatus` | `string` | No | — |
| `users` | `array<string>` | No | — |
| `dateAdded` | `string` | No | — |
| `dateUpdated` | `string` | No | — |
| `assignedResources` | `array<string>` | No | — |

### GetEventsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `array<GetEventSchema>` | No | — |

### TagsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | Yes | — |

### CreateAddTagSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | No | — |

### CreateDeleteTagSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | No | — |

### GetNoteSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `body` | `string` | No | — |
| `userId` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `contactId` | `string` | No | — |
| `title` | `string` | No | — |
| `color` | `string` | No | — |
| `pinned` | `boolean` | No | — |

### GetNotesListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `array<GetNoteSchema>` | No | — |

### NotesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | — |
| `body` | `string` | Yes | — |
| `title` | `string` | No | — |
| `color` | `string` | No | — |
| `pinned` | `boolean` | No | — |

### GetCreateUpdateNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `GetNoteSchema` | No | — |

### UpdateNoteDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | — |
| `body` | `string` | No | — |
| `title` | `string` | No | — |
| `color` | `string` | No | — |
| `pinned` | `boolean` | No | — |

### DeleteNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### UpdateTagsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contacts` | `array<string>` | Yes | list of contact ids to be processed |
| `tags` | `array<string>` | Yes | list of tags to be added or removed |
| `locationId` | `string` | Yes | location id from where the bulk request is executed |
| `removeAllTags` | `boolean` | No | Option to implement remove all tags. if true, all tags will be removed from the contacts. Can only be used with remove type. |

### UpdateTagsResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | Yes | Indicates if the operation was successful |
| `errorCount` | `number` | Yes | Number of errors encountered during the operation |
| `responses` | `array<string>` | Yes | Responses for each contact processed |

### ContactsBusinessUpdate

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `ids` | `array<string>` | Yes | — |
| `businessId` | `string` | Yes | — |

### ContactsBulkUpateResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | — |
| `ids` | `array<string>` | Yes | — |

### DndSettingSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | — |
| `message` | `string` | No | — |
| `code` | `string` | No | — |

### DndSettingsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `Call` | `DndSettingSchema` | No | — |
| `Email` | `DndSettingSchema` | No | — |
| `SMS` | `DndSettingSchema` | No | — |
| `WhatsApp` | `DndSettingSchema` | No | — |
| `GMB` | `DndSettingSchema` | No | — |
| `FB` | `DndSettingSchema` | No | — |

### CustomFieldSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `value` | `string` | No | — |

### AttributionSource

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | — |
| `campaign` | `string` | No | — |
| `utmSource` | `string` | No | — |
| `utmMedium` | `string` | No | — |
| `utmContent` | `string` | No | — |
| `referrer` | `string` | No | — |
| `campaignId` | `string` | No | — |
| `fbclid` | `string` | No | — |
| `gclid` | `string` | No | — |
| `msclikid` | `string` | No | — |
| `dclid` | `string` | No | — |
| `fbc` | `string` | No | — |
| `fbp` | `string` | No | — |
| `fbEventId` | `string` | No | — |
| `userAgent` | `string` | No | — |
| `ip` | `string` | No | — |
| `medium` | `string` | No | — |
| `mediumId` | `string` | No | — |

### GetContectByIdSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `locationId` | `string` | No | — |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `email` | `string` | No | — |
| `emailLowerCase` | `string` | No | — |
| `timezone` | `string` | No | — |
| `companyName` | `string` | No | — |
| `phone` | `string` | No | — |
| `dnd` | `boolean` | No | — |
| `dndSettings` | `DndSettingsSchema` | No | — |
| `type` | `string` | No | — |
| `source` | `string` | No | — |
| `assignedTo` | `string` | No | — |
| `address1` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `country` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `tags` | `array<string>` | No | — |
| `dateOfBirth` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `dateUpdated` | `string` | No | — |
| `attachments` | `string` | No | — |
| `ssn` | `string` | No | — |
| `keyword` | `string` | No | — |
| `firstNameLowerCase` | `string` | No | — |
| `fullNameLowerCase` | `string` | No | — |
| `lastNameLowerCase` | `string` | No | — |
| `lastActivity` | `string` | No | — |
| `customFields` | `array<CustomFieldSchema>` | No | — |
| `businessId` | `string` | No | — |
| `attributionSource` | `AttributionSource` | No | — |
| `lastAttributionSource` | `AttributionSource` | No | — |
| `visitorId` | `string` | No | visitorId is the Unique ID assigned to each Live chat visitor. |

### ContactsByIdSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `GetContectByIdSchema` | No | — |

### customFieldsInputArraySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `array<string>` | No | — |

### customFieldsInputObjectSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `object` | No | — |

### customFieldsInputStringSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `field_value` | `string` | No | — |

### TextField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `string` | No | — |

### LargeTextField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `string` | No | — |

### SingleSelectField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `string` | No | — |

### RadioField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `string` | No | — |

### NumericField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `object` | No | — |

### MonetoryField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `object` | No | — |

### CheckboxField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `array<string>` | No | — |

### MultiSelectField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `array<string>` | No | — |

### FileField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | — |
| `key` | `string` | No | — |
| `field_value` | `object` | No | — |

### InboundDndSettingSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | — |
| `message` | `string` | No | — |

### InboundDndSettingsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `InboundDndSettingSchema` | No | — |

### CreateContactDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `name` | `string` | No | — |
| `email` | `string` | No | — |
| `locationId` | `string` | Yes | — |
| `gender` | `string` | No | — |
| `phone` | `string` | No | — |
| `address1` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `timezone` | `string` | No | — |
| `dnd` | `boolean` | No | — |
| `dndSettings` | `DndSettingsSchema` | No | — |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | — |
| `tags` | `array<string>` | No | — |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | — |
| `source` | `string` | No | — |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | — |
| `companyName` | `string` | No | — |
| `assignedTo` | `string` | No | User's Id |

### CreateContactSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `dateUpdated` | `string` | No | — |
| `deleted` | `boolean` | No | — |
| `tags` | `array<string>` | No | — |
| `type` | `string` | No | — |
| `customFields` | `array<CustomFieldSchema>` | No | — |
| `locationId` | `string` | No | — |
| `firstName` | `string` | No | — |
| `firstNameLowerCase` | `string` | No | — |
| `fullNameLowerCase` | `string` | No | — |
| `lastName` | `string` | No | — |
| `lastNameLowerCase` | `string` | No | — |
| `email` | `string` | No | — |
| `emailLowerCase` | `string` | No | — |
| `bounceEmail` | `boolean` | No | — |
| `unsubscribeEmail` | `boolean` | No | — |
| `dnd` | `boolean` | No | — |
| `dndSettings` | `DndSettingsSchema` | No | — |
| `phone` | `string` | No | — |
| `address1` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `country` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `source` | `string` | No | — |
| `companyName` | `string` | No | — |
| `dateOfBirth` | `string` | No | — |
| `birthMonth` | `number` | No | — |
| `birthDay` | `number` | No | — |
| `lastSessionActivityAt` | `string` | No | — |
| `offers` | `array<string>` | No | — |
| `products` | `array<string>` | No | — |
| `businessId` | `string` | No | — |
| `assignedTo` | `string` | No | User's Id |

### CreateContactsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `CreateContactSchema` | No | — |

### UpdateContactDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `name` | `string` | No | — |
| `email` | `string` | No | — |
| `phone` | `string` | No | — |
| `address1` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `timezone` | `string` | No | — |
| `dnd` | `boolean` | No | — |
| `dndSettings` | `DndSettingsSchema` | No | — |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | — |
| `tags` | `array<string>` | No | This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead. |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | — |
| `source` | `string` | No | — |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | — |
| `assignedTo` | `string` | No | User's Id |

### UpdateContactsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |
| `contact` | `GetContectByIdSchema` | No | — |

### UpsertContactDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `name` | `string` | No | — |
| `email` | `string` | No | — |
| `locationId` | `string` | Yes | — |
| `gender` | `string` | No | — |
| `phone` | `string` | No | — |
| `address1` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `timezone` | `string` | No | — |
| `dnd` | `boolean` | No | — |
| `dndSettings` | `DndSettingsSchema` | No | — |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | — |
| `tags` | `array<string>` | No | This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead. |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | — |
| `source` | `string` | No | — |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | — |
| `companyName` | `string` | No | — |
| `assignedTo` | `string` | No | User's Id |
| `createNewIfDuplicateAllowed` | `boolean` | No | Controls whether to create a new contact or update an existing duplicate. **Scenario 1:** If this value is `true` and the location allows duplicate contacts, a new contact will be created immediately without checking for duplicates. **Scenario 2:** If this value is `true` but the location does not allow duplicate contacts, this field is ignored and the normal upsert behavior applies: the API will search for an existing duplicate contact, update it if found, or create a new contact if not found. **Scenario 3:** If this value is `false` or not provided, the normal upsert behavior applies regardless of the location's duplicate contact setting. |

### UpsertContactsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `new` | `boolean` | No | — |
| `contact` | `GetContectByIdSchema` | No | — |
| `traceId` | `string` | No | — |

### DeleteContactsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### ContactsSearchSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `locationId` | `string` | No | — |
| `email` | `string` | No | — |
| `timezone` | `string` | No | — |
| `country` | `string` | No | — |
| `source` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `customFields` | `array<CustomFieldSchema>` | No | — |
| `tags` | `array<string>` | No | — |
| `businessId` | `string` | No | — |
| `attributions` | `array<AttributionSource>` | No | — |
| `followers` | `array<string>` | No | — |

### ContactsMetaSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total` | `number` | No | — |
| `nextPageUrl` | `string` | No | — |
| `startAfterId` | `string` | No | — |
| `startAfter` | `number` | No | — |
| `currentPage` | `number` | No | — |
| `nextPage` | `number` | No | — |
| `prevPage` | `number` | No | — |

### ContactsSearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contacts` | `array<ContactsSearchSchema>` | No | — |
| `count` | `number` | No | — |

### FollowersDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | Yes | — |

### CreateAddFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | — |
| `followersAdded` | `array<string>` | No | — |

### DeleteFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | — |
| `followersRemoved` | `array<string>` | No | — |

### AddContactToCampaignDto

Type: `object`

### CreateDeleteCantactsCampaignsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### CreateWorkflowDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventStartTime` | `string` | No | — |

### ContactsWorkflowSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |
