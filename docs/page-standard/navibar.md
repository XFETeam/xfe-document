---
title: 通用头部

---
# 通用头部
使用场景：PC端官网及专题
显示在页面顶部，腾讯游戏所有官网以及专题需添加的TOP条，如游戏业务无特殊说明，在页面上引用组件CDN地址。

:::warning
为防止加载title.js后页面跳动，为头部设置相应的内边距；
:::
## 组件CDN
```javascript
    *注意：依赖jQuery
    
    // 剑网三头部导航栏
    <script src="//zhcdn01.xoyo.com/xassets/com/jx3/navibar/v2/navibar.js"></script>
    
    // 剑网三怀旧版通用导航栏(剑网3缘起)
    <script src="//zhcdn01.xoyo.com/xassets/com/jx3/navibar/v2/navibar.js"></script>
    <script>
      window.jx3Navibar({type: 'jx3yq'});
    </script>
    
    // 其他游戏通用栏（经典剑侠、春秋Q传、剑世2手游等）
    <script src="//zhcdn01.xoyo.com/xassets/com/pf/xoyotop/v1/navibar.js"></script>
    
    
```

## 通用头预览效果

![top](http://xfe.seasungame.com/assets/2021/01/06/xfe/top.png)

## 其它业务头部
