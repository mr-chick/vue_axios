import { createLocalVue } from '@vue/test-utils'
// import vue_axios from 'dist/build.js'
import vue_axios from 'app'


describe('invalid parametres', () => {
  it('should throw MissingBase', () => {
    const localVue = createLocalVue();
    expect(() => { localVue.use(Object.assign({}, vue_axios), {}); }).toThrow('MissingBase');
  });

  it('should throw InvalidBase', () => {
    const localVue = createLocalVue();
    expect(() => { localVue.use(Object.assign({}, vue_axios), {
      base: {}
    }); }).toThrow('InvalidBase');
  });

  it('should throw InvalidEndpointsType', () => {
    const localVue = createLocalVue();
    expect(() => { localVue.use(vue_axios, {
      base: '/',
      endpoints: 'not_an_object'
    }); }).toThrow('InvalidEndpointsType');
  });
});

describe('valid parameters', () => {

  it('adds an $api method to the Vue prototype', () => {
    const localVue = createLocalVue();
    expect(localVue.prototype.$api).toBeUndefined()
    localVue.use(vue_axios, {
      'base': '/'
    });
    expect(typeof localVue.prototype.$api).toBe('object');
  });


  it('should pass with valid base', () => {
    const localVue = createLocalVue();
    expect(() => { 
      localVue.use(vue_axios, {
        'base': '/'
      }); }).not.toThrow('InvalidBase');
  })

  it('should return bar as base', () => {
    const localVue = createLocalVue();
    localVue.use(vue_axios, {
      'base': '/bar'
    });

    expect(localVue.prototype.$api.getBase()).toBe('/bar');
  })

  it('should add the endpoint && should have at least url / method', () => {
    const localVue = createLocalVue();
    localVue.use(vue_axios, {
      'base': '/',
      'endpoints': {
        'auth.token': {
          'url': '/oauth/token',
          'method': 'post',
          'content_type': 'application/x-www-form-urlencoded'
        },
      }
    });

    const endpoint = localVue.prototype.$api.getEndpoint('auth.token');
    expect(!!endpoint.url && !!endpoint.method).toBe(true);
    expect(localVue.prototype.$api.getEndpoint('auth.token')).not.toBe(null);

  })

  it ('should replace base with the provided base', () => {
    const localVue = createLocalVue();
    localVue.use(vue_axios, {
      'base': '/base'
    });

    expect(localVue.prototype.$api.genUrl('{base}/i/{am}/an/{url}', {'am': 'am'})).toBe('/base/i/am/an/-');
  })

  it ('should handle empty base', () => {
    const localVue = createLocalVue();
    localVue.use(vue_axios, {
      'base': '/'
    });

    expect(localVue.prototype.$api.genUrl('{base}/i/{am}/an/{url}', {'am': 'am'})).toBe('/i/am/an/-');
  })
});

describe('setting default headers', function () {
  const localVue = createLocalVue();
  localVue.use(vue_axios, {
    'base': '/base',
    'endpoints': {
      'auth.token': {
        'url': '/oauth/token',
        'method': 'post',
        'content_type': 'application/x-www-form-urlencoded'
      },
    },
    'default_headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
  
  it ('should have a default header of Accept with value application/json', () => {
    let headers = localVue.prototype.$api.getDefaultHeaders();

    expect(headers['Accept']).toBe('application/json');
  })

  it ('should return url string with no parameters', () => {
    expect(localVue.prototype.$api.genUrl('/i/am/an/url')).toBe('/i/am/an/url');
  })

  it ('should replace url variables with provided values', () => {
    expect(localVue.prototype.$api.genUrl('/i/{am}/an/{url}', {'am': 'am', 'url': 'url'})).toBe('/i/am/an/url');
  })

  it ('should replace missing url with - ', () => {
    expect(localVue.prototype.$api.genUrl('/i/{am}/an/{url}', {'am': 'am'})).toBe('/i/am/an/-');
  })
});