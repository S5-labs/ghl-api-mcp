> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/social-planner/set-accounts). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Set Accounts

**Endpoint:** `POST /social-media-posting/:locationId/set-accounts`

Set social media accounts for a CSV import to publish posts to

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

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**accountIds**string[]requiredAccount Ids**filePath**stringrequiredFile path**rowsCount**numberrequiredEntries Count. rowsCount must be between 1 and number of posts in CSV**fileName**stringrequiredName of file**approver**stringApprover User Id**userId**stringrequiredUser ID**csvFileType**stringCSV file type - determines the format of the CSV file being importedAvailable options`basic``advance`

```json
{
  "accountIds": [
    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"
  ],
  "filePath": "omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv",
  "rowsCount": 1,
  "fileName": "test.csv",
  "approver": "o6241QsiRwUIJHyjuhos",
  "userId": "ve9EPM428h8vShlRW1KT",
  "csvFileType": "basic"
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
  "message": "Accounts Set Successfully",
  "results": {
    "csvId": "6953a0be84b7ff10f6025d53"
  }
}
```
