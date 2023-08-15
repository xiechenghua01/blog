"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[66245],{48146:function(e,n,r){r.r(n),r.d(n,{assets:function(){return o},contentTitle:function(){return c},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var t=r(85893),a=r(11151);const s={id:"vue-reactive-data-basic-type",slug:"/vue-reactive-data-basic-type",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b",date:new Date("2022-05-18T00:00:00.000Z"),authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},c=void 0,l={unversionedId:"skill/vue/vue-reactive-data-basic-type",id:"skill/vue/vue-reactive-data-basic-type",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b",description:"\u5b66\u8fc7 js \u7684\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5e76\u975e\u5f15\u7528\u7c7b\u578b\uff0c\u76f4\u63a5\u4fee\u6539\u662f\u65e0\u6cd5\u76f4\u63a5\u62e6\u622a\u7684",source:"@site/docs/skill/vue/Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b.md",sourceDirName:"skill/vue",slug:"/vue-reactive-data-basic-type",permalink:"/en/docs/vue-reactive-data-basic-type",draft:!1,unlisted:!1,tags:[{label:"vue",permalink:"/en/docs/tags/vue"},{label:"javascript",permalink:"/en/docs/tags/javascript"}],version:"current",frontMatter:{id:"vue-reactive-data-basic-type",slug:"/vue-reactive-data-basic-type",title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4b\u57fa\u672c\u6570\u636e\u7c7b\u578b",date:"2022-05-18T00:00:00.000Z",authors:"kuizuo",tags:["vue","javascript"],keywords:["vue","javascript"]},sidebar:"skill",previous:{title:"Vue\u54cd\u5e94\u5f0f\u6570\u636e\u4e4bArray",permalink:"/en/docs/vue-reactive-data-array"},next:{title:"Pinia",permalink:"/en/docs/pinia"}},o={},u=[{value:"\u533a\u522b\u662f\u5426\u4e3a ref",id:"\u533a\u522b\u662f\u5426\u4e3a-ref",level:2},{value:"\u54cd\u5e94\u4e22\u5931\u95ee\u9898",id:"\u54cd\u5e94\u4e22\u5931\u95ee\u9898",level:2},{value:"\u81ea\u52a8\u8131 ref",id:"\u81ea\u52a8\u8131-ref",level:2},{value:"\u6700\u7ec8\u4ee3\u7801",id:"\u6700\u7ec8\u4ee3\u7801",level:2}];function i(e){const n=Object.assign({p:"p",pre:"pre",code:"code",h2:"h2"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5b66\u8fc7 js \u7684\u5e94\u8be5\u90fd\u77e5\u9053\uff0c\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5e76\u975e\u5f15\u7528\u7c7b\u578b\uff0c\u76f4\u63a5\u4fee\u6539\u662f\u65e0\u6cd5\u76f4\u63a5\u62e6\u622a\u7684"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"let str = 'vue'\n// \u65e0\u6cd5\u62e6\u622astr\nstr = 'vue3'\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f88\u5bb9\u6613\u60f3\u5230\uff0c\u7528\u975e\u539f\u59cb\u503c\u201c\u5305\u88f9\u201d\u539f\u59cb\u503c\uff0c\u6210\u4e00\u4e2a\u5bf9\u8c61\u7684\u5f62\u5f0f\uff0c\u7136\u540e\u5bf9\u5305\u88f9\u5bf9\u8c61 wrapper \u8fdb\u884c proxy \u62e6\u622a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const wrapper = {\n  value: 'vue',\n}\n\nconst name = reactive(wrapper)\n\nname.value = 'vue3'\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u51fa\u610f\u5916(\u80af\u5b9a\u4e0d\u4f1a\u51fa)\uff0c\u5c06\u4f1a\u8f93\u51fa"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"SET value vue3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0d\u96be\u53d1\u73b0\uff0cvue2 \u4e2d\u5bf9\u539f\u59cb\u503c\u7684\u54cd\u5e94\u90fd\u662f\u5c06\u5176\u5305\u88f9\u5728 data \u51fd\u6570\u4e0b\u8fd4\u56de\u7684\u5bf9\u8c61\uff0c\u5e76\u4e14\u4ece\u4e0a\u9762\u7684\u4ee3\u7801\u4e0a\u6765\u770b\u3002\u4f46\u4ece\u5f00\u53d1\u8005\u7684\u89d2\u5ea6\u8fd8\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u5305\u88c5\u5bf9\u8c61\uff0c\u4e0d\u6613\u64cd\u4f5c\u7684\u540c\u65f6\uff0c\u4e5f\u610f\u5473\u4e0d\u89c4\u8303\u3002\u4e8e\u662f vue3 \u5c01\u88c5\u4e86 ref \u51fd\u6570\uff0c\u800c\u8fd4\u56de\u7684\u5bf9\u8c61\u4fbf\u662f\u54cd\u5e94\u5f0f\u7684\u5305\u88c5\u5bf9\u8c61",(0,t.jsx)(n.code,{children:"reactive(wrapper)"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function ref(val) {\n  const wrapper = {\n    value: val,\n  }\n\n  return reactive(wrapper)\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4e0a\u9762\u7684\u4ee3\u7801\u4fbf\u6539\u5199\u4e3a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const name = ref('vue')\n\nname.value = 'vue3'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u533a\u522b\u662f\u5426\u4e3a-ref",children:"\u533a\u522b\u662f\u5426\u4e3a ref"}),"\n",(0,t.jsxs)(n.p,{children:["\u8981\u533a\u522b\u4e00\u4e2a\u6570\u636e\u662f\u5426\u4e3a ref\uff0c\u53ea\u9700\u8981\u5728 ref \u4e2d\u5b9a\u4e49\u4e00\u4e2a\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027",(0,t.jsx)(n.code,{children:"__v_isRef"}),"\u503c\u4e3a true\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function ref(val) {\n  const wrapper = {\n    value: val,\n  }\n\n  Object.defineProperty(wrapper, '__v_isRef', {\n    value: true,\n  })\n\n  return reactive(wrapper)\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u54cd\u5e94\u4e22\u5931\u95ee\u9898",children:"\u54cd\u5e94\u4e22\u5931\u95ee\u9898"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u89e3\u6784\u8d4b\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u54cd\u5e94\u4e22\u5931\u7684\u60c5\u51b5\uff0c\u4f8b\u5982"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const obj = reactive({ foo: 1, bar: 2 })\n\nconst user = {\n  ...obj,\n}\n\nuser.foo.value = 3\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u53ef\u4ee5\u53d1\u73b0\uff0c\u5e76\u4e0d\u4f1a\u8f93\u51fa SET foo 3\uff0c\u4e3b\u8981\u7531\u5c55\u5f00\u8fd0\u7b97\u7b26...\u6240\u5bfc\u81f4\u7684\u3002\u4e0a\u9762\u7684 user \u5c31\u7b49\u4ef7\u4e8e{ foo: 1, bar: 2 }"}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5 Vue \u5219\u5c01\u88c5\u4e86 toRef \u548c toRefs \u65b9\u6cd5\uff0c\u5c06\u67d0\u4e2a\u5bf9\u8c61\u7684 key \u5305\u88f9\u4e3a ref"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function toRef(obj, key) {\n  const wrapper = {\n    get value() {\n      return obj[key]\n    },\n    set value(val) {\n      obj[key] = val\n    },\n  }\n\n  Object.defineProperty(wrapper, '__v_isRef', {\n    value: true,\n  })\n\n  return wrapper\n}\n\nfunction toRefs(obj) {\n  const ret = {}\n  for (const key in obj) {\n    ret[key] = toRef(obj, key)\n  }\n\n  return ret\n}\n\nconst obj = reactive({ foo: 1, bar: 2 })\n\nconst user = {\n  ...toRefs(obj),\n}\n\nuser.foo.value = 3\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u7ed3\u679c\u4fbf\u80fd\u6b63\u5e38\u76d1\u542c\u54cd\u5e94\u5f0f\uff0c\u5e76\u8f93\u51fa SET foo 3"}),"\n",(0,t.jsx)(n.h2,{id:"\u81ea\u52a8\u8131-ref",children:"\u81ea\u52a8\u8131 ref"}),"\n",(0,t.jsx)(n.p,{children:"toRefs \u662f\u89e3\u51b3\u4e86\u54cd\u5e94\u5f0f\u7684\u95ee\u9898\uff0c\u4f46\u540c\u65f6\u4e5f\u5e26\u6765\u4e86\u4e00\u4e2a\u65b0\u7684\u95ee\u9898\u3002\u7531\u4e8e toRefs \u4f1a\u628a\u54cd\u5e94\u5f0f\u6570\u636e\u7b2c\u4e00\u5c42\u8f6c\u4e3a ref\uff0c\u6240\u4ee5\u5c31\u5fc5\u987b\u901a\u8fc7 value \u6765\u8bbf\u95ee\u5c5e\u6027\uff0c\u8fd9\u5728\u6a21\u677f\u4e2d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-HTML",children:"<p>{{ foo.value }}</p>\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u662f\u6211\uff0c\u6211\u80af\u5b9a\u4e0d\u4f1a\u4f7f\u7528 Vue\u3002\u6240\u4ee5 Vue \u63d0\u4f9b\u81ea\u52a8\u8131 ref \u7684\u80fd\u529b\uff0c\u901a\u4fd7\u70b9\u5c31\u662f\u7701\u7565.value\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function proxyRefs(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const value = Reflect.get(target, key, receiver)\n      return value.__v_isRef ? value.value : value\n    },\n    set(target, key, newValue, receiver) {\n      const value = target[key]\n      if (value.__v_isRef) {\n        value.value = newValue\n        return true\n      }\n\n      return Reflect.set(target, key, newValue, receiver)\n    },\n  })\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u5176 user \u6570\u636e\u4f20\u9012\u7ed9 proxyRefs \u51fd\u6570\u8fdb\u884c\u5904\u7406\uff0c\u4fbf\u53ef\u7701\u7565.value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const user = proxyRefs({\n  ...toRefs(obj),\n})\n\nconsole.log(user.foo) // 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u5728\u7f16\u5199 Vue \u7ec4\u4ef6\u65f6\uff0csetup \u8fd4\u56de\u7684\u6570\u636e\u4fbf\u4f1a\u4f20\u9012\u7ed9 proxyRefs \u51fd\u6570\u8fdb\u884c\u5904\u7406\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u7ec8\u4ee3\u7801",children:"\u6700\u7ec8\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"function log(type, key, val) {\n  console.log(type, key, val)\n}\n\nfunction reactive(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const res = Reflect.get(target, key, receiver)\n\n      if (typeof res === 'object' && res !== null) {\n        return reactive(res)\n      }\n\n      log('GET', key, res)\n      return res\n    },\n    set(target, key, newVal, receiver) {\n      const oldVal = target[key]\n\n      const type = Object.prototype.hasOwnProperty.call(target, key) ? 'SET' : 'ADD'\n      const res = Reflect.set(target, key, newVal, receiver)\n\n      if (oldVal !== newVal) {\n        log(type, key, newVal)\n      }\n\n      return res\n    },\n    deleteProperty(target, key) {\n      const hadKey = Object.prototype.hasOwnProperty.call(target, key)\n\n      const res = Reflect.deleteProperty(target, key)\n\n      if (res && hadKey) {\n        log('DELETE', key, res)\n      }\n\n      return res\n    },\n  })\n}\n\nfunction ref(val) {\n  const wrapper = {\n    value: val,\n  }\n\n  Object.defineProperty(wrapper, '__v_isRef', {\n    value: true,\n  })\n\n  return reactive(wrapper)\n}\n\nfunction toRef(obj, key) {\n  const wrapper = {\n    get value() {\n      return obj[key]\n    },\n    set value(val) {\n      obj[key] = val\n    },\n  }\n\n  Object.defineProperty(wrapper, '__v_isRef', {\n    value: true,\n  })\n\n  return wrapper\n}\n\nfunction toRefs(obj) {\n  const ret = {}\n  for (const key in obj) {\n    ret[key] = toRef(obj, key)\n  }\n\n  return ret\n}\n\nfunction proxyRefs(target) {\n  return new Proxy(target, {\n    get(target, key, receiver) {\n      const value = Reflect.get(target, key, receiver)\n      return value.__v_isRef ? value.value : value\n    },\n    set(target, key, newValue, receiver) {\n      const value = target[key]\n      if (value.__v_isRef) {\n        value.value = newValue\n        return true\n      }\n\n      return Reflect.set(target, key, newValue, receiver)\n    },\n  })\n}\n"})})]})}n.default=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}},11151:function(e,n,r){r.d(n,{Zo:function(){return l},ah:function(){return s}});var t=r(67294);const a=t.createContext({});function s(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||c:s(e),t.createElement(a.Provider,{value:l},n)}}}]);