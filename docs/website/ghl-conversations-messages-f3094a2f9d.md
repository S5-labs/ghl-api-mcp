> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/conversations/messages). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Messages

Documentation for Conversations API

## 📄️Export messages by location ID

Export messages for a specific location with cursor-based pagination support.

## 📄️Get message by message id

Get message by message id.

## 📄️Get messages by conversation id

Get messages by conversation id.

## 📄️Send a new message

Post the necessary fields for the API to send a new message.

## 📄️Add an inbound message

Post the necessary fields for the API to add a new inbound message. <br /><br />**Note:** Either `conversationId` or `contactId` is required

## 📄️Add an external outbound call

Post the necessary fields for the API to add a new outbound call.

## 📄️Cancel a scheduled message.

Post the messageId for the API to delete a scheduled message. <br />

## 📄️Upload file attachments

Post the necessary fields for the API to upload files. The files need to be a buffer with the key 'fileAttachment'. <br /><br /> <b>Note:</b> One of conversationId or contactId must be provided. <br /><br /> <b>File Size Limits:</b> <ul><li>Maximum file size: 5 MB</li><li>Maximum files per upload: 5</li></ul> <br /> <b>Allowed file types:</b> <br /><br /> <b>Images:</b> JPG, JPEG, PNG, GIF, SVG, HEIC, AI <br /><br /> <b>Videos:</b> MP4, MPEG, 3GP <br /><br /> <b>Audio:</b> MP3, WAV, WAVE, AIFF, AIF, AIFC, GSM, ULAW, OGG, AAC, M4A, AMR <br /><br /> <b>Documents:</b> PDF, DOC, DOCX, TXT, CSV, XLS, XLSX, PPT, PPTX, ODT <br /><br /> <b>Archives:</b> ZIP, RAR <br /><br /> <b>Other:</b> VCF, VCARD (contact files), ICS (calendar files) <br /><br /> The API will return an object with the URLs

## 📄️Update message status

Post the necessary fields for the API to update message status.

## 📄️Add message attachments

Set attachments on an existing message (replaces existing). Maximum 5 URLs. Supported for Custom Call message type.

## 📄️Get Recording by Message ID

Get the recording for a message by passing the message id

## 📄️Get transcription by Message ID

Get the recording transcription for a message by passing the message id

## 📄️Download transcription by Message ID

Download the recording transcription for a message by passing the message id
