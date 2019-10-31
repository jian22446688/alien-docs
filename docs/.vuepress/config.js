/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-10-09 09:21:43
 * @FilePath: f:\vue-project\alien-docs\docs\.vuepress\config.js
 */
const utils = require('./utils')

module.exports = {
  title: 'ele-alien-前端常用的工具库',
  description: 'element 超强组件组合',
  base: '/alien-docs/',
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
      { text: '欢迎光临', link: '/' },
      { text: '超强组件', link: '/alien-commponent/' },
      {
        text: '前端工具',
        ariaLabel: 'Language Menu',
        items: [
          { text: '前端导航', link: '/web-nav/' },
          { text: '开源项目', link: '/repository/' },
          { text: '前端网址', link: '/website/' },
          { text: '代码片段', link: '/code/' },
          { text: '前端摸金', link: '/web/' },
          { text: 'Webpack', link: '/webpack/' }
        ]
      },
      { text: '热门文章', link: '/article/' },
      // { text: '最近阅读', link: '/article/read' },
      // { text: '工具', link: 'https://google.com' },
      // { text: '面试', link: '/interview/' },
      // { text: 'Blog', link: '/blog/' }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: '上次更新',
    repo: 'jian22446688/ele-alien',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    sidebarDepth: 3
  },
  plugins: [
    '@vuepress/back-to-top', 
    'vuepress-plugin-smooth-scroll', 
    ['vuepress-plugin-helper-live2d', {
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'z16',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 231, // 模型的高度(default: 300)
          hOffset: 65, // 水平偏移(default: 65)
          vOffset: 0, // 垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ]
  ],
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
