# 快速上手

本节将介绍如何在项目中使用 ElementProCrud。

## 引入 ElementProCrud

你可以引入整个 ElementProCrud，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 ElementProCrud。

### 完整引入

在 main.js 中写入以下内容：

```
npm i element-pro-crud -s
```

```javascript
import Vue from 'vue'
import ElementProCrud from 'element-pro-crud'
import ElementUI from 'element-ui'
import 'element-pro-crud/lib/css/pro-crud.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ElementProCrud)
```

以上代码便完成了 ElementProCrud 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 [babel-plugin-component](https://www.npmjs.com/package/babel-plugin-component)：

```javascript
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```javascript
{
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-pro-crud',
        styleLibrary: {
          name: 'css',
          base: false,
        },
      },
    ],
  ],
};
```

接下来，如果你只希望引入部分组件，比如 FormDesigner 和 ProForm main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { ProForm, FormDesigner } from 'element-pro-crud'
Vue.use(FormDesigner)
Vue.use(ProForm)
new Vue({
  el: '#app',
  render: h => h(App)
})
```

### 全局配置

在引入 ElementProCrud 时，可以传入一个全局配置对象。提供了获取表单表格 json 的 axios 请求方法以及通用 CRUD 请求。具体操作如下：

```javascript
{
  getFormDetail: formName => AxiosPromise(formJSON) // 传入获取表单json的axios请求
  getTableDetail: tableName => AxiosPromise(tableJSON) // 传入获取表格json的axios请求
  crud: (dml: DML, tableName: string, data?: object, params?: object) =>
    AxiosPromise // 通用CRUD请求封装
}
```

详见各个组件教程文档。

## CDN

::: tip
目前可以通过 [cdn.jsdelivr.net/npm/element-pro-crud/lib](https://cdn.jsdelivr.net/npm/element-pro-crud/lib/) 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
:::

::: warning
注意 cdn 引入组件名为`kebab-case`
:::

### 全局引入

```html
<!-- import ElementProCrud CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-pro-crud/lib/css/pro-crud.css" />
<!-- import ElementUI CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"/>

<!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- import ElementUI -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- import ElementProCrud -->
<script src="https://cdn.jsdelivr.net/npm/element-pro-crud/lib/pro-crud.js"></script>
```

### 按需引入

例如单独引入表单设计器

```html
<!-- import FormDesigner CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-pro-crud/lib/css/form-designer.css" />
<!-- import ElementUI CSS -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"/>

<!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- import ElementUI -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- import FormDesigner -->
<script src="https://cdn.jsdelivr.net/npm/element-pro-crud/lib/form-designer.js"></script>
```

## 组件列表

| 组件名          | 说明         |
| :-------------- | :----------- |
| `ProForm`       | 表单生成器   |
| `ProTable`      | 表格生成器   |
| `CrudTable`     | 增删改查表格 |
| `FormDesigner`  | 表单设计器   |
| `TableDesigner` | 表格设计器   |

## 第三方库

| 组件名         | 说明           | 版本号    | 说明                           | 引入方式(CDN 或者 NPM 引入均可)                                                           |
| :------------- | :------------- | :-------- | :----------------------------- | :---------------------------------------------------------------------------------------- |
| element-ui     | 饿了么 UI      | `^2.15.1` | 需在 element-pro-crud 之前引入 | https://unpkg.com/element-ui/lib/index.js                                                 |
| ace            | 代码在线编辑器 | `^1.4.12` | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/ace/test/ace.js                                         |
| tinymce        | 富文本编辑器   | `^4.7.5`  | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/tinymce/4.7.5/tinymce.min.js                            |
| echarts        | echarts 图表   | `^5.0.1`  | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js                            |
| vue-treeselect | 树形下拉框     | `^0.4.0`  | 表单设计器/表格设计器使用      | https://cdn.jsdelivr.net/npm/@riophae/vue-treeselect@0.4.0/dist/vue-treeselect.umd.min.js |

## 开始使用

至此，一个基于 ElementUI 的 CRUD 神器已经嵌入完毕。各个组件的使用方法请参阅它们各自的文档。
