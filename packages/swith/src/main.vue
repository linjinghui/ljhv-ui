<!--
功能介绍：
1、theme: 背景色 - #333|red|green, 支持自定义
2、disabled: 是否禁用 - true|false, 不传默认false
3、beforeclk: 点击前执行方法，返回true才会继续点击
 -->

<template>
  <div class="swith" :disabled="disabled" @click="clickHandle">
    <span class="inactive-text" :class="{'theme-c':value!==activeVal}" v-if="inactiveText">{{inactiveText}}</span>
    <button 
    :class="{'on':value===activeVal,'off':value!==activeVal,'theme-b':value===activeVal}"
    :style="'background-color:'+(value===activeVal?'':color)"></button>
    <span class="active-text" :class="{'theme-c':value===activeVal}" v-if="activeText">{{activeText}}</span>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Swith',
    data: function () {
      return {};
    },
    props: {
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // v-model
      value: '',
      // 未激活后返回的值
      inactiveVal: {
        default: false
      },
      // 未激活文本
      inactiveText: {
        default: ''
      },
      // 激活后返回的值
      activeVal: {
        default: true
      },
      // 已激活文本
      activeText: {
        default: ''
      },
      // 关闭时的颜色
      color: {
        default: '#ddd'
      },
      // 选中前执行
      before: {
        type: Function,
        default: function (callback) {
          callback && callback();
        }
      }
    },
    computed: {},
    methods: {
      clickHandle: function () {
        if (!this.disabled) {
          let _this = this;

          _this.before(function () {
            _this.$emit('input', _this.value === _this.activeVal ? _this.inactiveVal : _this.activeVal);
          });
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .swith {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    line-height: 1;
    user-select: none;
  }

  .swith > button {
    position: relative;
    width: 40px!important;
    height: 20px;
    border-radius: 20px;
    border: 0;
    color: inherit;
    font: inherit;
    outline: medium;
    vertical-align: middle;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    text-transform: none;
  }

  .swith > button:after {
    content: '';
    position: absolute;
    top: 2px;
    width: 14px;
    height: 14px;
    border: solid 1px #e5e5e5;
    border-radius: 50%;
    background-color: #f8f4f4;
    transition: left .2s ease-in;
  }

  .swith > button.on:after {
    left: calc(100% - 3px - 14px);
  }

  .swith > button.off:after {
    left: 2px;
  }

  .swith:not([disabled]) > button.off:hover {
    opacity: 0.8;
  }
  .swith[disabled] > button {
    cursor: inherit;
  }

  .inactive-text {
    margin-right: 5px;
  }

  .active-text {
    margin-left: 5px;
  }
</style>