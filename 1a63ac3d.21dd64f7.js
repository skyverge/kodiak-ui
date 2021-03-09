(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),b=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=b(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=b(t),d=r,m=l["".concat(i,".").concat(d)]||l[d]||u[d]||o;return t?a.a.createElement(m,s(s({ref:n},p),{},{components:t})):a.a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(3),a=t(7),o=(t(0),t(123)),i={id:"tabs",title:"Tabs",sidebar_label:"Tabs"},s={unversionedId:"components/tabs",id:"components/tabs",isDocsHomePage:!1,title:"Tabs",description:"`tsx",source:"@site/docs/components/tabs.mdx",slug:"/components/tabs",permalink:"/kodiak-ui/components/tabs",editUrl:"https://github.com/skyverge/kodiak-ui/tree/master/documentation/docs/components/tabs.mdx",version:"current",sidebar_label:"Tabs",sidebar:"docs",previous:{title:"Table",permalink:"/kodiak-ui/components/table"},next:{title:"Tooltip",permalink:"/kodiak-ui/components/tooltip"}},c=[],p={toc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"const tabsData = React.useMemo(function generateTabs() {\n  return [\n    {\n      tab: 'Tab 1',\n      panel: (\n        <div>\n          <h3>Testing</h3>\n        </div>\n      ),\n    },\n    { tab: 'Tab 2', panel: 'Tab 2' },\n    { tab: 'Tab 3', panel: 'Tab 3' },\n    { tab: 'Tab 4', panel: 'Tab 4' },\n  ]\n}, [])\n\nconst { tabs, tabPanels, selectedIndex } = useTabs({\n  tabs: tabsData,\n})\n\nreturn (\n  <Tabs sx={{ border: '1px solid', borderColor: 'gray.2' }}>\n    <TabList aria-label=\"Describes the tabs\">\n      {tabs.map((props, index) => (\n        <Tab\n          key={index}\n          {...props}\n          sx={{\n            color: selectedIndex === index ? 'primary' : 'text',\n            position: 'relative',\n            '::after': {\n              bg: selectedIndex === index ? 'primary' : 'muted',\n              bottom: 0,\n              content: '\"\"',\n              height: selectedIndex === index ? '2px' : '1px',\n              left: 0,\n              position: 'absolute',\n              right: 0,\n              width: '100%',\n            },\n          }}\n        />\n      ))}\n    </TabList>\n    {tabPanels.map((props, index) => (\n      <TabPanel key={index} {...props} sx={{ p: 4 }} />\n    ))}\n  </Tabs>\n)\n")))}b.isMDXComponent=!0}}]);