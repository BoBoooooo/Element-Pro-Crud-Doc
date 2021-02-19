# 开始使用

## NPM

### 安装

```
npm i element-pro-crud -s
```

支持完整引入及按需引入,_`该插件基于ElementUI封装,注意引用顺序`_
### 完整引入

```javascript
import Vue from 'vue';
import ElementProCrud from 'element-pro-crud'
import ElementUI from 'element-ui'
import 'element-pro-crud/lib/ProCrud.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ElementProCrud)
```

### 按需引入

```javascript
  import Vue from 'vue';
  import { GenerateForm, ProTable, CrudTable, FormDesigner, TableDesigner } from 'element-pro-crud';
  Vue.use(GenerateForm);
  Vue.use(ProTable);
  Vue.use(FormDesigner);
  Vue.use(TableDesigner);
  Vue.use(CrudTable, {
      getFormDetail: (tablename) => AxiosPromise(formJSON);// 获取某个表单设计json
      getTableDetail: (tablename) => AxiosPromise(tableJSON);// 获取某个表格设计json
      crud: (dml: DML, tableName: string, data?: object, params?: object)=> AxiosPromise; // 通用CRUD封装
  })
```
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

- `GenerateForm` 根据表单设计器 json 自动渲染表单

- `ProTable` 二次封装 el-table

- `CrudTable` 高级增删改查 CrudTable

- `FormDesigner` 表单设计器

- `TableDesigner` 表格设计器
