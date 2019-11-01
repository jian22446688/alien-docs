<!--
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-10-31 08:59:28
 * @FilePath: f:\vue-project\alien-docs\docs\.vuepress\components\web-nav.vue
 -->
<template>
  <div v-if="data.navlist && data.navlist.length">
    <div class="cc-row cc-row-gutter-20"
      v-for="(navitem, index) in data.navlist" 
      :key="index">
      <h2>{{ navitem.title }}<div :id="navitem.title" class="cc-invent-dot"></div></h2>
      <div
        class="cc-col-lg-4 cc-col-md-6 cc-col-sm-8 cc-col-xs-12"
        v-for="item in navitem.list" 
        :key="item.url">
        <div class="my-nav-item">
          <div class="cc-nav-title" :title="item.title">{{ item.title || '' }}</div>
          <div class="cc-nav-des" :title="item.des">{{ item.des || '' }} </div>
          <div class="cc-nav-des"><a :href="item.url">{{ item.url || '' }}</a></div>
        </div>
      </div>
    </div>
    <div class="my-sidebar">
      <div class="cc-sidebar-cata">目录</div>
      <div class="cc-sidebar-link"
        v-for="(navitem, index) in data.navlist" :key="index">
        <a :href="'#'+ navitem.title">{{ navitem.title || '' }}</a>
      </div>
    </div>
  </div>
</template>

<script>

// xs	<768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
// sm	≥768px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
// md	≥992px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
// lg	≥1200px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—
// xl	≥1920px 响应式栅格数或者栅格属性对象	number/object (例如： {span: 4, offset: 4})	—	—

