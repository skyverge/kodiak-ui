(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(o,".").concat(s)]||b[s]||m[s]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(123)),o={id:"select",title:"Select",sidebar_label:"Select"},l={unversionedId:"primitives/select",id:"primitives/select",isDocsHomePage:!1,title:"Select",description:"Renders a HTML select element that allows you to select a value from multiple pre-defined options.",source:"@site/docs/primitives/select.mdx",slug:"/primitives/select",permalink:"/kodiak-ui/primitives/select",editUrl:"https://github.com/skyverge/kodiak-ui/tree/master/documentation/docs/primitives/select.mdx",version:"current",sidebar_label:"Select",sidebar:"docs",previous:{title:"Radio",permalink:"/kodiak-ui/primitives/radio"},next:{title:"Svg",permalink:"/kodiak-ui/primitives/svg"}},c=[{value:"API",id:"api",children:[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Renders a HTML select element that allows you to select a value from multiple pre-defined options."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'<Select name="select" defaultValue="hello">\n  <option>Hello</option>\n  <option>Hi</option>\n  <option>Beep</option>\n  <option>Boop</option>\n</Select>\n')),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import { Select } from '@kodiak-ui/primitives'\n")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"variant"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Name of the variant from the theme")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"variantKey"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"inputs"),Object(i.b)("td",{parentName:"tr",align:null},"Name of the variant key in the theme to know where to find the variant")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sx"),Object(i.b)("td",{parentName:"tr",align:null},"SxStyleProp"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Style object for the component")))))}u.isMDXComponent=!0}}]);