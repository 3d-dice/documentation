"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1147:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(3117),o=n(102),l=(n(7294),n(3905)),a=["components"],c={sidebar_position:4},i="Callbacks",s={unversionedId:"usage/callbacks",id:"usage/callbacks",title:"Callbacks",description:"onDieComplete",source:"@site/docs/usage/callbacks.md",sourceDirName:"usage",slug:"/usage/callbacks",permalink:"/docs/usage/callbacks",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/callbacks.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docs",previous:{title:"Methods",permalink:"/docs/usage/methods"},next:{title:"Themes",permalink:"/docs/themes"}},u={},p=[{value:"onDieComplete",id:"ondiecomplete",level:2},{value:"onRollComplete",id:"onrollcomplete",level:2},{value:"onRemoveComplete",id:"onremovecomplete",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"callbacks"},"Callbacks"),(0,l.kt)("h2",{id:"ondiecomplete"},"onDieComplete"),(0,l.kt)("p",null,"This callback is triggered whenever an individual die has completed rolling and contains the die result object as it's argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onDieComplete = (dieResult) => console.log('die result', dieResult)\n")),(0,l.kt)("h2",{id:"onrollcomplete"},"onRollComplete"),(0,l.kt)("p",null,"This callback is triggered whenever all the dice have finished rolling and/or the physics simulation has been stopped and contains the roll result object as it's argument."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onRollComplete = (rollResult) => console.log('roll results', rollResult)\n")),(0,l.kt)("h2",{id:"onremovecomplete"},"onRemoveComplete"),(0,l.kt)("p",null,"This callback is triggered whenever a die has been removed from the scene and contains the die result object that was removed as it's argument.."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"diceBox.onRemoveComplete = (dieResult) => console.log('die removed', dieResult)\n")))}m.isMDXComponent=!0}}]);