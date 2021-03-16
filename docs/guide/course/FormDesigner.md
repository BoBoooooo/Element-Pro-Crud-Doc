# 表单设计器

::: tip
表单设计器,基于`vue-form-making`开源版二次封装。
[在线地址](http://server.boboooooo.top:9997/#/form)
:::
## 示例

::: demo
``` html
<template>
  <form-designer></form-designer>
</template>
<script>
export default {

}
</script>

```
:::
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
