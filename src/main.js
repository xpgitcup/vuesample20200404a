import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

// 一些不太明白的定义
import {
  postKeyValueRequestJson,
  postKeyValueRequest,
  postRequest,
  putRequest,
  deleteRequest,
  getRequest
} from "./utils/api";

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequestJson = postKeyValueRequestJson;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
