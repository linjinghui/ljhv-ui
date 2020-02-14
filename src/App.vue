<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="optionLoading.show" v-bind="optionLoading"></loading>
    <tip v-model="optionTip.text" v-bind="optionTip"></tip>
    <confirm v-bind="optionConfirm" :value.sync="optionConfirm.show">
      <span slot="title" v-text="optionConfirm.headText"></span>
      <span slot="content" v-html="optionConfirm.content"></span>
    </confirm>
    <prompt v-model="optionPrompt.show" :headText="optionPrompt.headText" :modal="optionPrompt.modal" :esc="optionPrompt.esc" :modalClick="optionPrompt.modalClick" :align="optionPrompt.align" :label="optionPrompt.label" :maxlength="optionPrompt.maxlength" :placeholder="optionPrompt.placeholder" :initVal="optionPrompt.initVal" :buttons="optionPrompt.buttons" :callback="optionPrompt.callback"></prompt>
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
          text: '',
          type: '',
          time: '',
          icon: '',
          close: ''
        },
        optionPrompt: {
          show: false
        },
        optionConfirm: {
          show: false,
          headText: '标题',
          content: '文本内容'
        }
      };
    },
    mounted: function () {
      let _this = this;

      Vue.prototype.$loading = function (option) {
        _this.optionLoading = Object.assign(_this.optionLoading, option);
      };
      Vue.prototype.$confirm = function (option) {
        _this.optionConfirm = Object.assign(_this.optionConfirm, option);
      };
      Vue.prototype.$prompt = function (option) {
        console.log('==prompt==', option);
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
    /* min-width: 1350px;
    min-height: 630px; */
    overflow: auto;
    background-color: #fff;
  }
  
  /* 笔记本尺寸 1366 * 768 */
  @media screen and (max-width: 1366px) {}
</style>