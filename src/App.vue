<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="optionLoading.show" v-bind="optionLoading"></loading>
    <tip v-model="optionTip.show" v-bind="optionTip"></tip>
    <confirm v-bind="optionConfirm" v-model="optionConfirm.show">
      <span slot="title" v-html="optionConfirm.heading"></span>
      <span slot="content" v-html="optionConfirm.content"></span>
    </confirm>
    <prompt v-bind="optionPrompt" v-model="optionPrompt.show">
      <span slot="title" v-html="optionPrompt.heading"></span>
    </prompt>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'app',
    data: function () {
      return {
        swidth: document.documentElement.clientWidth || document.body.clientWidth,
        sheight: document.documentElement.clientHeight || document.body.clientHeight,
        optionLoading: {
          show: false,
          text: '请您稍后！',
          modal: false,
          full: false
        },
        optionTip: {
          show: false,
          // left|center
          textAlign: '',
          // primary|success|info|warning|danger|自定义
          theme: 'success'
        },
        optionPrompt: {
          show: false,
          modal: true,
          heading: '标题',
          stl: {
            footer: {
              // left|center|right
              'text-align': 'right'
            }
          },
          buttons: [{
            text: '取消',
            // primary|success|info|warning|danger|#f56c6c
            theme: 'line'
          }, {
            text: '确认',
            theme: 'success'
          }]
        },
        optionConfirm: {
          show: false,
          modal: false,
          heading: '标题',
          content: '文本内容',
          // error|success|warning
          type: 'success',
          stl: {
            header: {
              // left|center
              'text-align': 'center'
            },
            section: {
              // left|center|right
              'text-align': 'center'
            },
            footer: {
              // left|center|right
              'text-align': 'center'
            }
          },
          buttons1: [],
          buttons: [{
            text: '放弃修改',
            // primary|success|info|warning|danger|#f56c6c
            theme: 'line'
          }, {
            text: '修改',
            theme: 'warning'
          }]
        }
      };
    },
    mounted: function () {
      let _this = this;

      Vue.prototype.$loading = function (option) {
        _this.optionLoading = Object.assign(_this.optionLoading, option);
      };
      Vue.prototype.$tip = function (option) {
        _this.optionTip = Object.assign(_this.optionTip, option);
      };
      Vue.prototype.$confirm = function (option) {
        _this.optionConfirm = Object.assign(_this.optionConfirm, option);
      };
      Vue.prototype.$prompt = function (option) {
        _this.optionPrompt = Object.assign(_this.optionPrompt, option);
      };
    },
    watch: {
      //
    },
    methods: {
      toPage: function (path, type) {
        if (!path) {
          switch (type) {
            case 0:
              // 登录页
              path = '/#/login';
              break;
            case 1:
              // 首页
              path = '/#/index';
              break;
            case 2:
              // 混合应用页
              path = '/#/mixapp';
              break;
            case 3:
              // H5应用页
              path = '/#/h5app';
              break;
            case 4:
              // H5应用页
              path = '/#/devtool';
              break;
            default:
              path = '/#/index';
          }
        }
        var search = location.href.split('?');

        if (search.length !== 2 || path === '/#/login') {
          search = '';
        } else {
          search = '?' + search[1];
        }
        window.location.href = location.origin + path + search;
      }
    }
  };
</script>

<style type="text/css">
  #app {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 1350px;
    min-height: 630px;
    overflow: auto;
    background-color: #fff;
    --theme: #0079ff;
  }
  
  /* 笔记本尺寸 1366 * 768 */
  @media screen and (max-width: 1366px) {}
</style>

<style lang="scss" class="cssForm">
  // 默认垂直布局
  .wrap-form {

    // 单层
    >.form-layer {

      >label {
        line-height: 30px;
      }

      >.f-dom {
        display: inline-block;
        width: 100%;
      }

      >.tip {
        color: red;
        line-height: 20px;
      }
    }
    
    // 单层水平
    >.form-layer.horiz {
      position: relative;
      
      >label {
        display: inline-block;
        margin-right: 10px;
        width: 100px;
        text-align: right;
      }

      >.f-dom {
        width: calc(100% - 100px - 5px - 10px);
      }
    }
  }

  // 水平布局
  .wrap-form.horiz {

    // 单层
    >.form-layer {
      position: relative;
      margin-bottom: 14px;
      
      >label {
        display: inline-block;
        margin-right: 10px;
        width: 100px;
        text-align: right;
      }

      >.f-dom {
        width: calc(100% - 100px - 5px - 10px);
      }

      >.tip {
        position: absolute;
        top: 0;
        left: calc(100% + 10px);
        line-height: 30px;
        white-space: nowrap;
        word-wrap: break-word;
        word-break: normal;
        z-index: 1;
      }
    }

    // 单层垂直
    >.form-layer.vert {

      >label {
        display: unset;
        margin-right: unset;
        width: unset;
        text-align: unset;
      }

      >.f-dom {
        width: 100%;
      }

      >.tip {
        top: 30px;
      }
    }
  }
</style>

