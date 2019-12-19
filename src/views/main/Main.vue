<template>
  <div class="main">
    <div class="title">
      <p>未 来 无 所 不 能</p>
      <p>THE FUTURE OF POSSIBLE</p>
    </div>
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
  background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
  .title {
    // .main .title
    // 设置字体居中显示
    text-align: center;
    padding-top: 220px;
    color: #fff;
    font-size: 34px;
    line-height: 1.5;
    p:first-child {
      // 设置字体间隔
      letter-spacing: 2px;
    }
    p:last-child {
      font-size: 22px;
    }
  }
}
</style>