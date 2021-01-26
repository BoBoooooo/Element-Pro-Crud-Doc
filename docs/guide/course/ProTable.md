# ProTable

ProTable 基于 El-Table 做了二次封装，托管了分页，查询表单，数据表格.

- 通过表格json渲染(可通过`TableDesigner`表格设计器可视化配置)
- 查询表单
- 托管分页

## 效果

![](https://img.imgdb.cn/item/600a4e703ffa7d37b3f44dac.png)

## 基础使用

通过表格 json 渲染一个数据列表界面

```javascript
// PersonModule.vue
<template>
  <ProTable :request="request" :columns="columns"></ProTable>
</template>

<script>
import { Vue, Component} from 'vue-property-decorator';

@Component({
  name: 'ProTable',
})
export default class ProTable extends Vue {
  columns = {
    name: 'person',
    position: '人员信息列表',
    columns: [
      {
        prop: 'jobno',
        label: '工号',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'personname',
        label: '姓名',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'jobtime',
        label: '入职时间',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'deptname',
        label: '所在部门',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'post',
        label: '岗位',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'level',
        label: '职级',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
      {
        prop: 'mobile',
        label: '联系方式',
        minWidth: 140,
        align: 'center',
        headerAlign: 'center',
        showOverflowTooltip: true,
        sortable: 'custom',
        slotName: '',
        searchable: true,
      },
    ],
  };

  async request(data) {
	// 请求相应接口获取data以及total
    const res = await myQuqery({
		searchCondition: data.searchCondition,
		pageSize: data.pageSize,
		pageIndex: data.pageIndex,
		orderCondition: data.orderCondition
    });
    return {
      data: [
        {
          id: '9842bace-c4d6-4512-8406-9db5f0bac182',
          personname: '张三',
          deptname: '研发部',
          salary: '10000',
          post: '研发岗',
          level: 'P6',
          timestamp: '2020-12-20T03:30:42.000Z',
          jobtime: '2015-06-07',
          jobno: '2019697465',
          education: '本科',
          major: '专业',
          mobile: '17667768265',
          birthdate: '2020-06',
          sex: '男',
        },
      ],
      total: 1,
    };
  }
}
</script>
```

## request说明

`request` 会接收一个Promise对象。对象中必须要有 `data` 和 `total`。request 会接管 el-table loading 的设置。

同时在查询表单搜索，分页大小，列排序等发生变化时重新执行，并且会回调出一个params参数。


``` typescript
// protable.d.ts
request: (params: AxiosParams)=>Promise<DataSource<T>>

interface DataSource {
	data: Array<T>;
	total: number;
}

interface AxiosParams {
	searchCondition: Array<SearchParams>;
	pageSize: number;
	pageIndex: number;
	orderCondition: string;
}

interface SearchParams {
	field: string; // 字段名称
	operator?: string; // 查询类型
	value: string; // 搜索内容
}

```

### params示例

以人员信息管理Person表做示例。

```json
{
  "orderCondition": "timestamp desc", // 排序条件 field asc | desc
  "searchCondition": [
    {
      // 查询条件
      "field": "jobno",
      "operator": "like",
      "value": "2019"
    },
    {
      "field": "personname",
      "operator": "like",
      "value": "张三"
    }
  ],
  "pageIndex": 1, // 当前页码
  "pageSize": 20 // 页码大小
}
```

- **`searchCondition`为查询表单内容,包含需要查询的字段名`field`,操作符`operator`,查询内容`value`**

- **`operator`操作符支持数据库常见的几种关键字**

| eq  | like      | neq | notNull  | isNull  | gt  | lt  | egt | elt |
| --- | --------- | --- | -------- | ------- | --- | --- | --- | --- |
| =   | like '%%' | !=  | not null | is null | >   | <   | >=  | <=  |

上述查询条件会生成如下 sql

```sql
select * from person where jobno like '%2019%' and personname like '%张三%' ORDER BY `timestamp` desc LIMIT 0,20
```


## columns说明

```typescript

interface columns {
	name: string; // 表格json名称
	position: string; // 使用位置
	columns: Array<columnConfig> // 列配置
}

interface columnConfig {
  prop: string // 字段名
  label: string // 表头
  minWidth: number // 最小宽度
  align: boolean // 内容对齐方式
  headerAlign: boolean // 表头对齐方式
  slotName: string // 自定义插槽名
  fixed: string // 列对齐方式
  sortable: 'false' | 'custom' // 是否可排序
  searchable: boolean // 是否可查询
}
```
