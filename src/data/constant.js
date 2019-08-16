import VueResource from 'vue-resource';
// import {lsgGetData, lsgDeleteData, ssgGetData, ssgSaveData, ssgDeleteData} from '../../node_modules/web-js-tool/libs/js/util.js';

let _this = new Vue();
let $http = Vue.use(VueResource).http;
let $tip = _this.$tip;
const TIMEOUT = 15000;
const ERRORSERVICE = '服务异常，请稍后再试！';

$http.interceptors.push(function (request, next) {
  // 设置超时
  let timeout = setTimeout(function () {
    request.abort();
    // 请求超时，请稍后再试！
    $tip({ show: true, text: '请求超时，请稍后再试！', theme: 'danger' });
  }, TIMEOUT);

  // 显示加载动画
  _this.$loading({show: true});
  // 设置请求头
  if (request.header) {
    for (var key in request.header) {
      request.headers.set(key, request.header[key]);
    }
  }
  // 拦截处理全局ajax回调
  next(function (response) {
    // 隐藏加载动画
    _this.$loading({show: false});
    if (response.status === 500 || response.status === 0) {
      $tip({ show: true, text: '系统异常，请检查网络并稍后再试!', theme: 'danger' });
    } else if (response.status === 404) {
      $tip({ show: true, text: '请求地址不存在：【' + response.url + '】', theme: 'danger' });
    }
    let body = response.body;
    if (typeof body === 'string' && body.indexOf('html') >= 0) {
      window.EVENTBUS.$emit('changeTip', {'display': true, 'theme': 'error', 'content': ERRORSERVICE});
    }
    clearTimeout(timeout);
    return response;
  });
});

export {$http, $tip};