<template>
  <div id="login">
    <el-form label-width="80px">
      <el-form-item>
        <h2>登录</h2>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入用户名或手机号" v-model="val1" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="val2" />
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" @click="login">登录</el-button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center;">
          <el-button type="text" @click="goReg">没有账号?立即注册</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// vuex提供了映射函数能够直接调用state中的值 mapState     ->>   都必须在vue的计算属性中使用
// vuex提供了映射函数能够直接调用getters中的值 mapGetters ->>
// vuex提供了映射函数能够直接调用mutations中的值 mapMutations =>> 必须在vue的methods中使用
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "login",
  data() {
    return {
      val1: "",
      val2: ""
    };
  },
  // 一般使用vuex中state的值 会使用计算属性去定义
  computed: {
    // *** 使用mapState
    // 1. 使用vuex中数据
    count1() {
      return this.$store.state.count;
    },
    // 2. 使用映射函数  数组中的名字 就是 vuex中state的对应的属性名字
    ...mapState(["count", "akun"]),
    // 3. 自定义store的名字
    ...mapState({
      //自定义的名字 ： vuex中state的对应的名字
      myakun: "akun", // 直接使用
      //自定义的名字 ： 自定义函数（state对象） 一定要返回数据
      myakun2: state => {
        // 加入自定义的函数
        return state.akun + 1;
      }
    }),
    // *** 使用mapGetters
    // 1. 直接用计算属性调用然后返回
    xAkun() {
      return this.$store.getters.jsAkun;
    },
    // 2 . 使用mapGetters直接映射
    ...mapGetters(["jsAkun"]),
    // 3. 使用maoGetters对象映射
    ...mapGetters({
      tpxx: "jsAkun"
    })
  },
  methods: {
    ...mapMutations(["changeCount"]),
    ...mapMutations({
      akunChang: "changeCount"
    }),
    login() {
      // 如何发起通知给vuex
      //1. 必须使用commit去通知
      // commit('通知的事件',需要的传递的参数)
      // this.$store.commit("changeCount", { a: 123, b: 345 });
      //2. type 通知的事件名
      // this.$store.commit({ type: "changeCount", a: 123, b: 345 });
      // this.akunChang({ type: "changeCount", a: 123, b: 345 });
      // this.$store.state.count++;
      // this.$router.push("/");
      // 先判断文本框是否有内容
      if (!this.val1) {
        // 使用el提供的友好提示
        this.$message.error({
          message: "用户名或手机号不能为空",
          duration: 1000
        });
        return;
      }
      if (!this.val2) {
        this.$message.error({
          message: "密码不能为空哦",
          duration: 1000
        });
        return;
      }
      // 先后台发送请求 进行登录
      // axios
      // 配置axios默认请求地址
      // post传递参数
      // this.$api
      //   .post("users/login", { userName: this.val1, password: this.val2 })
      //   .then(res => {
      //     this.$notify({
      //       title: "登录成功",
      //       message: "正在进入主页",
      //       type: "success",
      //       duration: 2000, //  显示时间
      //       onClose: () => {
      //         // 窗口关闭的回调函数
      //         // 等2s跳转页面
      //         // 登录成功跳转首页
      //         this.$router.push("/");
      //       }
      //     });
      //   });
      this.$api.users
        .login({ userName: this.val1, password: this.val2 })
        .then(res => {
          this.$notify({
            title: "登录成功",
            message: "正在进入主页",
            type: "success",
            duration: 2000, //  显示时间
            onClose: () => {
              // 窗口关闭的回调函数
              // 等2s跳转页面
              // 登录成功跳转首页
              this.$router.push("/");
            }
          });
        });
    },
    // 跳转reg页面的方法
    goReg() {
      // this.$router.push 页面的跳转的方法
      // 字符串 | 对象
      // 路径   |  {path : 路径 ， name: 路由的名字 ，params: 路由的参数 看不到的 ， query： 地址栏上的参数}
      this.$router.push("/reg");
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名字了 scss*/
// 使用scss的高级css语法
#login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 70%;
    h2 {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      margin-right: 8px;
    }
  }
}
</style>