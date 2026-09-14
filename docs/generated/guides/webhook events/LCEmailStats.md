> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/webhook%20events/LCEmailStats.md). Do not edit this generated file directly.

---
tags: [Webhook Events]
---

# LC Email

Called whenever an email is sent, gives the statistics of the said email.

> Available only to Location Level Apps.

#### Schema

```json json_schema
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "LCEmailStats",
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "locationId": {
      "type": "string"
    },
    "companyId": {
      "type": "string"
    },
    "webhookPayload": {
      "type": "object",
      "properties": {
        "event": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "timestamp": {
          "type": "integer"
        },
        "flags": {
          "type": "object",
          "properties": {
            "is-authenticated": {
              "type": "boolean"
            },
            "is-routed": {
              "type": "boolean"
            },
            "is-big": {
              "type": "boolean"
            },
            "is-system-test": {
              "type": "boolean"
            },
            "is-test-mode": {
              "type": "boolean"
            }
          }
        },
        "message": {
          "type": "object",
          "properties": {
            "attachments": {
              "type": "array"
            },
            "headers": {
              "type": "object",
              "properties": {
                "message-id": {
                  "type": "string"
                },
                "from": {
                  "type": "string"
                },
                "to": {
                  "type": "string"
                }
              }
            },
            "size": {
              "type": "integer"
            }
          }
        },
        "log-level": {
          "type": "string"
        },
        "recipient": {
          "type": "string"
        },
        "recipient-domain": {
          "type": "string"
        },
        "tags": {
          "type": "array"
        },
        "recipient-provider": {
          "type": "string"
        },
        "campaigns": {
          "type": "array"
        },
        "delivery-status": {
          "type": "object",
          "properties": {
            "attempt-no": {
              "type": "integer"
            },
            "code": {
              "type": "integer"
            },
            "message": {
              "type": "string"
            },
            "description": {
              "type": "string"
            },
            "session-seconds": {
              "type": "number"
            },
            "enhanced-code": {
              "type": "string"
            },
            "mx-host": {
              "type": "string"
            },
            "utf8": {
              "type": "boolean"
            },
            "i-first-delivery-attempt-seconds": {
              "type": "number"
            }
          }
        },
        "envelope": {
          "type": "object",
          "properties": {
            "sender": {
              "type": "string"
            },
            "targets": {
              "type": "string"
            },
            "transport": {
              "type": "string"
            },
            "sending-ip": {
              "type": "string"
            },
            "i-ip-pool-id": {
              "type": "string"
            },
            "i-ip-pool-name": {
              "type": "string"
            }
          }
        }
      }
    }
  }
}
```

#### Example

```json
{
  "type": "LCEmailStats",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "companyId": "ve9EPM428h8vShlRW1KT",
  "webhookPayload": {
    "event": "delivered",
    "id": "ve9EPM428h8vShlRW1KT",
    "timestamp": 1714032441,
    "flags": {
      "is-authenticated": true,
      "is-routed": false,
      "is-big": false,
      "is-system-test": false,
      "is-test-mode": false
    },
    "message": {
      "attachments": [],
      "headers": {
        "message-id": "<message-id>",
        "from": "Aaditya Chakravarty <dummy@example.com>",
        "to": "test@example.com"
      },
      "size": 1725
    },
    "log-level": "info",
    "recipient": "test@example.com",
    "recipient-domain": "example.com",
    "tags": ["loc_ve9EPM428h8vShlRW1KT", "com_ve9EPM428h8vShlRW1KT", "et_other"],
    "recipient-provider": "Other",
    "campaigns": [],
    "delivery-status": {
      "attempt-no": 1,
      "code": 250,
      "message": "OK",
      "description": "",
      "session-seconds": 0.087,
      "enhanced-code": "",
      "mx-host": "mail.example.com",
      "utf8": true,
      "i-first-delivery-attempt-seconds": 0.047
    },
    "envelope": {
      "sender": "<sender-id>",
      "targets": "test@example.com",
      "transport": "smtp",
      "sending-ip": "127.0.0.1",
      "i-ip-pool-id": "65cc66e77a4d4f63649d394c",
      "i-ip-pool-name": "<pool-name>"
    }
  }
}
```
