# Search Contacts
- Source URL: https://marketplace.gohighlevel.com/docs/ghl/contacts/search-contacts-advanced/index.html
- Browser: chrome
- Endpoint URL: POST https://services.leadconnectorhq.com/contacts/search
## API Reference
**Endpoint:** `POST /contacts/search`
**Scope:** `contacts.readonly`
**Token Type:** Sub-Account Token
**Auth Method(s):** OAuth Access Token, Private Integration Token
## HighLevel Page
- Contacts
- Search
- Search Contacts

# Search Contacts

```
POST
https://services.leadconnectorhq.com/contacts/search
```

https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad

### Requirements

#### Scope(s)

contacts.readonly

#### Auth Method(s)

OAuth Access Token

Private Integration Token

#### Token Type(s)

Sub-Account Token

## Request​

### HEADER PARAMETERS

- application/json

### BODYREQUIRED

## Responses​

- 200
- 400
- 401

Success

## Share your feedback

★

★

★

★

★

#### AUTHORIZATION: AUTHORIZATION

- CURL
- NODEJS
- PYTHON
- PHP
- JAVA
- GO
- RUBY
- POWERSHELL

- CURL

```
curl -L 'https://services.leadconnectorhq.com/contacts/search' \

	-H 'Content-Type: application/json' \

	-H 'Authorization: Bearer <TOKEN>' \

	-d '{}'
```

REQUEST

COLLAPSE ALL

Base URL

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version

— header

REQUIRED

---

2021-07-28

REQUIRED

```
{}
```

SEND API REQUEST

RESPONSE

CLEAR

Send API Request

Previous

Search

Next

Get Duplicate Contact

## ClickUp Supplement: Contacts Search API

- Source URL: https://doc.clickup.com/8631005/d/h/87cpx-158396/6e629989abe7fad

Contacts Search API

Get ClickUp Free

Contacts Search API

🔸 Request Body

Pagination Limitations

Sample Request Body

Filters

Sample Filter Payload

Supported Filter Operators

Supported Filter Fields

Sort

Sample Sort Payloads

Supported Fields

Response Body

Please note: Due to the complexity of the advanced filtering requirements, updates may take a few seconds to appear in the search results.

The Contacts Search API enables users to search for contacts within your CRM system based on specified criteria. It offers extensive filtering, sorting, and pagination options to refine search results according to specific needs.

Endpoint:

POST /contacts/search

## 🔸 Request Body

| Parameter | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| locationId | string | Yes | Location ID in which the search needs to be performed. | 5DP41231LkQsiKESj6rh |
| page | number | No | The page number of results to retrieve. Used for standard pagination. | 1 |
|  |  |  | ⚠️ Note : When using searchAfter  parameter, page  should not be provided. |  |
| pageLimit | number | Yes | The number of results to limit per page. | 20 |
| searchAfter | array | No | Used for cursor-based pagination. This value is returned in the response of each document and defines where to start the next page from. | [10, "ABC"] |
|  |  |  | ⚠️ Note : Required for retrieving results beyond 10,000 records. |  |
| filters | array | No |  |  |
| \|---- group |  |  | Logical group operator for the filters. Must be either AND or OR. |  |
| \|---- filters |  |  | Array of filters or nested filter groups to be grouped together. |  |
| \|---- field |  |  | Name of the field to filter by. |  |
| \|---- operator |  |  | Operator to apply for filtering. |  |
| \|---- value |  |  | Value for the filter. |  |
|  |  |  | ⚠️ Note : By default every filter in the filters  array is considered in AND logical group |  |
| sort | array | No | Array of sorting criteria to apply for ordering search results. |  |
| \|---- field |  |  | Name of the field to sort by. |  |
| \|---- direction |  |  | Sorting direction (asc for ascending, desc for descending). |  |
| query | string | No | The string you want to search for within your contacts. The results will depend on the searchable fields you’ve configured.

⚠️ Note:

Max query limit is 75 characters
query runs filters / tests against the fields defined as searchable in the Custom Fields Settings tab. These searchable fields are customizable.

