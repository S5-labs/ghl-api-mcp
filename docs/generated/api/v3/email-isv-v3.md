# Email ISV API v3

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/v3/email-isv-v3.json). Do not edit this generated file directly.

**API Version:** v3
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Email ISV API

## API Version v3

All APIs available via `/v3` route prefix with AIP-compliant responses.

## Email Verification

### Email Verification

**Endpoint:** `POST /email/verify`
**Scope:** `lc-email.readonly`
**Token Type:** Location-Access

Verify Email

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `locationId` | query | `string` | Yes | Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `VerificationBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `EmailVerifiedV3ResponseDto or EmailNotVerifiedResponseDto or LeadConnectorRecommendationDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### LeadConnectorRecommendationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isEmailValid` | `boolean` | No | Email verification status |

### EmailNotVerifiedResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `verified` | `boolean` | Yes | Email verification not processed |
| `message` | `string` | No | Email verification failure message |
| `address` | `string` | No | Email address |

### EmailVerifiedV3ResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `array<string>` | No | Reason for email verification failure |
| `result` | `string` | Yes | Email verification result |
| `risk` | `string` | Yes | Risk level of email sending to bounce |
| `address` | `string` | Yes | Email address |
| `leadConnectorRecommendation` | `LeadConnectorRecommendationDto` | No | Lead Connector email verification recommendation |

### VerificationBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Email Verification type |
| `verify` | `string` | Yes | Email Verification recepient (email address / contactId) |
