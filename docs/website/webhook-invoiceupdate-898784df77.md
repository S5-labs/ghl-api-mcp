> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/InvoiceUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Invoice

Called whenever an invoice is updated

#### Schema

```json
{
  "type": "object",
  "properties": {
    "_id": {
      "type": "string"
    },
    "status": {
      "type": "string"
    },
    "liveMode": {
      "type": "boolean"
    },
    "amountPaid": {
      "type": "number"
    },
    "altId": {
      "type": "string"
    },
    "altType": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "businessDetails": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "address": {
          "type": "string"
        },
        "phoneNo": {
          "type": "string"
        },
        "website": {
          "type": "string"
        },
        "logoUrl": {
          "type": "string"
        },
        "customValues": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    "invoiceNumber": {
      "type": "string"
    },
    "currency": {
      "type": "string"
    },
    "contactDetails": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "phoneNo": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "customFields": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string"
        },
        "address": {
          "type": "object",
          "properties": {
            "countryCode": {
              "type": "string"
            },
            "addressLine1": {
              "type": "string"
            },
            "addressLine2": {
              "type": "string"
            },
            "city": {
              "type": "string"
            },
            "state": {
              "type": "string"
            },
            "postalCode": {
              "type": "string"
            }
          }
        },
        "additionalEmails": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "email": {
                "type": "string"
              }
            }
          }
        },
        "companyName": {
          "type": "string"
        }
      }
    },
    "issueDate": {
      "type": "string"
    },
    "dueDate": {
      "type": "string"
    },
    "discount": {
      "type": "object",
      "properties": {
        "type": {
          "type": "string"
        },
        "value": {
          "type": "number"
        }
      }
    },
    "invoiceItems": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "taxes": {
            "type": "array"
          },
          "_id": {
            "type": "string"
          },
          "productId": {
            "type": "string"
          },
          "priceId": {
            "type": "string"
          },
          "currency": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "qty": {
            "type": "number"
          },
          "amount": {
            "type": "number"
          }
        }
      }
    },
    "total": {
      "type": "number"
    },
    "title": {
      "type": "string"
    },
    "amountDue": {
      "type": "number"
    },
    "createdAt": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    },
    "totalSummary": {
      "type": "object",
      "properties": {
        "subTotal": {
          "type": "number"
        },
        "discount": {
          "type": "number"
        }
      }
    }
  }
}
```

#### Example

```json
{
  "_id": "6578278e879ad2646715ba9c",
  "status": "draft",
  "liveMode": false,
  "amountPaid": 0,
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "name": "New Invoice",
  "businessDetails": {
    "name": "ABC Corp.",
    "address": "9931 Beechwood, TX",
    "phoneNo": "+1-214-559-6993",
    "website": "wwww.example.com",
    "logoUrl": "https://example.com/logo.png",
    "customValues": ["string"]
  },
  "invoiceNumber": "19",
  "currency": "USD",
  "contactDetails": {
    "id": "6578278e879ad2646715ba9c",
    "phoneNo": "+1-214-559-6993",
    "email": "alex@example.com",
    "customFields": ["string"],
    "name": "Alex",
    "address": {
      "countryCode": "US",
      "addressLine1": "9931 Beechwood",
      "addressLine2": "Beechwood",
      "city": "St. Houston",
      "state": "TX",
      "postalCode": "559-6993"
    },
    "additionalEmails": [
      {
        "email": "alex@example.com"
      }
    ],
    "companyName": "ABC Corp."
  },
  "issueDate": "2023-01-01",
  "dueDate": "2023-01-01",
  "discount": {
    "type": "percentage",
    "value": 10
  },
  "invoiceItems": [
    {
      "taxes": [],
      "_id": "c6tZZU0rJBf30ZXx9Gli",
      "productId": "c6tZZU0rJBf30ZXx9Gli",
      "priceId": "c6tZZU0rJBf30ZXx9Gli",
      "currency": "USD",
      "name": "Macbook Pro",
      "qty": 1,
      "amount": 999
    }
  ],
  "total": 999,
  "title": "INVOICE",
  "amountDue": 999,
  "createdAt": "2023-12-12T09:27:42.355Z",
  "updatedAt": "2023-12-12T09:27:42.355Z",
  "totalSummary": {
    "subTotal": 999,
    "discount": 0
  }
}
```
