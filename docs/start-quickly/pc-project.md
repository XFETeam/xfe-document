---
title: PC端专题
---

# PC端专题

## 获取模板

目前为了持续维护, 我们在当前仓库建设了 template-pc 的分支用于管理 PC 专题模板, 请使用下面命令进行项目起始开发:

```bash
# git 克隆一个分支名为 template-pc 的项目, 仅拉取最后一次 commit, "." 表示在当前文件夹中进行克隆
git clone -b template-pc https://github.com/XFETeam/xfe-document.git --depth=1 .
```

## 专题创建
* [专题命名](../page-standard/file-directory.md#%E4%B8%93%E9%A2%98%E7%9B%AE%E5%BD%95%E5%91%BD%E5%90%8D)

  专题文件夹的命名为：a+年月日+专题英文或拼音小写简写+版本号，如：a20180412test12
  
* [文件命名](/page-standard/file-directory.html#%E6%96%87%E4%BB%B6%E5%91%BD%E5%90%8D)

  html首页文件必须命名为"index"，文件名禁止特殊字符比如空格、$等。统一使用英文单词或拼音缩写，必须小写，使用`-`隔开。
## 页面头尾部
* [navibar.js](/page-standard/navibar.html#%E7%BB%84%E4%BB%B6cdn)
  
  根据专题所属项目引用公用组件头部JS
  ```html
    // 剑网三头部导航栏
    <script src="//zhcdn01.xoyo.com/xassets/com/jx3/navibar/v2/navibar.js"></script>
   ```
    
* [footer.js](/page-standard/foot.html)
  
  引用公用组件底部通用栏JS
  ```html
    // 底部通用栏
    <script src="//zhcdn01.xoyo.com/xassets/com/pf/footer/v3/black/footer.js"></script>
   ```
## 页面TDK、Meta
* [Meta标签](/page-standard/pageHead.html#%E9%A1%B5%E9%9D%A2meta)

  按照规范中内容添加指定Meta
  
 *  [网页标题、关键字、描述](/page-standard/pageHead.html#%E9%A1%B5%E9%9D%A2%E6%A0%87%E9%A2%98-title) 正确填写有助于SEO
## 页面内容
* [默认字体](/page-standard/css.html#reset%E7%A4%BA%E4%BE%8B)

  使用reset样式，默认字体微软雅黑，使用英文方式：font-family:'Microsoft Yahei,微软雅黑,Tahoma,Helvetica Neue,Helvetica,PingFang SC,sans-serif'、
  引用reset css
  ```html
    // reset.css
    <script src="//zhcdn01.xoyo.com/xassets/com/pf/reset/reset.css"></script>
   ```
* [CSS](/page-standard/css.html#%E9%80%89%E6%8B%A9%E5%99%A8)

  css、class、id都需小写且书写合法，禁止特殊字符，使用`-`隔开
* [页面跳转](/page-standard/pageHead.html#%E9%A1%B5%E9%9D%A2%E8%B7%B3%E8%BD%AC)

  如为双端页面，需要自动判断跳转，如PC访问移动端页面，跳转到对应的PC专题上，反之亦然
* [HTML标签](/page-standard/html.html)

  标签必须合法且闭合、嵌套正确，标签名均为小写，无语法错误
* [链接](/page-standard/html.html#%E9%93%BE%E6%8E%A5)
  
  页面A标签需要添加链接地址，并能正常打开，无地址时候添加
  ```javascript
     javascript:alert('敬请期待！')
   ```
* [https协议](/page-standard/html.html#https%E5%8D%8F%E8%AE%AE%E8%87%AA%E9%80%82%E5%BA%94)

  分离后的页面链接、图片链接、静态资源等去掉http:使用//自适应。
* CDN地址

  JS、CSS等公用静态资源，如jQuery，统一使用西山居CDN地址。禁止添加其他非西山居域名下的资源
## 图片规范
* [图片标签](/page-standard/image-handle.html#%E5%9B%BE%E7%89%87%E6%A0%87%E7%AD%BE)

  图片标签必须写上宽度、高度和alt属。宽高为图片的原大小，alt不能为无意义字符，需要能表现出图片的含义，如图片为道具图，则应该为道具的名称。
* [合理切图](/page-standard/image-handle.html#%E5%90%88%E7%90%86%E5%88%87%E5%9B%BE)

  道具图片、头像、奖品，必须单独切割出来
## 兼容测试
* [浏览器兼容](/page-standard/pc-compatible.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9)

  兼容IE8及以上、Firefox、chrome，QQ浏览器，页面无错位及其他异常
* [分辨率兼容](/page-standard/pc-compatible.html#%E5%88%86%E8%BE%A8%E7%8E%87%E5%85%BC%E5%AE%B9)

  1366X769~1920X1080
## 内容检查
* 页面内容检查 代码之外的检查，例如错别字、图片版权等
