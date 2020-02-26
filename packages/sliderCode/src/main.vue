<!-- 
滑块验证码
 -->

<template>
  <canvas :id="id" :width="width" :height="height"></canvas>
</template>

<script type="text/babel">
  import imgCaptcha from '../captcha/captcha.js';

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
      cw: {
        default: 60
      },
      ch: {
        default: 60
      },
      // 指定背景图片地址
      imgUrl: {
        default: ''
      }
    },
    mounted: function () {
      var _this = this;

      imgCaptcha(this.id, {
        imgurl: [this.imgUrl],
        cw: this.cw,
        ch: this.ch,
        onSuccess: function () {
          _this.$emit('success');
        },
        onError: function () {
          _this.$emit('error');
        }
      });
    }
  };
</script>

<style lang="scss">
  @import url(../captcha/captcha.css);
</style>