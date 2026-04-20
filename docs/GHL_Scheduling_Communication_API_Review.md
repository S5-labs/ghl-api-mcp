# GHL Scheduling & Communication APIs — Comprehensive Review

*Generated: March 2026 | Source: GHL API v2 Official Documentation*


---

## Overview

This document covers the GoHighLevel Scheduling and Communication API sections: Calendars, Conversations, Emails, Email ISV, Phone System, and Voice AI. These APIs power the core communication and scheduling capabilities of the GHL platform, enabling programmatic management of appointments, multi-channel conversations, email campaigns, and AI-powered voice interactions.

Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)


This document covers **6 API sections** with a total of **72 endpoints**.


## Quick Reference

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Calendars API** | 34 | `calendars.readonly`, `calendars.write`, `calendars/events.readonly`, `calendars/events.write` _(+4 more)_ |
| **Conversations API** | 19 | `conversations.readonly`, `conversations.write`, `conversations/livechat.write`, `conversations/message.readonly` _(+1 more)_ |
| **Email API** | 5 | `emails/builder.readonly`, `emails/builder.write`, `emails/schedule.readonly` |
| **Email ISV API** | 1 |  |
| **Phone System API** | 2 | `numberpools.read`, `phonenumbers.read` |
| **Voice AI API** | 11 | `voice-ai-agent-goals.readonly`, `voice-ai-agent-goals.write`, `voice-ai-agents.readonly`, `voice-ai-agents.write` _(+1 more)_ |

## Detailed API Reference


---

## Calendars API

Documentation for Calendars API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/calendars/groups` | Get Groups | `calendars/groups.readonly` |
| `POST` | `/calendars/groups` | Create Calendar Group | `calendars/groups.write` |
| `POST` | `/calendars/groups/validate-slug` | Validate group slug | `calendars/groups.write` |
| `DELETE` | `/calendars/groups/{groupId}` | Delete Group | `calendars/groups.write` |
| `PUT` | `/calendars/groups/{groupId}` | Update Group | `calendars/groups.write` |
| `PUT` | `/calendars/groups/{groupId}/status` | Disable Group | `calendars/groups.write` |
| `POST` | `/calendars/events/appointments` | Create appointment | `calendars/events.write` |
| `PUT` | `/calendars/events/appointments/{eventId}` | Update Appointment | `calendars/events.write` |
| `GET` | `/calendars/events/appointments/{eventId}` | Get Appointment | `calendars/events.readonly` |
| `GET` | `/calendars/events` | Get Calendar Events | `calendars/events.readonly` |
| `GET` | `/calendars/blocked-slots` | Get Blocked Slots | `calendars/events.readonly` |
| `POST` | `/calendars/events/block-slots` | Create Block Slot | `calendars/events.write` |
| `PUT` | `/calendars/events/block-slots/{eventId}` | Update Block Slot | `calendars/events.write` |
| `GET` | `/calendars/{calendarId}/free-slots` | Get Free Slots | `calendars.readonly` |
| `PUT` | `/calendars/{calendarId}` | Update Calendar | `calendars.write` |
| `GET` | `/calendars/{calendarId}` | Get Calendar | `calendars.readonly` |
| `DELETE` | `/calendars/{calendarId}` | Delete Calendar | `calendars.write` |
| `DELETE` | `/calendars/events/{eventId}` | Delete Event | `calendars/events.write` |
| `GET` | `/calendars/appointments/{appointmentId}/notes` | Get Notes | `calendars/events.readonly` |
| `POST` | `/calendars/appointments/{appointmentId}/notes` | Create Note | `calendars/events.write` |
| `PUT` | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Update Note | `calendars/events.write` |
| `DELETE` | `/calendars/appointments/{appointmentId}/notes/{noteId}` | Delete Note | `calendars/events.write` |
| `GET` | `/calendars/resources/{resourceType}/{id}` | Get Calendar Resource | `calendars/resources.readonly` |
| `PUT` | `/calendars/resources/{resourceType}/{id}` | Update Calendar Resource | `calendars/resources.write` |
| `DELETE` | `/calendars/resources/{resourceType}/{id}` | Delete Calendar Resource | `calendars/resources.write` |
| `GET` | `/calendars/resources/{resourceType}` | List Calendar Resources | `calendars/resources.readonly` |
| `POST` | `/calendars/resources/{resourceType}` | Create Calendar Resource | `calendars/resources.write` |
| `GET` | `/calendars/{calendarId}/notifications` | Get notifications | `calendars/events.readonly` |
| `POST` | `/calendars/{calendarId}/notifications` | Create notification | `calendars/events.write` |
| `GET` | `/calendars/{calendarId}/notifications/{notificationId}` | Get notification | `calendars/events.readonly` |
| `PUT` | `/calendars/{calendarId}/notifications/{notificationId}` | Update notification | `calendars/events.write` |
| `DELETE` | `/calendars/{calendarId}/notifications/{notificationId}` | Delete Notification | `calendars/events.write` |
| `GET` | `/calendars/` | Get Calendars | `calendars.readonly` |
| `POST` | `/calendars/` | Create Calendar | `calendars.write` |

### GET Get Groups

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/groups`

Get all calendar groups in a location.

**Required Scope(s):** `calendars/groups.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `groups` | `array[GroupDTO]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/groups' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Calendar Group

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/groups`

**Required Scope(s):** `calendars/groups.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ocQHyuzHvysMo5N5VsXc |
| `name` | `string` | Yes |  | group a |
| `description` | `string` | Yes |  | group description |
| `slug` | `string` | Yes |  | 15-mins |
| `isActive` | `boolean` | No |  | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `group` | `GroupDTO` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/groups' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ocQHyuzHvysMo5N5VsXc",
    "name": "group a",
    "description": "group description",
    "slug": "15-mins",
    "isActive": true
}'
```

**Response Codes:** `201` | `400` | `401`


### POST Validate group slug

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/groups/validate-slug`

Validate if group slug is available or not.

**Required Scope(s):** `calendars/groups.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `slug` | `string` | Yes | Slug | calendar-1 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `available` | `boolean` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/groups/validate-slug' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "slug": "calendar-1"
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Group

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/groups/{groupId}`

**Required Scope(s):** `calendars/groups.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `groupId` | `string` | Yes | Group Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No | Success | true |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/groups/:<groupId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Group

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/groups/{groupId}`

Update Group by group ID

**Required Scope(s):** `calendars/groups.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `groupId` | `string` | Yes | Group Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | Yes |  | group a |
| `description` | `string` | Yes |  | group description |
| `slug` | `string` | Yes |  | 15-mins |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `group` | `GroupDTO` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/groups/:<groupId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "group a",
    "description": "group description",
    "slug": "15-mins"
}'
```

**Response Codes:** `200` | `400` | `401`


### PUT Disable Group

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/groups/{groupId}/status`

**Required Scope(s):** `calendars/groups.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `groupId` | `string` | Yes | Group Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `isActive` | `boolean` | Yes | Is Active? | True |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No | Success | true |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/groups/:<groupId>/status' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "isActive": true
}'
```

**Response Codes:** `200` | `400` | `401`


### POST Create appointment

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/events/appointments`

**Required Scope(s):** `calendars/events.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Title | Test Event |
| `meetingLocationType` | `string` | No | Meeting location type.  - If `address` is provided in the request body, the `meetingLocationType` de | custom |
| `meetingLocationId` | `string` | No | The unique identifier for the meeting location. - This value can be found in `calendar.locationConfi | custom_0 |
| `overrideLocationConfig` | `boolean` | No | Flag to override location config - **false** - If only `meetingLocationId` is provided - **true** -  | True |
| `appointmentStatus` | `string` | No |  | confirmed |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |
| `description` | `string` | No | Appointment Description | Booking a call to discuss the project |
| `address` | `string` | No | Appointment Address | Zoom |
| `ignoreDateRange` | `boolean` | No | If set to true, the minimum scheduling notice and date range would be ignored | False |
| `toNotify` | `boolean` | No | If set to false, the automations will not run | False |
| `ignoreFreeSlotValidation` | `boolean` | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateR | True |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, i |  |
| `calendarId` | `string` | Yes | Calendar Id | CVokAlI8fgw4WYWoCtQz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `contactId` | `string` | Yes | Contact Id | 0007BWpSzSwfiuSl0tR2 |
| `startTime` | `string` | Yes | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id | CVokAlI8fgw4WYWoCtQz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `contactId` | `string` | Yes | Contact Id | 0007BWpSzSwfiuSl0tR2 |
| `startTime` | `string` | No | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |
| `title` | `string` | No | Title | Test Event |
| `meetingLocationType` | `string` | No | Meeting Location Type | custom |
| `appointmentStatus` | `string` | No |  | confirmed |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |
| `address` | `string` | No | Appointment Address | Zoom |
| `isRecurring` | `boolean` | No | true if the event is recurring otherwise false | true |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/events/appointments' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test Event",
    "meetingLocationType": "custom",
    "meetingLocationId": "custom_0",
    "overrideLocationConfig": true,
    "appointmentStatus": "confirmed",
    "assignedUserId": "0007BWpSzSwfiuSl0tR2",
    "description": "Booking a call to discuss the project",
    "address": "Zoom"
}'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Appointment

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/events/appointments/{eventId}`

Update appointment

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `eventId` | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Title | Test Event |
| `meetingLocationType` | `string` | No | Meeting location type.  - If `address` is provided in the request body, the `meetingLocationType` de | custom |
| `meetingLocationId` | `string` | No | The unique identifier for the meeting location. - This value can be found in `calendar.locationConfi | custom_0 |
| `overrideLocationConfig` | `boolean` | No | Flag to override location config - **false** - If only `meetingLocationId` is provided - **true** -  | True |
| `appointmentStatus` | `string` | No |  | confirmed |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |
| `description` | `string` | No | Appointment Description | Booking a call to discuss the project |
| `address` | `string` | No | Appointment Address | Zoom |
| `ignoreDateRange` | `boolean` | No | If set to true, the minimum scheduling notice and date range would be ignored | False |
| `toNotify` | `boolean` | No | If set to false, the automations will not run | False |
| `ignoreFreeSlotValidation` | `boolean` | No | If true the time slot validation would be avoided for any appointment creation (even the ignoreDateR | True |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events. DTSTART is not required, i |  |
| `calendarId` | `string` | No | Calendar Id | CVokAlI8fgw4WYWoCtQz |
| `startTime` | `string` | No | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id | CVokAlI8fgw4WYWoCtQz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `contactId` | `string` | Yes | Contact Id | 0007BWpSzSwfiuSl0tR2 |
| `startTime` | `string` | No | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |
| `title` | `string` | No | Title | Test Event |
| `meetingLocationType` | `string` | No | Meeting Location Type | custom |
| `appointmentStatus` | `string` | No |  | confirmed |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |
| `address` | `string` | No | Appointment Address | Zoom |
| `isRecurring` | `boolean` | No | true if the event is recurring otherwise false | true |
| `rrule` | `string` | No | RRULE as per the iCalendar (RFC 5545) specification for recurring events |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/events/appointments/:<eventId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test Event",
    "meetingLocationType": "custom",
    "meetingLocationId": "custom_0",
    "overrideLocationConfig": true,
    "appointmentStatus": "confirmed",
    "assignedUserId": "0007BWpSzSwfiuSl0tR2",
    "description": "Booking a call to discuss the project",
    "address": "Zoom"
}'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Appointment

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/events/appointments/{eventId}`

Get appointment by ID

**Required Scope(s):** `calendars/events.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `eventId` | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `event` | `CalendarEventDTO` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/events/appointments/:<eventId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Calendar Events

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/events`

**Required Scope(s):** `calendars/events.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `userId` | `string` | No | User Id - Owner of an appointment. Either of userId, groupId or calendarId is required |  |
| `calendarId` | `string` | No | Either of calendarId, userId or groupId is required |  |
| `groupId` | `string` | No | Either of groupId, calendarId or userId is required |  |
| `startTime` | `string` | Yes | Start Time (in millis) |  |
| `endTime` | `string` | Yes | End Time (in millis) |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `events` | `array[CalendarEventDTO]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/events' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Blocked Slots

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/blocked-slots`

