(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{281:function(t,e,r){"use strict";r.r(e);var a=r(0),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"object-create-null-vs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#object-create-null-vs"}},[t._v("#")]),t._v(" Object.create(null) vs {}")]),t._v(" "),r("blockquote",[r("p",[t._v("2019.1.29")])]),t._v(" "),r("p",[t._v("查看 vue 的源码 或者一些开源项目的源码，发现不少地方都是使用 "),r("code",[t._v("Object.create(null)")]),t._v("来创建一个空对象的。")]),t._v(" "),r("p",[t._v("当使用语句 const obj = {}; 创建对象时，它其实并不是一个真的"),r("code",[t._v("空对象")]),t._v("，它从 Object.prototype 上继承了一些方法：")]),t._v(" "),r("ul",[r("li",[t._v("hasOwnProperty")]),t._v(" "),r("li",[t._v("isPrototypeOf")]),t._v(" "),r("li",[t._v("propertyIsEnumerable")]),t._v(" "),r("li",[t._v("toString/toLocaleString")]),t._v(" "),r("li",[t._v("valueOf")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wpimg.wallstcn.com/6b85bd8e-6b25-43e5-bb4f-67268ae364fb.jpg",alt:"img"}})]),t._v(" "),r("p",[t._v("如果使用 "),r("code",[t._v("Object.create(null)")]),t._v(" 创建的对象，在没有继承任何东西。\n![img](https://wpimg.wallstcn.com/01845f8a-ee6b-4b15-88fb-b4a991b86523.jpg）")]),t._v(" "),r("p",[r("strong",[t._v("所以说是不是 "),r("code",[t._v("Object.create(null)")]),t._v(" 是更好的创建一个空对象的方案呢？")])]),t._v(" "),r("p",[t._v("这就要看从 Object 上继承的那些方法我们是不是有用到了。")]),t._v(" "),r("h3",{attrs:{id:"hasownproperty"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hasownproperty"}},[t._v("#")]),t._v(" hasOwnProperty")]),t._v(" "),r("p",[t._v("判断一个对象属性中是否具有指定的属性，返回 "),r("code",[t._v("true")]),t._v(" or "),r("code",[t._v("false")]),t._v("。")]),t._v(" "),r("h3",{attrs:{id:"valueof"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#valueof"}},[t._v("#")]),t._v(" valueOf")]),t._v(" "),r("p",[t._v("valueOf 很少直接使用。在隐式转换类型时，JavaScript 引擎会调用 valueOf 方法，强制把对象转换成原始值：")]),t._v(" "),r("h3",{attrs:{id:"tostring、isprototypeof-和-propertyisenumerable"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tostring、isprototypeof-和-propertyisenumerable"}},[t._v("#")]),t._v(" toString、isPrototypeOf 和 propertyIsEnumerable")]),t._v(" "),r("p",[t._v("这几个方法直接使用的情况较少，但自己的代码中不用并不表示别人写的代码不会调用。比如，有些框架可能会调用 toString 方法来判断结果是否为 [object Object]。")]),t._v(" "),r("h3",{attrs:{id:"结论"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结论"}},[t._v("#")]),t._v(" 结论")]),t._v(" "),r("p",[t._v("因此，我们可以得出结论：当创建的对象只在当前执行环境中使用并且不会用到任何从 Object.prototype 上继承来的方法，也不会将该对象作为其他对象的原型的时候，那么可以使用 Object.create(null)。比如，构造一个字典对象的时候。")]),t._v(" "),r("p",[t._v("不过相对而言 "),r("code",[t._v("const obj={}")]),t._v("在浏览器中的执行速度是会比"),r("code",[t._v("Object.create(null)")]),t._v("快的，具体可点击链接"),r("a",{attrs:{href:"https://jsperf.com/object-create-null-vs-literal/2",target:"_blank",rel:"noopener noreferrer"}},[t._v("test"),r("OutboundLink")],1),t._v("。不过你一般代码中这些性能差距完全是可以忽略不计的。")])])}),[],!1,null,null,null);e.default=v.exports}}]);