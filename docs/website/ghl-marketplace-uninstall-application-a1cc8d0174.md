> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/marketplace/uninstall-application). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Uninstall an application

**Endpoint:** `DELETE /marketplace/app/:appId/installations`

Uninstalls an application from your company or a specific location. This will remove the application`s access and stop all its functionalities

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

The application id which is to be uninstalled.

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**companyId**stringThe company id from which the application is to be uninstalled. If you pass agency token, then companyId is required. It will uninstall application from agency as well as all sub-accounts.**locationId**stringThe location id from which the application is to be uninstalled. If you pass location token, then locationId is required. It will uninstall application from that location only.**reason**stringThe reason for uninstalling the application. Reason is required if you are uninstalling the application as a developer.

```json
{
  "companyId": "tDtDnQdgm2LXpyiqYvZ6",
  "locationId": "tDtDnQdgm2LXpyiqYvZ6",
  "reason": "Application is not working as expected"
}
```

application/json

Successfully uninstalled the application

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredThe status of the uninstallation of the application

```json
{
  "success": true
}
```
