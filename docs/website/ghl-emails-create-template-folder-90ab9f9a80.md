> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/create-template-folder). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create a template folder

**Endpoint:** `POST /emails/locations/:locationId/templates/folders`

Create a new template folder

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

Location ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringrequiredFolder name**userId**stringID of the user performing this action

```json
{
  "name": "Spring Campaigns",
  "userId": "507f1f77bcf86cd799439011"
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredFolder ID**name**stringrequiredFolder name**createdAt**stringCreated timestamp**updatedAt**stringUpdated timestamp**traceId**stringTrace ID of request

```json
{
  "id": "67f15c2ae99226d5bcccb8f3",
  "name": "Spring Campaigns",
  "createdAt": "2025-07-24T11:55:43.598Z",
  "updatedAt": "2025-07-24T11:55:43.598Z",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