**Required Scope(s):** `calendars/events.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `userId` | `string` | No | User Id - Owner of an appointment. Either of userId, groupId or calendarId is required |  |
| `calendarId` | `string` | No | Either of calendarId, userId or groupId is required |  |
| `groupId` | `string` | No | Either of groupId, calendarId or userId is required |  |
| `startTime` | `string` | Yes | Start Time (in millis) |  |
| `endTime` | `string` | Yes | End Time (in millis) |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `events` | `array[CalendarEventDTO]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/blocked-slots' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Block Slot

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/events/block-slots`

Create block slot

**Required Scope(s):** `calendars/events.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Title | Test Event |
| `calendarId` | `string` | Yes | Either calendarId or assignedUserId can be set, not both. | CVokAlI8fgw4WYWoCtQz |
| `assignedUserId` | `string` | No | Either calendarId or assignedUserId can be set, not both. | CVokAlI8fgw4WYWoCtQz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `startTime` | `string` | No | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Id | 0TkCdp9PfvLeWKYRRvIz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `title` | `string` | Yes | Title | My event |
| `startTime` | `object` | Yes | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `object` | Yes | End Time | 2021-06-23T04:30:00+05:30 |
| `calendarId` | `string` | No | Calendar id | CVokAlI8fgw4WYWoCtQz |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/events/block-slots' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test Event",
    "calendarId": "CVokAlI8fgw4WYWoCtQz",
    "assignedUserId": "CVokAlI8fgw4WYWoCtQz",
    "locationId": "C2QujeCh8ZnC7al2InWR",
    "startTime": "2021-06-23T03:30:00+05:30",
    "endTime": "2021-06-23T04:30:00+05:30"
}'
```

**Response Codes:** `201` | `400` | `401`


### PUT Update Block Slot

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/events/block-slots/{eventId}`

Update block slot by ID

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `eventId` | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Title | Test Event |
| `calendarId` | `string` | Yes | Either calendarId or assignedUserId can be set, not both. | CVokAlI8fgw4WYWoCtQz |
| `assignedUserId` | `string` | No | Either calendarId or assignedUserId can be set, not both. | CVokAlI8fgw4WYWoCtQz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `startTime` | `string` | No | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `string` | No | End Time | 2021-06-23T04:30:00+05:30 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Id | 0TkCdp9PfvLeWKYRRvIz |
| `locationId` | `string` | Yes | Location Id | C2QujeCh8ZnC7al2InWR |
| `title` | `string` | Yes | Title | My event |
| `startTime` | `object` | Yes | Start Time | 2021-06-23T03:30:00+05:30 |
| `endTime` | `object` | Yes | End Time | 2021-06-23T04:30:00+05:30 |
| `calendarId` | `string` | No | Calendar id | CVokAlI8fgw4WYWoCtQz |
| `assignedUserId` | `string` | No | Assigned User Id | 0007BWpSzSwfiuSl0tR2 |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/events/block-slots/:<eventId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Test Event",
    "calendarId": "CVokAlI8fgw4WYWoCtQz",
    "assignedUserId": "CVokAlI8fgw4WYWoCtQz",
    "locationId": "C2QujeCh8ZnC7al2InWR",
    "startTime": "2021-06-23T03:30:00+05:30",
    "endTime": "2021-06-23T04:30:00+05:30"
}'
```

**Response Codes:** `201` | `400` | `401`


### GET Get Free Slots

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/{calendarId}/free-slots`

Get free slots for a calendar between a date range. Optionally a consumer can also request free slots in a particular timezone and also for a particular user.

**Required Scope(s):** `calendars.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `startDate` | `number` | Yes | Start Date (**⚠️ Important:** Date range cannot be more than 31 days) |  |
| `endDate` | `number` | Yes | End Date (**⚠️ Important:** Date range cannot be more than 31 days) |  |
| `timezone` | `string` | No | The timezone in which the free slots are returned |  |
| `userId` | `string` | No | The user for whom the free slots are returned |  |
| `userIds` | `array` | No | The users for whom the free slots are returned |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/free-slots' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Calendar

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/{calendarId}`

Update calendar by ID.

**Required Scope(s):** `calendars.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `notifications` | `array[CalendarNotification]` | No | 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead. |  |
| `groupId` | `string` | No | Group Id | BqTwX8QFwXzpegMve9EQ |
| `teamMembers` | `array[TeamMember]` | No | Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal c |  |
| `eventType` | `string` | No |  |  |
| `name` | `string` | No |  | test calendar |
| `description` | `string` | No |  | this is used for testing |
| `slug` | `string` | No |  | test1 |
| `widgetSlug` | `string` | No |  | test1 |
| `widgetType` | `string` | No | Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout. | classic |
| `eventTitle` | `string` | No |  |  |
| `eventColor` | `string` | No |  |  |
| `locationConfigurations` | `array[LocationConfiguration]` | No | Meeting location configuration for event calendar |  |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.locatio |  |
| `slotDuration` | `number` | No | This controls the duration of the meeting |  |
| `slotDurationUnit` | `string` | No | Unit for slot duration. |  |
| `preBufferUnit` | `string` | No | Unit for pre-buffer. |  |
| `slotInterval` | `number` | No | Slot interval reflects the amount of time the between booking slots that will be shown in the calend |  |
| `slotIntervalUnit` | `string` | No | Unit for slot interval. |  |
| `slotBuffer` | `number` | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wr |  |
| `preBuffer` | `number` | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to ge |  |
| `appoinmentPerSlot` | `number` | No |  |  |
| `appoinmentPerDay` | `number` | No | Number of appointments that can be booked for a given day |  |
| `allowBookingAfter` | `number` | No | Minimum scheduling notice for events |  |
| `allowBookingAfterUnit` | `string` | No | Unit for minimum scheduling notice | days |
| `allowBookingFor` | `number` | No | Minimum number of days/weeks/months for which to allow booking events |  |
| `allowBookingForUnit` | `string` | No | Unit for controlling the duration for which booking would be allowed for | days |
| `openHours` | `array[OpenHour]` | No |  |  |
| `enableRecurring` | `boolean` | No | Enable recurring appointments for the calendars. Please note that only one member should be added in |  |
| `recurring` | `Recurring` | No |  |  |
| `formId` | `string` | No |  |  |
| `stickyContact` | `boolean` | No |  |  |
| `isLivePaymentMode` | `boolean` | No |  |  |
| `autoConfirm` | `boolean` | No |  |  |
| `shouldSendAlertEmailsToAssignedMember` | `boolean` | No |  |  |
| `alertEmail` | `string` | No |  |  |
| `googleInvitationEmails` | `boolean` | No |  |  |
| `allowReschedule` | `boolean` | No |  |  |
| `allowCancellation` | `boolean` | No |  |  |
| `shouldAssignContactToTeamMember` | `boolean` | No |  |  |
| `shouldSkipAssigningContactForExisting` | `boolean` | No |  |  |
| `notes` | `string` | No |  |  |
| `pixelId` | `string` | No |  |  |
| `formSubmitType` | `string` | No |  |  |
| `formSubmitRedirectURL` | `string` | No |  |  |
| `formSubmitThanksMessage` | `string` | No |  |  |
| `availabilityType` | `number` | No | Determines which availability type to consider: - **1**: Only custom availabilities will be used. -  |  |
| `availabilities` | `array[UpdateAvailability]` | No | This is only to set the custom availability. For standard availability, use the openHours property |  |
| `guestType` | `string` | No |  |  |
| `consentLabel` | `string` | No |  |  |
| `calendarCoverImage` | `string` | No |  |  |
| `lookBusyConfig` | `object` | No | Look Busy Configuration |  |
| `isActive` | `boolean` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendar` | `CalendarDTO` | Yes |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "notifications": [],
    "groupId": "BqTwX8QFwXzpegMve9EQ",
    "teamMembers": [],
    "eventType": "<eventType>",
    "name": "test calendar",
    "description": "this is used for testing",
    "slug": "test1",
    "widgetSlug": "test1"
}'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Calendar

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/{calendarId}`

Get calendar by ID

**Required Scope(s):** `calendars.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendar` | `CalendarDTO` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Calendar

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/{calendarId}`

Delete calendar by ID

**Required Scope(s):** `calendars.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes | Calendar Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Success | true |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Event

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/events/{eventId}`

Delete event by ID

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `eventId` | `string` | Yes | Event Id or Instance id. For recurring appointments send masterEventId to modify original series. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `succeeded` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/events/:<eventId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `201` | `400` | `401`


