# TableDesigner

表格设计器,可视化配置 tableJSON

## 效果

![](https://img.imgdb.cn/item/6010d37b3ffa7d37b3e7b965.png)

## 基础使用

```javascript
// TableDesignerDemo.vue
<template>
  <TableDesigner ref="tableDesigner"></TableDesigner>
<template>
export default {
  name: 'TableDesignerDemo',
  methods: {
	  // 获取表格设计json
	  getData(){
		let tableJSON = this.$refs.tableDesigner.getData()
	  },
	  // 设置表格json
	  setData(){
		  let tableJSON = [];
		  this.$refs.formDesigner.setJSON(tableJSON)
	  }
  }
};
```
