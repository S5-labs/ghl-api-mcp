# Records Search API (ClickUp Documentation)
Source: https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-379336
Last updated: 12/8/25

## Overview
The Records Search API enables users to search for custom objects or business within your CRM system based on specified criteria. It offers extensive filtering, sorting, and pagination options to refine search results according to specific needs.

**Note:** Due to the complexity of the advanced filtering requirements, updates may take a few seconds to appear in the search results. As of today this API only supports custom objects and business (company). More support for other standard objects will be added in the future.

## Endpoint
POST /objects/${objectKey}/records/search

## Request Body Parameters
- **locationId** (string; required): Location ID in which the search needs to be performed. Example: 5DP41231LkQsiKESj6rh
- **page** (number; required): The page number of results to retrieve. Example: 1
- **pageLimit** (number; required): The number of results to limit per page. Example: 20
- **searchAfter** (array; optional): searchAfter is returned in the response of each document and defines where to start the page from. Example: [10, "ABC"]
- **filters** (array; optional): Array of filters or nested filter groups to refine search results.
  - group: Logical group operator (AND or OR)
  - filters: Array of filters or nested filter groups
  - field: Name of the field to filter by
  - operator: Operator to apply for filtering
  - value: Value for the filter
  - NOTE: By default every filter in the filters array is considered in AND logical group
- **sort** (array; optional): Array of sorting criteria. Properties:
  - field: Name of the field to sort by
  - direction: Sorting direction (asc or desc)
- **query** (string; optional): Your search string. Note: Limit is 75 characters

## Sample Request Body - Custom Object
```json
{
  "locationId": "mbEVGywZGDnPkLKytm26",
  "page": 1,
  "pageLimit": 20,
  "query": "buddy",
  "filters": [
    {
      "group": "AND",
      "filters": [
        {
          "group": "OR",
          "filters": [
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.name",
                  "operator": "eq",
                  "value": "jerry"
                }
              ]
            },
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.color",
                  "operator": "eq",
                  "value": "red"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sort": [
    {
      "field": "updatedAt",
      "direction": "asc"
    }
  ]
}
```

## Sample Request Body - Business
```json
{
  "locationId": "mbEVGywZGDnPkLKytm26",
  "page": 1,
  "pageLimit": 20,
  "filters": [
    {
      "group": "AND",
      "filters": [
        {
          "group": "OR",
          "filters": [
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.name",
                  "operator": "eq",
                  "value": "Biomedics"
                }
              ]
            },
            {
              "group": "AND",
              "filters": [
                {
                  "field": "properties.phone",
                  "operator": "eq",
                  "value": "+919876543229"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "sort": [
    {
      "field": "phone",
      "direction": "asc"
    }
  ]
}
```

## Supported Filter Operators
| Operator | Definition | Value Type | Character Limit |
|---|---|---|---|
| eq | Equals | Number, String, Boolean | None |
| not_eq | Not Equals | Number, String, Boolean | None |
| contains | Contains | String (no special characters) | 75 |
| not_contains | Not Contains | String (no special characters) | 75 |
| exists | Exists (has a value) | Undefined (no value needed) | None |
| not_exists | Does not exist (no value) | Undefined (no value needed) | None |
| range | Range | Object with gt/lt | 75 |

## Supported Filter Fields
- TEXT, LARGE_TEXT, SINGLE_OPTIONS, RADIO, PHONE, EMAIL (Business only): customFields.{{ custom_field_id }} - supports eq, not_eq, contains, not_contains, exists, not_exists
- CHECKBOX, MULTIPLE_OPTIONS: supports eq, not_eq, exists, not_exists
- NUMERICAL, MONETORY: supports range, exists, not_exists, eq, not_eq
- DATE: supports range, exists, not_exists
- TEXTBOX_LIST: customFields.{{ custom_field_id }}.{{ option_id }} - supports eq, not_eq, contains, not_contains, exists, not_exists

## Sample Response - Custom Object
```json
{
  "records": [
    {
      "id": "67765debc3113762ca85855a",
      "locationId": "eHy2cOSZxMQzQ6Yyvl8P",
      "objectId": "6627560bb1344762ae5b110c",
      "objectKey": "custom_objects.mad",
      "createdBy": {
        "source": "WORKFLOW_NEW",
        "channel": "ISTIO_MESH",
        "sourceId": "26653146-ec82-435d-8a99-84ecdb7fde13",
        "createdAt": "2025-01-02T09:35:39.032Z"
      },
      "createdAt": "2025-01-02T09:35:39.033Z",
      "updatedAt": "2025-01-06T15:26:14.921Z",
      "owners": ["llj8YI0kb31XOHI5sUrQ"],
      "followers": [],
      "properties": {
        "mad": "create 1qasdccasasdc",
        "number": 13,
        "cool": "mvjsdcasd"
      },
      "sort": [1735810539033, "67765debc3113762ca85855a"]
    }
  ],
  "total": 20
}
```
