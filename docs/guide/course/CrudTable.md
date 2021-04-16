# CrudTable

:::tip
CrudTable托管了常见CRUD页面的大部分功能，结合ProForm,ProTable组件实现一键CRUD。
:::

## 组件概述

- 托管列表数据请求,高级查询，分页等功能。

- 预设增删改查按钮。

- 自动获取表单和表格json。需要预设`GetFormDetail`,`GetTableDetail`请求方法。

### 加载过程

- 请求表单json
- 请求表格json
- 请求列表数据
- 渲染表格
- 渲染表单

## 效果

![](https://pic.downk.cc/item/5ff3ce3c3ffa7d37b38999ad.png)
![](https://pic.downk.cc/item/5ff529f63ffa7d37b3634b91.png)

## 初始化

注册时需要传入`获取表单、表格json`以及`增删改查通用封装`3个方法


```js
  Vue.use(CrudTable, {
    getFormDetail: (tablename) => AxiosPromise(formJSON);// 获取某个表单设计json
    getTableDetail: (tablename) => AxiosPromise(tableJSON);// 获取某个表格设计json
    crud: (dml: DML, tableName: string, data?: object, params?: object)=> AxiosPromise; // 通用CRUD封装
  });
```

- crud方法
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
- 获取表单表格JSON方法
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
## 使用步骤

- 绘制表单
- 绘制表格
- 嵌入CrudTable代码

## 基础使用

假设我们有一张人员信息表`Person`需要对其实现基础的增删改查。

```javascript
// PersonModule.vue
<template>
  <CrudTable ref="table" :tableName="tableName" />
<template>
export default {
  name: 'PersonModule',
  data(){
    return {
      tableName: 'person'
    }
  }
};
```

上述示例代码:

**默认读取的表单、表格名称为`person`**

**默认请求`/person/list`接口获取列表数据**

如需自定义表单名称prop传入 `dialogFormDesignerName="自定义表单name"`

自定义表格名称prop传入 `tableDesignerName="自定义表格name"`

## 加载过程
- 请求后台接口获取表格json (例如: /form/detail?tablename=person)
- 请求后台接口获取表单json (例如: /dynamictables/detail?tablename=person)
- 请求列表数据 (例如: /person/list)
- 渲染列表及表单

## 列表数据请求格式

此处以`/person/list`举例
- 请求体
``` json
{
	"orderCondition": "timestamp desc", // 排序条件 field asc | desc
	"searchCondition": [{               // 查询条件
		"field": "jobno",                
		"operator": "like",              
		"value": "2019"
	}, {
		"field": "personname",
		"operator": "like",
		"value": "张三"
	}],
	"pageIndex": 1,                     // 当前页码
	"pageSize": 20                      // 页码大小
}
```
- **`searchCondition`为高级查询数组:**

	**字段名`field`操作符`operator`查询内容`value`**

- **`operator`操作符支持数据库常见的几种关键字**

|  eq |  like |  neq | notNull  |  isNull | gt  | lt  | egt  |elt   |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| =  | like '%%' | !=  |not null  |  is null |   > | <   |  >= |  <= |


上述查询条件会生成如下sql
``` sql
select * from person where jobno like '%2019%' and personname like '%张三%' ORDER BY `timestamp` desc LIMIT 0,20
```

- 返回值
``` json
{
	"code": 200,
	"message": "success",
	"data": {
		"list": [{
			"id": "9842bace-c4d6-4512-8406-9db5f0bac182",
			"personname": "张三",
			"deptname": "研发部",
			"salary": "10000",
			"post": "研发岗",
			"level": "P6",
			"timestamp": "2020-12-20T03:30:42.000Z",
			"jobtime": "2015-06-07",
			"jobno": "2019697465",
			"education": "本科",
			"major": "专业",
			"mobile": "17667768265",
			"birthdate": "2020-06",
			"sex": "男"
		}],
		"total": 1
	}
}
```

## 表格json
``` json
{
	"columns": [{
		"prop": "jobno",
		"label": "工号",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "personname",
		"label": "姓名",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "jobtime",
		"label": "入职时间",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "deptname",
		"label": "所在部门",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "post",
		"label": "岗位",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "level",
		"label": "职级",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "mobile",
		"label": "联系方式",
		"minWidth": 140,
		"align": "center",
		"headerAlign": "center",
		"showOverflowTooltip": true,
		"sortable": "custom",
		"slotName": "",
		"searchable": true
	}, {
		"prop": "",
		"label": "操作",
		"minWidth": 180,
		"align": "center",
		"headerAlign": "center",
		"slotName": "actionColumn",
		"fixed": "right",
		"sortable": "false",
		"searchable": false
	}]
}

```

### 类型说明
```typescript
interface columnConfig {
	prop: string; // 字段名
	label: string; // 表头
	minWidth: number; // 最小宽度
	align: boolean; // 内容对齐方式
	headerAlign: boolean; // 表头对齐方式
	slotName: string; // 自定义插槽名
	fixed: string; // 列对齐方式
	sortable: 'false' | 'custom' // 是否可排序
	searchable: boolean // 是否可查询
}

```

## 表单json
``` json
{
	"list": [{
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "input",
				"name": "工号",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "请输入工号",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "jobno",
				"model": "jobno",
				"rules": [{
					"type": "string",
					"message": "工号格式不正确"
				}]
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "input",
				"name": "姓名",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "personname",
				"model": "personname",
				"rules": [{
					"type": "string",
					"message": "姓名1格式不正确"
				}]
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.0578278502302394",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "radio",
				"name": "性别",
				"icon": "regular/dot-circle",
				"labelWidth": "",
				"hidden": false,
				"options": {
					"inline": true,
					"defaultValue": "",
					"showLabel": false,
					"options": [{
						"value": "男",
						"label": "选项1"
					}, {
						"value": "女",
						"label": "选项2"
					}],
					"required": false,
					"disabled": false,
					"width": "",
					"remote": false,
					"remoteOptions": [],
					"props": {
						"value": "value",
						"label": "label"
					},
					"remoteFunc": "func_1608432399000_10952"
				},
				"key": "1608432399000_10952",
				"model": "sex",
				"rules": [{
					"type": "string",
					"message": "性别格式不正确"
				}]
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "select",
				"name": "文化程度",
				"labelWidth": "",
				"hidden": false,
				"icon": "regular/caret-square-down",
				"options": {
					"defaultValue": "",
					"multiple": false,
					"disabled": false,
					"clearable": false,
					"placeholder": "",
					"required": false,
					"showLabel": false,
					"allowCreate": false,
					"width": "100%",
					"options": [{
						"value": "下拉框1"
					}, {
						"value": "下拉框2"
					}, {
						"value": "下拉框3"
					}],
					"remote": "dict",
					"remoteOptions": [{
						"value": "本科",
						"label": "本科"
					}, {
						"value": "大专及以下",
						"label": "大专及以下"
					}, {
						"value": "博士",
						"label": "博士"
					}, {
						"value": "研究生",
						"label": "研究生"
					}, {
						"value": "博士后",
						"label": "博士后"
					}],
					"props": {
						"value": "value",
						"label": "label"
					},
					"remoteFunc": "func_1608433134000_41081",
					"dictType": "962e3a39-928d-4470-a9f3-8efda17f2692"
				},
				"key": "1608433134000_41081",
				"model": "education",
				"rules": []
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.4979627182416866",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "input",
				"name": "所在部门",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "deptname",
				"model": "deptname",
				"rules": []
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "input",
				"name": "岗位",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "post",
				"model": "post",
				"rules": [{
					"type": "string",
					"message": "岗位格式不正确"
				}]
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.6063054944523363",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "select",
				"name": "职级",
				"labelWidth": "",
				"hidden": false,
				"icon": "regular/caret-square-down",
				"options": {
					"defaultValue": "",
					"multiple": false,
					"disabled": false,
					"clearable": false,
					"placeholder": "",
					"required": false,
					"showLabel": false,
					"allowCreate": false,
					"width": "100%",
					"options": [{
						"value": "下拉框1"
					}, {
						"value": "下拉框2"
					}, {
						"value": "下拉框3"
					}],
					"remote": "dict",
					"remoteOptions": [{
						"value": "P6",
						"label": "P6"
					}, {
						"value": "P8",
						"label": "P8"
					}, {
						"value": "P5",
						"label": "P5"
					}, {
						"value": "P9",
						"label": "P9"
					}, {
						"value": "P7",
						"label": "P7"
					}, {
						"value": "P10",
						"label": "P10"
					}],
					"props": {
						"value": "value",
						"label": "label"
					},
					"remoteFunc": "func_1608433344000_95961",
					"dictType": "ac3f1996-bcec-4604-b465-eaf5d1208e79"
				},
				"key": "1608433344000_95961",
				"model": "level",
				"rules": [{
					"type": "string",
					"message": "岗位格式不正确"
				}]
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "date",
				"name": "入职时间",
				"labelWidth": "",
				"hidden": false,
				"icon": "regular/calendar-alt",
				"options": {
					"defaultValue": false,
					"readonly": false,
					"disabled": false,
					"editable": true,
					"clearable": true,
					"placeholder": "",
					"startPlaceholder": "",
					"endPlaceholder": "",
					"type": "date",
					"format": "yyyy-MM-dd",
					"timestamp": false,
					"required": false,
					"width": "100%",
					"remoteFunc": "func_1608432345000_20310"
				},
				"key": "1608432345000_20310",
				"model": "jobtime",
				"rules": [{
					"type": "string",
					"message": "入职时间格式不正确"
				}]
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.9740509729876656",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "input",
				"name": "薪资",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "salary",
				"model": "salary",
				"rules": []
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "input",
				"name": "联系方式",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "1575516931000_0.7423405755223678",
				"model": "mobile",
				"rules": [{
					"type": "string",
					"message": "单行文本格式不正确"
				}]
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.3680056593272678",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局",
		"icon": "th",
		"columns": [{
			"span": 12,
			"list": [{
				"type": "input",
				"name": "专业",
				"labelWidth": 0,
				"hidden": false,
				"icon": "regular/keyboard",
				"options": {
					"width": "100%",
					"defaultValue": "",
					"readonly": false,
					"disabled": false,
					"required": false,
					"dataType": "string",
					"pattern": "",
					"placeholder": "",
					"remoteFunc": "func_1575516931000_89639"
				},
				"key": "major",
				"model": "major",
				"rules": []
			}]
		}, {
			"span": 12,
			"list": [{
				"type": "date",
				"name": "出生年月",
				"labelWidth": "",
				"hidden": false,
				"icon": "regular/calendar-alt",
				"options": {
					"defaultValue": false,
					"readonly": false,
					"disabled": false,
					"editable": true,
					"clearable": true,
					"placeholder": "",
					"startPlaceholder": "",
					"endPlaceholder": "",
					"type": "month",
					"format": "yyyy-MM",
					"timestamp": false,
					"required": false,
					"width": "100%",
					"remoteFunc": "func_1608432438000_26217"
				},
				"key": "1608432438000_26217",
				"model": "birthdate",
				"rules": []
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1575516929000_36539"
		},
		"key": "1575516931000_0.22046952760726568",
		"model": "1575516929000_36539",
		"rules": []
	}, {
		"type": "grid",
		"name": "栅格布局(1列)",
		"icon": "th",
		"columns": [{
			"span": 24,
			"list": [{
				"type": "table",
				"name": "工作履历",
				"icon": "table",
				"options": {
					"remoteFunc": "func_1608432102000_18779",
					"visibleList": {
						"actionColumnBtnEdit": true,
						"actionColumnBtnDetail": false,
						"btnAdd": true,
						"actionColumn": true,
						"tableTitle": false,
						"searchForm": false,
						"actionColumnBtnDel": true,
						"conditionTitle": false,
						"btnExport": true,
						"btnImport": false
					},
					"tableParams": "personid,id",
					"prefill": "personid,id",
					"tableTitle": "",
					"showPagination": true,
					"isMultiple": false,
					"tableName": "resume",
					"tableDesignerName": "person_resume",
					"dialogFormDesignerName": "person_resume"
				},
				"key": "1608432102000_18779",
				"model": "人员履历表",
				"rules": []
			}]
		}],
		"options": {
			"gutter": 0,
			"justify": "start",
			"align": "top",
			"remoteFunc": "func_1608432099000_43356"
		},
		"key": "1608432099000_43356",
		"model": "1608432099000_43356",
		"rules": []
	}],
	"config": {
		"labelWidth": 140,
		"labelPosition": "right",
		"size": "small",
		"isTableClass": true,
		"name": "person"
	}
}
```



