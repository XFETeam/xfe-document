# xfe-document [![Build Status](https://travis-ci.com/XFETeam/xfe-document.svg?branch=master)](https://travis-ci.com/XFETeam/xfe-document)

> XFE 日常项目专题开发模板文档。

## Demo

[https://xfeteam.github.io/xfe-document/](https://xfeteam.github.io/xfe-document/)

## 本文档维护方式

如果你拥有本仓库权限可以直接使用 Gitpod 进行更新。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/XFETeam/xfe-document)

对于其他不拥有本仓库权限的可以通过 `pull request` 协助维护, 感谢你的贡献。

- Fork it!
- 创建新的分支: `git checkout -b my-new-feature`
- 提交你的变更: `git commit -am 'Add some feature'`
- 推送分支: `git push origin my-new-feature`
- 提交一个 PR (pull request) 

## 部署

目前 CI 持续集成对 `commit message` 存在监测, 当 `commit message` 以 `release:` 开头的将被同步到 gh-pages, 并最终同步到生产环境线上。

推荐命令:

    1. git Status
    2. git add .
    3. git commit -am "release: 提交变更信息"
    4. git pull (可选)
    5. git push

线上操作时，只有在changes标题设置为：release: xxxx 才会触发CI脚本对页面进行发布
![CI](http://xfe.seasungame.com/assets/2021/01/06/xfe/ci.png)
## LICENSE

MIT
