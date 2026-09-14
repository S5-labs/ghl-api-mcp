> Live website snapshot from [HighLevel API Documentation](https://marketplace.gohighlevel.com/docs/marketplace-modules/vue3-store-events). This rendered page is the freshness authority; repository-derived documents remain available for structured schema details.

**Website Version:** v3

# Vue 3 Store Events Migration Guide

As part of our upcoming Vue 3 migration, we've introduced a new and safer way for Marketplace apps to listen for store changes. Direct access to the Vue instance (`__vue__`, `$store`, `$router`) will no longer be available in Vue 3.

To ensure your apps continue to function seamlessly, please migrate to the new **StoreEvents** API for store subscriptions.

## ✅ How to Register for Store Updates

Use `window.AppUtils.StoreEvents.register()` to subscribe to the store modules your app depends on.

### Example:

```javascript
// Register for store updates
const subscriptionId = window.AppUtils.StoreEvents.register(
  ["auth", "user"], // list of store modules
  ({ module, state, mutation }) => {
    console.log("Update from:", module, state, mutation);
  }
);

// Unregister when not needed
window.AppUtils.StoreEvents.unregister(subscriptionId);
```

### Important Notes:

- Each app subscribes only to the modules it needs.
- On every mutation, your callback will be triggered with `{ module, state[module], mutation }`.
- Apps should unregister subscriptions when no longer needed to avoid memory leaks.

## 🔄 Route Change Events

For route navigation, please use the `routeChangeEvent` provided in **AppUtils** instead of `router.beforeEach`.

### Example:

```javascript
document.addEventListener("routeChangeEvent", (e) => {
  console.log("Route changed:", e.detail);
});
```

## 📁 Available Store Modules

You can subscribe to any of the following modules:

- `user`
- `imagePreview`
- `locations`
- `numbers`
- `workflows`
- `agencyTwilio`
- `twilioAccount`
- `phoneCall`
- `funnel`
- `oauth2`
- `affiliate`
- `defaultEmailService`
- `membership`
- `locationCustomFields`
- `customValues`
- `manualCallStatus`
- `iframe`
- `products`
- `stripeConnect`
- `integrations`
- `sidebarv2`
- `customObjectsStore`
- `launchpad`
- `phoneIntegration`
- `locationNumbers`
- `locationSetting`
- `conversationAi`
- `aiAgents`
- `scoreProfiles`
- `affiliateManager`
- `freshchat`
- `customPages`
- `adPublishing`
- `regulatoryBundle`
- `customMenuLinks`
- `locationsMapSearch`
- `marketplace`

## 📺 Additional Resources

For a detailed walkthrough of the migration process, check out this video tutorial:

👉 **[Vue 3 Store Events Migration Video Guide](https://www.loom.com/share/1252d972bfee4ea18db06be3321cd4b2?sid=24b84c0a-8d75-47e9-81df-9aff1b5d4909)**

## ⚠️ Action Required

1. **Update your apps** to use `StoreEvents.register` and `routeChangeEvent`
1. **Test against** the beta-vue environment
1. **Share any issues** or feedback with us before the final rollout

Thanks for your cooperation in ensuring a smooth migration to Vue 3! 🚀
