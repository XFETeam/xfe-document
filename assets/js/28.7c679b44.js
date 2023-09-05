(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{309:function(t,s,a){"use strict";a.r(s);var r=a(14),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"通用领奖表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用领奖表单"}},[t._v("#")]),t._v(" 通用领奖表单")]),t._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("p",[t._v("通用领奖表单是一个长期在跑的独立页面，通过iframe将这个页面引入到项目中来即可像插件一般即插即用。")]),t._v(" "),s("p",[t._v("移动端使用场景下，直接跳转至拼接好的地址即可")]),t._v(" "),s("p",[t._v("ex：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*注意实物奖品和虚拟奖品的地址不同，正式环境和测试环境的地址不同*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" takePrizeUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("real")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isMaster "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-real'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-real'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("virtual")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isMaster "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-virtual'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-virtual'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//只需要选大区的领奖表单")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("virtualZoneOnly")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" isMaster "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//jx3.xoyo.com/m/common/award-form/0.0.10/#/virtual-zone'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/virtual-zone'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*构建请求需要的参数*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prizeId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" prizeId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*要领取的奖品的id，一般是后端接口获取的*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prizeName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" prizeName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*在领奖页面显示的奖品名称，一般是后端接口获取的*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitUrl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//test-ws.xoyo.com/xxxx/take_prize'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*领奖访问的接口，每个有领奖业务的专题都有属于自己的领奖接口*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("redirectUrl")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jx3.xoyo.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*领完奖后要跳回的地址*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isDaily")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*是否在推栏app中实现免登，移动端一般都要支持，为1，pc端为0， 如有特殊情况，请与需求方和官网对接人确认*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*以上是必填项，以下则根据具体业务和功能选用即可*/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isGetPlayerZone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   isGetPlayerZone: 是否只获取用户有角色的大区列表(可选) 默认false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("skipLogin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitNameIsDaily")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitNamePrizeId")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitNameZone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitNameServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitNameRoleName")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submitDescription")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// submitDescription: 提交描述 - 是增强业务性的提示信息")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("isCurrentAccountOnly")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("projectIdentifier")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jx3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目标识，会在埋点文档中获得")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("eventTags")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lxcd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'laxin'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** 拉新 */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目归属，会在埋点文档中获得")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("eventGroup")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jx3_yuyue_20200421'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//项目组别，会在埋点文档中获得")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" jsonEncodedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeURIComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsonString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" commonAwardFormUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("takePrizeUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("virtual "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?json='")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" jsonEncodedString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//移动端中使用，跳转去构建出来的链接即可")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMobile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" commonAwardFormUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//PC端中使用，创建iframe打开这个链接，并根据业务流程在页面中展示")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" iframe "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<iframe></iframe>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("attr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" commonAwardFormUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//然后根据业务将iframe添加到页面中即可")]),t._v("\n")])])]),s("h2",{attrs:{id:"虚拟奖品领奖表单api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟奖品领奖表单api"}},[t._v("#")]),t._v(" 虚拟奖品领奖表单API")]),t._v(" "),s("p",[t._v("目前支持的参数和效果")]),t._v(" "),s("p",[t._v("prizeId: 奖品 id (必填)")]),t._v(" "),s("p",[t._v("prizeName: 奖品名 (必填)")]),t._v(" "),s("p",[t._v("submitUrl: 提交表单地址 (必填)")]),t._v(" "),s("p",[t._v("redirectUrl: 重定向地址 (必填)")]),t._v(" "),s("p",[t._v("isDaily: 是否江湖daily中登录 0-否 1-是 (必填)")]),t._v(" "),s("p",[t._v("以上为必填，以下根据业务选填")]),t._v(" "),s("p",[t._v("skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false")]),t._v(" "),s("p",[t._v("submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitDescription: 提交描述 - 是增强业务性的提示信息")]),t._v(" "),s("p",[t._v('isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮')]),t._v(" "),s("p",[t._v("以下为埋点统计相关参数，请从埋点文档中获得，埋点文档可从官网对接人员处获取")]),t._v(" "),s("p",[t._v("projectIdentifier(string): 埋点统计, 项目类别: 如: jx3,")]),t._v(" "),s("p",[t._v("eventTags(arrary): 埋点统计，专题tags，这个数组需要替换为埋点文档上的 ev_tag，如：['pc','mobile']")]),t._v(" "),s("p",[t._v("eventGroup(string): 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx")]),t._v(" "),s("p",[t._v("埋点参数传递到通用领奖表单后，在完成领奖业务时会根据参数上报事件，实现相关的数据上报业务")]),t._v(" "),s("h2",{attrs:{id:"实物奖品领奖表单api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实物奖品领奖表单api"}},[t._v("#")]),t._v(" 实物奖品领奖表单API")]),t._v(" "),s("p",[t._v("prizeId: 奖品 id (必填)")]),t._v(" "),s("p",[t._v("prizeName: 奖品名 (必填)")]),t._v(" "),s("p",[t._v("submitUrl: 提交表单地址 (必填)")]),t._v(" "),s("p",[t._v("redirectUrl: 重定向地址 (必填)")]),t._v(" "),s("p",[t._v("isDaily: 是否江湖daily中登录 0-否 1-是 (必填)")]),t._v(" "),s("p",[t._v("以上为必填，以下根据业务选填")]),t._v(" "),s("p",[t._v("skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false")]),t._v(" "),s("p",[t._v("realName: 默认填入的姓名")]),t._v(" "),s("p",[t._v("phone: 默认填入的手机")]),t._v(" "),s("p",[t._v("address: 默认填入的地址")]),t._v(" "),s("p",[t._v("note: 默认填入的备注")]),t._v(" "),s("p",[t._v("hideNote: 是否隐藏备注部分(为空时使用默认值true),")]),t._v(" "),s("p",[t._v("submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameRealName: 提交表单名 - 真实姓名, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNamePhone: 提交表单名 -  手机号, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameAddress: 提交表单名 - 地址, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitDescription: 提交描述 - 是增强业务性的提示信息")]),t._v(" "),s("p",[t._v('isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮')]),t._v(" "),s("p",[t._v("projectIdentifier: 埋点统计, 项目类别: 如: jx3, 必须填写！ (必填)")]),t._v(" "),s("p",[t._v("eventTags: 埋点统计, 必须填写！专题tags，这个数组需要替换为埋点文档上的 ev_tag,")]),t._v(" "),s("p",[t._v("eventGroup: 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx")]),t._v(" "),s("h2",{attrs:{id:"只选大区的虚拟奖品领取表单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#只选大区的虚拟奖品领取表单"}},[t._v("#")]),t._v(" 只选大区的虚拟奖品领取表单")]),t._v(" "),s("p",[t._v("prizeId: 奖品 id (必填)")]),t._v(" "),s("p",[t._v("prizeName: 奖品名 (必填)")]),t._v(" "),s("p",[t._v("submitUrl: 提交表单地址 (必填)")]),t._v(" "),s("p",[t._v("redirectUrl: 重定向地址 (必填)")]),t._v(" "),s("p",[t._v("isDaily: 是否江湖daily中登录 0-否 1-是 (必填)")]),t._v(" "),s("p",[t._v("以上是必填项，以下根据业务选填")]),t._v(" "),s("p",[t._v("isGetPlayerZone: 是否只获取用户有角色的大区列表(可选) 默认false")]),t._v(" "),s("p",[t._v("skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false")]),t._v(" "),s("p",[t._v("submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)")]),t._v(" "),s("p",[t._v("submitDescription: 提交描述 - 是增强业务性的提示信息")]),t._v(" "),s("p",[t._v('isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮')]),t._v(" "),s("p",[t._v("projectIdentifier: 埋点统计, 项目类别: 如: jx3, 必须填写！ (必填)")]),t._v(" "),s("p",[t._v("eventTags: 埋点统计, 必须填写！专题tags，这个数组需要替换为埋点文档上的 ev_tag,")]),t._v(" "),s("p",[t._v("eventGroup: 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx,")])])}),[],!1,null,null,null);s.default=e.exports}}]);