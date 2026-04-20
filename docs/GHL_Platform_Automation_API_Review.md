# GHL Platform & Automation APIs — Comprehensive Review

*Generated: March 2026 | Source: GHL API v2 Official Documentation*


---

## Overview

This document covers the GoHighLevel Platform and Automation API sections: Custom Menus, Marketplace, OAuth 2.0, SaaS API, Snapshots, and Workflows. These APIs provide the infrastructure layer of the GHL platform, enabling app marketplace integrations, white-label SaaS management, account snapshots, and workflow automation.

Source: [GHL API GitHub Repository](https://github.com/GoHighLevel/highlevel-api-docs) and [GHL Marketplace Docs](https://marketplace.gohighlevel.com/docs/ghl/)


This document covers **5 API sections** with a total of **39 endpoints**.


## Quick Reference

| API Section | Endpoints | Key Scopes |
|-------------|-----------|------------|
| **Custom menus API** | 5 | `custom-menu-link.readonly`, `custom-menu-link.write` |
| **Developer marketplace API** | 7 | `charges.readonly`, `charges.write` |
| **SaaS API** | 22 |  |
| **Snapshots API** | 4 |  |
| **workflows API** | 1 | `workflows.readonly` |

## Detailed API Reference


---

## Custom menus API

Documentation for Custom menus API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/custom-menus/{customMenuId}` | Get Custom Menu Link | `custom-menu-link.readonly` |
| `DELETE` | `/custom-menus/{customMenuId}` | Delete Custom Menu Link | `custom-menu-link.write` |
| `PUT` | `/custom-menus/{customMenuId}` | Update Custom Menu Link | `custom-menu-link.write` |
| `GET` | `/custom-menus/` | Get Custom Menu Links | `custom-menu-link.readonly` |
| `POST` | `/custom-menus/` | Create Custom Menu Link | `custom-menu-link.write` |

### GET Get Custom Menu Link

**Endpoint:** `GET https://services.leadconnectorhq.com/custom-menus/{customMenuId}`

Fetches a single custom menus based on id. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata

**Required Scope(s):** `custom-menu-link.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `customMenuId` | `string` | Yes | Unique identifier of the custom menu |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customMenu` | `object` | No | Single Custom menu link object |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/custom-menus/:<customMenuId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `403` | `422`


### DELETE Delete Custom Menu Link

**Endpoint:** `DELETE https://services.leadconnectorhq.com/custom-menus/{customMenuId}`

Removes a specific custom menu from the system. This operation requires authentication and proper permissions. The custom menu is identified by its unique ID, and the operation is performed within the context of a specific company.

**Required Scope(s):** `custom-menu-link.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `customMenuId` | `string` | Yes | ID of the custom menu to delete |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No | Indicates whether the custom menu was successfully deleted | True |
| `message` | `string` | No | A message providing additional information about the deletion operation | Custom menu successfully deleted |
| `deletedMenuId` | `string` | No | The ID of the deleted custom menu | 12345abcde |
| `deletedAt` | `string (date-time)` | No | Timestamp of when the deletion was performed | 2023-09-12T15:30:45.123Z |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/custom-menus/:<customMenuId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `403` | `404` | `422`


### PUT Update Custom Menu Link

**Endpoint:** `PUT https://services.leadconnectorhq.com/custom-menus/{customMenuId}`

Updates an existing custom menu for a given company. Requires authentication and proper permissions.

**Required Scope(s):** `custom-menu-link.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `customMenuId` | `string` | Yes | ID of the custom menu to update |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | No | Title of the custom menu | Custom Menu |
| `url` | `string` | No | URL of the custom menu | https://custom-menus.com/ |
| `icon` | `object` | No | Icon information for the custom menu |  |
| `showOnCompany` | `boolean` | No | Whether the menu must be displayed on the agency's level | True |
| `showOnLocation` | `boolean` | No | Whether the menu must be displayed for sub-accounts level | True |
| `showToAllLocations` | `boolean` | No | Whether the menu must be displayed to all sub-accounts | True |
| `openMode` | `string` | No | Mode for opening the menu link |  |
| `locations` | `array[string]` | No | List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLoca | ['gfWreTIHL8pDbggBb7af', '67WreTIHL8pDbggBb7ty'] |
| `userRole` | `string` | No | Which user-roles should the menu be accessible to? |  |
| `allowCamera` | `boolean` | No | Whether to allow camera access (only for iframe mode) | False |
| `allowMicrophone` | `boolean` | No | Whether to allow microphone access (only for iframe mode) | False |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | No | Status of update |  |
| `customMenu` | `object` | No | Updated custom menu link |  |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/custom-menus/:<customMenuId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Custom Menu",
    "url": "https://custom-menus.com/",
    "showOnCompany": true,
    "showOnLocation": true,
    "showToAllLocations": true,
    "openMode": "<openMode>",
    "locations": [
        "gfWreTIHL8pDbggBb7af",
        "67WreTIHL8pDbggBb7ty"
    ]
}'
```

**Response Codes:** `200` | `400` | `401` | `403` | `404` | `422`


### GET Get Custom Menu Links

**Endpoint:** `GET https://services.leadconnectorhq.com/custom-menus/`

Fetches a collection of custom menus based on specified criteria. This endpoint allows clients to retrieve custom menu configurations, which may include menu items, categories, and associated metadata. The response can be tailored using query parameters for filtering, sorting, and pagination.

**Required Scope(s):** `custom-menu-link.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | No | Unique identifier of the location |  |
| `skip` | `number` | No | Number of items to skip for pagination |  |
| `limit` | `number` | No | Maximum number of items to return |  |
| `query` | `string` | No | Search query to filter custom menus by name, supports partial \|\| full names |  |
| `showOnCompany` | `boolean` | No | Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customMenus` | `array[CustomMenuSchema]` | No | Array of custom menu links |  |
| `totalLinks` | `number` | No | Total number of custom menu records | 100 |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/custom-menus/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `403` | `422`


### POST Create Custom Menu Link

**Endpoint:** `POST https://services.leadconnectorhq.com/custom-menus/`

Creates a new custom menu for a company. Requires authentication and proper permissions. For Icon Usage Details please refer to  https://doc.clickup.com/8631005/d/h/87cpx-243696/d60fa70db6b92b2

**Required Scope(s):** `custom-menu-link.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `title` | `string` | Yes | Title of the custom menu | Custom Menu |
| `url` | `string` | Yes | URL of the custom menu | https://custom-menus.com/ |
| `icon` | `object` | Yes | Icon information for the custom menu |  |
| `showOnCompany` | `boolean` | Yes | Whether the menu must be displayed on the agency's level | True |
| `showOnLocation` | `boolean` | Yes | Whether the menu must be displayed for sub-accounts level | True |
| `showToAllLocations` | `boolean` | Yes | Whether the menu must be displayed to all sub-accounts | True |
| `openMode` | `string` | Yes | Mode for opening the menu link |  |
| `locations` | `array[string]` | Yes | List of sub-account IDs where the menu should be shown. This list is applicable only when showOnLoca | ['gfWreTIHL8pDbggBb7af', '67WreTIHL8pDbggBb7ty'] |
| `userRole` | `string` | Yes | Which user-roles should the menu be accessible to? |  |
| `allowCamera` | `boolean` | No | Whether to allow camera access (only for iframe mode) | False |
| `allowMicrophone` | `boolean` | No | Whether to allow microphone access (only for iframe mode) | False |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `customMenu` | `object` | No | Single Custom menu link object |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/custom-menus/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "title": "Custom Menu",
    "url": "https://custom-menus.com/",
    "showOnCompany": true,
    "showOnLocation": true,
    "showToAllLocations": true,
    "openMode": "<openMode>",
    "locations": [
        "gfWreTIHL8pDbggBb7af",
        "67WreTIHL8pDbggBb7ty"
    ]
}'
```

**Response Codes:** `201` | `400` | `401` | `403` | `422`


---

## Developer marketplace API

Documentation for Marketplace API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `POST` | `/marketplace/billing/charges` | Create a new wallet charge | `charges.write` |
| `GET` | `/marketplace/billing/charges` | Get all wallet charges | `charges.readonly` |
| `DELETE` | `/marketplace/billing/charges/{chargeId}` | Delete a wallet charge | `charges.write` |
| `GET` | `/marketplace/billing/charges/{chargeId}` | Get specific wallet charge details | `charges.readonly` |
| `GET` | `/marketplace/billing/charges/has-funds` | Check if account has sufficient funds | `charges.readonly` |
| `DELETE` | `/marketplace/app/{appId}/installations` | Uninstall an application | `—` |
| `GET` | `/marketplace/app/{appId}/installations` | Get Installer Details | `—` |

### POST Create a new wallet charge

**Endpoint:** `POST https://services.leadconnectorhq.com/marketplace/billing/charges`

**Required Scope(s):** `charges.write`


**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `appId` | `string` | Yes | App ID of the App |  |
| `meterId` | `string` | Yes | Billing Meter ID (you can find this on your app's pricing page) |  |
| `eventId` | `string` | Yes | Event ID / Transaction ID on your server's side. This will help you maintain the reference of the ev |  |
| `userId` | `string` | No | User ID |  |
| `locationId` | `string` | Yes | ID of the Sub-Account to be charged |  |
| `companyId` | `string` | Yes | ID of the Agency the Sub-account belongs to |  |
| `description` | `string` | Yes | Description of the charge |  |
| `price` | `number` | No | Price per unit to charge |  |
| `units` | `string` | Yes | Number of units to charge |  |
| `eventTime` | `string` | No | The timestamp when the event/transaction was performed. If blank, the billing timestamp will be set  | 2025-03-26T00:00:000Z |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/marketplace/billing/charges' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "appId": "<appId>",
    "meterId": "<meterId>",
    "eventId": "<eventId>",
    "userId": "<userId>",
    "locationId": "<locationId>",
    "companyId": "<companyId>",
    "description": "<description>",
    "price": 0
}'
```

**Response Codes:** `201` | `400` | `422`


### GET Get all wallet charges

**Endpoint:** `GET https://services.leadconnectorhq.com/marketplace/billing/charges`

**Required Scope(s):** `charges.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `meterId` | `string` | No | Billing Meter ID (you can find this on your app's pricing page on the developer portal) |  |
| `eventId` | `string` | No | Event ID / Transaction ID |  |
| `userId` | `string` | No | Filter results by User ID that your server passed via API when the charge was created |  |
| `startDate` | `string` | No | Filter results AFTER a specific date. Use this in combination with endDate to filter results in a sp |  |
| `endDate` | `string` | No | Filter results BEFORE a specific date. Use this in combination with startDate to filter results in a |  |
| `skip` | `number` | No | Number of records to skip |  |
| `limit` | `number` | No | Maximum number of records to return |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/marketplace/billing/charges' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### DELETE Delete a wallet charge

**Endpoint:** `DELETE https://services.leadconnectorhq.com/marketplace/billing/charges/{chargeId}`

**Required Scope(s):** `charges.write`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `chargeId` | `string` | Yes | ID of the charge to delete |  |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/marketplace/billing/charges/:<chargeId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `404` | `422`


### GET Get specific wallet charge details

**Endpoint:** `GET https://services.leadconnectorhq.com/marketplace/billing/charges/{chargeId}`

**Required Scope(s):** `charges.readonly`


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `chargeId` | `string` | Yes | ID of the charge to retrieve |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/marketplace/billing/charges/:<chargeId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `404` | `422`


### GET Check if account has sufficient funds

**Endpoint:** `GET https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds`

**Required Scope(s):** `charges.readonly`


**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `422`


### DELETE Uninstall an application

**Endpoint:** `DELETE https://services.leadconnectorhq.com/marketplace/app/{appId}/installations`

Uninstalls an application from your company or a specific location. This will remove the application`s access and stop all its functionalities


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appId` | `string` | Yes | The application id which is to be uninstalled. |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `companyId` | `string` | No | The company id from which the application is to be uninstalled. If you pass agency token, then compa | tDtDnQdgm2LXpyiqYvZ6 |
| `locationId` | `string` | No | The location id from which the application is to be uninstalled. If you pass location token, then lo | tDtDnQdgm2LXpyiqYvZ6 |
| `reason` | `string` | No | The reason for uninstalling the application. Reason is required if you are uninstalling the applicat | Application is not working as expected |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | The status of the uninstallation of the application | True |

**Sample Request**

```bash
curl -X DELETE \
  'https://services.leadconnectorhq.com/marketplace/app/:<appId>/installations' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "companyId": "tDtDnQdgm2LXpyiqYvZ6",
    "locationId": "tDtDnQdgm2LXpyiqYvZ6",
    "reason": "Application is not working as expected"
}'
```

**Response Codes:** `200` | `400` | `401` | `422`


### GET Get Installer Details

**Endpoint:** `GET https://services.leadconnectorhq.com/marketplace/app/{appId}/installations`

Fetches installer details for the authenticated user. This endpoint returns information about the company, location, user, and installation details associated with the current OAuth token.


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `appId` | `string` | Yes | ID of the app to get installer details |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `installationDetails` | `object` | Yes | Installation details |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/marketplace/app/:<appId>/installations' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `403`


---

## SaaS API

API Service for SaaS


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/saas-api/public-api/locations` | Get locations by stripeId with companyId | `—` |
| `PUT` | `/saas-api/public-api/update-saas-subscription/{locationId}` | Update SaaS subscription | `—` |
| `POST` | `/saas-api/public-api/bulk-disable-saas/{companyId}` | Disable SaaS for locations | `—` |
| `POST` | `/saas-api/public-api/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | `—` |
| `POST` | `/saas-api/public-api/pause/{locationId}` | Pause location | `—` |
| `POST` | `/saas-api/public-api/update-rebilling/{companyId}` | Update Rebilling | `—` |
| `GET` | `/saas-api/public-api/agency-plans/{companyId}` | Get Agency Plans | `—` |
| `GET` | `/saas-api/public-api/get-saas-subscription/{locationId}` | Get Location Subscription Details | `—` |
| `POST` | `/saas-api/public-api/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | `—` |
| `GET` | `/saas-api/public-api/saas-locations/{companyId}` | Get SaaS Locations | `—` |
| `GET` | `/saas-api/public-api/saas-plan/{planId}` | Get SaaS Plan | `—` |
| `GET` | `/saas/locations` | Get locations by stripeId with companyId | `—` |
| `PUT` | `/saas/update-saas-subscription/{locationId}` | Update SaaS subscription | `—` |
| `POST` | `/saas/bulk-disable-saas/{companyId}` | Disable SaaS for locations | `—` |
| `POST` | `/saas/enable-saas/{locationId}` | Enable SaaS for Sub-Account (Formerly Location) | `—` |
| `POST` | `/saas/pause/{locationId}` | Pause location | `—` |
| `POST` | `/saas/update-rebilling/{companyId}` | Update Rebilling | `—` |
| `GET` | `/saas/agency-plans/{companyId}` | Get Agency Plans | `—` |
| `GET` | `/saas/get-saas-subscription/{locationId}` | Get Location Subscription Details | `—` |
| `POST` | `/saas/bulk-enable-saas/{companyId}` | Bulk Enable SaaS | `—` |
| `GET` | `/saas/saas-locations/{companyId}` | Get SaaS Locations | `—` |
| `GET` | `/saas/saas-plan/{planId}` | Get SaaS Plan | `—` |

### GET Get locations by stripeId with companyId

**Endpoint:** `GET https://services.leadconnectorhq.com/saas-api/public-api/locations`

Get locations by stripeCustomerId or stripeSubscriptionId with companyId


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `customerId` | `string` | No | Stripe customer ID to find locations for | cus_OD2oBjRfKEF6FV |
| `subscriptionId` | `string` | No | Stripe subscription ID to find locations for | sub_1NVqlLByVlfITvRXgirIdpyc |
| `companyId` | `string` | Yes | Company ID to filter locations | 5DP4iH6HLkQsiKESj6rh |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas-api/public-api/locations' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### PUT Update SaaS subscription

**Endpoint:** `PUT https://services.leadconnectorhq.com/saas-api/public-api/update-saas-subscription/{locationId}`

Update SaaS subscription for given locationId and customerId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID to update subscription for | AUKAtFVo0lWezBsBQ3FE |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `subscriptionId` | `string` | Yes | Subscription ID | sub_1QDPY5FpU9DlKp7RQ8BXfywx |
| `customerId` | `string` | Yes | Customer ID | cus_1QDPY5FpU9DlKp7RQ8BXfywx |
| `companyId` | `string` | Yes | Company ID | companyId1 |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/saas-api/public-api/update-saas-subscription/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",
    "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
    "companyId": "companyId1"
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### POST Disable SaaS for locations

**Endpoint:** `POST https://services.leadconnectorhq.com/saas-api/public-api/bulk-disable-saas/{companyId}`

Disable SaaS for locations for given locationIds


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to disable SaaS for | 5DP4iH6HLkQsiKESj6rh |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationIds` | `array[string]` | Yes | Location IDs | ['locationId1', 'locationId2'] |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Response data from the bulk disable SaaS operation | {'msg': 'success'} |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas-api/public-api/bulk-disable-saas/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationIds": [
        "locationId1",
        "locationId2"
    ]
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### POST Enable SaaS for Sub-Account (Formerly Location)

**Endpoint:** `POST https://services.leadconnectorhq.com/saas-api/public-api/enable-saas/{locationId}`

<div>
                  <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p>
                  <div>
                    <span style= "display: inline-block;
                                width: 25px; height: 25px;
                                background-color: yellow;
                                color: black;
                                font-weight: bold;
                                font-size: 24px;
                                text-align: center;
                                line-height: 22px;
                                border: 2px solid black;
                                border-radius: 10%;
                                margin-right: 10px;">
                                !
                      </span>
                      <span>
                        <strong>
                          This feature is only available on Agency Pro ($497) plan.
                        </strong>
                      </span>
                  </div>
                </div>
    


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID to enable SaaS for | AUKAtFVo0lWezBsBQ3FE |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `stripeAccountId` | `string` | No | Stripe account id(Required only for SaaS V1) | acct_1QDPY5FpU9DlKp7RQ8BXfywx |
| `name` | `string` | No | Name of the stripe customer(Required only for SaaS V1) | John Doe |
| `email` | `string` | No | Email of the stripe customer(Required only for SaaS V1) | john.doe@example.com |
| `stripeCustomerId` | `string` | No | Stripe customer id if exists(Required only for SaaS V1) | cus_1QDPY5FpU9DlKp7RQ8BXfywx |
| `companyId` | `string` | Yes |  |  |
| `isSaaSV2` | `boolean` | Yes | Denotes if it is a saas v2 or v1 sub-account | True |
| `contactId` | `string` | No | Agency subaccount used for payment provider integration(Required Only for SaaS V2) | 1QDPY5FpU9DlKp7RQ8BXfywx |
| `providerLocationId` | `string` | No | Agency Subaccount ID | r06mdj4OrrERzYDvsOdh |
| `description` | `string` | No | Description | Description |
| `saasPlanId` | `string` | No | Required only while pre-configuring saas subscription | 1QDPY5FpU9DlKp7RQ8BXfywx |
| `priceId` | `string` | No | Required only while pre-configuring saas subscription | price_1QDPY5FpU9DlKp7RQ8BXfywx |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `object` | Yes | Response data from the enable SaaS operation | {'customer_id': 'cus_1QDPY5FpU9DlKp7RQ8BXfywx', 'ok': True,  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas-api/public-api/enable-saas/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "stripeCustomerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
    "companyId": "<companyId>",
    "isSaaSV2": true,
    "contactId": "1QDPY5FpU9DlKp7RQ8BXfywx",
    "providerLocationId": "r06mdj4OrrERzYDvsOdh"
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### POST Pause location

**Endpoint:** `POST https://services.leadconnectorhq.com/saas-api/public-api/pause/{locationId}`

Pause Sub account for given locationId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID to pause/unpause | AUKAtFVo0lWezBsBQ3FE |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `paused` | `boolean` | Yes | Paused | True |
| `companyId` | `string` | Yes | Company ID | companyId1 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas-api/public-api/pause/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "paused": true,
    "companyId": "companyId1"
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### POST Update Rebilling

**Endpoint:** `POST https://services.leadconnectorhq.com/saas-api/public-api/update-rebilling/{companyId}`

Bulk update rebilling for given locationIds


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to update rebilling for | 5DP4iH6HLkQsiKESj6rh |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `product` | `string` | Yes | The product to update rebilling for | contentAI |
| `locationIds` | `array[string]` | Yes | Array of location IDs to update rebilling for | ['zzyG7A4x6bRJl5SlhQhH', 'Vygq7VgXCDfg3xnl8TBR'] |
| `config` | `object` | Yes | Configuration for rebilling settings |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Indicates if the rebilling update was successful | True |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas-api/public-api/update-rebilling/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "product": "contentAI",
    "locationIds": [
        "zzyG7A4x6bRJl5SlhQhH",
        "Vygq7VgXCDfg3xnl8TBR"
    ]
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### GET Get Agency Plans

**Endpoint:** `GET https://services.leadconnectorhq.com/saas-api/public-api/agency-plans/{companyId}`

Fetch all agency subscription plans for a given company ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to get agency plans for | 5DP4iH6HLkQsiKESj6rh |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas-api/public-api/agency-plans/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### GET Get Location Subscription Details

**Endpoint:** `GET https://services.leadconnectorhq.com/saas-api/public-api/get-saas-subscription/{locationId}`

Fetch subscription details for a specific location from location metadata


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID to get subscription details for | AUKAtFVo0lWezBsBQ3FE |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to filter subscription details | 5DP4iH6HLkQsiKESj6rh |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationId` | `string` | Yes | Location ID | locationId1 |
| `isSaaSV2` | `boolean` | Yes | Indicates if the SaaS is V2 | True |
| `companyId` | `string` | Yes | Company ID | companyId1 |
| `saasMode` | `string` | No | SaaS mode | saasV2 |
| `subscriptionId` | `string` | No | Subscription ID | subscriptionId1 |
| `customerId` | `string` | No | Customer ID | customerId1 |
| `productId` | `string` | No | Product ID | productId1 |
| `priceId` | `string` | No | Price ID | priceId1 |
| `saasPlanId` | `string` | No | SaaS plan ID | saasPlanId1 |
| `subscriptionStatus` | `string` | No | Subscription status | active |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas-api/public-api/get-saas-subscription/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### POST Bulk Enable SaaS

**Endpoint:** `POST https://services.leadconnectorhq.com/saas-api/public-api/bulk-enable-saas/{companyId}`

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to enable SaaS for | 5DP4iH6HLkQsiKESj6rh |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationIds` | `array[string]` | Yes | Array of location IDs to enable SaaS for | ['locationId1', 'locationId2'] |
| `isSaaSV2` | `boolean` | Yes | Indicates if the SaaS is V2 | True |
| `actionPayload` | `object` | Yes | Action payload for the bulk enable SaaS operation |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `success` | `boolean` | Yes | Indicates if the bulk enable SaaS operation was successful | True |
| `message` | `string` | Yes | Message indicating the bulk enable SaaS operation | Bulk enable SaaS operation completed successfully |
| `bulkActionUrl` | `string` | No | URL for the bulk enable SaaS operation | https://example.com/bulk-enable-saas |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas-api/public-api/bulk-enable-saas/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationIds": [
        "locationId1",
        "locationId2"
    ],
    "isSaaSV2": true
}'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### GET Get SaaS Locations

**Endpoint:** `GET https://services.leadconnectorhq.com/saas-api/public-api/saas-locations/{companyId}`

Fetch all SaaS-activated locations for a company with pagination


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to get SaaS locations for | 5DP4iH6HLkQsiKESj6rh |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `page` | `number` | No | Page number for pagination | 1 |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locations` | `array[SaasLocationDto]` | Yes | Array of SaaS locations |  |
| `pagination` | `object` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas-api/public-api/saas-locations/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### GET Get SaaS Plan

**Endpoint:** `GET https://services.leadconnectorhq.com/saas-api/public-api/saas-plan/{planId}`

Fetch a specific SaaS plan by plan ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `planId` | `string` | Yes | Plan ID to get SaaS plan details for | 66c4d36534f21f900dc2a265 |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company ID to filter SaaS plan | 5DP4iH6HLkQsiKESj6rh |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `planId` | `string` | Yes | Unique identifier for the SaaS plan | 66c4d36534f21f900dc2a265 |
| `companyId` | `string` | Yes | Company ID associated with the SaaS plan | 66c4d36534f21f900dc2a265 |
| `title` | `string` | Yes | Title of the SaaS plan | AED 1.5 changed |
| `description` | `string` | Yes | Description of the SaaS plan | AED 1.5 |
| `saasProducts` | `array[string]` | Yes | Array of SaaS products included in the plan | ['2-way-text-messaging', 'gmb-messaging', 'web-chat'] |
| `addOns` | `array[string]` | No | Array of add-ons included in the plan | ['YEXT_V2', 'WHATSAPP_V1', 'WORDPRESS_V1', 'AI_EMPLOYEE', 'A |
| `planLevel` | `number` | Yes | Level of the plan (0-4) | 0 |
| `trialPeriod` | `number` | Yes | Trial period in days | 16 |
| `setupFee` | `number` | No | Setup fee for the plan | 100 |
| `userLimit` | `number` | No | User limit for the plan | 50 |
| `contactLimit` | `number` | No | Contact limit for the plan | 50 |
| `prices` | `array[object]` | Yes | Prices for the plan |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas-api/public-api/saas-plan/:<planId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `404` | `500`


### GET Get locations by stripeId with companyId

**Endpoint:** `GET https://services.leadconnectorhq.com/saas/locations`

Get locations by stripeCustomerId or stripeSubscriptionId with companyId


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `customerId` | `string` | Yes |  |  |
| `subscriptionId` | `string` | Yes |  |  |
| `companyId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas/locations' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### PUT Update SaaS subscription

**Endpoint:** `PUT https://services.leadconnectorhq.com/saas/update-saas-subscription/{locationId}`

Update SaaS subscription for given locationId and customerId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `subscriptionId` | `string` | Yes | Subscription ID | sub_1QDPY5FpU9DlKp7RQ8BXfywx |
| `customerId` | `string` | Yes | Customer ID | cus_1QDPY5FpU9DlKp7RQ8BXfywx |
| `companyId` | `string` | Yes | Company ID | companyId1 |

**Sample Request**

```bash
curl -X PUT \
  'https://services.leadconnectorhq.com/saas/update-saas-subscription/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "subscriptionId": "sub_1QDPY5FpU9DlKp7RQ8BXfywx",
    "customerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
    "companyId": "companyId1"
}'
```

**Response Codes:** `200`


### POST Disable SaaS for locations

**Endpoint:** `POST https://services.leadconnectorhq.com/saas/bulk-disable-saas/{companyId}`

Disable SaaS for locations for given locationIds


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationIds` | `array[string]` | Yes | Location IDs | ['locationId1', 'locationId2'] |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas/bulk-disable-saas/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationIds": [
        "locationId1",
        "locationId2"
    ]
}'
```

**Response Codes:** `201`


### POST Enable SaaS for Sub-Account (Formerly Location)

**Endpoint:** `POST https://services.leadconnectorhq.com/saas/enable-saas/{locationId}`

<div>
                  <p>Enable SaaS for Sub-Account (Formerly Location) based on the data provided</p>
                  <div>
                    <span style= "display: inline-block;
                                width: 25px; height: 25px;
                                background-color: yellow;
                                color: black;
                                font-weight: bold;
                                font-size: 24px;
                                text-align: center;
                                line-height: 22px;
                                border: 2px solid black;
                                border-radius: 10%;
                                margin-right: 10px;">
                                !
                      </span>
                      <span>
                        <strong>
                          This feature is only available on Agency Pro ($497) plan.
                        </strong>
                      </span>
                  </div>
                </div>
    


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `stripeAccountId` | `string` | No | Stripe account id(Required only for SaaS V1) | acct_1QDPY5FpU9DlKp7RQ8BXfywx |
| `name` | `string` | No | Name of the stripe customer(Required only for SaaS V1) | John Doe |
| `email` | `string` | No | Email of the stripe customer(Required only for SaaS V1) | john.doe@example.com |
| `stripeCustomerId` | `string` | No | Stripe customer id if exists(Required only for SaaS V1) | cus_1QDPY5FpU9DlKp7RQ8BXfywx |
| `companyId` | `string` | Yes |  |  |
| `isSaaSV2` | `boolean` | Yes | Denotes if it is a saas v2 or v1 sub-account | True |
| `contactId` | `string` | No | Agency subaccount used for payment provider integration(Required Only for SaaS V2) | 1QDPY5FpU9DlKp7RQ8BXfywx |
| `providerLocationId` | `string` | No | Agency Subaccount ID | r06mdj4OrrERzYDvsOdh |
| `description` | `string` | No | Description | Description |
| `saasPlanId` | `string` | No | Required only while pre-configuring saas subscription | 1QDPY5FpU9DlKp7RQ8BXfywx |
| `priceId` | `string` | No | Required only while pre-configuring saas subscription | price_1QDPY5FpU9DlKp7RQ8BXfywx |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas/enable-saas/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "stripeAccountId": "acct_1QDPY5FpU9DlKp7RQ8BXfywx",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "stripeCustomerId": "cus_1QDPY5FpU9DlKp7RQ8BXfywx",
    "companyId": "<companyId>",
    "isSaaSV2": true,
    "contactId": "1QDPY5FpU9DlKp7RQ8BXfywx",
    "providerLocationId": "r06mdj4OrrERzYDvsOdh"
}'
```

**Response Codes:** `201`


### POST Pause location

**Endpoint:** `POST https://services.leadconnectorhq.com/saas/pause/{locationId}`

Pause Sub account for given locationId


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `paused` | `boolean` | Yes | Paused | True |
| `companyId` | `string` | Yes | Company ID | companyId1 |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas/pause/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "paused": true,
    "companyId": "companyId1"
}'
```

**Response Codes:** `201`


### POST Update Rebilling

**Endpoint:** `POST https://services.leadconnectorhq.com/saas/update-rebilling/{companyId}`

Bulk update rebilling for given locationIds


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `product` | `string` | Yes | The product to update rebilling for | contentAI |
| `locationIds` | `array[string]` | Yes | Array of location IDs to update rebilling for | ['zzyG7A4x6bRJl5SlhQhH', 'Vygq7VgXCDfg3xnl8TBR'] |
| `config` | `object` | Yes | Configuration for rebilling settings |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas/update-rebilling/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "product": "contentAI",
    "locationIds": [
        "zzyG7A4x6bRJl5SlhQhH",
        "Vygq7VgXCDfg3xnl8TBR"
    ]
}'
```

**Response Codes:** `201`


### GET Get Agency Plans

**Endpoint:** `GET https://services.leadconnectorhq.com/saas/agency-plans/{companyId}`

