# 初始化

注册时支持传入5个axios请求方法

```js
  Vue.use(ElementProCrud, {
    getTables: Function; // axios方法获取数据库中所有的表 (表单表格设计器)
    getFormKey: Function; // axios方法获取某张表中所有字段信息 (表单表格设计器)
    getFormDetail: Function;// 获取某个表单设计json (CrudTable)
    getTableDetail: Function;// 获取某个表格设计json (CrudTable)
    crud: Function; //  通用增删改查方法(CrudTable)
  });
```

- crud
增删改查axios方法通用封装
```js
import axios from '@/plugins/axios';

interface optionsType {
  url: string; // 请求地址
  method: string; // 请求方法 post / get
  data?: object; // body报体内容
  params?: object; // queryString内容
  headers?: any; // 自定义头,用于设置是否加密请求
}

/**
 * 操作类型枚举
 */
export enum DML {
  INSERT = 'add',
  UPDATE = 'update',
  DELETE = 'delete',
  SELECT = 'list',
  TREE = 'tree',
  TREE_LAZY = 'treeByParentID',
  DETAIL = 'detail',
  DELETES = 'deleteByIds',
}

/**
 *
 * @param dml 操作类型
 * @param tableName 数据库表名
 * @param data body data
 * @param params query Params
 */
export function crud(dml: DML, tableName: string, data: object = {}, params: any = null) {
  const options: optionsType = {
    url: `/${tableName}/${dml}`, // 例如person表的查询接口为  /person/list
    method: 'post',
  };
  // 以下请求通过包体传参
  if ('list,treeByParentID'.includes(dml)) {
    // list接口高级查询条件拼接
    options.data = {
      orderCondition: '',
      searchCondition: [],
      pageIndex: 0,
      pageSize: 0,
      ...data,
    };
  } else {
    options.data = data;
  }
  options.params = params;

  return axios;
}

```
- get相关方法
``` js
import axios from 'axios';

/**
 * 获取数据库中所有表名
 *
 * @returns 所有表名
 */
export function getTables() {
  return axios({
    url: '/form/getTables',
    method: 'post',
  });
}

/**
 * 根据表名获取表格的设计json等信息
 *
 * @param {String} tablename
 * @returns 表格设计json
 */
export function getTableDetail(tablename) {
  return axios({
    url: '/dynamictables/detail',
    method: 'post',
    params: { tablename },
  });
}

/**
 * 获取所有表单设计json
 * @param tablename
 */
export function getFormDetail(tablename) {
  return axios({
    url: '/form/detail',
    method: 'post',
    params: { tablename },
  });
}

/**
 * 获取表中所有字段信息
 * @param {String} tablename
 */
export function getFormKey(tablename) {
  return axios({
    url: '/form/getKey',
    method: 'post',
    params: { tablename },
  });
}


```