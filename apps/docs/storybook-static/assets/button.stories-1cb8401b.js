import{M,A as k,C as D,e as L}from"./chunk-PCJTTTQV-869be234.js";import{r as h}from"./index-ebeaab24.js";import{u as g}from"./index-bda0bad7.js";import"./iframe-9894f566.js";import"../sb-preview/runtime.js";import"./index-287110cf.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-356e4a49.js";var y={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=h,R=Symbol.for("react.element"),T=Symbol.for("react.fragment"),F=Object.prototype.hasOwnProperty,P=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function _(t,e,i){var n,r={},s=null,a=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(n in e)F.call(e,n)&&!A.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:R,type:t,key:s,ref:a,props:r,_owner:P.current}}u.Fragment=T;u.jsx=_;u.jsxs=_;y.exports=u;var d=y.exports;const H=d.Fragment,o=d.jsx,v=d.jsxs,b=({icon:t,iconPosition:e="left",loading:i=!1,tooltip:n,variant:r="success",size:s="medium",children:a,className:C="",...S})=>{const[q,f]=h.useState(!1),j="transition ease-in-out duration-150 flex items-center justify-center rounded-lg bg-transparent border-1 active:translate-y-0.5",c={success:"green",danger:"red",warning:"yellow",info:"blue"}[r],E={small:"text-sm px-2 py-1",medium:"text-base px-4 py-2",large:"text-lg px-6 py-3",xlarge:"text-xl px-8 py-4"}[s]||"",O={small:"p-1",medium:"p-2",large:"p-3",xlarge:"p-4"}[s]||"",$=c?`border-${c} text-${c} hover:bg-${c} hover:text-base`:"",B=`${j} ${$} ${!a&&(t||i)?O:E} ${C}`,p=i?o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-4 w-4 animate-spin",children:o("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}):t&&t;return v("button",{className:B,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),...S,children:[p&&e==="left"&&p,o("span",{className:`${a?"mx-2":""}`,children:a}),p&&e==="right"&&p]})},l=b;b.displayName="Button";function x(t){const e=Object.assign({h1:"h1",p:"p",h2:"h2"},g(),t.components);return v(H,{children:[o(M,{title:"Components/Button",component:l}),`
`,o(e.h1,{id:"button",children:"Button"}),`
`,o(e.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisl nunc egestas nisi, euismod aliquam nisl nunc euismod."}),`
`,o(e.h2,{id:"props",children:"Props"}),`
`,o(k,{of:l}),`
`,o(e.h2,{id:"examples",children:"Examples"}),`
`,o(D,{children:o(L,{name:"Default",children:o(l,{children:"Hello"})})})]})}function X(t={}){const{wrapper:e}=Object.assign({},g(),t.components);return e?o(e,{...t,children:o(x,{...t})}):x(t)}const w=()=>o(l,{children:"Hello"});w.storyName="Default";w.parameters={storySource:{source:'<Button>{"Hello"}</Button>'}};const m={title:"Components/Button",component:l,tags:["stories-mdx"],includeStories:["defaultStory"]};m.parameters=m.parameters||{};m.parameters.docs={...m.parameters.docs||{},page:X};const V=["defaultStory"];export{V as __namedExportsOrder,m as default,w as defaultStory};
//# sourceMappingURL=button.stories-1cb8401b.js.map
