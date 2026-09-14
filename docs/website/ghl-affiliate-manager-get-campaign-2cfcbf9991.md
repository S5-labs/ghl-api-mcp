> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/get-campaign). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Get Campaign

**Endpoint:** `GET /affiliate-manager/:locationId/campaigns/:campaignId`

Retrieve a single affiliate campaign by id for a location.

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

**campaignId**

string

required

Campaign Id

application/json

Successful response

- application/json

- Schema
- Example (auto)

**Schema**

**_id**stringrequiredCampaign id**locationId**stringrequiredLocation id the campaign belongs to**name**stringrequiredCampaign name**description**stringCampaign description**trackType**stringWhat the campaign tracksAvailable options`forms``surveys``calenders``funnels``websites``store``external_source``community`**subTrackType**stringSub track typeAvailable options`lead``product``donation`**liveMode**booleanrequiredWhether the campaign is live**currency**stringCampaign currency**payoutFrequency**stringHow often affiliates are paid outAvailable options`PAY_7``PAY_15``PAY_30``PAY_45``PAY_60``PAY_90`**cookieLife**numberrequiredReferral cookie lifetime in days**commissionType**stringFirst tier commission typeAvailable options`flat``percentage`**commission**numberFirst tier commission value**commissionTier**numberNumber of commission tiers**leadCommissionTier**numberNumber of lead commission tiers**isGlobalCommission**booleanWhether one commission applies to every product on the campaign**secondTierCommissionType**stringSecond tier commission typeAvailable options`flat``percentage`**secondTierCommission**numberSecond tier commission value**calculateSetupFee**booleanWhether setup fees count towards commission**referralPermalink**stringReferral link slug**referralRealLink**stringFull referral link**domain**stringDomain the referral link points at**stepId**stringFunnel or page step id being tracked**subAfLink**stringSub affiliate signup link**enableSubAffiliateLink**booleanWhether sub affiliate signup is enabled**enableAutoEnrollSubAffiliate**booleanWhether sub affiliates are auto enrolled**createdAt**stringCampaign creation timestamp**updatedAt**stringCampaign update timestamp**commissionV2**object[]Per-tier commission configuration. This is what the commission engine applies; the flat commissionType and commission fields are the legacy fallback used only when this is empty.**leadCommissionV2**object[]Per-tier lead commission configuration, applied to lead-tracking campaigns**products**object[]Products and prices attached to the campaign. For commission calculation use commissionV2[].productBasedCommission, which is typed and authoritative.

```json
{
  "_id": "6385d230f6d19db03eef6fb2",
  "locationId": "ve9EPM428h8vShlRW1KT",
  "name": "Summer launch",
  "description": "Affiliate campaign for the summer launch",
  "trackType": "funnels",
  "subTrackType": "product",
  "liveMode": true,
  "currency": "USD",
  "payoutFrequency": "PAY_30",
  "cookieLife": 30,
  "commissionType": "percentage",
  "commission": 10,
  "commissionTier": 1,
  "leadCommissionTier": 1,
  "isGlobalCommission": true,
  "secondTierCommissionType": "percentage",
  "secondTierCommission": 5,
  "calculateSetupFee": false,
  "referralPermalink": "summer-launch",
  "referralRealLink": "https://example.com/summer-launch",
  "domain": "example.com",
  "stepId": "6385d230f6d19db03eef6fb3",
  "subAfLink": "https://example.com/sub-affiliate-signup",
  "enableSubAffiliateLink": false,
  "enableAutoEnrollSubAffiliate": true,
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-02T00:00:00.000Z",
  "commissionV2": [
    {
      "tier": 1,
      "defaultCommission": {
        "commissionType": "percentage",
        "commission": 10
      },
      "productBasedCommission": [
        {
          "productId": "6385d230f6d19db03eef6fb9",
          "productName": "Starter Course",
          "priceId": "price_1MoBy5AbCdEfGhIj",
          "commissionType": "flat",
          "commission": 25
        }
      ],
      "commissionLength": {
        "lengthType": "by-count",
        "length": 3
      },
      "variableCommission": {
        "enabled": "yes",
        "count": 2,
        "commissionType": "flat",
        "commission": 5
      }
    }
  ],
  "leadCommissionV2": [
    {
      "tier": 1,
      "defaultCommission": {
        "commissionType": "percentage",
        "commission": 10
      }
    }
  ],
  "products": [
    {
      "_id": "6385d230f6d19db03eef6fc1",
      "productId": "6385d230f6d19db03eef6fb9",
      "priceId": "price_1MoBy5AbCdEfGhIj",
      "productName": "Starter Course",
      "commission": 25,
      "commissionType": "flat"
    }
  ]
}
```