For more information on how searchable fields work for contacts, please refer to this guide:
 GohighlevelSearching an Object Record |  |

### Pagination Limitations

The API has the following pagination limitations:

1. Standard Pagination (page & pageLimit)
  - Can fetch a maximum of 10,000 records in total
  - Use page and pageLimit parameters

Note

Standard Pagination

page=20

pageLimit=500

1. Cursor-based Pagination (searchAfter & pageLimit)
  - Required for accessing more than 10,000 records
  - Use the searchAfter parameter returned in each response to fetch the next set of results
  - Do not include the page parameter when using searchAfter
  - This allows for efficient pagination through large result sets

#### Sample Request Body

```
{
  "locationId": "5DP41231LkQsiKESj6rh",
  "page": 1,
  "pageLimit": 20,
  "searchAfter": ["bs5qhs78vqhs", "2FP41231LkQsiKESj6eg"],
  "filters": [
    {
       "field": "dnd",
       "operator": "eq",
       "value": true
    },

    {
      "group": "OR",
      "filters": [
        {
          "field": "firstNameLowerCase",
          "operator": "eq",
          "value": "alex"
        },
        {
          "field": "lastNameLowerCase",
          "operator": "eq",
          "value": "peter"
        }
      ]
    },

  ],
  "sort": [
    {
      "field": "firstNameLowerCase",
      "direction": "desc"
    }
  ],
 "query":"tom"
}
Copy
```

## Filters

The Search Contacts API supports a variety of filters that allow users to refine their search results based on specific criteria. Filters can be applied individually or grouped together using logical operators (AND, OR) to create complex search queries each comprising three essential components:

1. Field : Indicates the attribute or property of contacts by which the filter is applied. For example, contactName refers to the name of the contact.
1. Operator : Specifies the operation to be performed on the field to filter contacts. Operators define the type of comparison or matching to be executed.
1. Value : Represents the specific value against which the field is compared using the specified operator. This value varies based on the filter criteria and can be a string, number, or other data type relevant to the field being filtered.

#### Sample Filter Payload

```
{
  "filters": [
    {
      "group": "AND",
      "filters": [
        {
          "field": "firstNameLowerCase",
          "operator": "contains",
          "value": "John"
        },
        {
          "field": "email",
          "operator": "exists"
        }
      ]
    },
    {
      "group": "OR",
      "filters": [
        {
          "field": "city",
          "operator": "eq",
          "value": "New York"
        },
        {
          "field": "state",
          "operator": "eq",
          "value": "California"
        }
      ]
    }
  ]
}
Copy
```

#### Supported Filter Operators

| Operator | Definition | Value Type | Example | Character
 Limit |
| --- | --- | --- | --- | --- |
| eq | Equals | Number, String, Boolean |  | 75 |
| not_eq | Not Equals | Number, String, Boolean |  | 75 |
| contains | Contains | String (The contains operator does not support special characters.) |  | 75 |
| not_contains | Not Contains | String(The not_contains operator does not support special characters.) |  | 75 |
| exists | Exists (has a value) | Undefined

(Do not pass any value, just field and operator are enough) |  | None |
| not_exists | Does not exist (no value) | Undefined

(Do not pass any value, just field and operator are enough) |  | None |
| range | Range |  |  | 75 |

#### Supported Filter Fields

| Display Name | Field Name | Supported Operators | Example |
| --- | --- | --- | --- |
| Contact Information |
| Contact Id | id | eq
not_eq |  |
| Contact Name | contactName | eq

not_eq

exists

not_exists |  |
| Address | address | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Assigned | assignedTo | eq

not_eq

exists

not_exists |  |
| Business Name | businessName | eq

not_eq

contains

not_contains

exists

not_exists |  |
| City | city | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Country | country | eq

not_eq

exists

not_exists |  |
| Company Name | companyName | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Created At | dateAdded | range
exists
not_exists |  |
| Updated At | dateUpdated | range
exists
not_exists |  |
| DND | dnd | eq

not_eq

exists

not_exists |  |
| Email | email | eq

not_eq

exists

not_exists

contains and not_contains are not yet supported |  |
| Followers | followers | eq

not_eq

exists

