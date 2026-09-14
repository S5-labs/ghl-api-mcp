> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/AppointmentCreate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Appointment

Called whenever an appointment is created

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "appointment": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "address": {
          "type": "string"
        },
        "title": {
          "type": "string"
        },
        "calendarId": {
          "type": "string"
        },
        "contactId": {
          "type": "string"
        },
        "groupId": {
          "type": "string"
        },
        "appointmentStatus": {
          "type": "string"
        },
        "assignedUserId": {
          "type": "string"
        },
        "users": {
          "type": "array"
        },
        "notes": {
          "type": "string"
        },
        "source": {
          "type": "string"
        },
        "startTime": {
          "type": "string"
        },
        "endTime": {
          "type": "string"
        },
        "dateAdded": {
          "type": "string"
        },
        "dateUpdated": {
          "type": "string"
        }
      }
    }
  }
}
```

#### Example

```json
{
  "type": "AppointmentCreate",
  "locationId": "0007BWpSzSwfiuSl0tR2",
  "appointment": {
    "id": "0007BWpSzSwfiuSl0tR2",
    "address": "https://example.com/meeting",
    "title": "Appointment with CRM Dev team",
    "calendarId": "BqTwX8QFwXzpegMve9EQ",
    "contactId": "9NkT25Vor1v4aQatFsv2",
    "groupId": "9NkT25Vor1v4aQatFsv2",
    "appointmentStatus": "confirmed",
    "assignedUserId": "YlWd2wuCAZQzh2cH1fVZ",
    "users": ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],
    "notes": "Some dummy note",
    "source": "booking_widget",
    "startTime": "2023-09-25T16:00:00+05:30",
    "endTime": "2023-09-25T16:00:00+05:30",
    "dateAdded": "2023-09-25T16:00:00+05:30",
    "dateUpdated": "2023-09-25T16:00:00+05:30"
  }
}
```
