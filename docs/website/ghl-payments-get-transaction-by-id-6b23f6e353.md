> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/payments/get-transaction-by-id). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Transaction by ID

**Endpoint:** `GET /payments/transactions/:transactionId`

The "Get Transaction by ID" API allows to retrieve information for a specific transaction using its unique identifier. Use this endpoint to fetch details for a single transaction based on the provided transaction ID.

## Request

**Version**

string

required

API Version

Available options

`v3`

**transactionId**

string

required

ID of the transaction that needs to be returned

**locationId**

string

LocationId is the id of the sub-account.

**altId**

string

required

AltId is the unique identifier e.g: location id.

**altType**

string

required

AltType is the type of identifier.

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredThe unique identifier for the transaction.**altType**stringrequiredAltType is the type of identifier.**altId**stringrequiredAltId is the unique identifier eg: location id.**contactId**stringContact id corresponding to the transaction.**contactSnapshot**objectContact details of the transaction.**currency**stringCurrency in which transaction was made.**amount**numberTransaction value.**status**objectTransaction status.**liveMode**booleanTransaction is in live / test mode.**createdAt**string<date-time>requiredThe creation timestamp of the transaction.**updatedAt**string<date-time>requiredThe last update timestamp of the transaction.**entityType**stringEntity type of transaction (eg: order).**entityId**stringEntity id for the transaction. e.g: order id**entitySource**objectEntity source details for the transaction.**chargeId**stringCharge id for transaction.**chargeSnapshot**objectCharge snapshot of transaction.**invoiceId**stringInvoice id for the transaction.**subscriptionId**stringSubscription id for transaction.**paymentProvider**objectPayment provider details of the transaction.**ipAddress**stringIp address from where transaction was initiated.**meta**objectMeta details of the transaction.**markAsTest**booleanIs test transaction.**isParent**booleanIs parent transaction.**amountRefunded**numberTransaction amount refunded.**receiptId**stringReceipt id for transaction.**qboSynced**booleanIs transaction qbo synced.**qboResponse**objectQbo details of the transaction.**traceId**stringTrace id of the transaction.**mergedFromContactId**stringID of the contact that was merged from.**createdBy**stringUser ID who created the transaction.

```json
{
  "_id": "61dd0feac077f72010f78804",
  "altType": "location",
  "altId": "3SwdhCu3svxI8AKsPJt6",
  "contactId": "XPLSw2SVagl12LMDeTmQ",
  "contactSnapshot": "{ last_name: \"Mcclain\", type: \"lead\", first_name_lower_case: \"rogan\", email: \"anish+11@gohighlevel.com\", last_name_lower_case: \"mcclain\", location_id: \"o6241QsiRwUIJHyjuhos\", company_name: \"Jordan and Cox Trading\"}",
  "currency": "USD",
  "amount": "100",
  "status": "succeeded",
  "liveMode": "false",
  "createdAt": "2023-11-20T10:23:36.515Z",
  "updatedAt": "2024-01-23T09:57:04.846Z",
  "entityType": "order",
  "entityId": "61dd0fe9c077f73e67f78803",
  "entitySource": "{ type: \"funnel\", id: \"BDBMEghdIUaqMPEsK349\", subType: \"two_step_order_form\", name: \"new funnel\" }",
  "chargeId": "in_1KGcXDCScnf89tZohCsmImwE",
  "chargeSnapshot": "{ id: \"in_1KGcXDCScnf89tZohCsmImwE\", object: \"invoice\", account_country: \"US\",  account_name:  \"GHL-Testing\" }",
  "invoiceId": "in_1KGcXDCScnf89tZohCsmImwE",
  "subscriptionId": "sub_1KGcXDCScnf89tZoVkoEMCEL",
  "paymentProvider": "{ type: \"stripe\", connectedAccount: { _id: \"612ca676b484b241fef9d962\", accountId: \"acct_1Ihw53CScnf89tZo\" } }",
  "ipAddress": "107.178.194.224",
  "meta": "{ stepId: \"af7c731e-e36f-4152-bd1a-3f69a31d6d6d\", pageId: \"A8ltotc2jZxurJba4e3Y\", pageUrl: \"/v2/preview/A8ltotc2jZxurJba4e3Y\" }",
  "markAsTest": "false",
  "isParent": "false",
  "amountRefunded": "10",
  "receiptId": "6492fbea489bc07892c6defb",
  "qboSynced": "false",
  "qboResponse": "{ domain: \"QBO\", sparse: false, Id: \"180\", SyncToken: \"0\", TotalAmt: 25 }",
  "traceId": "d3b16a92-a8ed-4e6b-8467-844750f78ed5",
  "mergedFromContactId": "XPLSw2SVagl12LMDeTmQ",
  "createdBy": "user123"
}
```
