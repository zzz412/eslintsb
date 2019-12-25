<template>
  <div class="login">
    <!-- 使用el的布局容器 -->
    <div class="main">
      <el-row class="row">
        <!-- 在el 中 栅格为24 -->
        <el-col :span="12" class="left">
          <div>
            <el-carousel height="600px">
              <el-carousel-item v-for="item in 3" :key="item">
                <div :class="['carousel-img','item'+item]">
                  <div>
                    <p>阿坤{{item}}</p>
                    <p>@{{item}}</p>
                  </div>
                </div>
              </el-carousel-item>
            </el-carousel>
            <img src="@/assets/logo.png" alt />
          </div>
        </el-col>
        <el-col :span="12" class="right">
          <!-- 配置router-view 用来单独显示登录和注册的内容 -->
          <transition name="el-fade-in-linear" :duration="400">
            <router-view></router-view>
          </transition>
        </el-col>
      </el-row>
    </div>
    <div class="footer">
      <p>Copyright © 2019 ZZZ All Rights Reserved. 隐私政策 使用条款 网站地图</p>
      <p>如果您有任何关于ZZZ账户的问题，请点击此处。</p>
      <p>湘ICP备120223335号-11</p>
    </div>
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
    login() {
      //   使用路由进行跳转
      // this.$router.push("/");
      // 发送post请求
      // this.$api.get()
      // http://172.16.14.44:3000/   userName 用户名 passwrod 密码
      this.$api
        .post("http://172.16.14.44:3000/users/login", {
          userName: this.val1,
          password: this.val2
        })
        .then(res => {
          if (res.data.code === 0) {
            alert("登录成功");
          } else {
            alert(res.data.msg);
          }
          // console.log(res.data);
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
.login {
  background: rgb(237, 237, 237);
  min-height: 100%;
  // 设置父元素为flex布局
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  .main {
    // 等同于 .login .main
    width: 1100px;
    // margin: 0 auto;
    height: 600px;
    border: 1px solid #ccc;
    // 设置阴影  x   y   半径   颜色
    box-shadow: 1px 1px 10px #ccc, -1px -1px 10px #ccc;
    border-radius: 4px;
    // 忽略边框
    box-sizing: border-box;
    .row {
      height: 100%;
      .left,
      .right {
        height: 600px;
        overflow: hidden;
      }
      .left {
        & > div {
          position: relative;
          img {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 40px;
            left: 40px;
            z-index: 99;
          }
          .carousel-img {
            position: relative;
            height: 100%;
            //  设置背景图片大小
            //    设置背景图片居中显示
            background-size: cover;
            //   设置背景图片居中显示
            &.item1 {
              // .carousel-img.item1
              background-image: url("https://account.djicdn.com/pc/static/img/1.e61fc72.jpg");
            }
            &.item2 {
              background-image: url("https://account.djicdn.com/pc/static/img/2.643c4c1.jpg");
            }
            &.item3 {
              background-image: url("https://account.djicdn.com/pc/static/img/3.61f61fa.jpg");
            }
            div {
              position: absolute;
              right: 40px;
              bottom: 100px;
              p {
                color: #fff;
                font-size: 28px;
                font-weight: 600;
                line-height: 1.3;
                text-align: right;
              }
              p:last-child {
                font-size: 16px;
                margin-top: 5px;
              }
            }
          }
        }
      }
      .right {
        background: #fff;
        & > div {
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
      }
    }
  }
  .footer {
    //   距离上面加一些距离
    margin-top: 20px;
    color: #979797;
    font-size: 12px;
    //   设置字体居中
    text-align: center;
    //   设置字体行高
    line-height: 2;
  }
}
</style>