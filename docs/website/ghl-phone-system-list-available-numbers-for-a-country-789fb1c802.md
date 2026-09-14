> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# List available phone numbers

**Endpoint:** `GET /phone-system/numbers/location/:locationId/available`

Search Twilio inventory for purchasable phone numbers in a country for the given location.

## Request

**locationId**

string

required

Location ID as string

**firstPart**

string

required

firstPart is the beginning of the phone number

**lastPart**

string

required

lastPart is the ending of the phone number

**anywhere**

string

required

anywhere are the numbers required anywhere in phone number

**numberTypes**

string[]

required

comma separated types of phone number required

**smsEnabled**

boolean

required

requested phone numbers should have sms functionality

**mmsEnabled**

boolean

required

requested phone numbers should have mms functionality

**voiceEnabled**

boolean

required

requested phone numbers should have voice functionality

**countryCode**

string

required

country for which the phone numbers are being requested

Available phone numbers matching the search criteria.
