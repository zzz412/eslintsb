<template>
  <div id="reg">
    <el-form label-width="80px">
      <el-form-item>
        <h2>注册</h2>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input type="text" placeholder="请输入用户名" v-model="val1" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" placeholder="请输入密码" v-model="val2" />
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%;" type="primary" @click="reg">立即注册</el-button>
      </el-form-item>
      <el-form-item>
        <div style="text-align:center;">
          <el-button type="text" @click="goLogin">返回登录</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      val1: "",
      val2: ""
    };
  },
  methods: {
    reg() {
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
      // 注册
      this.$api
        .post("users/reg", { userName: this.val1, password: this.val2 })
        .then(res => {
          let data = res.data;
          if (data.code === 0) {
            console.log("服务器返回的值", data.data);
            this.$message.success({
              message: "注册成功！",
              duration: 1000,
              onColse: () => {
                //注册成功跳转登录
                this.$router.push("/login");
              }
            });
          } else {
            this.$message.error({
              message: data.msg,
              duration: 1000
            });
          }
        });
    },
    goLogin() {
      this.$router.push("login");
    }
  }
};
</script>

<style lang="scss" scoped>
/* 使用sass css预处理器 因为sass现在改名字了 scss*/
// 使用scss的高级css语法
#reg {
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