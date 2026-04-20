# Update Records API (ClickUp Documentation)
Source: https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0/87cpx-376296
Last updated: 3/19/25

## Overview
The Objects Record API enables users to add/update new records within your CRM system. Currently only Custom Objects and Company (business) are supported.

## Endpoints
- **Create**: POST https://services.leadconnectorhq.com/objects/{ObjectKey}/records
- **Update**: PUT https://services.leadconnectorhq.com/objects/{ObjectKey}/records/{recordId}?locationId={locationId}

## Path Parameters
- **{ObjectKey}**: Objects Key is the internal name given to the Custom Object while creation and is immutable once created. Example: custom_objects.event_ticket (All Custom Object Keys have custom_objects. prefix)
- **{recordId}**: Custom Object Record / business Id to be updated. Example: 668d681f77af4e5229abd6c0

## Query Parameters
- **{locationId}**: Your Sub Account's ID. Example: clF1LD04GTUKN3b3XuOj

## Request Body

### Standard Fields
- **owners** (array[string]): Owner (User's id). Limited to 1 for now. Only support for custom objects.
- **followers** (array[string]): Follower (User's ids). Limited to 10 for now. Only support for custom objects.
- **properties** (object): Properties of the record. Key-value pairs.

### Properties Example - Custom Objects
```json
{
  "customer_number": 1424,
  "ticket_name": "Customer not able login",
  "phone_number": "+917000000000",
  "money": {
    "currency": "default",
    "value": 100
  },
  "type_of_ticket": "doubt",
  "section_of_app": {
    "add": ["option_3_internal_key", "option_4_internal_key"],
    "remove": ["option_1_internal_key"]
  },
  "recieved_on": "2024-07-11",
  "my_files": {
    "add": [{"url": "---url_of_file---"}],
    "remove": [{"url": "---url_of_file---"}]
  },
  "my_textbox_list.option_a": "Value 1",
  "my_textbox_list.option_b": "Value 2"
}
```

## Field Type Reference
| Field | Type | Note |
|---|---|---|
| owner | object {add: string[], remove: string[]} | |
| followers | object {add: string[], remove: string[]} | |
| Single Line | string | |
| Multi Line | string | |
| Textbox List | string | Format: {custom_field_key}.{label_key} |
| Number | number | |
| Phone | string | Include country code with +. No 0 prefix. |
| Monetary | object {currency: string, value: number} | Only "default" currency supported |
| Dropdown (Single) | string | Only option keys accepted, not labels |
| Dropdown (Multiple) | object {add: string[], remove: string[]} | Only option keys accepted |
| Radio | string | Only option keys accepted |
| Checkbox | object {add: string[], remove: string[]} | Only option keys accepted |
| Date Picker | string YYYY-MM-DD | ISO 8601 format |
| File Upload | object[] {add: object[], remove: object[]} | URL must be valid |

## Important Notes
- To remove the value of a custom field, pass its value as null
- Fields with multiple values (Owner, Followers, Dropdown Multiple, Checkbox, File) must use add/remove arrays
