module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={ADD_CHANNEL:function(e,t){console.log("mutationg store to add channel "+t),e.channels[t]={}}};t.default=o},function(e,t,n){"use strict"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={addChannel:function(e,t){(0,e.commit)("ADD_CHANNEL",t)}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(2)),i=s(n(1)),r=s(n(0));function s(e){return e&&e.__esModule?e:{default:e}}var u={namespaced:!0,state:{channels:{}},getters:i.default,actions:o.default,mutations:r.default};t.default=u},function(e,t){!function(){function e(e){this.value=e}function t(t){var n,o;function i(n,o){try{var s=t[n](o),u=s.value;u instanceof e?Promise.resolve(u.value).then(function(e){i("next",e)},function(e){i("throw",e)}):r(s.done?"return":"normal",s.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":n.resolve({value:t,done:!0});break;case"throw":n.reject(t);break;default:n.resolve({value:t,done:!1})}(n=n.next)?i(n.key,n.arg):o=null}this._invoke=function(e,t){return new Promise(function(r,s){var u={key:e,arg:t,resolve:r,reject:s,next:null};o?o=o.next=u:(n=o=u,i(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}();var n=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},u=function(){function e(t){n(this,e),this._defaultOptions={auth:{headers:{}},authEndpoint:"/broadcasting/auth",broadcaster:"pusher",csrfToken:null,host:null,key:null,namespace:"App.Events"},this.setOptions(t),this.connect()}return o(e,[{key:"setOptions",value:function(e){return this.options=i(this._defaultOptions,e),this.csrfToken()&&(this.options.auth.headers["X-CSRF-TOKEN"]=this.csrfToken()),e}},{key:"csrfToken",value:function(){var e=void 0;return"undefined"!=typeof window&&window.Laravel&&window.Laravel.csrfToken?window.Laravel.csrfToken:this.options.csrfToken?this.options.csrfToken:"undefined"!=typeof document&&(e=document.querySelector('meta[name="csrf-token"]'))?e.getAttribute("content"):null}}]),e}(),c=function(){function e(){n(this,e)}return o(e,[{key:"notification",value:function(e){return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated",e)}},{key:"listenForWhisper",value:function(e,t){return this.listen(".client-"+e,t)}}]),e}(),a=function(){function e(t){n(this,e),this.setNamespace(t)}return o(e,[{key:"format",value:function(e){return"."===e.charAt(0)||"\\"===e.charAt(0)?e.substr(1):(this.namespace&&(e=this.namespace+"."+e),e.replace(/\./g,"\\"))}},{key:"setNamespace",value:function(e){this.namespace=e}}]),e}(),h=function(e){function t(e,o,i){n(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.name=o,r.pusher=e,r.options=i,r.eventFormatter=new a(r.options.namespace),r.subscribe(),r}return r(t,c),o(t,[{key:"subscribe",value:function(){this.subscription=this.pusher.subscribe(this.name)}},{key:"unsubscribe",value:function(){this.pusher.unsubscribe(this.name)}},{key:"listen",value:function(e,t){return this.on(this.eventFormatter.format(e),t),this}},{key:"stopListening",value:function(e){return this.subscription.unbind(this.eventFormatter.format(e)),this}},{key:"on",value:function(e,t){return this.subscription.bind(e,t),this}}]),t}(),l=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,h),o(t,[{key:"whisper",value:function(e,t){return this.pusher.channels.channels[this.name].trigger("client-"+e,t),this}}]),t}(),f=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,h),o(t,[{key:"here",value:function(e){return this.on("pusher:subscription_succeeded",function(t){e(Object.keys(t.members).map(function(e){return t.members[e]}))}),this}},{key:"joining",value:function(e){return this.on("pusher:member_added",function(t){e(t.info)}),this}},{key:"leaving",value:function(e){return this.on("pusher:member_removed",function(t){e(t.info)}),this}},{key:"whisper",value:function(e,t){return this.pusher.channels.channels[this.name].trigger("client-"+e,t),this}}]),t}(),p=function(e){function t(e,o,i){n(this,t);var r=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.events={},r.name=o,r.socket=e,r.options=i,r.eventFormatter=new a(r.options.namespace),r.subscribe(),r.configureReconnector(),r}return r(t,c),o(t,[{key:"subscribe",value:function(){this.socket.emit("subscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"unsubscribe",value:function(){this.unbind(),this.socket.emit("unsubscribe",{channel:this.name,auth:this.options.auth||{}})}},{key:"listen",value:function(e,t){return this.on(this.eventFormatter.format(e),t),this}},{key:"on",value:function(e,t){var n=this,o=function(e,o){n.name==e&&t(o)};this.socket.on(e,o),this.bind(e,o)}},{key:"configureReconnector",value:function(){var e=this,t=function(){e.subscribe()};this.socket.on("reconnect",t),this.bind("reconnect",t)}},{key:"bind",value:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)}},{key:"unbind",value:function(){var e=this;Object.keys(this.events).forEach(function(t){e.events[t].forEach(function(n){e.socket.removeListener(t,n)}),delete e.events[t]})}}]),t}(),v=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,p),o(t,[{key:"whisper",value:function(e,t){return this.socket.emit("client event",{channel:this.name,event:"client-"+e,data:t}),this}}]),t}(),y=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,v),o(t,[{key:"here",value:function(e){return this.on("presence:subscribed",function(t){e(t.map(function(e){return e.user_info}))}),this}},{key:"joining",value:function(e){return this.on("presence:joining",function(t){return e(t.user_info)}),this}},{key:"leaving",value:function(e){return this.on("presence:leaving",function(t){return e(t.user_info)}),this}}]),t}(),d=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,c),o(t,[{key:"subscribe",value:function(){}},{key:"unsubscribe",value:function(){}},{key:"listen",value:function(e,t){return this}},{key:"stopListening",value:function(e){return this}},{key:"on",value:function(e,t){return this}}]),t}(),b=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,d),o(t,[{key:"whisper",value:function(e,t){return this}}]),t}(),k=function(e){function t(){return n(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,d),o(t,[{key:"here",value:function(e){return this}},{key:"joining",value:function(e){return this}},{key:"leaving",value:function(e){return this}},{key:"whisper",value:function(e,t){return this}}]),t}(),g=function(e){function t(){var e;n(this,t);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];var u=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return u.channels={},u}return r(t,u),o(t,[{key:"connect",value:function(){this.pusher=new Pusher(this.options.key,this.options)}},{key:"listen",value:function(e,t,n){return this.channel(e).listen(t,n)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new h(this.pusher,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new l(this.pusher,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new f(this.pusher,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var t=this;[e,"private-"+e,"presence-"+e].forEach(function(e,n){t.channels[e]&&(t.channels[e].unsubscribe(),delete t.channels[e])})}},{key:"socketId",value:function(){return this.pusher.connection.socket_id}},{key:"disconnect",value:function(){this.pusher.disconnect()}}]),t}(),_=function(e){function t(){var e;n(this,t);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];var u=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return u.channels={},u}return r(t,u),o(t,[{key:"connect",value:function(){var e=this.getSocketIO();return this.socket=e(this.options.host,this.options),this.socket}},{key:"getSocketIO",value:function(){if("undefined"!=typeof io)return io;if("undefined"!==this.options.client)return this.options.client;throw new Error("Socket.io client not found. Should be globally available or passed via options.client")}},{key:"listen",value:function(e,t,n){return this.channel(e).listen(t,n)}},{key:"channel",value:function(e){return this.channels[e]||(this.channels[e]=new p(this.socket,e,this.options)),this.channels[e]}},{key:"privateChannel",value:function(e){return this.channels["private-"+e]||(this.channels["private-"+e]=new v(this.socket,"private-"+e,this.options)),this.channels["private-"+e]}},{key:"presenceChannel",value:function(e){return this.channels["presence-"+e]||(this.channels["presence-"+e]=new y(this.socket,"presence-"+e,this.options)),this.channels["presence-"+e]}},{key:"leave",value:function(e){var t=this;[e,"private-"+e,"presence-"+e].forEach(function(e){t.channels[e]&&(t.channels[e].unsubscribe(),delete t.channels[e])})}},{key:"socketId",value:function(){return this.socket.id}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),t}(),m=function(e){function t(){var e;n(this,t);for(var o=arguments.length,i=Array(o),r=0;r<o;r++)i[r]=arguments[r];var u=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return u.channels={},u}return r(t,u),o(t,[{key:"connect",value:function(){}},{key:"listen",value:function(e,t,n){return new d}},{key:"channel",value:function(e){return new d}},{key:"privateChannel",value:function(e){return new b}},{key:"presenceChannel",value:function(e){return new k}},{key:"leave",value:function(e){}},{key:"socketId",value:function(){return"fake-socket-id"}},{key:"disconnect",value:function(){}}]),t}(),w=function(){function e(t){n(this,e),this.options=t,"function"==typeof Vue&&Vue.http&&this.registerVueRequestInterceptor(),"function"==typeof axios&&this.registerAxiosRequestInterceptor(),"function"==typeof jQuery&&this.registerjQueryAjaxSetup(),"pusher"==this.options.broadcaster?this.connector=new g(this.options):"socket.io"==this.options.broadcaster?this.connector=new _(this.options):"null"==this.options.broadcaster&&(this.connector=new m(this.options))}return o(e,[{key:"registerVueRequestInterceptor",value:function(){var e=this;Vue.http.interceptors.push(function(t,n){e.socketId()&&t.headers.set("X-Socket-ID",e.socketId()),n()})}},{key:"registerAxiosRequestInterceptor",value:function(){var e=this;axios.interceptors.request.use(function(t){return e.socketId()&&(t.headers["X-Socket-Id"]=e.socketId()),t})}},{key:"registerjQueryAjaxSetup",value:function(){var e=this;void 0!==jQuery.ajax&&jQuery.ajaxSetup({beforeSend:function(t){e.socketId()&&t.setRequestHeader("X-Socket-Id",e.socketId())}})}},{key:"listen",value:function(e,t,n){return this.connector.listen(e,t,n)}},{key:"channel",value:function(e){return this.connector.channel(e)}},{key:"private",value:function(e){return this.connector.privateChannel(e)}},{key:"join",value:function(e){return this.connector.presenceChannel(e)}},{key:"leave",value:function(e){this.connector.leave(e)}},{key:"socketId",value:function(){return this.connector.socketId()}},{key:"disconnect",value:function(){this.connector.disconnect()}}]),e}();e.exports=w},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(4)),i=r(n(3));function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,i=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(o=(s=u.next()).done)&&(n.push(s.value),!t||n.length!==t);o=!0);}catch(e){i=!0,r=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var a=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rawEcho=t,this.debug=!1,this.options={host:"",auth:null,broadcaster:{},pusher_key:null}}return function(e,t,n){t&&c(e.prototype,t),n&&c(e,n)}(e,[{key:"install",value:function(e,t){u(t),this.initialize(t),e.prototype.$echo=this}},{key:"initialize",value:function(e){if(e.debug&&"boolean"==typeof e.debug&&(this.debug=e.debug),this.showDebug("initializing!"),e.broadcaster&&"object"===u(e.broadcaster)&&(this.options.broadcaster.name=e.broadcaster.name),this.showDebug("Broadcaster set to ",this.options.broadcaster.name),e.host&&"string"==typeof e.host&&(this.options.host=e.host),this.showDebug("Host set to ",this.options.host),e.auth&&"object"===u(e.auth)&&e.auth.headers&&"object"===u(e.auth.headers))for(var t=Object.entries(e.auth.headers),n=0;n<t.length;n++){var o=s(t[n],2),r=o[0],c=o[1];this.addAuthHeader(r,c),this.showDebug("Auth header set to ",r+c)}e.store&&"object"===u(e.store)&&(this.store=e.store,this.showDebug("echo store",i.default),this.store.registerModule(["echo"],i.default)),this.showDebug("Store is set to ",this.store);var a={broadcaster:this.options.broadcaster.name,host:this.options.host};this.options.auth&&(a.auth=this.options.auth),this.echo=new this.rawEcho(a),this.showDebug("echo set to ",this.echo)}},{key:"private",value:function(e){this.showDebug("Joining private channel "+e);var t=this.echo.private(e);return this.store.dispatch("echo/addChannel",e),t}},{key:"public",value:function(e){return this.echo.channel(e)}},{key:"channel",value:function(e){this.showDebug("Joining public channel "+e);var t=this.echo.private(e);return this.store.dispatch("echo/addChannel",e),t}},{key:"leave",value:function(e){this.showDebug("Leaving channel "+e);var t=this.echo.leave(e);return this.showDebug(t),t}},{key:"addAuthHeader",value:function(e,t){this.options.auth||(this.options.auth={}),this.options.auth.headers||(this.options.auth.headers={}),this.options.auth.headers[e]=t}},{key:"addAuthToken",value:function(e){this.echo.connector._defaultOptions.auth&&(this.echo.connector._defaultOptions.auth.headers.Authorization="Bearer "+e),this.showDebug("settings auth token to ",e)}},{key:"channels",value:function(){return Object.getOwnPropertyNames(this.echo.connector.channels)}},{key:"isConnected",value:function(){return this.echo.connector.socket.connected}},{key:"showDebug",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.debug&&console.log(e,t)}}]),e}())(o.default,i.default);t.default=a}]);