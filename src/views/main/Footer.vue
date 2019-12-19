<template>
  <div class="footer" id="footer">
    <!-- 使用布局容器 -->
    <!-- 将z-container设置为flex容器 -->
    <div class="z-container">
      <!-- 设置左右俩端对齐 使用要设置俩个div 一个放左边的一个放右边的 -->
      <div class="left">
        <!-- 使用@/ 指向src目录 -->
        <p>Copyright © 2019 DJI 大疆创新 版权所有</p>
        <a href="#">DJI 大疆创新官网 |</a>
        <a href="#">DJI 大疆创新官方商城 |</a>
        <a href="#">天空之城 |</a>
        <a href="#">RoboMaster |</a>
        <a href="#">DJI 大疆招聘公众号</a>
      </div>
      <div class="right">
        <a href="#">简体中文 |</a>
        <a href="#">English</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Footer'
};
</script>

<style lang="scss" scoped>
.nav,
.footer {
  //.home .nav
  height: 60px;
  background: #fff;
  .z-container {
    //.home .nav .z-contianer
    height: 100%;
    display: flex;
    // 设置flex容器的排序方式 水平还是垂直  主轴是水平 x
    justify-content: space-between; // 俩端对齐 中间内容平分
    // 设置垂直方向排列
    align-items: center; // 居中显示
    //flex布局的排列只对子元素有效
    .left {
      // 设置left 为flex容器
      display: flex;
      // 设置垂直方向居中
      align-items: center;
      img {
        width: 34px;
        height: 34px;
        margin-right: 56px;
        cursor: pointer;
      }
    }
    a {
      color: #232526;
      font-size: 14px;
      margin-right: 30px;
    }
    a:last-child {
      margin-right: 0px;
    }
    // 添加鼠标悬浮改变颜色
    a:hover {
      color: #44a8f2;
    }
  }
}
// 设置底部样式
#footer {
  height: 50px;
  color: #707473;
  p {
    font-size: 12px;
    margin-right: 26px;
  }
  a {
    font-size: 12px;
    margin-right: 4px;
    // a标签无法继承父类的颜色
    color: #707473;
  }
}
</style>