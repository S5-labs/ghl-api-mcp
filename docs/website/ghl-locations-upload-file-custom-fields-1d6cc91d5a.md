> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Uploads File to customFields

**Endpoint:** `POST /locations/:locationId/customFields/upload`

Uploads File to customFields

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

multipart/form-data

- multipart/form-data

- Body
- Example (auto)

### Body**required**

**id**stringId(Contact Id/Opportunity Id/Custom Field Id)**maxFiles**stringMax number of files

```json
{
  "id": "aWdODOBVOlH1RUFKWQke",
  "maxFiles": "15"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**uploadedFiles**objectUploaded files**meta**string[]Meta data of uploaded files

```json
{
  "uploadedFiles": {
    "FileName.csv": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
  },
  "meta": [
    {
      "fieldname": "FileName.csv",
      "originalname": "FileName.csv",
      "encoding": "7bit",
      "mimetype": "text/csv",
      "size": 2061,
      "url": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"
    }
  ]
}
```
