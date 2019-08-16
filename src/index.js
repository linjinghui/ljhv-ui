import './style/main.css';
// import Vue from 'vue';
import store from './store';
import router from './router';
import App from './App';
import directives from './directives';
import {Loading, Tip, Confirm, Prompt} from 'web-base-ui';
// import './mock.js';

import vueHljs from 'vue-hljs';
import 'vue-hljs/dist/vue-hljs.min.css';
Vue.use(vueHljs);

// 注册全局组件
[Loading, Tip, Confirm, Prompt].map(function (component) {
  Vue.component(component.name, component);
});

// 用于组件通信
Vue.prototype.$eventbus = new Vue();
window.EVENTBUS = new Vue();

Vue.prototype.$store = store;

const app = new Vue({
  router,
  ...App
});

app.$mount('#app');
