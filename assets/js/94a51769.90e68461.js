"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[45389],{96160:function(t,e,s){s.r(e),s.d(e,{assets:function(){return l},contentTitle:function(){return a},frontMatter:function(){return n},metadata:function(){return o},toc:function(){return p}});var r=s(85893),i=s(11151);const n={slug:"strapi-user-register-and-login",title:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55",date:new Date("2022-09-03T00:00:00.000Z"),authors:"kuizuo",tags:["strapi","nuxt","next"],keywords:["strapi","nuxt","next"],description:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55"},a=void 0,o={permalink:"/blog/strapi-user-register-and-login",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55.md",source:"@site/blog/program/Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55.md",title:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55",description:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55",date:"2022-09-03T00:00:00.000Z",formattedDate:"2022\u5e749\u67083\u65e5",tags:[{label:"strapi",permalink:"/blog/tags/strapi"},{label:"nuxt",permalink:"/blog/tags/nuxt"},{label:"next",permalink:"/blog/tags/next"}],readingTime:3.933333333333333,hasTruncateMarker:!0,authors:[{name:"\u6127\u600d",title:"\u5168\u6808 typescripter / \u5b66\u751f",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"strapi-user-register-and-login",title:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55",date:"2022-09-03T00:00:00.000Z",authors:"kuizuo",tags:["strapi","nuxt","next"],keywords:["strapi","nuxt","next"],description:"Strapi \u5b9e\u73b0\u7528\u6237\u6ce8\u518c\u4e0e\u767b\u5f55"},unlisted:!1,prevItem:{title:"\u8bb0 Github \u5b66\u751f\u8ba4\u8bc1",permalink:"/blog/github-student-certification"},nextItem:{title:"pnpm monorepo\u5b9e\u8df5",permalink:"/blog/pnpm-monorepo-practice"}},l={authorsImageUrls:[void 0]},p=[{value:"\u521b\u5efa Strapi \u9879\u76ee",id:"\u521b\u5efa-strapi-\u9879\u76ee",level:2},{value:"\u89d2\u8272\u5217\u8868",id:"\u89d2\u8272\u5217\u8868",level:3},{value:"\u6743\u9650\u5206\u914d",id:"\u6743\u9650\u5206\u914d",level:3},{value:"\u9ed8\u8ba4\u89d2\u8272",id:"\u9ed8\u8ba4\u89d2\u8272",level:3},{value:"\u7ba1\u7406\u5458\u6743\u9650",id:"\u7ba1\u7406\u5458\u6743\u9650",level:3},{value:"\u4f7f\u7528 HTTP \u8bf7\u6c42\u7528\u6237\u64cd\u4f5c\uff08\u901a\u7528\uff09",id:"\u4f7f\u7528-http-\u8bf7\u6c42\u7528\u6237\u64cd\u4f5c\u901a\u7528",level:2},{value:"Nuxt",id:"nuxt",level:2},{value:"Next",id:"next",level:2}];function c(t){const e=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",strong:"strong",img:"img",tabs:"tabs",tabitem:"tabitem",pre:"pre",code:"code",admonition:"admonition"},(0,i.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u5728\u5b98\u65b9\u535a\u5ba2 ",(0,r.jsx)(e.a,{href:"https://strapi.io/blog/registration-and-login-authentication-with-vue-js-and-strapi-1",children:"Registration and Login (Authentication) with Vue.js and Strapi"})," \u4e2d\u6f14\u793a\u5982\u4f55\u5b9e\u73b0\u6ce8\u518c\u4e0e\u767b\u5f55\u3002\u5b9e\u9645\u91cd\u70b9\u90e8\u5206\u662f Strapi \u7684",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html",children:"\u89d2\u8272\u548c\u6743\u9650\u63d2\u4ef6"}),"\uff0c\u53ef\u4ee5\u8bf4\u8fd9\u4e2a\u63d2\u4ef6\u8ba9\u5f00\u53d1\u8005\u4e0d\u7528\u518d\u4e3a\u9879\u76ee\u8003\u8651\u7684\u7528\u6237\u767b\u5f55\u6ce8\u518c\u4e0e\u9274\u6743\u76f8\u5173\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u6b64\u5916\u8fd9\u91cc\u6709\u4e2a\u5728\u7ebf\u793a\u4f8b\u53ef\u4f9b\u4f53\u9a8c\uff1a",(0,r.jsx)(e.a,{href:"https://vitesse-nuxt3-strapi.vercel.app",children:"Vitesse Nuxt 3 Strapi"})]}),"\n",(0,r.jsx)(e.h2,{id:"\u521b\u5efa-strapi-\u9879\u76ee",children:"\u521b\u5efa Strapi \u9879\u76ee"}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc\u7701\u7565\u521b\u5efa strapi \u9879\u76ee\u521b\u5efa\u8fc7\u7a0b\uff0c\u5177\u4f53\u53ef\u5230 ",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/getting-started/quick-start.html",children:"Quick Start Guide"})," \u4e2d\u67e5\u770b\u3002\u521b\u5efa\u5b8c\u9879\u76ee\uff0c\u5e76\u6ce8\u518c\u7ba1\u7406\u5458\u8d26\u53f7\u540e\uff0c\u6253\u5f00\u7ba1\u7406\u9762\u677f\uff0c\u6839\u636e\u81ea\u5df1\u9700\u6c42\u521b\u5efa\u6570\u636e\u3002\u4e0b\u9762\u4f1a\u4ecb\u7ecd\u4e0b\u7ba1\u7406\u9762\u677f\u7684\u4e00\u4e9b\u64cd\u4f5c\uff08\u4ee5\u4e0b\u9488\u5bf9\u4e2d\u6587\u9762\u677f\uff09"]}),"\n",(0,r.jsx)(e.h3,{id:"\u89d2\u8272\u5217\u8868",children:"\u89d2\u8272\u5217\u8868"}),"\n",(0,r.jsxs)(e.p,{children:["\u6253\u5f00 ",(0,r.jsx)(e.strong,{children:"\u8bbe\u7f6e => \u7528\u6237\u53ca\u6743\u9650\u63d2\u4ef6 => \u89d2\u8272\u5217\u8868"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20220825131929320.png",alt:"image-20220825131929320"})}),"\n",(0,r.jsx)(e.p,{children:"\u9ed8\u8ba4\u6709\u4e24\u4e2a\u89d2\u8272 Authenticated \u4e0e Pubilc\uff0c\u90fd\u4e0d\u53ef\u5220\u9664\uff0c\u5176\u4e2d\u8fd8\u6709\u4e00\u4e2a Admin \u662f\u6211\u81ea\u5df1\u521b\u5efa\u7684\u89d2\u8272\uff0c\u7528\u4e8e\u5206\u914d\u7ba1\u7406\u5458\u7684\u6743\u9650\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["Authenticated \u5bf9\u5e94\u7684\u4e5f\u5c31\u662f\u767b\u5f55\u540e\u7684\u89d2\u8272\uff0c\u5373\u643a\u5e26 ",(0,r.jsx)(e.strong,{children:"Authorization"})," \u534f\u8bae\u5934\u643a\u5e26 jwt \u7684\u7528\u6237\u3002"]}),"\n",(0,r.jsx)(e.p,{children:"\u53e6\u4e00\u4e2a Pubilc \u5219\u662f\u672a\u6388\u6743\u7528\u6237\uff0c\u9ed8\u8ba4\u6743\u9650\u5982\u4e0b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20220825132235027.png",alt:"image-20220825132235027"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6743\u9650\u5206\u914d",children:"\u6743\u9650\u5206\u914d"}),"\n",(0,r.jsx)(e.p,{children:"\u53cc\u51fb\u89d2\u8272\u53ef\u4ee5\u5230\u6743\u9650\u5206\u914d\u9875\u9762\uff0c\u6bd4\u65b9\u8bf4\u6211\u60f3\u7ed9 Authenticated \u89d2\u8272\u5206\u914d Restaurant \u8868\u4e2d\u67e5\u8be2\u6570\u636e\uff0c\u5c31\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u9009\u9879\u4e2d\u52fe\u9009\uff0c\u5e76\u4e14\u52fe\u9009\u5176\u4e2d\u4e00\u4e2a\u6743\u9650\uff08\u589e\u5220\u6539\u67e5\uff09\u53ef\u4ee5\u5728\u53f3\u4fa7\u770b\u5230\u5bf9\u5e94\u7684\u8bf7\u6c42 api \u63a5\u53e3\uff08\u8def\u7531\uff09"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20220825132716257.png",alt:"image-20220825132716257"})}),"\n",(0,r.jsx)(e.h3,{id:"\u9ed8\u8ba4\u89d2\u8272",children:"\u9ed8\u8ba4\u89d2\u8272"}),"\n",(0,r.jsxs)(e.p,{children:["\u53ef\u4ee5\u5728 ",(0,r.jsx)(e.strong,{children:"\u8bbe\u7f6e => \u7528\u6237\u53ca\u6743\u9650\u63d2\u4ef6 => \u9ad8\u7ea7\u8bbe\u7f6e"})," \u4e2d\u5206\u914d\u9ed8\u8ba4\u89d2\u8272\uff0c\u6b64\u5916\u8fd9\u91cc\u8fd8\u53ef\u4ee5\u914d\u7f6e\u6ce8\u518c\uff0c\u91cd\u7f6e\u5bc6\u7801\u7b49\u64cd\u4f5c\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u529f\u80fd\u800c\u8a00\uff0c\u4f20\u7edf\u5f00\u53d1\u5c31\u9700\u8981\u7f16\u5199\u76f8\u5f53\u591a\u7684\u4ee3\u7801\u4e86\uff0c\u800c Strapi \u7684 ",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html",children:"\u89d2\u8272\u548c\u6743\u9650"})," \u63d2\u4ef6\u80fd\u7701\u53bb\u5f00\u53d1\u8fd9\u4e00\u90e8\u5206\u529f\u80fd\u7684\u65f6\u95f4\u3002"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{src:"https://img.kuizuo.cn/image-20220825132948740.png",alt:"image-20220825132948740"})}),"\n",(0,r.jsx)(e.h3,{id:"\u7ba1\u7406\u5458\u6743\u9650",children:"\u7ba1\u7406\u5458\u6743\u9650"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728 ",(0,r.jsx)(e.strong,{children:"\u8bbe\u7f6e => \u7ba1\u7406\u5458\u6743\u9650"})," \u4e5f\u53ef\u4ee5\u770b\u5230\u89d2\u8272\u5217\u8868\u4e0e\u7528\u6237\u5217\u8868\uff0c\u4e0d\u8fc7\u8fd9\u4e2a\u53ea\u9488\u5bf9\u767b\u5f55 strapi \u4eea\u8868\u76d8\u7684\u7528\u6237\uff0c\u4e0e\u5b9e\u9645\u4e1a\u52a1\u7684\u7528\u6237\u6beb\u4e0d\u76f8\u5e72\u3002\u901a\u4fd7\u70b9\u8bf4\u5c31\u662f\u6570\u636e\u5e93\u7cfb\u7edf\u7684\u7528\u6237\u4e0e\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u7528\u6237\u7684\u533a\u522b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u4e00\u5f00\u59cb\u767b\u5f55\u9762\u677f\u521b\u5efa\u7684\u7528\u6237\u5728 ",(0,r.jsx)(e.strong,{children:"\u8bbe\u7f6e => \u7ba1\u7406\u5458\u6743\u9650 => \u7528\u6237\u5217\u8868"})," \u4e2d\u53ef\u4ee5\u770b\u5230\uff0c\u800c\u901a\u8fc7api ",(0,r.jsx)(e.a,{href:"http://localhost:1337/api/auth/local/register",children:"http://localhost:1337/api/auth/local/register"})," \u6ce8\u518c\u7684\u7528\u6237\u5219\u662f\u5728 ",(0,r.jsx)(e.strong,{children:"\u5185\u5bb9\u7ba1\u7406 => User"})," \u4e2d\u67e5\u770b\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528-http-\u8bf7\u6c42\u7528\u6237\u64cd\u4f5c\u901a\u7528",children:"\u4f7f\u7528 HTTP \u8bf7\u6c42\u7528\u6237\u64cd\u4f5c\uff08\u901a\u7528\uff09"}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u91cc\u5148\u7ed9\u51fa\u5b98\u65b9\u63d0\u4f9b\u7684\u6ce8\u518c\u548c\u767b\u5f55\u5730\u5740\uff0c\u5206\u522b\u662f\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"http://localhost:1337/api/auth/local/register",children:"http://localhost:1337/api/auth/local/register"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"http://localhost:1337/api/auth/local",children:"http://localhost:1337/api/auth/local"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5206\u522b\u53ef\u5728 ",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#login",children:"Login"})," \u4e0e ",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#registration",children:"Register"})," \u4e2d\u67e5\u770b\u5b98\u65b9\u6f14\u793a\u4f8b\u5b50\uff0c\u4f8b\u5982"]}),"\n",(0,r.jsx)(e.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,r.jsxs)(e.tabs,{children:["\n",(0,r.jsxs)(e.tabitem,{value:"login",label:"\u767b\u5f55",default:!0,children:["\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:"{4}",children:"import axios from 'axios';\n\n// Request API.\naxios.post('http://localhost:1337/api/auth/local', {\n    identifier: 'user@strapi.io',\n    password: 'strapiPassword',\n  })\n  .then((response) => {\n    // Handle success.\n    console.log('Well done!');\n    console.log('User profile', response.data.user);\n    console.log('User token', response.data.jwt);\n  })\n  .catch((error) => {\n    // Handle error.\n    console.log('An error occurred:', error.response);\n  });\n"})}),"\n"]}),"\n",(0,r.jsxs)(e.tabitem,{value:"register",label:"\u6ce8\u518c",children:["\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",metastring:"{4}",children:"import axios from 'axios';\n\n// Request API.\naxios.post('http://localhost:1337/api/auth/local/register', {\n    username: 'Strapi user',\n    email: 'user@strapi.io',\n    password: 'strapiPassword',\n  })\n  .then((response) => {\n    // Handle success.\n    console.log('Well done!');\n    console.log('User profile', response.data.user);\n    console.log('User token', response.data.jwt);\n  })\n  .catch((error) => {\n    // Handle error.\n    console.log('An error occurred:', error.response);\n  });\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["\u9664\u4e86\u767b\u5f55\u5916\uff0c\u8fd8\u6709\u51e0\u4e2aapi\u53ef\u80fd\u8fd8\u4f1a\u7528\u5230\u5982\u83b7\u53d6\u4e2a\u4eba\u4fe1\u606f\uff0c\u91cd\u7f6e\u5bc6\u7801\uff0c\u4fee\u6539\u5bc6\u7801\uff0c\u53d1\u9001\u90ae\u7bb1\u9a8c\u8bc1\u7b49\u7b49\u3002\u66f4\u591a\u53ef\u5230 ",(0,r.jsx)(e.a,{href:"https://docs.strapi.io/developer-docs/latest/plugins/users-permissions.html#authentication",children:"Roles & Permissions"})," \u4e2d\u67e5\u770b"]}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7 HTTP \u8fd9\u79cd\u65b9\u6848\u53ef\u4ee5\u8bf4\u662f\u6700\u901a\u7528\u7684\u4e86\uff0c\u4e0d\u8fc7\u6709\u4e9b\u6846\u67b6\u8fd8\u63d0\u4f9b\u76f8\u5e94\u7684\u6a21\u5757\u6765\u8c03\u7528 Strapi\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"nuxt",children:"Nuxt"}),"\n",(0,r.jsxs)(e.p,{children:["\u5b98\u65b9 Nuxt3 \u63d0\u4f9b\u4e86 hooks \u65b9\u6848\u4f7f\u7528 Strapi\u3002\u5177\u4f53\u53ef\u770b ",(0,r.jsx)(e.a,{href:"https://strapi.nuxtjs.org/",children:"Nuxt Strapi Module"}),"\u3002Nuxt2 \u53ef\u770b",(0,r.jsx)(e.a,{href:"https://strapi-v0.nuxtjs.org/hooks",children:"\u8fd9\u91cc"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u76f8\u5e94\u7684 hooks \u5c31\u53ef\u4ee5\u5b9e\u73b0\u767b\u5f55\u6ce8\u518c\u4ee5\u53ca\u6570\u636e\u589e\u5220\u6539\u67e5\u7684\u529f\u80fd\uff0c\u6f14\u793a\u4f8b\u5b50\u53ef\u770b ",(0,r.jsx)(e.a,{href:"https://strapi.nuxtjs.org/usage",children:"Usage"})]}),"\n",(0,r.jsxs)(e.p,{children:["\u8fd9\u91cc\u6709\u4e00\u4efd\u6211\u521b\u5efa\u7684\u9884\u8bbe\u6a21\u677f ",(0,r.jsx)(e.a,{href:"https://github.com/kuizuo/vitesse-nuxt3-strapi",children:"kuizuo/vitesse-nuxt3-strapi"}),"\uff0c\u4e00\u5f00\u59cb\u7684\u793a\u4f8b\u4e5f\u662f\u57fa\u4e8e\u8fd9\u4e2a\u6a21\u677f\u6765\u642d\u5efa\u7684\u3002\u4e0d\u8fc7\u76ee\u524d Strapi \u5bf9 TypeScript \u652f\u6301\u4e0d\u662f\u90a3\u4e48\u53cb\u597d\uff0c\u5c24\u5176\u5728 window \u4e0b\u4f1a\u51fa\u73b0\u65e0\u6cd5\u8fd0\u884c\u7684\u60c5\u51b5\uff0c\u8be6\u770b\u8fd9\u4e2a ",(0,r.jsx)(e.a,{href:"https://github.com/strapi/strapi/pull/14088",children:"pr"}),"\u3002\u6240\u4ee5\u76ee\u524d backend \u4f7f\u7528 js \u521b\u5efa\uff0c\u7136\u540e\u589e\u52a0 ts \u76f8\u5173\u652f\u6301\u7684\uff0c\u6240\u4ee5\u6709\u4e9b ts \u652f\u6301\u53ef\u80fd\u4e0d\u662f\u90a3\u4e48\u53cb\u597d\u3002"]}),"\n",(0,r.jsxs)(e.admonition,{type:"note",children:[(0,r.jsxs)(e.p,{children:["\u539f\u672c\u6211\u8003\u8651\u7684\u662f\u4f7f\u7528 starter \u65b9\u5f0f\u6765\u521b\u5efanuxt3 strapi\u9879\u76ee\uff0c\u4f46\u662f\u5c31\u5728\u6211\u521b\u5efa\u5b8c starter \u4e0e template \u51c6\u5907\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"yarn create strapi-starter strapi-nuxt3 https://github.com/kuizuo/strapi-starter-nuxt3"})," \u4e0b\u8f7d\u6a21\u677f\u65f6\uff0c\u4e0d\u51fa\u610f\u5916\u53c8\u51fa\u610f\u5916\u7684\u62a5\u9519\u4e86\uff0c\u7531\u4e8e\u8fd9\u4e2a\u62a5\u9519\u4e5f\u4e0d\u597d\u6392\u67e5\u5c31\u6682\u65f6\u653e\u5f03\u4e86\u3002"]}),(0,r.jsx)(e.p,{children:"\u603b\u4e4b\u53c8\u662f\u4e00\u8d9f\u767d\u6298\u817e\u7684\u7ecf\u8fc7\u3002"})]}),"\n",(0,r.jsx)(e.h2,{id:"next",children:"Next"}),"\n",(0,r.jsxs)(e.p,{children:["Next \u6211\u6682\u672a\u627e\u5230\u76f8\u5173\u5e93\u53ef\u4ee5\u50cf Nuxt \u63d0\u4f9b Strapi \u7684\u670d\u52a1\u3002\u4e0d\u8fc7 Strapi \u5b98\u65b9\u6709\u63d0\u4f9b ",(0,r.jsx)(e.a,{href:"https://github.com/strapi/strapi-sdk-javascript",children:"sdk"}),"\u7684\u65b9\u6848\u6765\u8c03\u7528 strapi \u670d\u52a1\uff0c\u800c\u4e0d\u7528\u53d1\u9001 http \u8bf7\u6c42\u7684\u5f62\u5f0f\u6765\u8c03\u7528\uff0c\u5177\u4f53\u53ef\u4ee5\u5230\u5b98\u65b9\u63d0\u4f9b\u7684 ",(0,r.jsx)(e.a,{href:"https://github.com/strapi/strapi-sdk-javascript",children:"sdk"})," \u67e5\u770b\u5982\u4f55\u4f7f\u7528\uff0c\u8fd9\u91cc\u4e0d\u505a\u6f14\u793a\u3002\u6709\u5982\u4e0b\u4e24\u4e2aSDK\u53ef\u4f9b\u9009\u62e9\uff1a"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/strapi/strapi-sdk-javascript",children:"strapi/strapi-sdk-javascript"})," \u5b98\u7f51"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://strapi-sdk-js.netlify.app/",children:"Strapi SDK (strapi-sdk-js.netlify.app)"})," \u793e\u533a"]})]})}e.default=function(t={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(c,t)})):c(t)}},11151:function(t,e,s){s.d(e,{Zo:function(){return o},ah:function(){return n}});var r=s(67294);const i=r.createContext({});function n(t){const e=r.useContext(i);return r.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const a={};function o({components:t,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof t?t({}):t||a:n(t),r.createElement(i.Provider,{value:o},e)}}}]);