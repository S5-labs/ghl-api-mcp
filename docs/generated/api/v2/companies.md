# Companies API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/companies.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Companies API

## Companies

### Get Company

**Endpoint:** `GET /companies/{companyId}`
**Scope:** `companies.readonly`
**Token Type:** Agency-Access

Get Comapny

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | path | `string` | Yes | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetCompanyByIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### IOnboardingDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `pending` | `boolean` | Yes | — |
| `haveWebsite` | `boolean` | No | — |
| `websiteUrl` | `string` | No | — |
| `industryServed` | `string` | No | — |
| `customerCount` | `string` | No | — |
| `tools` | `array<string>` | No | — |
| `location` | `boolean` | No | — |
| `conversationDemo` | `boolean` | No | — |
| `locationId` | `string` | No | — |
| `snapshotId` | `string` | No | — |
| `planId` | `string` | No | Selected agency plan unique plan Id |
| `affiliateSignup` | `boolean` | No | Set to true if it is from affiliate |
| `hasJoinedKickoffCall` | `boolean` | No | Set to true if user joined onboarding call |
| `kickoffActionTaken` | `boolean` | No | Set to true if user joined onboarding call |
| `hasJoinedImplementationCall` | `boolean` | No | Set to true if user joined implementation call |
| `version` | `string` | No | This helps in A/B tracking of onboarding flow |
| `metaData` | `object` | No | metaData for onboarding |

### GetCompanyByIdSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `email` | `string` | No | — |
| `logoUrl` | `string` | No | — |
| `phone` | `string` | No | — |
| `website` | `string` | No | — |
| `domain` | `string` | No | — |
| `spareDomain` | `string` | No | — |
| `privacyPolicy` | `string` | No | — |
| `termsConditions` | `string` | No | — |
| `address` | `string` | No | — |
| `city` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `country` | `string` | No | — |
| `state` | `string` | No | — |
| `timezone` | `string` | No | — |
| `relationshipNumber` | `string` | No | — |
| `subdomain` | `string` | No | — |
| `plan` | `number` | No | — |
| `currency` | `string` | No | — |
| `customerType` | `string` | No | — |
| `termsOfServiceVersion` | `string` | No | — |
| `termsOfServiceAcceptedBy` | `string` | No | — |
| `twilioTrialMode` | `boolean` | No | — |
| `twilioFreeCredits` | `number` | No | — |
| `termsOfServiceAcceptedDate` | `string` | No | — |
| `privacyPolicyVersion` | `string` | No | — |
| `privacyPolicyAcceptedBy` | `string` | No | — |
| `privacyPolicyAcceptedDate` | `string` | No | — |
| `affiliatePolicyVersion` | `string` | No | — |
| `affiliatePolicyAcceptedBy` | `string` | No | — |
| `affiliatePolicyAcceptedDate` | `string` | No | — |
| `isReselling` | `boolean` | No | — |
| `onboardingInfo` | `IOnboardingDto` | No | — |
| `upgradeEnabledForClients` | `boolean` | No | Flag to set if upgrade plan is enabled |
| `cancelEnabledForClients` | `boolean` | No | Flag to set if cancel plan is enabled |
| `autoSuspendEnabled` | `boolean` | No | Flag to set if auto suspend is enabled |
| `saasSettings` | `object` | No | Saas Settings |
| `stripeConnectId` | `string` | No | — |
| `enableDepreciatedFeatures` | `boolean` | No | — |
| `premiumUpgraded` | `boolean` | No | If you want to enable / disable Priority Support for any agency. Default value is false. |
| `status` | `string` | No | — |
| `locationCount` | `number` | No | — |
| `disableEmailService` | `boolean` | No | — |
| `referralId` | `string` | No | — |
| `isEnterpriseAccount` | `boolean` | No | — |
| `businessNiche` | `string` | No | The business niche in which the agency is operating |
| `businessCategory` | `string` | No | Business category |
| `businessAffinityGroup` | `string` | No | The affinity group of the agency |
| `isSandboxAccount` | `boolean` | No | — |
| `enableNewSubAccountDefaultData` | `boolean` | No | Flag to determine if new sub-accounts should use default data |

### GetCompanyByIdSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company` | `GetCompanyByIdSchema` | No | — |
