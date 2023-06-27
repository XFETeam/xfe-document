---
name: repo-manage-and-publish
title: 代码管理和发布
---

## 项目代码如何获取?
- 代码仓库由产品像内部专题跟进的同学发起, 创建对应的项目仓库, 并提供仓库地址给对应的外包开发同学.
- 如果查看仓库，提示 404 则提醒专题成员给自己添加权限

![404](/xfe-document/images/repo-404.jpg)

## 项目代码如何开发?
- SSG工作流模板开发模式: 直接在初始化成功的模板中进行业务逻辑的补充开发
- SSG工作流模板使用 yarn 命令安装依赖包，安装失败可能是 node 版本问题，向专题成员求助
- 非工作流的独立开发模式: 将本地的开发代码进行上传到git代码仓库中的develop分支中
- 非工作流本地开发注意检查 html 的 base 属性如果指向发布地址，本地更新不会生效

```html
<base href="https://jxgl.xoyo.com/p/m/2021/09/12/website/pc/">
```

## 代码如何发布到测试环境/线上灰度环境/线上正式环境?
1. 发布上线前, 必须确保代码需要发布的代码包的内容必须 build 文件夹下, 若没有 build 文件夹, 则新建一个 build 文件夹并将核心移动到 build 文件夹中 ,文件结构参考如下:
   1. 有单独编译后的代码包
   
   ![build](/xfe-document/images/repo-build.png)

   2. 源码包直接发布上线
   
   ![ver](/xfe-document/images/repo-ver.png)

2. 发布时, 确定当前需要发布到对应的环境, 进行合并请求发起
   
   针对目前专题的三种环境进行说明解释:
      1. 测试环境: 将develop分支的代码发布合并到test, 开发者可以自己合并发布
      2. 线上灰度测试: 将develop分支的代码发布合并到master, 必须要在和跟进的内部研发同学确定项目灰度测试发布的地址, 然后, 调整完代码中相关的地址信息后, 进行合并发起, 并由内部研发的同学进行审核和合并.
      3. 线上正式环境:  将develop分支的代码发布合并到master, 发起合并后, 由跟进的内部研发同学进行审核和合并.

## 如何获取项目对应的发布地址?

  项目的发布地址可以通过仓库名称的特定格式来进行获取, 项目的名称默认格式为: 
      项目站点/p/设备类型/发布上线日期/项目名称  如: activity.xoyo.com_p_m_2023_xx_xx_demo

  下面的解释以当前demo为例
  - 测试环境:
      测试环境区分国内和海外两条服务器, 因此对应的测试站点有区别. 通用格式为: 测试站点/项目站点/p/设备类型/发布上线日期/项目名称

      1. 国内: 测试站点为: test-zt.xoyo.com 上述demo的测试地址为:  https://test-zt.xoyo.com/activity.xoyo.com/p/m/2023/xx/xx/demo/index.html

      2. 海外: 测试站点为: test-zt.xoyo.games  上述demo的测试地址为: https://test-zt.xoyo.games/activity.xoyo.com/p/m/2023/xx/xx/demo/index.html

  - 正式环境:
    正式环境不管国内还是海外都以当前站点为准.
    上述的demo的正式地址为:  https://activity.xoyo.com/p/m/2023/xx/xx/demo/index.html

## 项目代码仓库权限没有/过期了, 如何申请?

  项目需要指定特定的同学进行开发, 如果出现临时增加新的开发同学, 而且出现了需要补充仓库权限时 , 则需要向对应的项目产品跟进的同学去申请资源, 并按照正常的流程接入来进行资格的申请.
  权限申请请联系@徐玮玮(xuweiwei1)

## 项目发布后检查线上是否更新成功?

  项目发布后线上没有更新成功的可能有以下几种情况:

  1. 用户页面本身的缓存, 请强刷页面或者url加hash参数强刷页面验收

  2. 项目发布CI的流水还没有执行完, 检查当前发布合并的CI情况. 等CI通过后再重新进行验收

   ![success](/xfe-document/images/repo-success.png)

  3. 页面有base指向, 如某些页面会有特定的短链进行访问, 因此项目发布后长链更新了, 短链没有及时更新, 因此需要等待15分钟的缓存时间或者通过项目对应的需求产品/跟进的内部研发同学进行手动CDN的刷新.

## 项目发布后资源访问全部错误?

项目发布后出现了资源的路劲调用全部错误, 一般出现这种场景的可能为以下集中情况:

1. 调用的资源全部都为站点根节点, 类似情况如下:
  
![error](/xfe-document/images/repo-error.png)

但是实际资源调用的路劲为: https://test-zt.xoyo.games/xxxx.com/p/xxxx/xx/xx/xxxxxxx/static/xxxxxx.js 确保资源调用的路径是否正确. 

> 注意: vue 等默认模板 host 都是 / , 但这样会访问根路径, 请自行改为相对路径

## Gitlab 仓库发布部署流程
[gitlab仓库发布部署流程](https://d7n9vj8ces.feishu.cn/docx/doxcnohILWEa5AgyvgiwuJbK0qf)