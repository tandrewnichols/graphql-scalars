(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(8),o=(a(0),a(172)),i={id:"local-date",title:"LocalDate",sidebar_label:"LocalDate"},c={unversionedId:"scalars/local-date",id:"scalars/local-date",isDocsHomePage:!1,title:"LocalDate",description:"A local date string (i.e., with no associated timezone) in YYYY-MM-DD format, e.g. 2020-01-01. The value is serialized and deserialized as a string as a signal to both clients and resolvers that special care must be taken with the value when converting it to any date/time type that includes a timezone, e.g., a JavaScript Date.",source:"@site/docs/scalars/local-date.md",slug:"/scalars/local-date",permalink:"/docs/scalars/local-date",editUrl:"https://github.com/urigo/graphql-scalars/edit/master/website/docs/scalars/local-date.md",version:"current",sidebar_label:"LocalDate",sidebar:"sidebar",previous:{title:"Latitude",permalink:"/docs/scalars/latitude"},next:{title:"LocalEndTime",permalink:"/docs/scalars/local-end-time"}},l=[],s={toc:l};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A local date string (i.e., with no associated timezone) in ",Object(o.b)("inlineCode",{parentName:"p"},"YYYY-MM-DD")," format, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"2020-01-01"),". The value is serialized and deserialized as a string as a signal to both clients and resolvers that special care must be taken with the value when converting it to any date/time type that includes a timezone, e.g., a JavaScript ",Object(o.b)("inlineCode",{parentName:"p"},"Date"),"."))}u.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.a.createElement(f,c(c({ref:t},s),{},{components:a})):r.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);