### GET Get Notes

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/appointments/{appointmentId}/notes`

Get Appointment Notes

**Required Scope(s):** `calendars/events.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appointmentId` | `string` | Yes | Appointment ID |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `limit` | `number` | Yes | Limit of notes to fetch |  |
| `offset` | `number` | Yes | Offset of notes to fetch |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `notes` | `array[GetNoteSchema]` | No |  |  |
| `hasMore` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/appointments/:<appointmentId>/notes' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Note

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/appointments/{appointmentId}/notes`

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appointmentId` | `string` | Yes | Appointment ID |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `userId` | `string` | No |  | GCs5KuzPqTls7vWclkEV |
| `body` | `string` | Yes | Note body | lorem ipsum |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `note` | `GetNoteSchema` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/appointments/:<appointmentId>/notes' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "GCs5KuzPqTls7vWclkEV",
    "body": "lorem ipsum"
}'
```

**Response Codes:** `201` | `400` | `401`


### PUT Update Note

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/appointments/{appointmentId}/notes/{noteId}`

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appointmentId` | `string` | Yes | Appointment ID |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `userId` | `string` | No |  | GCs5KuzPqTls7vWclkEV |
| `body` | `string` | Yes | Note body | lorem ipsum |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `note` | `GetNoteSchema` | No |  |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/appointments/:<appointmentId>/notes/:<noteId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "userId": "GCs5KuzPqTls7vWclkEV",
    "body": "lorem ipsum"
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Note

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/appointments/{appointmentId}/notes/{noteId}`

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appointmentId` | `string` | Yes | Appointment ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No |  | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/appointments/:<appointmentId>/notes/:<noteId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Calendar Resource

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/resources/{resourceType}/{id}`

Get calendar resource by ID

**Required Scope(s):** `calendars/resources.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `resourceType` | `string` | Yes | Calendar Resource Type |  |
| `id` | `string` | Yes | Calendar Resource ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID of the resource |  |
| `name` | `string` | Yes | Name of the resource | yoga room |
| `resourceType` | `string` | Yes |  |  |
| `isActive` | `boolean` | Yes | Whether the resource is active |  |
| `description` | `string` | No | Description of the resource |  |
| `quantity` | `number` | No | Quantity of the resource |  |
| `outOfService` | `number` | No | Indicates if the resource is out of service | 0 |
| `capacity` | `number` | No | Capacity of the resource | 85 |
| `calendarIds` | `array[string]` | Yes | Calendar IDs | ['Jsj0xnlDDjw0SuvX1J13', 'oCM5feFC86FAAbcO7lJK'] |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/resources/:<resourceType>/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Calendar Resource

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/resources/{resourceType}/{id}`

Update calendar resource by ID

**Required Scope(s):** `calendars/resources.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `resourceType` | `string` | Yes | Calendar Resource Type |  |
| `id` | `string` | Yes | Calendar Resource ID |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | No |  |  |
| `name` | `string` | No |  |  |
| `description` | `string` | No |  |  |
| `quantity` | `number` | No | Quantity of the equipment. |  |
| `outOfService` | `number` | No | Quantity of the out of service equipment. |  |
| `capacity` | `number` | No | Capacity of the room. |  |
| `calendarIds` | `array[string]` | No | Service calendar IDs to be mapped with the resource.      One equipment can only be mapped with one  |  |
| `isActive` | `boolean` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID of the resource |  |
| `name` | `string` | Yes | Name of the resource | yoga room |
| `resourceType` | `string` | Yes |  |  |
| `isActive` | `boolean` | Yes | Whether the resource is active |  |
| `description` | `string` | No | Description of the resource |  |
| `quantity` | `number` | No | Quantity of the resource |  |
| `outOfService` | `number` | No | Indicates if the resource is out of service | 0 |
| `capacity` | `number` | No | Capacity of the resource | 85 |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/resources/:<resourceType>/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "<locationId>",
    "name": "<name>",
    "description": "<description>",
    "quantity": 0,
    "outOfService": 0,
    "capacity": 0,
    "calendarIds": [],
    "isActive": false
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Calendar Resource

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/resources/{resourceType}/{id}`

Delete calendar resource by ID

**Required Scope(s):** `calendars/resources.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `resourceType` | `string` | Yes | Calendar Resource Type |  |
| `id` | `string` | Yes | Calendar Resource ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No | Success | true |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/resources/:<resourceType>/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET List Calendar Resources

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/resources/{resourceType}`

List calendar resources by resource type and location ID

**Required Scope(s):** `calendars/resources.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `resourceType` | `string` | Yes | Calendar Resource Type |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `limit` | `number` | Yes |  |  |
| `skip` | `number` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/resources/:<resourceType>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Calendar Resource

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/resources/{resourceType}`

Create calendar resource by resource type

**Required Scope(s):** `calendars/resources.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `resourceType` | `string` | Yes | Calendar Resource Type |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |
| `name` | `string` | Yes |  |  |
| `description` | `string` | Yes |  |  |
| `quantity` | `number` | Yes | Quantity of the equipment. |  |
| `outOfService` | `number` | Yes | Quantity of the out of service equipment. |  |
| `capacity` | `number` | Yes | Capacity of the room. |  |
| `calendarIds` | `array[string]` | Yes | Service calendar IDs to be mapped with the resource.      One equipment can only be mapped with one  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID of the resource |  |
| `name` | `string` | Yes | Name of the resource | yoga room |
| `resourceType` | `string` | Yes |  |  |
| `isActive` | `boolean` | Yes | Whether the resource is active |  |
| `description` | `string` | No | Description of the resource |  |
| `quantity` | `number` | No | Quantity of the resource |  |
| `outOfService` | `number` | No | Indicates if the resource is out of service | 0 |
| `capacity` | `number` | No | Capacity of the resource | 85 |
| `calendarIds` | `array[string]` | Yes | Calendar IDs | ['Jsj0xnlDDjw0SuvX1J13', 'oCM5feFC86FAAbcO7lJK'] |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/resources/:<resourceType>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "<locationId>",
    "name": "<name>",
    "description": "<description>",
    "quantity": 0,
    "outOfService": 0,
    "capacity": 0,
    "calendarIds": []
}'
```

**Response Codes:** `201` | `400` | `401`


### GET Get notifications

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/{calendarId}/notifications`

Get calendar notifications based on query

**Required Scope(s):** `calendars/events.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `isActive` | `boolean` | No |  |  |
| `deleted` | `boolean` | No |  |  |
| `limit` | `number` | No | Number of records to return |  |
| `skip` | `number` | No | Number of records to skip |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/notifications' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create notification

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/{calendarId}/notifications`

Create Calendar notifications, either one or multiple. All notification settings must be for single calendar only

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/notifications' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{}'
```

**Response Codes:** `200` | `400` | `401`


### GET Get notification

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/{calendarId}/notifications/{notificationId}`

Find Event notification by notificationId

**Required Scope(s):** `calendars/events.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes |  |  |
| `notificationId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `_id` | `string` | No | Notification ID |  |
| `receiverType` | `string` | No |  | contact |
| `additionalEmailIds` | `array[string]` | No |  | ['example1@email.com', 'example2@email.com'] |
| `additionalPhoneNumbers` | `array[string]` | No |  | ['+919876744444', '+919876744445'] |
| `channel` | `string` | No |  | email |
| `notificationType` | `string` | No |  | confirmation |
| `isActive` | `boolean` | No |  | True |
| `additionalWhatsappNumbers` | `array[string]` | No |  | ['+919876744444', '+919876744445'] |
| `templateId` | `string` | No |  | 0as9d8as0d |
| `body` | `string` | No |  | This is a test notification |
| `subject` | `string` | No |  | Test Notification |
| `afterTime` | `array[SchedulesDTO]` | No |  | [{'timeOffset': 1, 'unit': 'hours'}] |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/notifications/:<notificationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update notification

**Endpoint:** `PUT https://services.leadconnectorhq.com/calendars/{calendarId}/notifications/{notificationId}`

Update Event notification by id

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes |  |  |
| `notificationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `receiverType` | `string` | No | Notification recipient type |  |
| `additionalEmailIds` | `array[string]` | No | Additional email addresses to receive notifications. | ['example1@email.com', 'example2@email.com'] |
| `additionalPhoneNumbers` | `array[string]` | No | Additional phone numbers to receive notifications. | ['+919876744444', '+919876744445'] |
| `selectedUsers` | `array[string]` | No | selected user for in-App notification |  |
| `channel` | `string` | No | Notification channel |  |
| `notificationType` | `string` | No | Notification type |  |
| `isActive` | `boolean` | No | Is the notification active |  |
| `deleted` | `boolean` | No | Marks the notification as deleted (soft delete) |  |
| `templateId` | `string` | No | Template ID for email notification |  |
| `body` | `string` | No | Body  for email notification. Not necessary for in-App notification |  |
| `subject` | `string` | No | Subject  for email notification. Not necessary for in-App notification |  |
| `afterTime` | `array[SchedulesDTO]` | No | Specifies the time after which the follow-up notification should be sent. This is not required for o | [{'timeOffset': 1, 'unit': 'hours'}] |
| `beforeTime` | `array[SchedulesDTO]` | No | Specifies the time before which the reminder notification should be sent. This is not required for o | [{'timeOffset': 1, 'unit': 'hours'}] |
| `fromAddress` | `string` | No | From address for email notification |  |
| `fromNumber` | `string` | No | from number for sms notification |  |
| `fromName` | `string` | No | From name for email/sms notification |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `message` | `string` | Yes | Result of delete/update operation |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/notifications/:<notificationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "receiverType": "<receiverType>",
    "additionalEmailIds": [
        "example1@email.com",
        "example2@email.com"
    ],
    "additionalPhoneNumbers": [
        "+919876744444",
        "+919876744445"
    ],
    "selectedUsers": [],
    "channel": "<channel>",
    "notificationType": "<notificationType>",
    "isActive": false,
    "deleted": false
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Notification

**Endpoint:** `DELETE https://services.leadconnectorhq.com/calendars/{calendarId}/notifications/{notificationId}`

Delete notification

**Required Scope(s):** `calendars/events.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `calendarId` | `string` | Yes |  |  |
| `notificationId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `message` | `string` | Yes | Result of delete/update operation |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/calendars/:<calendarId>/notifications/:<notificationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Calendars

**Endpoint:** `GET https://services.leadconnectorhq.com/calendars/`

Get all calendars in a location.

**Required Scope(s):** `calendars.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `groupId` | `string` | No | Group Id |  |
| `showDrafted` | `boolean` | No | Show drafted |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendars` | `array[CalendarDTO]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/calendars/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Calendar

**Endpoint:** `POST https://services.leadconnectorhq.com/calendars/`

Create calendar in a location.

