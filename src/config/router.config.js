// 路由配置文件只放路由信息
import Home from '../views/Home.vue'
// ctrl + p 快速搜索文件
const routes = [{
    path: '/',
    component: Home,
    children: [{
        path: '',
        name: 'home',
        component: () => import('@/views/main/Main')
      },
      // 增加一个新的页面 并导入
      {
        path: '/social',
        name: 'social',
        component: () => import('@/views/main/Social')
      },
      {
        // 动态路由
        path: '/position/:id',
        name: 'position',
        component: () => import('@/views/main/Position') //用来映射该页面需要显示的内容
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/User.vue')
      }
    ]
  },
  { //配置嵌套路由
    path: '/login',
    // 当文件名为index的时候可以省略不写
    component: () => import('@/views/user'),
    // 配置子路由,
    children: [{ //配置登录
        path: '',
        name: 'login',
        component: () => import('@/views/user/Login'),
      },
      {
        path: '/reg',
        name: 'reg',
        component: () => import('@/views/user/Reg')
      }
    ]
  },
  // {
  //   // 配置login页面
  //   path: '/login',
  //   // 给login路由取名 命名路由
  //   name: 'login',
  //   // 导入login页面需要展示的内容
  //   // 懒加载导入  可以省略.vue
  //   component: () => import('@/views/user/Login')
  // },
  // {

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