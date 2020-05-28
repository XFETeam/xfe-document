---
title: jQuery登录注册插件

---

# jQuery登录注册插件

更多请到[github文档](https://github.com/XFETeam/libs/tree/js-reg-login)查看

## 使用方法
先引入 jQuery脚本，然后引入register.js脚本，最后再初始化

```html
   1. 加载js(依赖jquery)
   <script src="//zhcdn01.xoyo.com/assets/lib/jquery/jquery.1.7.2.js"></script>
   <script src="//zhcdn01.xoyo.com/xassets/com/pf/register/jsreg/v2/register.js"></script>

   2. 输入dom节点
   <div class="xsj_register_dom_eight">
   </div>

   3. 初始化代码
       $('.xsj_register_dom_eight').registerPublic({    //这个class样式名等于2中的dom节点的样式名
           ajaxUrl:'http://my-api-dev.xoyo.com/',     //用于测试接口
           domName:'.xsj_register_dom_eight',           //这个class样式名等于2中的dom节点的样式名
           regTag:8, //用于一个页面有多个登录或者注册框
           loginModel:true,
           client:'jx3',
           onStart: function () {  //DOM拼装完毕时 回调(用于修改DOM结构和文字)
               $('.J_getCodeBoxLogin').before('<div class="input-box hei-line inputbtn-tips">粤剧门票</div>')
           },
           cbLoginModelSuccess: function($user){       //登录成功后返回的登录名
               $("#step_one").hide();
               $("#step_two").show();
               $('.g_username').empty().html($user)
           }
       });

    4.增加退出方法，在任意的按钮添加class样式J_logOutPublicRegjs就可使用退出功能。比如：
    <div class="J_logOutPublicRegjs">退出按钮</div>

    5.DEMO网址
    http://zhcdn01.xoyo.com/xassets/com/pf/register/jsreg/v2/demo.html


```

## 常用DEMO

1.普通登录，有wegame
```html
<div class="xsj_register_dom_nine"></div>
<script>
    $('.xsj_register_dom_nine').registerPublic({
        domName:'.xsj_register_dom_nine',
        regTag:9,
        loginModel:true,
        client:'jx3',
        isWegameLogin: true, //wegame login
        jiyanBind:true,
        isLogOutCallback: true, //开启退出回调
        cbLogOut:function () {
            alert('退出成功')
        },
        cbLoginModelSuccess: function($user){
            alert($user)
        }
    });
</script>

2.普通注册，有回调
<div class="xsj_register_dom_six"></div>
<script>
    $('.xsj_register_dom_six').registerPublic({
        domName:'.xsj_register_dom_six',
        regTag:6,
        onlyPutong:true,
        oneStepPutong:true,
        client:'jx3',
        onStart: function(){
            $('.J_regPubregBtn').html('注册领奖');
            $('.J_idcardText').html('根据国家规定，必须完成实名制认证才能注册账号，请补填以下信息，领取688元豪华礼包：')
        },
        cbRegSuccess: function($username,sin_name,sin_idcard,sin_email){
            /* 返回参数说明
             * $username     返回用户名 或者 注册时的手机号
             * sin_name      返回真实姓名
             * sin_idcard    返回身份证号
             * sin_email     返回email
             */
        }
    })

</script>


3.手机注册
<div class="xsj_register_dom_five"></div>
$('.xsj_register_dom_five').registerPublic({
    domName:'.xsj_register_dom_five',
    regTag:5,
    onlyMobile:true,
    oneStepPhone:true,
    client:'jx3'
})

```


## API
1. window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY
 
 在接入脚本前设置该值，是否限制仅拥有剑三角色账户才可进入，否则跳转无激活角色错误提示页面，默认关闭，开启会影响性能，请经确认需要开启后开启
```html
 ...
    domName: ''      //必填/按钮dom,可以class,也可以ID
    cssUrl: '//zhcdn01.xoyo.com/xassets/com/pf/register/jsreg/v2/skins/s001/reg.css?v=123',//css样式
    isPassAgain: false, //是否需要开启 确认密码框 默认关闭
    isLogin: false,     //是否需要 判断用户是否登录
    onlyMobile: false,  //是否 只有手机注册 true为只有手机注册（用于移动端）
    onlyPutong: false,  //是否 只有个性普通版注册 true为只有普通注册
    oneStepPhone: false,  //是否 一个步骤完成 手机注册 onlyMobile也要为true
    oneStepPutong: false, //是否 一个步骤完成 普通注册 onlyPutong也要为true
    artDiatTips: false,   //是否 用artdiag弹出提示框，需要加载artdiagjs和CSS皮肤
    twoStepTabsHide: false, //是否 到达第二步时 关闭选项卡按钮 默认开启 为true时第二步关闭
    loginModel: false,
    isJizhiArea: false,   //是否 开启极致验证指定弹出区域 此时会把后续验证弹出到以下指定ID的区域内居中显示
    areaJizhiId: null,  //极致验证指定弹出区域 id
    isWegameLogin: false, //是否开启wegame登录
    isLogOutCallback: false, //是否开启退出回调 ，如果为true为调用退出回调函数 否则刷新页面
    nextWidthJizhi: '260px', //极致验证指定弹出区域 宽度
    regTag: '0',      //0~16位, 用于一个页面需要显示多个注册的场景
    ajaxUrl: 'https://pf-api.xoyo.com/', //接口网址，如果需要使用测试接口，请把此参数改为http://my-api-dev.xoyo.com/

    regRefer: ( document.referrer ) || '', //注册来源页面
    regTarget: 'reg_public_signup',    //注册区域 一个页面有多个注册时的标记
    //注册成功后提示文案
    regText: '请保管好您的账户名和密码，西山居不会以任何的形式向您索要账户名和密码。',
 ...
```
如果设置为window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY为true会多返回红框内数据

![daily auth return](/xfe-document/images/auth-success-return.png)



