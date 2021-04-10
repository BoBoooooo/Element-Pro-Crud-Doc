# ProForm

::: tip
通过 json 渲染表单
:::

## Props

| 参数            | 说明              | 类型    | 可选值     | 默认值 |
| :-------------- | :---------------- | :------ | :--------- | :----- |
| data            | 表单 json         | Object  | -          | {}     |
| value           | 表单初始值        | Object  | -          | {}     |
| entity(.sync)   | 表单 model        | Object  | -          | {}     |
| readOnly        | 是否只读          | Boolean | true/false | false  |
| rules           | 组件联动规则      | Array   | -          | []     |
| remote          | 远端数据方法      | Object  | -          | {}     |
| formTableConfig | 子表格组件 config | Object  | -          | {}     |

## Props 补充说明

- `formTableConfig`

```javascript
/*  如果外侧传入优先使用传入的params
    此处考虑到一个表单内有多个子表的情况
    通过表格组件中"后端绑定key输入框"中的内容作为子表唯一标识
    格式例如:     
*/

let formTableConfig = {
  subTable1: {
    tableParams: {
      sid: 123
    },
    prefill: {
      sid: 456
    }
  },
  subTable2: {
    tableParams: {
      sid: 123
    },
    prefill: {
      sid: 456
    }
  }
}
```

- `remote`

```javascript
// 下拉框等需要加载远端方法

let remote = {
  async func1(callback) {
    let result = await myQuery1()
    callback(result)
  },
  async func2(callback) {
    let result = await myQuery2()
    callback(result)
  }
}
```

## Events

| 事件名称         | 说明             | 回调参数                    |
| :--------------- | :--------------- | :-------------------------- |
| table-selections | 子表格选中数据项 | {name,selections}           |
| btn-on-click     | 表单按钮点击事件 | {event:string,model:Object} |
| chart-on-click   | 表单图表点击事件 | {chart:Object,model:Object} |

## Slots

使用自定义插槽组件

## Methods

| 方法名                 | 说明                               | 参数                                             |
| :--------------------- | :--------------------------------- | :----------------------------------------------- |
| getData                | 获取表单数据(会校验) Promise       | -                                                |
| getDataWithoutValidate | 不经过验证直接获取表单内容 Promise | -                                                |
| resetForm              | 重置表单                           | -                                                |
| validate               | 校验成功则执行then方法,反之执行catch(errFields=> console.log(errFields))               | Promise                                                |
| hidden                 | 设置组件隐藏                       |  详见指南/异步更新表单状态                                                |
| disabled               | 设置组件禁用                       |  详见指南/异步更新表单状态                                                |
| setFormValue           | 更新表单值                         | (Object)=> void                                   |
| setFieldValue          | 设置字段值                         | (field: string,value: any)=> void / (Object)=> void |
| getFieldValue          | 获取字段值                         | (field: string) =>  data                           |
