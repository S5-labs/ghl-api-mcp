# Contacts API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/contacts-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Contacts API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

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
| `number` | query | `string` | No | Phone Number — URL-encoded. E.g. +1423164516 → %2B1423164516 |
| `email` | query | `string` | No | Email — URL-encoded. E.g. test+abc@gmail.com → test%2Babc%40gmail.com |

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

### Get Contact

**Endpoint:** `GET /contacts/{contactId}`
**Scope:** `contacts.readonly`
**Token Type:** bearer

Retrieves a contact by its unique identifier.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Unique identifier of the contact |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ContactsByIdSuccessfulResponseDtoV3` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Contact

**Endpoint:** `PUT /contacts/{contactId}`
**Scope:** `contacts.write`
**Token Type:** bearer

Update a contact using contactId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `contactId` | path | `string` | Yes | Unique identifier of the contact |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateContactDtoV3` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpdateContactsSuccessfulResponseDtoV3` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Upsert Contact

**Endpoint:** `POST /contacts/upsert`
**Scope:** `contacts.write`
**Token Type:** bearer

The Upsert API will adhere to the configuration defined under the "Allow Duplicate Contact" setting at the Location level. If the setting is configured to check both Email and Phone, the API will attempt to identify an existing contact based on the priority sequence specified in the setting, and will create or update the contact accordingly.<br/><br/>If two separate contacts already exist—one with the same email and another with the same phone—and an upsert request includes both the email and phone, the API will update the contact that matches the first field in the configured sequence, and ignore the second field to prevent duplication.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpsertContactDtoV3` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UpsertContactsSuccessfulResponseDtoV3` |
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
| `businessId` | path | `string` | Yes | Business Id |
| `limit` | query | `string` | No | Maximum number of records per page (up to 100, default 25) |
| `locationId` | query | `string` | Yes | Location Id |
| `skip` | query | `string` | No | Number of records to skip |
| `query` | query | `string` | No | Search query (name, email, phone) |
| `startAfter` | query | `array<string>` | No | Cursor for pagination (comma-separated name,id pair) |

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

Create a new contact

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateContactDtoV3` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateContactsSuccessfulResponseDtoV3` |
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
| `campaignId` | path | `string` | Yes | Campaign Id |

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
| `campaignId` | path | `string` | Yes | Campaign Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateDeleteCantactsCampaignsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Remove Contact From Every Campaign

**Endpoint:** `DELETE /contacts/{contactId}/campaigns/remove-all`
**Scope:** `contacts.write`
**Token Type:** bearer

Removes the contact from every campaign it is enrolled in.

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
| `id` | `string` | No | Unique identifier of the task |
| `title` | `string` | No | Title of the task |
| `body` | `string` | No | Body or description of the task |
| `assignedTo` | `string` | No | User Id to whom the task is assigned |
| `dueDate` | `string` | No | Due date of the task (ISO 8601 format) |
| `completed` | `boolean` | No | Whether the task is completed |
| `contactId` | `string` | No | Contact Id associated with the task |

### TasksListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tasks` | `array<TaskSchema>` | No | List of tasks |

### TaskByIsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `task` | `TaskSchema` | No | Task details |

### CreateTaskParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Title of the task |
| `body` | `string` | No | Body or description of the task |
| `dueDate` | `string` | Yes | Due date of the task (ISO 8601 format) |
| `completed` | `boolean` | Yes | Whether the task is completed |
| `assignedTo` | `string` | No | User Id to whom the task is assigned |

### UpdateTaskBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title of the task |
| `body` | `string` | No | Body or description of the task |
| `dueDate` | `string` | No | Due date of the task (ISO 8601 format) |
| `completed` | `boolean` | No | Whether the task is completed |
| `assignedTo` | `string` | No | User Id to whom the task is assigned |

### UpdateTaskStatusParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed` | `boolean` | Yes | Whether the task is completed |

### DeleteTaskSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the task was successfully deleted |
| `succeded` | `boolean` | No | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |

### GetEventSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the appointment |
| `calendarId` | `string` | No | Calendar Id associated with the appointment |
| `status` | `string` | No | Status of the appointment |
| `title` | `string` | No | Title of the appointment |
| `assignedUserId` | `string` | No | User Id assigned to the appointment |
| `notes` | `string` | No | Notes for the appointment |
| `startTime` | `string` | No | Start time of the appointment |
| `endTime` | `string` | No | End time of the appointment |
| `address` | `string` | No | Address for the appointment |
| `locationId` | `string` | No | Location Id of the appointment |
| `contactId` | `string` | No | Contact Id associated with the appointment |
| `groupId` | `string` | No | Group Id of the appointment |
| `appointmentStatus` | `string` | No | Appointment status |
| `users` | `array<string>` | No | List of user Ids assigned to the appointment |
| `dateAdded` | `string` | No | Date the appointment was created |
| `dateUpdated` | `string` | No | Date the appointment was last updated |
| `assignedResources` | `array<string>` | No | List of resource Ids assigned to the appointment |

### GetEventsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `array<GetEventSchema>` | No | List of appointments |

### TagsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | Yes | List of tags to add or remove |

### CreateAddTagSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | No | Current tags on the contact after the operation |

### CreateDeleteTagSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<string>` | No | Current tags on the contact after the operation |

### GetNoteSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the note |
| `body` | `string` | No | Body content of the note |
| `userId` | `string` | No | User Id of the note author |
| `dateAdded` | `string` | No | Date the note was added (ISO 8601 format) |
| `contactId` | `string` | No | Contact Id associated with the note |
| `title` | `string` | No | Title of the note |
| `color` | `string` | No | Hex color code for the note |
| `pinned` | `boolean` | No | Whether the note is pinned |

### GetNotesListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `array<GetNoteSchema>` | No | List of notes |

### NotesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | User Id of the note author |
| `body` | `string` | Yes | Body content of the note |
| `title` | `string` | No | Title of the note |
| `color` | `string` | No | Hex color code for the note |
| `pinned` | `boolean` | No | Whether the note is pinned |

### GetCreateUpdateNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `GetNoteSchema` | No | Note details |

### UpdateNoteDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | User Id of the note author |
| `body` | `string` | No | Body content of the note |
| `title` | `string` | No | Title of the note |
| `color` | `string` | No | Hex color code for the note |
| `pinned` | `boolean` | No | Whether the note is pinned |

### DeleteNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the note was successfully deleted |
| `succeded` | `boolean` | No | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |

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
| `succeeded` | `boolean` | Yes | Indicates if the operation was successful |
| `succeded` | `boolean` | Yes | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |
| `errorCount` | `number` | Yes | Number of errors encountered during the operation |
| `responses` | `array<string>` | Yes | Responses for each contact processed |

### ContactsBusinessUpdate

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `ids` | `array<string>` | Yes | List of contact Ids to update (maximum 50) |
| `businessId` | `string` | Yes | Business Id to assign to contacts. Pass null to remove business association. |

### ContactsBulkUpateResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Whether the bulk update was successful |
| `ids` | `array<string>` | Yes | List of contact Ids that were updated |

### DeleteContactsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the delete operation succeeded |
| `succeded` | `boolean` | No | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |

### customFieldsInputArraySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `array<string>` | No | Array value for the custom field (preferred). |
| `field_value` | `array<string>` | No | Deprecated. Use `fieldValue` instead. |

### customFieldsInputObjectSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `object` | No | Object value for the custom field (preferred). |
| `field_value` | `object` | No | Deprecated. Use `fieldValue` instead. |

### customFieldsInputStringSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Value for the custom field (preferred). |
| `field_value` | `string` | No | Deprecated. Use `fieldValue` instead. |

### TextField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Text value for the custom field (preferred). |
| `field_value` | `string` | No | Deprecated. Use `fieldValue` instead. |

### LargeTextField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Large text value for the custom field (preferred). |
| `field_value` | `string` | No | Deprecated. Use `fieldValue` instead. |

### SingleSelectField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Selected option value for the custom field (preferred). |
| `field_value` | `string` | No | Deprecated. Use `fieldValue` instead. |

### RadioField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `string` | No | Selected radio option value for the custom field (preferred). |
| `field_value` | `string` | No | Deprecated. Use `fieldValue` instead. |

### NumericField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `object` | No | Numeric value for the custom field (preferred). |
| `field_value` | `object` | No | Deprecated. Use `fieldValue` instead. |

