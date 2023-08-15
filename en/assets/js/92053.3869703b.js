(self.webpackChunkblog=self.webpackChunkblog||[]).push([[92053],{92053:function(e,t,n){"use strict";n.d(t,{Z:function(){return Q}});var o=n(63366),r=n(67294),a=n(51048),s=n(86010),c=n(9200),i=n(20107);function l(){var e=(0,i.L)().prism,t=(0,c.I)().colorMode,n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var u=n(23702),d=n(87099),p=n(87594),m=n.n(p),f=(0,d.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),g=(0,d.Z)(/\{([\d,-]+)\}/,{range:1}),h={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"},lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""}};function v(e,t){var n=e.map((function(e){var n=h[e],o=n.start,r=n.end;return"(?:"+o+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function y(e,t){var n=e.replace(/\n$/,""),o=t.language,r=t.magicComments,a=t.metastring;if(a&&g.test(a)){var s=a.match(g).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+a+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=r[0].className,i=m()(s).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===o)return{lineClassNames:{},code:n};for(var l=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return v(["js","jsBlock"],t);case"jsx":case"tsx":return v(["js","jsBlock","jsx"],t);case"html":return v(["js","jsBlock","html"],t);case"python":case"py":case"bash":return v(["bash"],t);case"markdown":case"md":return v(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return v(["tex"],t);case"lua":case"haskell":case"sql":return v(["lua"],t);case"wasm":return v(["wasm"],t);default:return v(Object.keys(h).filter((function(e){return!["lua","wasm","tex","latex","matlab"].includes(e)})),t)}}(o,r),u=n.split("\n"),d=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),p=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),y=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),b=0;b<u.length;){var k=u[b].match(l);if(k){var j=k.slice(1).find((function(e){return void 0!==e}));p[j]?d[p[j]].range+=b+",":f[j]?d[f[j]].start=b:y[j]&&(d[y[j]].range+=d[y[j]].start+"-"+(b-1)+","),u.splice(b,1)}else b+=1}n=u.join("\n");var x={};return Object.entries(d).forEach((function(e){var t=e[0],n=e[1].range;m()(n).forEach((function(e){null!=x[e]||(x[e]=[]),x[e].push(t)}))})),{lineClassNames:x,code:n}}var b={codeBlockContainer:"codeBlockContainer_Ckt0"},k=n(85893),j=["as"];function x(e){var t=e.as,n=(0,o.Z)(e,j),r=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var o=e[0],r=e[1],a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(l());return(0,k.jsx)(t,Object.assign({},n,{style:r,className:(0,s.Z)(n.className,b.codeBlockContainer,u.k.common.codeBlock)}))}var B={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){var t=e.children,n=e.className;return(0,k.jsx)(x,{as:"pre",tabIndex:0,className:(0,s.Z)(B.codeBlockStandalone,"thin-scrollbar",n),children:(0,k.jsx)("code",{className:B.codeBlockLines,children:t})})}var w=n(58755),C={attributes:!0,characterData:!0,childList:!0,subtree:!0};function L(e,t){var n=(0,r.useState)(),o=n[0],a=n[1],s=(0,r.useCallback)((function(){var t;a(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((function(){s()}),[s]),function(e,t,n){void 0===n&&(n=C);var o=(0,w.zX)(t),a=(0,w.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(o);return e&&t.observe(e,a),function(){return t.disconnect()}}),[e,o,a])}(o,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var E={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},O={Prism:n(87410).Z,theme:E};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},S.apply(this,arguments)}var I=/\r\n|\r|\n/,_=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},P=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function A(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var Z=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=S({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=S({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=S({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?S({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),T(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),T(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=S({},A(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?S({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),T(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,c=[],i=[c];s>-1;){for(;(a=o[s]++)<r[s];){var l=void 0,u=t[s],d=n[s][a];if("string"==typeof d?(u=s>0?u:["plain"],l=d):(u=P(u,d.type),d.alias&&(u=P(u,d.alias)),l=d.content),"string"==typeof l){var p=l.split(I),m=p.length;c.push({types:u,content:p[0]});for(var f=1;f<m;f++)_(c),i.push(c=[]),c.push({types:u,content:p[f]})}else s++,t.push(u),n.push(l),o.push(0),r.push(l.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return _(c),i}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),W=Z,z={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function D(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,r=e.getLineProps,a=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var c=r({line:t,className:(0,s.Z)(n,o&&z.codeLine)}),i=t.map((function(e,t){return(0,k.jsx)("span",Object.assign({},a({token:e,key:t})),t)}));return(0,k.jsxs)("span",Object.assign({},c,{children:[o?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("span",{className:z.codeLineNumber}),(0,k.jsx)("span",{className:z.codeLineContent,children:i})]}):i,(0,k.jsx)("br",{})]}))}var H=n(97325);function M(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})}))}function V(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})}))}var R={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function q(e){var t=e.code,n=e.className,o=(0,r.useState)(!1),a=o[0],c=o[1],i=(0,r.useRef)(void 0),l=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,o=void 0===n?document.body:n;if("string"!=typeof e)throw new TypeError("Expected parameter `text` to be a `string`, got `"+typeof e+"`.");var r=document.createElement("textarea"),a=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var s=document.getSelection(),c=s.rangeCount>0&&s.getRangeAt(0);o.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(l){}r.remove(),c&&(s.removeAllRanges(),s.addRange(c)),a&&a.focus()}(t),c(!0),i.current=window.setTimeout((function(){c(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(i.current)}}),[]),(0,k.jsx)("button",{type:"button","aria-label":a?(0,H.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,H.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,H.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,R.copyButton,a&&R.copyButtonCopied),onClick:l,children:(0,k.jsxs)("span",{className:R.copyButtonIcons,"aria-hidden":"true",children:[(0,k.jsx)(M,{className:R.copyButtonIcon}),(0,k.jsx)(V,{className:R.copyButtonSuccessIcon})]})})}function F(e){return(0,k.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,k.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})}))}var $={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function G(e){var t=e.className,n=e.onClick,o=e.isEnabled,r=(0,H.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,k.jsx)("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,o&&$.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,k.jsx)(F,{className:$.wordWrapButtonIcon,"aria-hidden":"true"})})}function J(e){var t,n,o,a,c,u,d,p,m,g,h,v=e.children,b=e.className,j=void 0===b?"":b,N=e.metastring,w=e.title,C=e.showLineNumbers,E=e.language,T=(0,i.L)().prism,S=T.defaultLanguage,I=T.magicComments,_=null!=(t=null!=E?E:null==(n=j.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:S,P=l(),A=(o=(0,r.useState)(!1),a=o[0],c=o[1],u=(0,r.useState)(!1),d=u[0],p=u[1],m=(0,r.useRef)(null),g=(0,r.useCallback)((function(){var e=m.current.querySelector("code");a?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),c((function(e){return!e}))}),[m,a]),h=(0,r.useCallback)((function(){var e=m.current,t=e.scrollWidth>e.clientWidth||m.current.querySelector("code").hasAttribute("style");p(t)}),[m]),L(m,h),(0,r.useEffect)((function(){h()}),[a,h]),(0,r.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:m,isEnabled:a,isCodeScrollable:d,toggle:g}),Z=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(f))?void 0:n.groups.title)?t:""}(N)||w,z=y(v,{metastring:N,language:_,magicComments:I}),H=z.lineClassNames,M=z.code,V=null!=C?C:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(N);return(0,k.jsxs)(x,{as:"div",className:(0,s.Z)(j,_&&!j.includes("language-"+_)&&"language-"+_),children:[Z&&(0,k.jsx)("div",{className:B.codeBlockTitle,children:Z}),(0,k.jsxs)("div",{className:B.codeBlockContent,children:[(0,k.jsx)(W,Object.assign({},O,{theme:P,code:M,language:null!=_?_:"text",children:function(e){var t=e.className,n=e.tokens,o=e.getLineProps,r=e.getTokenProps;return(0,k.jsx)("pre",{tabIndex:0,ref:A.codeBlockRef,className:(0,s.Z)(t,B.codeBlock,"thin-scrollbar"),children:(0,k.jsx)("code",{className:(0,s.Z)(B.codeBlockLines,V&&B.codeBlockLinesWithNumbering),children:n.map((function(e,t){return(0,k.jsx)(D,{line:e,getLineProps:o,getTokenProps:r,classNames:H[t],showLineNumbers:V},t)}))})})}})),(0,k.jsxs)("div",{className:B.buttonGroup,children:[(A.isEnabled||A.isCodeScrollable)&&(0,k.jsx)(G,{className:B.codeButton,onClick:function(){return A.toggle()},isEnabled:A.isEnabled}),(0,k.jsx)(q,{className:B.codeButton,code:M})]})]})]})}var K=["children"];function Q(e){var t=e.children,n=(0,o.Z)(e,K),s=(0,a.Z)(),c=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),i="string"==typeof c?J:N;return(0,k.jsx)(i,Object.assign({},n,{children:c}),String(s))}},87594:function(e,t){function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);