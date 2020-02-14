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
      // 指定背景图片地址
      imgUrl: {
        default: ''
      }
    },
    mounted: function () {
      var _this = this;

      imgCaptcha(this.id, {
        // 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg', 'http://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/a50f4bfbfbedab6448bfd164f736afc378311e40.jpg'
        imgurl: [this.imgUrl],
        cw: 80,
        ch: 80,
        onSuccess: function () {
          _this.$emit('success');
        },
        onError: function () {
          _this.$emit('error');
        }
      });
    },
    methods: {
      
    }
  };
</script>

<style lang="scss">
  @import url(../captcha/captcha.css);
</style>