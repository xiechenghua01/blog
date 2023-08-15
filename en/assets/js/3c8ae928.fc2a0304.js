"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[60617],{65086:function(e,n,s){s.r(n),s.d(n,{assets:function(){return t},contentTitle:function(){return o},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return l}});var r=s(85893),a=s(11151);const c={id:"querystring-and-json-convert",slug:"/querystring-and-json-convert",title:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c",date:new Date("2022-03-15T00:00:00.000Z"),authors:"kuizuo",tags:["http","javascript"],keywords:["http","javascript"]},o=void 0,i={unversionedId:"skill/js/querystring-and-json-convert",id:"skill/js/querystring-and-json-convert",title:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c",description:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e JSON \u4e92\u8f6c",source:"@site/docs/skill/js/\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c.md",sourceDirName:"skill/js",slug:"/querystring-and-json-convert",permalink:"/en/docs/querystring-and-json-convert",draft:!1,unlisted:!1,tags:[{label:"http",permalink:"/en/docs/tags/http"},{label:"javascript",permalink:"/en/docs/tags/javascript"}],version:"current",frontMatter:{id:"querystring-and-json-convert",slug:"/querystring-and-json-convert",title:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0eJSON\u4e92\u8f6c",date:"2022-03-15T00:00:00.000Z",authors:"kuizuo",tags:["http","javascript"],keywords:["http","javascript"]},sidebar:"skill",previous:{title:"\u5e38\u7528util.js",permalink:"/en/docs/commonly-used-util.js"},next:{title:"\u91cd\u6784\u4e4b\u591a\u6001\u6d88\u9664\u6761\u4ef6\u5206\u652f",permalink:"/en/docs/polymorphic-elimination-conditional-branching-refactor"}},t={},l=[{value:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e JSON \u4e92\u8f6c",id:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c",level:2},{value:"querystring",id:"querystring",level:3},{value:"\u4f7f\u7528\u6b63\u5219\u4e0e array.reduce",id:"\u4f7f\u7528\u6b63\u5219\u4e0e-arrayreduce",level:3},{value:"URLSearchParams",id:"urlsearchparams",level:3},{value:"Cookie \u4e0e JSON \u4e92\u8f6c",id:"cookie-\u4e0e-json-\u4e92\u8f6c",level:2}];function d(e){const n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h3:"h3"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e-json-\u4e92\u8f6c",children:"\u67e5\u8be2\u5b57\u7b26\u4e32\u4e0e JSON \u4e92\u8f6c"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u53d1\u9001 HTTP \u8bf7\u6c42\u7684\u65f6\u5019\uff0c\u8981\u6a21\u62df\u4e00\u4e2a\u767b\u5f55\u8bf7\u6c42\u7684\u5305\uff0c\u800c\u6293\u5230\u5f97\u5305\u5982\u4e0b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-http",children:"POST https://xxx.xxx.com/xxx/login HTTP/1.1\nHost: xxx.xxx.com\nConnection: keep-alive\nUpgrade-Insecure-Requests: 1\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3775.400 QQBrowser/10.6.4208.400\nAccept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8\nContent-Type: application/x-www-form-urlencoded\n\nusername=kuizuo&password=a12345678\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f46\u662f\u6211\u8981\u6a21\u62df\u8fd9\u6837\u7684\u8bf7\u6c42\u5c31\u8981\u5199\u6210\u5982\u4e0b\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let url = 'https://xxx.xxx.com/xxx/login'\nlet username = 'kuizuo'\nlet password = 'a12345678'\n\nlet data = 'username=' + username + '&password=' + password\n// or\n// let data = `username=${username}&password=${password}`\n\naxios.post(url, data).then(function (res) {\n  console.log(res.data)\n})\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u50cf\u8fd9\u79cd ",(0,r.jsx)(n.code,{children:"username=kuizuo&password=a12345678"}),"\u5c31\u79f0\u4e4b\u4e3a\u67e5\u8be2\u5b57\u7b26\u4e32\u3002\u663e\u800c\u6613\u89c1\uff0c\u5982\u679c\u6d89\u53ca\u5230\u7684\u53c2\u6570\u4e00\u591a\u4fee\u6539\u663e\u5f97\u5341\u5206\u4e0d\u53ef\u9760\uff08",(0,r.jsx)(n.strong,{children:"\u6781\u6613\u6539\u9519"}),"\uff09\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u4ee5\u4e00\u822c\u7684\u505a\u6cd5\u90fd\u662f\u5c06 data \u7528 js \u5bf9\u8c61\u6216\u8005\u7528 json \u683c\u5f0f\u8868\u793a\uff0c\u50cf\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let username = 'kuizuo'\nlet password = 'a12345678'\nlet data = {\n  username: username,\n  password: password,\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8fc7\u8bf7\u6c42\u5934\u662f",(0,r.jsx)(n.code,{children:"Content-Type: application/x-www-form-urlencoded"}),"\uff0c\u90a3\u4e48\u5c31\u9700\u8981\u4f7f\u7528\u5de5\u5177\u5c06\u5176\u8f6c\u5316\u4e3a\u67e5\u8be2\u5b57\u7b26\u4e32\u4e86\u3002\u6bd4\u65b9\u8bf4 node \u4e2d\u81ea\u5e26\u7684 ",(0,r.jsx)(n.a,{href:"http://nodejs.cn/api/querystring.html",children:"querystring"})," \u5e93\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"querystring",children:"querystring"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const qs = require('querystring')\n\nlet obj = {\n  username: 'kuizuo',\n  password: 'a12345678',\n}\nlet data = qs.stringify(obj)\n// username=kuizuo&password=a12345678\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const qs = require('querystring')\n\nlet data = 'username=kuizuo&password=a12345678'\nlet json = qs.parse(data)\n// { username: 'kuizuo', password: 'a12345678' }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4f7f\u7528\u6b63\u5219\u4e0e-arrayreduce",children:"\u4f7f\u7528\u6b63\u5219\u4e0e array.reduce"}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86\u501f\u7528 querystring \u5e93\u4e4b\u5916\uff0c\u5b9e\u9645\u8fd8\u53ef\u4ee5\u901a\u8fc7\u6b63\u5219\u5339\u914d\u4e0e",(0,r.jsx)(n.code,{children:"array.reduce()"}),"\uff0c\u5c06\u67e5\u8be2\u5b57\u7b26\u4e32 js \u5bf9\u8c61\u3002\u8fd9\u91cc\u5c31\u653e\u4e00\u4e0b\u5bf9\u5e94\u7684\u4ee3\u7801\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function qs2Json(str) {\n  return (str.match(/([^=&]+)(=([^&]*))/g) || []).reduce((a, val) => ((a[val.slice(0, val.indexOf('='))] = val.slice(val.indexOf('=') + 1)), a), {})\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"js \u5bf9\u8c61\u8f6c\u67e5\u8be2\u5b57\u7b26\u4e32\u5c31\u76f8\u5bf9\u7b80\u5355\u8bb8\u591a\u4e86\uff0c\u53ea\u9700\u8981\u5bf9 js \u5bf9\u8c61\u904d\u5386\uff0c\u7136\u540e\u4f7f\u7528\u4f7f\u7528&\u62fc\u63a5\u5373\u53ef\u3002\u5177\u4f53\u8f6c\u5316\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function json2Qs(obj) {\n  return Object.keys(obj)\n    .map((key) => {\n      return key + '=' + obj[key]\n    })\n    .join('&')\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u8fc7\u8fd9\u91cc\u904d\u5386\u7684\u65f6\u5019\u8fd8\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e9b\u5224\u65ad\u7684\uff0c\u6bd4\u5982",(0,r.jsx)(n.code,{children:"if (obj[key] === undefined) return ''"}),"\uff0c\u5982\u679c\u952e\u503c\u672a\u5b9a\u4e49\u5c31\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u6e05\u9664\u6570\u7ec4\u4e00\u4e9b\u4e3a\u7a7a\u5b57\u7b26\u4e32\u6216 null \u7b49\u503c\uff0c\u8fd9\u91cc\u6211\u5c31\u4e0d\u505a\u8fc7\u591a\u5224\u65ad\u4e86\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u81f3\u4e8e\u8981\u8f6c\u6210 json \u683c\u5f0f\u5b57\u7b26\u4e32\u8fd8\u662f\u89e3\u6790 \u901a\u8fc7",(0,r.jsx)(n.code,{children:"JSON.stringify"})," \u4e0e ",(0,r.jsx)(n.code,{children:"JSON.parse"}),"\u5373\u53ef\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u6f14\u793a\u4e86\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u7ec8\u4e24\u8005\u7684\u6267\u884c\u6548\u679c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let obj = qs2Json('username=kuizuo&password=a12345678')\n// {username: \"kuizuo\", password: \"a12345678\"}\n\nlet param = json2Qs({ username: 'kuizuo', password: 'a12345678' })\n// username=kuizuo&password=a12345678\n"})}),"\n",(0,r.jsx)(n.h3,{id:"urlsearchparams",children:"URLSearchParams"}),"\n",(0,r.jsxs)(n.p,{children:["\u9664\u4e86 querystring\uff0c\u5b9e\u9645\u4e0a\u8fd8\u6709\u4e00\u4e2a\u66f4\u597d\u7684\u5e93 ",(0,r.jsx)(n.a,{href:"http://nodejs.cn/api/url.html#class-urlsearchparams",children:"URLSearchParams"}),"\uff0c\u5177\u4f53\u7684\u4f7f\u7528\u5982\u4e0b"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const params = new URLSearchParams({\n  user: 'abc',\n  query: 'xyz',\n})\nconsole.log(params.toString())\n// 'user=abc&query=xyz'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"let params = new URLSearchParams('user=abc&query=xyz')\nlet json = {}\nfor (const [key, value] of newSearchParams) {\n  json[key] = value\n}\nconsole.log(json)\n// { user: 'abc', query: 'xyz' }\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5173\u4e8e",(0,r.jsx)(n.code,{children:"URLSearchParams"}),"\u66f4\u591a\u7684\u53ef\u4ee5\u53bb\u5b98\u65b9\u67e5\u770b\uff0c\u4e3b\u8981\u662f\u9488\u5bf9 url \u7684\u4e00\u4e2a\u64cd\u4f5c\uff0c\u4e0d\u8fc7\u6211\u4e2a\u4eba\u66f4\u503e\u5411\u4e8e\u4f7f\u7528",(0,r.jsx)(n.code,{children:"querystring"}),"\uff0c\u4e3b\u8981\u539f\u56e0\u8fd8\u662f",(0,r.jsx)(n.code,{children:"URLSearchParams"}),"\u5bf9\u4e2d\u6587\u4f7f\u7528\u7684\u662f js \u4e2d\u7684",(0,r.jsx)(n.code,{children:"encodeURIComponent"}),"\u4e0e",(0,r.jsx)(n.code,{children:"decodeURIComponent"}),"\uff0c\u4e5f\u5c31\u662f",(0,r.jsx)(n.code,{children:"UTF8"}),"\u7f16\u7801\uff0c\u5982\u679c\u662f",(0,r.jsx)(n.code,{children:"GBK"}),"\u7f16\u7801\u5c31\u4f1a\u7f16\u7801\u9519\u8bef\u3002\u800c",(0,r.jsx)(n.code,{children:"querystring"}),"\u53ef\u4ee5\u6307\u5b9a\u7f16\u7801\uff08\u9488\u5bf9 gbk \u7684 url \u7f16\u89e3\u7801\u6709\u4e2a",(0,r.jsx)(n.a,{href:"https://www.npmjs.com/package/gbk-nice",children:"gbk-nice"}),"\u7684\u5e93 \u4e5f\u5c31\u662f gbk \u7248\u7684",(0,r.jsx)(n.code,{children:"encodeURIComponent"}),"\uff09"]}),"\n",(0,r.jsx)(n.h2,{id:"cookie-\u4e0e-json-\u4e92\u8f6c",children:"Cookie \u4e0e JSON \u4e92\u8f6c"}),"\n",(0,r.jsx)(n.p,{children:"\u9664\u4e86\u67e5\u8be2\u5b57\u7b26\u4e32\u9700\u8981\u4e92\u8f6c\uff0ccookie \u6570\u636e\u4e5f\u53ef\u80fd\u9700\u8981\u4e92\u8f6c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"Cookie: _uuid=E4842E42-D3DC-2425-C598-231821AB344B39943infoc; buvid3=C844F66D-EC25-4712-8FF3-A0B65DF172C6155806infoc; sid=cvzaog1s; DedeUserID=35745471; DedeUserID__ckMd5=24ac8c69051043f3; SESSDATA=fc469231%2C1608969153%2C1bd79*61;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u8f6c\u5316\u4e3a\u4e0b\u9762\u7684\u65b9\u5f0f"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "_uuid": "E4842E42-D3DC-2425-C598-231821AB344B39943infoc",\n  "buvid3": "C844F66D-EC25-4712-8FF3-A0B65DF172C6155806infoc",\n  "sid": "cvzaog1s",\n  "DedeUserID": "35745471",\n  "DedeUserID__ckMd5": "24ac8c69051043f3",\n  "SESSDATA": "fc469231%2C1608969153%2C1bd79*61"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u4e3b\u8981\u662f\u4fee\u6539 qs2Json \u4e0e json2Qs \u8fd9\u4e24\u4e2a\u65b9\u6cd5\uff0c\u653e\u4e0a\u5bf9\u5e94\u7684 js \u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"function cookies2Obj(cookies) {\n  return cookies.split('; ').reduce((a, val) => ((a[val.slice(0, val.indexOf('=')).trim()] = val.slice(val.indexOf('=') + 1).trim()), a), {})\n}\n\nfunction obj2Cookies(obj) {\n  return Object.keys(obj)\n    .map((key) => {\n      return key + '=' + obj[key]\n    })\n    .join('; ')\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6548\u679c\u5c31\u8bf7\u8bfb\u8005\u81ea\u884c\u5c1d\u8bd5\u4e86\u3002"})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},11151:function(e,n,s){s.d(n,{Zo:function(){return i},ah:function(){return c}});var r=s(67294);const a=r.createContext({});function c(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:c(e),r.createElement(a.Provider,{value:i},n)}}}]);