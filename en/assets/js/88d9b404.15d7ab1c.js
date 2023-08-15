"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[47698],{74088:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var s=t(85893),r=t(11151);const i={slug:"next.js-build-and-deploy",title:"Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72",date:new Date("2022-07-13T00:00:00.000Z"),authors:"kuizuo",tags:["next","react","ssr","vercel"],keywords:["next","react","ssr","vercel"],draft:!1},a=void 0,d={permalink:"/en/blog/next.js-build-and-deploy",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72.md",source:"@site/blog/program/Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72.md",title:"Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72",description:"\u5b98\u65b9\u6587\u6863 Getting Started | Next.js (nextjs.org)",date:"2022-07-13T00:00:00.000Z",formattedDate:"July 13, 2022",tags:[{label:"next",permalink:"/en/blog/tags/next"},{label:"react",permalink:"/en/blog/tags/react"},{label:"ssr",permalink:"/en/blog/tags/ssr"},{label:"vercel",permalink:"/en/blog/tags/vercel"}],readingTime:7,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"next.js-build-and-deploy",title:"Next.js\u9879\u76ee\u642d\u5efa\u4e0e\u90e8\u7f72",date:"2022-07-13T00:00:00.000Z",authors:"kuizuo",tags:["next","react","ssr","vercel"],keywords:["next","react","ssr","vercel"],draft:!1},unlisted:!1,prevItem:{title:"api-service \u63a5\u53e3\u670d\u52a1",permalink:"/en/blog/use-nuxt3-build-api-server"},nextItem:{title:"\u5199\u4e00\u4e2a VSCode \u6269\u5c55",permalink:"/en/blog/vscode-extension"}},l={authorsImageUrls:[void 0]},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u8def\u7531",id:"\u8def\u7531",level:2},{value:"\u6570\u636e\u6e32\u67d3",id:"\u6570\u636e\u6e32\u67d3",level:2},{value:"CSR \u5ba2\u6237\u7aef\u6e32\u67d3",id:"csr-\u5ba2\u6237\u7aef\u6e32\u67d3",level:3},{value:"SSR \u670d\u52a1\u7aef\u6e32\u67d3",id:"ssr-\u670d\u52a1\u7aef\u6e32\u67d3",level:3},{value:"SSG \u9759\u6001\u751f\u6210",id:"ssg-\u9759\u6001\u751f\u6210",level:3},{value:"ISR \u589e\u91cf\u5f0f\u9759\u6001\u751f\u6210",id:"isr-\u589e\u91cf\u5f0f\u9759\u6001\u751f\u6210",level:3},{value:"api \u63a5\u53e3",id:"api-\u63a5\u53e3",level:2},{value:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684 CRUD",id:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684-crud",level:3},{value:"\u6253\u5305\u90e8\u7f72",id:"\u6253\u5305\u90e8\u7f72",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}];function o(e){const n=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code",img:"img",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",strong:"strong",admonition:"admonition",h3:"h3",del:"del"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u5b98\u65b9\u6587\u6863 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/getting-started",children:"Getting Started | Next.js (nextjs.org)"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u5b89\u88c5",children:(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/getting-started#automatic-setup",children:"\u5b89\u88c5"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npx create-next-app@latest --ts\n# or\nyarn create next-app --typescript\n# or\npnpm create next-app --ts\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd0\u884c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npm run dev\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u9879\u76ee\u7ed3\u6784",children:"\u9879\u76ee\u7ed3\u6784"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220712030637300.png",alt:"image-20220712030637300"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u6587\u4ef6"}),(0,s.jsx)(n.th,{children:"\u5185\u5bb9"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pages"}),(0,s.jsx)(n.td,{children:"\u9875\u9762\u6587\u4ef6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pages/api"}),(0,s.jsx)(n.td,{children:"api \u6570\u636e\u63a5\u53e3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"public"}),(0,s.jsx)(n.td,{children:"\u9759\u6001\u8d44\u6e90\u6587\u4ef6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"styles"}),(0,s.jsx)(n.td,{children:"\u6837\u5f0f\u6587\u4ef6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"next-env.d.ts"}),(0,s.jsx)(n.td,{children:"\u786e\u4fdd typescript \u652f\u6301"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"next.config.ts"}),(0,s.jsx)(n.td,{children:"next \u914d\u7f6e\u6587\u4ef6"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8def\u7531",children:"\u8def\u7531"}),"\n",(0,s.jsxs)(n.p,{children:["nextjs \u6709\u4e00\u4e2a\u57fa\u4e8e\u9875\u9762\u6982\u5ff5\u7684\u6587\u4ef6\u7cfb\u7edf\u8def\u7531\u5668\uff0c\u5b58\u653e\u5728 pages \u4e0b",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".jsx"}),", ",(0,s.jsx)(n.code,{children:".ts"}),", ",(0,s.jsx)(n.code,{children:".tsx"})," \u6587\u4ef6\u90fd\u5c06\u4f5c\u4e3a\u7ec4\u4ef6\uff0c\u5373",(0,s.jsx)(n.strong,{children:"\u6587\u4ef6\u8def\u5f84 \u2192 \u9875\u9762\u8def\u7531"}),"\uff0c\u4f8b\u5982\u8fd9\u91cc\u7684 index.tsx \u6620\u5c04\u4e3a index\uff0c",(0,s.jsx)(n.code,{children:"pages/about.js"})," \u5c06\u6620\u5c04\u4e3a ",(0,s.jsx)(n.code,{children:"/about"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u540c\u65f6\u8fd8\u652f\u6301\u52a8\u6001\u8def\u7531\uff0c\u521b\u5efa",(0,s.jsx)(n.code,{children:"pages/user/[id].tsx"}),"\u6587\u4ef6\uff0c\u7136\u540e\u8bbf\u95ee",(0,s.jsx)(n.code,{children:"user/1"}),"\uff0c",(0,s.jsx)(n.code,{children:"user/2"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="[id].tsx"',children:"import { useRouter } from 'next/router'\n\nconst User = () => {\n  const router = useRouter()\n  const { id } = router.query\n\n  return <div>User id:{id} </div>\n}\n\nexport default User\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u65f6\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"http://localhost:3000/user/1",children:"http://localhost:3000/user/1"})," \u4fbf\u53ef\u5f97\u5230 ",(0,s.jsx)(n.code,{children:"User ID: 1"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728 router \u5bf9\u8c61\u4e0b\u6ca1\u6709 param \u5c5e\u6027\uff0c\u90fd\u662f\u5b58\u653e\u5728 query \u53c2\u6570\u4e2d\uff0c\u4f8b\u5982\u8bbf\u95ee user/1?username=kuizuo\uff0c\u6b64\u65f6\u7684 query \u503c\u4e3a ",(0,s.jsx)(n.code,{children:"{username: 'kuizuo', id: '2'}"})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u4e0d\u8fc7\u8fd9\u91cc\u6709\u4e2a\u6bd4\u8f83\u6709\u610f\u601d\u7684\u70b9\uff0c\u5982\u679c\u4f60\u5728\u4e0a\u65b9\u4ee3\u7801\u4e2d\u4f7f\u7528 console.log \u6253\u5370 query \u7684\u8bdd\uff0c\u5728 vscode \u4e2d\u4f1a\u6253\u5370\u51fa\u7a7a\u5bf9\u8c61",(0,s.jsx)(n.code,{children:"{}"}),"\uff0c\u800c\u5728\u6d4f\u89c8\u5668\u4e2d\u4f1a\u6253\u5370\u4e00\u6b21\u7a7a\u5bf9\u8c61\uff0c\u4e00\u6b21\u771f\u5b9e\u7684 query \u5bf9\u8c61\uff08\u5e76\u4e14\u6253\u5370\u4e24\u904d\uff09"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220712191356587.png",alt:"image-20220712191356587"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u6e32\u67d3",children:"\u6570\u636e\u6e32\u67d3"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6253\u5f00\u63a7\u5236\u53f0\uff0c\u67e5\u770b\u6240\u8fd4\u56de\u7684\u9875\u9762\uff0c\u4f60\u4f1a\u53d1\u73b0\u54cd\u5e94\u4e2d\u53ea\u6709 User id:\uff0c\u8fd9\u4e0d\u5c31\u548c react \u7684 CSR(\u5ba2\u6237\u7aef)\u6e32\u67d3\u6ca1\u6709\u533a\u522b\u5417\uff0c\u662f\u7684\uff0c\u786e\u5b9e\u662f\u8fd9\u6837\u3002\u56e0\u4e3a\u4e0a\u4e00\u90e8\u5206\u7684\u4ee3\u7801\uff0c\u5e76\u4e14\u4ece\u8f93\u51fa query \u4e5f\u53ef\u4ee5\u770b\u7684\u51fa\u6765\u800c\u4e0d\u662f SSR(\u670d\u52a1\u7aef)\u6e32\u67d3\u3002\u9996\u5148\u6211\u8981\u5c55\u793a\u4e00\u4e0b\u4e24\u8005\u6e32\u67d3\u7684\u4ee3\u7801"}),"\n",(0,s.jsx)(n.h3,{id:"csr-\u5ba2\u6237\u7aef\u6e32\u67d3",children:"CSR \u5ba2\u6237\u7aef\u6e32\u67d3"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="[id].tsx"',children:"import { useEffect, useState } from 'react'\nimport { useRouter } from 'next/router'\n\nconst User = () => {\n  const router = useRouter()\n  const { id } = router.query\n\n  const [data, setData] = useState({\n    username: '',\n    email: '',\n  })\n\n  useEffect(() => {\n    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)\n      .then((res) => res.json())\n      .then((data) => {\n        setData(data)\n      })\n      .catch((err) => {})\n  }, [id])\n\n  return (\n    <div>\n      <p>username:{data.username} </p>\n      <p>email:{data.email} </p>\n    </div>\n  )\n}\n\nexport default User\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7ecf\u5e38\u5199 react \u7684\u80af\u5b9a\u5bf9\u4e0a\u9762\u7684\u4ee3\u7801\u4e0d\u964c\u751f\uff0c\u524d\u7aef\u5411\u540e\u7aef\u53d1\u9001\u6570\u636e\u8bf7\u6c42\uff0c\u63a5\u53d7\u5230\u6570\u636e\u540e\u8d4b\u503c\u7ed9 data\uff0c\u7136\u540e\u6e32\u67d3\u51fa\u6765\u3002\u56e0\u4e3a\u8bf7\u6c42\u6570\u636e\u662f\u9700\u8981\u8017\u65f6\u7684\uff0c\u6240\u4ee5\u5728\u9875\u9762\u663e\u793a\u5b8c\u4e4b\u540e\uff0c\u4f1a\u505c\u987f\u4e00\u4f1a\u5728\u663e\u793a\u51fa\u6570\u636e\uff08\u4e3b\u8981\u662f\u6211\u8fd9\u8fb9\u6ca1\u5199 loadding\uff09\uff0c\u5e76\u4e14\u7531\u4e8e id \u5e76\u4e0d\u662f\u7b2c\u4e00\u65f6\u95f4\u83b7\u53d6\u5230\u7684\uff08\u4ece\u4e0a\u9762\u7684 id\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220712193009186.png",alt:"image-20220712193009186"})}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u8fd9\u91cc\u6765\u770b\uff0c\u5ba2\u6237\u7aef\u6e32\u67d3\u4e0d\u4ec5\u8981\u83b7\u53d6\u9875\u9762\u7ec4\u4ef6\uff0c\u8fd8\u8981\u8bf7\u6c42\u6570\u636e\uff0c\u6700\u7ec8\u518d\u901a\u8fc7 js \u6e32\u67d3\u51fa\u6765"}),"\n",(0,s.jsx)(n.h3,{id:"ssr-\u670d\u52a1\u7aef\u6e32\u67d3",children:"SSR \u670d\u52a1\u7aef\u6e32\u67d3"}),"\n",(0,s.jsx)(n.p,{children:"next \u4e2d\u670d\u52a1\u7aef\u6e32\u67d3\u9700\u8981\u7528\u5230 getServerSideProps \u51fd\u6570\uff0c\u800c\u540e\u7aef\u7684\u6570\u636e\u83b7\u53d6\u90fd\u662f\u5728\u8be5\u51fd\u6570\u5185\u6765\u83b7\u53d6\uff0c\u5e76\u901a\u8fc7 prop \u4f20\u5165\u7ed9\u524d\u7aef\u7ec4\u4ef6\u4e2d\uff0c\u6765\u770b\u5b9e\u9645\u4ee3\u7801"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="[id].tsx"',children:"const User = ({ data }: { data: any }) => {\n  return (\n    <div>\n      <p>username:{data.username} </p>\n      <p>email:{data.email} </p>\n    </div>\n  )\n}\n\nexport default User\n\nexport async function getServerSideProps(context: { query: { id: any } }) {\n  const { id } = context.query // \u8fd9\u91cccontext.param\u4e5f\u80fd\u83b7\u53d6\u5230id\n\n  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)\n\n  const data = await res.json()\n\n  return {\n    props: {\n      data,\n    },\n  }\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4ece\u9875\u9762\u663e\u793a\u6765\u770b\uff0c\u786e\u5b9e\u6ca1\u4ec0\u4e48\u533a\u522b\uff0c\u4f46\u5982\u679c\u6253\u5f00\u63a7\u5236\u53f0\u5c31\u80fd\u53d1\u73b0\u8bf8\u591a\u4e0d\u540c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u9996\u5148\u5c31\u662f\u8bf7\u6c42\u7684\u9875\u9762\uff0c\u662f\u76f4\u63a5\u5305\u542b\u6570\u636e\uff0c\u76f8\u5f53\u4e8e\u8fd4\u56de\u4f60\u4e00\u4e2a\u9875\u9762\uff0c\u800c\u5728\u5ba2\u6237\u7aef\u6e32\u67d3\u5219\u662f\u8fd4\u56de\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u9700\u8981\u81ea\u5df1\u53bb\u8bf7\u6c42\u6570\u636e\u6765\u5c55\u793a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220712192713634.png",alt:"image-20220712192713634"})}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u65f6\u67e5\u770b\u63a7\u5236\u53f0\u4e2d\u7684 Fetch/XHR \u7684\u662f\u770b\u4e0d\u5230\u8bf7\u6c42\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\u6570\u636e\u5e76\u4e0d\u662f\u7531\u524d\u7aef\u53d1\u9001\u7684,\u800c\u662f\u7531\u540e\u7aef\u53d1\u9001\u7684\uff08\u6545\u4e0d\u53d7\u8de8\u57df\u8bf7\u6c42\u7684\u9650\u5236\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4ece\u8fd9\u5c31\u80fd\u770b\u51fa\u5ba2\u6237\u7aef\u6e32\u67d3\u4e0e\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u7684\u533a\u522b\u4e86\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"ssg-\u9759\u6001\u751f\u6210",children:"SSG \u9759\u6001\u751f\u6210"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0d\u8fc7\u8fd8\u6ca1\u5b8c\uff0c\u8fd8\u6709\u4e00\u4e2a\u9759\u6001\u751f\u6210\uff0c\u5148\u6765\u770b\u770b\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="[id].tsx"',children:"const User = ({ data }: { data: any }) => {\n  return (\n    <div>\n      <p>username:{data.username} </p>\n      <p>email:{data.email} </p>\n    </div>\n  )\n}\n\nexport default User\n\nexport async function getStaticProps(context: { params: { id: any } }) {\n  const { id } = context.params\n\n  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)\n\n  const data = await res.json()\n\n  return {\n    props: {\n      data,\n    },\n  }\n}\n\nexport async function getStaticPaths() {\n  return {\n    paths: new Array(20).fill(0).map((a, i) => ({ params: { id: String(i + 1) } })),\n    fallback: 'blocking',\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3b\u8981\u662f getServerSideProps \u66ff\u6362\u6210 getStaticProps\uff0c\u540c\u65f6\u589e\u52a0\u4e86\u4e00\u4e2a getStaticPaths \u7528\u4e8e\u751f\u6210\u9759\u6001\u9875\u9762\u7684\uff0c\u800c\u4e0a\u9762\u7684 getStaticPaths \u8868\u793a\u751f\u6210 id 1 \u5230 20 \u7684\u9875\u9762\uff0c\u90a3\u5047\u8bbe\u5982\u679c\u6211\u8bbf\u95ee id \u4e3a 21 \u7684 user \u5462\uff1f\u7531\u4e8e\u8fd9\u91cc\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"fallback: 'blocking'"}),"\uff0c\u6240\u4ee5\u8fd8\u662f\u4f1a\u8d70\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u90a3\u4e00\u90e8\u5206\u3002\u4f46\u5982\u679c\u8bbe\u7f6e",(0,s.jsx)(n.code,{children:"fallback: fasle"}),"\uff0c\u8bbf\u95ee user/21 \u5c31\u4f1a\u63d0\u793a 404\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u4fd7\u70b9\u6765\u8bf4\u5c31\u5c31\u662f\u751f\u6210\u4e00\u7cfb\u5217\u9759\u6001\u9875\u9762\uff0c\u4e0d\u9700\u8981\u670d\u52a1\u7aef\u5904\u7406\uff0c\u6240\u4ee5\u8fd4\u56de\u7684\u901f\u5ea6\u66f4\u5feb\uff0c\u5176\u7f3a\u70b9\u5176\u5b9e\u4e5f\u6bd4\u8f83\u660e\u663e\uff0c\u6570\u636e\u7684\u4efb\u4f55\u66f4\u6539\u90fd\u9700\u8981\u5728\u670d\u52a1\u7aef\u91cd\u65b0\u6784\u5efa\uff0c\u800c\u670d\u52a1\u7aef\u6e32\u67d3\u5219\u662f\u53ef\u4ee5\u52a8\u6001\u5904\u7406\u6570\u636e\uff0c\u4e0d\u9700\u8981\u5b8c\u5168\u91cd\u5efa\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"isr-\u589e\u91cf\u5f0f\u9759\u6001\u751f\u6210",children:"ISR \u589e\u91cf\u5f0f\u9759\u6001\u751f\u6210"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0d\u505a\u8fc7\u591a\u4ecb\u7ecd\uff0c\u8be6\u770b\u6587\u6863 ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration",children:"Data Fetching: Incremental Static Regeneration | Next.js (nextjs.org)"})]}),"\n",(0,s.jsx)(n.h2,{id:"api-\u63a5\u53e3",children:"api \u63a5\u53e3"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u9762\u7684\u6570\u636e\u90fd\u662f\u8c03\u7528 ",(0,s.jsx)(n.a,{href:"http://jsonplaceholder.typicode.com/",children:"JSONPlaceholder"})," \u6240\u63d0\u4f9b\u7684\u865a\u62df\u6570\u636e\uff0c\u5728 next \u4e2d\u8981\u63d0\u4f9b\u6570\u636e\u63a5\u53e3\u7684\u8bdd\uff0c\u53ea\u9700\u8981\u5728 pages/api \u4e0b\u7f16\u5199\u5373\u53ef\uff0c\u751f\u6210\u7684\u8def\u7531\u89c4\u5219\u548c\u7ec4\u4ef6\u4e00\u6837\u3002\u4f8b\u5982 pages/api/hello.ts \u6620\u5c04\u4e3a api/hello\uff0c\u6d4f\u89c8\u5668\u8bbf\u95ee",(0,s.jsx)(n.a,{href:"http://localhost:3000/api/hello",children:"http://localhost:3000/api/hello"})," \u5c31\u53ef\u4ee5\u5f97\u5230",(0,s.jsx)(n.code,{children:'{"name": "John Doe"}'})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="hello.ts"',children:"import type { NextApiRequest, NextApiResponse } from 'next'\n\ntype Data = {\n  name: string\n}\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {\n  res.status(200).json({ name: 'John Doe' })\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u7684 req\u3001res \u5c31\u662f\u540c\u5927\u90e8\u5206 node \u540e\u7aef\u6846\u67b6\u4e00\u6837\uff0c\u800c\u8fd9\u91cc\u7684\u5199\u6cd5\u4e0e serverless \u4e00\u81f4\uff08\u8fd9\u91cc\u5e94\u8be5\u5c31\u662f serverless\uff09\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0a\u8ff0\u662f get \u8bf7\u6c42\uff0c\u90a3 post \u8bf7\u6c42\u5462\uff1f\u65e0\u8bba\u4ec0\u4e48 http \u8bf7\u6c42\u65b9\u6cd5\u90fd\u5c06\u5728 handler \u5904\u7406\uff0c\u901a\u8fc7 req.method \u6765\u83b7\u53d6\u8bf7\u6c42\u65b9\u6cd5\uff0c\u8981\u533a\u5206\u7684\u8bdd\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"export default function handler(req, res) {\n  if (req.method === 'POST') {\n    // Process a POST request\n  } else {\n    // Handle any other HTTP method\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684-crud",children:"\u5199\u4e00\u4e2a\u7b80\u5355\u7684 CRUD"}),"\n",(0,s.jsx)(n.p,{children:"\u65e2\u7136\u77e5\u9053\u4e86\u4e0a\u8ff0\u7684\u4e00\u4e9b\u4f5c\u7528\uff0c\u4e0d\u59a8\u6765\u4e2a\u719f\u6089\u7684 CRUD\u3002\u8fd9\u91cc\u4ee5\u6587\u7ae0 post \u4e3a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u6570\u636e\u7aef\u4f7f\u7528\u7684\u65f6 sqlite\uff0c\u914d\u7f6e\u4e0d\u505a\u5c55\u793a\uff0c\u53ea\u5c55\u793a\u4e3b\u8981\u6838\u5fc3\u529f\u80fd"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="api/post/index.ts"',children:"import type { NextApiRequest, NextApiResponse } from 'next'\nimport db from '../../../lib/db'\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  try {\n    switch (req.method) {\n      case 'GET':\n        db.all(`select * from post`, (err, rows) => {\n          res.status(200).json(rows)\n        })\n        break\n      case 'POST':\n        const { title, content } = req.body\n\n        db.get(`insert into post(title, content) values(?, ?)`, [title, content], (err, rows) => {\n          res.status(200).json(rows)\n        })\n        break\n    }\n  } catch (error) {\n    res.status(500).end()\n  }\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",metastring:'title="api/post/[id].ts"',children:"import type { NextApiRequest, NextApiResponse } from 'next'\nimport db from '../../../lib/db'\n\nexport default function handler(req: NextApiRequest, res: NextApiResponse) {\n  const { id } = req.query\n  const { title, content } = req.body\n\n  try {\n    switch (req.method) {\n      case 'GET':\n        db.get(`select * from post where id=$id`, { $id: id }, (err, rows) => {\n          res.status(200).json(rows)\n        })\n        break\n      case 'Put':\n        db.get(`update post set title=?,content=? where id=?`, [title, content, id], (err, rows) => {\n          res.status(200).json(rows)\n        })\n      case 'DELETE':\n        db.get(`delete from post where id=$id`, { $id: id }, (err, rows) => {\n          res.status(200).json(rows)\n        })\n    }\n  } catch (error) {\n    res.status(500).end()\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u91cc\u4e3a\u4e86\u7b26\u5408 RESTFUL \u98ce\u683c\uff0c\u6240\u4ee5 post \u4e0b\u7f16\u5199\u4e86\u4e24\u4e2a\u6587\u4ef6\uff0c\u8fd9\u65f6\u5019\u8bf7\u6c42",(0,s.jsx)(n.a,{href:"http://localhost:3000/api/post/2",children:"http://localhost:3000/api/post"})," \u5c31\u80fd\u83b7\u53d6\u5230\u6240\u6709\u6587\u7ae0\u6570\u636e\uff0c\u57fa\u672c\u7684 CRUD \u4e5f\u5c31\u5b9e\u73b0\u4e86\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u91cc\u5199 sql \u662f\u771f\u6ef4\u7e41\u7410\uff0c\u6ca1\u4f7f\u7528 str \u6216\u662f typeorm \u4e3b\u8981\u662f\u4e0d\u60f3\u628a\u8fd9\u4e2a demo \u641e\u5f97\u592a\u590d\u6742\uff0c\u5b9e\u9645\u9879\u76ee\u8fd8\u662f\u7528\u4e0a\u6bd4\u8f83\u597d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u7136\u8fd9\u91cc\u53ea\u662f\u4f5c\u4e3a\u540e\u7aef api \u63a5\u53e3\u7684\u6f14\u793a\uff0c\u81f3\u4e8e\u524d\u7aef\u7684\u5c55\u793a\u4e0e\u7f16\u5199\u5c31\u548c\u666e\u901a\u524d\u7aef\u5f00\u53d1\u6ca1\u5565\u5927\u7684\u533a\u522b\u3002\u57fa\u672c\u540e\u7aef\u6846\u67b6\u80fd\u505a\u7684\uff0cnext \u80fd\u505a\u540e\u7aef\u5f88\u591a\u4e8b\u60c5\uff0c\u66f4\u591a\u7684\u4f7f\u7528\u8fd8\u662f\u4f5c\u4e3a\u63a5\u53e3\u8f6c\u53d1\uff0c\u4e2d\u95f4\u4ef6\u7b49\uff0c\u6bd5\u7adf Next \u4e3b\u8981\u7684\u5f3a\u9879\u8fd8\u662f\u670d\u52a1\u7aef\u6e32\u67d3\u7684\u80fd\u529b\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u6253\u5305\u90e8\u7f72",children:"\u6253\u5305\u90e8\u7f72"}),"\n",(0,s.jsxs)(n.p,{children:["\u65e2\u7136\u8bf4\u5230\u90e8\u7f72\uff0c\u90a3\u80af\u5b9a\u79bb\u4e0d\u5f00 nextjs \u7684\u6bcd\u516c\u53f8",(0,s.jsx)(n.a,{href:"https://vercel.com",children:"Vercel"}),"\u4e86\uff0c\u5173\u4e8e Vercel \u4e4b\u524d\u4e5f\u5199\u8fc7\u76f8\u5173\u6587\u7ae0\uff0c\u5173\u4e8e Vercel \u5c31\u4e0d\u8fc7\u591a\u4ecb\u7ecd\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["nextjs \u90e8\u7f72\u5230 vercel \u5b9e\u5728\u7b80\u5355\uff0c\u5c06\u9879\u76ee\u63a8\u9001\u5230 github \u4ed3\u5e93\u4e2d\uff0c\u7136\u540e\u5728 vercel \u4e2d New Project\uff0c\u63a5\u7740\u9009\u62e9 nextjs \u7684\u4ed3\u5e93\uff0c\u70b9\u51fb Deploy\uff0c\u9759\u7b49\u90e8\u7f72\u5373\u53ef\u3002\u5173\u4e8e\u90e8\u7f72\u53ef\u4ee5\u770b\u8fd9\u7bc7\u6587\u7ae0 ",(0,s.jsx)(n.a,{href:"https://kuizuo.cn/develop/Vercel%E9%83%A8%E7%BD%B2%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2",children:"Vercel \u90e8\u7f72\u4e2a\u4eba\u535a\u5ba2"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u73b0\u5728\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbf\u95ee ",(0,s.jsx)(n.a,{href:"https://kz-next-app-demo.vercel.app/",children:"kz-next-app-demo.vercel.app"})," \u6765\u8bbf\u95ee\u8be5\u9879\u76ee\uff0c\u5e76\u5c1d\u8bd5\u8bbf\u95ee",(0,s.jsx)(n.code,{children:"/api/post"}),"\uff0c",(0,s.jsx)(n.code,{children:"user/1"}),"\u6765\u770b\u770b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ea\u80fd\u8bf4\u4e0d\u6127\u662f\u6bcd\u516c\u53f8\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u81f3\u4e8e\u5176\u4ed6\u90e8\u7f72\uff1f\u65e2\u7136\u90fd\u7528 nextjs \u4e86\uff0c\u8fd8\u8003\u8651\u81ea\u5efa\u670d\u52a1\u5668\u6765\u90e8\u7f72\u5417\uff1f"}),"\n",(0,s.jsx)(n.h2,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u6b21\u7684\u6574\u4f53\u8fc7\u7a0b\u6bd4\u8f83\u7b80\u5355\uff0c\u540e\u7eed\u5e94\u8be5\u4f1a\u4f7f\u7528 nextjs \u7f16\u5199\u4e00\u4e2a\u5b8c\u6574\u7684\u9879\u76ee\uff08",(0,s.jsx)(n.del,{children:"\u4e5f\u6709\u53ef\u80fd\u662f nuxt.js"}),")\u3002"]})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}},11151:function(e,n,t){t.d(n,{Zo:function(){return d},ah:function(){return i}});var s=t(67294);const r=s.createContext({});function i(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||a:i(e),s.createElement(r.Provider,{value:d},n)}}}]);