> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/courses/import-courses). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Import Courses

**Endpoint:** `POST /courses/courses-exporter/public/import`

Import Courses through public channels

## Request

**Version**

string

required

API Version

Available options

`v3`

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**locationId**stringrequired**userId**string**products**object[]required

```json
{
  "locationId": "string",
  "userId": "string",
  "products": [
    {
      "title": "string",
      "description": "string",
      "imageUrl": "string",
      "categories": [
        {
          "title": "string",
          "visibility": "published",
          "thumbnailUrl": "string",
          "posts": [
            {
              "title": "string",
              "visibility": "published",
              "thumbnailUrl": "string",
              "contentType": "video",
              "description": "string",
              "bucketVideoUrl": "string",
              "postMaterials": [
                {
                  "title": "string",
                  "type": "pdf",
                  "url": "string"
                }
              ]
            }
          ],
          "subCategories": [
            {
              "title": "string",
              "visibility": "published",
              "thumbnailUrl": "string",
              "posts": [
                {
                  "title": "string",
                  "visibility": "published",
                  "thumbnailUrl": "string",
                  "contentType": "video",
                  "description": "string",
                  "bucketVideoUrl": "string",
                  "postMaterials": [
                    {
                      "title": "string",
                      "type": "pdf",
                      "url": "string"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "instructorDetails": {
        "name": "string",
        "description": "string"
      }
    }
  ]
}
```