**Required Scope(s):** `calendars.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `isActive` | `boolean` | No | Should the created calendar be active or draft |  |
| `notifications` | `array[CalendarNotification]` | No | 🚨 Deprecated! Please use 'Calendar Notifications APIs' instead. |  |
| `locationId` | `string` | Yes |  | ocQHyuzHvysMo5N5VsXc |
| `groupId` | `string` | No | Group Id | BqTwX8QFwXzpegMve9EQ |
| `teamMembers` | `array[TeamMember]` | No | Team members are required for calendars of type: Round Robin, Collective, Class, Service. Personal c |  |
| `eventType` | `string` | No |  |  |
| `name` | `string` | Yes |  | test calendar |
| `description` | `string` | No |  | this is used for testing |
| `slug` | `string` | No |  | test1 |
| `widgetSlug` | `string` | No |  | test1 |
| `calendarType` | `string` | No |  |  |
| `widgetType` | `string` | No | Calendar widget type. Choose "default" for "neo" and "classic" for "classic" layout. | classic |
| `eventTitle` | `string` | No |  |  |
| `eventColor` | `string` | No |  |  |
| `meetingLocation` | `string` | No | 🚨 Deprecated! Use `locationConfigurations.location` or `teamMembers[].locationConfigurations.locatio |  |
| `locationConfigurations` | `array[LocationConfiguration]` | No | Meeting location configuration for event calendar |  |
| `slotDuration` | `number` | No | This controls the duration of the meeting |  |
| `slotDurationUnit` | `string` | No | Unit for slot duration. |  |
| `slotInterval` | `number` | No | Slot interval reflects the amount of time the between booking slots that will be shown in the calend |  |
| `slotIntervalUnit` | `string` | No | Unit for slot interval. |  |
| `slotBuffer` | `number` | No | Slot-Buffer is additional time that can be added after an appointment, allowing for extra time to wr |  |
| `slotBufferUnit` | `string` | No | Unit for slot buffer. |  |
| `preBuffer` | `number` | No | Pre-Buffer is additional time that can be added before an appointment, allowing for extra time to ge |  |
| `preBufferUnit` | `string` | No | Unit for pre-buffer. |  |
| `appoinmentPerSlot` | `number` | No | Maximum bookings per slot (per user). Maximum seats per slot in case of Class Booking Calendar. |  |
| `appoinmentPerDay` | `number` | No | Number of appointments that can be booked for a given day |  |
| `allowBookingAfter` | `number` | No | Minimum scheduling notice for events |  |
| `allowBookingAfterUnit` | `string` | No | Unit for minimum scheduling notice | days |
| `allowBookingFor` | `number` | No | Minimum number of days/weeks/months for which to allow booking events |  |
| `allowBookingForUnit` | `string` | No | Unit for controlling the duration for which booking would be allowed for | days |
| `openHours` | `array[OpenHour]` | No | This is only to set the standard availability. For custom availability, use the availabilities prope |  |
| `enableRecurring` | `boolean` | No | Enable recurring appointments for the calendars. Please note that only one member should be added in |  |
| `recurring` | `Recurring` | No |  |  |
| `formId` | `string` | No |  |  |
| `stickyContact` | `boolean` | No |  |  |
| `isLivePaymentMode` | `boolean` | No |  |  |
| `autoConfirm` | `boolean` | No |  |  |
| `shouldSendAlertEmailsToAssignedMember` | `boolean` | No |  |  |
| `alertEmail` | `string` | No |  |  |
| `googleInvitationEmails` | `boolean` | No |  |  |
| `allowReschedule` | `boolean` | No |  |  |
| `allowCancellation` | `boolean` | No |  |  |
| `shouldAssignContactToTeamMember` | `boolean` | No |  |  |
| `shouldSkipAssigningContactForExisting` | `boolean` | No |  |  |
| `notes` | `string` | No |  |  |
| `pixelId` | `string` | No |  |  |
| `formSubmitType` | `string` | No |  |  |
| `formSubmitRedirectURL` | `string` | No |  |  |
| `formSubmitThanksMessage` | `string` | No |  |  |
| `availabilityType` | `number` | No | Determines which availability type to consider: - **1**: Only custom availabilities will be used. -  |  |
| `availabilities` | `array[Availability]` | No | This is only to set the custom availability. For standard availability, use the openHours property |  |
| `guestType` | `string` | No |  |  |
| `consentLabel` | `string` | No |  |  |
| `calendarCoverImage` | `string` | No |  | https://path-to-image.com |
| `lookBusyConfig` | `object` | No | Look Busy Configuration |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `calendar` | `CalendarDTO` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/calendars/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "isActive": false,
    "notifications": [],
    "locationId": "ocQHyuzHvysMo5N5VsXc",
    "groupId": "BqTwX8QFwXzpegMve9EQ",
    "teamMembers": [],
    "eventType": "<eventType>",
    "name": "test calendar",
    "description": "this is used for testing"
}'
```

**Response Codes:** `200` | `400` | `401`


---

## Conversations API

Documentation for Conversations API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/conversations/search` | Search Conversations | `conversations.readonly` |
| `GET` | `/conversations/{conversationId}` | Get Conversation | `conversations.readonly` |
| `PUT` | `/conversations/{conversationId}` | Update Conversation | `conversations.write` |
| `DELETE` | `/conversations/{conversationId}` | Delete Conversation | `conversations.write` |
| `GET` | `/conversations/messages/email/{id}` | Get email by Id | `—` |
| `DELETE` | `/conversations/messages/email/{emailMessageId}/schedule` | Cancel a scheduled email message. | `—` |
| `GET` | `/conversations/messages/{id}` | Get message by message id | `conversations/message.readonly` |
| `GET` | `/conversations/{conversationId}/messages` | Get messages by conversation id | `conversations/message.readonly` |
| `POST` | `/conversations/messages` | Send a new message | `conversations/message.write` |
| `POST` | `/conversations/messages/inbound` | Add an inbound message | `conversations/message.write` |
| `POST` | `/conversations/messages/outbound` | Add an external outbound call | `conversations/message.write` |
| `DELETE` | `/conversations/messages/{messageId}/schedule` | Cancel a scheduled message. | `conversations/message.write` |
| `POST` | `/conversations/messages/upload` | Upload file attachments | `conversations/message.write` |
| `PUT` | `/conversations/messages/{messageId}/status` | Update message status | `conversations/message.write` |
| `GET` | `/conversations/messages/{messageId}/locations/{locationId}/recording` | Get Recording by Message ID | `—` |
| `GET` | `/conversations/locations/{locationId}/messages/{messageId}/transcription` | Get transcription by Message ID | `—` |
| `GET` | `/conversations/locations/{locationId}/messages/{messageId}/transcription/download` | Download transcription by Message ID | `—` |
| `POST` | `/conversations/providers/live-chat/typing` | Agent/Ai-Bot is typing a message indicator for live chat | `conversations/livechat.write` |
| `POST` | `/conversations/` | Create Conversation | `conversations.write` |

