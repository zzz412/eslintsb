// 导入axios 
import Axios from 'axios';
// 导入nodeJS模块 qs
import qs from 'qs';
// 导入element ui
import {
    Message
} from 'element-ui';
// 定义一个api生成器
class ApiGenerator { // es6的语法

    // 类的构造函数
    constructor(config) {
        // console.log('api生成器的打印', config)
        // 将config保存起来 定义一个全局配置
        this.config = config;
        // 在构造函数中配置axios
        // 配置axios默认请求地址
        Axios.defaults.baseURL = this.config.BASE_URL;
        // 配置axios每次发送请求都携带sessionID值
        Axios.defaults.withCredentials = this.config.WITHCORS;
        // 配置axios的请求超时时间
        Axios.defaults.timeout = this.config.TIMEOUT;
        // 配置axios在post请求的时候请求体以ajax的形式请求
        // 默认post请求头
        Axios.defaults.headers.post['Accept'] = 'application/json' //设置post的响应为json
        Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest' //设置post的请求为ajax请求
        // 定义一个axios的拦截器
        Axios.interceptors.request.use(
            (req) => { //请求拦截成功的回调函数 req当前请求的值
                // 最后返回拦截的请求
                // 对拦截的请求做一些操作
                // 例如给所有的请求都加上默认的参数
                // req.params = {
                //   ...req.params,
                //   page: 7
                // } //为了不影响原本的参数  复制一份之前的参数
                // console.log('这是axios拦截的请求', req)
                return req;
            },
            (err) => { //请求拦截失败的回调函数 请求失败
                return Promise.reject(err); // 返回.catch方法
            }
        )
        // 定义一个响应的拦截器
        Axios.interceptors.response.use(
            (res) => {
                //如果响应码为0 则代表请求成功
                if (res.data.code === 0) {
                    // 响应成功  去除axios的第一层data  再去除服务器返回的数据的一层data
                    return res.data.data;
                } else { //出现错误 提示出错
                    // 返回一个错误的promise
                    Message.error(res.data.msg);
                    return Promise.reject(res.data.msg);
                }
            },
            (err) => { //响应失败
                return Promise.reject(err)
            }
        )
        // 获得__method的返回值
        this.method = this.__method();
        // console.log(this.method)
    }

    // 生成api的方法
    create() {
        // 定义一个模块对象
        let modules = {};
        // 循环传递过来的modules
        // console.log(this.config.Modules)
        // 遍历对象
        for (let module in this.config.Modules) {
            let modulesApi = {}; // 用来保存每个api的模块
            // 循环每个模块
            this.config.Modules[module].forEach(item => {
                // console.log(item)
                // 定义模块对象
                let moduleApi = (params) => {
                    item.params = params;
                    // axios方法
                    // 判断接口规范是否定义正确
                    // 检测请求方法 是否定义
                    //如果为undefined则未定义该方法
                    if (this.method[item.method] === undefined) {
                        console.error('该方法为定义', item.method)
                        return;
                    }
                    return this.method[item.method](item);
                };
                modulesApi[item.name] = moduleApi
            })
            // 将所有的模块API保存到大模块中
            modules[module] = modulesApi
        }
        // console.log(modules)
        return modules;
    }

    // 定义一个发送请求的方法 私有的
    __method() {
        return {
            get(opt) {
                // 定义get需要的参数
                let params = opt.params || {}; //如果没有get请求没有参数就用空对象
                return Axios({
                    method: 'get', //请求方式
                    url: opt.url, //请求地址
                    responseType: 'json', //请求返回类型
                    params, // get请求的参数
                })
            },
            post(opt) {
                // 定义post需要的参数
                // qs.stringify 将对象转成url参数字符串
                let data = qs.stringify(opt.params) || {}; //如果没有post请求没有参数就用空对象
                return Axios({
                    method: 'post', //请求方式
                    url: opt.url, //请求地址
                    data, // post请求的参数
                })
            }
        }
    }

}

export default ApiGenerator; //导出 api生成器