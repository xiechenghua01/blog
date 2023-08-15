"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[27886],{1688:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return c},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return o}});var s=t(85893),l=t(11151);const a={id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:new Date("2021-01-07T00:00:00.000Z"),tags:["mysql","database"],keywords:["mysql","database"]},c=void 0,r={unversionedId:"skill/database/mysql/mysql-replace-function",id:"skill/database/mysql/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",description:"1\u3001\u524d\u8a00",source:"@site/docs/skill/database/mysql/Mysql\u66ff\u6362\u51fd\u6570replace.md",sourceDirName:"skill/database/mysql",slug:"/mysql-replace-function",permalink:"/docs/mysql-replace-function",draft:!1,unlisted:!1,tags:[{label:"mysql",permalink:"/docs/tags/mysql"},{label:"database",permalink:"/docs/tags/database"}],version:"current",frontMatter:{id:"mysql-replace-function",slug:"/mysql-replace-function",title:"mysql\u66ff\u6362\u51fd\u6570replace",date:"2021-01-07T00:00:00.000Z",tags:["mysql","database"],keywords:["mysql","database"]},sidebar:"skill",previous:{title:"MySql\u7b14\u8bb0",permalink:"/docs/skill/database/mysql"},next:{title:"mysql\u6a21\u7cca\u67e5\u8be2like\u4f18\u5316",permalink:"/docs/mysql-like-optimization"}},i={},o=[{value:"1\u3001\u524d\u8a00",id:"1\u524d\u8a00",level:2},{value:"2\u3001\u66ff\u6362\u51fd\u6570 replace()",id:"2\u66ff\u6362\u51fd\u6570-replace",level:2}];function d(e){const n=Object.assign({h2:"h2",p:"p",img:"img",blockquote:"blockquote",a:"a",pre:"pre",code:"code"},(0,l.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"1\u524d\u8a00",children:"1\u3001\u524d\u8a00"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u521d\u8bbe\u8ba1\u9898\u5e93\u6570\u636e\u5e93\u65f6\uff0c\u6ca1\u8003\u8651\u5468\u5168\uff0c\u5b58\u5728\u591a\u9898\u76ee\uff0c\u9898\u76ee\u4e0d\u6807\u51c6\uff0c\u6bd4\u5982\u4e0b\u9762\u8fd9\u6837"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20210107044832103.png",alt:"image-20210107044832103"})}),"\n",(0,s.jsx)(n.p,{children:"\u9898\u76ee\u524d\u9762\u7684\u3010\u5355\u9009\u9898\u3011\u3010\u5224\u65ad\u9898\u3011\u600e\u4e48\u80fd\u5fcd\uff0c\u4e8e\u662f\u5c31\u767e\u5ea6 mysql \u6587\u672c\u66ff\u6362 \u7b2c\u4e00\u7bc7\u6587\u7ae0\u5c31\u89e3\u51b3\u4e86\u6211\u7684\u95ee\u9898\uff0c\u4e8e\u662f\u6211\u4e5f\u987a\u624b\u8bb0\u5f55\u4e00\u4e0b\uff0c\u4ee5\u9632\u4e0b\u6b21\u4f7f\u7528"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u53c2\u8003\u94fe\u63a5 ",(0,s.jsx)(n.a,{href:"https://blog.csdn.net/qq_36663951/article/details/78791138",children:"mysql \u66ff\u6362\u51fd\u6570 replace()\u5b9e\u73b0 mysql \u66ff\u6362\u6307\u5b9a\u5b57\u6bb5\u4e2d\u7684\u5b57\u7b26\u4e32"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2\u66ff\u6362\u51fd\u6570-replace",children:"2\u3001\u66ff\u6362\u51fd\u6570 replace()"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u5173\u952e\u7684\u4e5f\u5c31\u662f\u8fd9\u4e2a\u51fd\u6570\u4e86\uff0c\u5148\u770b\u770b\u6211\u7684 SQL \u8bed\u53e5\u662f\u600e\u4e48\u5199\u7684"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"UPDATE `kz_answer` SET `topic` = replace (`topic`,'\u3010\u5355\u9009\u9898\u3011','') WHERE `topic` LIKE '%\u3010\u5355\u9009\u9898\u3011%'\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u5b9e\u4e5f\u5c31\u662f UPDATE \u66f4\u65b0\u8bed\u53e5\uff0c\u7136\u540e\u901a\u8fc7 WHERE \u5b50\u53e5\u4e0e LIKE \u6a21\u7cca\u5224\u65ad\uff0c\u6700\u540e\u5c06\u5b57\u6bb5\u7ed9\u4fee\u6539\u4e86\u3002\u4f1a\u70b9 MySQL \u7684\u4e0a\u9762\u4ee3\u7801\u4e00\u773c\u5c31\u61c2\uff0c\u4e0d\u5199\u4e86\uff0c\u8fd8\u8981\u6298\u817e\u9898\u5e93\u63a5\u53e3\u548c\u9898\u5e93\u5b58\u50a8\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8be5\u51fd\u6570\u662f\u591a\u5b57\u8282\u5b89\u5168\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4f60\u4e0d\u7528\u8003\u8651\u662f\u4e2d\u6587\u5b57\u7b26\u8fd8\u662f\u82f1\u6587\u5b57\u7b26\u3002"})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,l.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},11151:function(e,n,t){t.d(n,{Zo:function(){return r},ah:function(){return a}});var s=t(67294);const l=s.createContext({});function a(e){const n=s.useContext(l);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:a(e),s.createElement(l.Provider,{value:r},n)}}}]);