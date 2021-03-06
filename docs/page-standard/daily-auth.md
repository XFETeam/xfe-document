---
title: 剑网3推栏授权

---

# 剑网3推栏授权

更多请到[github文档](https://github.com/XFETeam/libs/tree/daily-app-auth)查看

## 使用方法
在头部head标签内按顺序先引入 daily-app-auth脚本，然后引入get-daily-account-info.js脚本

请将{VERSION}更换为[具体的版本](/page-standard/daily-auth.html#%E7%89%88%E6%9C%AC)
```html
<head>
 ...
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/daily-app-auth.js" crossOrigin="anonymous" ></script>
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/get-daily-account-info.js" crossOrigin="anonymous" ></script>
 ...
</head>
```
执行脚本后可以在window.THIRD_PARTY_AUTH获取相关授权信息
```javascript
console.log(window.THIRD_PARTY_AUTH);
//成功返回
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
1. window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY
 
 在接入脚本前设置该值，是否限制仅拥有剑三角色账户才可进入，否则跳转无激活角色错误提示页面，默认关闭，开启会影响性能，请经确认需要开启后开启
```html
<head>
 ...
   <script>
        window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY = true;
   </script>
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/daily-app-auth.js" crossOrigin="anonymous" ></script>
   <script src="//zhcdn01.xoyo.com/xassets/lib/daily-app-auth/{VERSION}/get-daily-account-info.js" crossOrigin="anonymous" ></script>
 ...
</head>
```
如果设置为window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY为true会多返回红框内数据

![daily auth return](/xfe-document/images/auth-success-return.png)

## 联系
如有相关问题请联系微信 `ailun_she`, 加好友前请备注来自 github, 备注加好友原因.

## ChangeLog
### 0.0.2
* add: 增加window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY是否限制仅拥有剑三角色账户才可进入，否则跳转无激活角色错误提示页面

### 0.0.1
* add: init

