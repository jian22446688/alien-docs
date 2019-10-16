/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-10-09 09:21:43
 */
const utils = require('./utils')

module.exports = {
  title: 'ele-alien',
  description: 'element 超强组件组合',
  base: '/ele-alien/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '超强组件', link: '/alien-commponent/' },
      // {
      //   text: '工具组合',
      //   ariaLabel: 'Language Menu',
      //   items: [
      //     { text: 'Chinese', link: '/language/chinese/' },
      //     { text: 'Japanese', link: '/language/japanese/' }
      //   ]
      // },
      { text: '库', link: '/repository/' },
      { text: '网站', link: '/website/' },
      { text: '文章', link: '/article/' },
      { text: '最近阅读', link: '/article/read' },
      // { text: '工具', link: 'https://google.com' },
      { text: '面试', link: '/interview/' },
      { text: 'Blog', link: '/blog/' }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'jian22446688/ele-alien',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1',
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  }
}
