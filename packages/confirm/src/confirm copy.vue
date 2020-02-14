<!-- 
功能介绍：
1、
 -->

<template>
  <lv-dialog v-model="show" :modal="modal" :align="align" :modalClick="modalClick" :icon="icon" :headText="headText" :content="content" :buttons="buttons" @callback="cllback">
    <slot name="title" slot="title"></slot>
    <div name="content" slot="main" v-if="prompt">
      <lv-input v-model="iptValue" type="text" :maxlength="prompt.maxlength" :placeholder="prompt.placeholder">
        <p slot="left" style="padding:0 10px;" v-if="prompt.label">{{prompt.label}}</p>
      </lv-input>
    </div>
    <template v-esle>
      <slot name="content" slot="main"></slot>
    </template>    
  </lv-dialog>
</template>

<script type="text/babel">
  import Dialog from '../../dialog/src/main';
  import Input from '../../input/src/main';

  export default {
    name: 'Confirm',
    components: {
      lvDialog: Dialog,
      lvInput: Input
    },
    data: function () {
      return {
        id: 'cfm_' + new Date().getTime() + parseInt(Math.random() * 100),
        iptValue: '123',
        // iptValue: this.prompt && this.prompt.init,
        show: this.value
      };
    },
    props: {
      value: '',
      // 是否模态，即是否产生遮罩效果
      modal: {
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
      // success|info|warning|error
      icon: {
        default: ''
      },
      // 标题
      headText: '',
      // 内容
      content: '',
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
          // 
        }
      },
      // 弹窗输入框参数 { maxlength: '', placeholder: '请输入内容', init: '', label: '' }
      prompt: '' 
    },
    watch: {
      value: function (val) {
        this.show = val;
      },
      show: function (val) {
        this.$emit('update:value', val);
      }
    },
    mounted: function () {
      // 
    },
    methods: {
      cllback: function (data) {
        this.callback(data);
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-confirm {}
</style>