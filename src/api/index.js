// 导入用户接口模块
import users from './models/users';
import job from './models/job';
// 导入默认请求地址
import {
    BASE_URL
} from '../config/gateway'

// 导入api构建函数
import CreateApi from '@/utils/CreateApi';

// 所有模块的集合
const models = {
    users,
    job,
}

// 初始化默认配置
const CONFIG = {
    BASE_URL, //url请求地址
    WITHCORS: true, //是否携带session信息
    TIMEOUT: 30000, //请求超时时间
    models, // 所有模块集合
}

// 调用api构建函数
const createApi = new CreateApi(CONFIG);
const api = createApi.create();
export default api;