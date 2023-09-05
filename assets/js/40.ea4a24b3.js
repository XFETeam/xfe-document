(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{321:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"移动端页面字体使用参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#移动端页面字体使用参考"}},[t._v("#")]),t._v(" 移动端页面字体使用参考")]),t._v(" "),s("p",[t._v("PC页面中通常使用微软雅黑作为中文字体进行设计，但在移动端，手机系统 ios、android 等是不支持微软雅黑字体，建议使用移动端系统默认的字体进行设置；如需求中有特殊字体或者图标可以使用WEB字体进行设置；")]),t._v(" "),s("h2",{attrs:{id:"系统默认字体设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统默认字体设置"}},[t._v("#")]),t._v(" 系统默认字体设置")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -apple-system"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" BlinkMacSystemFont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PingFang SC"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("STHeiti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Microsoft Yahei"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Tahoma"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Simsun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("sans-serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("-apple-system 是在以 WebKit 为内核的浏览器（如 Safari）中，调用 Apple（苹果公司）系统（iOS, macOS, watchOS, tvOS）中默认字体（现在一般情况下，英文是 San Francisco，中文是苹方）\nBlinkMacSystemFont 是在 Chrome 中实现调用 Apple 的系统字体")])]),t._v(" "),s("p",[s("strong",[t._v("ios 系统默认字体")])]),t._v(" "),s("p",[t._v('iOS 4.0+： 中文字体为 "华文黑体STHeiTi"、英文字体为 "Helvetica Neue"；\niOS 9+： Safari开始支持 -apple-system 参数， Chrome 使用 BlinkMacSystemFont ，兼容 iOS ／ MacOS')]),t._v(" "),s("p",[s("strong",[t._v("android 系统默认字体")])]),t._v(" "),s("p",[t._v("原生Android下中文字体与英文字体都选择默认的无衬线字体。")]),t._v(" "),s("p",[t._v("4.0 之前版本英文字体原生 Android 使用的是 Droid Sans，中文字体原生 Android 会命中 Droid Sans Fallback")]),t._v(" "),s("p",[t._v("4.0 之后中英文字体都会使用原生 Android 新的 Roboto 字体")]),t._v(" "),s("p",[s("strong",[t._v("winphone 系统默认字体")]),t._v(" 默认中文字体是Dengxian(方正等线体)")]),t._v(" "),s("p",[t._v("默认英文和数字字体是Segoe")]),t._v(" "),s("p",[t._v("综上，各个手机系统有自己的默认字体，如无特殊需求，手机端无需定义中文字体，建议使用系统默认字体。如果需求包含特殊字体，可以使用CSS3 @font-face进行定义。")]),t._v(" "),s("h2",{attrs:{id:"web字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web字体"}},[t._v("#")]),t._v(" WEB字体")]),t._v(" "),s("p",[t._v("移动端IOS系统、安卓系统均支持.ttf格式的字体，WEB字体选择中建议引用.ttf格式字体；")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("// 定义web字体\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WebFontName'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string url"}},[t._v("'WebFontName.ttf'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truetype'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".WebFontName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'WebFontName'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("在使用web字体前，请先确认字体是否免费，或是否有该字体的版权；\n中文字体文件一般较大，有几M或者更大，建议使用工具提取页面中需要的字的字体文件；")])]),t._v(" "),s("h2",{attrs:{id:"web字体相关工具介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web字体相关工具介绍"}},[t._v("#")]),t._v(" WEB字体相关工具介绍")]),t._v(" "),s("p",[s("strong",[t._v("字体格式的转换工具")])]),t._v(" "),s("p",[t._v("为了全面兼容不同浏览器，需要.eot,.woff,.ttf,.svg四种格式的字体文件，但大多数我们得到的可能只有一种格式的字体，可以通过一些在线工具进行格式转换")]),t._v(" "),s("ul",[s("li",[t._v("fontsquirrel,上传已有的字体文件，然后会生成所有需要的格式文件；")]),t._v(" "),s("li",[t._v("cloudconvert,全能格式在线转换，适合从一种字体格式转换为另一种；")])]),t._v(" "),s("p",[s("strong",[t._v("提取页面所需字体工具")])]),t._v(" "),s("p",[t._v("推荐使用 字蛛+（Font-spider-Plus）进行字体提取压缩,是一个智能 WebFont 压缩工具，它能自动分析出本地页面和线上页面使用的 WebFont 并进行按需压缩。")])])}),[],!1,null,null,null);s.default=e.exports}}]);