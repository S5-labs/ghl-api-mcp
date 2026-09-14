> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/webhook/ProductCreate). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Product

Called whenever a product is created

#### Schema

```json
{
  "type": "object",
  "properties": {
    "_id": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "variants": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }
          }
        }
      }
    },
    "medias": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "title": {
            "type": "string"
          },
          "url": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "isFeatured": {
            "type": "boolean"
          }
        }
      }
    },
    "locationId": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "productType": {
      "type": "string"
    },
    "availableInStore": {
      "type": "boolean"
    },
    "userId": {
      "type": "string"
    },
    "createdAt": {
      "type": "string"
    },
    "updatedAt": {
      "type": "string"
    },
    "statementDescriptor": {
      "type": "string"
    },
    "image": {
      "type": "string"
    }
  }
}
```

#### Example

```json
{
  "_id": "655b33a82209e60b6adb87a5",
  "description": "This is a really awesome product",
  "variants": [
    {
      "id": "38s63qmxfr4",
      "name": "Size",
      "options": [
        {
          "id": "h4z7u0im2q8",
          "name": "XL"
        }
      ]
    }
  ],
  "medias": [
    {
      "id": "fzrgusiuu0m",
      "title": "1dd7dcd0-e71d-4cf7-a06b-6d47723d6a29.png",
      "url": "https://storage.googleapis.com/crm-test/3SwdhCsvxI8Au3KsPJt6/media/sample.png",
      "type": "image",
      "isFeatured": true
    }
  ],
  "locationId": "3SwdhCsvxI8Au3KsPJt6",
  "name": "Awesome Product",
  "productType": "PHYSICAL",
  "availableInStore": true,
  "userId": "6YAtzfzpmHAdj0e8GkKp",
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "statementDescriptor": "abcde",
  "image": "https://storage.googleapis.com/crm-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png"
}
```
