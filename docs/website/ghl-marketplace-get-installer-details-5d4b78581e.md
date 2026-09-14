> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-installer-details). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Installer Details

**Endpoint:** `GET /marketplace/app/:appId/installations`

Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.

## Request

**Version**

string

required

API Version

Available options

`v3`

**appId**

string

required

ID of the app to get installer details

application/json

Successfully retrieved installer details. Returns company, location, user, and installation information.

- application/json

- Schema
- Example (auto)

**Schema**

**installationDetails**objectrequiredInstallation details

```json
{
  "installationDetails": {
    "companyId": "company123",
    "locationId": "location123",
    "companyName": "Example Company",
    "relationshipNumber": "0-002-230",
    "companyEmail": "contact@example.com",
    "companyOwnerFullName": "John Doe",
    "userId": "user123",
    "isWhitelabelCompany": false,
    "companyPlan": "agency_monthly_497",
    "companyHighLevelPlan": "agency_monthly_497",
    "marketplaceAppPlanId": "plan123"
  }
}
```
