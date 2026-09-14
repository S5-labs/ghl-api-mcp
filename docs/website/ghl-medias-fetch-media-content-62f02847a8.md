> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get List of Files/Folders

**Endpoint:** `GET /medias/files`

Fetches list of files and folders from the media storage

## Request

**Version**

string

required

API Version

Available options

`v3`

**offset**

string

Number of files to skip in listing

**limit**

string

Number of files to show in the listing

**sortBy**

string

required

Field to sorting the file listing by (e.g. updatedAt, name)

**sortOrder**

string

required

Direction in which file needs to be sorted

**type**

string

required

Type

**query**

string

Query text

**altType**

string

required

AltType

Available options

`location`

**altId**

string

required

location Id

**parentId**

string

parent id or folder id

**fetchAll**

string

Fetch all files or folders

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**files**string[]requiredArray of File Objects

```json
{
  "files": {
    "altId": "locationId",
    "altType": "location",
    "name": "file name",
    "parentId": "parent folder id",
    "url": "file url",
    "path": "file path"
  }
}
```
