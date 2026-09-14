# Sub-Account (Formerly location) API

> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/apps/locations.json). Do not edit this generated file directly.

**API Version:** 1.0
**Base URL:** `https://services.leadconnectorhq.com`

Documentation for Sub-Account (Formerly location) API

## Search

### Search

**Endpoint:** `GET /locations/search`
**Scope:** `locations.readonly`
**Token Type:** Agency-Access, Location-Access

Search Sub-Account (Formerly Location)

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `companyId` | query | `string` | No | The company/agency id on which you want to perform the search |
| `skip` | query | `string` | No | The value by which the results should be skipped. Default will be 0 |
| `limit` | query | `string` | No | The value by which the results should be limited. Default will be 10 |
| `order` | query | `string` | No | The order in which the results should be returned - Allowed values asc, desc. Default will be asc |
| `email` | query | `string` | No | — |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `SearchSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Sub-Account (Formerly Location)

### Get Sub-Account (Formerly Location)

**Endpoint:** `GET /locations/{locationId}`
**Scope:** `locations.readonly`
**Token Type:** Location-Access, Agency-Access

Get details of a Sub-Account (Formerly Location) by passing the sub-account id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetLocationByIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Put Sub-Account (Formerly Location)

**Endpoint:** `PUT /locations/{locationId}`
**Scope:** `locations.write`
**Token Type:** Agency-Access

Update a Sub-Account (Formerly Location) based on the data provided

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateLocationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful update response | `CreateLocationSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Sub-Account (Formerly Location)

**Endpoint:** `DELETE /locations/{locationId}`
**Scope:** `locations.internal-access-only`
**Token Type:** Agency-Access

Delete a Sub-Account (Formerly Location) from the Agency

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `deleteTwilioAccount` | query | `boolean` | Yes | Boolean value to indicate whether to delete Twilio Account or not |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationDeletedSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Sub-Account (Formerly Location)

**Endpoint:** `POST /locations/`
**Scope:** `locations.write`
**Token Type:** Agency-Access

<div>
                  <p>Create a new Sub-Account (Formerly Location) based on the data provided</p> 
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

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateLocationDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CreateLocationSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Tags

### Get Tags

**Endpoint:** `GET /locations/{locationId}/tags`
**Scope:** `locations/tags.readonly`
**Token Type:** bearer

Get Sub-Account (Formerly Location) Tags

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTagsSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Tag

**Endpoint:** `POST /locations/{locationId}/tags`
**Scope:** `locations/tags.write`
**Token Type:** bearer

Create tag

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `tagBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTagSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get tag by id

**Endpoint:** `GET /locations/{locationId}/tags/{tagId}`
**Token Type:** bearer

Get tag by id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `tagId` | path | `string` | Yes | Tag Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTagSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update tag

**Endpoint:** `PUT /locations/{locationId}/tags/{tagId}`
**Token Type:** bearer

Update tag

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `tagId` | path | `string` | Yes | Tag Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `tagBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTagSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete tag

**Endpoint:** `DELETE /locations/{locationId}/tags/{tagId}`
**Token Type:** bearer

Delete tag

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `tagId` | path | `string` | Yes | Tag Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTagDeleteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Tasks Search

### Task Search Filter

**Endpoint:** `POST /locations/{locationId}/tasks/search`
**Scope:** `locations/tasks.readonly`
**Token Type:** bearer

Task Search

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `TaskSearchParamsDto` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `LocationTaskListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Recurring Tasks

### Get Recurring Task By Id

**Endpoint:** `GET /locations/{locationId}/recurring-tasks/{id}`
**Token Type:** bearer

Get Recurring Task By Id

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Recurring Task Id |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `RecurringTaskSingleResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Update Recurring Task

**Endpoint:** `PUT /locations/{locationId}/recurring-tasks/{id}`
**Token Type:** bearer

Update Recurring Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Recurring Task Id |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `RecurringTaskUpdateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `RecurringTaskSingleResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Delete Recurring Task

**Endpoint:** `DELETE /locations/{locationId}/recurring-tasks/{id}`
**Token Type:** bearer

Delete Recurring Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `id` | path | `string` | Yes | Recurring Task Id |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `DeleteRecurringTaskResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Recurring Task

**Endpoint:** `POST /locations/{locationId}/recurring-tasks`
**Token Type:** bearer

Create Recurring Task

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `RecurringTaskCreateDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `RecurringTaskSingleResponseDTO` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

