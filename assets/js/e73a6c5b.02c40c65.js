"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[96507],{40809:function(n,e,i){i.r(e),i.d(e,{assets:function(){return r},contentTitle:function(){return o},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return h}});var s=i(85893),t=i(11151);const c={id:"husky",slug:"/husky",title:"husky",authors:"kuizuo",keywords:["code-style","husky"]},o=void 0,l={unversionedId:"skill/code-specification/husky",id:"skill/code-specification/husky",title:"husky",description:"\u4e3a\u4e86\u786e\u4fdd\u53ea\u6709\u5408\u683c\u7684\u4ee3\u7801\u624d\u80fd\u591f\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002\u9700\u8981\u914d\u7f6e\u81ea\u52a8\u5316\u811a\u672c\uff0c\u786e\u4fdd\u4ee3\u7801\u5728\u63d0\u4ea4\u524d\u901a\u8fc7\u4e86\u4ee3\u7801\u9a8c\u8bc1\u5de5\u5177\u7684\u68c0\u9a8c\u3002",source:"@site/docs/skill/code-specification/husky.md",sourceDirName:"skill/code-specification",slug:"/husky",permalink:"/docs/husky",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"husky",slug:"/husky",title:"husky",authors:"kuizuo",keywords:["code-style","husky"]},sidebar:"skill",previous:{title:"editorconfig",permalink:"/docs/editorconfig"},next:{title:"npmrc",permalink:"/docs/npmrc"}},r={},h=[{value:"githooks",id:"githooks",level:2},{value:"\u5728 commit \u63d0\u4ea4\u524d\u6267\u884c lint \u4ee3\u7801\u6821\u9a8c",id:"\u5728-commit-\u63d0\u4ea4\u524d\u6267\u884c-lint-\u4ee3\u7801\u6821\u9a8c",level:3},{value:"\u5728 push \u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5",id:"\u5728-push-\u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5",level:3},{value:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5 commit \u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42",id:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5-commit-\u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42",level:3}];function d(n){const e=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2",h3:"h3",strong:"strong",admonition:"admonition"},(0,t.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u4e3a\u4e86\u786e\u4fdd\u53ea\u6709\u5408\u683c\u7684\u4ee3\u7801\u624d\u80fd\u591f\u63d0\u4ea4\u5230\u4ed3\u5e93\u3002\u9700\u8981\u914d\u7f6e\u81ea\u52a8\u5316\u811a\u672c\uff0c\u786e\u4fdd\u4ee3\u7801\u5728\u63d0\u4ea4\u524d\u901a\u8fc7\u4e86\u4ee3\u7801\u9a8c\u8bc1\u5de5\u5177\u7684\u68c0\u9a8c\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u9645\u4e0a git \u672c\u8eab\u5c31\u8bbe\u8ba1\u4e86\u751f\u547d\u5468\u671f\u94a9\u5b50\u6765\u5b8c\u6210\u8fd9\u4e2a\u4efb\u52a1\u3002\u4f46\u662f\u8bbe\u7f6e\u8fc7\u7a0b\u6bd4\u8f83\u590d\u6742\u3002\u6240\u4ee5\u901a\u5e38\u60c5\u51b5\u4e0b\u4f1a\u4f7f\u7528 husky \u6765\u7b80\u5316\u914d\u7f6e\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://typicode.github.io/husky/#/",children:"Husky"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://git-scm.com/docs/githooks",children:"Git - githooks"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm i husky -D\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4f1a\u521b\u5efa\u4e00\u4e2a npm script"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'npm set-script prepare "husky install"\n'})}),"\n",(0,s.jsx)(e.h2,{id:"githooks",children:"githooks"}),"\n",(0,s.jsx)(e.h3,{id:"\u5728-commit-\u63d0\u4ea4\u524d\u6267\u884c-lint-\u4ee3\u7801\u6821\u9a8c",children:"\u5728 commit \u63d0\u4ea4\u524d\u6267\u884c lint \u4ee3\u7801\u6821\u9a8c"}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4e0b\u65b9\u547d\u4ee4\uff0c\u4ee5\u6dfb\u52a0\u751f\u547d\u5468\u671f\u94a9\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'npx husky add .husky/pre-commit "pnpm lint"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f1a\u521b\u5efa ",(0,s.jsx)(e.code,{children:".husky/pre-commit"})," \u6587\u4ef6\uff0c\u5176\u5185\u5bb9\u5982\u4e0b"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:"title='.husky/pre-commit'",children:'#!/usr/bin/env sh\n. "$(dirname -- "$0")/_/husky.sh"\n\npnpm lint\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u6bcf\u6b21\u63d0\u4ea4\u65f6\uff0c\u90fd\u5c06\u4f1a\u6267\u884c lint \u811a\u672c\u6765\u68c0\u67e5\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u5728-push-\u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5",children:"\u5728 push \u4e4b\u524d\u901a\u8fc7\u5355\u5143\u6d4b\u8bd5"}),"\n",(0,s.jsxs)(e.p,{children:["\u4e0d\u8fc7\u66f4\u591a\u7684\u505a\u6cd5\u90fd\u662f\u7528 ",(0,s.jsx)(e.strong,{children:"github action"})," \u914d\u7f6e CI \u5728\u865a\u62df\u673a\u4e0a\u8dd1\u6d4b\u8bd5\uff0c\u800c\u4e0d\u662f\u672c\u5730\u6d4b\u8bd5\u3002\uff08\u6545\u8fd9\u6b65\u53ef\u7701\u7565\uff09"]}),"\n",(0,s.jsx)(e.p,{children:"\u6267\u884c\u4e0b\u65b9\u547d\u4ee4\uff0c\u4ee5\u6dfb\u52a0\u751f\u547d\u5468\u671f\u94a9\u5b50\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'npx husky add .husky/pre-push "pnpm test"\n'})}),"\n",(0,s.jsx)(e.h3,{id:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5-commit-\u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42",children:"\u63d0\u4ea4\u65f6\u81ea\u52a8\u68c0\u67e5 commit \u4fe1\u606f\u662f\u5426\u7b26\u5408\u8981\u6c42"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://commitlint.js.org/#/?id=getting-started",children:"commitlint - Lint commit messages"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm i -g @commitlint/cli @commitlint/config-conventional\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"echo \"module.exports = {extends: ['@commitlint/config-conventional']}\" > commitlint.config.js\n"})}),"\n",(0,s.jsxs)(e.admonition,{title:"\u6ce8\u610f",type:"caution",children:[(0,s.jsxs)(e.p,{children:["windows \u7cfb\u7edf\u8bf7\u52ff\u4f7f\u7528\u4e0a\u884c\u547d\u4ee4\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u7f16\u7801\u4e0d\u662f UTF-8\u3002\u5efa\u8bae\u76f4\u63a5\u590d\u5236\u6587\u672c\u5185\u5bb9\u5230 ",(0,s.jsx)(e.code,{children:"commitlint.config.js"})]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",metastring:"title='commitlint.config.js'",children:"module.exports = {extends: ['@commitlint/config-conventional']};\n"})})]}),"\n",(0,s.jsx)(e.p,{children:"\u5c06 commitlint \u811a\u672c\u6dfb\u52a0\u5230 githooks \u4e2d\uff0c \u8ba9\u6bcf\u6b21\u63d0\u4ea4\u524d\u90fd\u9a8c\u8bc1\u4fe1\u606f\u662f\u5426\u6b63\u5e38\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'npx husky add .husky/commit-msg "npx --no-install commitlint --edit "$1""\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u5185\u5bb9\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",metastring:"title='.husky/commit-msg'",children:'#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit "$1"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u6d4b\u8bd5 commit \u63d0\u4ea4 ",(0,s.jsx)(e.code,{children:"echo 'foo: bar' | commitlint"})," \u5c06\u4f1a\u62a5\u9519\uff0c\u4e0d\u7b26\u5408 commit msg \u89c4\u8303\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"echo 'foo: bar' | commitlint\n\u29d7   input: foo: bar\u2716   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]\n\n\u2716   found 1 problems, 0 warnings\n\u24d8   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint\n"})})]})}e.default=function(n={}){const{wrapper:e}=Object.assign({},(0,t.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(d,n)})):d(n)}},11151:function(n,e,i){i.d(e,{Zo:function(){return l},ah:function(){return c}});var s=i(67294);const t=s.createContext({});function c(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function l({components:n,children:e,disableParentContext:i}){let l;return l=i?"function"==typeof n?n({}):n||o:c(n),s.createElement(t.Provider,{value:l},e)}}}]);