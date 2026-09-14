# Email ISV API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/email-isv.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Email ISV API

## Email Verification

### Email Verification

**Endpoint:** `POST /email/verify`
**Token Type:** Location-Access

Verify Email

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | query | `string` | Yes | Location Id, The email verification charges will be deducted from this location (if rebilling is enabled) / company wallet |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `VerificationBodyDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `EmailVerifiedResponseDto or EmailNotVerifiedResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### EmailNotVerifiedResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `verified` | `boolean` | Yes | Email verification not processed |
| `message` | `string` | No | Email verification failure message |
| `address` | `string` | No | Email address |

### LeadConnectorRecomandationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `isEmailValid` | `boolean` | No | Email verification status |

### EmailVerifiedResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `reason` | `array<string>` | No | Reason for email verification failure |
| `result` | `string` | Yes | Email verification result |
| `risk` | `string` | Yes | Risk level of email sending to bounce |
| `address` | `string` | Yes | Email address |
| `leadconnectorRecomendation` | `LeadConnectorRecomandationDto` | Yes | Lead Connector email verification recomendation |

### VerificationBodyDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Yes | Email Verification type |
| `verify` | `string` | Yes | Email Verification recepient (email address / contactId) |
