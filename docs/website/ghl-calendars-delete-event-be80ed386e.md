> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/calendars/delete-event). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Delete Event

**Endpoint:** `DELETE /calendars/events/:eventId`

Delete event by ID

## Request

**Version**

string

required

API Version

Available options

`v3`

**eventId**

string

required

Event Id or Instance id. For recurring appointments send masterEventId to modify original series.

- application/json

- Body
- Example (auto)

### Body**required**

****object

```json
{}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**succeeded**booleanWhether the event was successfully deleted

```json
{
  "succeeded": true
}
```
