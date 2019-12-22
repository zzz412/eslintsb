// 导入qs模块 用户解析url参数为对象 或者将对象转为url参数
import qs from 'qs';
// 导入axios 
import Axios from 'axios';
import {
    Message
} from 'element-ui';

// 定义class类 createApi
class CreateApi {
    // 类初始化加载
    constructor(config) {
        // console.log(config)
        // 将传递的配置保存
        this.config = config;
        // 设置axios的默认请求路径
        Axios.defaults.baseURL = this.config.BASE_URL
        // 设置axios请求是否携带参数
        Axios.defaults.withCredentials = this.config.WITHCORS
        // 设置axios请求超时时间
        Axios.defaults.timeout = this.config.TIMEOUT;
        // 设置post请求头的响应格式
        Axios.defaults.headers.post['Accept'] = 'application/json'
        // 设置post请求头的请求格式
        Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
        // 添加请求拦截器
        //添加一个请求拦截器
        Axios.interceptors.request.use(function (config) {
            //在请求发出之前进行一些操作
            return config;
        }, function (err) {
            //请求出现错误
            // 弹窗提示请求错误
            Message({
                message: '请求失败',
                duration: 1500,
                type: 'error'
            });
            return Promise.reject(err);
        });
        //添加一个响应拦截器
        Axios.interceptors.response.use(function (res) {
            //在这里对返回的数据进行处理
            //只有code为0的时候才是请求成功
            if (res.data.code === 0) {
                return res.data.data;
            } else { //其他都是失败
                Message({
                    type: 'error',
                    message: res.data.msg,
                    duration: 1500
                })
                // 返回错误的Promise
                return Promise.reject(res.data.msg);
            }
        }, function (err) {
            //Do something with response error
            return Promise.reject(err);
        })
        // 将聚合接口重新赋值
        this.methods = this.__getMethods();
    }

    //创建api
    create() {
        // 取出所有的模块
        const models = this.config.models;
        const apiModels = {}
        for (let model in models) {
            const apiModel = {};
            models[model].forEach((item) => {
                apiModel[item.name] = (params) => {
                    item.params = params;
                    return this.exec(item);
                }
            })
            apiModels[model] = apiModel;
        }
        return apiModels;
    }

    // 校验方法
    exec(opt) {
        if (this.methods[opt.method] === undefined) {
            console.log('请求' + opt.method + '暂未定义');
            return;
        }
        // 使用聚合方法
        let method = this.methods[opt.method];
        return method(opt);
    }

    // 聚合方法
    __getMethods() {
        return {
            get(opts) {
                const params = opts.params || {};
                return Axios({
                    url: opts.url, //请求地址
                    params, //请求参数
                    method: 'get', //请求方法
                    responseType: opts.responseType || 'json'
                })
            },
            post(opts) {
                const params = opts.params || {};
                return Axios({
                    url: opts.url,
                    data: qs.stringify(params),
                    method: 'post',
                })
            }
        }
    }
}

// 导出类
export default CreateApi;