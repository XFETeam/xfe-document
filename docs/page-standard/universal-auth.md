---
title: 剑网3通用授权

---

# 剑网3通用授权
    包含逍遥授权，微信QQ授权和剑网3推栏授权

更多请到[github文档](https://github.com/XFETeam/libs/tree/universal-auth-sdk)查看

## 使用方法
配置 `window.__XFE_UNIVERSAL_AUTH_CONFIG__` 后，在头部head标签内引入 `universal-auth.js` 脚本

请确定具体的版本，目前最新的版本是1.0.2，[详细版本日志](#ChangeLog)
```html
<head>
 ...
   <script>
      window.__XFE_UNIVERSAL_AUTH_CONFIG__ = {
	 env: "master", /*具体业务场景可以根据页面地址判断正式测试环境 例如：window.location.host === "xxx.xoyo.com" ? "master" : "test" */
         daily: true, /*是否开启推栏授权， 默认为true*/
         limitOnlyHasJx3RoleAccessInDaily: false, /*在接入脚本前设置该值，是否限制仅拥有剑三角色账户才可进入，否则跳转无激活角色错误提示页面，默认关闭，开启会影响性能，请经确认需要开启后开启, 默认为false*/
         weixinQQ: true, /*是否开启微信QQ授权, 默认为true*/
         xoyo: true, /*是否开启逍遥授权, 默认为true*/
         debug: false /*是否开启debug模式，开启会alert授权信息, 默认为false*/
      }
   </script>
   <script src="//zhcdn01.xoyo.com/xassets/lib/universal-auth/1.0.2/universal-auth.js" crossOrigin="anonymous" ></script>
 ...
</head>
```

## 返回结果
执行脚本后可以在 `window.XOYO_AUTH` 和 `window.THIRD_PARTY_AUTH` 获取相关授权信息

**window.XOYO_AUTH （逍遥授权 ）**

成功
```json
{
	"ua": "h5",
	"status": "success",
	"data": {
		"account": "hdt******069",
		"account_uid": "eed96207eaf080419e5aab0ed050ce9a3949e29c",
		"pf": "",
		"request_id": "5e763b974ad4d251d40116b46c01555c70b62c6c"
	}
}
```

未登录
```json
{
	"ua": "h5",
	"status": "error",
	"data": {
		"code": -20101,
		"data": {
			"request_id": "d244439283699faad810da8241784e4c0306eb70"
		},
		"status": -20101,
		"msg": "请先登录",
		"message": "请先登录",
		"reason": "require-login"
	}
}
```

**window.THIRD_PARTY_AUTH (微信QQ和剑网3推栏授权)**

微信成功
```json
{
	"ua": "wechat",
	"status": "success",
	"data": {
		"login_type": "wechat",
		"uid": "哲",
		"head_img_url": "//thirdwx.qlogo.cn/mmopen/vi_32/fyKc7ddeDxEDkFmWEQlTcDlcIWfS8P20TDry8aX9axMfpznsISLPvxBcG1bUznRbcqPsOGhzLPzO3zHP5PcrVQ/132",
		"city": "广州",
		"sex": 1,
		"nickname": "哲",
		"uid_encode": "1e10cda54f514265bd244d85b8d4eac96aadc27e",
		"session_id": "rWEegtrJSCuYfzTw4mNw71r7AThN5MBecDkxEVI9",
		"request_id": "35c2df5268621889ab3b7479e309454201dffd37"
	}
}
```

QQ成功
```json
{
	"ua": "qq",
	"status": "success",
	"data": {
		"login_type": "qq",
		"uid": "哲",
		"head_img_url": "//thirdqq.qlogo.cn/g?b=oidb&k=fRTw50NuuCwW9icg9w2qSEw&s=100&t=1567016636",
		"city": "揭阳",
		"sex": 1,
		"nickname": "哲",
		"uid_encode": "f1699c1cab5c91f6f4e55d7cf9f6e3765dac34bd",
		"session_id": "rBPcWKj0pCdK4kVgkvMPxDKY5XKb6HvBerrtghsf",
		"request_id": "60b3d18e17c4e62bd49235123d4dfdbbd7bf7a97"
	}
}
```

推栏成功
```json
{
	"ua": "daily",
	"status": "success",
	"data": {
		"uid_encode": "c4e60ae03514c02ec5ebf4748eb5a2006fc092b0",
		"account": "hdt***062",
		"zone_name": "测试专区",
		"server_name": "聊天测试",
		"token": "0cd31785fd3a460d8c17af19de181b11",
		"force": "蓬莱",
		"bodily": "成男",
		"person_name": "辣条",
		"person_avatar": "https://qdla.pvp.xoyo.com/dev/avatar/tmp/f8c146ac3ec24bab9adf21f3881a288a/avatar.jpg/d0d100fff27645108cea5afc1e47b0d4.jpg",
		"is_wegame": 0,
		"session_id": "WpMtMML4mhYGgdsWkuXD4BKY620UB5t8Jvdvzqhp",
		"request_id": "11878089719ae013f79321d21d9ba3f674ce19b8"
	}
}
```

## API

### window.__XFE_UNIVERSAL_AUTH_CONFIG__

| 参数 | 说明 | 类型 | 默认值	|
| --- | --- | --- | --- |
| daily | 是否开启推栏授权 | boolean | true |
| weixinQQ | 是否开启微信QQ授权 | boolean | true |
| xoyo | 是否开启逍遥授权 | boolean | true |
| limitOnlyHasJx3RoleAccessInDaily | 在接入脚本前设置该值，是否限制仅拥有剑三角色账户才可进入，否则跳转无激活角色错误提示页面，默认关闭，开启会影响性能，请经确认需要开启后开启, 默认为false | boolean | false |
| debug | 是否开启debug模式，开启会alert授权信息, 默认为false | boolean | false |

如果设置 `window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY` 为 `true` 会多返回区服角色信息(红框内数据)

![daily auth return](/xfe-document/images/auth-success-return.png)

## ChangeLog

### 1.0.2
* feat: 增加 env 参数，`master` 为正式环境，`test` 为测试环境

### 1.0.0
* 首次提交

