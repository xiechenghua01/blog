"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[36420],{98716:function(s,e,n){n.r(e),n.d(e,{assets:function(){return a},contentTitle:function(){return i},frontMatter:function(){return t},metadata:function(){return r},toc:function(){return d}});var l=n(85893),c=n(11151);const t={slug:"react-css-implementation",title:"React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848",date:new Date("2022-01-14T00:00:00.000Z"),authors:"kuizuo",tags:["react","css"],keywords:["react","css"]},i=void 0,r={unversionedId:"skill/react/React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848",id:"skill/react/React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848",title:"React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848",description:"\u5168\u5c40\u6837\u5f0f",source:"@site/docs/skill/react/React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848.md",sourceDirName:"skill/react",slug:"/skill/react/react-css-implementation",permalink:"/docs/skill/react/react-css-implementation",draft:!1,unlisted:!1,tags:[{label:"react",permalink:"/docs/tags/react"},{label:"css",permalink:"/docs/tags/css"}],version:"current",frontMatter:{slug:"react-css-implementation",title:"React\u4e2dCss\u51e0\u79cd\u5b9e\u73b0\u65b9\u6848",date:"2022-01-14T00:00:00.000Z",authors:"kuizuo",tags:["react","css"],keywords:["react","css"]},sidebar:"skill",previous:{title:"React",permalink:"/docs/category/react"},next:{title:"React\u4e4bhooks",permalink:"/docs/react-hooks"}},a={},d=[{value:"\u5168\u5c40\u6837\u5f0f",id:"\u5168\u5c40\u6837\u5f0f",level:2},{value:"\u5185\u8054\u6837\u5f0f",id:"\u5185\u8054\u6837\u5f0f",level:2},{value:"\u5c40\u90e8\u6837\u5f0f CSS Modules",id:"\u5c40\u90e8\u6837\u5f0f-css-modules",level:2},{value:"classnames",id:"classnames",level:3},{value:"CSS in JS",id:"css-in-js",level:2},{value:"styled-jsx",id:"styled-jsx",level:2},{value:"\u539f\u5b50\u7c7b",id:"\u539f\u5b50\u7c7b",level:2},{value:"\u7ec4\u4ef6\u5316\u4e2d\u4f7f\u7528",id:"\u7ec4\u4ef6\u5316\u4e2d\u4f7f\u7528",level:3},{value:"\u6700\u4f73\u5b9e\u73b0\uff1f",id:"\u6700\u4f73\u5b9e\u73b0",level:2}];function o(s){const e=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a",h3:"h3",img:"img",ol:"ol",li:"li",strong:"strong",blockquote:"blockquote"},(0,c.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"\u5168\u5c40\u6837\u5f0f",children:"\u5168\u5c40\u6837\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0e\u4f20\u7edf html \u6807\u7b7e\u7c7b\u5c5e\u6027\u4e0d\u540c\uff0creact \u4e2d class \u5fc5\u987b\u7f16\u5199\u4e3a className\uff0c\u6bd4\u5982"}),"\n",(0,l.jsx)(e.p,{children:"\u5168\u5c40 css"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:".box {\n  background-color:red;\n  width:300px;\n  height:300px;\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"js"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function Hello() {\n  return <div className='box'>hello react</div>\n}\n\nReactDOM.render(<Hello />, document.getElementById('root'))\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0e\u4f20\u7edf\u5728 html \u6807\u7b7e\u5b9a\u4e49 css \u6837\u5f0f\u4e0d\u540c\uff0c\u56e0\u4e3a\u8fd9\u4e0d\u662f\u4f20\u7edf\u7684 html \u4ee3\u7801\uff0c\u800c\u662f JSX\uff0c\u7531\u4e8e class \u4f5c\u4e3a\u5173\u952e\u5b57\uff0c\u65e0\u6cd5\u4f5c\u4e3a\u6807\u8bc6\u7b26\u51fa\u73b0\uff0c\u6bd4\u65b9\u8bf4\u4e0b\u9762\u7684\u4ee3\u7801\u5c06\u4f1a\u62a5\u9519\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"const { class } = { class: 'foo' } // Uncaught SyntaxError: Unexpected token }\nconst { className } = { className: 'foo' }\nconst { class: className } = { class: 'foo' }\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5173\u4e8e\u5b98\u65b9\u4e5f\u6709\u5bf9\u6b64\u95ee\u9898\u56de\u7b54"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://www.jackpu.com/you-qu-de-hua-ti-wei-shi-yao-jsxyong-classnameer-bu-shi-class/",children:"\u6709\u8da3\u7684\u8bdd\u9898\uff0c\u4e3a\u4ec0\u4e48 jsx \u7528 className \u800c\u4e0d\u662f class"})}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u4ee5\u628a\u4f20\u7edf\u7684 html \u4ee3\u7801\u5f3a\u884c\u642c\u8fd0\u5230 react \u4e2d\uff0c\u5982\u679c\u5e26\u6709 class \u4e0e style \u5c5e\u6027\uff0c\u90a3\u4e48\u5c06\u4f1a\u62a5\u9519\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5185\u8054\u6837\u5f0f",children:"\u5185\u8054\u6837\u5f0f"}),"\n",(0,l.jsx)(e.p,{children:"\u5185\u8054\u6837\u5f0f\u4e5f\u5f97\u5199\u6210\u5bf9\u8c61 key-value \u5f62\u5f0f\uff0c\u9047\u5230-\u8fde\u5b57\u7b26\uff0c\u5219\u9700\u8981\u5927\u5199\uff0c\u5982"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"function Hello() {\n  return (\n    <div className='box' style={{ fontSize: '32px', textAlign: 'center' }}>\n      hello react\n    </div>\n  )\n}\n"})}),"\n",(0,l.jsxs)(e.p,{children:["CSS \u7684",(0,l.jsx)(e.code,{children:"font-size"}),"\u5c5e\u6027\u8981\u5199\u6210",(0,l.jsx)(e.code,{children:"fontSize"}),"\uff0c\u8fd9\u662f JavaScript \u64cd\u4f5c CSS \u5c5e\u6027\u7684",(0,l.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference",children:"\u7ea6\u5b9a"}),"\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5176\u5b9e{ } \u53ef\u4f20\u5165\u8868\u8fbe\u5f0f\uff0c\u6bd4\u65b9\u8fd9\u91cc\u4f20\u5165\u7684\u5c31\u662f",(0,l.jsx)(e.code,{children:'{ fontSize: "32px",textAlign: "center" }'})," \u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u5c06\u5176\u5b9a\u4e49\u4e3a\u4e00\u4e2a\u53d8\u91cf\u4f20\u5165\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4f46\u662f\u5199\u5185\u8054\u6837\u5f0f\u663e\u5f97\u7ec4\u4e11\u964b\u5f71\u54cd\u9605\u8bfb\uff0c\u5e76\u4e14\u6837\u5f0f\u4e0d\u6613\u4e8e\u590d\u7528\uff0c\u540c\u65f6\u4f2a\u5143\u7d20\u4e0e\u5a92\u4f53\u67e5\u8be2\u65e0\u6cd5\u5b9e\u73b0\uff0c\u4f46\u662f\u5c01\u88c5\u6210\u7c7b\u6837\u5f0f\uff0c\u53c8\u4f1a\u5f71\u54cd\u5230\u5168\u5c40\u4f5c\u7528\u57df\uff0c\u6240\u4ee5\u4fbf\u6709\u4e86\u5c40\u90e8\u6837\u5f0f",(0,l.jsx)(e.code,{children:"styles.module.css"})," \u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u5c40\u90e8\u6837\u5f0f-css-modules",children:"\u5c40\u90e8\u6837\u5f0f CSS Modules"}),"\n",(0,l.jsxs)(e.p,{children:["Css Modules \u5e76\u4e0d\u662f React \u4e13\u7528\u89e3\u51b3\u65b9\u6cd5\uff0c\u9002\u7528\u4e8e\u6240\u6709\u4f7f\u7528 webpack \u7b49\u6253\u5305\u5de5\u5177\u7684\u5f00\u53d1\u73af\u5883\u3002\u4ee5 webpack \u4e3a\u4f8b\uff0c\u5728 css-loader \u7684 options \u91cc\u6253\u5f00",(0,l.jsx)(e.code,{children:"modules\uff1atrue"})," \u9009\u9879\u5373\u53ef\u4f7f\u7528 Css Modules\u3002\u4e00\u822c\u914d\u7f6e\u5982\u4e0b"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-js",children:'{\n  loader: "css-loader",\n  options: {\n    importLoaders: 1,\n    modules: true,\n    localIdentName: "[name]__[local]___[hash:base64:5]"  // \u4e3a\u4e86\u751f\u6210\u7c7b\u540d\u4e0d\u662f\u7eaf\u968f\u673a\n  },\n},\n\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540e\u901a\u8fc7 import \u5f15\u5165"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"import styles from './styles.module.css'\n\nfunction Hello() {\n  return <div className={styles.box}>hello react</div>\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u5982\u679c\u662f\u6709\u591a\u4e2a\u5c40\u90e8\u6837\u5f0f\uff0c\u76f4\u63a5\u62fc\u63a5\u662f\u65e0\u6548\u7684\uff08\u6bd5\u7adf\u662f\u4e2a\u65e0\u6548\u7684\u8868\u8fbe\u5f0f\uff09"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:'// \u9519\u8bef\n<div className={style.class1 style.class2}</div>\n\n// \u6b63\u786e\n<div className={`${style.class1} ${style.class2}`}</div>\n<div className={style.class1+ " " +style.class2}</div>\n<div className={[style.class1,style.class2].join(" ")}</div>\n\n'})}),"\n",(0,l.jsx)(e.h3,{id:"classnames",children:"classnames"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd8\u53ef\u4ee5\u901a\u8fc7 npm \u5305 classnames \u6765\u5b9a\u4e49\u7c7b\u540d\uff0c\u5982"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"import classnames from 'classnames'\nimport styles from './styles.module.css'\n\n;<div className={classnames(styles.class1, styles.class2)}></div>\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u7ec8\u90fd\u5c06\u7f16\u8bd1\u4e3a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"<div class='class1 class2'></div>\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u7136 classnames \u8fd8\u6709\u591a\u79cd\u65b9\u5f0f\u6dfb\u52a0\uff0c\u5c31\u4e0d\u5217\u4e3e\u4e86\uff0c\u4e3b\u8981\u9488\u5bf9\u590d\u6742\u6837\u5f0f\uff0c\u6839\u636e\u6761\u4ef6\u662f\u5426\u6dfb\u52a0\u6837\u5f0f\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f46\u662f \u5728 Css Module \u4e2d\uff0c\u5176\u5b9e\u80fd\u53d1\u73b0\u633a\u591a\u95ee\u9898\u7684"}),"\n",(0,l.jsxs)(e.p,{children:["\u5982\u679c\u7c7b\u540d\u662f\u5e26\u6709-\u8fde\u5b57\u7b26",(0,l.jsx)(e.code,{children:".table-size"}),"\u90a3\u4e48\u5c31\u53ea\u80fd",(0,l.jsx)(e.code,{children:'styles["table-size"]'})," \u6765\u5f15\u7528\uff0c\u5e76\u4e14\u90fd\u5fc5\u987b\u4f7f\u7528",(0,l.jsx)(e.code,{children:"{style.className}"})," \u5f62\u5f0f\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u6700\u4e3b\u8981\u7684\u662f\uff0ccss \u90fd\u5199\u5728 css \u6587\u4ef6\u4e2d\uff0c\u65e0\u6cd5\u5904\u7406\u52a8\u6001 css\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"css-in-js",children:"CSS in JS"}),"\n",(0,l.jsxs)(e.p,{children:["\u7531\u4e8e React \u5bf9 CSS \u7684\u5c01\u88c5\u975e\u5e38\u5f31\uff0c\u5bfc\u81f4\u4e86\u4e00\u7cfb\u5217\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u7528\u6765\u52a0\u5f3a CSS \u64cd\u4f5c\uff0c\u7edf\u79f0\u4e3a CSS in JS\uff0c\u6709\u4e00\u79cd\u5728 js \u6587\u4ef6\u4e2d\u5199 css \u4ee3\u7801\u7684\u611f\u89c9\uff0c\u6839\u636e\u4e0d\u5b8c\u5168\u7edf\u8ba1\uff0c\u5404\u79cd CSS in JS \u7684\u5e93\u81f3\u5c11\u6709",(0,l.jsx)(e.a,{href:"https://github.com/MicheleBertoli/css-in-js",children:"47 \u79cd"}),"\uff0c\u5176\u4e2d\u6bd4\u8f83\u51fa\u540d\u7684 \u4fbf\u662f",(0,l.jsx)(e.a,{href:"https://link.juejin.cn/?target=https://github.com/styled-components/styled-components",children:"styled-components"}),"\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"import styled from 'styled-components'\n\n// `` \u548c () \u4e00\u6837\u53ef\u4ee5\u4f5c\u4e3ajs\u91cc\u4f5c\u4e3a\u51fd\u6570\u63a5\u53d7\u53c2\u6570\u7684\u6807\u5fd7\uff0c\u8fd9\u4e2a\u505a\u6cd5\u7c7b\u4f3c\u4e8eHOC\uff0c\u5305\u88f9\u4e00\u5c42css\u5230h1\u4e0a\u751f\u6210\u65b0\u7ec4\u4ef6Title\nconst Title = styled.h1`\n  font-size: 1.5em;\n  text-align: center;\n  color: palevioletred;\n\n  span {\n    font-size: 2em;\n  }\n`\n\n// \u5728\u5145\u5206\u4f7f\u7528css\u5168\u90e8\u529f\u80fd\u7684\u540c\u65f6\uff0c\u975e\u5e38\u65b9\u4fbf\u7684\u5b9e\u73b0\u52a8\u6001css\uff0c \u751a\u81f3\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528props\uff01\nconst Wrapper = styled.section`\n  padding: 4em;\n  background: ${(props) => props.bgColor};\n`\n\nconst Button = styled.a`\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ${(props) =>\n    props.primary &&\n    css`\n      background: white;\n      color: palevioletred;\n    `}\n`\n\nconst App = () => (\n  <Wrapper bgColor='papayawhi'>\n    <Title>\n      <span>Hello World</span>, this is my first styled component!\n    </Title>\n    <Button href='https://github.com/styled-components/styled-components' target='_blank' rel='noopener' primary>\n      GitHub\n    </Button>\n  </Wrapper>\n)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u50cf\u4e0a\u9762\u7684 Title\uff0cWrapper\uff0cButton \u90fd\u662f\u7ec4\u4ef6\uff0cTitle \u672c\u8d28\u5c31\u662f\u4e00\u4e2a h1 \u6807\u7b7e\uff0c\u5728\u901a\u8fc7\u6a21\u677f\u5b57\u7b26\u4e32\u7f16\u5199\u5c40\u90e8 css \u6837\u5f0f\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u80fd\u76f4\u63a5\u7f16\u5199\u5b50\u5143\u7d20\u7684\u6837\u5f0f\uff0c\u4ee5\u53ca",(0,l.jsx)(e.code,{children:"& :hover"}),"\u7b49 Sass \u8bed\u6cd5\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u6839\u636e\u4f20\u5165\u5c5e\u6027\uff0c\u5728 css \u4e2d\u4f7f\u7528\uff0cWrapper \u4f20\u5165\u80cc\u666f\u989c\u8272\u5c5e\u6027\uff0cButton \u5224\u65ad\u662f\u5426\u4e3a primary\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u5e76\u4e14\u80fd\u65b9\u4fbf\u7684\u7ed9\u66b4\u9732",(0,l.jsx)(e.code,{children:"className"})," props \u7684\u4e09\u65b9 UI \u5e93\u4e0a\u6837\u5f0f\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"const StyledButton = styled(Button)` ... `\n"})}),"\n",(0,l.jsx)(e.h2,{id:"styled-jsx",children:"styled-jsx"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://github.com/vercel/styled-jsx",children:"vercel/styled-jsx: Full CSS support for JSX without compromises (github.com)"})}),"\n",(0,l.jsxs)(e.p,{children:["styled-jsx \u6982\u62ec\u7b2c\u4e00\u5370\u8c61\u5c31\u662f React css \u7684 vue \u89e3\u51b3\u3002",(0,l.jsx)(e.code,{children:"yarn add styled-jsx"})," \u5b89\u88c5\u540e\uff0c\u4e0d\u7528",(0,l.jsx)(e.code,{children:"import"}),"\uff0c\u800c\u662f\u4e00\u4e2a babel \u63d2\u4ef6\uff0c",(0,l.jsx)(e.code,{children:".babelrc"}),"\u914d\u7f6e\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-JavaScript",children:'{\n  "plugins": [\n    "styled-jsx/babel"\n  ]\n}\n\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"\nrender () {\n    return <div className='table'>\n        <div className='row'>\n            <div className='cell'>A0</div>\n            <div className='cell'>B0</div>\n        </div>\n        <style jsx>{`\n          .table {\n            margin: 10px;\n          }\n          .row {\n            border: 1px solid black;\n          }\n          .cell {\n            color: red;\n          }\n    `}</style>\n    </div>;\n}\n\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u53ea\u4f1a\u4f5c\u7528\u5230\u540c\u7ea7\u6807\u7b7e\u4f5c\u7528\u57df\uff0c\u53ef\u4ee5\u8bf4\u662f\u4e00\u79cd\u53e6\u7c7b\u7684\u5185\u8054\u6837\u5f0f\u4e86\uff0c\u5982\u679c\u4e0d\u559c\u6b22\u5c06\u6837\u5f0f\u5199\u5728 render \u91cc\uff0cstyled-jsx \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.jsx)(e.code,{children:"css"})," \u7684\u5de5\u5177\u51fd\u6570\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"import css from 'styled-jsx/css'\n\nexport default () => (\n  <div>\n    <button>styled-jsx</button>\n    <style jsx>{button}</style>\n  </div>\n)\n\nconst button = css`\n  button {\n    color: hotpink;\n  }\n`\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8865\u5145\uff1a\u73b0\u5728\u6211\u66f4\u63a8\u8350\u4f7f\u7528 Emotion\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u539f\u5b50\u7c7b",children:"\u539f\u5b50\u7c7b"}),"\n",(0,l.jsx)(e.p,{children:"\u7b80\u5355\u8bf4\uff0c\u5c31\u662f\u5c06\u5e38\u7528\u7684 css \u6837\u5f0f\u90fd\u5c01\u88c5\u5b8c\uff0c\u53ea\u9700\u8981\u5728 class \u4e2d\u5f15\u5165\u5373\u53ef"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd9\u91cc\u9009\u7528\u5f53\u7ea2\u6846\u67b6 ",(0,l.jsx)(e.a,{href:"https://www.tailwindcss.cn/",children:"Tailwind CSS"})," \u4f5c\u4e3a\u6f14\u793a\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6bd4\u65b9\u8bf4 flex \u5e03\u5c40\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u5199 ",(0,l.jsx)(e.code,{children:"dispaly: flex;"})," \u4f46\u662f\u5c01\u88c5\u6210\u7c7b\uff0c\u5982"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-CSS",children:".flex {\n  dispaly: flex;\n}\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f15\u7528\u7684\u65f6\u5019\u76f4\u63a5\u5728 class \u4e2d\u6dfb\u52a0 flex \u5373\u53ef"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"<h1 class='flex'>tailwindcss</h1>\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8d34\u4e00\u5f20\u5b98\u65b9\u6f14\u793a\u56fe\uff0c\u628a\u5927\u90e8\u5206\u5e38\u7528\u7684\u6837\u5f0f\u90fd\u5c01\u88c5\u6210 class"}),"\n",(0,l.jsxs)(e.p,{children:["\u5b98\u65b9\u5728\u7ebf\u4f8b\u5b50\uff08\u4e0b\u56fe\uff09 ",(0,l.jsx)(e.a,{href:"https://play.tailwindcss.com/",children:"Tailwind Play (tailwindcss.com)"})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://img.kuizuo.cn/20220114033240.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u6709\u4ee5\u4e0b\u51e0\u79cd\u4f18\u70b9\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\u6e90\u4ee3\u7801\u65e0\u975e\u5c31\u662f css \u7684\u57fa\u672c\u6837\u5f0f\uff0c\u5982 class ",(0,l.jsx)(e.code,{children:"w-auto"})," \u5bf9\u5e94 css ",(0,l.jsx)(e.code,{children:"width: auto;"})," \u7b49\u7b49"]}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679c\u4e0d\u662f\u7279\u522b\u590d\u6742\u7684\u6837\u5f0f\uff0c\u751a\u81f3\u53ef\u4ee5\u4e0d\u7528\u5199\u4e00\u6761 css \u4ee3\u7801\uff0c\u5f00\u53d1\u6548\u7387\u6760\u6760\u7684\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u4f53\u79ef\u5f88\u5c0f\uff0c\u66f4\u597d\u7684\u6837\u5f0f\u590d\u7528\uff0c\u5e76\u4e14\u6253\u5305\u540e\u4f1a\u6839\u636e\u6240\u7528\u7684 class \u8fdb\u884c\u6253\u5305\uff0c\u800c\u975e\u5168\u90e8\u65e0\u7528\u6837\u5f0f\u6253\u5305\u3002"}),"\n",(0,l.jsxs)(e.li,{children:["\u4e0e bootstrap \u8bbe\u8ba1\u4e0d\u540c\uff0c\u5b8c\u5168\u53ef\u4ee5\u5b9a\u5236\u5316\u4e0d\u540c\u7c7b\u578b\u7684\u7ec4\u4ef6\uff0c\u800c\u4e0d\u662f\u50cf ",(0,l.jsx)(e.code,{children:'class="btn btn-danger"'})," \u8fd9\u6837\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4f53\u9a8c\u4e0b\u6765\u57fa\u672c\u4e0a\u5c31\u662f\u5728\u5199\u5185\u8054\u6837\u5f0f inline css \u4f46\u662f\u540c\u65f6\u53c8\u4e0d\u663e\u5f97\u6742\u4e71\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u7ec4\u4ef6\u5316\u4e2d\u4f7f\u7528",children:"\u7ec4\u4ef6\u5316\u4e2d\u4f7f\u7528"}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u7ec4\u4ef6\u5316\u5f00\u53d1\u4e2d\uff0c\u5b8c\u5168\u53ef\u4ee5\u81ea\u5df1\u5b9e\u73b0\u4e00\u4e2a Button \u6309\u94ae\uff08\u4e0a\u95f4\u8ddd ",(0,l.jsx)(e.code,{children:"pt-4"}),"\uff0c\u5e95\u90e8\u95f4\u8ddd ",(0,l.jsx)(e.code,{children:"pb-10"}),"\uff0c\u6587\u5b57\u4e3a ",(0,l.jsx)(e.code,{children:"text-sky-500"})," \u5929\u84dd\u8272\uff09\uff0c"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"const Button = ({ children, color }) => (\n    <a className=`pt-4 pb-10 text-sky-500 ${color}`>{children}</a>\n)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u8fc7\u8981\u8bf4\u7f3a\u70b9\u7684\u8bdd\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u53ef\u80fd\u4e4b\u524d\u6807\u9898\u53ea\u9700\u8981\u5b9a\u4e49.title \u7c7b\u6765\u5b8c\u6210\u5168\u90e8\u6837\u5f0f\uff0c\u800c tailwind \u9700\u8981\u597d\u51e0\u4e2a css \u539f\u5b50\u7c7b\u6765\u5b9e\u73b0"}),"\n",(0,l.jsx)(e.li,{children:"\u521d\u5b66\u8005\u53ef\u80fd\u4e0d\u9002\u5e94\uff0c\u9700\u8981\u53cd\u590d\u7684\u67e5\u9605\u6587\u6863\u3002\uff08\u4e0d\u8fc7\u7528\u591a\u4e86\uff0c\u81ea\u7136\u5c31\u4f1a\u4e60\u60ef\u4e86\uff09"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u7136\u540e\u8fd8\u6709\u4e00\u4e2a WindCSS\uff0c\u53ef\u4ee5\u770b\u4f5c\u662f",(0,l.jsx)(e.strong,{children:"\u6309\u9700\u4f9b\u5e94\u7684"})," Tailwind \u66ff\u4ee3\u65b9\u6848\u3002\u4e0d\u8fc7\u6682\u65f6\u4e0d\u652f\u6301 React\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6b64\u5916\u8fd8\u6709\u4e00\u7bc7\u6587\u7ae0\u975e\u5e38\u63a8\u8350 ",(0,l.jsx)(e.a,{href:"https://antfu.me/posts/reimagine-atomic-css-zh",children:"\u91cd\u65b0\u6784\u60f3\u539f\u5b50\u5316 CSS (antfu.me)"}),"\uff0c\u4e0d\u591a\u8bf4\uff0c\u518d\u5237\u4e00\u904d\u3002"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6700\u4f73\u5b9e\u73b0",children:"\u6700\u4f73\u5b9e\u73b0\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u4ecb\u7ecd\u5b8c\u51e0\u79cd React \u4e2d Css \u7684\u5b9e\u73b0\uff08\u5f53\u7136\u8fd8\u6709\u5f88\u591a\u5e93\u6ca1\u4ecb\u7ecd\uff0c\u4e3b\u8981\u6311\u51e0\u79cd\u4e3b\u6d41\u7684\uff09\uff0c\u5b9e\u9645\u53c8\u8981\u9009\u62e9\u54ea\u79cd\u5462\uff1f"}),"\n",(0,l.jsx)(e.p,{children:"\u8bf4\u8bf4\u6211\u76ee\u524d react \u6240\u9009\u7684\u64cd\u4f5c\uff0ctailwind\uff08\u539f\u5b50\u7c7b\uff09+ CSS modules\uff0c\u5199\u4e00\u4e9b\u5c0f\u9879\u76ee\u6216\u8005 demo \u751a\u81f3\u90fd\u6ca1\u5fc5\u8981\u5199 css \u4ee3\u7801\uff0c\u6bd5\u7adf css \u662f\u5927\u591a\u6570\u524d\u7aef\u7a0b\u5e8f\u5458\u90fd\u4e0d\u662f\u90a3\u4e48\u60f3\u5199\u7684\uff08\u5305\u62ec\u6211\uff09\u3002\u800c\u505a\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u5c0f\u7ec4\u4ef6\u7684\u8bdd\u90a3\u80af\u5b9a\u662f styled-components\uff0c\u800c styled-jsx\uff0c\u5bf9\u7ec4\u4ef6\u4ee3\u7801\u727a\u7272\u633a\u5927\u6240\u4ee5\u4e0d\u600e\u4e48\u5199\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u8fc7\u6bcf\u4e2a\u4eba\u4f7f\u7528\u98ce\u683c\u4e0d\u540c\uff0c\u6211\u4e00\u5f00\u59cb\u63a5\u89e6\u539f\u5b50\u7c7b\u662f windicss\uff0c\u7528\u4e45\u4e86\u4e4b\u540e\u4e60\u60ef\u4e86\u5e38\u7528\u7684 class\uff0c\u7f16\u5199\u8d77\u6765\u53ef\u4ee5\u8bf4\u662f\u76f8\u5f53\u7684\u5feb\u6377\u4e86\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u8fc7\u76f8\u6bd4 Vue \u800c\u8a00\uff0creact \u7684 css \u5b9e\u73b0\u7740\u5b9e\u8d39\u52b2\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u53c2\u8003\u94fe\u63a5\uff1a"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://www.ruanyifeng.com/blog/2016/06/css_modules.html",children:"CSS Modules \u7528\u6cd5\u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7 (ruanyifeng.com)"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://www.ruanyifeng.com/blog/2017/04/css_in_js.html",children:"CSS in JS \u7b80\u4ecb - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7 (ruanyifeng.com)"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://juejin.cn/post/6844903638289252360",children:"React \u62fe\u9057\uff1a\u4ece 10 \u79cd\u73b0\u5728\u6d41\u884c\u7684 CSS \u89e3\u51b3\u65b9\u6848\u8c08\u8c08\u6211\u7684\u6700\u7231 \uff08\u4e0b\uff09 - \u6398\u91d1 (juejin.cn)"})}),"\n"]})]})}e.default=function(s={}){const{wrapper:e}=Object.assign({},(0,c.ah)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(o,s)})):o(s)}},11151:function(s,e,n){n.d(e,{Zo:function(){return r},ah:function(){return t}});var l=n(67294);const c=l.createContext({});function t(s){const e=l.useContext(c);return l.useMemo((()=>"function"==typeof s?s(e):{...e,...s}),[e,s])}const i={};function r({components:s,children:e,disableParentContext:n}){let r;return r=n?"function"==typeof s?s({}):s||i:t(s),l.createElement(c.Provider,{value:r},e)}}}]);