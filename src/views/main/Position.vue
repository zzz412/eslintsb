<template>
  <div class="main">
    <div class="z-container">
      <div class="container">
        <div class="topInfo">
          <div class="h2">{{info.job_name}}</div>
          <div class="generalInfo">
            <span>职位类别：{{info.job_type}}</span>
            <span>工作城市：{{info.job_city}}</span>
            <span>发布时间：{{info.job_time}}</span>
          </div>
        </div>
        <div class="centerInfo">
          <div class="centerInfoTop">
            <p>工作职责</p>
            <p>{{info.job_info}}</p>
            <!-- <p :key="item" v-for="item in info.job_info"></p> -->
          </div>
          <div class="centerInfoBottom">
            <p>任职要求</p>
            <p>{{info.job_ask}}</p>
            <!-- <p :key="item" v-for="item in info.job_ask">{{item}}</p> -->
          </div>
        </div>
        <div class="btn">
          <div class="btnNoMove">
            <!-- <el-button
              :loading="loadingFlag"
              style="width:110px"
              class="collectionBtn"
              @click="showScope(info.pk)"
            >
              <span v-if="info.isColl">取消收藏</span>
              <span v-else>收藏职位</span>
            </el-button>-->
            <el-button style="width:110px" @click="showScope(info.pk)">
              <span v-if="info.isColl">取消收藏</span>
              <span v-else>收藏职位</span>
            </el-button>
          </div>
          <div class="btnNoMove">
            <el-button style="width:110px" class="applyBtn">立刻申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position", //给组件取一个别名 方便调试
  //如果获取地址栏的参数信息？
  mounted() {
    // 组件第一次渲染之后
    // 使用this.$rouer 得到当前的所有属性 .query 获取地址的参数  他是一个对象
    // console.log(this.$route.query.jobid)
    // 如果去取动态路由的参数  .params

    // 将当前路由的参数进行保存
    this.id = this.$route.params.id.slice(4);
    this.getJobType();
    this.getJobInfo();
  },
  data() {
    return {
      id: 0,
      info: {},
      jobTypes: []
    };
  },
  methods: {
    // 根据id值查询 当前职位的职位详情
    getJobInfo() {
      // get请求 参数必须包裹在 params中
      // 调用了axios.get(url地址)
      this.$api.job.jobInfo({ id: this.id }).then(res => {
        console.log(res); //res 是axios返回的响应信息  具体响应内容在res.data中
        // 处理错误请求 判断data数据是否为空 返回上一个页面
        // 判断对象为空 Object.keys(对象).length 查询一个对象是否有属性值 如果没有肯定为空对象
        if (!Object.keys(res).length) {
          this.$router.push("/social");
        }
        console.log(res);
        // 将获取到的 详情信息保存
        this.info = res;
        // 使用数组的高级查询方法 find(回调函数(当前遍历的值))
        let type = this.jobTypes.find(item => {
          if (item.id === this.info.job_type) {
            return item;
          }
        });
        this.info.job_type = type.type;
      });
    },
    // 获取所有类别信息
    getJobType: async function() {
      // 异步转同步 generation函数
      // var data = await this.$api.get("job/typeList");
      this.$api.job.jobType().then(res => {
        // 保存职位类别
        this.jobTypes = res;
        console.log("这是转同步后的值", res);
      });
      // console.log("xxxxxxxx", 11);
    },
    showScope(id) {
      console.log(id);
      this.$api.job.jobColl({ id: id }).then(res => {
        this.$message.info("成功");
        this.info.isColl = !this.info.isColl;
        // if (res.data.code === 0) {
        //   this.$message.info("成功");
        //   this.info.isColl = !this.info.isColl;
        // } else {
        //   this.$message.error(res.data.msg);
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  background-color: rgb(247, 248, 249);
  .z-container {
    padding-top: 100px;
    min-height: 100%;
    padding-bottom: 26px;
    .container {
      padding-right: 366px;
      padding-top: 20px;
      padding-left: 56px;
      padding-bottom: 60px;
      background-color: #fff;
      .topInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px #ebebeb solid;
        color: #707473;
        .h2,
        .generalInfo {
          display: flex;
          align-items: center;
          height: 48px;
        }
        .h2 {
          font-size: 22px;
        }
        .generalInfo {
          font-size: 13px;
          span {
            margin-right: 100px;
          }
        }
      }
      .centerInfo {
        margin-top: 30px;
        .centerInfoTop,
        .centerInfoBottom {
          p {
            line-height: 2;
            font-size: 13px;
            color: #707473;
          }
        }
        .centerInfoBottom {
          margin-top: 60px;
        }
      }
      .btn {
        margin-top: 48px;
        .btnNoMove {
          width: 130px;
        }
        display: flex;
        .collectionBtn:hover {
          border: 0.5px #9fa3a6 solid;
          color: #3b3e40;
          background-color: #fff;
        }
        .applyBtn {
          background-color: #3b3e40;
          color: #fff;
        }
        .applyBtn:hover {
          background-color: rgb(83, 87, 89);
        }
      }
    }
  }
}
</style>