Fetch all agency subscription plans for a given company ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas/agency-plans/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### GET Get Location Subscription Details

**Endpoint:** `GET https://services.leadconnectorhq.com/saas/get-saas-subscription/{locationId}`

Fetch subscription details for a specific location from location metadata


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas/get-saas-subscription/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### POST Bulk Enable SaaS

**Endpoint:** `POST https://services.leadconnectorhq.com/saas/bulk-enable-saas/{companyId}`

Enable SaaS mode for multiple locations with support for both SaaS v1 and v2


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `locationIds` | `array[string]` | Yes | Array of location IDs to enable SaaS for | ['locationId1', 'locationId2'] |
| `isSaaSV2` | `boolean` | Yes | Indicates if the SaaS is V2 | True |
| `actionPayload` | `object` | Yes | Action payload for the bulk enable SaaS operation |  |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/saas/bulk-enable-saas/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "locationIds": [
        "locationId1",
        "locationId2"
    ],
    "isSaaSV2": true
}'
```

**Response Codes:** `201`


### GET Get SaaS Locations

**Endpoint:** `GET https://services.leadconnectorhq.com/saas/saas-locations/{companyId}`

Fetch all SaaS-activated locations for a company with pagination


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `page` | `number` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas/saas-locations/:<companyId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


### GET Get SaaS Plan

