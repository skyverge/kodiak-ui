(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(t),d=o,u=b["".concat(i,".").concat(d)]||b[d]||m[d]||r;return t?a.a.createElement(u,c(c({ref:n},l),{},{components:t})):a.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return s}));var o=t(3),a=t(7),r=(t(0),t(123)),i={id:"components",title:"Components API",sidebar_label:"Components API"},c={unversionedId:"components",id:"components",isDocsHomePage:!1,title:"Components API",description:"Styling and rendering components in an easy and effective manner is at the core of Kodiak's purpose. So many component libraries make it difficult to overwrite base styles for components or hard to augment styling for different modifications. Kodiak's component API helps mitigate a number of these issues. It is similar to the variant API to help keep consistency on how to apply styling for components across an entire application.",source:"@site/docs/components.md",slug:"/components",permalink:"/kodiak-ui/components",editUrl:"https://github.com/skyverge/kodiak-ui/tree/master/documentation/docs/components.md",version:"current",sidebar_label:"Components API",sidebar:"docs",previous:{title:"Variants API",permalink:"/kodiak-ui/variants"},next:{title:"AnchorButton",permalink:"/kodiak-ui/primitives/anchorButton"}},p=[{value:"Getting started",id:"getting-started",children:[]},{value:"API",id:"api",children:[{value:"component",id:"component",children:[]},{value:"base prop",id:"base-prop",children:[]},{value:"useComponent",id:"usecomponent",children:[]},{value:"useComponents",id:"usecomponents",children:[]}]},{value:"Defining components globally",id:"defining-components-globally",children:[]}],l={toc:p};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Styling and rendering components in an easy and effective manner is at the core of Kodiak's purpose. So many component libraries make it difficult to overwrite base styles for components or hard to augment styling for different modifications. Kodiak's ",Object(r.b)("inlineCode",{parentName:"p"},"component")," API helps mitigate a number of these issues. It is similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"variant")," API to help keep consistency on how to apply styling for components across an entire application."),Object(r.b)("p",null,"The majority of the base/default styling for each Kodiak UI component should be applied via the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," API."),Object(r.b)("h2",{id:"getting-started"},"Getting started"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import { component } from 'kodiak-ui'\nimport * as Primitives from '@kodiak-ui/primitives'\n\ncomponent('button', {\n  px: 3,\n  py: 2,\n  color: 'white',\n  bg: 'primary',\n  border: 0,\n  borderRadius: 'default',\n  '&:hover': {\n    bg: 'secondary',\n  },\n})\n\nfunction ButtonLink(props) {\n  return <Primitives.Button {...props} />\n}\n")),Object(r.b)("p",null,"Similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"variant")," API, the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," API provides a way to define a common set of styles that can be shared across components. They are in essence the same API and can be used interchangeably, but the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," API is meant to be used in more of a specific use case and contain more CSS than variants."),Object(r.b)("p",null,"Each Kodiak UI component will automatically check to see if a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," has been added based on the name of the component. To apply styles automatically, pass in the camelcased version of the component name as the first argument to ",Object(r.b)("inlineCode",{parentName:"p"},"component"),"."),Object(r.b)("p",null,"For example, to style the ",Object(r.b)("inlineCode",{parentName:"p"},"AccordionHeader")," component, call ",Object(r.b)("inlineCode",{parentName:"p"},"component('accordionHeader', {})"),"."),Object(r.b)("p",null,"Components can also be composed together similar to variants. If you wanted to create a separate ",Object(r.b)("inlineCode",{parentName:"p"},"Button")," component that was styled like an ",Object(r.b)("inlineCode",{parentName:"p"},"AnchorButton")," but did not render an ",Object(r.b)("inlineCode",{parentName:"p"},"a")," tag, you could do the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import { component } from 'kodiak-ui'\nimport * as Primitives from '@kodiak-ui/primitives'\n\ncomponent('button', {\n  px: 3,\n  py: 2,\n  color: 'white',\n  bg: 'primary',\n  border: 0,\n  borderRadius: 'default',\n  '&:hover': {\n    bg: 'secondary',\n  },\n})\n\ncomponent('link', {\n  textDecoration: 'underline',\n})\n\nfunction ButtonLink(props) {\n  return <Primitives.Button base={['button', 'link']} {...props} />\n}\n")),Object(r.b)("p",null,"We recommend colocating these default component style definitions as closely to where they are used, and move shared ",Object(r.b)("inlineCode",{parentName:"p"},"component"),"s up a level similar to how you would manage state in an application."),Object(r.b)("h2",{id:"api"},"API"),Object(r.b)("h3",{id:"component"},"component"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"component")," method follows the same API as the ",Object(r.b)("inlineCode",{parentName:"p"},"variant")," method and allows you to apply default styles to any Kodiak UI components. The main difference is that Kodiak UI components will automatically check the theme for a style definition based on the component name."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"component('key', { bg: 'primary', px: 4 })\n")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Argument"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"key"),Object(r.b)("td",{parentName:"tr",align:null},"string"),Object(r.b)("td",{parentName:"tr",align:null},"The name of the component and how you will reference the styles in the base prop")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"styles"),Object(r.b)("td",{parentName:"tr",align:null},"object"),Object(r.b)("td",{parentName:"tr",align:null},"Theme scoped style object. The styles that will be applied to the component")))),Object(r.b)("p",null,"\ud83d\udca1",Object(r.b)("strong",{parentName:"p"},"Tip"),": See the alternate way to define components ",Object(r.b)("a",{parentName:"p",href:"#defining-components-globally"},"below"),"."),Object(r.b)("h3",{id:"base-prop"},"base prop"),Object(r.b)("p",null,"All Kodiak UI components accept a ",Object(r.b)("inlineCode",{parentName:"p"},"base")," prop which will take a string or array of strings as a value. The component(s) passed into the ",Object(r.b)("inlineCode",{parentName:"p"},"base")," prop will apply the appropriate styling to the component. A Kodiak UI component will automatically check for a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," defined in the theme. It will look to see if there a component in the theme with the same name as the component, only camelcased."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"Button => button\nAccordionItem => accordionItem\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"<Button base=\"linkButton\">Click me!</Button>\n\n// Automatically styled if a `button` component has been defined\n<Button>Click me!</Button>\n\n// Compose multiple components togther for more specific use-case versions of Kodiak's primitives\n<Button base={['button', 'link']}>Click me!</Button>\n")),Object(r.b)("h3",{id:"usecomponent"},"useComponent"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useComponent")," hook allows you to get the styles for a specified component outside of the normal parent -> child hierarchy. The hook accepts a component as the only argument and will return the styles from the theme that can be passed into the ",Object(r.b)("inlineCode",{parentName:"p"},"sx")," prop in any of Kodiak UI's components."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Argument"),Object(r.b)("th",{parentName:"tr",align:null},"Type"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"component"),Object(r.b)("td",{parentName:"tr",align:null},"{ key: string, styles: object }"),Object(r.b)("td",{parentName:"tr",align:null})))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"import { button } from './some-other-file'\n\nfunction App() {\n  const styles = useComponent(button)\n\n  return <Box sx={{ ...styles }}>Stuff</Box>\n}\n")),Object(r.b)("h3",{id:"usecomponents"},"useComponents"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useComponents")," hook will return all currently defined variants in the theme."),Object(r.b)("p",null,"\ud83d\udea8 ",Object(r.b)("strong",{parentName:"p"},"Note:")," If you define a ",Object(r.b)("inlineCode",{parentName:"p"},"component")," in a React component that is not currently being rendered, it will not have been injected into the theme at this point and thus will not be returned by ",Object(r.b)("inlineCode",{parentName:"p"},"useComponents"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const components = useComponents()\n")),Object(r.b)("h2",{id:"defining-components-globally"},"Defining components globally"),Object(r.b)("p",null,"If you would prefer to define your components in one single place, you can pass them into the optional ",Object(r.b)("inlineCode",{parentName:"p"},"components")," object when intializing Kodiak UI."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ts"},"const { theme } = createDesignSystem({\n  components: {\n    button: { // styles },\n    link: { // styles },\n  }\n})\n")),Object(r.b)("p",null,"Both ",Object(r.b)("inlineCode",{parentName:"p"},"button")," and ",Object(r.b)("inlineCode",{parentName:"p"},"link")," base styles will be available to all components and can be passed into the ",Object(r.b)("inlineCode",{parentName:"p"},"base")," prop for any Kodiak UI component."))}s.isMDXComponent=!0}}]);