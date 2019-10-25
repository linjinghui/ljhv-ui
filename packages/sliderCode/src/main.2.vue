<!-- 
功能介绍：
1、
 -->

<template>
  <div class="wrap-slider-code" :id="id" style="position:relative;border:solid 1px red;">
    <!-- 背景 -->
    <canvas ref="canvas" :width="w" :height="h" style="border:solid 1px blue;"></canvas>
    <!-- 刷新按钮 -->
    <div class="refreshIcon"></div>
    <!-- 背景滑块 -->
    <canvas ref="block" width="63" :height="h" class="block"></canvas>
    <!-- 底部滑块 -->
    <div class="sliderContainer">
      <div class="sliderMask">
        <div class="slider"><span class="sliderIcon"></span></div>
      </div>
      <span class="sliderText">向右滑动填充拼图</span>
    </div>
  </div>
</template>

<script type="text/babel">
  // import './sliderCode.js';

  export default {
    name: 'SliderCode',
    data: function () {
      return {
        id: 'sliderCode_' + new Date().getTime() + parseInt(Math.random() * 100),
        imgurl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2353873632,2644143944&fm=26&gp=0.jpg',
        // canvas宽度
        w: 310, 
        // canvas高度
        h: 155, 
        // 滑块边长
        l: 42,
        // 滑块半径
        r: 9, 
        PI: Math.PI,
        isIE: window.navigator.userAgent.indexOf('Trident') > -1
      };
    },
    props: {
      value: {
        default: ''
      }
    },
    watch: {},
    computed: {
      L: function () {
        return this.l + this.r * 2 + 3;
      }
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      var canvas = this.$refs.canvas;
      var block = this.$refs.block;

      this.canvasCtx = canvas.getContext('2d');
      this.blockCtx = block.getContext('2d');
      this.drawImage();
      console.log(this.L);
    },
    methods: {
      // 给canvas添加背景
      drawImage: function () {
        var _this = this;
        var img = document.createElement('img');

        img.src = this.imgurl;
        img.onload = function () {
          _this.canvasCtx.drawImage(img, 0, 0, _this.w, _this.h);
          _this.blockCtx.drawImage(img, 0, 0, _this.w, _this.h);

          
          var ImageData = _this.blockCtx.getImageData(_this.x - 3, _this.y - _this.r * 2 - 1, _this.L, _this.L);

          _this.blockCtx.putImageData(ImageData, 0, _this.y);
          _this.randomDrawBlock();
          
        };
      },
      // 获取随机数
      getRandomNumberByRange: function (start, end) {
        return Math.round(Math.random() * (end - start) + start);
      },
      // 画出或挖出不规则滑块， fill|clip
      drawBlock: function (ctx, x, y, operation) {
        var PI = this.PI;
        var r = this.r;
        var l = this.l;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
        ctx.lineTo(x + l, y);
        ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
        ctx.lineTo(x + l, y + l);
        ctx.lineTo(x, y + l);
        ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
        ctx.lineTo(x, y);
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.stroke();
        ctx[operation]();
        ctx.globalCompositeOperation = 'destination-over';
      },
      randomDrawBlock: function () {
        var x = this.getRandomNumberByRange(this.L + 10, this.w - (this.L + 10));
        var y = this.getRandomNumberByRange(10 + this.r * 2, this.h - (this.L + 10));

        this.drawBlock(this.canvasCtx, x, y, 'fill');
        this.drawBlock(this.blockCtx, x, y, 'clip');
      }
    }
  };
</script>

<style scoped lang="scss">
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
      width: 310px;
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
      top: 14px;
      background-position: 0 -82px !important;
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
      height: 40px;
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
      top: 15px;
      left: 13px;
      width: 14px;
      height: 12px;
      background: url(http://cstaticdun.126.net//2.6.3/images/icon_light.f13cff3.png) 0 -26px;
      background-size: 34px 471px;
    }

    .refreshIcon {
      position: absolute;
      right: 0;
      top: 0;
      width: 34px;
      height: 34px;
      cursor: pointer;
      background: url(http://cstaticdun.126.net//2.6.3/images/icon_light.f13cff3.png) 0 -437px;
      background-size: 34px 471px;
    }
  }
</style>