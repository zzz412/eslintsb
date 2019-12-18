// 路由配置文件只放路由信息
import Home from '../views/Home.vue'
// ctrl + p 快速搜索文件
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    // 配置login页面
    path:'/login',
    // 给login路由取名 命名路由
    name:'login',
    // 导入login页面需要展示的内容
    // 懒加载导入  可以省略.vue
    component:()=> import('@/views/user/Login')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

// 在其他文件使用需要把默认router导出
export default routes
