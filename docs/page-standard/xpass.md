---
title: xpass弹出窗登录

---

# 剑网3推栏授权

更多请到[github文档](https://github.com/XFETeam/libs/tree/xpass)查看

## 使用方法
引用xpass.js，ui.css,jquery,artDialog
```html
<head>
 ...
    <link href="//zhcdn01.xoyo.com/assets/lib/dialog/artDialog/skins/001/ui.css" class="external" rel="stylesheet">
    <script src="//zhcdn01.xoyo.com/xassets/lib/jquery/1.7.2/jquery.js"></script>
    <script src="//zhcdn01.xoyo.com/xassets/lib/dialog/artDialog/4.1.7/artDialog.js"></script>
    <script src="//zhcdn01.xoyo.com/xassets/com/pf/xpass/v1/xpass.js"></script>

    <script>
        $('.xxxBtn').on('click', function () {
            window.XPASS.signin()
        });
   </script>
 ...
</head>
```

## API
    - XPASS.signup
        如果传入 callback 参数 注册成功后将执行 callback 方法 否则 reload 当前页面
    ```
    // 无回调
    XPASS.signup();

    // 有回调
    XPASS.signup(function(){
        console.log('注册成功');
    });
    ```

  - XPASS.signin

        如果传入 callback 参数 注册成功后将执行 callback 方法 否则 reload 当前页面

    ```
    // 无回调
    XPASS.signin();

    // 回调
    XPASS.signin(function(){
        console.log('登录成功');
    });
    ```

  - XPASS.exit

    退出登录

    ```
    XPASS.exit();
    ```

  - XPASS.destroy
    销毁注册、登录弹出会话窗口
    ```
    XPASS.destroy();
    ```

