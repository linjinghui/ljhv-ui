<!-- 
功能介绍：
1、
 -->

<template>
  <div class="wrap-rule">
    <div class="my-slider" :id="id"></div>
  </div>
</template>

<script type="text/babel">
  import Rule from './rule.js';

  export default {
    name: 'Rule',
    data: function () {
      return {
        id: 'rule_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      // 传入最大刻度数字
      maxNum: {
        default: 50
      },
      // 传入最小刻度数字
      minNum: {
        default: 0
      },
      // 每一个刻度代表多少数字
      stepNum: {
        default: 1
      },
      // 每一个刻度的宽
      stepWidth: {
        default: 10
      },
      // 初始化刻度尺刻度数量
      setSliderItemNum: {
        default: 100
      },
      // 每隔多少隔显示长刻度
      sliderItemStep: {
        default: 10
      },
      // 短刻度下面的标度是否显示
      sliderItemValueIsHidden: {
        type: Boolean,
        default: false
      },
      // 长刻度下面的标度是否显示
      sliderItemLongValueIsHidden: {
        type: Boolean,
        default: true
      },
      // 设置标度居中方式
      sliderItemValueTextAlign: {
        default: 'center'
      },
      // 设置指针是否显示
      sliderGuide: {
        type: Boolean,
        default: true
      },
      // 动画className
      animatedClassName: {
        default: 'my-slider-animated'
      },
      // 单位
      unit: {
        default: ''
      },
      // 是否忽视小数点
      ignorePoint: {
        type: Boolean,
        default: false
      }
    },
    mounted: function () {
      var _this = this;

      this.rule = new Rule({
        id: this.id,
        // 传入最大数字
        maxNum: this.maxNum,
        // 传入最小刻度数字
        minNum: this.minNum,
        // 每一个刻度代表多少数字
        stepNum: this.stepNum,
        // 每一个刻度的宽
        stepWidth: this.stepWidth,
        // 初始化刻度尺刻度数量
        setSliderItemNum: this.setSliderItemNum,
        // 每隔多少隔显示长刻度
        sliderItemStep: this.sliderItemStep,
        // 短刻度下面的标度是否显示
        sliderItemValueIsHidden: this.sliderItemValueIsHidden,
        // 长刻度下面的标度是否显示
        sliderItemLongValueIsHidden: this.sliderItemLongValueIsHidden,
        // 设置标度居中方式
        sliderItemValueTextAlign: this.sliderItemValueTextAlign,
        // 设置指针是否显示
        sliderGuide: this.sliderGuide,
        // 动画className
        animatedClassName: this.animatedClassName,
        unit: this.unit,
        callBack: function (value) {
          if (_this.ignorePoint && value % 1 > 0) {
            this.setValue(Math.round(value));
          } else {
            _this.$emit('callback', value);
          }
        }
      });
    },
    methods: {
      //  
    }
  };
</script>

<style lang="scss">
  .wrap-rule{
    width: 100%;
    height: 60px;
    position: relative;
    overflow: hidden;
    
    .my-slider{
      width: 100px;
      height: 50px;
      position: absolute;
      top: 0px;
      left: 0;
    }
    .my-slider-animated{
      transition: left 0.5s ease;
      -webkit-transition: left 0.5s ease;
    }
    .slider-item-box{
      width: 100%;
      height: 100%;
    }
    .slider-item,.slider-item-long{
      width: 1px;
      background: #bbb;
      position: absolute;
      bottom: 0;
    }
    .slider-item-value{
      width: auto;
      font-size: 9px;
      color: #666;
      position: absolute;
      bottom: 20px;
    }
    .slider-item{
      height: 8px;
    }
    .slider-item-long{
      height: 16px;
      background: #999;
    }
    .slider-guide{
      width: 2px;
      height: 40px;
      background: #ff5409;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .slider-border-bottom{
      height: 1px;
      background: #000;
      position: absolute;
    }
  }
</style>