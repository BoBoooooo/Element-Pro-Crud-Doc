# 自定义列/表头

::: tip
设置需要自定义列的 slotName

例如设置为`jobnoSlot`

自定义列头默认为`${prop}_header`
:::

::: warning
CrudTable 基于 ProTable 二次封装,用法一致,此处用 ProTable 作为示例。
:::

## 使用方法

### 示例一(各列不同插槽)

```json
[
  {
    "prop": "jobno",
    "label": "工号(自定义列)",
    "minWidth": "100",
    "align": "center",
    "headerAlign": "center",
    "showOverflowTooltip": true,
    "sortable": "custom",
    "slotName": "jobnoSlot", // 此处设置插槽名
    "searchable": true
  },
  {
    "prop": "personname",
    "label": "姓名",
    "minWidth": "100",
    "align": "center",
    "headerAlign": "center",
    "showOverflowTooltip": true,
    "sortable": "custom",
    "slotName": "personnameSlot", // 此处设置插槽名
    "searchable": true
  }
]
```

::: demo

```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns">
    <template #jobnoSlot="{row}">
      <el-tag>自定义1: {{row.jobno}}</el-tag>
    </template>
     <template #personnameSlot="{row}">
      <el-tag>自定义2: {{row.personname}}</el-tag>
    </template>
    <template #jobno_header="{column}">
      工号自定义表头
    </template>
     <template #personname_header="{column}">
      姓名自定义表头
    </template>
   </pro-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         columns:{
          "columns": [
                {
                  "prop": "jobno",
                  "label": "工号(自定义列)",
                  "minWidth": "100",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "sortable": "custom",
                  "slotName": "jobnoSlot",  // 此处设置插槽名,外侧传入即可
                  "searchable": true
                },
                {
                  "prop": "personname",
                  "label": "姓名",
                  "minWidth": "100",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "sortable": "custom",
                  "slotName": "personnameSlot",
                  "searchable": true
                },
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
        return {
          data: [
            {
              jobno: 20200101,
              personname: '张三'
            },
            {
              jobno: 20200102,
              personname: '李四'
            },
          ],
          total: 2,
        };
      }
    }
  }
</script>
```

:::

### 示例二(共用插槽)

```json
[
  {
    "prop": "jobno",
    "label": "工号(自定义列)",
    "minWidth": "100",
    "align": "center",
    "headerAlign": "center",
    "showOverflowTooltip": true,
    "sortable": "custom",
    "slotName": "columnFormatter", // 共用columnFormatter插槽
    "searchable": true
  },
  {
    "prop": "personname",
    "label": "姓名",
    "minWidth": "100",
    "align": "center",
    "headerAlign": "center",
    "showOverflowTooltip": true,
    "sortable": "custom",
    "slotName": "columnFormatter", // 共用columnFormatter插槽
    "searchable": true
  }
]
```

::: demo

```html
<template>
  <div>
   <pro-table ref="table" :request="request" :columns="columns">
     <!-- 注意跟示例二的区别,此处共用同一个名为columnFormatter的插槽
          通过判断prop来控制显示
      -->
    <template #columnFormatter="{row,prop}">
      <el-tag v-if="prop === 'jobno'">自定义1: {{row.jobno}} 工号</el-tag>
      <el-tag v-if="prop === 'personname'">自定义2: {{row.personname}} 工号</el-tag>
    </template>
    <template #jobno_header="{column}">
      工号自定义表头
    </template>
    <template #personname_header="{column}">
      姓名自定义表头
    </template>
   </pro-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
         columns:{
          "columns": [
                {
                  "prop": "jobno",
                  "label": "工号(自定义列)",
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
                  "minWidth": "100",
                  "align": "center",
                  "headerAlign": "center",
                  "showOverflowTooltip": true,
                  "sortable": "custom",
                  "slotName": "columnFormatter",
                  "searchable": true
                },
          ],
          "name": "person",
          "position": "员工管理"
        }
      }
    },
    methods: {
     async request(axiosParams){
        return {
          data: [
            {
              jobno: 20200101,
              personname: '张三'
            },
            {
              jobno: 20200102,
              personname: '李四'
            },
          ],
          total: 2,
        };
      }
    }
  }
</script>
```

:::

### CrudTable综合示例

自定义操作列,数据列,表头

::: demo

```html
<template>
  <CrudTable
    ref="table"
    :stripe="false"
    :columns="columns"
    :visibleList="{
      btnAdd:false
    }"
    tableTitle="员工管理"
    :promiseForSelect="promiseForSelect"
  >
    <template #personname_header>
      <span>姓名自定义表头</span>
    </template>
    <!-- 自定义数据列 -->
    <template #columnFormatter="{ row, prop }">
      <el-tag v-if="prop === 'jobno'">自定义: {{ row.jobno }}</el-tag>
      <span v-if="prop === 'personname'">
        <i class="el-icon el-icon-user" style="color: red"></i>
        自定义: {{ row.personname }}
      </span>
    </template>
    <!-- 自定义操作按钮 -->
    <template #btnCustom="{ row }">
      <el-button size="mini" @click="getRowData(row)">自定义操作按钮</el-button>
    </template>
  </CrudTable>
</template>
<script>
export default {
  name: "PersonTable",
  data() {
    return {
      columns: {
        columns: [
          {
            prop: "jobno",
            label: "工号",
            minWidth: "100",
            align: "center",
            headerAlign: "center",
            showOverflowTooltip: true,
            sortable: "custom",
            slotName: "columnFormatter",
            searchable: true,
          },
          {
            prop: "personname",
            label: "姓名",
            minWidth: "100",
            align: "center",
            headerAlign: "center",
            showOverflowTooltip: true,
            sortable: "custom",
            slotName: "columnFormatter",
            searchable: true,
          },
          {
            prop: "_action",
            label: "操作",
            minWidth: "100",
            align: "center",
            headerAlign: "center",
            slotName: "actionColumn",
            fixed: "right",
            sortable: "false",
            searchable: false,
          },
        ],
        name: "person",
        position: "员工管理",
      },
    };
  },

  methods: {
    getRowData(row) {
      this.$alert(JSON.stringify(row));
    },

    getAvatarUrl(row) {
      return row.avatar;
    },

    promiseForSelect() {
      return Promise.resolve({
        code: 200,
        data: {
          list: [
            {
              personname: "张三",
              jobno: "20200101",
            },
            {
              personname: "李四",
              jobno: "20200102",
            },
          ],
          total: 2,
        },
        message: "success",
      });
    },
  },
};
</script>

```

:::