export default {
  name: 'WebNav',
  components: {},
  computed: {
    data() {
      // return this.$frontmatter
      return {
        navlist: [
          {
            title: '常用导航',
            list: [
              {
                title: 'iconfont',
                des: '阿里出的图标库，非常实用，支持 svg、font、png 多种格式，基本现在所有图标都在上面找。',
                url: 'http://www.iconfont.cn/'
              },
              {
                title: '掘金',
                des: '掘金是一个帮助开发者成长的社区，是给开发者用的 Hacker News，给设计师用的 Designer News，和给产品经理用的 Medium。掘金的技术文章由稀土上聚集的技术大牛和极客共同编辑为你筛选出最优质的干货，其中包括：Android、iOS、前端、后端等方面的内容。用户每天都可以在这里找到技术世界的头条内容。与此同时，掘金内还有沸点、掘金翻译计划、线下活动、专栏文章等内容。即使你是 GitHub、StackOverflow、开源中国的用户，我们相信你也可以在这里有所收获。',
                url: 'https://juejin.im/timeline'
              }
            ]
          },
          {
            title: '前端开发',
            list: [
              {
                title: 'Vue',
                des: '渐进式JavaScript 框架',
                url: 'https://cn.vuejs.org/'
              },
              {
                title: 'React',
                des: '用于构建用户界面的 JavaScript 库',
                url: 'https://react.docschina.org/'
              },
              {
                title: 'AngularJS',
                des: 'AngularJS是一款优秀的前端JS框架',
                url: 'https://www.angularjs.net.cn/'
              },
              {
                title: 'VuePress',
                des: 'Vue 驱动的静态网站生成器, 本项目就是使用VuePress开发的',
                url: 'https://vuepress.vuejs.org/zh/'
              },
              {
                title: 'Element-UI',
                des: 'Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库',
                url: 'https://element.eleme.cn/#/zh-CN'
              },
              {
                title: 'View UI',
                des: 'View UI 是一套基于 Vue.js 的高质量UI 组件库',
                url: 'https://www.iviewui.com/'
              },
              {
                title: 'Electron',
                des: 'Electron 是一个赋力前端进行跨平台开发的框架,让开发人员使用 JavaScript, HTML 和 CSS 等前端技术构建跨平台的桌面应用',
                url: 'https://electronjs.org/'
              },
            ]
          },
          {
            title: '常用文档',
            list: [
              {
                title: 'MDN web docs',
                des: '源于开发者，服务开发者。',
                url: 'https://developer.mozilla.org/zh-CN/docs/Learn',
              }
            ]
          },
          {
            title: '开发常用',
            list: [
              {
                title: 'can i use',
                des: '前端常用网站了,查看不同属性和方法的兼容性',
                url: 'https://caniuse.com/'
              },
              {
                title: 'Squoosh',
                des: '谷歌出品在线免费图片压缩工具 神器',
                url: 'https://squoosh.app/'
              },
              {
                title: 'astexplorer',
                des: '一个在线 ast 生成器',
                url: 'https://github.com/fkling/astexplorer'
              },
              {
                title: '30 seconds of code',
                des: '收集了许多有用的代码小片段',
                url: 'https://30secondsofcode.org/'
              },
              {
                title: 'zeplin',
                des: '前端和设计师神器，有标注、Style Guide、版本管理、简单的团队协作，重点是前端不用写css 了，复制就可以了。',
                url: 'https://app.zeplin.io/'
              },
              {
                title: 'cssicon',
                des: '所有的 icon 都是纯 css 画的 缺点：icon 不够多',
                url: 'http://cssicon.space/#/'
              },
              {
                title: '智图',
                des: '腾讯出品 在线图片压缩 支持转成 webP 处理静态图片时候很好用',
                url: 'http://zhitu.isux.us/'
              },
              {
                title: 'picdiet',
                des: '另一个图片压缩网站',
                url: 'https://www.picdiet.com/zh-cn'
              },
              {
                title: 'CSS triangle generator',
                des: '帮你快速用 css 做出三角形',
                url: 'http://apps.eky.hk/css-triangle-generator/'
              },
              {
                title: 'cssarrowplease',
                des: '帮你做对话框三角的',
                url: 'http://www.cssarrowplease.com/'
              },
              {
                title: 'clippy',
                des: '在线帮你使用 css clip-path 做出各种形状的图形',
                url: 'http://bennettfeely.com/clippy/'
              },
              {
                title: 'Regular Expressions',
                des: '在线正则网站',
                url: 'https://regex101.com/'
              },
              {
                title: 'jex',
                des: '正则可视化网站，配合上面的 Regular Expressions，写正则方便很多',
                url: 'https://jex.im/regulex/'
              },
              {
                title: 'jsfiddle',
                des: '在线运行代码网站 很不错，可惜要翻墙',
                url: 'https://jsfiddle.net/'
              },
              {
                title: 'codepan',
                des: '在线运行代码网站 不用翻墙，可以自己部署',
                url: 'https://codepan.net/'
              },
              {
                title: 'fiddle.md',
                des: '一个方便的在线共享 markdown 在线笔试题一般都用这个',
                url: 'https://fiddle.md/'
              },
              {
                title: 'jsdelivr',
                des: 'cdn 服务',
                url: 'https://www.jsdelivr.com/'
              },
              {
                title: 'unpkg',
                des: '常用的 cdn 服务',
                url: 'https://unpkg.com/'
              },
              {
                title: 'coderpad',
                des: '远程面试的神器，可以让面试者远程写代码 不过需要翻墙',
                url: 'https://coderpad.io/'
              },
              {
                title: 'icode',
                des: '有赞团队出品的 coderpad 可以互补，它不需要翻墙',
                url: 'http://www.icode.live/'
              },
              {
                title: 'codeadvice',
                des: '又一个让面试者远程写代码的网址',
                url: 'https://www.codeadvice.io/'
              },
              {
                title: 'snipper',
                des: '一个代码协同的网站。你新建一个代码片段，然后把网址分享给其他人，就可以看到他们的实时编辑。',
                url: 'https://snipper.io/'
              },
              {
                title: 'codesandbox',
                des: '一个可以在线编辑且提供在线 demo 的网站 支持 vue react angular 多种框架 神器',
                url: 'https://codesandbox.io/'
              },
              {
                title: 'codrops',
                des: '上面的交互都非常酷炫',
                url: 'https://tympanus.net/codrops/'
              },
              {
                title: 'bgremover',
                des: '在线图片去底工具',
                url: 'http://www.aigei.com/bgremover'
              },
              {
                title: 'photopea',
                des: '一个网页端 Photoshop 很变态',
                url: 'https://www.photopea.com/'
              },
              {
                title: 'bestofjs',
                des: '查看一个项目增长经历，Star 数变化的网站，辅助你判断这个库的质量',
                url: 'https://bestofjs.org/'
              },
            ]
          }
          
        ]
      }
    },
  },
  mounted() {
    // console.log('webnav', this)
  },
  methods: {}
}

</script>
<style lang='stylus'>
  .my-sidebar {
    position: fixed;
    min-height: 150px;
    max-height: 500px;
    right: 0;
    top: 58px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 16px;
    font-size: 14px;
    overflow: auto;
  }
  .my-sidebar::-webkit-scrollbar {/*滚动条整体样式*/
    width: 6px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 6px;
  }
  .my-sidebar::-webkit-scrollbar-thumb {/*滚动条整体样式*/
    border-radius: 6px;
    background-color: rgba(144,147,153,.3);
  }
  .my-sidebar::-webkit-scrollbar-thumb:hover {/*滚动条里面小方块*/
    border-radius: 6px;
    background-color: rgba(144,147,153,.5);
  }
  .cc-sidebar-cata {
    font-size: 13px;
    color: #999;
  }
  .cc-sidebar-link {
    margin-top: 6px;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .cc-invent-dot {
    position: relative;
    top: -120px;
  }
  .my-nav-item {
    min-height: 76px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  }
  .my-nav-item:hover {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  }
  .cc-nav-title {
    font-size: 22px;
    font-weight: 600;
    color: #000;
    text-align: center;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .cc-nav-des {
    margin-top: 6px;
    font-size: 13px;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>
