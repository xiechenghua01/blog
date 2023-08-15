"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[56133],{42480:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return r},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l}});var s=t(85893),i=t(11151);const a={id:"github-actions-example",slug:"github-actions-example",title:"github actions\u793a\u4f8b",date:new Date("2021-10-01T00:00:00.000Z"),authors:"kuizuo",tags:["github","action"],keywords:["github","action"]},r=void 0,o={unversionedId:"skill/git/github-actions-example",id:"skill/git/github-actions-example",title:"github actions\u793a\u4f8b",description:"GitHub Marketplace \xb7 Actions to improve your workflow",source:"@site/docs/skill/git/github actions\u793a\u4f8b.md",sourceDirName:"skill/git",slug:"/skill/git/github-actions-example",permalink:"/docs/skill/git/github-actions-example",draft:!1,unlisted:!1,tags:[{label:"github",permalink:"/docs/tags/github"},{label:"action",permalink:"/docs/tags/action"}],version:"current",frontMatter:{id:"github-actions-example",slug:"github-actions-example",title:"github actions\u793a\u4f8b",date:"2021-10-01T00:00:00.000Z",authors:"kuizuo",tags:["github","action"],keywords:["github","action"]},sidebar:"skill",previous:{title:"git commit\u89c4\u8303",permalink:"/docs/skill/git/git-conmit-specification"},next:{title:"github apps\u793a\u4f8b",permalink:"/docs/skill/git/github-apps-example"}},c={},l=[{value:"\u6d4b\u8bd5 \u8f93\u51fa",id:"\u6d4b\u8bd5-\u8f93\u51fa",level:2},{value:"\u524d\u7aef\u9879\u76ee\u4ee3\u7801 lint \u4e0e test",id:"\u524d\u7aef\u9879\u76ee\u4ee3\u7801-lint-\u4e0e-test",level:2},{value:"\u53d1\u5e03\u5230 GitHub Pages",id:"\u53d1\u5e03\u5230-github-pages",level:2},{value:"ssh \u90e8\u7f72",id:"ssh-\u90e8\u7f72",level:2},{value:"ftp \u6587\u4ef6\u4f20\u8f93",id:"ftp-\u6587\u4ef6\u4f20\u8f93",level:2},{value:"\u53d1\u5e03 release / npm \u5305",id:"\u53d1\u5e03-release--npm-\u5305",level:2},{value:"\u6dfb\u52a0\u72b6\u6001\u5fbd\u7ae0 status badge",id:"\u6dfb\u52a0\u72b6\u6001\u5fbd\u7ae0-status-badge",level:2}];function u(n){const e=Object.assign({p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/marketplace?type=actions",children:"GitHub Marketplace \xb7 Actions to improve your workflow"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6d4b\u8bd5-\u8f93\u51fa",children:"\u6d4b\u8bd5 \u8f93\u51fa"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.github.com/cn/actions/learn-github-actions/environment-variables",children:"Environment variables - GitHub Docs"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.github.com/cn/actions/learn-github-actions/contexts#github-context",children:"Contexts - GitHub Docs"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:"title='print.yml'",children:"name: Print\non: push\n\njobs:\n  print-job:\n    name: Print Job\n    runs-on: ubuntu-latest\n    steps:\n    - name: Print a greeting\n      env:\n        MY_VAR: Hi there! My name is\n        NAME: Kuizuo\n      run: |\n        echo $MY_VAR $NAME.\n\n    - name: Print github info\n      run: |\n      \techo github owner: ${{ github.repository_owner }}\n      \techo github repository: ${{ github.repository }}\n        echo github workspace ${{ github.workspace }}\n\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u524d\u7aef\u9879\u76ee\u4ee3\u7801-lint-\u4e0e-test",children:"\u524d\u7aef\u9879\u76ee\u4ee3\u7801 lint \u4e0e test"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/marketplace/actions/setup-node-js-environment",children:"Setup Node.js environment \xb7 Actions \xb7 GitHub Marketplace"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:"title='lint.yml'",children:"name: Lint\n\non:\n  push:\n    branches:\n      - main\n\n  pull_request:\n    branches:\n      - main\n\njobs:\n  lint:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Install pnpm\n        uses: pnpm/action-setup@v2\n\n      - name: Set node\n        uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: pnpm\n\n      - name: Setup\n        run: npm i -g @antfu/ni\n\n      - name: Install\n        run: nci\n\n      - name: Lint\n        run: nr lint\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:"title='test.yml'",children:"name: Test\n\non:\n  push:\n    branches:\n      - main\n\n  pull_request:\n    branches:\n      - main\n\njobs:\n  test:\n    runs-on: ${{ matrix.os }}\n\n    strategy:\n      matrix:\n        node: [14.x, 16.x]\n        os: [ubuntu-latest]\n      fail-fast: false\n\n    steps:\n      - uses: actions/checkout@v3\n\n      - name: Install pnpm\n        uses: pnpm/action-setup@v2\n\n      - name: Set node ${{ matrix.node }}\n        uses: actions/setup-node@v3\n        with:\n          node-version: ${{ matrix.node }}\n          cache: pnpm\n\n      - run: corepack enable\n\n      - name: Setup\n        run: npm i -g @antfu/ni\n\n      - name: Install\n        run: nci\n\n      - name: Build\n        run: nr build\n\n      - name: Test\n        run: nr test\n\n      - name: Typecheck\n        run: nr typecheck\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u4e5f\u53ef\u5c06 jobs \u6574\u5408\u5728\u4e00\u4e2a\u6587\u4ef6\u5185"}),"\n",(0,s.jsx)(e.h2,{id:"\u53d1\u5e03\u5230-github-pages",children:"\u53d1\u5e03\u5230 GitHub Pages"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/marketplace/actions/github-pages-action",children:"GitHub Pages action"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"name: Build and Deploy\non:\n  push:\n    branches:\n      - main\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Install and Build\n        run: |\n          yarn install\n          yarn run build\n\n      - name: Deploy\n        uses: peaceiris/actions-gh-pages@v3\n        with:\n          personal_token: ${{ secrets.ACCESS_TOKEN }}\n          publish_dir: ./dist\n"})}),"\n",(0,s.jsx)(e.p,{children:"publish_dir \u4e3a\u6253\u5305\u540e\u7684\u6587\u4ef6\u5939."}),"\n",(0,s.jsx)(e.h2,{id:"ssh-\u90e8\u7f72",children:"ssh \u90e8\u7f72"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/marketplace/actions/ssh-deploy",children:"ssh deploy \xb7 Actions \xb7 GitHub Marketplace"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"name: ci\n\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v3\n\n      - name: Use Node.js 16\n        uses: actions/setup-node@v3\n        with:\n          node-version: '16.x'\n\n      - name: Build Project\n        run: |\n          yarn install\n          yarn run build\n\n      - name: SSH Deploy\n        uses: easingthemes/ssh-deploy@v2.2.11\n        env:\n          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}\n          ARGS: '-avzr --delete'\n          SOURCE: 'build'\n          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}\n          REMOTE_USER: 'root'\n          TARGET: '/www/wwwroot/blog'\n"})}),"\n",(0,s.jsxs)(e.p,{children:["SSH_PRIVATE_KEY \u662f SSH \u5bc6\u94a5\uff0c\u53ef\u901a\u8fc7 ",(0,s.jsx)(e.code,{children:"ssh-keygen"})," \uff08\u751f\u6210\u4f4d\u7f6e/root/.ssh\uff09\u6216\u901a\u8fc7\u670d\u52a1\u5668\u7ba1\u7406\u9762\u677f\u7684\u6765\u751f\u6210\u5bc6\u94a5\u3002\u540e\u8005\u7684\u8bdd\u9700\u8981\u7ed1\u5b9a\u670d\u52a1\u5668\u5b9e\u4f8b\uff0c\u5e76\u4e14\u9700\u8981\u5173\u673a\uff0c\u6211\u4e2a\u4eba\u63a8\u8350\u4f7f\u7528\u540e\u8005\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"ftp-\u6587\u4ef6\u4f20\u8f93",children:"ftp \u6587\u4ef6\u4f20\u8f93"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",children:"      - name: FTP Deploy\n        uses: SamKirkland/FTP-Deploy-Action@4.0.0\n        with:\n          server: ${{ secrets.ftp_server }}\n          username: ${{ secrets.ftp_user }}\n          password: ${{ secrets.ftp_pwd }}\n          local-dir: ./build/\n          server-dir: ./\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u53d1\u5e03-release--npm-\u5305",children:"\u53d1\u5e03 release / npm \u5305"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/changesets/action",children:"changesets/action (github.com)"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-yaml",metastring:"title='release.yml'",children:"name: Release\n\non:\n  push:\n    tags:\n      - 'v*'\n\njobs:\n  release:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n        with:\n          fetch-depth: 0\n\n      - name: Install pnpm\n        uses: pnpm/action-setup@v2\n\n      - name: Set node\n        uses: actions/setup-node@v3\n        with:\n          node-version: 16.x\n          cache: pnpm\n          registry-url: 'https://registry.npmjs.org'\n\n      - run: npx changelogithub\n        continue-on-error: true\n        env:\n          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}\n\n      - name: Install Dependencies\n        run: pnpm i\n\n      - name: PNPM build\n        run: pnpm run build\n\n      - name: Publish to NPM\n        run: pnpm -r publish --access public --no-git-checks\n        env:\n          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}\n\n      - name: Publish to VSCE & OVSX\n        run: npm run publish\n        working-directory: ./packages/vscode\n        env:\n          VSCE_TOKEN: ${{secrets.VSCE_TOKEN}}\n          OVSX_TOKEN: ${{secrets.OVSX_TOKEN}}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6dfb\u52a0\u72b6\u6001\u5fbd\u7ae0-status-badge",children:"\u6dfb\u52a0\u72b6\u6001\u5fbd\u7ae0 status badge"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge",children:"Adding a workflow status badge - GitHub Docs"})}),"\n",(0,s.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u5de5\u4f5c\u6d41\u4f1a\u81ea\u52a8\u751f\u6210\u72b6\u6001\u5fbd\u7ae0\uff0c\u5730\u5740\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"https://github.com/<OWNER>/<REPOSITORY>/actions/workflows/<WORKFLOW_FILE>/badge.svg\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"https://github.com/kuizuo/github-action-example/actions/workflows/ci.yml/badge.svg\n"})})]})}e.default=function(n={}){const{wrapper:e}=Object.assign({},(0,i.ah)(),n.components);return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(u,n)})):u(n)}},11151:function(n,e,t){t.d(e,{Zo:function(){return o},ah:function(){return a}});var s=t(67294);const i=s.createContext({});function a(n){const e=s.useContext(i);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const r={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||r:a(n),s.createElement(i.Provider,{value:o},e)}}}]);