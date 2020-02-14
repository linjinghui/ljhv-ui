<!-- 
功能介绍：
1、
 -->

<template>
  <transition name="slide-fade">
    <div class="wrap-dialog" :class="align" :style="{'z-index':zIndex+1}" v-if="value">
      <header>
        <slot name="title">{{headText}}</slot>
        <i class="icon lv-icon-x" @click="clk_hide"></i>
      </header>
      <vperfect-scrollbar :settings="{wheelSpeed:0.5}">
        <div class="main">
          <i class="lv-icon-x-2" v-if="icon==='error'"></i>
          <i class="lv-icon-point-2" v-if="icon==='warning'"></i>
          <i class="lv-icon-tick-2" v-if="icon==='success'"></i>
          <slot name="main">{{content}}</slot>
        </div>
      </vperfect-scrollbar>
      <footer v-if="buttons">
        <lv-button v-for="(button,index) in buttons" :key="'btn_'+index" v-bind="button" @click="clkBtn(button)">{{button.text}}</lv-button>
      </footer>
    </div>
  </transition>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  import Button from '../../button/index.js';

  export default {
    name: 'Dialog',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar,
      'lvButton': Button
    },
    data: function () {
      return {
        id: 'dlg_' + new Date().getTime() + parseInt(Math.random() * 100),
        zIndex: 1000,
        domZz: ''
      };
    },
    props: {
      // 显示、隐藏
      value: {
        type: Boolean,
        default: false
      },
      // esc 关闭
      esc: {
        type: Boolean,
        default: true
      },
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
      // 标题
      headText: '',
      // 内容
      content: '',
      // 图标 success|warning|error
      icon: {
        default: ''
      },
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
      }
    },
    watch: {
      value: function (val) {
        if (val + '' === 'true') {
          this.modal + '' === 'true' && this.creatZz();
        } else {
          this.removeZz();
        }
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('keyup', this.evt_keyup);
      this.removeZz();
    },
    mounted: function () {
      window.addEventListener('keyup', this.evt_keyup);
      this.creatZz();
    },
    methods: {
      evt_keyup: function (event) {
        let e = event || window.event;
        let keyCode = e.keyCode;

        if (this.esc && keyCode === 27 && this.value) {
          this.clk_hide();
        }
      },
      clk_hide: function () {
        this.$emit('input', false);
      },
      clkBtn: function (data) {
        this.$emit('callback', data);
      },
      creatZz: function () {
        if (this.modal + '' === 'true' && this.value + '' === 'true') {
          var _this = this;
          var dom = document.createElement('div');

          dom.setAttribute('id', this.id);
          dom.setAttribute('class', 'center-hv');
          dom.setAttribute('style', 'position: fixed;background-color: rgba(0, 0, 0, 0.3);z-index: ' + this.zIndex);
          dom.addEventListener('click', function () {
            _this.modalClick && _this.clk_hide();
          });
          document.body.appendChild(dom);
        }
      },
      removeZz: function () {
        var dom = document.getElementById(this.id);

        dom && (document.body.removeChild(dom));
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 10px 0;
    width: 420px;
    transform: translate(-50%, -50%);
    border: 1px solid #ebeef5;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    opacity: 1;
    user-select: none;
    color: #666;
    background-color: #fff;

    > header {
      display: flex;
      padding: 0 10px;
      flex-shrink: 0;
      justify-content: space-between;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 18px;
      color: #333;

      .lv-icon-x {
        font-size: 20px;
        color: #999;
        cursor: pointer;
      }
    }

    > section {
      margin-top: 14px;
      margin-bottom: 14px;
      padding: 0 10px;
      max-height: 50vh;
      word-break: break-all;
      user-select: text;

      .main {
        display: flex;
        flex-shrink: 0;
        align-items: center;
      }
    }

    > footer {
      padding: 0 10px;
      text-align: right;
      >.button {
        margin-left: 10px;
      }

      >.button:first-child {
        margin-left: 0;
      }
    }
  }
  .wrap-dialog.center {
    > header {
      justify-content: center;
      .lv-icon-x {
        display: none;
      }
    }
    > section .main {
      justify-content: center;
    }
    > footer {
      text-align: center;
    }
  }

  .lv-icon-x-2,
  .lv-icon-point-2,
  .lv-icon-tick-2 {
    margin-right: 10px;
    font-size: 22px;
  }

  .lv-icon-x-2 {
    color: #fe6060;
  }
  .lv-icon-point-2 {
    color: #e6a23c;
  }
  .lv-icon-tick-2 {
    color: #67c23a;
  }

  .slide-fade-enter-active {
    transition: top .1s ease-in, opacity .1s ease-in;
  }

  .slide-fade-leave-active {
    transition: top .1s ease-out, opacity .1s ease-out;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    top: 40%;
    opacity: 0;
  }
</style>