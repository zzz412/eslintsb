import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入router.js 配置文件 分离的目的在于不让总的路由配置文件太过复杂
// 等于做了一个功能分离
import routes from '@/config/router.config.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 是url地址呈历史模式显示  /url/about
  // hash /#/url/about
  base: process.env.BASE_URL,
  routes
})

export default router
