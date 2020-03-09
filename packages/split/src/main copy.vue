<!-- 
分割面板
功能介绍：
1、
 -->

<template>
  <div class="wrap-split" :id="id">
    <div class="left" :style="{width:'calc('+(split*100)+'% - 5px)'}">
      <slot name="left"></slot>
    </div>
    <div class="split" :style="{left:'calc('+(split*100)+'% - 5px)'}" @mousedown="emousedown"></div>
    <div class="right" :style="{width:'calc('+((1-split)*100)+'% - 5px)'}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Split',
    data: function () {
      return {
        id: 'split_' + new Date().getTime() + parseInt(Math.random() * 100),
        split: this.value
      };
    },
    props: {
      // 分割比例
      value: {
        default: 0.5
      }
    },
    watch: {
      value: function (val, val2) {
        console.log('==watch==', val);
        this.split = val;
      }
    },
    computed: {
      // 
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 
    },
    methods: {
      // 鼠标按下
      emousedown: function (e) {
        var _this = this;
        var parentNode = e.target.parentNode;
        var disX = parentNode.getBoundingClientRect().left;

        console.log(parentNode.getBoundingClientRect());
        
        // 鼠标移动
        document.onmousemove = function (e) {
          console.log(e.clientX, disX, (disX + parentNode.offsetWidth));
          // 移动时禁用默认事件
          e.preventDefault(); 
          // 计算移动的距离 
          var per = (e.clientX - disX) / parentNode.offsetWidth;
          var perb = parseFloat(per.toFixed(3));

          if (perb >= 0 && perb <= 1) {
          // if (e.clientX >= disX && e.clientX <= (disX + parentNode.offsetWidth)) {
            _this.split = perb;
          }
        };

        document.onmouseup = function (e) {
          document.onmousemove = null;
          document.onmouseup = null;
          _this.$emit('input', _this.split);
        };
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-split {
    position: relative;
    display: flex;
    flex-shrink: 0;
    height: 100%;
    line-height: initial;
    
    > * {
      position: absolute;
      top: 0;
      height: 100%;
      overflow: hidden;
    }

    > .left {
      left: 0;
    }
    > .right {
      right: 0;
    }

    > .split {
      // position: relative;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      width: 10px;
      cursor: col-resize;
      // cursor: row-resize;
      background-color: red;

      // > div {
      //   display: block;
      //   width: 100%;
      //   height: 17px;
      //   border-top: 3px solid #999;
      //   border-bottom: 3px solid #999;
      //   background-color: #999;
      //   padding: 4px 0;
      //   background-clip: content-box;
      //   transform: translate(-50%);
      // }
    }
    > .split:after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      border-top: 3px solid #999;
      border-bottom: 3px solid #999;
      background-color: #999;
      padding: 4px 0;
      background-clip: content-box;
    }
  }
</style>