(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{271:function(e,t,r){"use strict";r.r(t);var _=r(0),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cs"}},[e._v("#")]),e._v(" CS")]),e._v(" "),r("h2",{attrs:{id:"mysql"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[e._v("#")]),e._v(" MySQL")]),e._v(" "),r("h3",{attrs:{id:"utf8mb4"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#utf8mb4"}},[e._v("#")]),e._v(" utf8mb4")]),e._v(" "),r("p",[e._v("遇到过一个 bug，管理后台有一个富文本。有一天报了一个 bug，说它复制内容到富文本里面之后保存，总是会缺失一部分内容。刚开始以为是富文本的问题，经过仔细排查之后发现是后端存储的问题。")]),e._v(" "),r("p",[e._v("后端的 MySQL 用的是"),r("code",[e._v("utf8")]),e._v("格式的，所以 emoji 根本就存不了，所以导致这个 emoji 之后的内容都丢失了。如果你想让数据库支持 emoji 的话，就需要改成"),r("code",[e._v("utf8mb4")]),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"gzip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[e._v("#")]),e._v(" Gzip")]),e._v(" "),r("blockquote",[r("p",[e._v("2018-11-13")])]),e._v(" "),r("p",[e._v("很多人都应该听过或者用过 Gzip，知道它能压缩静态资源，但很少有人知道它具体的工作原理。")]),e._v(" "),r("ul",[r("li",[e._v("浏览器请求 url，并在 request header 中设置属性 accept-encoding:gzip。表明浏览器支持 gzip。")]),e._v(" "),r("li",[e._v("服务器收到浏览器发送的请求之后，判断浏览器是否支持 gzip，如果支持 gzip，则向浏览器传送压缩过的内容，不支持则向浏览器发送未经压缩的内容。一般情况下，浏览器和服务器都支持 gzip，response headers 返回包含 content-encoding:gzip。")]),e._v(" "),r("li",[e._v("浏览器接收到服务器的响应之后判断内容是否被压缩，如果被压缩则解压缩显示页面内容。")])]),e._v(" "),r("p",[e._v("Gzip 的核心是 "),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/DEFLATE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deflate"),r("OutboundLink")],1),e._v(" 算法 - 它是同时使用了 LZ77 算法与哈夫曼编码（Huffman Coding）的一个无损数据压缩算法。")]),e._v(" "),r("p",[e._v("LZ77 的核心思路是如果一个串中有两个重复的串，那么只需要知道第一个串的内容和后面串相对于第一个串起始位置的距离 + 串的长度。\n比如： ABCDEFGABCDEFH → ABCDEFG(7,6)H。7 指的是往前第 7 个数开始，6 指的是重复串的长度，ABCDEFG(7,6)H 完全可以表示前面的串，并且是没有二义性的。")]),e._v(" "),r("p",[e._v("Huffman Coding 是大学课本中一般都会提到的算法。核心思路是通过构造 Huffman Tree 的方式给字符重新编码（核心是避免一个叶子的路径是另外一个叶子路径的前缀），以保证出现频路越高的字符占用的字节越少")]),e._v(" "),r("p",[e._v("详细的算法可以见这篇"),r("a",{attrs:{href:"https://blog.csdn.net/imquestion/article/details/16439",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h3",{attrs:{id:"dns"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[e._v("#")]),e._v(" DNS")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://draveness.me/dns-coredns",target:"_blank",rel:"noopener noreferrer"}},[e._v("详解 DNS 与 CoreDNS 的实现原理"),r("OutboundLink")],1)]),e._v(" "),r("h3",{attrs:{id:"cors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[e._v("#")]),e._v(" Cors")]),e._v(" "),r("p",[e._v("又是一个老生常谈的问题，这里就不想说了，有需求的自己看 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN"),r("OutboundLink")],1),e._v("就可以了。")]),e._v(" "),r("p",[e._v("这里要说明一个问题：不是所有的跨域情况下的请求都需要先发送一个 "),r("code",[e._v("options")]),e._v(" 请求的。比如一些简单请求是不需要的\n比如"),r("code",[e._v("get")]),e._v("请求，但也不是所有的 "),r("code",[e._v("get")]),e._v("请求都不会发"),r("code",[e._v("options")]),e._v("。")]),e._v(" "),r("p",[e._v("它的 "),r("code",[e._v("Content-Type")]),e._v(" 的值仅限于下列三者之一：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("text/plain")])]),e._v(" "),r("li",[r("code",[e._v("multipart/form-data")])]),e._v(" "),r("li",[r("code",[e._v("application/x-www-form-urlencoded")])])]),e._v(" "),r("p",[e._v("并且没有设置如下的 自定义"),r("code",[e._v("Header")])]),e._v(" "),r("ul",[r("li",[e._v("Accept")]),e._v(" "),r("li",[e._v("Accept-Language")]),e._v(" "),r("li",[e._v("Content-Language")]),e._v(" "),r("li",[e._v("Content-Type （需要注意额外的限制）")]),e._v(" "),r("li",[e._v("DPR")]),e._v(" "),r("li",[e._v("Downlink")]),e._v(" "),r("li",[e._v("Save-Data")]),e._v(" "),r("li",[e._v("Viewport-Width")]),e._v(" "),r("li",[e._v("Width")])]),e._v(" "),r("p",[e._v("而且还要注意一点，也不是只有"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"}},[e._v("XMLHttpRequest"),r("OutboundLink")],1),e._v("或者 "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("fetch"),r("OutboundLink")],1),e._v("请求才会有跨域问题，使用 drawImage 的 canvas、web 字体 、CSSDOM 也都是有这问题的。")])])}),[],!1,null,null,null);t.default=v.exports}}]);