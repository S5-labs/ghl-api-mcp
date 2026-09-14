> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/companies/get-company). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Company

**Endpoint:** `GET /companies/:companyId`

Get Comapny

## Request

**Version**

string

required

API Version

Available options

`v3`

**companyId**

string

required

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**company**object

```json
{
  "company": {
    "id": "seD4PfOuKoVMLkEZqohJ",
    "name": "Tesla inc",
    "email": "john@deo.com",
    "logoUrl": "https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873",
    "phone": "+1202-555-0107",
    "website": "https://www.tesla.com",
    "domain": "https://app.myawesomedomain.com",
    "spareDomain": "link.msgsndr.com",
    "privacyPolicy": "https://app.gohighlevel.com/privacy_policy",
    "termsConditions": "https://app.gohighlevel.com/terms-of-service",
    "address": "3500 Deer Creek Road",
    "city": "Palo Alto",
    "postalCode": "94304",
    "country": "US",
    "state": "CA",
    "timezone": "US/Central",
    "relationshipNumber": "x-xxx-xxx",
    "subdomain": "https://app.myawesomedomain.com/subdomain",
    "plan": 1,
    "currency": "",
    "customerType": "agency",
    "termsOfServiceVersion": "06/01/2022",
    "termsOfServiceAcceptedBy": "SDfdf355Dfggdee",
    "twilioTrialMode": true,
    "twilioFreeCredits": 100,
    "termsOfServiceAcceptedDate": "",
    "privacyPolicyVersion": "06/01/2022",
    "privacyPolicyAcceptedBy": "SDfdf355Dfggdee",
    "privacyPolicyAcceptedDate": "",
    "affiliatePolicyVersion": "06/01/2022",
    "affiliatePolicyAcceptedBy": "SDfdf355Dfggdee",
    "affiliatePolicyAcceptedDate": "",
    "isReselling": true,
    "onboardingInfo": "",
    "upgradeEnabledForClients": true,
    "cancelEnabledForClients": true,
    "autoSuspendEnabled": true,
    "saasSettings": {
      "agencyDashboardVisibleTo": "string",
      "stripeConnectInitiatedBy": "string"
    },
    "stripeConnectId": "",
    "enableDepreciatedFeatures": true,
    "premiumUpgraded": false,
    "status": "active-trial",
    "locationCount": 10,
    "disableEmailService": false,
    "referralId": "john-doe-21",
    "isEnterpriseAccount": true,
    "businessNiche": "Accounting School",
    "businessCategory": "Automotive",
    "businessAffinityGroup": "Vehicle Dealerships",
    "isSandboxAccount": true,
    "enableNewSubAccountDefaultData": false
  }
}
```
