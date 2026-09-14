> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/add-remove-contact-from-business). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Add/Remove Contacts From Business

**Endpoint:** `POST /contacts/bulk/business`

Add/Remove Contacts From Business . Passing a `null` businessId will remove the businessId from the contacts

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

**locationId**stringrequiredLocation Id**ids**string[]requiredList of contact Ids to update (maximum 50)**Possible values:** `<= 50 characters`**businessId**stringnullablerequiredBusiness Id to assign to contacts. Pass null to remove business association.

```json
{
  "locationId": "PX8m5VwxEbcpFlzYEPVG",
  "ids": [
    "IDqvFHGColiyK6jiatuz",
    "pOC0uJ97VYOKH2m3fkMD"
  ],
  "businessId": "63b7ec34ea409a9a8bd2a4ff"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the bulk update was successful**ids**string[]requiredList of contact Ids that were updated

```json
{
  "success": true,
  "ids": [
    "pOC0uJ97VYOKH2m3fkMD"
  ]
}
```