not_exists |  |
| First Name Lower Case | firstNameLowerCase | eq

not_eq

contains

not_contains

exists

not_exists |  |
| First Name (Without Lower Case) | Coming soon! | Coming soon! | Coming soon! |
| Last Name Lower Case | lastNameLowerCase | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Last Name (Without Lower Case) | Coming soon! | Coming soon! | Coming soon! |
| Is Valid Whatsapp | isValidWhatsapp | eq

not_eq

exists

not_exists |  |
| Last Email Clicked Date | lastEmailClickedDate | range

exists

not_exists |  |
| Last Email Opened Date | lastEmailOpenedDate | range

exists

not_exists |  |
| Phone

(Do pass in the correct country code)

Eg: +91701000000 | phone | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Postal Zip Code | postalCode | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Source | source | eq

not_eq

contains

not_contains

exists

not_exists |  |
| State | state | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Tags | tags | eq

not_eq

contains

not_contains

exists

not_exists |  |
| Timezone

Eg: Pacific/Honolulu | timezone | eq

not_eq

exists

not_exists |  |
| Contact Type | type | eq

not_eq

exists

not_exists |  |
| Is Valid Email

(Applicable only if Email Validation is enabled for the location) | validEmail | eq

not_eq

exists

not_exists |  |
| Website | website | eq

not_eq

exists

not_exists

contains and not_contains are not yet supported |  |
| Date of Birth | dateOfBirth | range
exists
not_exists |  |
| Contact Activity |
|  |
| Last Appointment - Confirmed/Open | lastAppointment | range

exists

not_exist |  |
| Workflow (Active) | activeWorkflows | eq

not_eq

exists

not_exists |  |
| Workflow (Finished) | finishedWorkflows | eq

not_eq

exists

not_exists |  |
| Opportunity Information |
| Pipeline | field - opportunities

sub field - pipelineId | field - nested

sub field -

eq

not_eq

exists

not_exists |  |
| Pipeline Stage | field - opportunities
sub field - pipelineStageId | field - nested

sub field -
eq

not_eq

exists

not_exists |  |
| Pipeline Status | field - opportunities
sub field - status | field - nested

sub field -
eq

not_eq

exists

not_exists |  |
| Opportunities Combination Filters | You can combine 2 or more sub-fields under opportunities nested filters |  |  |
| Custom Fields |
| TEXT Type Field
LARGE_TEXT Type Field
SINGLE_OPTIONS Type Field
RADIO Type Field
PHONE Type Field | customFields.{{ custom_field_id }}

Eg: customFields.OBj007JIEmLP0IEHdV1l | eq
not_eq
contains
not_contains
exists
not_exists |  |
| CHECKBOX Type Field
MULTIPLE_OPTIONS Type Field | eq
not_eq
exists
not_exists |  |
| NUMERICAL Type Field
MONETORY Type Field | range

exists
not_exists

eq
not_eq |  |
| DATE Type Field | range
exists
not_exists |  |
| TEXTBOX_LIST Type Field | customFields.{{ custom_field_id }}.{{ optionoption_id }}
Eg: customFields.OBj007JIEmLP0IEHdV1l.c1b70ec9-664f-400f-a3fc-6f7912c5e310 | eq
not_eq
contains
not_contains

exists
not_exists |  |

### Sort

The Search Contacts API supports sorting contacts based on various fields. Users can specify the field to sort by, the sorting direction (ascending or descending), and whether the field is a custom field.

1. Field : Indicates the attribute or property of contacts by which the sorting is applied. For example, "date_of_birth" represents the birth date of the contact.
1. Direction : Specifies the sorting direction as either "asc" (ascending) or "desc" (descending).
1. Is Custom Field : Indicates whether the field being sorted is a custom field.

#### Sample Sort Payloads

You can combine 2 sort at once

```
[
  {
    "field": "dateAdded",
    "direction": "desc"
  },
  {
    "field": "firstNameLowerCase",
    "direction": "asc"
  }
]
Copy
```

#### Supported Fields

