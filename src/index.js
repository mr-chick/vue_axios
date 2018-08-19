import _axios from 'axios';
// import to from 'await-to-js';

const vue_axios = ({_axios = null } = {}) => {
  let _debug = false;
  let _options = {
    'base': '/',
    'default_headers': {},
    'endpoints': {}
  }

  return {
    /**
     * Install function
     */
    install(Vue, {
      debug = 'false',
      base = null,
      endpoints = null,
      default_headers = null
      } = {}) {
        _debug = debug;

        if(base === null) { throw 'MissingBase'; }
        this.setBase(base);

        if(endpoints) this.setEndpoints(endpoints);
        
        if(default_headers) {
          this.setDefaultHeaders(default_headers);
        }

        Vue.prototype.$api = this;

        if(_debug === true) {
          console.log("new prototype", Vue.prototype.$api);
        }


    },

    /**
     * Sets the base of the api calls
     */
    setBase(base) {
      if(typeof base !== 'string') { throw 'InvalidBase' }

      if(_debug === true) {
        console.log("debug is set to ", _debug);
        console.log('setting base to', base)
      }

      _options.base = base;

      if(_debug === true) {
        console.log('options: ', base)
      }
    },

    /**
     * Gets the current base
     */
    getBase() {
      return _options.base;
    },

    /**
     * Sets the endpoints
     */

    setEndpoints(endpoints) {
      if(typeof endpoints !== 'object') throw('InvalidEndpointsType');

      for (const [path, endpoint] of Object.entries(endpoints)) {
        _options.endpoints[path] = endpoint
      }
    },

    /**
     * 
     * @param {*} endpoint 
     */

    getEndpoint(endpoint) {
      console.log('getEndpoint', endpoint);
      if (typeof endpoint !== 'string') return null;      
      return _options.endpoints[endpoint] || null;
    },

    /**
     * Set default headers
     */

    setDefaultHeaders(headers) {
      for (const [key, value] of Object.entries(headers)) {
        _options.default_headers[key] = value;
        _axios.defaults.headers.common[key] = value;
      };
    },

    getDefaultHeaders() {
      return _options.default_headers;
    },

      /**
     * replaces curly braces with the actual parameters
     */

    genUrl(url, params = {}) {
      console.log('using url', url);
      const replacer = (match) => {
        match = match.substring(1, match.length-1);

        // special values as base will be replaced with their specific value
        switch(match) {
          case 'base': {
            if(_debug === true) {
              console.log("matching base against", _options);
            }
            return _options.base;
          }
        }

        return params[match] || '-'
      }

      // check
      url = url.replace(/\{([^}]+)\}/gi, replacer);
      return (url.substring(0,2) === "//") ? url.substr(1) : url; 
    },

    /**
     * Sends a request
     * 
     * headers will be added to the request
     * @param endpoint { 'endpoint' : { 'name': string, 'params': object }}
     * @param headers object
     * @params object
     */
    request({endpoint = {}, payload = {}, headers = {}, params = {}} = {}) {
      return new Promise((resolve, reject) => {
      
        //todopc: add moretestes for this
        // endpoint should have name
        let endpointForRequest = this.getEndpoint(endpoint.name);

        if(endpointForRequest === null) reject({ 'error' : { 'type' : 'missing_endpoint'}})


        // check if endpoint exists
        if(endpointForRequest === null) reject({ 'error' : { 'type' : 'missing_endpoint'}})
      
        // else, resolve the link
        let url = this.genUrl(endpointForRequest.url, endpoint.params);


        // build the request
        let options = {
          'baseURL': endpointForRequest.base || _options.base, 
          'method': endpointForRequest.method || 'get',
          'url': url,
          'headers': headers,
          'params': params,
          'data': payload
        }

      // makes the axios call
            
      _axios.request(options)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject({'error': { 'type': 'axios_catch_error', 'response': error}})
      })
      });
    }
  }
}

export default vue_axios({_axios});






