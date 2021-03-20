# 多级表头

::: tip
ProTable组件支持多级表头,仅需传入树状结构columns即可,详见下面示例。
:::

## 示例一

::: demo

```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns"></pro-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         columns:{
          "columns": [
            {
              "label": "人员基本信息",
              "headerAlign": "center",
              "children": [
                {
                  "prop": "avatar",
                  "label": "照片",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "minWidth": 80,
                  "sortable": "custom",
                  "searchable": true,
                  "slotName": ""
                },
                {
                  "prop": "jobno",
                  "label": "工号",
                  "minWidth": "100",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "sortable": "custom",
                  "slotName": "",
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
                }
              ]
            },
            {
              "label": "职位信息",
              "headerAlign": "center",
              "children": [
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
                }
              ]
            }
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
    return {
      data: [],
      total: 0,
    };
  }
    }
  }
</script>
```

:::

## 示例二
::: demo
```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns"></pro-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
         columns:{
          "columns": [
            {
              "label": "人员基本信息",
              "headerAlign": "center",
              "children": [
                {
                  "prop": "avatar",
                  "label": "照片",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "minWidth": 80,
                  "sortable": "custom",
                  "searchable": true,
                  "slotName": ""
                },
                {
                  "label": "详细信息",
                  "headerAlign": "center",
                  "children": [
                    {
                      "prop": "jobno",
                      "label": "工号",
                      "minWidth": "100",
                      "align": "center",
                      "headerAlign": "center",
                      "showOverflowTooltip": true,
                      "sortable": "custom",
                      "slotName": "",
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
                      "slotName": "",
                      "searchable": true
                    },
                  ]
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
                }
              ]
            },
            {
              "label": "职位信息",
              "headerAlign": "center",
              "children": [
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
                }
              ]
            }
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
    return {
      data: [],
      total: 0,
    };
  }
    }
  }
</script>
```
:::

## 示例三
::: demo
```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns"></pro-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
         columns: {
          "columns": [
            {
              "label": "信息一览",
              "headerAlign": "center",
              "children": [
                {
                  "prop": "avatar",
                  "label": "照片",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "minWidth": 80,
                  "sortable": "custom",
                  "searchable": true,
                  "slotName": ""
                },
                {
                  "label": "详细信息",
                  "headerAlign": "center",
                  "children": [
                    {
                      "prop": "jobno",
                      "label": "工号",
                      "minWidth": "100",
                      "align": "center",
                      "headerAlign": "center",
                      "showOverflowTooltip": true,
                      "sortable": "custom",
                      "slotName": "",
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
                    }
                  ]
                },
                {
                  "label": "职位信息",
                  "headerAlign": "center",
                  "children": [
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
                    }
                  ]
                }
              ]
            }
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
    return {
      data: [],
      total: 0,
    };
  }
    }
  }
</script>
```
:::


## 示例四
::: demo
```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns"></pro-table>
  </div>
</template>
<script>
  export default {
    data () {
      return {
         columns: {
          "columns": [
            {
              "prop": "jobno",
              "label": "工号",
              "minWidth": "100",
              "align": "center",
              "headerAlign": "center",
              "showOverflowTooltip": true,
              "sortable": "custom",
              "slotName": "",
              "searchable": true
            },
            {
              "label": "信息一览",
              "headerAlign": "center",
              "children": [
                {
                  "prop": "avatar",
                  "label": "照片",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "minWidth": 80,
                  "sortable": "custom",
                  "searchable": true,
                  "slotName": ""
                },
                {
                  "label": "详细信息",
                  "headerAlign": "center",
                  "children": [
                    {
                      "prop": "personname",
                      "label": "姓名",
                      "minWidth": "70",
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
                    }
                  ]
                },
                {
                  "label": "职位信息",
                  "headerAlign": "center",
                  "children": [
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
                    }
                  ]
                }
              ]
            }
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
    return {
      data: [],
      total: 0,
    };
  }
    }
  }
</script>
```
:::