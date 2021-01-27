# GenerateForm

表单设计器,基于`vue-form-making`开源版二次封装。

## 效果

![](https://img.imgdb.cn/item/6010cf3d3ffa7d37b3e5bd3c.png)
![](https://img.imgdb.cn/item/6010cf793ffa7d37b3e5eb16.png)

## 基础使用

下列为示例代码,**可通过表单设计器生成代码处直接生成**。

```javascript
// GenerateFormDemo.vue
<template>
  <GenerateForm ref="generateDialogForm"
                  :value="value"
                  :data="data"
                  :readOnly="readOnly"
                  :remote="remote"
                  :entity.sync="entity" />
<template>
export default {
  name: 'GenerateFormDemo',
  data(){
    return {
	  value: {}, // 表单初始值
	  data: {}, // 表单json
	  readOnly: false, // 是否只读
	  remote:{} // 远端数据
	  entity: {} // 表单model对象

    }
  }
};
```