### MonetoryField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `object` | No | Monetary value for the custom field (preferred). |
| `field_value` | `object` | No | Deprecated. Use `fieldValue` instead. |

### CheckboxField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `array<string>` | No | Array of selected checkbox values for the custom field (preferred). |
| `field_value` | `array<string>` | No | Deprecated. Use `fieldValue` instead. |

### MultiSelectField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `array<string>` | No | Array of selected values for the custom field (preferred). |
| `field_value` | `array<string>` | No | Deprecated. Use `fieldValue` instead. |

### FileField

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Pass either `id` or `key` of custom field |
| `key` | `string` | No | Pass either `id` or `key` of custom field |
| `fieldValue` | `object` | No | File upload value — a map of UUID to file metadata and download URL (preferred). |
| `field_value` | `object` | No | Deprecated. Use `fieldValue` instead. |

### CustomFieldSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the custom field |
| `value` | `string` | No | Value of the custom field |

### AttributionSource

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `url` | `string` | Yes | Attribution source type |
| `campaign` | `string` | No | Campaign name |
| `utmSource` | `string` | No | UTM source parameter |
| `utmMedium` | `string` | No | UTM medium parameter |
| `utmContent` | `string` | No | UTM content parameter |
| `referrer` | `string` | No | Referrer URL |
| `campaignId` | `string` | No | Campaign Id |
| `fbclid` | `string` | No | Facebook click Id |
| `gclid` | `string` | No | Google click Id |
| `msclikid` | `string` | No | Microsoft click Id |
| `dclid` | `string` | No | DoubleClick click Id |
| `fbc` | `string` | No | Facebook browser Id |
| `fbp` | `string` | No | Facebook pixel Id |
| `fbEventId` | `string` | No | Facebook event Id |
| `userAgent` | `string` | No | Browser user agent string |
| `ip` | `string` | No | IP address of the visitor |
| `medium` | `string` | No | Attribution medium (e.g. survey, funnel) |
| `mediumId` | `string` | No | Id of the attribution medium |

### DndSettingSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | Do Not Disturb status for this channel |
| `message` | `string` | No | Custom message associated with the DND setting |
| `code` | `string` | No | DND code or reason |

### DndSettingsSchemaV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `call` | `DndSettingSchema` | No | DND settings for phone calls |
| `email` | `DndSettingSchema` | No | DND settings for email |
| `sms` | `DndSettingSchema` | No | DND settings for SMS |
| `whatsApp` | `DndSettingSchema` | No | DND settings for WhatsApp |
| `gmb` | `DndSettingSchema` | No | DND settings for Google My Business |
| `fb` | `DndSettingSchema` | No | DND settings for Facebook |

### GetContactByIdSchemaV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the contact |
| `name` | `string` | No | Full name of the contact |
| `locationId` | `string` | No | Location Id the contact belongs to |
| `firstName` | `string` | No | First name of the contact |
| `lastName` | `string` | No | Last name of the contact |
| `email` | `string` | No | Email address of the contact |
| `emailLowerCase` | `string` | No | Lowercase version of the contact email |
| `timezone` | `string` | No | Timezone of the contact |
| `companyName` | `string` | No | Company name of the contact |
| `phone` | `string` | No | Phone number of the contact |
| `dnd` | `boolean` | No | Whether Do Not Disturb is enabled for the contact |
| `type` | `string` | No | Contact type classification |
| `source` | `string` | No | Source from which the contact was created |
| `assignedTo` | `string` | No | User Id the contact is assigned to |
| `address1` | `string` | No | Street address of the contact |
| `city` | `string` | No | City of the contact |
| `state` | `string` | No | State of the contact |
| `country` | `string` | No | Country of the contact |
| `postalCode` | `string` | No | Postal code of the contact |
| `website` | `string` | No | Website URL of the contact |
| `tags` | `array<string>` | No | List of tags associated with the contact |
| `dateOfBirth` | `string` | No | Date of birth of the contact (YYYY-MM-DD) |
| `dateAdded` | `string` | No | Date and time the contact was added (ISO 8601) |
| `dateUpdated` | `string` | No | Date and time the contact was last updated (ISO 8601) |
| `attachments` | `string` | No | List of attachment URLs associated with the contact |
| `ssn` | `string` | No | Social Security Number (if applicable) |
| `keyword` | `string` | No | Search keyword associated with the contact |
| `firstNameLowerCase` | `string` | No | Lowercase version of the contact first name |
| `fullNameLowerCase` | `string` | No | Lowercase version of the contact full name |
| `lastNameLowerCase` | `string` | No | Lowercase version of the contact last name |
| `lastActivity` | `string` | No | Date and time of last activity on this contact (ISO 8601) |
| `customFields` | `array<CustomFieldSchema>` | No | List of custom field values for the contact |
| `businessId` | `string` | No | Business Id the contact is associated with |
| `attributionSource` | `AttributionSource` | No | First-touch attribution source details for the contact |
| `lastAttributionSource` | `AttributionSource` | No | Last-touch attribution source details for the contact |
| `visitorId` | `string` | No | visitorId is the Unique ID assigned to each Live chat visitor. |
| `dndSettings` | `DndSettingsSchemaV3` | No | Per-channel DND settings for the contact |

### ContactsByIdSuccessfulResponseDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `GetContactByIdSchemaV3` | No | Contact details |

### InboundDndSettingSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `status` | `string` | Yes | Inbound DND status for this channel |
| `message` | `string` | No | Custom message associated with the inbound DND setting |

### InboundDndSettingsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `all` | `InboundDndSettingSchema` | No | Inbound DND settings applied to all channels |

### CreateContactDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | First name of the contact |
| `lastName` | `string` | No | Last name of the contact |
| `name` | `string` | No | Full name of the contact |
| `email` | `string` | No | Email address of the contact |
| `locationId` | `string` | Yes | Location Id the contact should be created under |
| `gender` | `string` | No | Gender of the contact |
| `phone` | `string` | No | Phone number of the contact |
| `address1` | `string` | No | Street address of the contact |
| `city` | `string` | No | City of the contact |
| `state` | `string` | No | State of the contact |
| `postalCode` | `string` | No | Postal code of the contact |
| `website` | `string` | No | Website URL of the contact |
| `timezone` | `string` | No | Timezone of the contact |
| `dnd` | `boolean` | No | Whether Do Not Disturb is enabled for the contact |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | Inbound DND settings per channel for the contact |
| `tags` | `array<string>` | No | List of tags to assign to the contact |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | List of custom field values to assign to the contact |
| `source` | `string` | No | Source from which the contact was created |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | Country code of the contact (ISO 3166-1 alpha-2) |
| `companyName` | `string` | No | Company name of the contact |
| `assignedTo` | `string` | No | User's Id |
| `dndSettings` | `DndSettingsSchemaV3` | No | Per-channel DND settings for the contact |

### CreateContactsSuccessfulResponseDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `GetContactByIdSchemaV3` | No | Contact details |

### UpdateContactDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | First name of the contact |
| `lastName` | `string` | No | Last name of the contact |
| `name` | `string` | No | Full name of the contact |
| `email` | `string` | No | Email address of the contact |
| `phone` | `string` | No | Phone number of the contact |
| `address1` | `string` | No | Street address of the contact |
| `city` | `string` | No | City of the contact |
| `state` | `string` | No | State of the contact |
| `postalCode` | `string` | No | Postal code of the contact |
| `website` | `string` | No | Website URL of the contact |
| `timezone` | `string` | No | Timezone of the contact |
| `dnd` | `boolean` | No | Whether Do Not Disturb is enabled for the contact |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | Inbound DND settings per channel for the contact |
| `tags` | `array<string>` | No | This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead. |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | List of custom field values to assign to the contact |
| `source` | `string` | No | Source from which the contact was updated |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | Country code of the contact (ISO 3166-1 alpha-2), Refer country list from documentaion, documentation has list of all countries |
| `assignedTo` | `string` | No | User's Id |
| `dndSettings` | `DndSettingsSchemaV3` | No | Per-channel DND settings for the contact |

### UpdateContactsSuccessfulResponseDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the update operation succeeded |
| `contact` | `GetContactByIdSchemaV3` | No | Contact details |

### UpsertContactDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | No | First name of the contact |
| `lastName` | `string` | No | Last name of the contact |
| `name` | `string` | No | Full name of the contact |
| `email` | `string` | No | Email address of the contact |
| `locationId` | `string` | Yes | Location Id the contact should be created under |
| `gender` | `string` | No | Gender of the contact |
| `phone` | `string` | No | Phone number of the contact |
| `address1` | `string` | No | Street address of the contact |
| `city` | `string` | No | City of the contact |
| `state` | `string` | No | State of the contact |
| `postalCode` | `string` | No | Postal code of the contact |
| `website` | `string` | No | Website URL of the contact |
| `timezone` | `string` | No | Timezone of the contact |
| `dnd` | `boolean` | No | Whether Do Not Disturb is enabled for the contact |
| `inboundDndSettings` | `InboundDndSettingsSchema` | No | Inbound DND settings per channel for the contact |
| `tags` | `array<string>` | No | This field will overwrite all current tags associated with the contact. To update a tags, it is recommended to use the Add Tag or Remove Tag API instead. |
| `customFields` | `array<TextField or LargeTextField or SingleSelectField or RadioField or NumericField or MonetoryField or CheckboxField or MultiSelectField or FileField>` | No | List of custom field values to assign to the contact |
| `source` | `string` | No | Source from which the contact was created |
| `dateOfBirth` | `object` | No | The birth date of the contact. Supported formats: YYYY/MM/DD, MM/DD/YYYY, YYYY-MM-DD, MM-DD-YYYY, YYYY.MM.DD, MM.DD.YYYY, YYYY_MM_DD, MM_DD_YYYY |
| `country` | `string` | No | Country code of the contact (ISO 3166-1 alpha-2) |
| `companyName` | `string` | No | Company name of the contact |
| `assignedTo` | `string` | No | User's Id |
| `createNewIfDuplicateAllowed` | `boolean` | No | Controls whether to create a new contact or update an existing duplicate. **Scenario 1:** If this value is `true` and the location allows duplicate contacts, a new contact will be created immediately without checking for duplicates. **Scenario 2:** If this value is `true` but the location does not allow duplicate contacts, this field is ignored and the normal upsert behavior applies: the API will search for an existing duplicate contact, update it if found, or create a new contact if not found. **Scenario 3:** If this value is `false` or not provided, the normal upsert behavior applies regardless of the location's duplicate contact setting. |
| `dndSettings` | `DndSettingsSchemaV3` | No | Per-channel DND settings for the contact |

### UpsertContactsSuccessfulResponseDtoV3

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `new` | `boolean` | No | Whether a new contact was created (true) or an existing one was updated (false) |
| `contact` | `GetContactByIdSchemaV3` | No | Contact details |
| `traceId` | `string` | No | Unique trace identifier for this operation |

### ContactsSearchSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Unique identifier of the contact |
| `locationId` | `string` | No | Location Id the contact belongs to |
| `email` | `string` | No | Email address of the contact |
| `timezone` | `string` | No | Timezone of the contact |
| `country` | `string` | No | Country of the contact |
| `source` | `string` | No | Source from which the contact was created |
| `dateAdded` | `string` | No | Date and time the contact was added (ISO 8601) |
| `customFields` | `array<CustomFieldSchema>` | No | List of custom field values for the contact |
| `tags` | `array<string>` | No | List of tags associated with the contact |
| `businessId` | `string` | No | Business Id the contact is associated with |
| `attributions` | `array<AttributionSource>` | No | List of attribution sources for the contact |
| `followers` | `array<string>` | No | List of user Ids following this contact |

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
| `contacts` | `array<ContactsSearchSchema>` | No | List of contacts associated with the business |
| `count` | `number` | No | Total number of contacts matching the query |

### FollowersDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | Yes | List of user Ids to follow or unfollow the contact |

### CreateAddFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | Current followers after the operation |
| `followersAdded` | `array<string>` | No | Followers that were added |

### DeleteFollowersSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `followers` | `array<string>` | No | Current followers after the operation |
| `followersRemoved` | `array<string>` | No | Followers that were removed |

### AddContactToCampaignDto

Type: `object`

### CreateDeleteCantactsCampaignsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the campaign operation was successful |
| `succeded` | `boolean` | No | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |

### CreateWorkflowDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eventStartTime` | `string` | No | Start time of the workflow event (ISO 8601 format) |

### ContactsWorkflowSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | Whether the workflow operation was successful |
| `succeded` | `boolean` | No | Legacy misspelling of `succeeded`. Deprecated; use `succeeded`. |
