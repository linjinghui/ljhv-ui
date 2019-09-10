<!--
功能介绍：
1、自定义百分比位置 - percent - 实时返回
2、自定义主题色 - theme
3、禁用 - disabled
4、最大值 - max - 用于tip提示
 -->
<template>
  <div class="slider wrap-drag" style="border:solid 1px;">
    <p class="progress theme-b" :style="'width:'+perx+'%;'"></p>
    <span class="bar theme-c" v-drag:x @drag="funDrag"></span>
  </div>
</template>

<script>
  import drag from '../../../src/directives/drag.js';

  export default {
    name: 'Slider',
    props: {
      value: {
        default: 0
      },
      disabled: {
        default: false
      },
      max: {
        default: 0
      }
    },
    directives: {
      drag
    },
    data () {
      return {
        perx: 0
      };
    },
    mounted: function () {
      var _this = this;

      setTimeout(function () {
        console.log(_this.name);
      }, 5000);
    },
    methods: {
      funDrag: function (data) {
        console.log(data.detail);
        this.perx = data.detail.px;
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