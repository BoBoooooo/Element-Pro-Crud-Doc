# 表格设计器

表格设计器,可视化配置 tableJSON

## 效果

::: demo

```html
<template>
  <table-designer ref="tableDesigner"></table-designer>
</template>
<script>
export default {
		mounted(){
		this.$refs.tableDesigner.setJSON({
  "columns": [
    {
      "prop": "jobno",
      "label": "工号",
      "minWidth": "100",
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "columnFormatter",
      "searchable": true
    },
    {
      "prop": "personname",
      "label": "姓名",
      "minWidth": "70",
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "columnFormatter",
      "searchable": true
    },
    {
      "prop": "jobtime",
      "label": "入职时间",
      "minWidth": 140,
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "",
      "searchable": true
    },
    {
      "prop": "deptname",
      "label": "所在部门",
      "minWidth": "100",
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "",
      "searchable": true
    },
    {
      "prop": "post",
      "label": "岗位",
      "minWidth": "100",
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "",
      "searchable": true
    },
    {
      "prop": "level",
      "label": "职级",
      "minWidth": "100",
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "",
      "searchable": true
    },
    {
      "prop": "mobile",
      "label": "联系方式",
      "minWidth": 140,
      "align": "center",
      "headerAlign": "center",
      "showOverflowTooltip": true,
      "sortable": "custom",
      "slotName": "",
      "searchable": true
    },
    {
      "prop": "_action",
      "label": "操作",
      "minWidth": "240",
      "align": "center",
      "headerAlign": "center",
      "slotName": "actionColumn",
      "fixed": "right",
      "sortable": "false",
      "searchable": false
    }
  ],
  "name": "person",
  "position": "员工管理"
});
	}
}
</script>
```

:::

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
