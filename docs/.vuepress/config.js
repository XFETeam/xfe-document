const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
const utils = require('../../scripts/utils-2');
// const utils = require('../../scripts/utils.js');
// const filehelper = require('../../scripts/initPage.js');
console.log(utils.generateSideBar(rootpath, './css'));

module.exports = {
    title: 'XFE DOCUMENT',
    description: '西山居前端开发文档',
    base: '/xfe-document/',
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        docsDir: 'docs',
        repo: 'XFETeam/xfe-document',
        repoLabel: '查看源码',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页！',
        lastUpdated: '上次更新',
        sidebar: [
            {
                title: '快速上手掌握',
                collapsable: false,
                sidebarDepth: 1,
                children: ['/start-quickly/pc-project', '/start-quickly/mobile-project', '/start-quickly/univers']
            },
            {
                title: '页面规范',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '/page-standard/pageHead',
                    '/page-standard/html',
                    '/page-standard/css',
                    '/page-standard/image-handle',
                    '/page-standard/note-and-name',
                    '/page-standard/file-directory',
                    '/page-standard/navibar',
                    '/page-standard/foot',
                    '/page-standard/pc-compatible',
                    '/page-standard/mobile-compatible',
                    '/page-standard/h5-video-audio',
                    '/page-standard/mobile-font'
                ]
            },
            {
                title: 'CSS文档',
                collapsable: false,
                sidebarDepth: 1,
                children: utils.generateSideBar(rootpath, './css')
            },
            {
                title: 'JAVASCRIPT文档',
                collapsable: false,
                sidebarDepth: 1,
                children: utils.generateSideBar(rootpath, './javascript')
            },
            {
                title: '发布',
                collapsable: false,
                sidebarDepth: 1,
                sidebarDepth: 1,
                children: [
                    '/deploy/checklist',
                ]
            },
            {
                title: '其它文档',
                collapsable: false,
                sidebarDepth: 1,
                children: utils.generateSideBar(rootpath, './other')
            }
        ],
        nav: [
            // {
            //   text: 'Admin',
            //   link: '/admin/',
            //   target:'_blank'
            // }
        ]
    }
};
