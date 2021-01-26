# 开始使用

## NPM

### 安装

```
npm i element-pro-crud -s
```

支持完整引入及按需引入,*`该插件基于ElementUI封装,注意引用顺序`*
### 完整引入
  
  ```javascript
  import ElementProCrud from 'element-pro-crud';
  import ElementUI from 'element-ui';
  import 'element-pro-crud/lib/ProCrud.css'; 
  import 'element-ui/lib/theme-chalk/index.css';

  Vue.use(ElementUI)
  Vue.use(ElementProCrud, {
    getTables: Function; // axios方法获取数据库中所有的表
    getFormKey: Function; // axios方法获取某张表中所有字段信息
    getFormDetail: Function;// 获取某个表单设计json
    getTableDetail: Function;// 获取某个表格设计json
    crud: (dml: DML, tableName: string, data?: object, params?: object)=> AxiosPromise; // 通用CRUD封装
  });
  ```
  
### 按需引入
``` javascript
  import { GenerateForm } from 'element-pro-crud';
  Vue.use(GenerateForm);

  import Vue from 'vue';
  import { GenerateForm, ProTable, CrudTable, FormDesigner, TableDesigner } from 'element-pro-crud';
  import App from './App.vue';

  Vue.use(GenerateForm);
  Vue.use(ProTable);
  Vue.use(CrudTable, options);// options介绍如上,getTables,getFormKey两个方法可以缺省
  Vue.use(FormDesigner, options);// options介绍如上
  Vue.use(TableDesigner, options);// options介绍如上

  new Vue({
    el: '#app',
    render: h => h(App)
  });

```

## CDN

``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- 引入ProCrud CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/element-pro-crud@0.5.0/lib/ProCrud.css" />
    <!-- 引入ElementUI CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
    />
  </head>
  <body>
    <div id="app">
      <el-button @click="showDialog('form')" type="primary">打开表单设计器</el-button>
      <el-button @click="showDialog('table')" type="danger">打开表格设计器</el-button>
      <form-designer-dialog ref="form"></form-designer-dialog>
      <table-designer-dialog ref="table"></table-designer-dialog>
      <crud-table tableName="dept" tableTitle="表格示例"></crud-table>
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
      el: "#app",
      methods:{
        showDialog(name){
          this.$refs[name].showDialog();
        }
      }
    });
  </script>
</html>
  ```


## 组件列表

- `GenerateForm` 根据表单设计器json自动渲染表单

- `ProTable`  二次封装el-table

- `CrudTable`  高级增删改查 CrudTable

- `FormDesigner`  表单设计器

- `TableDesigner`  表格设计器