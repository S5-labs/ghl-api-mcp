# Calendars API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/calendars.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Calendars API

## Calendar Groups

### Get Groups

**Endpoint:** `GET /calendars/groups`
**Scope:** `calendars/groups.readonly`
**Token Type:** bearer

Get all calendar groups in a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AllGroupsSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Calendar Group

**Endpoint:** `POST /calendars/groups`
**Scope:** `calendars/groups.write`
**Token Type:** bearer

Create Calendar Group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `GroupCreateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `GroupCreateSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Validate group slug

**Endpoint:** `POST /calendars/groups/validate-slug`
**Scope:** `calendars/groups.write`
**Token Type:** bearer

Validate if group slug is available or not.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `ValidateGroupSlugPostBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `ValidateGroupSlugSuccessResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Group

**Endpoint:** `DELETE /calendars/groups/{groupId}`
**Scope:** `calendars/groups.write`
**Token Type:** bearer

Delete Group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `groupId` | path | `string` | Yes | Group Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GroupSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Group

**Endpoint:** `PUT /calendars/groups/{groupId}`
**Scope:** `calendars/groups.write`
**Token Type:** bearer

Update Group by group ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `groupId` | path | `string` | Yes | Group Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `GroupUpdateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GroupCreateSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Disable Group

**Endpoint:** `PUT /calendars/groups/{groupId}/status`
**Scope:** `calendars/groups.write`
**Token Type:** bearer

Disable Group

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `groupId` | path | `string` | Yes | Group Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `GroupStatusUpdateParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GroupSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Calendar Events

### Create appointment

