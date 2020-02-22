<!-- 
功能介绍：
1、
 -->

<template>
  <lv-dialog v-model="pshow" :modal="modal" :esc="esc" :align="align" :modalClick="modalClick" :headText="headText" :buttons="buttons" @callback="dlgCallback">
    <lv-input slot="main" :autofocus="true" v-model="iptValue" :maxlength="maxlength" :placeholder="placeholder">
      <p slot="left" style="padding:0 10px;" v-if="label">{{label}}</p>
    </lv-input>
  </lv-dialog>
</template>

<script type="text/babel">
  import Dialog from '../../dialog/index.js';
  import Input from '../../input/index.js';

  export default {
    name: 'Prompt',
    components: {
      lvDialog: Dialog,
      lvInput: Input
    },
    data: function () {
      return {
        pshow: this.value,
        iptValue: this.initVal
      };
    },
    props: {
      value: {
        type: Boolean,
        default: false
      },
      // 是否模态，即是否产生遮罩效果
      modal: {
        type: Boolean,
        default: true
      },
      // esc关闭弹窗
      esc: {
        type: Boolean,
        default: true
      },
      // 点击遮罩关闭窗口
      modalClick: {
        type: Boolean,
        default: false
      },
      // left|center
      align: {
        default: 'left'
      },
      // 标题
      headText: ' ',
      buttons: {
        type: Array,
        default: function () {
          return [{
            theme: 'line',
            text: '取消'
          }, {
            text: '确定'
          }];
        }
      },
      callback: {
        type: Function,
        default: function () {
          return function () {
            // 
          };
        }
      },

      // 输入框参数
      label: '',
      maxlength: '',
      placeholder: '',
      initVal: {
        default: ''
      }
    },
    watch: {
      value: function (val) {
        this.pshow = val;
      },
      pshow: function (val) {
        this.$emit('input', val);
        if (!val) {
          this.iptValue = '';
        }
      },
      initVal: function (val) {
        this.iptValue = val;
      }
    },
    mounted: function () {
      // 
    },
    methods: {
      dlgCallback: function (data) {
        this.callback(data, this.iptValue);
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-confirm {}
</style>