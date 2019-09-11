<!--
功能介绍：
1、自定义百分比位置 - percent - 实时返回
2、自定义主题色 - theme
3、禁用 - disabled
4、最大值 - max - 用于tip提示
 -->
<template>
  <div class="slider wrap-drag" style="border:solid 1px;">
    <p class="progress theme-b" :disabled="disabled" :style="'width:'+perx+'%;'"></p>
    <span class="bar theme-c" :disabled="disabled" v-drag:x="cpos" @edrag="funDrag"></span>
  </div>
</template>

<script>
  import drag from '../../../src/directives/drag.js';

  export default {
    name: 'Slider',
    props: {
      // 初始进度, 百分比
      percent: {
        default: 0
      },
      disabled: {
        default: false
      }
    },
    directives: {
      drag
    },
    data () {
      return {
        perx: 0,
        cpos: this.percent ? {x: this.percent} : ''
      };
    },
    methods: {
      funDrag: function (data) {
        this.perx = data.detail.px;
        this.$emit('edrag', this.perx);
      }
    }
  };
</script>

<style scoped lang="scss">
  .slider {
    position: relative;
    height: 20px;

    > .bar {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border-style: solid;
      border-width: 2px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 2;
      cursor: -webkit-grab;
    }
    > .bar[disabled] {
      opacity: 1!important;
    }
    > .progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 4px;
    }
  }
  </style>