---
title: 通用领奖表单
---
# 通用领奖表单


## 使用方法
通用领奖表单是一个长期在跑的独立页面，通过iframe将这个页面引入到项目中来即可像插件一般即插即用。
ex：
```javascript
/*注意实物奖品和虚拟奖品的地址不同，正式环境和测试环境的地址不同*/
var takePrizeUrl = {
            real: isMaster ? '//jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-real' : '//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-real',
            virtual: isMaster ? '//jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-virtual' : '//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/pc-virtual',
            //只需要选大区的领奖表单
            virtualZoneOnly: isMaster ? '//jx3.xoyo.com/m/common/award-form/0.0.10/#/virtual-zone' : '//test-zt.xoyo.com/jx3.xoyo.com/m/common/award-form/0.0.10/#/virtual-zone'
        },
/*构建请求需要的参数*/
var jsonString = JSON.stringify({
            prizeId: prizeId, /*要领取的奖品的id，一般是后端接口获取的*/
            prizeName: prizeName, /*在领奖页面显示的奖品名称，一般是后端接口获取的*/
            submitUrl: '//test-ws.xoyo.com/xxxx/take_prize',/*领奖访问的接口，每个有领奖业务的专题都有属于自己的领奖接口*/
            redirectUrl: 'jx3.xoyo.com', /*领完奖后要跳回的地址*/
            isDaily: 1, /*是否在推栏app中实现免登，移动端一般都要支持，为1，pc端为0， 如有特殊情况，请与需求方和官网对接人确认*/
            /*以上是必填项，以下则根据具体业务和功能选用即可*/

            isGetPlayerZone: false, //   isGetPlayerZone: 是否只获取用户有角色的大区列表(可选) 默认false
            skipLogin: false, //   skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false
            submitNameIsDaily: '', // submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)
            submitNamePrizeId: '', // submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)
            submitNameZone: '', // submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)
            submitNameServer: '', // submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)
            submitNameRoleName: '', // submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)
            submitDescription: '', // submitDescription: 提交描述 - 是增强业务性的提示信息
            isCurrentAccountOnly: true, // isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮
            projectIdentifier: 'jx3', //项目标识，会在埋点文档中获得
            eventTags: ['lxcd', 'laxin' /** 拉新 */], //项目归属，会在埋点文档中获得
            eventGroup: 'jx3_yuyue_20200421' //项目组别，会在埋点文档中获得
        });
        var jsonEncodedString = encodeURIComponent(jsonString);
        var iframeUrl =takePrizeUrl.virtual + '?json=' + jsonEncodedString;
        var iframe = $('<iframe></iframe>').attr('src', iframeUrl)
        //然后根据业务将iframe添加到页面中即可
```

## 虚拟奖品领奖表单API

目前支持的参数和效果

prizeId: 奖品 id (必填)

prizeName: 奖品名 (必填)

submitUrl: 提交表单地址 (必填)

redirectUrl: 重定向地址 (必填)

isDaily: 是否江湖daily中登录 0-否 1-是 (必填)

以上为必填，以下根据业务选填

skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false

submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)

submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)

submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)

submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)

submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)

submitDescription: 提交描述 - 是增强业务性的提示信息

isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮

以下为埋点统计相关参数，请从埋点文档中获得，埋点文档可从官网对接人员处获取

projectIdentifier(string): 埋点统计, 项目类别: 如: jx3, 

eventTags(arrary): 埋点统计，专题tags，这个数组需要替换为埋点文档上的 ev_tag，如：['pc','mobile'] 

eventGroup(string): 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx 

埋点参数传递到通用领奖表单后，在完成领奖业务时会根据参数上报事件，实现相关的数据上报业务

## 实物奖品领奖表单API

prizeId: 奖品 id (必填)

prizeName: 奖品名 (必填)

submitUrl: 提交表单地址 (必填)

redirectUrl: 重定向地址 (必填)

isDaily: 是否江湖daily中登录 0-否 1-是 (必填)

以上为必填，以下根据业务选填

skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false

realName: 默认填入的姓名

phone: 默认填入的手机

address: 默认填入的地址

note: 默认填入的备注

hideNote: 是否隐藏备注部分(为空时使用默认值true), 

submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)

submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)

submitNameRealName: 提交表单名 - 真实姓名, 用于提交后端时的 key (为空时使用默认值)

submitNamePhone: 提交表单名 -  手机号, 用于提交后端时的 key (为空时使用默认值)

submitNameAddress: 提交表单名 - 地址, 用于提交后端时的 key (为空时使用默认值)

submitDescription: 提交描述 - 是增强业务性的提示信息

isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮

projectIdentifier: 埋点统计, 项目类别: 如: jx3, 必须填写！ (必填)

eventTags: 埋点统计, 必须填写！专题tags，这个数组需要替换为埋点文档上的 ev_tag,

eventGroup: 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx

##只选大区的虚拟奖品领取表单

prizeId: 奖品 id (必填)

prizeName: 奖品名 (必填)

submitUrl: 提交表单地址 (必填)

redirectUrl: 重定向地址 (必填)

isDaily: 是否江湖daily中登录 0-否 1-是 (必填)

以上是必填项，以下根据业务选填

isGetPlayerZone: 是否只获取用户有角色的大区列表(可选) 默认false

skipLogin: 是否跳过登录, 当设置该值后, 将不会弹出登录界面, 直接进入填写领奖页面, 默认 false

submitNameIsDaily: 提交表单名 - 是否是daily, 用于提交后端时的 key (为空时使用默认值)

submitNamePrizeId: 提交表单名 - 奖品 id, 用于提交后端时的 key (为空时使用默认值)

submitNameZone: 提交表单名 - 区, 用于提交后端时的 key (为空时使用默认值)

submitNameServer: 提交表单名 - 服, 用于提交后端时的 key (为空时使用默认值)

submitNameRoleName: 提交表单名 - 角色名, 用于提交后端时的 key (为空时使用默认值)

submitDescription: 提交描述 - 是增强业务性的提示信息

isCurrentAccountOnly: 是否仅仅允许使用当前账户, 即隐藏"切换账号"按钮


projectIdentifier: 埋点统计, 项目类别: 如: jx3, 必须填写！ (必填)

eventTags: 埋点统计, 必须填写！专题tags，这个数组需要替换为埋点文档上的 ev_tag,

eventGroup: 埋点统计, 项目唯一标识, 如: jx4_xxxx_xxxx,




