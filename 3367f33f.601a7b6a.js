(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var b=a.a.createContext({}),p=function(t){var e=a.a.useContext(b),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.a.createElement(b.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,b=c(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?a.a.createElement(s,l(l({ref:e},b),{},{components:n})):a.a.createElement(s,l({ref:e},b))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"metadata",(function(){return l})),n.d(e,"toc",(function(){return c})),n.d(e,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(123)),i={id:"anchorButton",title:"AnchorButton",sidebar_label:"AnchorButton"},l={unversionedId:"primitives/anchorButton",id:"primitives/anchorButton",isDocsHomePage:!1,title:"AnchorButton",description:"Anchor buttons are used to render an anchor tag that looks like a button.",source:"@site/docs/primitives/anchorButton.mdx",slug:"/primitives/anchorButton",permalink:"/kodiak-ui/primitives/anchorButton",editUrl:"https://github.com/skyverge/kodiak-ui/tree/master/documentation/docs/primitives/anchorButton.mdx",version:"current",sidebar_label:"AnchorButton",sidebar:"docs",previous:{title:"Components API",permalink:"/kodiak-ui/components"},next:{title:"Avatar",permalink:"/kodiak-ui/primitives/avatar"}},c=[{value:"API",id:"api",children:[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[]}]}],b={toc:c};function p(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Anchor buttons are used to render an anchor tag that looks like a button."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},'<AnchorButton href="#">Default AnchorButton</AnchorButton>\n')),Object(o.b)("h2",{id:"api"},"API"),Object(o.b)("h3",{id:"import"},"Import"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import { AnchorButton } from '@kodiak-ui/primitives'\n")),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"AnchorButton")," will accept all normal and expected attributes for an HTML anchor element as well as the props defined below."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Name"),Object(o.b)("th",{parentName:"tr",align:null},"Type"),Object(o.b)("th",{parentName:"tr",align:null},"Default"),Object(o.b)("th",{parentName:"tr",align:null},"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"children"),Object(o.b)("td",{parentName:"tr",align:null},"ReactNode"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"The button content")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"href"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Link to the destination")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"variant"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Name of the variant from the theme")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"variantKey"),Object(o.b)("td",{parentName:"tr",align:null},"string"),Object(o.b)("td",{parentName:"tr",align:null},"buttons"),Object(o.b)("td",{parentName:"tr",align:null},"Name of the variant key in the theme to know where to find the variant")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"sx"),Object(o.b)("td",{parentName:"tr",align:null},"SxStyleProp"),Object(o.b)("td",{parentName:"tr",align:null}),Object(o.b)("td",{parentName:"tr",align:null},"Style object for the component")))))}p.isMDXComponent=!0}}]);