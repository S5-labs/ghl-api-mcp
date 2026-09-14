# Snapshots API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/snapshots.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Snapshots API

## Snapshots

### Get Snapshots

**Endpoint:** `GET /snapshots/`
**Token Type:** Agency-Access

Get a list of all own and imported Snapshots

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | query | `string` | Yes | Company Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetSnapshotsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Snapshot Share Link

**Endpoint:** `POST /snapshots/share/link`
**Token Type:** Agency-Access

Create a share link for snapshot

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `companyId` | query | `string` | Yes | — |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateSnapshotShareLinkRequestDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CreateSnapshotShareLinkSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Snapshot Push between Dates

**Endpoint:** `GET /snapshots/snapshot-status/{snapshotId}`
**Token Type:** Agency-Access

Get list of sub-accounts snapshot pushed in time period

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `snapshotId` | path | `string` | Yes | — |
| `companyId` | query | `string` | Yes | — |
| `from` | query | `string` | Yes | — |
| `to` | query | `string` | Yes | — |
| `lastDoc` | query | `string` | Yes | Id for last document till what you want to skip |
| `limit` | query | `string` | Yes | — |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetSnapshotPushStatusSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Get Last Snapshot Push

**Endpoint:** `GET /snapshots/snapshot-status/{snapshotId}/location/{locationId}`
**Token Type:** Agency-Access

Get Latest Snapshot Push Status for a location id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `companyId` | query | `string` | Yes | — |
| `snapshotId` | path | `string` | Yes | — |
| `locationId` | path | `string` | Yes | — |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLatestSnapshotPushStatusSuccessfulResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Schemas

### SnapshotsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Snapshot Id. |
| `name` | `string` | No | Name of the snapshot |
| `type` | `string` | No | Type of snapshot - own or imported. |

### GetSnapshotsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshots` | `array<SnapshotsSchema>` | No | — |

### CreateSnapshotShareLinkRequestDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `snapshot_id` | `string` | Yes | id for snapshot to be shared |
| `share_type` | `string` | Yes | Type of share link to generate |
| `relationship_number` | `string` | No | Comma separated Relationship number of Agencies to create agency restricted share link |
| `share_location_id` | `string` | No | Comma separated Sub-Account ids to create sub-account restricted share link |

### CreateSnapshotShareLinkSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | id for shared snapshot |
| `shareLink` | `string` | No | Share Link for snapshot |

### SnapshotStatusSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Document id |
| `locationId` | `string` | No | Sub-account id |
| `status` | `string` | No | Status of snapshot push |
| `dateAdded` | `string (date-time)` | No | Timestamp of when snapshot processing starts for sub-account |

### GetSnapshotPushStatusSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array<SnapshotStatusSchema>` | No | — |

### SnapshotStatusSchemaWithAssets

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Document id |
| `locationId` | `string` | No | Sub-account id |
| `status` | `string` | No | Status of snapshot push |
| `completed` | `array<string>` | No | List of completed assets |
| `pending` | `array<string>` | No | List of pending assets |

### GetLatestSnapshotPushStatusSuccessfulResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `SnapshotStatusSchemaWithAssets` | No | — |
