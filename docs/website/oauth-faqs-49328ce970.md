> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/oauth/Faqs). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# FAQs

Here you will find answers to commonly encountered questions.

> If you are having trouble and cannot find a suitable answer, please reach out to support.

### How do I listen to webhook events?

For listening to the webhook events -

1. Register for an app.
1. Go to the app settings and update the webhook url (where you want to listen for events)
1. Under the settings, also add the scope needed for the webhook event under the scopes section.
1. Ask the location/agency admin to go to the app page in marketplace and click on "Add App".
1. Select the location, it will redirect you to the redirect uri with the authorization code.
1. Use the authorization code to get the access token.
1. You would start receiving the webhook event for the location.

### How long are the access tokens valid?

The access tokens are valid for a day. After that, you can use the refresh token to get a new access token which will be valid for another day.

### How long are the refresh tokens valid?

The refresh tokens are valid for a year unless they are used. If they are used, the new refresh token is valid for a year as well.

### How should we handle token expiry?

You should:

1. Make a request to any of our APIs using the accessToken.
1. If you get a response saying that the token is expired, refresh the token using our API and save the new access token and refresh token in your database.
1. Make the request again with the new accessToken.

You can write a wrapper function on your end to achieve this. You can use it for all the API calls you make to our APIs.

### What are current rate limits for API 2.0?

A burst limit of 100 API requests per 10 seconds and a daily limit of 200,000 API requests, counted per Marketplace app per resource (Location or Company).

See [Rate Limits](https://marketplace.gohighlevel.com/docs/other/rate-limits) for the response headers that report your usage and a worked example.
