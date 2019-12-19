<template>
  <div class="main">
    <h1>这是校园招聘</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  // 设置高度默认占满全屏
  height: 100%;
  // 设置图片居中
  background-size: cover;
  // 设置图片偏移 保证宽度改变 图片都能居中显示
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;
  margin-bottom: -50px;
  // 这些边距会 增加div的宽高
  // 设置忽略边距
  box-sizing: border-box;
}
</style>