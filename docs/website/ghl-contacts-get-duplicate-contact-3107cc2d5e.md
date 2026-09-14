> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-duplicate-contact). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Duplicate Contact

**Endpoint:** `GET /contacts/search/duplicate`

Get Duplicate Contact.<br><br>If `Allow Duplicate Contact` is disabled under Settings, the global unique identifier will be used for searching the contact. If the setting is enabled, first priority for search is `email` and the second priority will be `phone`.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

**number**

string

Phone Number — URL-encoded. E.g. +1423164516 → %2B1423164516

**email**

string

Email — URL-encoded. E.g. [test+abc@gmail.com](mailto:test+abc@gmail.com) → test%2Babc%40gmail.com
