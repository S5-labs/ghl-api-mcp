> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/update-affiliate-media). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update affiliate media

**Endpoint:** `PUT /affiliate-manager/:locationId/media/:mediaId`

Update a media file or folder for a location.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

**mediaId**

string

required

Media Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringUpdated file or folder name**parentId**stringUpdated parent folder identifier

```json
{
  "name": "File/Folder Name",
  "parentId": "63d376de11be1d26d38f7369"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringMedia identifier**locationId**stringLocation identifier**name**stringMedia name**type**stringMedia typeAvailable options`folder``file`**parentId**stringParent folder identifier**altId**stringAlternative identifier**altType**stringAlternative identifier type**contentType**stringContent type**url**stringMedia URL**size**numberMedia size in bytes**campaignIds**string[]Campaign identifiers associated with the media**campaigns**object[]Campaigns associated with the media**deleted**booleanWhether the media is deleted**createdAt**string<date-time>Creation time**updatedAt**string<date-time>Last update time

```json
{
  "_id": "63d376de11be1d26d38f7369",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "brand-logo.png",
  "type": "file",
  "parentId": "63d376de11be1d26d38f7369",
  "altId": "ve9EPM428h8vShlRW1KT",
  "altType": "media",
  "contentType": "image/png",
  "url": "https://example.com/brand-logo.png",
  "size": 45678,
  "campaignIds": [
    "63d376de11be1d26d38f7369"
  ],
  "campaigns": [
    {
      "_id": "63d376de11be1d26d38f7369",
      "name": "Summer campaign"
    }
  ],
  "deleted": false,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```