| Display Name | Field Name | Example |
| --- | --- | --- |
| First Name (Lowercase) | firstNameLowerCase |  |
| Last Name (Lowercase) | lastNameLowerCase |  |
| Business Name | businessName |  |
| Date Created | dateAdded |  |
| Date Updated | dateUpdated |  |
| Email | email |  |
| DND | dnd |  |
| Source | source |  |

### Response Body

```
{
  "contacts": [
    {
      "id": "102goXVW3lIExEQPOnd3",
      "additionalEmails": ["john@example.com", "jane@example.com"],
      "additionalPhones": ["123456789", "987654321"],
      "address": "123 Main Street",
      "assignedTo": "182goXVW3lIExEQPOnd3",
      "businessId": "282goXVW3lIExEQPOnd3",
      "businessName": "Acme Corporation",
      "city": "New York",
      "companyName": "XYZ Corp",
      "country": "United States",
      "customFields": [
          {
            "id": "sqoiOo5mAb8qwjXvcgdQ",
            "value": "random",
          }
          {
            "id": "qweqgehuqwejqeiqwoqw",
            "value": ["option - 1", "option -2"],
          }
      ],
      "dateAdded": "2024-06-06T18:54:57.221Z",
      "dateOfBirth": "1990-01-01",
      "dateUpdated": "2024-06-06T18:54:57.221Z",
      "dnd": false,
      "dndSettings": {},
      "email": "john@example.com",
      "firstNameLowerCase": "john", // first name without lowercase is not yet available.
      "lastNameLowerCase": "doe", // first name without lowercase is not yet available.
      "followers": ["682goXVW3lIExEQPOnd3", "582goXVW3lIExEQPOnd3"],
      "locationId": "502goXVW3lIExEQPOnd3",
      "phone": "+123456789",
      "phoneLabel": "Mobile",
      "postalCode": "12345",
      "source": "Website",
      "state": "California",
      "tags": ["tag-1", "tag-2"],
      "type": "lead",
      "validEmail": true,
      "website": "www.example.com",
      "attributionSource": {
          "utmSource": "google",
          "utmKeyword": "crm platform",
          "utmTerm": "crm+tool",
          "utmMatchtype": "b",
          "sessionSource": "google_ads",
          "medium": "paid",
          "mediumId": "md_123",
          "campaign": "winter_sale",
          "utmMedium": "cpc",
          "utmContent": "banner_1",
          "gclid": "EAIaIQobChMI12",
          "fbclid": "fb.12345.abc",
          "campaignId": "cmp_789",
          "adId": "ad_456",
          "adGroupId": "adg_321",
          "referrer": "https://example.com",
          "fbc": "fb.1.123.456",
          "fbp": "fbp.1.789.321",
          "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
          "ip": "192.168.1.10",
          "gaClientId": "12345.67890",
          "adName": "crm_ad_set",
          "gbraid": "gbraid_sample_123",
          "wbraid": "wbraid_sample_456",
          "url": "https://product.com/pricing",
          "adSource": "google_ads"
      },
    "lastAttributionSource": {
        "utmSource": "facebook",
        "utmKeyword": "marketing automation",
        "utmTerm": "automation+tool",
        "utmMatchtype": "e",
        "sessionSource": "facebook_ads",
        "medium": "social",
        "mediumId": "md_987",
        "campaign": "new_year_blast",
        "utmMedium": "paid_social",
        "utmContent": "video_ad",
        "gclid": "EAIaIQobChMI99",
        "fbclid": "fb.67890.xyz",
        "campaignId": "cmp_222",
        "adId": "ad_999",
        "adGroupId": "adg_555",
        "referrer": "https://facebook.com",
        "fbc": "fb.1.987.654",
        "fbp": "fbp.1.555.666",
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        "ip": "203.0.113.15",
        "gaClientId": "98765.43210",
        "adName": "fb_lead_gen",
        "gbraid": "gbraid_sample_789",
        "wbraid": "wbraid_sample_999",
        "url": "https://landingpage.com/signup",
        "adSource": "facebook_ads"
      }
    }
  ],
  "total": 120
}
Copy
```

Association & Relations:

To fetch related objects, please refer to the documentation below:

Fetch Related Record By Id
