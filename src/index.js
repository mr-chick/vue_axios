import axios from 'axios';
import to from 'await-to-js';

/**
 * Main object
 */

const vue_axios = class VueAxios {
  constructor(axios) {
    this.axios = axios
    this.debug = true;
    this.endpoints = {};
    this.options = {
      'base': '/',
      'default_headers': {}
    };
  }


  // /**
  //  * Install function
  //  */

  install (Vue, settings) {
    // settings should be an object
    if (typeof settings !== "object") {
        // throw error
    }

    this.initialize(settings);
    Vue.prototype.$api = this;


  }

  // /**
  //  * Initializing echo
  //  */

  initialize (settings) {

    if(typeof settings === "object") {
      // loop through the settings

      for (const [key, value] of Object.entries(settings)) {
        this.showDebug('switching value of ',[value, key])
        switch(key) {
          case 'debug': this.setDebug(value); break;
          case 'base': this.setBase(value); break;
          case 'endpoints': this.setEndpoints(value); break;
          case 'default_headers': 
          if(typeof value === "object") {
            this.setDefaultHeaders(value);
          };
          break;
        }
      }
    }

    // this.echo = new this.rawEcho(options);
    // this.showDebug("echo set to ", this.echo);
  }

  /**
   * Sets the endpoints
   */

  setEndpoints(endpoints) {
    for (const [path, endpoint] of Object.entries(endpoints)) {
      this.endpoints[path] = endpoint
    }

    this.showDebug('endpoints', this.endpoints);
  }

  /**
   * replaces curly braces with the actual parameters
   */

  genUrl(url, params = {}) {
    const replacer = (match) => {
      match = match.substring(1, match.length-1);

      this.showDebug('gen url params', params);
      // special values as base will be replaced with their specific value
      switch(match) {
        case 'base': return this.options.base;
      }

      return params[match] || '-'
    }

    this.showDebug('url params ', params)
    return url.replace(/\{([^}]+)\}/gi, replacer);
  }
  
  /** 
   * sets the bae of the axios calls
   */

  setBase(base) {
    this.showDebug("setting base to ", base);
    this.options.base = base;
  }

  /**
   * Set default headers
   */

  setDefaultHeaders(headers) {
    for (const [key, value] of Object.entries(headers)) {
      this.options.default_headers[key] = value;
      this.axios.defaults.headers.common[key] = value;
    };
  }

  /**
   * Sends a request
   * 
   * headers will be added to the request
   */
  request({endpoint, payload, headers = {}, params = {}}) {
    this.showDebug("new request for "+endpoint.name);

    // check if endpoint exists
    return new Promise((resolve, reject) => {
      // check if endpoint exists
      if(!this.endpoints[endpoint.name]) reject({ 'error' : { 'type' : 'missing_endpoint'}})
      
      // else, resolve the link
      let url = this.genUrl(this.endpoints[endpoint.name].url, endpoint.params)
      
      // build the request
      
      let options = {
        'baseURL': this.endpoints[endpoint.name].base || this.options.base, 
        'method': this.endpoints[endpoint.name].method || 'get',
        'url': url,
        'headers': headers,
        'params': params,
        'data': payload
      }

      this.showDebug(options);

      // makes the axios call
            
      this.axios.request(options)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject({'error': { 'type': 'axios_catch_error', 'response': error}})
      })
    });
  }
  /** 
   * Debug
   */

  setDebug (value) {
    this.debug = value;
    this.showDebug("debug set to " + value);
  }
  showDebug (string, data = '') {
    if(this.debug) console.log(string, data)
  }
};


export default new vue_axios(axios)




