<template>
  <div class="user">
    <div class="z-container">
      <div class="container">
        <div class="left">
          <div class="left_top">
            <div class="img_top">
              <img src="https://we2.djicdn.com/hire/public/img/default-avatar.6d24ca6.png" alt />
            </div>
            <div>
              <el-tooltip class="item" effect="dark" content="tp" placement="top">
                <span>tp</span>
              </el-tooltip>
            </div>

            <div>编辑头像</div>
            <div>
              <img src="https://we2.djicdn.com/hire/public/img/hire-qrcode.405a3e5.jpg" alt />
            </div>
            <div>大疆招聘公众号</div>
          </div>
          <div class="left_bottom">
            <P>最新公告</P>
            <P>2018-06-14</P>
            <P>简历功能改版公告</P>
            <P>2017-09-15</P>
            <P>大疆创新2018校招网申截止通知</P>
            <P>2017-08-25</P>
            <P>大疆创新-2018校招-软件开发类编程题笔试...</P>
          </div>
        </div>
        <div class="right">
          <div class="right_one">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="#616466"
              active-text-color="#3b3e40"
            >
              <el-menu-item index="1">社招简历</el-menu-item>
              <el-menu-item index="2">校招简历</el-menu-item>
            </el-menu>
            <div class="right_top_text">
              <div>
                <el-button type="info" size="small" class="resumeBtn">创建简历</el-button>
              </div>
              <p>目前还没有简历，点击按钮创建简历吧！</p>
            </div>
          </div>
          <div class="right_two">
            <div class="right_two_head">
              <p>申请进度</p>
              <a href="#">更多></a>
            </div>
            <div class="right_two_body">
              <p>你还没有申请职位，快去投递吧~</p>
            </div>
          </div>
          <div class="right_three">
            <div class="right_three_head">
              <p>职位收藏</p>
            </div>
            <div class="right_three_body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  background-color: rgb(247, 248, 249);
  // 设置高度 默认满屏
  min-height: 100%;
  // 图片居中
  background-size: cover;
  // 设置图片偏移  保证宽度改变 图片都能居中显示
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;
  // 这些边距会增加div的宽高
  // 设置忽略边框
  box-sizing: border-box;
  .container {
    margin: 40px 0;
    display: flex;
    // justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      .left_top {
        width: 226px;
        margin-right: 15px;
        padding: 0 32px 40px 32px;
        background-color: #fff;
        text-align: center;
        .img_top {
          padding-top: 35px;
          img {
            width: 96px;
            height: 96px;
          }
        }
        & > div:nth-child(2) {
          margin-top: 16px;
          font-size: 16px;
          cursor: pointer;
        }
        & > div:nth-child(3) {
          margin-top: 16px;
          padding-bottom: 27px;
          color: #44a8f2;
          font-size: 12px;
          line-height: 24px;
          cursor: pointer;
          border-bottom: 1px solid #f0f1f2;
        }
        & > div:nth-child(4) {
          margin-top: 27px;
          img {
            width: 127px;
            height: 127px;
          }
        }
        & > div:nth-child(5) {
          margin-top: 20px;
          font-size: 14px;
          color: #3b3e40;
          font-family: Open Sans, PingFang SC, Microsoft YaHei, Helvetica Neue,
            Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;
        }
      }
      .left_bottom {
        width: 258px;
        margin-right: 15px;
        margin-top: 15px;
        padding: 24px 16px 32px 16px;
        background-color: #fff;
        & > p:nth-child(1) {
          color: #3b3e40;
          margin: 0 0 16px;
          line-height: 24px;
          font-size: 16px;
          font-weight: 400;
        }
        & > p:nth-child(n + 2) {
          height: 100%;
          font-size: 14px;
          color: #6c7073;
          font-family: Open Sans, PingFang SC, Microsoft YaHei, Helvetica Neue,
            Hiragino Sans GB, WenQuanYi Micro Hei, Arial, sans-serif;
        }
        & > p:nth-child(2),
        p:nth-child(4),
        p:nth-child(6) {
          color: #9fa3a6;
        }
        & > p:nth-child(3),
        p:nth-child(5),
        p:nth-child(7) {
          margin-top: 8px;
          margin-bottom: 14px;
          cursor: pointer;
        }
      }
    }
    .right {
      background-color: #fff;
      width: 900px;
      height: 100px;
      .right_one {
        .right_top_text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #fff;
          height: 155px;
          & > div {
            margin-bottom: 14px;
            .resumeBtn {
              background-color: #3b3e40;
              border-color: #3b3e40;
              box-sizing: border-box;
            }
            .resumeBtn:hover {
              background-color: rgba($color: #3b3e40, $alpha: 0.9);
              border-color: rgba($color: #3b3e40, $alpha: 0.8);
            }
          }
          & > p {
            font-size: 14px;
            color: #909399;
          }
        }
      }
      .right_two {
        margin-top: 15px;
        background-color: #fff;
        .right_two_head {
          display: flex;
          justify-content: space-between;
          height: 55px;
          line-height: 55px;
          border-bottom: 1px solid #f0f1f2;
          p {
            margin-left: 25px;
            color: #707473;
            font-size: 16px;
            font-weight: 400;
          }
          a {
            color: #44a8f2;
            font-size: 14px;
            margin-right: 25px;
          }
        }
        .right_two_body {
          text-align: center;
          p {
            padding: 58px 0;
            font-size: 14px;
            color: #909399;
          }
        }
      }
      .right_three {
        height: 55px;
        line-height: 55px;
        border-bottom: 1px solid #f0f1f2;
        margin-top: 15px;
        background-color: #fff;
        .right_three_head {
          p {
            margin-left: 25px;
            color: #707473;
            font-size: 16px;
            font-weight: 400;
          }
        }
      }
    }
  }
}
</style>