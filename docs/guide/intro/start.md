# 开始使用

## NPM

### 安装

```
npm i element-pro-crud -s
```

<!-- 支持完整引入及按需引入,_`该插件基于ElementUI封装,注意引用顺序`_ -->


```javascript
import Vue from 'vue'
import ElementProCrud from 'element-pro-crud'
import ElementUI from 'element-ui'
import 'element-pro-crud/lib/ProCrud.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ElementProCrud)
```
<!-- 
### 按需引入

```javascript
  import Vue from 'vue';
  import { ProForm, ProTable, CrudTable, FormDesigner, TableDesigner } from 'element-pro-crud';
  Vue.use(ProForm);
  Vue.use(ProTable);
  Vue.use(FormDesigner);
  Vue.use(TableDesigner);
  Vue.use(CrudTable, {
      getFormDetail: (tablename) => AxiosPromise(formJSON);// 获取某个表单设计json
      getTableDetail: (tablename) => AxiosPromise(tableJSON);// 获取某个表格设计json
      crud: (dml: DML, tableName: string, data?: object, params?: object)=> AxiosPromise; // 通用CRUD封装
  })
``` -->

## CDN

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- 引入ProCrud CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-pro-crud/lib/ProCrud.css" />
    <!-- 引入ElementUI CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />
  </head>
  <body>
    <div id="app">
      <form-designer ref="form"></form-designer>
      <table-designer ref="table"></table-designer>
    </div>
  </body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import ElementUI -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <!-- import ElementProCrud -->
  <script src="https://cdn.jsdelivr.net/npm/element-pro-crud@latest/lib/ProCrud.umd.js"></script>

  <script>
    new Vue({
      el: "#app"
    });
  </script>
</html>
```

## 组件列表

- `ProForm` 根据表单设计器 json 自动渲染表单

- `ProTable` 二次封装 el-table

- `CrudTable` 高级增删改查 CrudTable

- `FormDesigner` 表单设计器

- `TableDesigner` 表格设计器

## 第三方库

| 组件名         | 说明           | 版本号    | 说明                           | 引入方式(CDN或者NPM引入均可)                                                                                  |
| :------------- | :------------- | :-------- | :----------------------------- | :---------------------------------------------------------------------------------------- |
| element-ui     | 饿了么 UI      | `^2.15.1` | 需在 element-pro-crud 之前引入 | https://unpkg.com/element-ui/lib/index.js                                                 |
| ace            | 代码在线编辑器 | `^1.4.12` | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/ace/test/ace.js                                         |
| tinymce        | 富文本编辑器   | `^4.7.5`  | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/tinymce/4.7.5/tinymce.min.js                            |
| echarts        | echarts 图表   | `^5.0.1`  | 表单设计器/表格设计器使用      | https://cdn.bootcdn.net/ajax/libs/echarts/5.0.1/echarts.min.js                            |
| vue-treeselect | 树形下拉框     | `^0.4.0`  | 表单设计器/表格设计器使用      | https://cdn.jsdelivr.net/npm/@riophae/vue-treeselect@0.4.0/dist/vue-treeselect.umd.min.js |
