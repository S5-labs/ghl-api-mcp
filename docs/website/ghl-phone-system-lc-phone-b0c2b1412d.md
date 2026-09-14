> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# lc-phone

API Service for LC Phone

## 📄️List number pools

Returns number pools for the location. Requires locationId as a query parameter.

## 📄️List available phone numbers

Search Twilio inventory for purchasable phone numbers in a country for the given location.

## 📄️Purchase number for location

Purchase number for location. With `version: v3`, the HTTP 201 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 purchase fields live under `data`: `number`, `locationId`, `id`, and `underLcAccount` (renamed from under_ghl_account).

## 📄️List active numbers

List active numbers. With `version: v3`, the HTTP 200 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 list payload is under `data`; `isUnderGhl` is renamed to `isUnderLc` per AIP naming convention.
