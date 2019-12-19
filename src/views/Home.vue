<template>
  <div class="home">
    <!-- 每个组件有且只有根元素 -->
    <!-- 这是导航 -->
    <HeaderCom></HeaderCom>
    <!-- 这是内容 -->
    <router-view></router-view>
    <!-- 这是足部 -->
    <FooterCom></FooterCom>
  </div>
</template>
<script>
// 导入header 和 footer组件
import HeaderCom from "./main/Header";
import FooterCom from "./main/Footer";
export default {
  name: "home",
  // 局部组件引入
  components: {
    HeaderCom,
    FooterCom
  }
};
</script>
<style lang="scss" scoped>
// 设置.home容器高度占满全屏
.home {
  height: 100%;
  background: #fff;
}
</style>
