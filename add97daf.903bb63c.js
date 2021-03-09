(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),i=(r(0),r(123)),l={id:"grid",title:"Grid",sidebar_label:"Grid"},o={unversionedId:"primitives/grid",id:"primitives/grid",isDocsHomePage:!1,title:"Grid",description:"Grid is the same thing as Box except that display: grid is set by default. Grid accepts the sx",source:"@site/docs/primitives/grid.mdx",slug:"/primitives/grid",permalink:"/kodiak-ui/primitives/grid",editUrl:"https://github.com/skyverge/kodiak-ui/tree/master/documentation/docs/primitives/grid.mdx",version:"current",sidebar_label:"Grid",sidebar:"docs",previous:{title:"Flex",permalink:"/kodiak-ui/primitives/flex"},next:{title:"Image",permalink:"/kodiak-ui/primitives/image"}},c=[{value:"API",id:"api",children:[{value:"Import",id:"import",children:[]},{value:"Props",id:"props",children:[]}]}],p={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Grid")," is the same thing as ",Object(i.b)("inlineCode",{parentName:"p"},"Box")," except that ",Object(i.b)("inlineCode",{parentName:"p"},"display: grid")," is set by default. ",Object(i.b)("inlineCode",{parentName:"p"},"Grid")," accepts the ",Object(i.b)("inlineCode",{parentName:"p"},"sx"),"\nprop as well as all CSS Grid properties."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"<Grid sx={{ gridGap: 4, gridTemplateColumns: '1fr 1fr' }}>\n  <Box>CSS</Box>\n  <Box>Grid</Box>\n</Grid>\n")),Object(i.b)("h2",{id:"api"},"API"),Object(i.b)("h3",{id:"import"},"Import"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},"import { Grid } from '@kodiak-ui/primitives'\n")),Object(i.b)("h3",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"),Object(i.b)("th",{parentName:"tr",align:null},"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"children"),Object(i.b)("td",{parentName:"tr",align:null},"ReactNode"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"The content")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"as"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null},"div"),Object(i.b)("td",{parentName:"tr",align:null},"The HTML element to render")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"variant"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Name of the variant from the theme")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"variantKey"),Object(i.b)("td",{parentName:"tr",align:null},"string"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Name of the variant key in the theme to know where to find the variant")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"sx"),Object(i.b)("td",{parentName:"tr",align:null},"SxStyleProp"),Object(i.b)("td",{parentName:"tr",align:null}),Object(i.b)("td",{parentName:"tr",align:null},"Style object for the component")))))}b.isMDXComponent=!0},123:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=b(r),u=n,s=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?a.a.createElement(s,o(o({ref:t},p),{},{components:r})):a.a.createElement(s,o({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);