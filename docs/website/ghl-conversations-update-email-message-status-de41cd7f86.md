> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/update-email-message-status). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Update email message status

**Endpoint:** `PUT /conversations/messages/email/:emailMessageId/status`

Update delivery events, per-recipient statuses, and the overall message status for an email sent via a custom conversation provider.

### Authorization

- Requires the `conversations/message.write` OAuth scope.
- The calling OAuth app must own the conversation provider that originally sent the email.
- Attempts to update emails sent via LC Email or Mailgun will return `403 Forbidden`.

### Updatable Fields

All request body fields are optional. Pass only what you need to update.

**`events`** — Aggregate delivery event counters (integers). Counters are merged into the existing values (not replaced). Setting a counter to `0` is treated as no-op and will **not** reset the stored value.

**`recipients`** — Per-recipient delivery statuses. Each entry maps a recipient email address to a `MessageStatus` value. Use `failReason` to capture bounce or rejection details when the status is `failed`.

**`status`** — The overall message status. Accepts any `MessageStatus` enum value.

### Event Inference

The API automatically infers related events to maintain data consistency:

- **`clicked`, `complained`, `unsubscribed`, or `replied`** → implies `opened` (set to 1 if not already provided and open tracking is enabled) and `delivered` (set to 1).
- **`opened`** → implies `delivered` (set to 1 if not provided).
- **`delivered`, `permanent_fail`, or `temporary_fail`** → implies `accepted` (set to 1 if not provided).

### Timestamps

The API automatically records server-side timestamps on first occurrence for `delivered`, `opened`, and `clicked` events. Subsequent updates to these counters do not overwrite the original timestamp.

## Request

**Version**

string

required

API Version

Available options

`v3`

**emailMessageId**

string

required

Email Message Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**events**objectAggregate delivery event counters. Counters are merged into existing values. The API automatically infers related events (e.g., reporting `clicked` will also set `opened` and `delivered` if not already present). See the endpoint description for the full inference rules.**recipients**object[]Per-recipient delivery statuses. Each entry maps a recipient email address to a delivery status. Entries are upserted — if a recipient already has a status, it will be overwritten with the new value.**status**stringrequiredThe overall status of the email message. Required on every request. For emails with multiple recipients, consider using the `recipients` array for granular tracking and this field for the aggregate status.Available options`pending``scheduled``sent``delivered``read``undelivered``connected``failed``opened``clicked`

```json
{
  "events": {
    "delivered": 1,
    "opened": 1
  },
  "recipients": [
    {
      "emailId": "john@example.com",
      "status": "delivered"
    }
  ],
  "status": "delivered"
}
```

application/json

Email message status updated successfully

- application/json

- Schema
- Example (auto)

**Schema**

**success**booleanrequiredWhether the status update was persisted successfully.**message**stringrequiredHuman-readable result message.

```json
{
  "success": true,
  "message": "Updated email message successfully"
}
```
