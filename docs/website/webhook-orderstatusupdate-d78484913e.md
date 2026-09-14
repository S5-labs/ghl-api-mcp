> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/OrderStatusUpdate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Order

Called whenever an order's status field updated

#### Schema

```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "altId": {
      "type": "string"
    },
    "altType": {
      "type": "string"
    },
    "_id": {
      "type": "string"
    },
    "contactId": {
      "type": "string"
    },
    "contactSnapshot": {
      "type": "object",
      "properties": {
        "locationId": {
          "type": "string"
        },
        "id": {
          "type": "string"
        },
        "address1": {
          "type": "string"
        },
        "city": {
          "type": "string"
        },
        "companyName": {
          "type": "string"
        },
        "country": {
          "type": "string"
        },
        "source": {
          "type": "string"
        },
        "dateAdded": {
          "type": "string"
        },
        "dateOfBirth": {
          "type": "string"
        },
        "dnd": {
          "type": "boolean"
        },
        "email": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "firstName": {
          "type": "string"
        },
        "lastName": {
          "type": "string"
        },
        "phone": {
          "type": "string"
        },
        "postalCode": {
          "type": "string"
        },
        "state": {
          "type": "string"
        },
        "tags": {
          "type": "array"
        },
        "website": {
          "type": "string"
        },
        "attachments": {
          "type": "array"
        },
        "assignedTo": {
          "type": "string"
        }
      }
    },
    "status": {
      "type": "string"
    },
    "fulfillmentStatus": {
      "type": "string"
    },
    "currency": {
      "type": "string"
    },
    "amount": {
      "type": "number"
    },
    "liveMode": {
      "type": "boolean"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "qty": {
            "type": "number"
          },
          "product": {
            "type": "object"
          },
          "price": {
            "type": "object"
          }
        }
      }
    },
    "amountSummary": {
      "type": "object",
      "properties": {
        "discount": {
          "type": "number"
        },
        "shipping": {
          "type": "number"
        },
        "subtotal": {
          "type": "number"
        },
        "tax": {
          "type": "number"
        }
      }
    },
    "taxSummary": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string"
          },
          "amount": {
            "type": "number"
          },
          "calculation": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "rate": {
            "type": "number"
          }
        }
      }
    },
    "source": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        },
        "subType": {
          "type": "string"
        },
        "meta": {
          "type": "object"
        }
      }
    },
    "createdAt": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "type": "OrderStatusUpdate",
  "locationId": "Z4Bxl8J4SaPEPLq9IQ8g",
  "_id": "660ed43bfdf9fc05a0de7a40",
  "altId": "Z4Bxl8J4SaPEPLq9IQ8g",
  "altType": "location",
  "status": "completed",
  "taxSummary": [
    {
      "_id": "63770f5cecf298787c752075",
      "name": "10%",
      "calculation": "exclusive",
      "rate": 10,
      "amount": 12.1
    }
  ],
  "fulfillmentStatus": "unfulfilled",
  "contactId": "ff2JstbQJfRuofXzeT0M",
  "currency": "USD",
  "amount": 150.1,
  "liveMode": false,
  "amountSummary": {
    "subtotal": 138,
    "discount": 0,
    "tax": 12.1,
    "shipping": 0
  },
  "source": {
    "type": "website",
    "subType": "store",
    "id": "nohc1pPZJlpZTpxJfLCp",
    "name": "Ecom Store",
    "meta": {
      "stepId": "dca58f2c-943b-4a92-b591-5d79f37df0a1",
      "pageId": "IoJJMciJZIRBSzGZcjl4",
      "domain": "test.shareef.me",
      "pageUrl": "/checkout"
    }
  },
  "createdAt": "2024-04-04T16:24:27.036Z",
  "updatedAt": "2024-04-04T16:24:31.297Z",
  "contactSnapshot": {
    "id": "ff2JstbQJfRuofXzeT0M",
    "locationId": "Z4Bxl8J4SaPEPLq9IQ8g",
    "firstName": "Maxwell",
    "lastName": "Schmidt",
    "email": "limof@mailinator.com",
    "phone": "+2389372075506",
    "dnd": false,
    "source": "Ecom Store",
    "address1": "Velit consequuntur ",
    "city": "Eius eveniet provid",
    "state": "Ea provident volupt",
    "postalCode": "61131",
    "tags": [],
    "country": "CV",
    "dateAdded": "2024-04-04T16:24:21.375Z"
  },
  "items": [
    {
      "name": "Men's classic tee - XL / Charcoal",
      "qty": 1,
      "product": {
        "_id": "660ed1ff95e1dc88d5b0d346",
        "name": "Men's classic tee",
        "availableInStore": true,
        "taxes": [],
        "variants": [
          {
            "id": "6xcxyf3ufjm",
            "name": "Size",
            "options": [
              {
                "id": "pq72pwv2dd",
                "name": "S"
              },
              {
                "id": "oxyrtisnrch",
                "name": "M"
              },
              {
                "id": "e90dmjc49m7",
                "name": "L"
              },
              {
                "id": "100p40ngait",
                "name": "XL"
              },
              {
                "id": "1g0zjf4s57l",
                "name": "2XL"
              },
              {
                "id": "x3qgphbudz",
                "name": "3XL"
              },
              {
                "id": "4spdojmrhlh",
                "name": "4XL"
              }
            ]
          },
          {
            "id": "06to66ownvc5",
            "name": "Color",
            "options": [
              {
                "id": "7uhq7ky7bge",
                "name": "Maroon"
              },
              {
                "id": "qeac76hvr1c",
                "name": "Black"
              },
              {
                "id": "yhgmvthkf49",
                "name": "Navy"
              },
              {
                "id": "plg4elfx0sq",
                "name": "Red"
              },
              {
                "id": "7etdl015ljk",
                "name": "Royal"
              },
              {
                "id": "yj1jw5ga5bk",
                "name": "Charcoal"
              }
            ]
          }
        ]
      },
      "price": {
        "_id": "660ed20095e1dcd37bb0d392",
        "name": "XL / Charcoal",
        "type": "one_time",
        "currency": "USD",
        "amount": 17,
        "variantOptionIds": ["100p40ngait", "yj1jw5ga5bk"]
      }
    },
    {
      "name": "Tshirt - Green / S",
      "qty": 1,
      "product": {
        "_id": "64f84dea1e2c5ae21f0714dd",
        "name": "Tshirt",
        "description": "<p>Here is the <span style=\"color: rgb(206, 145, 120); color: rgb(206, 145, 120)\">onDeleteMedia</span></p>",
        "availableInStore": true,
        "taxes": [
          {
            "_id": "63770f5cecf298787c752075",
            "calculation": "exclusive",
            "deleted": false,
            "altId": "Z4Bxl8J4SaPEPLq9IQ8g",
            "altType": "location",
            "name": "10%",
            "rate": 10,
            "createdAt": "2022-11-18T04:51:40.067Z",
            "updatedAt": "2022-11-18T04:51:40.067Z",
            "__v": 0
          }
        ],
        "variants": [
          {
            "id": "mhpty6azkx",
            "name": "Color",
            "options": [
              {
                "id": "j1kri8rtkz",
                "name": "Red"
              },
              {
                "id": "qxd87i00pr",
                "name": "Green"
              }
            ]
          },
          {
            "id": "14ykjkzqfe",
            "name": "Size",
            "options": [
              {
                "id": "nk794wey5a",
                "name": "S"
              }
            ]
          }
        ]
      },
      "price": {
        "_id": "64f84dec1e2c5ae21f0714e1",
        "name": "Green / S",
        "type": "one_time",
        "currency": "USD",
        "amount": 121,
        "variantOptionIds": ["qxd87i00pr", "nk794wey5a"]
      }
    }
  ]
}
```
