> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/create-commission). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Create commission

**Endpoint:** `POST /affiliate-manager/:locationId/commission`

Create a manual commission for a customer.

## Request

**Version**

string

required

API Version

Available options

`v3`

**locationId**

string

required

Location Id

application/json

- application/json

- Body
- Example (auto)

### Body**required**

**affiliateId**stringrequiredAffiliate Id**campaignId**stringrequiredCampaign Id**customerId**stringrequiredCustomer Id**amount**numberrequiredAmount. Must not be negative.**Possible values:** `>= 0`**currency**stringrequiredISO 4217 currency codeAvailable options`USD``CAD``EUR``AED``AFN``ALL``AMD``ARS``AUD``AZN``BAM``BBD`**description**stringDescription**eventDate**string<date-time>Event Date**eventId**stringEvent Id

```json
{
  "affiliateId": "6385d230f6d19db03eef6fb2",
  "campaignId": "6385d230f6d19db03eef6fb3",
  "customerId": "6385d230f6d19db03eef6fb4",
  "amount": 100,
  "currency": "USD",
  "description": "Manual commission",
  "eventDate": "2023-08-02T00:00:00.000Z",
  "eventId": "manual-event-123"
}
```

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredCommission id**locationId**stringrequiredLocation id the commission belongs to**campaignId**stringrequiredCampaign id**affiliateId**stringrequiredAffiliate id**customerId**stringrequiredCustomer id**transactionId**stringrequiredTransaction id. Generated for manual commissions, which have no upstream transaction**payoutId**stringPayout the commission was added to**plan**stringProduct name the commission was earned on**productId**stringrequiredProduct id the commission was earned on. Always "manual" for a manually created commission**qty**numberrequiredQuantity**amount**numberrequiredBase amount the commission was calculated on**unitDiscount**numberUnit discount applied before calculating the commission**commission**numberConfigured commission percentage or flat value**commissionType**stringCommission type**commissionAmount**numberCalculated commission amount**currency**stringrequiredCurrency**status**stringCommission StatusAvailable options`pending``approved``paid``denied`**payoutAt**stringMonth the commission is paid out in**dueAt**stringDue date**liveMode**booleanWhether the commission is in live mode**isTrial**booleanWhether the commission is a trial commission**tier**stringrequiredCommission tierAvailable options`first``second``third``fourth``fifth``sixth``seventh`**creationSource**stringrequiredHow the commission was createdAvailable options`order``invoice``manual``external-payment``lead-commission``first-promoter`**eventId**stringEvent id supplied on the request**deleted**booleanrequiredWhether the commission is deleted**createdBy**objectCreated by audit metadata**lastUpdatedBy**objectLast updated by audit metadata**createdAt**stringrequiredCreated at timestamp**updatedAt**stringrequiredUpdated at timestamp

```json
{
  "_id": "6385d230f6d19db03eef6fb2",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "campaignId": "6385d230f6d19db03eef6fb3",
  "affiliateId": "6385d230f6d19db03eef6fb2",
  "customerId": "6385d230f6d19db03eef6fb4",
  "transactionId": "6385d230f6d19db03eef6fb5",
  "payoutId": "6385d230f6d19db03eef6fb6",
  "plan": "Manual Commission",
  "productId": "manual",
  "qty": 1,
  "amount": 100,
  "unitDiscount": 0,
  "commission": 25,
  "commissionType": "percentage",
  "commissionAmount": 25,
  "currency": "USD",
  "status": "approved",
  "payoutAt": "2024-06-01T00:00:00.000Z",
  "dueAt": "2024-06-30T00:00:00.000Z",
  "liveMode": true,
  "isTrial": false,
  "tier": "first",
  "creationSource": "manual",
  "eventId": "manual-event-123",
  "deleted": false,
  "createdBy": {
    "source": "INTEGRATION",
    "channel": "OAUTH",
    "sourceId": "6385d230f6d19db03eef6fb7",
    "sourceName": "Marketplace App"
  },
  "lastUpdatedBy": {
    "source": "INTEGRATION",
    "channel": "OAUTH",
    "sourceId": "6385d230f6d19db03eef6fb7",
    "sourceName": "Marketplace App"
  },
  "createdAt": "2024-06-16T00:00:00.000Z",
  "updatedAt": "2024-06-16T00:00:00.000Z"
}
```
