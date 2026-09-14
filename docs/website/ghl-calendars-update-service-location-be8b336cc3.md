> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/update-service-location). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update Service Location

**Endpoint:** `PUT /calendars/services/locations/:serviceLocationId`

Update an existing service location

## Request

**Version**

string

required

API Version

Available options

`v3`

**serviceLocationId**

string

required

Unique Service Location ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**name**stringLocation name**slug**stringUpdated URL-friendly slug identifier**phone**stringUpdated contact phone number**address**stringUse a full street address when locationType is offline. Use a user-facing label when locationType is ask_booker.**coverImage**stringUpdated URL of the cover image**locationType**stringLocation typeAvailable options`offline``ask_booker`

```json
{
  "name": "California Location",
  "slug": "midtown-wellness-therapy-studio",
  "phone": "+1-212-555-0199",
  "address": "789 5th Avenue, Floor 5, New York, NY 10022",
  "coverImage": "https://storage.example.com/locations/midtown-wellness-studio/cover-v2.jpg",
  "locationType": "offline"
}
```

application/json

Service location updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**id**stringrequiredService Location ID**locationId**stringrequiredLocation ID**name**stringrequiredLocation name**slug**stringrequiredUnique URL-friendly identifier for the service location**isActive**booleanWhether location is active**Default value:**`true`**isPrivate**booleanWhether location is private (not shown publicly)**Default value:**`false`**coverImage**stringURL of the cover image displayed for this location**locationType**stringLocation typeAvailable options`offline``ask_booker`**address**stringUse a full street address when locationType is offline. Use a user-facing label when locationType is ask_booker.**phone**stringContact phone number for the service location

```json
{
  "id": "65e5f6dfacf123513228d384",
  "locationId": "0007BWpSzSwfiuSl0tR2",
  "name": "Downtown Wellness Center",
  "slug": "downtown-wellness-center",
  "isActive": true,
  "isPrivate": false,
  "coverImage": "https://storage.example.com/locations/downtown-wellness-center/cover.jpg",
  "locationType": "offline",
  "address": "456 Market Street, Suite 200, San Francisco, CA 94105",
  "phone": "+1-415-555-0198"
}
```
