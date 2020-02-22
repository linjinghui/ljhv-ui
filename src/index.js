import './style/main.css';
// import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App';
// import directives from './directives';
import {Loading, Confirm, Prompt} from '../packages/index.js';
import vueHljs from 'vue-hljs';
import 'vue-hljs/dist/vue-hljs.min.css';
import VConsole from 'vconsole';
Vue.use(vueHljs);

// 注册全局组件
[Loading, Confirm, Prompt].map(function (component) {
  Vue.component(component.name, component);
});

// 用于组件通信
Vue.prototype.$eventbus = new Vue();

Vue.prototype.$store = store;

// 提示框插件
import '../node_modules/notice.js/dist/noticejs.css';
import Tip from '../node_modules/notice.js/dist/notice.js';
Vue.prototype.$tip = function (option) {
  return new Tip(option).show();
}

// 判断是否移动端
var client = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
Vue.prototype.$client = client;

// 如果是移动端添加 vconsole 插件，可屏蔽
client && new VConsole();

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
