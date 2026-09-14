> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/forms/forms). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Forms

Documentation for forms API

## 📄️Get Forms Submissions

Get Forms Submissions

## 📄️Upload files to custom fields

Post the necessary fields for the API to upload files. The files need to be a buffer with the key '< custom_field_id >_< file_id >'. <br /> Here custom field id is the ID of your custom field and file id is a randomly generated id (or uuid) <br /> There is support for multiple file uploads as well. Have multiple fields in the format mentioned.<br />File size is limited to 50 MB.<br /><br /> The allowed file types are: <br/> <ul><li>PDF</li><li>DOCX</li><li>DOC</li><li>JPG</li><li>JPEG</li><li>PNG</li><li>GIF</li><li>CSV</li><li>XLSX</li><li>XLS</li><li>MP4</li><li>MPEG</li><li>ZIP</li><li>RAR</li><li>TXT</li><li>SVG</li></ul> <br /><br /> The API will return the updated contact object.

## 📄️Get Forms

Get Forms
