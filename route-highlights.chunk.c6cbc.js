webpackJsonp([8],{jsGl:function(e,t,r){"use strict";function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=r("KM04"),s=(r.n(c),r("db16")),i=r("sw5u"),a=(r.n(i),r("8EZx")),u=r("o6ac"),l=(r.n(u),Object(c.h)(s.a,{title:"Highlights",className:"traverse--left"})),h=Object(c.h)("p",{class:"left mt20"},"Take a look back on the year, and reflect on your top moments."),f=Object(c.h)("p",{class:"left"},"No highlights just yet? Not worries, keep your head up, and start writing! 😊"),p=function(e){function t(){for(var t,r,o,c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return t=r=n(this,e.call.apply(e,[this].concat(s))),r.state={years:{}},r.getData=function(){return new Promise(function(e,t){var n,o;return Promise.resolve(r.props.db.keys("highlights")).then(function(c){try{return n=c,o=n.reduce(function(e,t){var r=t.substring(0,4);return e[r]||(e[r]=[]),e[r].push(Object(a.h)(t)),e},{}),Object.keys(o).forEach(function(e){o[e].sort(a.k)}),r.setState({years:o}),e()}catch(e){return t(e)}},t)})},o=t,n(r,o)}return o(t,e),t.prototype.componentDidMount=function(){this.getData()},t.prototype.render=function(e,t){var r=t.years,n=Object.keys(r);return n.sort(function(e,t){return Number(t)-Number(e)}),Object(c.h)("div",{class:"wrap lift-children"},l,h,n.length?n.map(function(e){return Object(c.h)("div",{key:e,class:"left mt20"},Object(c.h)("h2",null,e),Object(c.h)("ul",{class:"year-overview year-overview--center"},r[e].map(function(e){return Object(c.h)("li",{key:Object(a.m)(e)},Object(c.h)(i.Link,{href:Object(a.l)(e,"highlights"),class:"button"},Object(a.j)(e)))})))}):f)},t}(c.Component);t.default=Object(u.connect)("db")(p)}});
//# sourceMappingURL=route-highlights.chunk.c6cbc.js.map