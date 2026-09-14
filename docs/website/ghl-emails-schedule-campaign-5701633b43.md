> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/emails/schedule-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Schedule Campaign

**Endpoint:** `POST /emails/locations/:locationId/campaigns/emails/:campaignId/schedule`

Schedule or start an email campaign. The campaign must be in draft, cancelled, or paused status.

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

Location ID

**campaignId**

string

required

Campaign ID

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**scheduleType**stringrequiredHow to schedule the campaignAvailable options`immediate``scheduled``batch``rss``smart_send`**timeZone**stringrequiredIANA timezone**userId**stringrequiredID of the user performing this action**userName**stringName of the user performing this action**emailMeta**objectrequiredEmail subject, sender, and content metadata**recipients**objectrequiredWho receives the email. Must provide either contactIds or filter.**sendDays**string[]Days of the week to allow sending. Used for batch and RSS scheduleTypes.Available options`Mon``Tue``Wed``Thu``Fri``Sat``Sun`**scheduleConfig**objectSchedule configuration for immediate, scheduled, batch, and smart_send types. Required when scheduleType is not rss.**rssConfig**objectRSS feed configuration. Required when scheduleType is rss.**abTestConfig**objectA/B test configuration. Can be combined with any scheduleType except rss.

```json
{
  "scheduleType": "immediate",
  "timeZone": "America/New_York",
  "userId": "507f1f77bcf86cd799439099",
  "userName": "John Doe",
  "emailMeta": {
    "subject": "Our February Newsletter",
    "fromName": "John Doe",
    "fromEmail": "john@example.com"
  },
  "recipients": {
    "type": "contact",
    "contactIds": [
      "contactId1",
      "contactId2"
    ]
  },
  "sendDays": [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
  ],
  "scheduleConfig": {
    "sendAt": "2026-04-01 09:00 AM"
  },
  "rssConfig": {
    "name": "Weekly Digest",
    "rssFeedURL": "https://example.com/rss",
    "repeatAfter": "every_day",
    "repeatAfterTime": "09:00 AM"
  },
  "abTestConfig": {
    "testType": "subjectLine",
    "testDuration": 3600,
    "variationCount": 2,
    "testSize": 30,
    "winningCriteria": "openRate",
    "variations": [
      {
        "subject": "Subject A"
      },
      {
        "subject": "Subject B"
      }
    ]
  }
}
```

application/json

Success

- application/json

- Schema
- Example (auto)

**Schema**

**campaignId**stringrequiredCampaign ID**sourceId**stringnullablerequiredSource ID for fetching campaign statistics**traceId**stringTrace ID of the request

```json
{
  "campaignId": "67f15c2ae99226d5bcccb8f3",
  "sourceId": "B67vyPIAfq3Bnk3FVioE",
  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"
}
```