**Endpoint:** `GET https://services.leadconnectorhq.com/saas/saas-plan/{planId}`

Fetch a specific SaaS plan by plan ID


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `planId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/saas/saas-plan/:<planId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200`


---

## Snapshots API

Documentation for Snapshots API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/snapshots/` | Get Snapshots | `—` |
| `POST` | `/snapshots/share/link` | Create Snapshot Share Link | `—` |
| `GET` | `/snapshots/snapshot-status/{snapshotId}` | Get Snapshot Push between Dates | `—` |
| `GET` | `/snapshots/snapshot-status/{snapshotId}/location/{locationId}` | Get Last Snapshot Push | `—` |

### GET Get Snapshots

**Endpoint:** `GET https://services.leadconnectorhq.com/snapshots/`

Get a list of all own and imported Snapshots


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes | Company Id | 5D112kQsiKESj6rash |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `snapshots` | `array[SnapshotsSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/snapshots/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### POST Create Snapshot Share Link

**Endpoint:** `POST https://services.leadconnectorhq.com/snapshots/share/link`

Create a share link for snapshot


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Request Body Fields**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `snapshot_id` | `string` | Yes | id for snapshot to be shared | 1eM2UgkfaECOYyUdCo9Pa |
| `share_type` | `string` | Yes | Type of share link to generate | permanent_link |
| `relationship_number` | `string` | No | Comma separated Relationship number of Agencies to create agency restricted share link | 0-128-926,1-208-926,2-008-926 |
| `share_location_id` | `string` | No | Comma separated Sub-Account ids to create sub-account restricted share link | l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `id` | `string` | No | id for shared snapshot | 1eM2UgkfaECOYyUdCo9Pa |
| `shareLink` | `string` | No | Share Link for snapshot | https://affiliates.gohighlevel.com/?share=1eM2UgkfaECOYyUdCo |

