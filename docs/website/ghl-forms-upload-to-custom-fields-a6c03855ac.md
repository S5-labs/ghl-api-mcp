> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/forms/upload-to-custom-fields). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Upload files to custom fields

**Endpoint:** `POST /forms/upload-custom-files`

Post the necessary fields for the API to upload files. The files need to be a buffer with the key "< custom_field_id >_< file_id >". <br> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br>File size is limited to 50 MB.<br><br> The allowed file types are: <br>

- PDF
- DOCX
- DOC
- JPG
- JPEG
- PNG
- GIF
- CSV
- XLSX
- XLS
- MP4
- MPEG
- ZIP
- RAR
- TXT
- SVG

<br>

<br>

## Request

**Version**

string

required

API Version

Available options

`v3`

**contactId**

string

required

Contact ID to upload the file to.

**locationId**

string

required

Location ID of the contact.

- multipart/form-data

- Body

### Body**required**

Successful response