### GET Search Conversations

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/search`

Returns a list of all conversations matching the search criteria along with the sort and filter options selected.

**Required Scope(s):** `conversations.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id |  |
| `contactId` | `string` | No | Contact Id |  |
| `assignedTo` | `string` | No | User IDs that conversations are assigned to. Multiple IDs can be provided as comma-separated values. |  |
| `followers` | `string` | No | User IDs of followers to filter conversations by. Multiple IDs can be provided as comma-separated va |  |
| `mentions` | `string` | No | User Id of the mention. Multiple values are comma separated. |  |
| `query` | `string` | No | Search paramater as a string |  |
| `sort` | `string` | No | Sort paramater - asc or desc |  |
| `startAfterDate` | `any` | No | Search to begin after the specified date - should contain the sort value of the last document |  |
| `id` | `string` | No | Id of the conversation |  |
| `limit` | `number` | No | Limit of conversations - Default is 20 |  |
| `lastMessageType` | `string` | No | Type of the last message in the conversation as a string |  |
| `lastMessageAction` | `string` | No | Action of the last outbound message in the conversation as string. |  |
| `lastMessageDirection` | `string` | No | Direction of the last message in the conversation as string. |  |
| `status` | `string` | No | The status of the conversation to be filtered - all, read, unread, starred  |  |
| `sortBy` | `string` | No | The sorting of the conversation to be filtered as - manual messages or all messages |  |
| `sortScoreProfile` | `string` | No | Id of score profile on which sortBy.ScoreProfile should sort on |  |
| `scoreProfile` | `string` | No | Id of score profile on which conversations should get filtered out, works with scoreProfileMin & sco |  |
| `scoreProfileMin` | `number` | No | Minimum value for score |  |
| `scoreProfileMax` | `number` | No | Maximum value for score |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `conversations` | `array[ConversationSchema]` | Yes | The list of all conversations found for the given query |  |
| `total` | `number` | Yes | Total Number of results found for the given query | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/search' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Conversation

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/{conversationId}`

Get the conversation details based on the conversation ID

**Required Scope(s):** `conversations.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID as string |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `contactId` | `string` | Yes | Unique identifier of the contact associated with this conversation | ve9EPM428kjkvShlRW1KT |
| `locationId` | `string` | Yes | Unique identifier of the business location where this conversation takes place | ve9EPM428kjkvShlRW1KT |
| `deleted` | `boolean` | Yes | Flag indicating if this conversation has been moved to trash/deleted | False |
| `inbox` | `boolean` | Yes | Flag indicating if this conversation is currently in the main inbox view | True |
| `type` | `number` | Yes | Communication channel type for this conversation: 1 (Phone), 2 (Email), 3 (Facebook Messenger), 4 (R |  |
| `unreadCount` | `number` | Yes | Number of messages in this conversation that have not been read by the user | 1 |
| `assignedTo` | `string` | No | Unique identifier of the team member currently responsible for handling this conversation | ve9EPM428kjkvShlRW1KT |
| `id` | `string` | Yes | Unique identifier for this specific conversation thread | ve9EPM428kjkvShlRW1KT |
| `starred` | `boolean` | No | Flag indicating if this conversation has been marked as important/starred by the user | True |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/:<conversationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### PUT Update Conversation

**Endpoint:** `PUT https://services.leadconnectorhq.com/conversations/{conversationId}`

Update the conversation details based on the conversation ID

**Required Scope(s):** `conversations.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID as string |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID as string | tDtDnQdgm2LXpyiqYvZ6 |
| `unreadCount` | `number` | No | Count of unread messages in the conversation | 1 |
| `starred` | `boolean` | No | Starred status of the conversation. | True |
| `feedback` | `object` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Boolean value as the API response. | True |
| `conversation` | `object` | Yes | Conversation data of the provided conversation ID. |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/conversations/:<conversationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "tDtDnQdgm2LXpyiqYvZ6",
    "unreadCount": 1,
    "starred": true
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Delete Conversation

**Endpoint:** `DELETE https://services.leadconnectorhq.com/conversations/{conversationId}`

Delete the conversation details based on the conversation ID

**Required Scope(s):** `conversations.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID as string |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Boolean value as the API response. | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/conversations/:<conversationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get email by Id

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/messages/email/{id}`


**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `altId` | `string` | No | External Id | ve9EPM428h8vShlRW1KT |
| `threadId` | `string` | Yes | Message Id or thread Id | ve9EPM428h8vShlRW1KT |
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `contactId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `conversationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `dateAdded` | `string` | Yes |  | 2024-03-27T18:13:49.000Z |
| `subject` | `string` | No |  | Order confirm |
| `body` | `string` | Yes |  | Hi there |
| `direction` | `string` | Yes |  |  |
| `status` | `string` | No |  |  |
| `contentType` | `string` | Yes |  | text/plain |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/messages/email/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### DELETE Cancel a scheduled email message.

**Endpoint:** `DELETE https://services.leadconnectorhq.com/conversations/messages/email/{emailMessageId}/schedule`

Post the messageId for the API to delete a scheduled email message. <br />


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `emailMessageId` | `string` | Yes | Email Message Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `number` | Yes | HTTP Status code of the request | 404 |
| `message` | `string` | Yes | Error message of the request | Failed cancel the scheduled message |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/conversations/messages/email/:<emailMessageId>/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### GET Get message by message id

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/messages/{id}`

Get message by message id.

**Required Scope(s):** `conversations/message.readonly`


**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `altId` | `string` | No | Alternative identifier for the message | msg_123456789 |
| `type` | `number` | Yes |  | 1 |
| `messageType` | `string` | Yes | Type of the message as a string | SMS |
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `contactId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `conversationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `dateAdded` | `string` | Yes |  | 2024-03-27T18:13:49.000Z |
| `body` | `string` | No |  | Hi there |
| `direction` | `string` | Yes |  |  |
| `status` | `string` | No |  |  |
| `contentType` | `string` | Yes |  | text/plain |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/messages/:<id>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get messages by conversation id

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/{conversationId}/messages`

Get messages by conversation id.

**Required Scope(s):** `conversations/message.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID as string |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `lastMessageId` | `string` | No | Message ID of the last message in the list as a string |  |
| `limit` | `number` | No | Number of messages to be fetched from the conversation. Default limit is 20 |  |
| `type` | `string` | No | Types of message to fetched separated with comma |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `messages` | `object` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/:<conversationId>/messages' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Send a new message

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/messages`

Post the necessary fields for the API to send a new message.

**Required Scope(s):** `conversations/message.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | Yes | Type of message being sent | Email |
| `contactId` | `string` | Yes | ID of the contact receiving the message | abc123def456 |
| `appointmentId` | `string` | No | ID of the associated appointment | appt123 |
| `attachments` | `array[string]` | No | Array of attachment URLs | ['https://storage.com/file1.pdf', 'https://storage.com/file2 |
| `emailFrom` | `string` | No | Email address to send from | sender@company.com |
| `emailCc` | `array[string]` | No | Array of CC email addresses | ['cc1@company.com', 'cc2@company.com'] |
| `emailBcc` | `array[string]` | No | Array of BCC email addresses | ['bcc1@company.com', 'bcc2@company.com'] |
| `html` | `string` | No | HTML content of the message | <p>Hello World</p> |
| `message` | `string` | No | Text content of the message | Hello, how can I help you today? |
| `subject` | `string` | No | Subject line for email messages | Important Update |
| `replyMessageId` | `string` | No | ID of message being replied to | msg123 |
| `templateId` | `string` | No | ID of message template | template123 |
| `threadId` | `string` | No | ID of message thread. For email messages, this is the message ID that contains multiple email messag | thread123 |
| `scheduledTimestamp` | `number` | No | UTC Timestamp (in seconds) at which the message should be scheduled | 1669287863 |
| `conversationProviderId` | `string` | No | ID of conversation provider | provider123 |
| `emailTo` | `string` | No | Email address to send to, if different from contact's primary email. This should be a valid email ad | recipient@company.com |
| `emailReplyMode` | `string` | No | Mode for email replies | reply_all |
| `fromNumber` | `string` | No | Phone number used as the sender number for outbound messages | +1499499299 |
| `toNumber` | `string` | No | Recipient phone number for outbound messages | +1439499299 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID. | ABC12h2F6uBrIkfXYazb |
| `emailMessageId` | `string` | No | This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL | rnGyqh2F6uBrIkfhFo9A |
| `messageId` | `string` | Yes | This is the main Message ID | t22c6DQcTDf3MjRhwf77 |
| `messageIds` | `array[string]` | No | When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messa |  |
| `msg` | `string` | No | Additional response message when sending a workflow message | Message queued successfully. |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/messages' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "Email",
    "contactId": "abc123def456",
    "appointmentId": "appt123",
    "attachments": [
        "https://storage.com/file1.pdf",
        "https://storage.com/file2.jpg"
    ],
    "emailFrom": "sender@company.com",
    "emailCc": [
        "cc1@company.com",
        "cc2@company.com"
    ],
    "emailBcc": [
        "bcc1@company.com",
        "bcc2@company.com"
    ],
    "html": "<p>Hello World</p>"
}'
```

**Response Codes:** `200` | `400` | `401`


### POST Add an inbound message

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/messages/inbound`

Post the necessary fields for the API to add a new inbound message. <br />

**Required Scope(s):** `conversations/message.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | Yes | Message Type | SMS |
| `attachments` | `array[string]` | No | Array of attachments |  |
| `message` | `string` | No | Message Body |  |
| `conversationId` | `string` | Yes | Conversation Id | ve9EPM428h8vShlRW1KT |
| `conversationProviderId` | `string` | Yes | Conversation Provider Id | 61d6d1f9cdac7612faf80753 |
| `html` | `string` | No | HTML Body of Email |  |
| `subject` | `string` | No | Subject of the Email |  |
| `emailFrom` | `string` | No | Email address to send from. This field is associated with the contact record and cannot be dynamical | sender@company.com |
| `emailTo` | `string` | No | Recipient email address. This field is associated with the contact record and cannot be dynamically  |  |
| `emailCc` | `array[string]` | No | List of email address to CC | ['john1@doe.com', 'john2@doe.com'] |
| `emailBcc` | `array[string]` | No | List of email address to BCC | ['john1@doe.com', 'john2@doe.com'] |
| `emailMessageId` | `string` | No | Send the email message id for which this email should be threaded. This is for replying to a specifi |  |
| `altId` | `string` | No | external mail provider's message id | 61d6d1f9cdac7612faf80753 |
| `direction` | `object` | No | Message direction, if required can be set manually, default is outbound | ['outbound', 'inbound'] |
| `date` | `string (date-time)` | No | Date of the inbound message |  |
| `call` | `object` | No | Phone call dialer and receiver information |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes |  |  |
| `conversationId` | `string` | Yes | Conversation ID. | ABC12h2F6uBrIkfXYazb |
| `messageId` | `string` | Yes | This is the main Message ID | t22c6DQcTDf3MjRhwf77 |
| `message` | `string` | Yes |  |  |
| `contactId` | `string` | No |  |  |
| `dateAdded` | `string (date-time)` | No |  |  |
| `emailMessageId` | `string` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/messages/inbound' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "SMS",
    "attachments": [],
    "message": "<message>",
    "conversationId": "ve9EPM428h8vShlRW1KT",
    "conversationProviderId": "61d6d1f9cdac7612faf80753",
    "html": "<html>",
    "subject": "<subject>",
    "emailFrom": "sender@company.com"
}'
```

**Response Codes:** `200` | `400` | `401`


### POST Add an external outbound call

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/messages/outbound`

Post the necessary fields for the API to add a new outbound call.

**Required Scope(s):** `conversations/message.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | Yes | Message Type | Call |
| `attachments` | `array[string]` | No | Array of attachments |  |
| `conversationId` | `string` | Yes | Conversation Id | ve9EPM428h8vShlRW1KT |
| `conversationProviderId` | `string` | Yes | Conversation Provider Id | 61d6d1f9cdac7612faf80753 |
| `altId` | `string` | No | external mail provider's message id | 61d6d1f9cdac7612faf80753 |
| `date` | `string (date-time)` | No | Date of the outbound message |  |
| `call` | `object` | No | Phone call dialer and receiver information |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes |  |  |
| `conversationId` | `string` | Yes | Conversation ID. | ABC12h2F6uBrIkfXYazb |
| `messageId` | `string` | Yes | This is the main Message ID | t22c6DQcTDf3MjRhwf77 |
| `message` | `string` | Yes |  |  |
| `contactId` | `string` | No |  |  |
| `dateAdded` | `string (date-time)` | No |  |  |
| `emailMessageId` | `string` | No |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/messages/outbound' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "Call",
    "attachments": [],
    "conversationId": "ve9EPM428h8vShlRW1KT",
    "conversationProviderId": "61d6d1f9cdac7612faf80753",
    "altId": "61d6d1f9cdac7612faf80753"
}'
```

**Response Codes:** `200` | `400` | `401`


### DELETE Cancel a scheduled message.

**Endpoint:** `DELETE https://services.leadconnectorhq.com/conversations/messages/{messageId}/schedule`

Post the messageId for the API to delete a scheduled message. <br />

**Required Scope(s):** `conversations/message.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `messageId` | `string` | Yes | Message Id |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `number` | Yes | HTTP Status code of the request | 404 |
| `message` | `string` | Yes | Error message of the request | Failed cancel the scheduled message |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/conversations/messages/:<messageId>/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Upload file attachments

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/messages/upload`

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "fileAttachment". <br /><br /> The allowed file types are: <br/> <ul><li>JPG</li><li>JPEG</li><li>PNG</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>PDF</li><li>DOC</li><li>DOCX</li><li>TXT</li><li>MP3</li><li>WAV</li></ul> <br /><br /> The API will return an object with the URLs

**Required Scope(s):** `conversations/message.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation Id | ve9EPM428h8vShlRW1KT |
| `locationId` | `string` | Yes |  |  |
| `attachmentUrls` | `array[string]` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `uploadedFiles` | `object` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/messages/upload' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "conversationId": "ve9EPM428h8vShlRW1KT",
    "locationId": "<locationId>",
    "attachmentUrls": []
}'
```

