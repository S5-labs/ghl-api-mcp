> Automatically synchronized from [HighLevel's official API documentation source](https://github.com/GoHighLevel/highlevel-api-docs/blob/main/docs/marketplace%20modules/CustomJs.md). Do not edit this generated file directly.

# CustomJS

## Wrapper functions

HighLevel provides functions to render contextual data & some utilities that can help developers customize experience for the user.

### 1. Local Storage and Cookies Management:

This feature provides utility methods to interact with localStorage and cookies efficiently.

**Local Storage Wrapper:**

- Store data with a maximum size of 5KB per entry.
- The wrapper automatically prefixes keys to prevent key collisions with `custom_`.
- Stored data is automatically cleaned up when the Vue instance is destroyed.

_Usage:_

```shell
await  AppUtils.Storage.setData(key,  value); //  Store  data
await  AppUtils.Storage.getData(key); //  Retrieve  data
```

<br/>

**Cookies Wrapper:**

- Store data with a maximum size of 5KB per entry.
- Set cookies with optional expiration (maximum of 2 days from the time of creation).
- The wrapper automatically prefixes keys to prevent key collisions with `custom_`.

_Usage:_

```shell
await AppUtils.Storage.setCookie(key, value, expiryInHours)
//or
await AppUtils.Storage.setCookie(key, value) // Store data in a cookie

await AppUtils.Storage.getCookie(key) // Retrieve cookie value
```

<hr/>

### 2. Custom Events:

You can listen to custom application events for specific lifecycle hooks or activities.

**Events:**

- **routeLoaded**: Emitted when the first route is loaded after application startup.
- **routeChangeEvent**: Emitted on every route change after the initial route load.

_Usage:_

```shell
window.addEventListener('routeLoaded',callback)
window.addEventListener('routeChangeEvent',callback)
```

<hr>

### 3. Routing Methods:

Custom scripts can now control routing within the application via exposed methods.

**Methods:**

- **getCurrentRoute()**: Get the current route info.
- **navigate(options:INavigationOptions)**: Allows you to navigate to a different route via name or path.

```js
 interface INavigationOptions{
  name?: string
  path?: string
  params?: Record<string,  string>
  query?: Record<string,  string>
  replace?: boolean
  append?: boolean
}
```

_Usage:_

```shell
await AppUtils.RouteHelper.navigate({name: 'integrations-settings-v2'}); // Navigate to integrations page on current location

const path = '/integration'
await AppUtils.RouteHelper.navigate({path}) // Navigates to marketplace apps page

const currentRoute = await AppUtils.RouteHelper.getCurrentRoute();
console.log(currentRoute); // Logs current route information {fullPath, name, params, path, query}
```

<hr>

### 4. Utility Methods:

A set of utility methods is now available to provide essential contextual data for custom scripts.

**Methods:**

- User Info: `getCurrentUser()` – Retrieves current user's information.
- Current Location: `getCurrentLocation()` – Retrieves data about the user's current location.
- Company Info: `getCompany()` – Retrieves information about the current company.

_Usage:_

```shell
const userInfo = await AppUtils.Utilities.getCurrentUser();//{id, name, firstName, lastName, email, type, role}

const currentLocation = await AppUtils.Utilities.getCurrentLocation();//{id, name, address: {address, city, country}}

const companyInfo = AppUtils.Utilities.getCompany();//{id, name}
```
