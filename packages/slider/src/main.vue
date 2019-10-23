<!--
功能介绍：
1、自定义最大、最小值
2、禁用 - disabled
 -->
<template>
  <div class="slider">
    <span v-if="showMinMax" v-text="min"></span>
    <div class="wrap-drag">
      <p class="progress bg"></p>
      <p class="progress theme-b" :disabled="disabled" :style="'width:'+pgwidth+'px;'"></p>
      <tooltip ref="ttp" :text="text" theme="#333" position="bottom">
        <span class="bar theme-c" :disabled="disabled" v-drag:x="{px:value/max,disabled:disabled}" @edrag="funDrag"></span>
      </tooltip>
    </div>
    <span v-if="showMinMax" v-text="max"></span>
  </div>
</template>

<script>
  import drag from '../../../src/directives/drag.js';
  import Tooltip from '../../tooltip/src/main.vue';

  export default {
    name: 'Slider',
    components: {
      Tooltip
    },
    props: {
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      value: {
        type: Number,
        default: 0
      },
      // 保留小数点位数
      point: {
        type: Number,
        default: 0
      },
      disabled: {
        default: false
      },
      showMinMax: {
        default: true
      }
    },
    directives: {
      drag
    },
    computed: {},
    data () {
      return {
        pgwidth: 0,
        text: '0'
      };
    },
    methods: {
      debounce: function (func, wait, immediate) {
        var timeout;

        return function () {
          var context = this;
          var args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) {
              func.apply(context, args);
            }
          };
          var callNow = immediate && !timeout;

          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) {
            func.apply(context, args);
          }
        };
      },
      funDrag: function (data) {
        // var _this = this;

        this.pgwidth = data.detail.x;
        this.text = parseFloat((data.detail.px * this.max).toFixed(this.point));
        // this.text = data.detail.px * this.max;
        this.$refs.ttp.update();
        // this.debounce(function () {
        //   _this.$emit('input', _this.text);
        // }, 1800)();
        this.$emit('callback', this.text);
      }
    }
  };
</script>

<style scoped lang="scss">
  .slider {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;

    > span:first-of-type {
      padding-right: 6px;
    }
    > span:last-of-type {
      padding-left: 6px;
    }

    .wrap-drag {
      position: relative;
      flex: 1;
    }

    .bar {
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      border: solid 2px;
      border-radius: 50%;
      background-color: #fff;
      z-index: 3;
      cursor: -webkit-grab;
      overflow: hidden;
    }
    .bar:active {
      cursor: -webkit-grabbing;
    }
    .bar[disabled] {
      opacity: 1!important;
    }
    .progress {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 4px;
      z-index: 2;
    }
    .progress.bg {
      width: 100%;
      background-color: #e3e3e3;
      z-index: 1;
    }
  }
  </style>