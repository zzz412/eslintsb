const users = [{
        //请求地址
        url: 'users/login',
        //接口作用
        title: '用户登录',
        //请求方式
        method: 'post',
        //调用名字
        name: 'login'
    },
    {
        //请求地址
        url: 'users/userInfo',
        //接口作用
        title: '获取用户信息',
        //请求方式
        method: 'get',
        //调用名字
        name: 'userInfo'
    },
    {
        //请求地址
        url: 'users/reg',
        //接口作用
        title: '用户注册',
        //请求方式
        method: 'post',
        //调用名字
        name: 'reg'
    }
]

export default users;