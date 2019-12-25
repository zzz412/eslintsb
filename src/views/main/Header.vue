<template>
  <div class="nav">
    <!-- 使用布局容器 -->
    <!-- 将z-container设置为flex容器 -->
    <div class="z-container">
      <!-- 设置左右俩端对齐 使用要设置俩个div 一个放左边的一个放右边的 -->
      <div class="left">
        <!-- 使用@/ 指向src目录 -->
        <!-- 做一个图片链接  为了不受其他样式影响 直接使用tag 渲染成其他标签-->
        <router-link to="/" tag="span">
          <img src="@/assets/logo.png" alt />
        </router-link>
        <router-link to="/social">社会招聘</router-link>
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
            <el-dropdown-item>
              <router-link to="/user">个人中心</router-link>
            </el-dropdown-item>
            <el-dropdown-item>个人空间</el-dropdown-item>
            <!-- 在组件外层定义的事件 是捕获不到的 -->
            <!-- 第二种解决方案 使用事件修饰符 .native 直接绑定到根元素上 -->
            <el-dropdown-item @click.native="logout">
              退出登录
              <!-- 第一种解决方案  直接在需要点击的元素外加上一层元素进行包裹 -->
              <!-- <div @click="logout">退出登录</div> -->
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      // userInfo: {}
    };
  },
  // 生命周期函数
  mounted() {
    this.fetchUserInfo();
  },
  // 计算属性
  computed: {
    // userInfo() {
    //   return this.$store.state.userInfo;
    // },
    ...mapState(["userInfo"]),
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
      // this.$api.get("users/userInfo").then(res => {
      //   // 将用户信息保存到data中
      //   this.userInfo = res;
      // });
      // this.$api.users.userInfo().then(res => {
      //   this.userInfo = res;
      //   // 使用commit提交用户信息
      //   this.$store.commit("saveUserInfo", res);
      //   // this.$store.commit({ type: "saveUserInfo", obj: res });
      // });
      this.$store.dispatch("getUserInfo");
    },
    logout() {
      this.$confirm("你确定要退出登录吗？", "是否退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("logout").then(() => {
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        });
      });
      // this.$store.dispatch("logout");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  position: fixed; //固定
  width: 100%;
  left: 0;
  top: 0;
  right: 0;
  z-index: 999;
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
</style>