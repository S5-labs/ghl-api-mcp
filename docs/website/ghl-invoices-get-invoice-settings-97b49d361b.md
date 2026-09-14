> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-settings). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Invoice Settings

**Endpoint:** `GET /invoices/settings`

Get the invoice settings for the given location

## Request

**Version**

string

required

API Version

Available options

`v3`

**altId**

string

required

Location Id or Agency Id

**altType**

string

required

Available options

`location`

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**altId**stringSub-Account Id**altType**stringAlt TypeAvailable options`location`**termsNote**stringTerms and conditions for invoices**estimatesTermsNote**stringTerms and conditions for estimates**title**stringTitle for invoices**Possible values:** `<= 40 characters`**estimatesTitle**stringTitle for estimates**Possible values:** `<= 40 characters`**invoiceNumberPrefix**stringPrefix for invoice numbers**Possible values:** `<= 10 characters`**estimateNumberPrefix**stringPrefix for estimate numbers**Possible values:** `<= 10 characters`**dueAfterXDays**numberNumber of days after which invoice is due**estimatesExpireAfterXDays**numberNumber of days after which estimate expires**minimumPercentagePartialPayment**numberMinimum percentage for partial payment**customFields**string[]Custom fields array**Possible values:** `<= 3`**customNotification**objectCustom notification settings**businessDetails**objectBusiness details**senderConfiguration**objectSender configuration**productSettings**objectProduct settings**reminderSettings**objectReminder settings**lateFeesConfiguration**objectLate fees configuration**tipsConfiguration**objectTips configuration**paymentMethods**objectPayment methods configuration

```json
{
  "altId": "6578278e879ad2646715ba9c",
  "altType": "location",
  "termsNote": "Payment is due within 30 days.",
  "estimatesTermsNote": "This estimate is valid for 30 days.",
  "title": "INVOICE",
  "estimatesTitle": "ESTIMATE",
  "invoiceNumberPrefix": "INV-",
  "estimateNumberPrefix": "EST-",
  "dueAfterXDays": 30,
  "estimatesExpireAfterXDays": 30,
  "minimumPercentagePartialPayment": 25,
  "customFields": [
    "6578278e879ad2646715baxc",
    "6901e9fb77ac4d701ba0b996"
  ],
  "customNotification": {
    "customerSendInvoice": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamPaymentSuccess": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerPaymentSuccess": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamAutoPaymentSuccess": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerAutoPaymentSuccess": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamPaymentFailure": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerPaymentFailure": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamAutoPaymentFailure": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerAutoPaymentFailure": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerAutoPaymentInfo": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerAutoPaymentAmountChanged": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamAutoPaymentSkip": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamRecurringSendInvoiceFailed": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "customerSendEstimate": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamEstimateAccepted": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    },
    "teamEstimateDeclined": {
      "enabled": true,
      "emailTemplate": "string",
      "smsTemplate": "string",
      "fromName": "Alex",
      "fromEmail": "alex@example.com",
      "emailSubject": "Thank you for purchasing",
      "defaultEmailTemplateId": "dhwjqi2899012990w2u"
    }
  },
  "businessDetails": {
    "logoUrl": "string",
    "name": "string",
    "phoneNo": "string",
    "address": {
      "addressLine1": "string",
      "addressLine2": "string",
      "city": "string",
      "state": "string",
      "countryCode": "AF",
      "postalCode": "string"
    },
    "website": "string",
    "customValues": [
      "string"
    ]
  },
  "senderConfiguration": {
    "fromName": "Alex",
    "fromEmail": "alex@example.com"
  },
  "productSettings": {
    "enableImportProductDescription": true,
    "descriptionOptional": true
  },
  "reminderSettings": {
    "defaultEmailTemplateId": "dhwjqi2899012990w2u",
    "reminders": [
      {
        "enabled": true,
        "emailTemplate": "default",
        "smsTemplate": "default",
        "emailSubject": "Reminder",
        "reminderId": "9333e45f-a27d-4659-90e5-76c5ef06d094",
        "reminderName": "Special Reminder",
        "reminderTime": "before",
        "intervalType": "daily",
        "maxReminders": 3,
        "reminderInvoiceCondition": "invoice_sent",
        "reminderNumber": 10,
        "startTime": "9:00 AM",
        "endTime": "5:00 PM",
        "timezone": "businessTZ"
      }
    ]
  },
  "lateFeesConfiguration": {
    "enable": true,
    "value": 10,
    "type": "fixed",
    "frequency": {
      "intervalCount": 10,
      "interval": "day"
    },
    "grace": {
      "intervalCount": 10,
      "interval": "day"
    },
    "maxLateFees": {
      "type": "fixed",
      "value": "10"
    }
  },
  "tipsConfiguration": {
    "tipsPercentage": [
      5,
      10,
      15
    ],
    "tipsEnabled": true
  },
  "paymentMethods": {
    "stripe": {
      "enableBankDebitOnly": false
    }
  }
}
```
