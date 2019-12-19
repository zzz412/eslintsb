<template>
  <div class="home">
    <!-- 每个组件有且只有根元素 -->
    <!-- 这是导航 -->
    <div class="nav">
      <!-- 使用布局容器 -->
      <!-- 将z-container设置为flex容器 -->
      <div class="z-container">
        <!-- 设置左右俩端对齐 使用要设置俩个div 一个放左边的一个放右边的 -->
        <div class="left">
          <!-- 使用@/ 指向src目录 -->
          <img src="@/assets/logo.png" alt />
          <a href="#">社会招聘</a>
          <a href="#">校园招聘</a>
          <a href="#">关于大疆</a>
        </div>
        <div class="right">
          <!-- 使用router的 router-link 进行跳转 -->
          <!-- <a href="/login">登录</a> -->

          <router-link to="/login" v-if="!userName">登录</router-link>
          <!-- 去除a标签的默认行为 -->
          <!-- <a href="#" @click.prevent v-else>欢迎您, {{userName}}</a> -->
          <el-dropdown v-else>
            <span style="cursor: pointer;">欢迎您, {{userName}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>个人空间</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- 这是内容 -->
    <div class="main">
      <div class="title">
        <p>未 来 无 所 不 能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <!-- 这是足部 -->
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
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      userInfo: {}
    };
  },
  // 生命周期函数
  mounted() {
    this.fetchUserInfo();
  },
  // 计算属性
  computed: {
    userName() {
      // 计算用户的用户名
      // 判断用户是否为空
      // JSON.stringify 判断对象为空
      // 直接遍历对象
      // 使用es6的keys判断这个对象的属性的长度是否有
      if (Object.keys(this.userInfo).length) {
        return this.userInfo.username;
      }
      return "";
    }
  },
  methods: {
    //获取用户信息
    // 为什么明明登录成功了 还是显示没有登录？
    // 在前后端分离的过程中 由于浏览器的限制 每次传递的session值都是不一样的
    // 于是后端无法判断是否为同一个用户 所以就会造成session无效
    // 解决办法 ： 在每次发送ajax的时候 手动传递session值
    fetchUserInfo() {
      this.$api.get("users/userInfo").then(res => {
        let data = res.data;
        // 判断状态码
        if (data.code === 0) {
          console.log("服务器返回的值", data.data);
          // 将用户信息保存到data中
          this.userInfo = data.data;
        } else {
          this.$message.error({
            message: data.msg,
            duration: 1000
          });
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// 设置.home容器高度占满全屏
.home {
  height: 100%;
  background: #fff;
  .nav {
    position: fixed; //固定
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
  }
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
}
</style>
