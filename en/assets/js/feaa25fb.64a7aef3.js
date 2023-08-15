"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98861],{76798:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return o},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return l}});var t=i(85893),r=i(11151);const s={slug:"gitea-drone-practice",title:"Gitea \u4e0e Drone \u5b9e\u8df5",date:new Date("2022-09-28T00:00:00.000Z"),authors:"kuizuo",tags:["git","gitea","drone"],keywords:["git","gitea","drone"],description:"\u4f7f\u7528 Gitea \u642d\u5efa\u4e00\u4e2a\u8f7b\u91cf\u7ea7 git \u79c1\u6709\u4ed3\u5e93\uff0c\u5e76\u914d\u7f6e Drone CI \u6765\u5b9e\u73b0\u81ea\u52a8\u6784\u5efa\u4e0e\u90e8\u7f72\u3002"},o=void 0,a={permalink:"/en/blog/gitea-drone-practice",editUrl:"https://github.com/kuizuo/blog/edit/main/blog/program/Gitea \u4e0e Drone \u5b9e\u8df5.md",source:"@site/blog/program/Gitea \u4e0e Drone \u5b9e\u8df5.md",title:"Gitea \u4e0e Drone \u5b9e\u8df5",description:"\u4f7f\u7528 Gitea \u642d\u5efa\u4e00\u4e2a\u8f7b\u91cf\u7ea7 git \u79c1\u6709\u4ed3\u5e93\uff0c\u5e76\u914d\u7f6e Drone CI \u6765\u5b9e\u73b0\u81ea\u52a8\u6784\u5efa\u4e0e\u90e8\u7f72\u3002",date:"2022-09-28T00:00:00.000Z",formattedDate:"September 28, 2022",tags:[{label:"git",permalink:"/en/blog/tags/git"},{label:"gitea",permalink:"/en/blog/tags/gitea"},{label:"drone",permalink:"/en/blog/tags/drone"}],readingTime:5.91,hasTruncateMarker:!0,authors:[{name:"Kuizuo",title:"ts full stack / Student",url:"https://github.com/kuizuo",imageURL:"/img/logo.webp",key:"kuizuo"}],frontMatter:{slug:"gitea-drone-practice",title:"Gitea \u4e0e Drone \u5b9e\u8df5",date:"2022-09-28T00:00:00.000Z",authors:"kuizuo",tags:["git","gitea","drone"],keywords:["git","gitea","drone"],description:"\u4f7f\u7528 Gitea \u642d\u5efa\u4e00\u4e2a\u8f7b\u91cf\u7ea7 git \u79c1\u6709\u4ed3\u5e93\uff0c\u5e76\u914d\u7f6e Drone CI \u6765\u5b9e\u73b0\u81ea\u52a8\u6784\u5efa\u4e0e\u90e8\u7f72\u3002"},unlisted:!1,prevItem:{title:"\u524d\u7aef\u81ea\u52a8\u5316\u6d4b\u8bd5",permalink:"/en/blog/frontend-automated-testing"},nextItem:{title:"\u6a21\u62df\u8bf7\u6c42|\u534f\u8bae\u590d\u73b0\u65b9\u6848",permalink:"/en/blog/request-protocol-scheme"}},c={authorsImageUrls:[void 0]},l=[{value:"Gitea",id:"gitea",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4fee\u6539\u914d\u7f6e",id:"\u4fee\u6539\u914d\u7f6e",level:3},{value:"\u8fc1\u79fb\u4ed3\u5e93",id:"\u8fc1\u79fb\u4ed3\u5e93",level:3},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:3},{value:"Drone",id:"drone",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:3},{value:"\u5b9e\u6218",id:"\u5b9e\u6218",level:2},{value:"\u90e8\u7f72\u524d\u7aef\u9879\u76ee",id:"\u90e8\u7f72\u524d\u7aef\u9879\u76ee",level:3},{value:"\u90e8\u7f72 nest \u9879\u76ee",id:"\u90e8\u7f72-nest-\u9879\u76ee",level:3},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",img:"img",strong:"strong",admonition:"admonition"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u4e4b\u524d\u642d\u5efa\u8fc7 Gitlab\uff0c\u4f46\u662f\u5c31\u53ea\u662f\u642d\u5efa\u800c\u5df2\uff0c\u5e76\u672a\u5b9e\u9645\u4f7f\u7528\uff0c\u56e0\u4e3a\u6211\u5927\u90e8\u5206\u7684\u4ee3\u7801\u8fd8\u662f\u5b58\u653e\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/kuizuo?tab=repositories",children:"Github"})," \u4e0a\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5e76\u4e14\u5927\u90e8\u5206\u9879\u76ee\u90fd\u662f\u5728 ",(0,t.jsx)(n.a,{href:"https://vercel.com",children:"Vercel"})," \u4e0a\u8fd0\u884c\u7684\uff08Vercel \u662f\u771f\u597d\u7528\uff09\uff0c\u4f46\u662f\u6700\u8fd1\u56fd\u5185\u8bbf\u95ee vercel \u60c5\u51b5\u4e0d\u5bb9\u4e50\u89c2\uff0c\u8c8c\u4f3c\u88ab\u5899\u4e86\u545c\u545c\u3002\u7136\u540e Gitlab \u7684\u8d44\u6e90\u5360\u7528\u975e\u5e38\u4e25\u91cd\uff0c\u51e0\u4e4e\u5360\u7528\u4e86\u4e00\u534a\u7684\u670d\u52a1\u5668\u6027\u80fd\uff0c\u53ef ",(0,t.jsx)(n.a,{href:"https://kuizuo.cn/gitlab-code-management-environment#%E8%BF%90%E8%A1%8C%E7%8A%B6%E6%80%81",children:"\u70b9\u6211"})," \u67e5\u770b\u8fd0\u884c\u72b6\u6001\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u968f\u7740\u5f88\u591a\u79c1\u6709\u9879\u76ee\u8d8a\u6765\u8d8a\u591a\uff0c\u4f7f\u7528 git \u79c1\u6709\u4ed3\u5e93\u4ee5\u53ca Vercel \u90e8\u7f72\uff0c\u80af\u5b9a\u4e0d\u5982\u81ea\u5efa\u79c1\u6709 git \u670d\u52a1\u548c\u81ea\u6709\u670d\u52a1\u5668\u90e8\u7f72\u4f7f\u7528\u4f53\u9a8c\u6765\u597d\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u4e8e\u662f\u5c31\u60f3\u642d\u5efa\u4e00\u4e2a\u8f7b\u91cf\u7ea7\u4ed3\u5e93\uff0c\u540c\u65f6\u652f\u6301 CI/CD\u3002\u7ecf\u8fc7\u4e00\u756a\u7684\u8c03\u7814\uff0c\u51b3\u5b9a\u4f7f\u7528 Gitea \u548c Drone \u4f5c\u4e3a\u89e3\u51b3\u65b9\u6848\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"gitea",children:"Gitea"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://gitea.io/zh-cn/",title:"Gitea",children:"Gitea"})," \u662f\u4e00\u4e2a\u5f00\u6e90\u793e\u533a\u9a71\u52a8\u7684\u8f7b\u91cf\u7ea7\u4ee3\u7801\u6258\u7ba1\u89e3\u51b3\u65b9\u6848\uff0c\u540e\u7aef\u91c7\u7528 ",(0,t.jsx)(n.a,{href:"https://golang.org/",title:"Go",children:"Go"})," \u7f16\u5199\uff0c\u91c7\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/go-gitea/gitea/blob/master/LICENSE",title:"MIT",children:"MIT"})," \u8bb8\u53ef\u8bc1."]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,t.jsx)(n.a,{href:"https://docs.gitea.io/zh-cn/comparison/#%E6%A8%AA%E5%90%91%E5%AF%B9%E6%AF%94-gitea-%E4%B8%8E%E5%85%B6%E5%AE%83-git-%E6%89%98%E7%AE%A1%E5%B7%A5%E5%85%B7",title:"\u6a2a\u5411\u5bf9\u6bd4 Gitea \u4e0e\u5176\u5b83 Git \u6258\u7ba1\u5de5\u5177",children:"\u6a2a\u5411\u5bf9\u6bd4 Gitea \u4e0e\u5176\u5b83 Git \u6258\u7ba1\u5de5\u5177"})," \u67e5\u770b gitea \u4e0e\u5176\u4ed6 git \u5de5\u5177\u7684\u4f18\u52bf\u4e0e\u7f3a\u9677\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u6211\u9009\u7528 Docker \u8fdb\u884c\u5b89\u88c5\uff0c\u5b89\u88c5\u6587\u6863\u53ef\u5728",(0,t.jsx)(n.a,{href:"https://docs.gitea.io/zh-cn/",title:"\u5b98\u65b9\u6587\u6863",children:"\u5b98\u65b9\u6587\u6863"}),"\u4e2d\u67e5\u770b\u5176\u4ed6\u5b89\u88c5\u65b9\u5f0f"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='docker-compose.yml'",children:"version: '3'\n\nnetworks:\n  gitea:\n    external: false\n\nvolumes:\n  gitea:\n    driver: local\n\nservices:\n  server:\n    image: gitea/gitea:1.17.1\n    container_name: gitea\n    environment:\n      - USER_UID=1000\n      - USER_GID=1000\n    restart: always\n    networks:\n      - gitea\n    volumes:\n      - gitea:/data\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n    ports:\n      - '10800:3000'\n      - '2221:22'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6839\u636e\u81ea\u8eab\u9700\u6c42\u914d\u7f6e docker-compose.yml \u5185\u5bb9\u3002\u8fd0\u884c ",(0,t.jsx)(n.code,{children:"docker-compose up"})," \u7b49\u5f85\u90e8\u7f72"]}),"\n",(0,t.jsxs)(n.p,{children:["\u670d\u52a1\u5668\u9632\u706b\u5899\u4e0e\u4e91\u670d\u52a1\u5b89\u5168\u7ec4\u90fd\u9700\u8981\u5f00\u653e\u7aef\u53e3\u624d\u53ef\u8bbf\u95ee\uff0c",(0,t.jsx)(n.code,{children:"\u670d\u52a1\u5668ip:10800"}),"\uff0c\u5c06\u4f1a\u51fa\u73b0\u5982\u4e0b\u754c\u9762"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_8ix-AMvt3t.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u56e0\u4e3a\u4fee\u6539\u914d\u7f6e\u76f8\u5bf9\u6bd4\u8f83\u9ebb\u70e6\uff0c\u6240\u4ee5\u5728\u9996\u6b21\u5b89\u88c5\u7684\u65f6\u5019\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u9700\u6c42\u8fdb\u884c\u914d\u7f6e\u5b89\u88c5\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4fee\u6539\u914d\u7f6e",children:"\u4fee\u6539\u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u5047\u8bbe\u8981\u4fee\u6539\u5176\u4e2d\u7684\u914d\u7f6e\u7684\u8bdd\uff0cgitea \u7684\u540e\u53f0\u7ba1\u7406\u9762\u677f\u662f\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539\u7684\u3002\u9700\u8981\u5230 ",(0,t.jsx)(n.code,{children:"/data/gitea/conf/app.ini"})," \u4e2d\u4fee\u6539\uff0c\u5177\u4f53\u4fee\u6539\u7684\u914d\u7f6e \u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://docs.gitea.io/zh-cn/customizing-gitea/",title:"\u81ea\u5b9a\u4e49 Gitea \u914d\u7f6e - Docs",children:"\u81ea\u5b9a\u4e49 Gitea \u914d\u7f6e - Docs"})]}),"\n",(0,t.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"caution",children:(0,t.jsx)(n.p,{children:"\u5fc5\u987b\u5b8c\u5168\u91cd\u542f Gitea \u4ee5\u4f7f\u914d\u7f6e\u751f\u6548\u3002"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fc1\u79fb\u4ed3\u5e93",children:"\u8fc1\u79fb\u4ed3\u5e93"}),"\n",(0,t.jsxs)(n.p,{children:["\u4ece\u5176\u4ed6\u7b2c\u4e09\u65b9 git \u4ed3\u5e93\u8fc1\u79fb\u5230 gitea\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,t.jsx)(n.a,{href:"https://git.kuizuo.cn/repo/migrate",title:"https://git.kuizuo.cn/repo/migrate",children:"https://git.kuizuo.cn/repo/migrate"})," \u6765\u8fc1\u79fb\u4ed3\u5e93"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_sRQV5hAKUh.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u7a0d\u7b49\u7247\u523b\uff0c\u53d6\u51b3\u4e8e\u8bbf\u95ee github \u4ed3\u5e93\u7684\u901f\u5ea6\u3002\u6709\u53ef\u80fd\u8fd8\u4f1a\u8fc1\u79fb\u5931\u8d25\uff0c\u5c31\u50cf\u4e0b\u9762\u8fd9\u6837\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_X9IpG2q36n.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["\u6240\u4ee5\u53ef\u4ee5\u7533\u8bf7\u8bbf\u95ee\u4ee4\u724c\uff08Access Token\uff09\uff0c\u5728 ",(0,t.jsx)(n.a,{href:"https://github.com/settings/tokens/new",title:"New Personal Access Token",children:"New Personal Access Token"})," \u5904\u521b\u5efa\u3002\u8fc1\u79fb\u6210\u529f\u540e\uff0c\u5982\u4e0b\u56fe\u6240\u793a"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_Rug0AmD8GE.png",alt:""})}),"\n",(0,t.jsx)(n.h3,{id:"\u955c\u50cf\u4ed3\u5e93",children:"\u955c\u50cf\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.p,{children:"\u5f88\u5927\u90e8\u5206\u65f6\u95f4\uff0cgitea \u53ea\u80fd\u4f5c\u4e3a\u6211\u7684\u526f\u4ed3\u5e93\uff0c\u6216\u8005\u8bf4 github \u7684\u955c\u50cf\u4ed3\u5e93\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["gitea \u4e5f\u63d0\u4f9b\u955c\u50cf\u4ed3\u5e93\u7684\u65b9\u6848\uff0c\u5b98\u65b9\u6587\u6863",(0,t.jsx)(n.a,{href:"https://docs.gitea.io/en-us/repo-mirror/",title:"Repository Mirror",children:"Repository Mirror"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_Q5IaHnKCYJ.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"drone",children:"Drone"}),"\n",(0,t.jsx)(n.p,{children:"\u7531\u4e8e Gitea \u5e76\u6ca1\u6709\u5185\u7f6e CI/CD\uff08\u6301\u7eed\u96c6\u6210/\u6301\u7eed\u90e8\u7f72\uff09 \u7684\u89e3\u51b3\u65b9\u6848\uff0c\u6240\u4ee5\u9700\u8981\u914d\u7f6e\u7b2c\u4e09\u65b9\u7684\uff0c\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528 Drone CI\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Drone \u662f\u9762\u5411\u7e41\u5fd9\u5f00\u53d1\u56e2\u961f\u7684\u81ea\u52a9\u670d\u52a1\u6301\u7eed\u96c6\u6210\u5e73\u53f0\u3002\u76f8\u5bf9\u4e8e\u5e38\u89c1\u7684Jenkins\uff0c\u9009\u4e2d Drone \u7684\u539f\u56e0\u5728\u4e8e\u5b83\u975e\u5e38\u7b80\u6d01\uff0c\u4e0d\u50cf Jenkins \u90a3\u6837\u590d\u6742\uff0c\u540c\u65f6\u5b83\u62e5\u6709\u53ef\u4ee5\u6ee1\u8db3\u57fa\u672c\u9700\u6c42\u7684\u80fd\u529b\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u8bb8\u591a\u5b9e\u7528\u7684",(0,t.jsx)(n.a,{href:"https://plugins.drone.io/",children:"\u63d2\u4ef6"}),"\uff0c\u5982GitHub\uff0cEmail\uff0c\u5fae\u4fe1\uff0c\u9489\u9489\u7b49"]}),"\n",(0,t.jsx)(n.h3,{id:"\u5b89\u88c5-1",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u6211\u4eec\u4f7f\u7528\u4e86 gitea\uff0c\u6240\u4ee5 drone \u4e2d\u9009\u62e9 gitea \u6765\u5b89\u88c5\uff0c\u8fd9\u662f\u5b98\u65b9\u6587\u6863 ",(0,t.jsx)(n.a,{href:"https://docs.drone.io/server/provider/gitea/",title:"Gitea | Drone",children:"Gitea | Drone"}),"\uff0c\u7167\u7740\u64cd\u4f5c\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u9700\u8981\u5b89\u88c5 Server \u548c Runner\uff0c\u4e00\u4e2a\u662f Drone \u7684\u670d\u52a1\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e\u68c0\u6d4b Git \u8bb0\u5f55\uff0c\u4ee5\u91cd\u65b0\u6784\u5efa\u9879\u76ee\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc\u8d34\u4e0b drone \u7684 docker \u914d\u7f6e\uff08\u6839\u636e\u6587\u6863\u548c\u81ea\u5df1\u90e8\u7f72\u7684 git \u670d\u52a1\u914d\u7f6e\u6765\u66ff\u6362\uff09\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='server'",children:"docker run \\\n  --volume=/var/lib/drone:/data \\\n  --env=DRONE_GITEA_SERVER=https://try.gitea.io \\\n  --env=DRONE_GITEA_CLIENT_ID=05136e57d80189bef462 \\\n  --env=DRONE_GITEA_CLIENT_SECRET=7c229228a77d2cbddaa61ddc78d45e \\\n  --env=DRONE_RPC_SECRET=super-duper-secret \\\n  --env=DRONE_SERVER_HOST=drone.company.com \\\n  --env=DRONE_SERVER_PROTO=https \\\n  --publish=80:80 \\\n  --publish=443:443 \\\n  --restart=always \\\n  --detach=true \\\n  --name=drone \\\n  drone/drone:2\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:"title='runner'",children:"docker run --detach \\\n  --volume=/var/run/docker.sock:/var/run/docker.sock \\\n  --env=DRONE_RPC_PROTO=https \\\n  --env=DRONE_RPC_HOST=drone.company.com \\\n  --env=DRONE_RPC_SECRET=super-duper-secret \\\n  --env=DRONE_RUNNER_CAPACITY=2 \\\n  --env=DRONE_RUNNER_NAME=my-first-runner \\\n  --publish=3000:3000 \\\n  --restart=always \\\n  --name=runner \\\n  drone/drone-runner-docker:1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u67e5\u770b\u8fde\u63a5\u60c5\u51b5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker logs runner\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u7136\u540e\u8bbf\u95ee\u7ebf\u4e0a\u7684 drone \u670d\u52a1\uff0c\u70b9\u51fb CONTINUE \u5c06\u4f1a\u8df3\u8f6c\u5230\u4f60\u7684 Git \u6388\u6743\u9875\u9762"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_rUdNHPlB73.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u70b9\u51fb\u5e94\u7528\u6388\u6743\uff0c\u518d\u6b21\u56de\u5230 drone\uff0c\u6b64\u65f6\u9875\u9762 Dashboard \u5217\u51fa\u4e86 gitea \u7684\u6240\u6709\u4ed3\u5e93\uff08\u5982\u679c\u6ca1\u6709\u7684\u8bdd\uff0c\u53ef\u4ee5\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 SYNC \u6765\u540c\u6b65\uff09\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_TXWZgDOhrQ.png",alt:""})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9e\u6218",children:"\u5b9e\u6218"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0a\u8ff0\u53ea\u662f\u5b89\u88c5\u4e86\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u7f16\u5199 ",(0,t.jsx)(n.code,{children:".drone.yml"})," \u914d\u7f6e\u6587\u4ef6\u6765\u544a\u8bc9 drone \u6211\u4eec\u8981\u505a\u4ec0\u4e48\uff0c\u7f16\u5199\u8fc7\u7a0b\u4e0e Github Action\u7c7b\u4f3c\u3002\u76f8\u5173\u6587\u6863: ",(0,t.jsx)(n.a,{href:"https://docs.drone.io/pipeline/overview/",title:"Overview | Drone",children:"Pipeline | Drone"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u90e8\u7f72\u524d\u7aef\u9879\u76ee",children:"\u90e8\u7f72\u524d\u7aef\u9879\u76ee"}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u5c31\u9009\u7528 ",(0,t.jsx)(n.a,{href:"https://github.com/antfu/vitesse",title:"antfu/vitesse",children:"antfu/vitesse"})," \u4f5c\u4e3a\u6f14\u793a\u3002\u8fd9\u91cc\u7701\u7565 clone \u4ed3\u5e93\u7684\u6b65\u9aa4\u3002\u8fdb\u5165\u5230\u81ea\u5df1\u7684 gitea \u4ed3\u5e93\uff0c\u7136\u540e\u6dfb\u52a0 ",(0,t.jsx)(n.code,{children:".drone.yml"})," \u6587\u4ef6\uff0c\u5185\u5bb9\u5982\u4e0b\uff1a"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: pipeline\ntype: docker\nname: ci\n\nsteps:\n  - name: install & build\n    image: node\n    commands:\n      - npm config set registry http://mirrors.cloud.tencent.com/npm/\n      - npm i -g pnpm\n      - pnpm i\n      - pnpm run build\n\n  - name: upload\n    image: appleboy/drone-scp\n    settings:\n      host:\n        from_secret: host\n      username:\n        from_secret: username\n      password:\n        from_secret: password\n      port: 22\n      command_timeout: 2m\n      target: /www/wwwroot/${DRONE_REPO_OWNER}/${DRONE_REPO_NAME}\n      source:\n        - ./dist\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u91cc\u5bf9 ",(0,t.jsx)(n.code,{children:".drone.yml"})," \u914d\u7f6e\u8fdb\u884c\u8be6\u89e3\uff1a"]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d build \u8fd9\u4e2a\u4e0d\u7528\u591a\u8bf4\uff0c\u4e0e node \u6784\u5efa\u76f8\u5173\u7684\uff0c\u4e0d\u8fc7\u591a\u4ecb\u7ecd\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["upload \u5219\u4f7f\u7528",(0,t.jsx)(n.a,{href:"https://plugins.drone.io/plugins/scp",title:"appleboy/drone-scp",children:"appleboy/drone-scp"}),"\u63d2\u4ef6\uff0c\u53ef\u4ee5\u5c06\u6784\u5efa\u51fa\u6765\u7684\u6587\u4ef6\u901a\u8fc7\u53d1\u9001\u5230\u670d\u52a1\u5668\u6307\u5b9a\u4f4d\u7f6e\u3002\u5728\u8fd9\u91cc source \u5bf9\u5e94\u5c31\u662f\u6784\u5efa\u7684\u6587\u4ef6\uff0ctarget \u5219\u662f\u8981\u79fb\u52a8\u7684\u4f4d\u7f6e\uff0c\u8fd9\u91cc\u7684 ",(0,t.jsx)(n.code,{children:"/www/wwwroot/${DRONE_REPO_OWNER}/${DRONE_REPO_NAME}"})," \u5bf9\u5e94\u672c\u9879\u76ee\u4e3a ",(0,t.jsx)(n.code,{children:"/www/wwwroot/kuizuo/vitesse"}),"\u3002\u6b64\u5916 ssh \u7684 host\uff0cusername\uff0cpassword \u6216 key\uff0c\u90fd\u4f5c\u4e3a\u73af\u5883\u53d8\u91cf\uff08\u79c1\u6709\u53d8\u91cf\u7684\u65b9\u5f0f\u4f20\u9012\uff0c\u8fd9\u5728 drone \u7684\u63a7\u5236\u53f0\u4e2d\u53ef\u4ee5\u8bbe\u7f6e\uff09\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u6bcf\u6b21\u6784\u5efa\u53ef\u80fd\u9700\u8981\u5220\u9664\u539f\u6709\u7684\u5df2\u90e8\u7f72\u7684\u8d44\u6e90\u6587\u4ef6\uff0c\u90a3\u4e48\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://plugins.drone.io/plugins/ssh",children:"appleboy/drone-ssh"})," \u63d2\u4ef6\u6765\u6267\u884c\u7ec8\u7aef\u547d\u4ee4\u6765\u5220\u9664\uff0c\u4f8b\u5982"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"kind: pipeline\nname: default\n\nsteps:\n  - name: deploy\n    image: appleboy/drone-ssh\n    environment:\n        DEPLOY_PATH:\n            from_secret: /www/wwwroot/${DRONE_REPO_OWNER}/${DRONE_REPO_NAME}\n    settings:\n        host:\n            from_secret: host\n        username:\n            from_secret: username\n        password:\n            from_secret: password\n        port: 22\n        command_timeout: 2m\n        envs: [DEPLOY_PATH]\n        script:\n            - rm -rf $${DEPLOY_PATH}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5177\u4f53\u5c31\u56e0\u4eba\u800c\u5f02\u4e86\uff0c\u8fd9\u91cc\u6211\u4ec5\u4f5c\u4e3a\u6f14\u793a\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u5927\u81f4\u4ecb\u7ecd\u5b8c\u6bd5\uff08\u5176\u5b9e\u5df2\u7ecf\u4ecb\u7ecd\u5dee\u4e0d\u591a\u4e86\uff09\uff0c\u6709\u5173\u66f4\u591a\u63d2\u4ef6\u53ef\u4ee5\u53c2\u9605 ",(0,t.jsx)(n.a,{href:"https://plugins.drone.io",title:"drone \u63d2\u4ef6",children:"drone \u63d2\u4ef6"}),"\u3002\u8fd9\u91cc\u5f00\u59cb\u6f14\u793a\uff0c\u8fdb\u5165 drone \u9875\u9762\uff0c\u627e\u5230\u4ed3\u5e93\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u4ed3\u5e93\u90fd\u5904\u4e8e\u672a\u6fc0\u6d3b\u72b6\u6001\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_6XBrsAY8VE.png",alt:""})}),"\n",(0,t.jsxs)(n.p,{children:["\u70b9\u51fb ",(0,t.jsx)(n.code,{children:"ACTIVATE REPOSITORY"})," \u6839\u636e\u9009\u9879\u9009\u62e9\uff0c\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684",(0,t.jsx)(n.code,{children:"NEW BUILD"}),"\u9009\u62e9\u5206\u652f\uff0c\u6dfb\u52a0 drone \u73af\u5883\u53d8\u91cf\uff08\u79c1\u6709\u53d8\u91cf\uff09\uff0c\u5373\u4e0a\u9762\u7684 from_secret \u540e\u9762\u7684\u5185\u5bb9\uff08host\uff0cusername\uff0cpassword\uff09\uff0c\u5373\u53ef\u5f00\u59cb\u8fd0\u884c\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image_PAM6QQS1V_.png",alt:""})}),"\n",(0,t.jsx)(n.p,{children:"\u9759\u7b49 PIPELINE \u6267\u884c\u5b8c\u6bd5\uff0c\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220928152635955.png",alt:"image-20220928152635955"})}),"\n",(0,t.jsx)(n.p,{children:"\u6b64\u65f6\u6253\u5f00\u5b9d\u5854\uff0c\u8df3\u8f6c\u5230\u6307\u5b9a\u76ee\u5f55\u4e0b\uff0c\u5c31\u53ef\u4ee5\u770b\u5230\u6784\u5efa\u7684\u5185\u5bb9\u90fd\u5df2\u7ecf\u653e\u5230\u6307\u5b9a\u4f4d\u7f6e\u4e86"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://img.kuizuo.cn/image-20220928152725853.png",alt:"image-20220928152725853"})}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u65f6\u5019\u53ea\u9700\u8981\u914d\u7f6e\u4e0b nginx\uff0c\u5c31\u80fd\u5c06\u9875\u9762\u5c55\u793a\u5230\u516c\u7f51\u4e0a\uff0c\u8fd9\u91cc\u5c31\u4e0d\u5728\u8fd9\u91cc\u8d58\u8ff0\u3002\u5f53\u5b8c\u6210\u4e0a\u8ff0\u914d\u7f6e\u5b8c\u6bd5\u540e\uff0c\u6bcf\u6b21\u53ea\u9700\u8981 pull request\uff0cdrone \u5c31\u4f1a\u81ea\u52a8\u62c9\u53d6 gitea \u7684\u4ee3\u7801\uff0c\u5e76\u5f00\u59cb\u6267\u884c",(0,t.jsx)(n.code,{children:".drone.yml"}),"\u4e2d\u7684\u4efb\u52a1\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u90e8\u7f72-nest-\u9879\u76ee",children:"\u90e8\u7f72 nest \u9879\u76ee"}),"\n",(0,t.jsx)(n.p,{children:"TODO\u3002\u3002\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u53c2\u8003\u6587\u7ae0",children:"\u53c2\u8003\u6587\u7ae0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/7073380337766072350",title:"\u3010CI/CD\u3011\u642d\u5efadrone\u670d\u52a1\uff0c\u6784\u5efa\u524d\u7aefcicd\u5de5\u4f5c\u6d41\uff0c\u5b9e\u73b0\u535a\u5ba2\u7684\u81ea\u52a8\u5316\u6253\u5305\u5e76\u90e8\u7f72 - \u6398\u91d1 (juejin.cn)",children:"\u3010CI/CD\u3011\u642d\u5efa drone \u670d\u52a1\uff0c\u6784\u5efa\u524d\u7aef cicd \u5de5\u4f5c\u6d41\uff0c\u5b9e\u73b0\u535a\u5ba2\u7684\u81ea\u52a8\u5316\u6253\u5305\u5e76\u90e8\u7f72 - \u6398\u91d1 (juejin.cn)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://learnku.com/articles/71333",children:"\u5355\u673a\u90e8\u7f72 CI/CD \u8fdb\u9636\u7248\uff1a\u5b9d\u5854+gitea+drone | Laravel China \u793e\u533a (learnku.com)"})})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},11151:function(e,n,i){i.d(n,{Zo:function(){return a},ah:function(){return s}});var t=i(67294);const r=t.createContext({});function s(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function a({components:e,children:n,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||o:s(e),t.createElement(r.Provider,{value:a},n)}}}]);