# Media Storage API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/medias-v3.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Files API

## Medias

### Get List of Files/ Folders

**Endpoint:** `GET /medias/files`
**Scope:** `medias.readonly`
**Token Type:** Location-Access

Fetches list of files and folders from the media storage

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `offset` | query | `string` | No | Number of files to skip in listing |
| `limit` | query | `string` | No | Number of files to show in the listing |
| `sortBy` | query | `string` | Yes | Field to sorting the file listing by |
| `sortOrder` | query | `string` | Yes | Direction in which file needs to be sorted |
| `type` | query | `string` | Yes | Type |
| `query` | query | `string` | No | Query text |
| `altType` | query | `string` | Yes | AltType |
| `altId` | query | `string` | Yes | location Id |
| `parentId` | query | `string` | No | parent id or folder id |
| `fetchAll` | query | `string` | No | Fetch all files or folders |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetFilesResponseDTO` |

### Upload File into Media Storage

**Endpoint:** `POST /medias/upload-file`
**Scope:** `medias.write`
**Token Type:** Location-Access

If hosted is set to true then fileUrl is required. Else file is required. If adding a file, maximum allowed is 25 MB. For video files, the maximum allowed size is 500 MB.

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `object` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `UploadFileResponseDTO` |

### Delete File or Folder

**Endpoint:** `DELETE /medias/{id}`
**Scope:** `medias.write`
**Token Type:** Location-Access

Deletes specific file or folder from the media storage

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | — |
| `altType` | query | `string` | Yes | AltType |
| `altId` | query | `string` | Yes | location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `—` |

### Update File/ Folder

**Endpoint:** `POST /medias/{id}`
**Token Type:** Location-Access

Updates a single file or folder by ID

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Unique identifier of the file or folder to update |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateObject` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `object` |

### Create Folder

**Endpoint:** `POST /medias/folder`
**Token Type:** Location-Access

Creates a new folder in the media storage

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateFolderParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Returns the newly created folder object | `FolderDTO` |

### Bulk Update Files/ Folders

**Endpoint:** `PUT /medias/update-files`
**Token Type:** Location-Access

Updates metadata or status of multiple files and folders

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateMediaObjects` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `object` |

### Bulk Delete / Trash Files or Folders

**Endpoint:** `PUT /medias/delete-files`
**Token Type:** Location-Access

Soft-deletes or trashes multiple files and folders in a single request

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `DeleteMediaObjectsBodyParams` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `object` |

## Schemas

### GetFilesResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `files` | `array<string>` | Yes | Array of File Objects |

### UploadFileResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fileId` | `string` | Yes | ID of the uploaded file |
| `url` | `string` | Yes | Google Cloud Storage URL of the uploaded file |

### FolderDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location identifier that owns this folder |
| `altType` | `string` | Yes | Type of entity that owns the folder |
| `name` | `string` | Yes | Name of the folder |
| `parentId` | `string` | No | ID of the parent folder (null for root folders) |
| `type` | `string` | Yes | Type of the object (always 'folder' for folders) |
| `deleted` | `boolean` | No | Whether the folder has been deleted |
| `pendingUpload` | `boolean` | No | Whether there are pending uploads to this folder |
| `category` | `string` | No | Primary category of content stored in the folder |
| `subCategory` | `string` | No | Sub-category of content stored in the folder |
| `isPrivate` | `boolean` | No | Whether the folder is private and not publicly accessible |
| `relocatedFolder` | `boolean` | No | Whether the folder has been moved from its original location |
| `migrationCompleted` | `boolean` | No | Whether the data migration process has been completed for this folder |
| `appFolder` | `boolean` | No | Whether this is a system-generated application folder |
| `isEssential` | `boolean` | No | Whether the folder is essential and should not be deleted |
| `status` | `string` | No | Current status of the folder |
| `lastUpdatedBy` | `string` | No | ID of the user who last updated the folder |

### CreateFolderParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location Id |
| `altType` | `string` | Yes | Type of entity (location only) |
| `name` | `string` | Yes | Name of the folder to be created |
| `parentId` | `string` | No | ID of the parent folder (optional) |

### UpdateObject

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | New name for the file or folder |
| `altType` | `string` | Yes | Type of entity that owns the file or folder |
| `altId` | `string` | Yes | Location identifier that owns the file or folder |

### UpdateMediaObjects

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altId` | `string` | Yes | Location identifier |
| `altType` | `string` | Yes | Type of entity that owns the files |
| `filesToBeUpdated` | `array<UpdateMediaObject>` | Yes | Array of file objects to be updated |

### DeleteMediaObjectItem

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_id` | `string` | Yes | Unique identifier of the file or folder to be deleted |

### UpdateMediaObject

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier of the file or folder to be updated |
| `name` | `string` | No | New name for the file or folder |

### DeleteMediaObjectsBodyParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `filesToBeDeleted` | `array<DeleteMediaObjectItem>` | Yes | Array of file objects to be deleted or trashed |
| `altType` | `string` | Yes | Type of entity that owns the files |
| `altId` | `string` | Yes | Location identifier |
| `status` | `string` | Yes | Status to set for the files (deleted or trashed) |

### MoveOrDeleteObjectParams

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `altType` | `string` | Yes | — |
| `altId` | `string` | Yes | — |
| `_id` | `string` | Yes | — |
