<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      // 指定msg的类型必须为string类型
      // 类型检测失败会抛出异常 但是不会影响程序运行
      // 用作组件的定义 约束别人使用组件能够正确的传递对应类型的值
      type: String,
      // 定义默认值
      // 不传递使用默认值 传递使用传的值
      default: 'hello akun'
    },
    title: {
      type: String,
      default: '这是标题'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
