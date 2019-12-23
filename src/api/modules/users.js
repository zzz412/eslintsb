// 定义一个规范
const users = [
    {
        // 定义请求地址
        url: 'users/login',
        // 定义请求方式
        method: 'post',
        // 定义请求的方法名
        name: 'login',
        // 定义方法的作用
        title: '用户登录'
    },
    {
        // 定义请求地址
        url: 'users/userInfo',
        // 定义请求方式
        method: 'get',
        // 定义请求的方法名
        name: 'userInfo',
        // 定义方法的作用
        title: '获取用户信息'
    }
]

// 默认导出users
export default users;