import Vue from 'vue';
import Vuex from 'vuex';

// 声明使用
Vue.use(Vuex)

const store = new Vuex.Store({
    // 状态
    state: {
        // currentUser: '张三'
        currentUser: null,
        testlist: null
    },
    // 改变状态的函数
    mutations: {
        INIT_CURRENTHR(state, response) {
            console.log('调用成功了...');
            console.log(response);
            state.currentUser = response;
        },
        LOGOUT_CURRENTHR(state, response) {
            console.log('调用成功了...');
            console.log(response);
            state.currentUser = null;
        },
        GET_TESTLIST(state, response) {
            console.log('调用成功了...');
            console.log(response);
            state.testlist = response;
            console.log('这是测试数据')
            console.log(state.testlist)
        }
    },
    // 动作
    actions: {

    },
    getters: {
        currentUser(state) {
            return state.currentUser.username;
        },
        testlist(state) {
            return state.testlist;
        }
    }
})

// 这一个片段是干什么的？监视？
store.watch(function (state) {
    return state.sessions
}, function (val) {
    localStorage.setItem('vue-chat-session', JSON.stringify(val));
}, {
    deep: true/*这个貌似是开启watch监测的判断,官方说明也比较模糊*/
})

// 暴露出来
export default store;