**Response Codes:** `200` | `400` | `401` | `413` | `415`


### PUT Update message status

**Endpoint:** `PUT https://services.leadconnectorhq.com/conversations/messages/{messageId}/status`

Post the necessary fields for the API to update message status.

**Required Scope(s):** `conversations/message.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `messageId` | `string` | Yes | Message Id |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `status` | `string` | Yes | Message status | read |
| `error` | `object` | No | Error object from the conversation provider |  |
| `emailMessageId` | `string` | No | Email message Id | ve9EPM428h8vShlRW1KT |
| `recipients` | `array[string]` | No | Email delivery status for additional email recipients. |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `conversationId` | `string` | Yes | Conversation ID. | ABC12h2F6uBrIkfXYazb |
| `emailMessageId` | `string` | No | This contains the email message id (only for Email type). Use this ID to send inbound replies to GHL | rnGyqh2F6uBrIkfhFo9A |
| `messageId` | `string` | Yes | This is the main Message ID | t22c6DQcTDf3MjRhwf77 |
| `messageIds` | `array[string]` | No | When sending via the GMB channel, we will be returning list of `messageIds` instead of single `messa |  |
| `msg` | `string` | No | Additional response message when sending a workflow message | Message queued successfully. |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/conversations/messages/:<messageId>/status' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "status": "read",
    "emailMessageId": "ve9EPM428h8vShlRW1KT",
    "recipients": []
}'
```

**Response Codes:** `200` | `400` | `401` | `403`


### GET Get Recording by Message ID

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/messages/{messageId}/locations/{locationId}/recording`

Get the recording for a message by passing the message id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID as string |  |
| `messageId` | `string` | Yes | Message ID as string |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/messages/:<messageId>/locations/:<locationId>/recording' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get transcription by Message ID

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/locations/{locationId}/messages/{messageId}/transcription`

Get the recording transcription for a message by passing the message id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID as string |  |
| `messageId` | `string` | Yes | Message ID as string |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `mediaChannel` | `number` | Yes | Media channel describes the user interaction channel | 1 |
| `sentenceIndex` | `number` | Yes | Index of the sentence in the transcription | 1 |
| `startTime` | `number` | Yes | Start time of the sentence in milliseconds | 34 |
| `endTime` | `number` | Yes | End time of the sentence in milliseconds | 45 |
| `transcript` | `string` | Yes | Transcript of the sentence | This call may be recorded for quality assurance purposes. |
| `confidence` | `number` | Yes | Confidence of the transcription | 0.5 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/locations/:<locationId>/messages/:<messageId>/transcription' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Download transcription by Message ID

**Endpoint:** `GET https://services.leadconnectorhq.com/conversations/locations/{locationId}/messages/{messageId}/transcription/download`

Download the recording transcription for a message by passing the message id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID as string |  |
| `messageId` | `string` | Yes | Message ID as string |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/conversations/locations/:<locationId>/messages/:<messageId>/transcription/download' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Agent/Ai-Bot is typing a message indicator for live chat

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/providers/live-chat/typing`

Agent/AI-Bot will call this when they are typing a message in live chat message

**Required Scope(s):** `conversations/livechat.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id | ve9EPM428h8vShlRW1KT |
| `isTyping` | `string` | Yes | Typing status | True |
| `visitorId` | `string` | Yes | visitorId is the Unique ID assigned to each Live chat visitor. visitorId will be added soon in <a hr | ve9EPM428h8vShlRW1KT |
| `conversationId` | `string` | Yes | Conversation Id | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes |  |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/providers/live-chat/typing' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "isTyping": true,
    "visitorId": "ve9EPM428h8vShlRW1KT",
    "conversationId": "ve9EPM428h8vShlRW1KT"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### POST Create Conversation

**Endpoint:** `POST https://services.leadconnectorhq.com/conversations/`

Creates a new conversation with the data provided

**Required Scope(s):** `conversations.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID as string | tDtDnQdgm2LXpyiqYvZ6 |
| `contactId` | `string` | Yes | Contact ID as string | tDtDnQdgm2LXpyiqYvZ6 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Indicates whether the API request was successful. | True |
| `conversation` | `object` | Yes | Conversation data of the provided conversation ID. |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/conversations/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "tDtDnQdgm2LXpyiqYvZ6",
    "contactId": "tDtDnQdgm2LXpyiqYvZ6"
}'
```

**Response Codes:** `201` | `400` | `401`


---

## Email API

Documentation for emails API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/emails/schedule` | Get Campaigns | `emails/schedule.readonly` |
| `POST` | `/emails/builder` | Create a new template | `emails/builder.write` |
| `GET` | `/emails/builder` | Fetch email templates | `emails/builder.readonly` |
| `DELETE` | `/emails/builder/{locationId}/{templateId}` | Delete a template | `—` |
| `POST` | `/emails/builder/data` | Update a template | `emails/builder.write` |

### GET Get Campaigns

**Endpoint:** `GET https://services.leadconnectorhq.com/emails/schedule`

**Required Scope(s):** `emails/schedule.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID to fetch campaigns from | ohjiah0wdg3bzmzacvd6 |
| `limit` | `number` | No | Maximum number of campaigns to return. Defaults to 10, maximum is 100 | 7 |
| `offset` | `number` | No | Number of campaigns to skip for pagination | 0 |
| `status` | `string` | No | Filter by schedule status |  |
| `emailStatus` | `string` | No | Filter by email delivery status |  |
| `name` | `string` | No | Filter campaigns by name | Black Friday Campaign |
| `parentId` | `string` | No | Filter campaigns by parent folder ID | folder123 |
| `limitedFields` | `boolean` | No | When true, returns only essential campaign fields like id, templateDataDownloadUrl, updatedAt, type, | false |
| `archived` | `boolean` | No | Filter archived campaigns | false |
| `campaignsOnly` | `boolean` | No | Return only campaigns, excluding folders | false |
| `showStats` | `boolean` | No | When true, returns campaign statistics including delivered count, opened count, clicked count and re | true |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `schedules` | `array[ScheduleDto]` | Yes | The list of campaigns |  |
| `total` | `array[string]` | Yes | The total number of campaigns |  |
| `traceId` | `string` | Yes | Trace Id |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/emails/schedule' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `403` | `404` | `422`


### POST Create a new template

**Endpoint:** `POST https://services.leadconnectorhq.com/emails/builder`

**Required Scope(s):** `emails/builder.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `title` | `string` | No |  | template title |
| `type` | `string` | Yes |  |  |
| `updatedBy` | `string` | No |  | zYy3YOUuHxgomU1uYJty |
| `builderVersion` | `string` | No |  |  |
| `name` | `string` | No |  | Template1 |
| `parentId` | `string` | No |  | zYy3YOUuHxgomU1uYJty |
| `templateDataUrl` | `string` | No |  |  |
| `importProvider` | `string` | Yes |  |  |
| `importURL` | `string` | No |  | https://tplshare.com/fhYJ3Mi |
| `templateSource` | `string` | No |  | template_library |
| `isPlainText` | `boolean` | No |  | False |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `redirect` | `string` | Yes | template id | 66e811229245fc098765590 |
| `traceId` | `string` | Yes | trace id | 0c52e980-41f6-4be7-8c4b-e2c5a13dc3c2 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/emails/builder' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "title": "template title",
    "type": "<type>",
    "updatedBy": "zYy3YOUuHxgomU1uYJty",
    "builderVersion": "<builderVersion>",
    "name": "Template1",
    "parentId": "zYy3YOUuHxgomU1uYJty",
    "templateDataUrl": "<templateDataUrl>"
}'
```

**Response Codes:** `201` | `400` | `401` | `404` | `422`


### GET Fetch email templates

**Endpoint:** `GET https://services.leadconnectorhq.com/emails/builder`

Fetch email templates by location id

**Required Scope(s):** `emails/builder.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `limit` | `string` | No |  |  |
| `offset` | `string` | No |  |  |
| `search` | `string` | No |  |  |
| `sortByDate` | `string` | No |  |  |
| `archived` | `string` | No |  |  |
| `builderVersion` | `string` | No |  |  |
| `name` | `string` | No |  |  |
| `parentId` | `string` | No |  |  |
| `originId` | `string` | No |  | ve9EPM428h8vShlRW1KT |
| `templatesOnly` | `string` | No |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `name` | `string` | No | template name | New Template |
| `updatedBy` | `string` | No | updated by | John Doe |
| `isPlainText` | `boolean` | No | plain text based template | false |
| `lastUpdated` | `string` | No | last updated | 2024-11-12T12:34:36.070Z |
| `dateAdded` | `string` | No | date added | 2024-11-12T12:34:36.070Z |
| `previewUrl` | `string` | No | preview url | https://example.com |
| `id` | `string` | No | id | 67334b231f2fad724062f52b5 |
| `version` | `string` | No | version | 1 |
| `templateType` | `string` | No | type | builder |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/emails/builder' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `422`


### DELETE Delete a template

**Endpoint:** `DELETE https://services.leadconnectorhq.com/emails/builder/{locationId}/{templateId}`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `templateId` | `string` | Yes |  | zYy3YOUuHxgomU1uYJty |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `ok` | `string` | No | ok | true |
| `traceId` | `string` | No | trace id | 0c52e980-41f6-4be7-8c4b-32332ss |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/emails/builder/:<locationId>/:<templateId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `422`


### POST Update a template

**Endpoint:** `POST https://services.leadconnectorhq.com/emails/builder/data`

**Required Scope(s):** `emails/builder.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |
| `templateId` | `string` | Yes |  | zYy3YOUuHxgomU1uYJty |
| `updatedBy` | `string` | Yes |  | zYy3YOUuHxgomU1uYJty |
| `dnd` | `object` | Yes |  | {elements:[], attrs:{}, templateSettings:{}} |
| `html` | `string` | Yes |  |  |
| `editorType` | `string` | Yes |  |  |
| `previewText` | `string` | No |  | zYy3YOUuHxgomU1uYJty |
| `isPlainText` | `boolean` | No |  | false |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `ok` | `string` | No | ok | true |
| `traceId` | `string` | No | trace id | 0c52e980-41f6-4be7-8c4b-32332ss |
| `previewUrl` | `string` | No | preview url | https://example.com |
| `templateDownloadUrl` | `string` | No | template data download url | https://example.com |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/emails/builder/data' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "ve9EPM428h8vShlRW1KT",
    "templateId": "zYy3YOUuHxgomU1uYJty",
    "updatedBy": "zYy3YOUuHxgomU1uYJty",
    "dnd": "{elements:[], attrs:{}, templateSettings:{}}",
    "html": "<html>",
    "editorType": "<editorType>",
    "previewText": "zYy3YOUuHxgomU1uYJty",
    "isPlainText": "false"
}'
```

