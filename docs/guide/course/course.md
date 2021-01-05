# CrudTable

CrudTable将为我们自动完成增删改查的开发,将通过配置的json自动渲染表格以及表单。

## 使用步骤

- 绘制表单
- 绘制表格
- 嵌入CrudTable代码

## 基础使用

假设我们有一张人员信息表`person`,实现基础的增删改查

```javascript
// PersonModule.vue
<template>
  <CrudTable tableName="person" />
<template>
export default {
  name: 'PersonModule',
};
```

上述代码会自动为我们生成对于person表的增删改查页面,默认读取的表单以及表格名称为`person`

## 加载过程

- 请求`/dynamictables/detail` 接口获取 表格json
- 请求`/form/detail`接口获取 表单json
- 请求`/person/list`接口获取 表格数据
- 渲染表格
- 渲染表单

## 效果
![](https://pic.downk.cc/item/5ff3ce3c3ffa7d37b38999ad.png)




