<!-- 
功能介绍：
1、
 -->

<template>
  <div class="numberkey" :id="id" :style="{'width':width?(width+'px'):'','font-size':fontSize,'color':color,'backgroundImage':'url('+img+')'}">
    <i class="lv-nicon-1" @click="clkNum(1)"></i><i class="lv-nicon-2" @click="clkNum(2)"></i><i class="lv-nicon-3" @click="clkNum(3)"></i>
    <i class="lv-nicon-4" @click="clkNum(4)"></i><i class="lv-nicon-5" @click="clkNum(5)"></i><i class="lv-nicon-6" @click="clkNum(6)"></i>
    <i class="lv-nicon-7" @click="clkNum(7)"></i><i class="lv-nicon-8" @click="clkNum(8)"></i><i class="lv-nicon-9" @click="clkNum(9)"></i>
    <i class="clear" @click="clkClear"></i><i class="lv-nicon-0" @click="clkNum(0)"></i><i class="lv-icon-x" @mousedown.stop="mdown" @mouseup.stop="mup" @click="clkDel"></i>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Numberkey',
    data: function () {
      return {
        id: 'numberkey_' + new Date().getTime() + parseInt(Math.random() * 100),
        timer: ''
      };
    },
    props: {
      // 宽度
      width: {
        default: ''
      },
      value: {
        default: ''
      },
      // 颜色
      color: {
        default: ''
      },
      // 背景图片
      img: {
        default: ''
      }
    },
    computed: {
      fontSize: function () {
        var fs = this.width / 9;

        return fs ? (fs + 'px') : '';
      }
    },
    mounted: function () {
      // 
    },
    methods: {
      clkNum: function (val) {
        this.$emit('input', this.value + '' + val);
      },
      clkDel: function () {
        var val = this.value;

        if (val.length > 0) {
          val = this.value.substr(0, this.value.length - 1);
        }
        this.$emit('input', val);
      },
      clkClear: function () {
        this.$emit('input', '');
      },
      mdown: function () {
        var _this = this;

        this.timer = setInterval(function () {
          _this.clkDel();
        }, 200);
      },
      mup: function () {
        this.timer && clearInterval(this.timer);
      }
    }
  };
</script>

<style scoped lang="scss">
  /*引入数字字体图标*/
  @import '../../../static/font-number/iconfont.css';

  .numberkey {
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    line-height: initial;
    font-size: 24px;
    background-size: cover;

    > i {
      position: relative;
      padding: 33% 0 0;
      width: 33.33%;
      text-align: center;
      font-size: inherit;
      font-weight: bold;
    }
    > i:before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: inherit;
      text-align: center;
    }
    > i:not(.none) {
      cursor: pointer;
    }
    > i:not(.none):active {
      background-color: rgba(244, 244, 244, 0.6);
    }
    > .clear:before {
      content: '清空';
      font-size: 16px;
      font-style: normal;
    }
  }
</style>