# Info

This is a wrapper for the **axios**, with some helpers to make your REST API easier to manage.

This is still *work in progress*, but the basic works.

### Install

#### Install the package 

```js
npm i @mr_chick/vue_axios
```

#### with the package installed, you have to import it in your vue project

```js
import VueAxios from '@mr_chick/vue_axios'

```

### you can set some options directly on initialization

you can set:
* base - the default base for the api calls. If you have an endpoint `user/details` it will append the default base before making the request, resulting in `api_url_base/user/details`

* endpoints - a json with your endpoints. There will be more details about this below.

* default_headers - an object with headers that will be added to all request calls. Can be overriden from the endpoint.
```js
Vue.use(VueAxios, {
  'base': api_url_base,
  'endpoints': endpoints,
  'default_headers': {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Your-Custom-Header': 'custom'
  }
});
```

### Endpoints

#### You can define your endpoins in a json file, so you can call them by the name

##### endpoints.js

```js
let endpoints = {
  'auth.token': {
    'url': '/oauth/token',
    'method': 'post'
  },
  'auth.login': {
    'url': '/user/auth',
    'method': 'get'
  },
  'user.details': {
    'url': '/user/{user_id}',
    'method': 'get'
  }

}

export default endpoints
```

### Requesting

#### You can make a request by calling `this.$api.request`

```js
this.$api.request({
  'endpoint': {
    'name': 'user.details',
    'params': 'user_id': 234 // will replace user_id in endpoint url
  },
  'payload': {}, // data to be sent in body request
  'headers': {}, // will overwritten the default headers
  'params': {}, // get params, that will be added to link (ex) {foo: bar} will result in /user/234/?foo=bar
})
```

### Axios instance

If you need the axios object, you can access it via `this.$api.getAxios()`