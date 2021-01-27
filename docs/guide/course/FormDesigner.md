# FormDesigner

表单设计器,基于`vue-form-making`开源版二次封装。

## 效果

![](https://img.imgdb.cn/item/6010cf3d3ffa7d37b3e5bd3c.png)
![](https://img.imgdb.cn/item/6010cf793ffa7d37b3e5eb16.png)

## 基础使用

```javascript
// FormDesignerDemo.vue
<template>
  <FormDesigner ref="formDesigner"></FormDesigner>
<template>
export default {
  name: 'FormDesignerDemo',
  methods: {
	  // 获取表单设计json
	  getData(){
		let json = this.$refs.formDesigner.getData()
	  },
	  // 设置表单json
	  setData(){
		  this.$refs.formDesigner.setJSON({
			  name: '人员信息表',
			  position: '人员信息模块',
			  list: [] // 表单json
		  })
	  }
  }
};
```