**Sample Request**

```bash
curl -X POST \
  'https://services.leadconnectorhq.com/snapshots/share/link' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28' \
  -H 'Content-Type: application/json' \
  -d '{
    "snapshot_id": "1eM2UgkfaECOYyUdCo9Pa",
    "share_type": "permanent_link",
    "relationship_number": "0-128-926,1-208-926,2-008-926",
    "share_location_id": "l1C08ntBrFjLS0elLIYU, U1C08ntBrFjLS0elKIYP"
}'
```

**Response Codes:** `201` | `400` | `401`


### GET Get Snapshot Push between Dates

**Endpoint:** `GET https://services.leadconnectorhq.com/snapshots/snapshot-status/{snapshotId}`

Get list of sub-accounts snapshot pushed in time period


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `snapshotId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |
| `from` | `string` | Yes |  |  |
| `to` | `string` | Yes |  |  |
| `lastDoc` | `string` | Yes | Id for last document till what you want to skip |  |
| `limit` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `array[SnapshotStatusSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/snapshots/snapshot-status/:<snapshotId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


### GET Get Last Snapshot Push

**Endpoint:** `GET https://services.leadconnectorhq.com/snapshots/snapshot-status/{snapshotId}/location/{locationId}`

Get Latest Snapshot Push Status for a location id


**Path Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `snapshotId` | `string` | Yes |  |  |
| `locationId` | `string` | Yes |  |  |

**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `companyId` | `string` | Yes |  |  |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `data` | `SnapshotStatusSchemaWithAssets` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/snapshots/snapshot-status/:<snapshotId>/location/:<locationId>' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401`


---

## workflows API

Documentation for workflows API


**Endpoint Summary**

| Method | Path | Summary | Scope |
|--------|------|---------|-------|
| `GET` | `/workflows/` | Get Workflow | `workflows.readonly` |

### GET Get Workflow

**Endpoint:** `GET https://services.leadconnectorhq.com/workflows/`

**Required Scope(s):** `workflows.readonly`


**Query Parameters**

| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| `locationId` | `string` | Yes |  | ve9EPM428h8vShlRW1KT |

**Response Fields (200/201)**

| Field | Type | Required | Description | Example |
|-------|------|----------|-------------|---------|
| `workflows` | `array[WorkflowSchema]` | No |  |  |

**Sample Request**

```bash
curl -X GET \
  'https://services.leadconnectorhq.com/workflows/' \
  -H 'Authorization: Bearer <YOUR_TOKEN>' \
  -H 'Version: 2021-07-28'
```

**Response Codes:** `200` | `400` | `401` | `422`


---
## References

[1]: https://marketplace.gohighlevel.com/docs/ghl/ "GHL API Marketplace Documentation"
[2]: https://github.com/GoHighLevel/highlevel-api-docs "GHL API v2 GitHub Repository"
[3]: https://services.leadconnectorhq.com "GHL API Base URL"
[4]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/custom-menus.json "GHL Custom-Menus API OpenAPI Schema"
[5]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/marketplace.json "GHL Marketplace API OpenAPI Schema"
[6]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/saas-api.json "GHL Saas-Api API OpenAPI Schema"
[7]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/snapshots.json "GHL Snapshots API OpenAPI Schema"
[8]: https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/workflows.json "GHL Workflows API OpenAPI Schema"