<template>
  <div class="home">
    <nav>
      <div class="z-container">
        <div>
          <img src="@/assets/logo.png" alt />
          <a href="#">社会招聘</a>
          <a href="#">校园招聘</a>
          <a href="#">关于大疆</a>
        </div>
        <div>
          <a href="#">登录</a>
        </div>
      </div>
    </nav>
    <div class="main">
      <div>
        <p>未来无所不能</p>
        <p>THE FUTURE OF POSSIBLE</p>
      </div>
    </div>
    <footer>
      <div class="z-container">
        <p>Copyright © 2019 zzz zzz创新 版权所有</p>
        <a href="#">zzz官网 |</a>
        <a href="#">zzz赞助 |</a>
        <a href="#">淘宝阿里 |</a>
        <a href="#">腾讯云 |</a>
        <a href="#">微信公众号</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  nav {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    .z-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      div {
        display: flex;
        align-items: center;
        img {
          width: 34px;
          height: 34px;
          margin-right: 50px;
          cursor: pointer;
        }
        a {
          color: #3b3e40;
          font-size: 14px;
          margin-right: 34px;
        }
        a:hover {
          color: #44a8f2;
        }
      }
    }
  }
  .main {
    height: 100%;
    background-size: cover;
    background-position: 50%;
    background-image: url(https://we2.djicdn.com/hire/public/img/home-page-banner-2.d8f1ba7.png);
    font-size: 33px;
    color: #fff;
    line-height: 1.5;
    text-align: center;
    margin-bottom: -50px;
    padding-top: 60px;
    padding-bottom: 50px;
    box-sizing: border-box;
    div{
      padding-top: 200px;
    }
  }
  footer {
    background: #fff;
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 50px;
    .z-container {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #979797;
      p {
        margin-right: 34px;
      }
      a {
        color: #979797;
        margin-right: 4px;
        font-size: 13px;
      }
    }
  }
}
</style>
