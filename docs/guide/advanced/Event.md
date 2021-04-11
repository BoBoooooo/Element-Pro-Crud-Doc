# 事件监听

::: tip
ProForm 支持监听内部组件事件。

默认监听事件名格式为 `field:eventName`
:::

## 方式

```html
// 假设我们需要监听"姓名"输入框的input事件,写法如下
<pro-form
  @personname:input="inputEvent">
</pro-form>
```


## 示例

修改姓名试试吧!

::: demo

```html
<template>
  <div>
    <pro-form @personname:input="inputChange"  :data="jsonData" :value="value" ref="form">
    </pro-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        jsonData:{"list":[{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"input","name":"工号","labelWidth":0,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"请输入工号","remoteFunc":"func_1575516931000_89639"},"key":"jobno","model":"jobno","rules":[{"type":"string","message":"工号格式不正确"}]}]},{"span":12,"list":[{"type":"input","name":"姓名","labelWidth":0,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"personname","model":"personname","rules":[{"type":"string","message":"姓名1格式不正确"}]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.0578278502302394","model":"1575516929000_36539","rules":[]},{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"radio","name":"性别","icon":"regular/dot-circle","labelWidth":"","hidden":false,"options":{"inline":true,"defaultValue":"","showLabel":false,"options":[{"value":"男","label":"选项1"},{"value":"女","label":"选项2"}],"required":false,"disabled":false,"width":"","remote":false,"remoteOptions":[],"props":{"value":"value","label":"label"},"remoteFunc":"func_1608432399000_10952"},"key":"1608432399000_10952","model":"sex","rules":[{"type":"string","message":"性别格式不正确"}]}]},{"span":12,"list":[{"type":"select","name":"文化程度","labelWidth":100,"hidden":false,"icon":"regular/caret-square-down","options":{"defaultValue":null,"multiple":false,"disabled":false,"clearable":false,"placeholder":"","required":false,"showLabel":false,"allowCreate":false,"width":"100%","options":[{"value":"本科"},{"value":"研究生"},{"value":"博士"}],"remote":"static","remoteOptions":[{"value":"本科","label":"本科"},{"value":"大专及以下","label":"大专及以下"},{"value":"博士","label":"博士"},{"value":"研究生","label":"研究生"},{"value":"博士后","label":"博士后"}],"props":{"value":"value","label":"label"},"remoteFunc":"func_1608433134000_41081","dictType":"962e3a39-928d-4470-a9f3-8efda17f2692"},"key":"1608433134000_41081","model":"education","rules":[]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.4979627182416866","model":"1575516929000_36539","rules":[]},{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"input","name":"所在部门","labelWidth":100,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"deptname","model":"deptname","rules":[{"type":"string","message":"所在部门格式不正确"}]}]},{"span":12,"list":[{"type":"input","name":"岗位","labelWidth":100,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"post","model":"post","rules":[{"type":"string","message":"岗位格式不正确"}]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.6063054944523363","model":"1575516929000_36539","rules":[]},{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"select","name":"职级","labelWidth":100,"hidden":false,"icon":"regular/caret-square-down","options":{"defaultValue":null,"multiple":false,"disabled":false,"clearable":false,"placeholder":"","required":false,"showLabel":false,"allowCreate":false,"width":"100%","options":[{"value":"P5"},{"value":"P6"},{"value":"P7"},{"value":"P8"}],"remote":"static","remoteOptions":[{"value":"P6","label":"P6"},{"value":"P8","label":"P8"},{"value":"P5","label":"P5"},{"value":"P9","label":"P9"},{"value":"P7","label":"P7"},{"value":"P10","label":"P10"}],"props":{"value":"value","label":"label"},"remoteFunc":"func_1608433344000_95961","dictType":"ac3f1996-bcec-4604-b465-eaf5d1208e79"},"key":"1608433344000_95961","model":"level","rules":[]}]},{"span":12,"list":[{"type":"date","name":"入职时间","labelWidth":"","hidden":false,"icon":"regular/calendar-alt","options":{"defaultValue":false,"readonly":false,"disabled":false,"editable":true,"clearable":true,"placeholder":"","startPlaceholder":"","endPlaceholder":"","type":"date","format":"yyyy-MM-dd","timestamp":false,"required":false,"width":"100%","remoteFunc":"func_1608432345000_20310"},"key":"1608432345000_20310","model":"jobtime","rules":[{"type":"string","message":"入职时间格式不正确"}]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.9740509729876656","model":"1575516929000_36539","rules":[]},{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"input","name":"薪资","labelWidth":0,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"salary","model":"salary","rules":[]}]},{"span":12,"list":[{"type":"input","name":"联系方式","labelWidth":0,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"1575516931000_0.7423405755223678","model":"mobile","rules":[{"type":"string","message":"单行文本格式不正确"}]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.3680056593272678","model":"1575516929000_36539","rules":[]},{"type":"grid","name":"栅格布局","icon":"th","columns":[{"span":12,"list":[{"type":"input","name":"专业","labelWidth":0,"hidden":false,"icon":"regular/keyboard","options":{"width":"100%","defaultValue":"","readonly":false,"disabled":false,"required":false,"dataType":"string","pattern":"","placeholder":"","remoteFunc":"func_1575516931000_89639"},"key":"major","model":"major","rules":[]}]},{"span":12,"list":[{"type":"date","name":"出生年月","labelWidth":"","hidden":false,"icon":"regular/calendar-alt","options":{"defaultValue":false,"readonly":false,"disabled":false,"editable":true,"clearable":true,"placeholder":"","startPlaceholder":"","endPlaceholder":"","type":"month","format":"yyyy-MM","timestamp":false,"required":false,"width":"100%","remoteFunc":"func_1608432438000_26217"},"key":"1608432438000_26217","model":"birthdate","rules":[]}]}],"options":{"gutter":0,"justify":"start","align":"top","remoteFunc":"func_1575516929000_36539"},"key":"1575516931000_0.22046952760726568","model":"1575516929000_36539","rules":[]}],"config":{"labelWidth":100,"labelPosition":"right","size":"small","isTableClass":false,"name":"person"}},
        value: { "sex": "男", "personname": "张三", "jobno": "20190893082", "education": "研究生", "deptname": "研发部", "post": "研发工程师", "level": "P5", "jobtime": "2021-03-02", "salary": "15k", "mobile": "1397894xxxx", "major": "软件工程", "birthdate": "1996-02" },
      }
    },
    methods: {
      inputChange(value) {
        this.$message('监听personname:input事件:'+value)
      },
    }
  }
</script>
```
:::

## 事件名列表

查阅ElementUI官方相应组件事件列表,[地址](https://element.eleme.cn/#/zh-CN/component/installation)



