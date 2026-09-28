> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/upload-csv). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upload CSV

**Endpoint:** `POST /social-media-posting/:locationId/csv`

Upload a CSV file containing social media posts for bulk scheduling

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

Location ID (also known as Sub-Account ID) for the business location.

multipart/form-data

- multipart/form-data

- Body
- Example (auto)

### Body**required**

**file**string<binary>requiredCSV file to upload containing social media posts

```json
{
  "file": "sample.csv"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredSuccess or Failure**statusCode**numberrequiredStatus Code**message**stringrequiredMessage**results**objectRequested Results

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Uploaded CSV",
  "results": {
    "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",
    "rowsCount": 6,
    "fileName": "sample.csv",
    "fileSize": 1024,
    "csvFileType": "basic"
  }
}
```
