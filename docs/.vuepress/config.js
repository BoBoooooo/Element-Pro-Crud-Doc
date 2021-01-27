module.exports = {
  title: 'Element-Pro-Crud',
  description: '一键增删改查',
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
    sidebar: 'auto',
    sidebarDepth: 2,
    locales: {
      '/': {
        label: '简体中文',
        nav: [
          {
            text: '使用指南',
            link: '/guide/'
          },
          {
            text: '文档',
            link: '/frameworks/CrudTable'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/BoBoooooo/Element-Pro-Crud'
          },
          {
            text: '在线演示',
            link: 'http://server.boboooooo.top:9997'
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
  ga: 'UA-109340118-1'
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
