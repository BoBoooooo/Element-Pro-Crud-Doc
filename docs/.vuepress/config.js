/*
 * @file: https://vuepress-theme-reco.recoluan.com/
 * @author: BoBo
 * @copyright: BoBo
 * @Date: 2020-11-18 12:55:02
 */
module.exports = {
  title: 'Element-Pro-Crud',
  description: '基于ElementUI一键CRUD神器',
  theme: 'reco',
  author: 'BoBo',
  base: '/',
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
    type: 'blog',
    author: 'BoBo',
    authorAvatar: '/home.png',
    codeTheme: 'tomorrow', // default 'tomorrow'
    mode: 'light', // 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    modePicker: false, // 默认 true，false 不显示模式调节按钮，true 则显示
    noFoundPageByTencent: false,
    sidebar: 'auto',
    sidebarDepth: 2,
    locales: {
      '/': {
        label: '简体中文',
        nav: [
          {
            text: '使用指南',
            link: '/guide/',
            icon: 'reco-home'
          },
          {
            text: '文档',
            link: '/frameworks/CrudTable',
            icon: 'reco-document'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/BoBoooooo/Element-Pro-Crud',
            icon: 'reco-github'
          },
          {
            text: '在线演示',
            link: 'http://server.boboooooo.top:9997',
            icon: 'reco-eye'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '使用指南',
              collapsable: false,
              children: genEssentialsSidebar('guide')
            },
            {
              title: '教程',
              collapsable: false,
              children: [
                '/guide/course/GenerateForm.md',
                '/guide/course/ProTable.md',
                '/guide/course/CrudTable.md',
                '/guide/course/FormDesigner.md',
                '/guide/course/TableDesigner.md'
              ]
            }
          ],
          '/frameworks/': [
            {
              title: 'API',
              collapsable: false,
              children: [
                '/frameworks/ProTable.md',
                '/frameworks/CrudTable.md',
                '/frameworks/GenerateForm.md',
                '/frameworks/FormDesigner.md',
                '/frameworks/TableDesigner.md'
              ]
            }
          ]
        },
        lang: 'zh-CN',
        description: 'ElementProCrud一键增删改查'
      }
    }
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
    // 显示代码块行号
    lineNumbers: false
  }
}

function genEssentialsSidebar(type = '') {
  let mapArr
  if (type === 'guide') {
    mapArr = ['/guide/', '/guide/intro/start.md']
  } else if (type === 'frameworks') {
    mapArr = [
      '/frameworks/essentials/CrudTable.md',
      '/frameworks/essentials/FlowableDialog.md',
      '/frameworks/essentials/GenerateForm.md',
      '/frameworks/essentials/GenerateFormDialog.md',
      '/frameworks/essentials/SvgIcon.md',
      '/frameworks/essentials/Echarts.md',
      '/frameworks/essentials/FileUpload.md'
    ]
  }
  return mapArr
}
