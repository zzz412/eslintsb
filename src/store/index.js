import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // state 等于 vue实例中的 data属性 数据改变是响应式的  数据是共享的
    count: 10, //这是一个计数器
    akun: '18',
    tp: '10'
  },
  getters: { // getters 相当于计算属性一样 建议getters中用箭头函数  
    // 当getters 使用传递的参数之后 就会变成一个方法 相当于methods 使用的时候需要加（）
    jsAkun: (state, getters) => (a) => { // 拥有参数  在getter中也可以访问其他的getters 可以在getters中传递调用参数
      console.log(getters.jsTp)
      console.log(a)
      let {
        akun
      } = state; // 结构赋值
      if (a > 18) {
        return 'akun长大了' + getters.jsTp
      }
      return 'akun还要加油哦' + getters.jsTp
    },
    jsTp(state) {
      let {
        tp
      } = state; // 结构赋值
      if (tp > 18) {
        return 'tp长大了'
      }
      return 'tp还要加油哦'
    },
  },
  mutations: { //专注于改变state的值  vuex 要求我们改变state的值 必须使用mutations进行改变 
    changeCount(state, obj) { // state （state中的值） 调用传递的参数  参数只能传递一个 所有一般直接传递一个对象
      console.log('传递的参数', obj) //在mutations中只能使用同步的js  不能使用异步  使用异步vuex无法监听 也无法调试
      // setTimeout(() => {
      state.count++;
      // }, 2000);
    },


  },
  actions: {},
  modules: {}
})