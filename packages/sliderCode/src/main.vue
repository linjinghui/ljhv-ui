<!-- 
功能介绍：
1、
 -->

<template>
  <div class="wrap-slider-code" :id="id"></div>
</template>

<script type="text/babel">
  import SliderCode from './sliderCode.js';

  export default {
    name: 'SliderCode',
    data: function () {
      return {
        id: 'sliderCode_' + new Date().getTime() + parseInt(Math.random() * 100),
        sliderCode: ''
      };
    },
    props: {
      width: {
        default: 310
      },
      height: {
        default: 155
      },
      // 指定背景图片地址，不传，默认从https://picsum.photos上随机获取图片
      imgUrl: {
        default: ''
      }
    },
    watch: {},
    computed: {},
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      var _this = this;

      this.sliderCode = SliderCode.init({
        el: document.getElementById(this.id),
        width: this.width,
        height: this.height,
        imgUrl: this.imgUrl,
        onSuccess: function () {
          _this.$emit('success');
        },
        onFail: function () {
          _this.$emit('fail');
        },
        onRefresh: function () {
          _this.$emit('refresh');
        }
      });
      console.log(this.sliderCode);
    },
    methods: {
      fresh () {
        this.sliderCode.reset();
      }
    }
  };
</script>

<style lang="scss">
  .wrap-slider-code {

    .block {
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
      cursor: grab;
    }

    .block:active {
      cursor: pointer;
      cursor: grabbing;
    }

    .sliderContainer {
      position: relative;
      text-align: center;
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin-top: 15px;
      background: #f7f9fa;
      color: #45494c;
      border: 1px solid #e4e7eb;
    }

    .sliderContainer_active .slider {
      height: 38px;
      top: -1px;
      border: 1px solid #1991FA;
    }

    .sliderContainer_active .sliderMask {
      height: 38px;
      border-width: 1px;
    }

    .sliderContainer_success .slider {
      height: 38px;
      top: -1px;
      border: 1px solid #52CCBA;
      background-color: #52CCBA !important;
    }

    .sliderContainer_success .sliderMask {
      height: 38px;
      border: 1px solid #52CCBA;
      background-color: #D2F4EF;
    }

    .sliderContainer_success .sliderIcon {
      background-position: 0 0 !important;
    }

    .sliderContainer_fail .slider {
      height: 38px;
      top: -1px;
      border: 1px solid #f57a7a;
      background-color: #f57a7a !important;
    }

    .sliderContainer_fail .sliderMask {
      height: 38px;
      border: 1px solid #f57a7a;
      background-color: #fce1e1;
    }

    .sliderContainer_fail .sliderIcon {
      // top: 14px;
      background-position: 0 -47px !important;
    }
    .sliderContainer_active .sliderText, .sliderContainer_success .sliderText, .sliderContainer_fail .sliderText {
      display: none;
    }

    .sliderMask {
      position: absolute;
      left: 0;
      top: 0;
      height: 40px;
      border: 0 solid #1991FA;
      background: #D1E9FE;
    }

    .slider {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 38px;
      background: #fff;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
      transition: background .2s linear;
      cursor: pointer;
      cursor: grab;
    }

    .slider:active {
      cursor: grabbing;
    }

    .slider:hover {
      background: #1991FA;
    }

    .slider:hover .sliderIcon {
      background-position: 0 -13px;
    }

    .sliderIcon {
      position: absolute;
      // top: 15px;
      // left: 13px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 14px;
      height: 12px;
      background: url(./icon_light.png) 0 -26px;
    }

    .refreshIcon {
      position: absolute;
      right: 0;
      top: 0;
      width: 34px;
      height: 34px;
      cursor: pointer;
      background: url(./icon_light.png) 0 -66px;
    }
  }
</style>