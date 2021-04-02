---
pageClass: crud-table
---

# ProTable

::: tip
  基于el-table二次封装,通过json渲染table。托管分页、表格、查询等功能。
:::

## Props

|          参数          |                               说明                                |      类型       |                 可选值                  |  默认值   |
| :-------------------- | :--------------------------------------------------------------- | :------------- | :------------------------------------- | :------- |
| `el-table props` |          el-table原生属性见文档          |          https://element.eleme.cn/#/zh-CN/component/table            |
|       columns        |                       表格json                        |     Object      |             -             | null |
|       request        |                       请求数据方法                        |     详见教程     |             -             | null |
|       isMultiple       |                           是否开启多选                            |     Boolean     |               true,false                |   false   |
|     orderCondition     |                             排序条件                              |     String      |                    -                    |   null    |
|      visibleList       |                         内部元素显示控制(详情见下方)                          |     Object      |                    -                    |    {}     |
|       tableTitle       |                             表格标题                              |     String      |                    -                    |    ''     |
|      tableParams       |                   表格请求参数(带查询参数请求)                    |  Object,Array   |                    -                    |    {}     |
|     showPagination     |                      是否显示分页                      |     Boolean     |               true/false                |   true    |
|      remoteFuncs       |               远程数据方法(用于表单内远端数据请求)                |     Object      |                    -                    |    {}     |
|      pageSizes          |                     分页选项                     | Array |                    -                    |   [10,50,100]    |
|      maxHeightMinus    |                     表格自适应高度需要减去的高度值                     | Number |                    -                    |   285    |
|      fullHeight        |                     是否自适应屏幕高度(配置MaxHeightMinus)                     | Boolean |                    -                    |   false    |
|      selectableFunc    |                     选择框动态判断是否显示                     | Function |                    -                    |   null   |
|      showColumnIndex      |                     是否显示序号列                     | Boolean |                    -                    |   false    |
|      paginationLayout      |                     分页显示                     | String |   见官网   |  total, prev, pager, next, jumper, sizes    |

## Props 补充说明
- `visibleList`
```
  // 内部元素显示控制
  {
    searchForm: true, // 查询区域
    tableTitle: true, // 表格标题
    actionColumn: true, // 操作列
    seniorSearchBtn:true, // 高级查询按钮
  };
```

## Events

| 事件名称  |             说明             |                      回调参数                      |
| :--------------- | :-------------------------- | :------------------------------------------------ |
| `el-table events` |          el-table原生事件见[文档](https://element.eleme.cn/#/zh-CN/component/table)         |                      |
|   done    |       表格数据请求完成       |              {total,data}               |

## Slots

|    插槽名称     |                   说明                   |
| :-------- | :--------------------------------- |
|  btnBarPrevBtn  |           自定义右上角功能按钮           |
| append  |           el-table原生slot见[文档](https://element.eleme.cn/#/zh-CN/component/table)             |
| `${column.prop}_header` | 自定义列表头 |

## Methods

|   方法名    |     说明     | 参数 |
| :---- | :----- | :--  |
| tableReload | 重新加载列表 |  -   |