## Custom Field

### Get Custom Fields

**Endpoint:** `GET /locations/{locationId}/customFields`
**Scope:** `locations/customFields.readonly`
**Token Type:** bearer

Get Custom Fields

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `model` | query | `string` | No | Model of the custom field you want to retrieve |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldsListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Create Custom Field

**Endpoint:** `POST /locations/{locationId}/customFields`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

Create Custom Field

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `CreateCustomFieldsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Custom Field

**Endpoint:** `GET /locations/{locationId}/customFields/{id}`
**Token Type:** bearer

Get Custom Field

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id") |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Custom Field

**Endpoint:** `PUT /locations/{locationId}/customFields/{id}`
**Token Type:** bearer

Update Custom Field

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Field Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `UpdateCustomFieldsDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Custom Field

**Endpoint:** `DELETE /locations/{locationId}/customFields/{id}`
**Token Type:** bearer

Delete Custom Field

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Field Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomFieldDeleteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Uploads File to customFields

**Endpoint:** `POST /locations/{locationId}/customFields/upload`
**Scope:** `locations/customFields.write`
**Token Type:** bearer

Uploads File to customFields

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | — |

**Request Body**

| Content type | Schema |
| --- | --- |
| multipart/form-data | `FileUploadBody` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `FileUploadResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Custom Value

### Get Custom Values

**Endpoint:** `GET /locations/{locationId}/customValues`
**Scope:** `locations/customValues.readonly`
**Token Type:** bearer

Get Custom Values

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomValuesListSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |

### Create Custom Value

**Endpoint:** `POST /locations/{locationId}/customValues`
**Scope:** `locations/customValues.write`
**Token Type:** bearer

Create Custom Value

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `customValuesDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `201` | Successful response | `CustomValueIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Get Custom Value

**Endpoint:** `GET /locations/{locationId}/customValues/{id}`
**Token Type:** bearer

Get Custom Value

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Value Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomValueIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Update Custom Value

**Endpoint:** `PUT /locations/{locationId}/customValues/{id}`
**Token Type:** bearer

Update Custom Value

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Value Id |

**Request Body**

| Content type | Schema |
| --- | --- |
| application/json | `customValuesDTO` |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomValueIdSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### Delete Custom Value

**Endpoint:** `DELETE /locations/{locationId}/customValues/{id}`
**Token Type:** bearer

Delete Custom Value

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Custom Value Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `CustomValueDeleteSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Timezone

### Fetch Timezones

**Endpoint:** `GET /locations/{locationId}/timezones`
**Scope:** `locations.readonly`
**Token Type:** bearer, Location-Access

Fetch the available timezones

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Template

### GET all or email/sms templates

**Endpoint:** `GET /locations/{locationId}/templates`
**Scope:** `locations/templates.readonly`
**Token Type:** bearer

GET all or email/sms templates

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `deleted` | query | `boolean` | No | — |
| `skip` | query | `string` | No | — |
| `limit` | query | `string` | No | — |
| `type` | query | `string` | No | — |
| `originId` | query | `string` | Yes | Origin Id |
| `locationId` | path | `string` | Yes | Location Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | Successful response | `GetTemplatesSuccessfulResponseDto` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

### DELETE an email/sms template

**Endpoint:** `DELETE /locations/{locationId}/templates/{id}`
**Token Type:** bearer

DELETE an email/sms template

**Parameters**

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `Version` | header | `string` | Yes | API Version |
| `locationId` | path | `string` | Yes | Location Id |
| `id` | path | `string` | Yes | Template Id |

**Responses**

| Status | Description | Schema |
| --- | --- | --- |
| `200` | — | `—` |
| `400` | Bad Request | `BadRequestDTO` |
| `401` | Unauthorized | `UnauthorizedDTO` |
| `422` | Unprocessable Entity | `UnprocessableDTO` |

## Schemas

### SettingsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allowDuplicateContact` | `boolean` | No | — |
| `allowDuplicateOpportunity` | `boolean` | No | — |
| `allowFacebookNameMerge` | `boolean` | No | — |
| `disableContactTimezone` | `boolean` | No | — |

### SocialSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `facebookUrl` | `string` | No | Facebook URL |
| `googlePlus` | `string` | No | Googleplus URL |
| `linkedIn` | `string` | No | LinkedIn URL |
| `foursquare` | `string` | No | Foursquare URL |
| `twitter` | `string` | No | Twitter URL |
| `yelp` | `string` | No | Yelp URL |
| `instagram` | `string` | No | Instagram URL |
| `youtube` | `string` | No | Instagram URL |
| `pinterest` | `string` | No | Instagram URL |
| `blogRss` | `string` | No | Instagram URL |
| `googlePlacesId` | `string` | No | Google Business Places ID |

### GetLocationSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Location Id |
| `name` | `string` | No | The name for the sub-account/location |
| `phone` | `string` | No | The phone number of the business for which sub-account is created |
| `email` | `string` | No | The email for the sub-account/location |
| `address` | `string` | No | The address of the business for which sub-account is created |
| `city` | `string` | No | The city where the business is located for which sub-account is created |
| `state` | `string` | No | The state in which the business operates for which sub-account is created |
| `country` | `string` | No | The country in which the business is present for which sub-account is created |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created |
| `website` | `string` | No | The website of the business for which sub-account is created |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created |
| `settings` | `SettingsSchema` | No | The default settings for location |
| `social` | `SocialSchema` | No | The social media links for location |

### SearchSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `locations` | `array<GetLocationSchema>` | No | — |

### BusinessSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | — |
| `address` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `country` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `timezone` | `string` | No | — |
| `logoUrl` | `string` | No | — |

### GetLocationByIdSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `companyId` | `string` | No | — |
| `name` | `string` | No | — |
| `domain` | `string` | No | — |
| `address` | `string` | No | — |
| `city` | `string` | No | — |
| `state` | `string` | No | — |
| `logoUrl` | `string` | No | — |
| `country` | `string` | No | — |
| `postalCode` | `string` | No | — |
| `website` | `string` | No | — |
| `timezone` | `string` | No | — |
| `firstName` | `string` | No | — |
| `lastName` | `string` | No | — |
| `email` | `string` | No | — |
| `phone` | `string` | No | — |
| `business` | `BusinessSchema` | No | — |
| `social` | `SocialSchema` | No | — |
| `settings` | `SettingsSchema` | No | — |
| `reseller` | `object` | No | — |

### GetLocationByIdSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `location` | `GetLocationByIdSchema` | No | — |

### ProspectInfoDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firstName` | `string` | Yes | First name of the prospect |
| `lastName` | `string` | Yes | Last name of the prospect |
| `email` | `string` | Yes | Email of the prospect |

### TwilioSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `sid` | `string` | Yes | SID provided by Twilio |
| `authToken` | `string` | Yes | Auth token provided by Twilio |

### MailgunSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `apiKey` | `string` | Yes | API key provided by Mailgun |
| `domain` | `string` | Yes | Domain connected with Mailgun |

### CreateLocationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | The name for the sub-account/location |
| `phone` | `string` | No | The phone number of the business for which sub-account is created with the appropriate country-code |
| `companyId` | `string` | Yes | Company/Agency Id |
| `address` | `string` | No | The address of the business for which sub-account is created |
| `city` | `string` | No | The city where the business is located for which sub-account is created |
| `state` | `string` | No | The state in which the business operates for which sub-account is created |
| `country` | `string` | No | The 2 letter country-code in which the business is present for which sub-account is created |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created |
| `website` | `string` | No | The website of the business for which sub-account is created |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created |
| `prospectInfo` | `ProspectInfoDto` | No | — |
| `settings` | `SettingsSchema` | No | The default settings for location |
| `social` | `SocialSchema` | No | The social media links for location |
| `twilio` | `TwilioSchema` | No | The twilio credentials for location |
| `mailgun` | `MailgunSchema` | No | The mailgun credentials for location |
| `snapshotId` | `string` | No | The snapshot ID to be loaded into the location. |

### CreateLocationSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Location Id |
| `companyId` | `string` | No | Company/Agency Id |
| `name` | `string` | No | The name for the sub-account/location |
| `phone` | `string` | No | The phone number of the business for which sub-account is created |
| `email` | `string` | No | The email for the sub-account/location |
| `address` | `string` | No | The address of the business for which sub-account is created |
| `city` | `string` | No | The city where the business is located for which sub-account is created |
| `state` | `string` | No | The state in which the business operates for which sub-account is created |
| `domain` | `string` | No | — |
| `country` | `string` | No | The country in which the business is present for which sub-account is created |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created |
| `website` | `string` | No | The website of the business for which sub-account is created |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created |
| `settings` | `SettingsSchema` | No | The default settings for location |
| `social` | `SocialSchema` | No | The social media links for location |

### SnapshotPutSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Snaptshot ID |
| `override` | `boolean` | No | If you want override all conflicted assets then pass true. Default value is false. |

### UpdateLocationDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | The name for the sub-account/location |
| `phone` | `string` | No | The phone number of the business for which sub-account is created |
| `companyId` | `string` | Yes | Company/Agency Id |
| `address` | `string` | No | The address of the business for which sub-account is created |
| `city` | `string` | No | The city where the business is located for which sub-account is created |
| `state` | `string` | No | The state in which the business operates for which sub-account is created |
| `country` | `string` | No | The country in which the business is present for which sub-account is created |
| `postalCode` | `string` | No | The postal code of the business for which sub-account is created |
| `website` | `string` | No | The website of the business for which sub-account is created |
| `timezone` | `string` | No | The timezone of the business for which sub-account is created |
| `prospectInfo` | `ProspectInfoDto` | No | — |
| `settings` | `SettingsSchema` | No | The default settings for location |
| `social` | `SocialSchema` | No | The social media links for location |
| `twilio` | `TwilioSchema` | No | The twilio credentials for location |
| `mailgun` | `MailgunSchema` | No | The mailgun credentials for location |
| `snapshot` | `SnapshotPutSchema` | No | The snapshot to be updated in the location. |

### LocationDeletedSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Yes | Success status of the API |
| `message` | `string` | Yes | Success message of the API |

### LocationTagsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | — |
| `locationId` | `string` | No | — |
| `id` | `string` | No | — |

### LocationTagsSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `array<LocationTagsSchema>` | No | — |

### LocationTagSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tag` | `LocationTagsSchema` | No | — |

### tagBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Tag name |

### LocationTagDeleteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### TaskSearchParamsDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contactId` | `array<string>` | No | Contact Ids |
| `completed` | `boolean` | No | Task Completed Or Pending |
| `assignedTo` | `array<string>` | No | Assigned User Ids |
| `query` | `string` | No | Search Value |
| `limit` | `number` | No | Limit To Api |
| `skip` | `number` | No | Number Of Tasks To Skip |
| `businessId` | `string` | No | Bussiness Id |

### LocationTaskListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tasks` | `array<array<object>>` | No | — |

### CustomFieldSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `fieldKey` | `string` | No | — |
| `placeholder` | `string` | No | — |
| `dataType` | `string` | No | — |
| `position` | `number` | No | — |
| `picklistOptions` | `array<string>` | No | — |
| `picklistImageOptions` | `array<string>` | No | — |
| `isAllowedCustomOption` | `boolean` | No | — |
| `isMultiFileAllowed` | `boolean` | No | — |
| `maxFileLimit` | `number` | No | — |
| `locationId` | `string` | No | — |
| `model` | `string` | No | Model of the custom field |

### CustomFieldsListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customFields` | `array<CustomFieldSchema>` | No | — |

### CustomFieldSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customField` | `CustomFieldSchema` | No | — |

### textBoxListOptionsSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | No | — |
| `prefillValue` | `string` | No | — |

### CreateCustomFieldsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `dataType` | `string` | Yes | — |
| `placeholder` | `string` | No | — |
| `acceptedFormat` | `array<string>` | No | — |
| `isMultipleFile` | `boolean` | No | — |
| `maxNumberOfFiles` | `number` | No | — |
| `textBoxListOptions` | `array<textBoxListOptionsSchema or textBoxListOptionsSchema>` | No | — |
| `position` | `number` | No | — |
| `model` | `string` | No | Model of the custom field you want to create |

### UpdateCustomFieldsDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `placeholder` | `string` | No | — |
| `acceptedFormat` | `array<string>` | No | — |
| `isMultipleFile` | `boolean` | No | — |
| `maxNumberOfFiles` | `number` | No | — |
| `textBoxListOptions` | `array<textBoxListOptionsSchema or textBoxListOptionsSchema>` | No | — |
| `position` | `number` | No | — |
| `model` | `string` | No | Model of the custom field you want to update |

### CustomFieldDeleteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### FileUploadBody

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | Id(Contact Id/Opportunity Id/Custom Field Id) |
| `maxFiles` | `string` | No | Max number of files |

### FileUploadResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `uploadedFiles` | `object` | No | Uploaded files |
| `meta` | `array<string>` | No | Meta data of uploaded files |

### CustomValueSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `fieldKey` | `string` | No | — |
| `value` | `string` | No | — |
| `locationId` | `string` | No | — |

### CustomValuesListSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customValues` | `array<CustomValueSchema>` | No | — |

### CustomValueIdSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customValue` | `CustomValueSchema` | No | — |

### customValuesDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | — |
| `value` | `string` | Yes | — |

### CustomValueDeleteSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `succeded` | `boolean` | No | — |

### SmsTemplateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `body` | `string` | No | — |
| `attachments` | `array<array<object>>` | No | — |

### GetSmsTemplateResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `type` | `string` | No | — |
| `template` | `SmsTemplateSchema` | No | — |
| `dateAdded` | `string` | No | — |
| `locationId` | `string` | No | — |
| `urlAttachments` | `array<string>` | No | — |

### EmailTemplateSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `subject` | `string` | No | — |
| `attachments` | `array<array<object>>` | No | — |
| `html` | `string` | No | — |

### GetEmailTemplateResponseSchema

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | — |
| `name` | `string` | No | — |
| `type` | `string` | No | — |
| `dateAdded` | `string` | No | — |
| `template` | `EmailTemplateSchema` | No | — |
| `locationId` | `string` | No | — |

### GetTemplatesSuccessfulResponseDto

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `templates` | `array<GetSmsTemplateResponseSchema or GetEmailTemplateResponseSchema>` | No | — |
| `totalCount` | `number` | No | — |

### CustomRRulesOptions

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `intervalType` | `string` | Yes | — |
| `interval` | `number` | Yes | — |
| `startDate` | `string` | Yes | Start Date |
| `endDate` | `string` | No | End Date |
| `dayOfMonth` | `number` | No | 1, 2, 3, ..., 27, 31 |
| `dayOfWeek` | `string` | No | — |
| `monthOfYear` | `number` | No | 1, 2, ....., 11, 12 |
| `count` | `number` | No | Max number of task executions |
| `createTaskIfOverDue` | `boolean` | No | Create Task If Over Due |
| `dueAfterSeconds` | `number` | Yes | Due after seconds |

### RecurringTaskResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Recurring Task Id |
| `title` | `string` | Yes | Name of the task |
| `description` | `string` | Yes | Description of the task |
| `locationId` | `string` | Yes | Location Id |
| `updatedAt` | `string` | Yes | Updated At |
| `createdAt` | `string` | Yes | Created At |
| `rruleOptions` | `CustomRRulesOptions` | Yes | Recurring rules |
| `totalOccurrence` | `number` | Yes | Total Occurrence |
| `deleted` | `boolean` | Yes | Deleted |
| `assignedTo` | `string` | No | Assigned To |
| `contactId` | `string` | No | Contact Id |

### RecurringTaskSingleResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `recurringTask` | `RecurringTaskResponseDTO` | Yes | Recurring Tasks |

### RecurringTaskCreateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | Yes | Name of the task |
| `description` | `string` | No | Description of the task |
| `contactIds` | `array<string>` | No | Contact Id |
| `owners` | `array<string>` | No | Assigned To |
| `rruleOptions` | `CustomRRulesOptions` | Yes | Recurring rules |
| `ignoreTaskCreation` | `boolean` | No | Create initial task or not |

### RecurringTaskUpdateDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `title` | `string` | No | Name of the task |
| `description` | `string` | No | Description of the task |
| `contactIds` | `array<string>` | No | Contact Id |
| `owners` | `array<string>` | No | Assigned To |
| `rruleOptions` | `CustomRRulesOptions` | No | Recurring rules |
| `ignoreTaskCreation` | `boolean` | No | Create initial task or not |

### DeleteRecurringTaskResponseDTO

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Recurring Task Id |
| `success` | `boolean` | Yes | Success |