**Response Codes:** `201` | `400` | `401` | `404` | `422`


---

## Email ISV API

Documentation for Email ISV API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/email/verify` | Email Verification | `—` |

### POST Email Verification

**Endpoint:** `POST https://services.leadconnectorhq.com/email/verify`

Verify Email


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location Id, The email verification charges will be deducted from this location (if rebilling is ena | 5DP4iH6HLkQsiKESj6rh |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `type` | `string` | Yes | Email Verification type | email |
| `verify` | `string` | Yes | Email Verification recepient (email address / contactId) | abc@xyz.com |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/email/verify' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "type": "email",
    "verify": "abc@xyz.com"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


---

## Phone System API

Documentation for Phone System API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/phone-system/number-pools` | List Number Pools | `numberpools.read` |
| `GET` | `/phone-system/numbers/location/{locationId}` | List active numbers | `phonenumbers.read` |

### GET List Number Pools

**Endpoint:** `GET https://services.leadconnectorhq.com/phone-system/number-pools`

Get list of number pools

**Required Scope(s):** `numberpools.read`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | Location ID to filter pools | ve9EPM428h8vShlRW1KT |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/phone-system/number-pools' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `403`


### GET List active numbers

**Endpoint:** `GET https://services.leadconnectorhq.com/phone-system/numbers/location/{locationId}`

Retrieve a paginated list of active phone numbers for a specific location. Supports filtering, pagination, and optional exclusion of number pool assignments.

**Required Scope(s):** `phonenumbers.read`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | The unique identifier of the location | ve9EPM428h8vShlRW1KT |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `pageSize` | `number` | No | How many resources to return in each list page. The default is 50, and the maximum is 1000. | 100 |
| `page` | `number` | No | The page index for pagination. The default is 0. | 0 |
| `searchFilter` | `string` | No | Filter numbers by phone number pattern. Supports partial matching (e.g., "+91" to find all Indian nu | +91 |
| `skipNumberPool` | `boolean` | No | Whether to exclude numbers that are assigned to number pools. Default is true. | True |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/phone-system/numbers/location/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


---

## Voice AI API

Documentation for Voice AI API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/voice-ai/agents` | Create Agent | `voice-ai-agents.write` |
| `GET` | `/voice-ai/agents` | List Agents | `voice-ai-agents.readonly` |
| `PATCH` | `/voice-ai/agents/{agentId}` | Patch Agent | `voice-ai-agents.write` |
| `GET` | `/voice-ai/agents/{agentId}` | Get Agent | `voice-ai-agents.readonly` |
| `DELETE` | `/voice-ai/agents/{agentId}` | Delete Agent | `voice-ai-agents.write` |
| `GET` | `/voice-ai/dashboard/call-logs` | List Call Logs | `voice-ai-dashboard.readonly` |
| `GET` | `/voice-ai/dashboard/call-logs/{callId}` | Get Call Log | `voice-ai-dashboard.readonly` |
| `POST` | `/voice-ai/actions` | Create Agent Action | `voice-ai-agent-goals.write` |
| `PUT` | `/voice-ai/actions/{actionId}` | Update Agent Action | `voice-ai-agent-goals.write` |
| `GET` | `/voice-ai/actions/{actionId}` | Get Agent Action | `voice-ai-agent-goals.readonly` |
| `DELETE` | `/voice-ai/actions/{actionId}` | Delete Agent Action | `voice-ai-agent-goals.write` |

### POST Create Agent

**Endpoint:** `POST https://services.leadconnectorhq.com/voice-ai/agents`

Create a new voice AI agent configuration and settings

**Required Scope(s):** `voice-ai-agents.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | No | Unique identifier for the location where this agent will operate | LOC123456789ABCDEF |
| `agentName` | `string` | No | Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit num | Customer Support Agent |
| `businessName` | `string` | No | Name of the business this agent represents. Default: Uses location name | Acme Corporation |
| `welcomeMessage` | `string` | No | Initial greeting spoken when the agent answers calls. Default: Auto generated | Hello! Thank you for calling Acme Corporation. How can I ass |
| `agentPrompt` | `string` | No | Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated a | You are a helpful customer service representative. Always be |
| `voiceId` | `string` | No | Identifier for the speech synthesis voice from available voice options. Default: Auto generated | 507f1f77bcf86cd799439011 |
| `language` | `VoiceAILanguage` | No |  | en-US |
| `patienceLevel` | `PatienceLevel` | No |  | low |
| `maxCallDuration` | `number` | No | Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes) | 600 |
| `sendUserIdleReminders` | `boolean` | No | Enables automatic reminders when callers are silent. Default: true | True |
| `reminderAfterIdleTimeSeconds` | `number` | No | Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds | 5 |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls to this agent. Default: null | +1234567890 |
| `numberPoolId` | `string` | No | Identifier for the number pool managing phone number allocation. Default: null | pool_507f1f77bcf86cd799439011 |
| `callEndWorkflowIds` | `array[string]` | No | Array of workflow IDs to trigger automatically when calls end. Default: [] | ['wf_507f1f77bcf86cd799439011', 'wf_507f1f77bcf86cd799439012 |
| `sendPostCallNotificationTo` | `object` | No | Configuration for post-call email notifications to various recipients. Default: [] |  |
| `agentWorkingHours` | `array[AgentWorkingHoursDTO]` | No | Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (availab |  |
| `timezone` | `string` | No | IANA timezone identifier affecting working hours and scheduling. Default: Location timezone | America/New_York |
| `isAgentAsBackupDisabled` | `boolean` | No | Prevents this agent from being used as a fallback option. Default: false (Available as backup agent) | False |
| `translation` | `object` | No | Language translation settings including enablement flag and target language code. Rules: (1) transla |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the created agent | 507f1f77bcf86cd799439011 |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates | LOC123456789ABCDEF |
| `agentName` | `string` | Yes | Display name of the voice AI agent | Customer Support Agent |
| `businessName` | `string` | Yes | Name of the business this agent represents | Acme Corporation |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls | Hello! Thank you for calling. How can I assist you today? |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior | You are a helpful customer service representative. |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used | 507f1f77bcf86cd799439011 |
| `language` | `string` | Yes | Language code for the agent's speech and understanding | en-US |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays | medium |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 | 600 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled | True |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 | 5 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/voice-ai/agents' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationId": "LOC123456789ABCDEF",
    "agentName": "Customer Support Agent",
    "businessName": "Acme Corporation",
    "welcomeMessage": "Hello! Thank you for calling Acme Corporation. How can I assist you today?",
    "agentPrompt": "You are a helpful customer service representative. Always be polite and professional.",
    "voiceId": "507f1f77bcf86cd799439011",
    "language": "en-US",
    "patienceLevel": "low"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### GET List Agents

**Endpoint:** `GET https://services.leadconnectorhq.com/voice-ai/agents`

Retrieve a paginated list of agents for given location.

**Required Scope(s):** `voice-ai-agents.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `page` | `number` | No | Page number starting from 1 |  |
| `pageSize` | `number` | No | Number of items per page |  |
| `locationId` | `string` | Yes | Location ID |  |
| `query` | `string` | No | Query |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `total` | `number` | Yes | Total number of items | 150 |
| `page` | `number` | Yes | Page number starting from 1 | 2 |
| `pageSize` | `number` | Yes | Number of items per page | 10 |
| `agents` | `array[GetAgentResponseDTO]` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/voice-ai/agents' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### PATCH Patch Agent

**Endpoint:** `PATCH https://services.leadconnectorhq.com/voice-ai/agents/{agentId}`

Partially update an existing voice AI agent

**Required Scope(s):** `voice-ai-agents.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `agentId` | `string` | Yes | Unique agent identifier |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `agentName` | `string` | No | Display name for the voice AI agent, between 1-40 characters. Default: "My Agent {random 3 digit num | Customer Support Agent |
| `businessName` | `string` | No | Name of the business this agent represents. Default: Uses location name | Acme Corporation |
| `welcomeMessage` | `string` | No | Initial greeting spoken when the agent answers calls. Default: Auto generated | Hello! Thank you for calling Acme Corporation. How can I ass |
| `agentPrompt` | `string` | No | Custom instructions defining the agent's behavior and personality. Default: Basic prompt generated a | You are a helpful customer service representative. Always be |
| `voiceId` | `string` | No | Identifier for the speech synthesis voice from available voice options. Default: Auto generated | 507f1f77bcf86cd799439011 |
| `language` | `VoiceAILanguage` | No |  | en-US |
| `patienceLevel` | `PatienceLevel` | No |  | low |
| `maxCallDuration` | `number` | No | Maximum call duration in seconds, between 180-900 (3-15 minutes). Default: 300 seconds (5 minutes) | 600 |
| `sendUserIdleReminders` | `boolean` | No | Enables automatic reminders when callers are silent. Default: true | True |
| `reminderAfterIdleTimeSeconds` | `number` | No | Seconds to wait before sending idle reminders, between 1-20. Default: 8 seconds | 5 |
| `inboundNumber` | `string` | No | Phone number for receiving inbound calls to this agent. Default: null | +1234567890 |
| `numberPoolId` | `string` | No | Identifier for the number pool managing phone number allocation. Default: null | pool_507f1f77bcf86cd799439011 |
| `callEndWorkflowIds` | `array[string]` | No | Array of workflow IDs to trigger automatically when calls end. Default: [] | ['wf_507f1f77bcf86cd799439011', 'wf_507f1f77bcf86cd799439012 |
| `sendPostCallNotificationTo` | `object` | No | Configuration for post-call email notifications to various recipients. Default: [] |  |
| `agentWorkingHours` | `array[AgentWorkingHoursDTO]` | No | Time intervals defining when the agent accepts calls, organized by day of week. Default: [] (availab |  |
| `timezone` | `string` | No | IANA timezone identifier affecting working hours and scheduling. Default: Location timezone | America/New_York |
| `isAgentAsBackupDisabled` | `boolean` | No | Prevents this agent from being used as a fallback option. Default: false (Available as backup agent) | False |
| `translation` | `object` | No | Language translation settings including enablement flag and target language code. Rules: (1) transla |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the created agent | 507f1f77bcf86cd799439011 |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates | LOC123456789ABCDEF |
| `agentName` | `string` | Yes | Display name of the voice AI agent | Customer Support Agent |
| `businessName` | `string` | Yes | Name of the business this agent represents | Acme Corporation |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls | Hello! Thank you for calling. How can I assist you today? |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior | You are a helpful customer service representative. |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used | 507f1f77bcf86cd799439011 |
| `language` | `string` | Yes | Language code for the agent's speech and understanding | en-US |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays | medium |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 | 600 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled | True |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 | 5 |

**Sample Request**

```bash
curl -X PATCH \
  'https://services.leadconnectorhq.com/voice-ai/agents/:<agentId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "agentName": "Customer Support Agent",
    "businessName": "Acme Corporation",
    "welcomeMessage": "Hello! Thank you for calling Acme Corporation. How can I assist you today?",
    "agentPrompt": "You are a helpful customer service representative. Always be polite and professional.",
    "voiceId": "507f1f77bcf86cd799439011",
    "language": "en-US",
    "patienceLevel": "low",
    "maxCallDuration": 600
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Agent

**Endpoint:** `GET https://services.leadconnectorhq.com/voice-ai/agents/{agentId}`

Retrieve detailed configuration and settings for a specific voice AI agent

**Required Scope(s):** `voice-ai-agents.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `agentId` | `string` | Yes | Unique agent identifier |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the created agent | 507f1f77bcf86cd799439011 |
| `locationId` | `string` | Yes | Unique identifier for the location where this agent operates | LOC123456789ABCDEF |
| `agentName` | `string` | Yes | Display name of the voice AI agent | Customer Support Agent |
| `businessName` | `string` | Yes | Name of the business this agent represents | Acme Corporation |
| `welcomeMessage` | `string` | Yes | Greeting message spoken when the agent answers calls | Hello! Thank you for calling. How can I assist you today? |
| `agentPrompt` | `string` | Yes | Custom instructions defining the agent's behavior | You are a helpful customer service representative. |
| `voiceId` | `string` | Yes | Identifier for the speech synthesis voice being used | 507f1f77bcf86cd799439011 |
| `language` | `string` | Yes | Language code for the agent's speech and understanding | en-US |
| `patienceLevel` | `string` | Yes | Current tolerance level for caller response delays | medium |
| `maxCallDuration` | `number` | Yes | Maximum call duration in seconds, between 180-900 | 600 |
| `sendUserIdleReminders` | `boolean` | Yes | Indicates whether automatic idle reminders are enabled | True |
| `reminderAfterIdleTimeSeconds` | `number` | Yes | Seconds to wait before sending idle reminders, between 1-20 | 5 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/voice-ai/agents/:<agentId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Agent

**Endpoint:** `DELETE https://services.leadconnectorhq.com/voice-ai/agents/{agentId}`

Delete a voice AI agent and all its configurations

**Required Scope(s):** `voice-ai-agents.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `agentId` | `string` | Yes | Unique agent identifier |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/voice-ai/agents/:<agentId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `204` | `400` | `401` | `422`


### GET List Call Logs

**Endpoint:** `GET https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs`

Returns call logs for Voice AI agents scoped to a location. Supports filtering by agent, contact, call type, action types, and date range (interpreted in the provided IANA timezone). Also supports sorting and 1-based pagination.

**Required Scope(s):** `voice-ai-dashboard.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location identifier. Filters results to this location. |  |
| `agentId` | `string` | No | Agent identifier. When provided, returns logs for this agent only. |  |
| `contactId` | `string` | No | Contact IDs (comma-separated) to filter by. |  |
| `callType` | `string` | No | Call type filter. |  |
| `startDate` | `number` | No | Start date filter (Unix timestamp). Must be less than endDate. Both startDate and endDate must be pr |  |
| `endDate` | `number` | No | End date filter (Unix timestamp). Must be greater than startDate. Both startDate and endDate must be |  |
| `actionType` | `string` | No | Action type filter for call logs (comma-separated ACTION_TYPE values) |  |
| `sortBy` | `string` | No | Field to sort by. Defaults to newest if omitted. |  |
| `sort` | `string` | No | Sort direction. Applies only when sortBy is provided. |  |
| `page` | `number` | No | Page number (1-based). |  |
| `pageSize` | `number` | No | Page size (max 50). |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `total` | `number` | Yes | Total number of items | 150 |
| `page` | `number` | Yes | Page number starting from 1 | 2 |
| `pageSize` | `number` | Yes | Number of items per page | 10 |
| `callLogs` | `array[CallLogDTO]` | Yes | Array of call logs |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Call Log

**Endpoint:** `GET https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs/{callId}`

Returns a call log by callId.

**Required Scope(s):** `voice-ai-dashboard.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `callId` | `string` | Yes | Call ID |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the call | 507f1f77bcf86cd799439011 |
| `contactId` | `string` | No | Associated contact ID | 507f1f77bcf86cd799439012 |
| `agentId` | `string` | Yes | Agent ID associated with the call | 507f1f77bcf86cd799439013 |
| `isAgentDeleted` | `boolean` | Yes | Whether the agent is deleted | False |
| `fromNumber` | `string` | No | Caller phone number | +1234567890 |
| `createdAt` | `string (date-time)` | Yes | Timestamp when the call was created | 2024-01-15T10:30:00.000Z |
| `duration` | `number` | Yes | Call duration in seconds | 180 |
| `trialCall` | `boolean` | Yes | Whether this call was a trial call | False |
| `executedCallActions` | `array[CallActionSchema]` | Yes | Actions performed during the call | [{'actionId': '507f1f77bcf86cd799439015', 'actionType': 'CAL |
| `summary` | `string` | Yes | Call summary | Customer called to inquire about product pricing and was tra |
| `transcript` | `string` | Yes | Call transcript | bot: Hello, how can I help you today?
human: I would like to |
| `translation` | `object` | No | Transcript translation details | {'translatedTranscript': 'Translated version of the call tra |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/voice-ai/dashboard/call-logs/:<callId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Agent Action

**Endpoint:** `POST https://services.leadconnectorhq.com/voice-ai/actions`

Create a new action for a voice AI agent. Actions define specific behaviors and capabilities for the agent during calls.

**Required Scope(s):** `voice-ai-agent-goals.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `agentId` | `string` | Yes | Agent ID to attach the action to | 507f1f77bcf86cd799439011 |
| `locationId` | `string` | Yes | Location ID | 507f1f77bcf86cd799439012 |
| `actionType` | `string` | Yes | Type of action | CALL_TRANSFER |
| `name` | `string` | Yes | Human-readable name for this action | Transfer to Manager |
| `actionParameters` | `object` | Yes | Action parameters - structure varies by actionType |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the created action | 507f1f77bcf86cd799439011 |
| `actionType` | `string` | Yes | Type of action | CALL_TRANSFER |
| `name` | `string` | Yes | Human-readable name for this action | Transfer to Manager |
| `actionParameters` | `object` | Yes | Action parameters - structure varies by actionType |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/voice-ai/actions' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "agentId": "507f1f77bcf86cd799439011",
    "locationId": "507f1f77bcf86cd799439012",
    "actionType": "CALL_TRANSFER",
    "name": "Transfer to Manager"
}'
```

**Response Codes:** `201` | `400` | `401` | `422`


### PUT Update Agent Action

**Endpoint:** `PUT https://services.leadconnectorhq.com/voice-ai/actions/{actionId}`

Update an existing action for a voice AI agent. Modifies the behavior and configuration of an agent action.

**Required Scope(s):** `voice-ai-agent-goals.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `actionId` | `string` | Yes | Unique identifier for the action |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `agentId` | `string` | Yes | Agent ID to attach the action to | 507f1f77bcf86cd799439011 |
| `locationId` | `string` | Yes | Location ID | 507f1f77bcf86cd799439012 |
| `actionType` | `string` | Yes | Type of action | CALL_TRANSFER |
| `name` | `string` | Yes | Human-readable name for this action | Transfer to Manager |
| `actionParameters` | `object` | Yes | Action parameters - structure varies by actionType |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the created action | 507f1f77bcf86cd799439011 |
| `actionType` | `string` | Yes | Type of action | CALL_TRANSFER |
| `name` | `string` | Yes | Human-readable name for this action | Transfer to Manager |
| `actionParameters` | `object` | Yes | Action parameters - structure varies by actionType |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/voice-ai/actions/:<actionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "agentId": "507f1f77bcf86cd799439011",
    "locationId": "507f1f77bcf86cd799439012",
    "actionType": "CALL_TRANSFER",
    "name": "Transfer to Manager"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Agent Action

**Endpoint:** `GET https://services.leadconnectorhq.com/voice-ai/actions/{actionId}`

Retrieve details of a specific action by its ID. Returns the action configuration including actionParameters.

**Required Scope(s):** `voice-ai-agent-goals.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `actionId` | `string` | Yes | Unique identifier for the action |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | Yes | Unique identifier for the action | 507f1f77bcf86cd799439011 |
| `actionType` | `string` | Yes | Type of action | CALL_TRANSFER |
| `name` | `string` | Yes | Human-readable name for this action | Transfer to Manager |
| `actionParameters` | `object` | Yes | Action parameters - structure varies by actionType |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/voice-ai/actions/:<actionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


### DELETE Delete Agent Action

**Endpoint:** `DELETE https://services.leadconnectorhq.com/voice-ai/actions/{actionId}`

Delete an existing action from a voice AI agent. This permanently removes the action and its configuration.

**Required Scope(s):** `voice-ai-agent-goals.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `actionId` | `string` | Yes | Unique identifier for the action |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID |  |
| `agentId` | `string` | Yes | Agent ID the action is attached to |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/voice-ai/actions/:<actionId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `204` | `400` | `401` | `422`


---
## References

[1]: https://marketplace.gohighlevel.com/docs/ghl/ "GHL API Marketplace Documentation"
[2]: https://github.com/GoHighLevel/highlevel-api-docs "GHL API v2 GitHub Repository"
[3]: https://services.leadconnectorhq.com "GHL API Base URL"
[4]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/calendars.json "GHL Calendars API OpenAPI Schema"
[5]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/conversations.json "GHL Conversations API OpenAPI Schema"
[6]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/emails.json "GHL Emails API OpenAPI Schema"
[7]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/email-isv.json "GHL Email-Isv API OpenAPI Schema"
[8]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/phone-system.json "GHL Phone-System API OpenAPI Schema"
[9]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/voice-ai.json "GHL Voice-Ai API OpenAPI Schema"