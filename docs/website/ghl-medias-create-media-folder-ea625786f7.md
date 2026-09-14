> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/create-media-folder). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create Folder

**Endpoint:** `POST /medias/folder`

Creates a new folder in the media storage

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**altId**stringrequiredLocation Id**altType**stringrequiredType of entity (location only)Available options`location`**name**stringrequiredName of the folder to be created**parentId**stringID of the parent folder (optional)

```json
{
  "altId": "sx6wyHhbFdRXh302LLNR",
  "altType": "location",
  "name": "New Folder",
  "parentId": "64af50c42d567a3b4f5989e0"
}
```

application/json

Returns the newly created folder object

- application/json

- Schema
- Example (auto)

**Schema**

**altId**stringrequiredLocation identifier that owns this folder**altType**stringrequiredType of entity that owns the folderAvailable options`location`**name**stringrequiredName of the folder**parentId**stringID of the parent folder (null for root folders)**type**stringrequiredType of the object (always 'folder' for folders)**deleted**booleanWhether the folder has been deleted**pendingUpload**booleanWhether there are pending uploads to this folder**category**stringPrimary category of content stored in the folder**subCategory**stringSub-category of content stored in the folder**isPrivate**booleanWhether the folder is private and not publicly accessible**relocatedFolder**booleanWhether the folder has been moved from its original location**migrationCompleted**booleanWhether the data migration process has been completed for this folder**appFolder**booleanWhether this is a system-generated application folder**isEssential**booleanWhether the folder is essential and should not be deleted**status**stringCurrent status of the folder**lastUpdatedBy**stringID of the user who last updated the folder

```json
{
  "altId": "sx6wyHhbFdRXh302LLNR",
  "altType": "location",
  "name": "New Folder",
  "parentId": "64af50c42d567a3b4f5989e0",
  "type": "folder",
  "deleted": false,
  "pendingUpload": false,
  "category": "image",
  "subCategory": "logo",
  "isPrivate": false,
  "relocatedFolder": false,
  "migrationCompleted": true,
  "appFolder": false,
  "isEssential": false,
  "status": "string",
  "lastUpdatedBy": "user-uuid-123"
}
```