**Endpoint:** `POST /calendars/events/appointments`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Create appointment

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AppointmentCreateSchema` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AppointmentSchemaResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Appointment

**Endpoint:** `PUT /calendars/events/appointments/{eventId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Update appointment

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `eventId` | path | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `AppointmentEditSchema` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `AppointmentSchemaResponse` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Appointment

**Endpoint:** `GET /calendars/events/appointments/{eventId}`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Get appointment by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `eventId` | path | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCalendarEventSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Calendar Events

**Endpoint:** `GET /calendars/events`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Get Calendar Events

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `userId` | query | `string` | No | User Id - Owner of an appointment. Either of userId, groupId or calendarId is required |
| `calendarId` | query | `string` | No | Either of calendarId, userId or groupId is required |
| `groupId` | query | `string` | No | Either of groupId, calendarId or userId is required |
| `startTime` | query | `string` | Yes | Start Time (in millis) |
| `endTime` | query | `string` | Yes | End Time (in millis) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCalendarEventsSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Blocked Slots

**Endpoint:** `GET /calendars/blocked-slots`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Get Blocked Slots

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `userId` | query | `string` | No | User Id - Owner of an appointment. Either of userId, groupId or calendarId is required |
| `calendarId` | query | `string` | No | Either of calendarId, userId or groupId is required |
| `groupId` | query | `string` | No | Either of groupId, calendarId or userId is required |
| `startTime` | query | `string` | Yes | Start Time (in millis) |
| `endTime` | query | `string` | Yes | End Time (in millis) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCalendarEventsSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Block Slot

**Endpoint:** `POST /calendars/events/block-slots`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Create block slot

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BlockSlotCreateRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `BlockedSlotSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Block Slot

**Endpoint:** `PUT /calendars/events/block-slots/{eventId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Update block slot by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `eventId` | path | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `BlockSlotEditRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `BlockedSlotSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Event

**Endpoint:** `DELETE /calendars/events/{eventId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Delete event by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `eventId` | path | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DeleteAppointmentSchema` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `DeleteEventSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Calendars

### Get Free Slots

**Endpoint:** `GET /calendars/{calendarId}/free-slots`
**Scope:** `calendars.readonly`
**Token Type:** bearer

Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | Calendar Id |
| `startDate` | query | `number` | Yes | Start Date (**⚠️ Important:** Date range cannot be more than 31 days) |
| `endDate` | query | `number` | Yes | End Date (**⚠️ Important:** Date range cannot be more than 31 days) |
| `timezone` | query | `string` | No | The timezone in which the free slots are returned |
| `userId` | query | `string` | No | The user for whom the free slots are returned |
| `userIds` | query | `array<string>` | No | The users for whom the free slots are returned |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Availability map keyed by date (YYYY-MM-DD) | `object` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Calendar

**Endpoint:** `PUT /calendars/{calendarId}`
**Scope:** `calendars.write`
**Token Type:** bearer

Update calendar by ID.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | Calendar Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CalendarUpdateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarByIdSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Calendar

**Endpoint:** `GET /calendars/{calendarId}`
**Scope:** `calendars.readonly`
**Token Type:** bearer

Get calendar by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | Calendar Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarByIdSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Calendar

**Endpoint:** `DELETE /calendars/{calendarId}`
**Scope:** `calendars.write`
**Token Type:** bearer

Delete calendar by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | Calendar Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarDeleteSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Calendars

**Endpoint:** `GET /calendars/`
**Scope:** `calendars.readonly`
**Token Type:** bearer

Get all calendars in a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id |
| `groupId` | query | `string` | No | Group Id |
| `showDrafted` | query | `boolean` | No | Show drafted |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarsGetSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Calendar

**Endpoint:** `POST /calendars/`
**Scope:** `calendars.write`
**Token Type:** bearer

Create calendar in a location.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CalendarCreateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarByIdSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Appointment Notes

### Get Notes

**Endpoint:** `GET /calendars/appointments/{appointmentId}/notes`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Get Appointment Notes

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `limit` | query | `number` | Yes | Limit of notes to fetch |
| `offset` | query | `number` | Yes | Offset of notes to fetch |
| `appointmentId` | path | `string` | Yes | Appointment ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetNotesListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Note

**Endpoint:** `POST /calendars/appointments/{appointmentId}/notes`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Create Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `appointmentId` | path | `string` | Yes | Appointment ID |

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

### Update Note

**Endpoint:** `PUT /calendars/appointments/{appointmentId}/notes/{noteId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Update Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `appointmentId` | path | `string` | Yes | Appointment ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `NotesDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCreateUpdateNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Note

**Endpoint:** `DELETE /calendars/appointments/{appointmentId}/notes/{noteId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Delete Note

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `appointmentId` | path | `string` | Yes | Appointment ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteNoteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Calendar Resources: Rooms & Equipments

### Get Calendar Resource

**Endpoint:** `GET /calendars/resources/{resourceType}/{id}`
**Scope:** `calendars/resources.readonly`
**Token Type:** Location-Access

Get calendar resource by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `resourceType` | path | `string` | Yes | Calendar Resource Type |
| `id` | path | `string` | Yes | Calendar Resource ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar resource fetched | `CalendarResourceByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Calendar Resource

**Endpoint:** `PUT /calendars/resources/{resourceType}/{id}`
**Scope:** `calendars/resources.write`
**Token Type:** Location-Access

Update calendar resource by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `resourceType` | path | `string` | Yes | Calendar Resource Type |
| `id` | path | `string` | Yes | Calendar Resource ID |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCalendarResourceDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar resource updated | `CalendarResourceResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Calendar Resource

**Endpoint:** `DELETE /calendars/resources/{resourceType}/{id}`
**Scope:** `calendars/resources.write`
**Token Type:** Location-Access

Delete calendar resource by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `resourceType` | path | `string` | Yes | Calendar Resource Type |
| `id` | path | `string` | Yes | Calendar Resource ID |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar resource deleted | `ResourceDeleteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### List Calendar Resources

**Endpoint:** `GET /calendars/resources/{resourceType}`
**Scope:** `calendars/resources.readonly`
**Token Type:** Location-Access

List calendar resources by resource type and location ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `resourceType` | path | `string` | Yes | Calendar Resource Type |
| `locationId` | query | `string` | Yes | — |
| `limit` | query | `number` | Yes | — |
| `skip` | query | `number` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar resources listed | `array<CalendarResourceByIdResponseDTO>` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Calendar Resource

**Endpoint:** `POST /calendars/resources/{resourceType}`
**Scope:** `calendars/resources.write`
**Token Type:** Location-Access

Create calendar resource by resource type

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `resourceType` | path | `string` | Yes | Calendar Resource Type |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCalendarResourceDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Calendar resource created | `CalendarResourceByIdResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Calendar Notifications

### Get notifications

**Endpoint:** `GET /calendars/{calendarId}/notifications`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Get calendar notifications based on query

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | — |
| `isActive` | query | `boolean` | No | — |
| `deleted` | query | `boolean` | No | — |
| `limit` | query | `number` | No | Number of records to return |
| `skip` | query | `number` | No | Number of records to skip |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `array<CalendarNotificationResponseDTO>` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create notification

**Endpoint:** `POST /calendars/{calendarId}/notifications`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `array<CreateCalendarNotificationDTO>` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `array<CalendarNotificationResponseDTO>` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get notification

**Endpoint:** `GET /calendars/{calendarId}/notifications/{notificationId}`
**Scope:** `calendars/events.readonly`
**Token Type:** bearer

Find Event notification by notificationId

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | — |
| `notificationId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarNotificationResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update notification

**Endpoint:** `PUT /calendars/{calendarId}/notifications/{notificationId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Update Event notification by id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | — |
| `notificationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCalendarNotificationsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarNotificationDeleteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Notification

**Endpoint:** `DELETE /calendars/{calendarId}/notifications/{notificationId}`
**Scope:** `calendars/events.write`
**Token Type:** bearer

Delete notification

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `calendarId` | path | `string` | Yes | — |
| `notificationId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CalendarNotificationDeleteResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Availability

### List user availability schedule

**Endpoint:** `GET /calendars/schedules/search`
**Scope:** `calendars.readonly`
**Token Type:** bearer

Retrieve user availability schedules based on various filters including location, calendar, and user. Supports pagination.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location ID to filter schedules by |
| `userId` | query | `string` | Yes | User ID to filter schedules by specific user |
| `calendarId` | query | `string` | No | Calendar ID for filtering schedules by specific calendar |
| `skip` | query | `number` | No | Number of items to skip for pagination |
| `limit` | query | `number` | No | Maximum number of items to return (max 500) |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Schedules retrieved successfully | `GetAllSchedulesResponseDTO` |
| `400` | Invalid request parameters | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |

### Get user availability schedule

**Endpoint:** `GET /calendars/schedules/{id}`
**Scope:** `calendars.readonly`
**Token Type:** bearer

Retrieve a specific schedule by its unique identifier. Returns detailed information including rules, timezone, and associated calendars/users.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the schedule |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Schedule found and retrieved successfully | `ScheduleResponseDTO` |
| `400` | Invalid request parameters | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `404` | Schedule with the specified ID was not found | `—` |

### Update user availability schedule

**Endpoint:** `PUT /calendars/schedules/{id}`
**Scope:** `calendars.write`
**Token Type:** bearer

Modify an existing schedule by updating its rules, timezone, and name All fields are optional - only provided fields will be updated.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the schedule to update |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateScheduleDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Schedule updated successfully | `ScheduleResponseDTO` |
| `400` | Invalid request parameters | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `404` | Schedule with the specified ID was not found | `—` |
| `422` | Validation errors in schedule rules or conflicting data | `UnprocessableDTO` |

### Delete user availability schedule

**Endpoint:** `DELETE /calendars/schedules/{id}`
**Scope:** `calendars.write`
**Token Type:** bearer

Permanently remove a schedule and all its associated rules. This action cannot be undone.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the schedule to delete |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Schedule deleted successfully | `object` |
| `400` | Invalid request parameters | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `404` | Schedule with the specified ID was not found | `—` |

### Create user availability schedule

**Endpoint:** `POST /calendars/schedules`
**Scope:** `calendars.write`
**Token Type:** bearer

Create new schedule with specified rules, timezone, location, user and calendar associations.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateScheduleDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Schedule created successfully | `ScheduleResponseDTO` |
| `400` | Invalid request parameters | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `422` | Validation errors in schedule rules or conflicting data | `UnprocessableDTO` |

### Apply user availability schedule to a calendar

**Endpoint:** `PUT /calendars/schedules/{id}/associations/{calendarId}`
**Scope:** `calendars.write`
**Token Type:** bearer

Associates a calendar with the given schedule by adding the calendarId to a schedule

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the schedule |
| `calendarId` | path | `string` | Yes | Unique identifier of the team calendar to add to the schedule |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar successfully added to schedule | `object` |
| `400` | Schedule and calendar must belong to the same location | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `404` | Schedule or calendar not found | `BadRequestDTO` |

### Remove user availability schedule from a calendar

**Endpoint:** `DELETE /calendars/schedules/{id}/associations/{calendarId}`
**Scope:** `calendars.write`
**Token Type:** bearer

Removes the association between a team calendar and the given schedule by removing the calendarId from the schedule

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the schedule |
| `calendarId` | path | `string` | Yes | Unique identifier of the calendar to remove from the schedule |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Calendar successfully removed from schedule | `object` |
| `400` | Schedule and calendar must belong to the same location | `BadRequestDTO` |
| `401` | User not authenticated | `UnauthorizedDTO` |
| `404` | Schedule or calendar not found | `BadRequestDTO` |

## Schemas

### GroupDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `slug` | `string` | Yes | — |
| `isActive` | `boolean` | No | — |
| `id` | `string` | No | — |

### AllGroupsSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `groups` | `array<GroupDTO>` | No | — |

### ValidateGroupSlugPostBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location Id |
| `slug` | `string` | Yes | Slug |

### ValidateGroupSlugSuccessResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available` | `boolean` | Yes | — |

### GroupCreateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `slug` | `string` | Yes | — |
| `isActive` | `boolean` | No | — |

### GroupCreateSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `group` | `GroupDTO` | No | — |

### GroupSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | No | Success |

### GroupStatusUpdateParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isActive` | `boolean` | Yes | Is Active? |

### GroupUpdateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `slug` | `string` | Yes | — |

### AppointmentCreateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title |
| `meetingLocationType` | `string` | No | Meeting location type. <br>- If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**. |
| `meetingLocationId` | `string` | No | The unique identifier for the meeting location.<br>- This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations` |
| `overrideLocationConfig` | `boolean` | No | Flag to override location config<br>- **false** - If only `meetingLocationId` is provided<br>- **true** - If only `meetingLocationType` is provided<br> |
| `appointmentStatus` | `string` | No | — |
| `assignedUserId` | `string` | No | Assigned User Id |
| `description` | `string` | No | Appointment Description |
| `address` | `string` | No | Appointment Address |
| `ignoreDateRange` | `boolean` | No | If set to true, the minimum scheduling notice and date range would be ignored |
| `toNotify` | `boolean` | No | If set to false, the automations will not run |
| `ignoreFreeSlotValidation` | `boolean` | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange) |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. |
| `calendarId` | `string` | Yes | Calendar Id |
| `locationId` | `string` | Yes | Location Id |
| `contactId` | `string` | Yes | Contact Id |
| `startTime` | `string` | Yes | Start Time |
| `endTime` | `string` | No | End Time |

### AppointmentSchemaResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendarId` | `string` | Yes | Calendar Id |
| `locationId` | `string` | Yes | Location Id |
| `contactId` | `string` | Yes | Contact Id |
| `startTime` | `string` | No | Start Time |
| `endTime` | `string` | No | End Time |
| `title` | `string` | No | Title |
| `meetingLocationType` | `string` | No | Meeting Location Type |
| `appointmentStatus` | `string` | No | — |
| `assignedUserId` | `string` | No | Assigned User Id |
| `address` | `string` | No | Appointment Address |
| `isRecurring` | `boolean` | No | true if the event is recurring otherwise false |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events |
| `id` | `string` | Yes | Id |

### AppointmentEditSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title |
| `meetingLocationType` | `string` | No | Meeting location type. <br>- If `address` is provided in the request body, the `meetingLocationType` defaults to **custom**. |
| `meetingLocationId` | `string` | No | The unique identifier for the meeting location.<br>- This value can be found in `calendar.locationConfigurations`or `calendar.teamMembers[].locationConfigurations` |
| `overrideLocationConfig` | `boolean` | No | Flag to override location config<br>- **false** - If only `meetingLocationId` is provided<br>- **true** - If only `meetingLocationType` is provided<br> |
| `appointmentStatus` | `string` | No | — |
| `assignedUserId` | `string` | No | Assigned User Id |
| `description` | `string` | No | Appointment Description |
| `address` | `string` | No | Appointment Address |
| `ignoreDateRange` | `boolean` | No | If set to true, the minimum scheduling notice and date range would be ignored |
| `toNotify` | `boolean` | No | If set to false, the automations will not run |
| `ignoreFreeSlotValidation` | `boolean` | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateRange) |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. The rrule only be applied if ignoreFreeSlotValidation is true. |
| `calendarId` | `string` | No | Calendar Id |
| `startTime` | `string` | No | Start Time |
| `endTime` | `string` | No | End Time |

### CreatedOrUpdatedBy

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | The ID of the user who created or updated the appointment |
| `source` | `string` | Yes | The source of the appointment |

### CalendarEventDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Event Id or Instance id for a recurring event |
| `address` | `string` | No | Calendar Event address |
| `title` | `string` | Yes | Calendar Event title |
| `calendarId` | `string` | Yes | Calendar ID |
| `locationId` | `string` | Yes | Location ID |
| `contactId` | `string` | Yes | Contact ID |
| `groupId` | `string` | Yes | Group ID |
| `appointmentStatus` | `string` | Yes | Appointment Status |
| `assignedUserId` | `string` | Yes | AssignedUser - the primary owner of an appointment |
| `users` | `array<string>` | Yes | Users - the secondary owners of an appointment. |
| `notes` | `string` | No | Notes |
| `description` | `string` | No | Description |
| `isRecurring` | `boolean` | No | true if the event is recurring otherwise false |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, instance ids are calculated on the basis of startTime of the event. |
| `startTime` | `object` | Yes | Start Time |
| `endTime` | `object` | Yes | End Time |
| `dateAdded` | `object` | Yes | Date Added |
| `dateUpdated` | `object` | Yes | Date Updated |
| `assignedResources` | `array<string>` | No | Ids of associated resources rooms and/or equipments |
| `createdBy` | `CreatedOrUpdatedBy` | No | Appointment booked by metadata |
| `masterEventId` | `string` | No | Master event id for a recurring instance |

### GetCalendarEventsSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `events` | `array<CalendarEventDTO>` | No | — |

### BlockSlotCreateRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title |
| `calendarId` | `string` | Yes | Either calendarId or assignedUserId can be set, not both. |
| `assignedUserId` | `string` | No | Either calendarId or assignedUserId can be set, not both. |
| `locationId` | `string` | Yes | Location Id |
| `startTime` | `string` | No | Start Time |
| `endTime` | `string` | No | End Time |

### BlockedSlotSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Id |
| `locationId` | `string` | Yes | Location Id |
| `title` | `string` | Yes | Title |
| `startTime` | `object` | Yes | Start Time |
| `endTime` | `object` | Yes | End Time |
| `calendarId` | `string` | No | Calendar id |
| `assignedUserId` | `string` | No | Assigned User Id |

### BlockSlotEditRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Title |
| `calendarId` | `string` | Yes | Either calendarId or assignedUserId can be set, not both. |
| `assignedUserId` | `string` | No | Either calendarId or assignedUserId can be set, not both. |
| `locationId` | `string` | Yes | Location Id |
| `startTime` | `string` | No | Start Time |
| `endTime` | `string` | No | End Time |

### SlotsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `slots` | `array<string>` | Yes | — |

### CalendarNotification

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | No | Calendar Notification |
| `shouldSendToContact` | `boolean` | Yes | — |
| `shouldSendToGuest` | `boolean` | Yes | — |
| `shouldSendToUser` | `boolean` | Yes | — |
| `shouldSendToSelectedUsers` | `boolean` | Yes | — |
| `selectedUsers` | `string` | Yes | Comma separated emails |

### LocationConfiguration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | `string` | Yes | Type of meeting location. zoom_conference/google_conference/ms_teams_conference is not supported in event calendar type |
| `location` | `string` | No | Address for meeting location. Not applicable on "zoom_conference", "google_conference" and "ms_teams_conference" kind |

### TeamMember

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | Yes | — |
| `priority` | `number` | No | — |
| `meetingLocationType` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.kind` instead. |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` instead. |
| `isPrimary` | `boolean` | No | Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary. |
| `locationConfigurations` | `array<LocationConfiguration>` | No | Meeting location configuration for event calendar.<br>- *Multiple locations are allowed only when one team member is selected.*<br>- *For **Class booking** and **Collective** calendars, only one location configuration is allowed for each team member.* |

### Hour

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `openHour` | `number` | Yes | — |
| `openMinute` | `number` | Yes | — |
| `closeHour` | `number` | Yes | — |
| `closeMinute` | `number` | Yes | — |

### OpenHour

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `daysOfTheWeek` | `array<number>` | Yes | — |
| `hours` | `array<Hour>` | Yes | — |

### Recurring

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `freq` | `string` | No | — |
| `count` | `number` | No | Number of recurrences |
| `bookingOption` | `string` | No | This setting contols what to do incase a recurring slot is unavailable |
| `bookingOverlapDefaultStatus` | `string` | No | This setting contols what to do incase a recurring slot is unavailable |

### Availability

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`. |
| `hours` | `array<Hour>` | Yes | — |
| `deleted` | `boolean` | No | — |

### LookBusyConfiguration

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `enabled` | `boolean` | Yes | Apply Look Busy |
| `LookBusyPercentage` | `number` | Yes | Percentage of slots that will be hidden |

### CalendarCreateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isActive` | `boolean` | No | Should the created calendar be active or draft |
| `notifications` | `array<CalendarNotification>` | No | 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead. |
| `locationId` | `string` | Yes | — |
| `groupId` | `string` | No | Group Id |
| `teamMembers` | `array<TeamMember>` | No | Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal calendar must have exactly one team member. |
| `eventType` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `slug` | `string` | No | — |
| `widgetSlug` | `string` | No | — |
| `calendarType` | `string` | No | — |
| `widgetType` | `string` | No | Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout. |
| `eventTitle` | `string` | No | — |
| `eventColor` | `string` | No | — |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead. |
| `locationConfigurations` | `array<LocationConfiguration>` | No | Meeting location configuration for event calendar |
| `slotDuration` | `number` | No | This controls the duration of the meeting |
| `slotDurationUnit` | `string` | No | Unit for slot duration. |
| `slotInterval` | `number` | No | Slot interval reflects the amount of time the between booking slots that will be shown in the calendar. |
| `slotIntervalUnit` | `string` | No | Unit for slot interval. |
| `slotBuffer` | `number` | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up |
| `slotBufferUnit` | `string` | No | Unit for slot buffer. |
| `preBuffer` | `number` | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready |
| `preBufferUnit` | `string` | No | Unit for pre-buffer. |
| `appoinmentPerSlot` | `number` | No | Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar. |
| `appoinmentPerDay` | `number` | No | Number of appointments that can be booked for a given day |
| `allowBookingAfter` | `number` | No | Minimum scheduling notice for events |
| `allowBookingAfterUnit` | `string` | No | Unit for minimum scheduling notice |
| `allowBookingFor` | `number` | No | Minimum number of days/weeks/months for which to allow booking events |
| `allowBookingForUnit` | `string` | No | Unit for controlling the duration for which booking would be allowed for |
| `openHours` | `array<OpenHour>` | No | This is only to set the standard availability. For custom availability, use the availabilities property |
| `enableRecurring` | `boolean` | No | Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this |
| `recurring` | `Recurring` | No | — |
| `formId` | `string` | No | — |
| `stickyContact` | `boolean` | No | — |
| `isLivePaymentMode` | `boolean` | No | — |
| `autoConfirm` | `boolean` | No | — |
| `shouldSendAlertEmailsToAssignedMember` | `boolean` | No | — |
| `alertEmail` | `string` | No | — |
| `googleInvitationEmails` | `boolean` | No | — |
| `allowReschedule` | `boolean` | No | — |
| `allowCancellation` | `boolean` | No | — |
| `shouldAssignContactToTeamMember` | `boolean` | No | — |
| `shouldSkipAssigningContactForExisting` | `boolean` | No | — |
| `notes` | `string` | No | — |
| `pixelId` | `string` | No | — |
| `formSubmitType` | `string` | No | — |
| `formSubmitRedirectURL` | `string` | No | — |
| `formSubmitThanksMessage` | `string` | No | — |
| `availabilityType` | `number` | No | Determines which availability type to consider:<br>- **1**: Only custom availabilities will be used.<br>- **0**: Only open hours will be used.<br>- **null**: Both custom availabilities and open hours will be considered. |
| `availabilities` | `array<Availability>` | No | This is only to set the custom availability. For standard availability, use the openHours property |
| `guestType` | `string` | No | — |
| `consentLabel` | `string` | No | — |
| `calendarCoverImage` | `string` | No | — |
| `lookBusyConfig` | `LookBusyConfiguration` | No | Look Busy Configuration |

### LocationConfigurationResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `kind` | `string` | Yes | Type of meeting location. zoom_conference/google_conference/ms_teams_conference is not supported in event calendar type |
| `location` | `string` | No | Address for meeting location. Not applicable on "zoom_conference", "google_conference" and "ms_teams_conference" kind |
| `meetingId` | `string` | No | Unique ID used to select a specific meeting location |

### TeamMemberResponse

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | Yes | — |
| `priority` | `number` | No | — |
| `meetingLocationType` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.kind` instead. |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` instead. |
| `isPrimary` | `boolean` | No | Marks a user as primary. This property is required in case of collective booking calendars. Only one user can be primary. |
| `locationConfigurations` | `array<LocationConfigurationResponse>` | No | Meeting location configurations |

### CalendarDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isActive` | `boolean` | No | Should the created calendar be active or draft |
| `notifications` | `array<CalendarNotification>` | No | 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead. |
| `locationId` | `string` | Yes | — |
| `groupId` | `string` | No | Group Id |
| `teamMembers` | `array<TeamMemberResponse>` | No | Team members are for calendars of type: Round Robin, Collective, Class, Service. Personal calendar must have exactly one team member. |
| `eventType` | `string` | No | — |
| `name` | `string` | Yes | — |
| `description` | `string` | No | — |
| `slug` | `string` | No | — |
| `widgetSlug` | `string` | No | — |
| `calendarType` | `string` | No | — |
| `widgetType` | `string` | No | Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout. |
| `eventTitle` | `string` | No | — |
| `eventColor` | `string` | No | — |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead. |
| `locationConfigurations` | `array<LocationConfigurationResponse>` | No | Meeting location configuration for event calendar |
| `slotDuration` | `number` | No | This controls the duration of the meeting |
| `slotDurationUnit` | `string` | No | Unit for slot duration. |
| `slotInterval` | `number` | No | Slot interval reflects the amount of time the between booking slots that will be shown in the calendar. |
| `slotIntervalUnit` | `string` | No | Unit for slot interval. |
| `slotBuffer` | `number` | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up |
| `slotBufferUnit` | `string` | No | Unit for slot buffer. |
| `preBuffer` | `number` | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready |
| `preBufferUnit` | `string` | No | Unit for pre-buffer. |
| `appoinmentPerSlot` | `number` | No | Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar. |
| `appoinmentPerDay` | `number` | No | Number of appointments that can be booked for a given day |
| `allowBookingAfter` | `number` | No | Minimum scheduling notice for events |
| `allowBookingAfterUnit` | `string` | No | Unit for minimum scheduling notice |
| `allowBookingFor` | `number` | No | Minimum number of days/weeks/months for which to allow booking events |
| `allowBookingForUnit` | `string` | No | Unit for controlling the duration for which booking would be allowed for |
| `openHours` | `array<OpenHour>` | No | This is only to set the standard availability. For custom availability, use the availabilities property |
| `enableRecurring` | `boolean` | No | Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this |
| `recurring` | `Recurring` | No | — |
| `formId` | `string` | No | — |
| `stickyContact` | `boolean` | No | — |
| `isLivePaymentMode` | `boolean` | No | — |
| `autoConfirm` | `boolean` | No | — |
| `shouldSendAlertEmailsToAssignedMember` | `boolean` | No | — |
| `alertEmail` | `string` | No | — |
| `googleInvitationEmails` | `boolean` | No | — |
| `allowReschedule` | `boolean` | No | — |
| `allowCancellation` | `boolean` | No | — |
| `shouldAssignContactToTeamMember` | `boolean` | No | — |
| `shouldSkipAssigningContactForExisting` | `boolean` | No | — |
| `notes` | `string` | No | — |
| `pixelId` | `string` | No | — |
| `formSubmitType` | `string` | No | — |
| `formSubmitRedirectURL` | `string` | No | — |
| `formSubmitThanksMessage` | `string` | No | — |
| `availabilityType` | `number` | No | Determines which availability type to consider:<br>- **1**: Only custom availabilities will be used.<br>- **0**: Only open hours will be used.<br>- **null**: Both custom availabilities and open hours will be considered. |
| `availabilities` | `array<Availability>` | No | This is only to set the custom availability. For standard availability, use the openHours property |
| `guestType` | `string` | No | — |
| `consentLabel` | `string` | No | — |
| `calendarCoverImage` | `string` | No | — |
| `lookBusyConfig` | `LookBusyConfiguration` | No | Look Busy Configuration |
| `id` | `string` | Yes | — |

### CalendarsGetSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendars` | `array<CalendarDTO>` | No | — |

### CalendarByIdSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `calendar` | `CalendarDTO` | Yes | — |

### UpdateAvailability

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | Yes | Formulate the date string in the format of `<YYYY-MM-DD in local timezone>T00:00:00.000Z`. |
| `hours` | `array<Hour>` | Yes | — |
| `deleted` | `boolean` | No | — |
| `id` | `string` | No | The ID of the custom availability object. It is required while updating or deleting the existing custom date availability |

### CalendarUpdateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notifications` | `array<CalendarNotification>` | No | 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead. |
| `groupId` | `string` | No | Group Id |
| `teamMembers` | `array<TeamMember>` | No | Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal calendar must have exactly one team member. |
| `eventType` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `slug` | `string` | No | — |
| `widgetSlug` | `string` | No | — |
| `widgetType` | `string` | No | Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout. |
| `eventTitle` | `string` | No | — |
| `eventColor` | `string` | No | — |
| `locationConfigurations` | `array<LocationConfiguration>` | No | Meeting location configuration for event calendar |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.location` instead. |
| `slotDuration` | `number` | No | This controls the duration of the meeting |
| `slotDurationUnit` | `string` | No | Unit for slot duration. |
| `preBufferUnit` | `string` | No | Unit for pre-buffer. |
| `slotInterval` | `number` | No | Slot interval reflects the amount of time the between booking slots that will be shown in the calendar. |
| `slotIntervalUnit` | `string` | No | Unit for slot interval. |
| `slotBuffer` | `number` | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wrap up |
| `preBuffer` | `number` | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to get ready |
| `appoinmentPerSlot` | `number` | No | — |
| `appoinmentPerDay` | `number` | No | Number of appointments that can be booked for a given day |
| `allowBookingAfter` | `number` | No | Minimum scheduling notice for events |
| `allowBookingAfterUnit` | `string` | No | Unit for minimum scheduling notice |
| `allowBookingFor` | `number` | No | Minimum number of days/weeks/months for which to allow booking events |
| `allowBookingForUnit` | `string` | No | Unit for controlling the duration for which booking would be allowed for |
| `openHours` | `array<OpenHour>` | No | — |
| `enableRecurring` | `boolean` | No | Enable recurring appointments for the calendars. Please note that only one member should be added in the calendar to enable this |
| `recurring` | `Recurring` | No | — |
| `formId` | `string` | No | — |
| `stickyContact` | `boolean` | No | — |
| `isLivePaymentMode` | `boolean` | No | — |
| `autoConfirm` | `boolean` | No | — |
| `shouldSendAlertEmailsToAssignedMember` | `boolean` | No | — |
| `alertEmail` | `string` | No | — |
| `googleInvitationEmails` | `boolean` | No | — |
| `allowReschedule` | `boolean` | No | — |
| `allowCancellation` | `boolean` | No | — |
| `shouldAssignContactToTeamMember` | `boolean` | No | — |
| `shouldSkipAssigningContactForExisting` | `boolean` | No | — |
| `notes` | `string` | No | — |
| `pixelId` | `string` | No | — |
| `formSubmitType` | `string` | No | — |
| `formSubmitRedirectURL` | `string` | No | — |
| `formSubmitThanksMessage` | `string` | No | — |
| `availabilityType` | `number` | No | Determines which availability type to consider:<br>- **1**: Only custom availabilities will be used.<br>- **0**: Only open hours will be used.<br>- **null**: Both the custom availabilities and open hours will be considered. |
| `availabilities` | `array<UpdateAvailability>` | No | This is only to set the custom availability. For standard availability, use the openHours property |
| `guestType` | `string` | No | — |
| `consentLabel` | `string` | No | — |
| `calendarCoverImage` | `string` | No | — |
| `lookBusyConfig` | `LookBusyConfiguration` | No | Look Busy Configuration |
| `isActive` | `boolean` | No | — |

### CalendarDeleteSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success |

### GetCalendarEventSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `event` | `CalendarEventDTO` | No | — |

### DeleteAppointmentSchema

Type: `object`

### DeleteEventSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeeded` | `boolean` | No | — |

### NoteCreatedBySchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |

### GetNoteSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `body` | `string` | No | — |
| `userId` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `contactId` | `string` | No | — |
| `createdBy` | `NoteCreatedBySchema` | No | — |

### GetNotesListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `notes` | `array<GetNoteSchema>` | No | — |
| `hasMore` | `boolean` | No | — |

### NotesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `userId` | `string` | No | — |
| `body` | `string` | Yes | Note body |

### GetCreateUpdateNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `note` | `GetNoteSchema` | No | — |

### DeleteNoteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | No | — |

### CalendarResourceByIdResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID of the resource |
| `name` | `string` | Yes | Name of the resource |
| `resourceType` | `string` | Yes | — |
| `isActive` | `boolean` | Yes | Whether the resource is active |
| `description` | `string` | No | Description of the resource |
| `quantity` | `number` | No | Quantity of the resource |
| `outOfService` | `number` | No | Indicates if the resource is out of service |
| `capacity` | `number` | No | Capacity of the resource |
| `calendarIds` | `array<string>` | Yes | Calendar IDs |

### UpdateCalendarResourceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | No | — |
| `name` | `string` | No | — |
| `description` | `string` | No | — |
| `quantity` | `number` | No | Quantity of the equipment. |
| `outOfService` | `number` | No | Quantity of the out of service equipment. |
| `capacity` | `number` | No | Capacity of the room. |
| `calendarIds` | `array<string>` | No | Service calendar IDs to be mapped with the resource.<br><br>    One equipment can only be mapped with one service calendar.<br>    <br>One room can be mapped with multiple service calendars. |
| `isActive` | `boolean` | No | — |

### CalendarResourceResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | Location ID of the resource |
| `name` | `string` | Yes | Name of the resource |
| `resourceType` | `string` | Yes | — |
| `isActive` | `boolean` | Yes | Whether the resource is active |
| `description` | `string` | No | Description of the resource |
| `quantity` | `number` | No | Quantity of the resource |
| `outOfService` | `number` | No | Indicates if the resource is out of service |
| `capacity` | `number` | No | Capacity of the resource |

### ResourceDeleteResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | No | Success |

### CreateCalendarResourceDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locationId` | `string` | Yes | — |
| `name` | `string` | Yes | — |
| `description` | `string` | Yes | — |
| `quantity` | `number` | Yes | Quantity of the equipment. |
| `outOfService` | `number` | Yes | Quantity of the out of service equipment. |
| `capacity` | `number` | Yes | Capacity of the room. |
| `calendarIds` | `array<string>` | Yes | Service calendar IDs to be mapped with the resource.<br><br>    One equipment can only be mapped with one service calendar.<br>    <br>One room can be mapped with multiple service calendars. |

### SchedulesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `timeOffset` | `number` | No | — |
| `unit` | `string` | No | — |

### CalendarNotificationResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | No | Notification ID |
| `receiverType` | `string` | No | — |
| `additionalEmailIds` | `array<string>` | No | — |
| `additionalPhoneNumbers` | `array<string>` | No | — |
| `channel` | `string` | No | — |
| `notificationType` | `string` | No | — |
| `isActive` | `boolean` | No | — |
| `additionalWhatsappNumbers` | `array<string>` | No | — |
| `templateId` | `string` | No | — |
| `body` | `string` | No | — |
| `subject` | `string` | No | — |
| `afterTime` | `array<SchedulesDTO>` | No | — |
| `beforeTime` | `array<SchedulesDTO>` | No | — |
| `selectedUsers` | `array<string>` | No | — |
| `deleted` | `boolean` | No | — |

### CreateCalendarNotificationDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `receiverType` | `string` | Yes | notification recipient type |
| `channel` | `string` | Yes | Notification channel |
| `notificationType` | `string` | Yes | Notification type |
| `isActive` | `boolean` | No | Is the notification active |
| `templateId` | `string` | No | Template ID for email notification. Not necessary for in-App notification |
| `body` | `string` | No | Body  for email notification. Not necessary for in-App notification |
| `subject` | `string` | No | Subject  for email notification. Not necessary for in-App notification |
| `afterTime` | `array<SchedulesDTO>` | No | Specifies the time after which the follow-up notification should be sent. This is not required for other notification types. |
| `beforeTime` | `array<SchedulesDTO>` | No | Specifies the time before which the reminder notification should be sent. This is not required for other notification types. |
| `additionalEmailIds` | `array<string>` | No | Additional email addresses to receive notifications. |
| `additionalPhoneNumbers` | `array<string>` | No | Additional phone numbers to receive notifications. |
| `selectedUsers` | `array<string>` | No | Selected users for in-App and business email notifications. Supports user IDs and special keyword "sub_account_admin" |
| `fromAddress` | `string` | No | from address for email notification |
| `fromName` | `string` | No | from name for email/sms notification |
| `fromNumber` | `string` | No | from number for sms notification |

### UpdateCalendarNotificationsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `receiverType` | `string` | No | Notification recipient type |
| `additionalEmailIds` | `array<string>` | No | Additional email addresses to receive notifications. |
| `additionalPhoneNumbers` | `array<string>` | No | Additional phone numbers to receive notifications. |
| `selectedUsers` | `array<string>` | No | Selected users for in-App and business email notifications. Supports user IDs and special keyword "sub_account_admin" |
| `channel` | `string` | No | Notification channel |
| `notificationType` | `string` | No | Notification type |
| `isActive` | `boolean` | No | Is the notification active |
| `deleted` | `boolean` | No | Marks the notification as deleted (soft delete) |
| `templateId` | `string` | No | Template ID for email notification |
| `body` | `string` | No | Body  for email notification. Not necessary for in-App notification |
| `subject` | `string` | No | Subject  for email notification. Not necessary for in-App notification |
| `afterTime` | `array<SchedulesDTO>` | No | Specifies the time after which the follow-up notification should be sent. This is not required for other notification types. |
| `beforeTime` | `array<SchedulesDTO>` | No | Specifies the time before which the reminder notification should be sent. This is not required for other notification types. |
| `fromAddress` | `string` | No | From address for email notification |
| `fromNumber` | `string` | No | from number for sms notification |
| `fromName` | `string` | No | From name for email/sms notification |

### CalendarNotificationDeleteResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `message` | `string` | Yes | Result of delete/update operation |

### ScheduleIntervalDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `from` | `string` | Yes | Start time in HH:MM format (24-hour format) |
| `to` | `string` | Yes | End time in HH:MM format (24-hour format) |

### ScheduleRuleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Type of schedule rule - weekday (recurring) or date (specific date) |
| `intervals` | `array<ScheduleIntervalDTO>` | Yes | Time intervals for the rule (e.g., 9 AM to 5 PM) |
| `date` | `string` | No | Specific date in YYYY-MM-DD format (only for date-type rules) |
| `day` | `string` | No | Day of week (only for weekday-type rules) |

### ScheduleObjectResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the schedule |
| `name` | `string` | Yes | Human-readable name for the schedule |
| `locationId` | `string` | Yes | Location ID where this schedule applies |
| `rules` | `array<ScheduleRuleDTO>` | Yes | Schedule rules defining when the schedule is active |
| `timezone` | `string` | Yes | Timezone for the schedule (IANA timezone identifier) |
| `dateAdded` | `string` | Yes | ISO date string when the schedule was created |
| `dateUpdated` | `string` | Yes | ISO date string when the schedule was last updated |
| `userId` | `string` | Yes | User ID associated with the schedule |
| `calendarIds` | `array<string>` | No | Calendar IDs associated with the schedule |
| `deleted` | `boolean` | Yes | Whether the schedule has been deleted |

### GetAllSchedulesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedules` | `array<ScheduleObjectResponseDTO>` | Yes | Array of schedules |

### ScheduleResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `schedule` | `ScheduleObjectResponseDTO` | Yes | Schedule |

### CreateScheduleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `rules` | `array<ScheduleRuleDTO>` | No | Schedule rules defining when the schedule is active |
| `timezone` | `string` | Yes | Timezone for the schedule (IANA timezone identifier) |
| `locationId` | `string` | Yes | Location ID where this schedule applies |
| `name` | `string` | Yes | Human-readable name for the schedule |
| `userId` | `string` | Yes | User ID associated with the schedule |
| `calendarIds` | `array<string>` | No | Calendar IDs associated with the schedule |

### UpdateScheduleDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Human-readable name for the schedule |
| `rules` | `array<ScheduleRuleDTO>` | No | Updated schedule rules defining when the schedule is active |
| `timezone` | `string` | No | Updated timezone for the schedule (IANA timezone identifier) |
