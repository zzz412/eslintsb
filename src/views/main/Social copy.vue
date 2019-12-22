<template>
  <div class="main">
    <!-- 增加一个容器 -->
    <div class="z-container">
      <div class="top"></div>
      <div class="bottom">
        <!-- 这是类别区域 -->
        <div class="classNav">
          <div class="nav">
            <div>职位类别:</div>
            <div :class="{active:keywords.type===0}" @click="serachJobs(0)">所有类别</div>
            <!-- 使用列表渲染 渲染所有的类别 -->
            <!-- 添加点击事件 -->
            <div
              v-for="item in typeList"
              :class="{active:keywords.type===item.id}"
              @click="serachJobs(item.id)"
              :key="item.id"
            >{{item.type}}</div>
          </div>
          <div class="nav">
            <div>工作城市:</div>
            <div :class="{active:keywords.city===0}" @click="serachCitys(0)">所有城市</div>
            <div
              @click="serachCitys(item.id)"
              v-for="item in cityList"
              :key="item.id"
              :class="{active:keywords.city===item.id}"
            >{{item.city}}</div>
          </div>
        </div>
        <!-- 这是搜索区域 -->
        <div class="searchNav">
          <el-input
            suffix-icon="el-icon-search"
            placeholder="请输入职位关键词"
            style="width:300px;"
            size="small"
            v-model="query"
            clearable
            @change="serachList"
          />
          <div class="keyword">
            <span @click="serachList('实习生')">实习生</span>
            <span @click="serachList('前端')">前端</span>
            <span @click="serachList('Java')">Java</span>
            <span @click="serachList('开发')">开发</span>
            <span @click="serachList('会计')">会计</span>
            <span @click="serachList('扫地')">扫地</span>
            <span @click="serachList('IOS')">IOS</span>
            <span @click="serachList('算法')">算法</span>
          </div>
        </div>
        <!-- 这是结果区域 -->
        <div class="result">
          <!-- 自定义表头样式 -->
          <el-table
            :data="jobs"
            :header-cell-style="{background:'#f5f5f5',color:'#616466',fontSize:'18px'}"
          >
            <!-- 表头设置 -->
            <el-table-column prop="job_name" label="职位名称" width="280"></el-table-column>
            <el-table-column prop="job_type" label="职位类别">
              <!-- 使用插槽自定义职位类别 -->
              <template slot-scope="scope">
                <!-- scope.row 当前这一行 -->
                <!-- 过滤器过滤职位类别 -->
                {{jobTypeNB(scope.row.job_type)}}
              </template>
            </el-table-column>
            <el-table-column prop="job_city" label="工作城市"></el-table-column>
            <el-table-column prop="job_time" label="发布时间"></el-table-column>
            <el-table-column label="收藏">
              <!-- scope 指向当前这一行的数据 -->
              <template slot-scope="scope">
                <span
                  :class="scope.row.isColl?'el-icon-star-on':'el-icon-star-off'"
                  style="cursor: pointer;"
                  @click="jobColl(scope.row)"
                ></span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template>
                <span style="cursor: pointer;color:#707473;">查看详情 ></span>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="pagination.total"
            :current-page="pagination.page"
            @current-change="pageChange"
            class="mypage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "social",
  data() {
    return {
      //职位类别
      typeList: [],
      //城市类别
      cityList: [
        { id: 1, city: "上海市" },
        { id: 2, city: "长沙市" },
        { id: 3, city: "武汉市" },
        { id: 4, city: "北京市" },
        { id: 5, city: "广州市" },
        { id: 6, city: "深圳市" }
      ],
      //搜索框的值
      query: "",
      // 职位列表
      jobs: [],
      // 分页器
      pagination: {},
      keywords: {
        type: 0,
        city: 0
      }
    };
  },
  //页面渲染完毕调用接口
  mounted() {
    this.getTypeList();
    this.fetchJobs();
  },
  //定义一个过滤器 处理职位类别
  filters: {
    // jobTypeNB(val) {
    //   // 将typelist的类型与val进行匹配
    //   var item = this.typeList.find(item => item.id == val);
    //   console.log(item)
    //   return val;
    // }
  },
  methods: {
    getTypeList() {
      //获取类别列表
      this.$api.get("job/typeList").then(res => {
        // console.log(res.data.data)
        // 改变typelist
        this.typeList = res.data.data;
      });
    },
    // 获取职位列表
    fetchJobs() {
      // 默认传递页码
      let params = {
        page: this.pagination.page || 1
      };
      // 如果有筛选职位类别就传递
      if (this.keywords.type) {
        params.jobType = this.keywords.type;
      }
      // 如果有筛选城市就传递
      if (this.keywords.city) {
        // this.keywords.city 是id值  不能直接进行查询 要过滤一遍 变成城市名
        var city = this.cityList.find(item => item.id === this.keywords.city)
          .city;
        params.jobCity = city;
      }
      // 如果文本框有值
      if (this.query) {
        params.jobName = this.query;
      }

      // axios的get传参
      this.$api
        .get("job/lists", {
          params
        })
        .then(res => {
          let {
            data: { items, total, page }
          } = res.data;
          // console.log(items);
          // console.log(total);
          // console.log(page);
          this.jobs = items;
          //定制分页器
          this.pagination = {
            page,
            total
          };
        });
    },
    //页面改变的方法
    pageChange(index) {
      //当前页码
      console.log(index);
      //页码改变 重新修改分页器
      this.pagination.page = index;
      //重新查询
      this.fetchJobs();
    },
    jobTypeNB(val) {
      // 将typelist的类型与val进行匹配
      var item = this.typeList.find(item => item.id == val);
      return item.type;
    },
    serachJobs(id) {
      this.keywords.type = id;
      this.fetchJobs();
    },
    serachCitys(id) {
      this.keywords.city = id;
      this.fetchJobs();
    },
    // 输入框回车或者失焦事件
    serachList(value) {
      // 重新查询
      this.query = value;
      this.fetchJobs();
    },
    // 收藏与取消收藏
    jobColl(row) {
      console.log(row);
      this.$api.post("job/coll", { pk: row.pk }).then(res => {
        console.log(res.data.code);
        if (res.data.code === 0) {
          row.isColl = !row.isColl;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  // 设置高度默认占满全屏
  min-height: 100%;
  // 设置图片居中
  background-size: cover;
  // 设置图片偏移 保证宽度改变 图片都能居中显示
  background-position: 50%;
  padding-top: 60px;
  padding-bottom: 50px;
  margin-bottom: -50px;
  background-color: rgb(247, 247, 247);
  // 这些边距会 增加div的宽高
  // 设置忽略边距
  box-sizing: border-box;
  .top {
    height: 300px;
    background: url("https://we2.djicdn.com/hire/public/img/search-banner.c9d5236.jpg")
      no-repeat;
    background-size: cover;
  }
  .bottom {
    background: #fff;
    min-height: 500px;
    margin-top: 30px;
    margin-bottom: 30px;
    // 设置一个4面边距
    padding: 30px;
    .classNav {
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;
      //类别搜索导航的样式
      .nav {
        display: flex;
        margin-bottom: 28px;
        & > div {
          margin: 0 10px;
          color: #7f8382;
          font-size: 14px;
          cursor: default; //带小箭头
        }
        & > div:nth-child(n + 2) {
          //选择除第一个以外的都加上样式
          // color: red;
          cursor: pointer;
        }
        //鼠标悬浮变色
        & > div:nth-child(n + 2):hover {
          color: #232526;
        }
        .active {
          color: #232526;
        }
      }
    }
    .searchNav {
      text-align: right;
      .keyword {
        color: #b4b4b4;
        font-size: 13px;
        margin-top: 10px;
        span {
          cursor: pointer;
          margin-left: 20px;
        }
      }
    }
    .result {
      margin-top: 20px;
      .mypage {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
}
</style>
