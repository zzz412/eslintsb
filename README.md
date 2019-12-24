## 这是一个基于vue开发的项目
+ 不带eslint的垃圾检测

## Vuex各类属性和方法
+ State
    - 定义方法和vue实例中data一样  更改时能够动态的刷新（响应式更新）
    例如 State:{
            count:0
        }
    this.$store.state.count
    - mapState 辅助映射函数
        只能在计算属性中使用
        必须加入扩展运算符
        1.  
        ...mapState(['state的名字'])   state的名字必须于store中state对应
        2. 
        ...mapState({
            自定义名字:'state的名字',
            自定义名字:(state)=>{
                return 需要的值;
            }
        })
+ Getters
    - 与vue的computed类似 只有在自己对应的state值改变时才会重新计算
    写法  Getters:{
        //  state对象   getters对象
        //  能够访问state中的值      能够调用getters中的其他计算属性
        sum(state,getters){
            return state.count+10
        }
    }

    - 使用：
        this.$store.getters.sum
    - mapGetters 使用辅助映射函数
        只能在计算属性中使用
        必须加入扩展运算符
        1.  
        ...mapGetters(['Getters的名字'])   Getters的名字必须于store中Getters对应
        2. 
        ...mapGetters({
            自定义名字:'Getters的名字'
        }) 
    
    - Getters 带参数的写法   就变成了一个方法 使用时必须带括号  并且不再是计算属性 与 vue中的methods相似
        Getters:{
            sum: (state,getters) => ( a ) => {
                return state.count + a;
            }
        }
        用法: this.$store.getters.sum(10)
+ Mutations
    对于vuex来言所有的state的改变必须通过mutations的触发而改变，即使直接改变state的值也是可以的 但必须通过他改变，
    因为这不符合vuex的设计初衷。
    任何的数据的改变 都需要发送一个事件 vuex得到这个事件 进行响应 从而改变数据 
    定义方法： 
        Mutations:{
            // state对象  传递的参数（只能传递一个参数，建议使用一个对象进行传递）
            changeCount(state,obj){ 
                state.count = obj.count
            }
        }
        **Mutations只能为同步函数** 使用异步的Mutations vuex无法监控,devTools调试工具无法调试
    使用方法： 
      1. 必须通过commit()进行发送调用
         - this.$store.commit('changeCount',参数)
           **commit也可以用对象的写法** 发送的事件名 在type中定义
         - this.$store.commit({type:'changeCount',...参数})
      2. 使用辅助函数mapMutations
         必须在methods中调用
         methods:{
             ...mapMutations(['事件名']),
             ...mapMutations({
                 '自定义的时间名':'事件名'
             })
         }