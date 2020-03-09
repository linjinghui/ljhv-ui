<!-- 
分割面板
功能介绍：
1、
 -->

<template>
  <div class="wrap-split" :id="id" :class="{'vertical':vertical}">
    <vperfect-scrollbar class="left" :settings="{wheelSpeed: 0.5}" :style="{width:!vertical&&((split*100)+'%'),height:vertical&&((split*100)+'%')}">
      <slot name="left"></slot>
    </vperfect-scrollbar>
    <div class="split" @mousedown="emousedown"></div>
    <vperfect-scrollbar class="right" :settings="{wheelSpeed: 0.5}" :style="{width:!vertical&&(((1-split)*100)+'%'),height:vertical&&(((1-split)*100)+'%')}">
      <slot name="right"></slot>
    </vperfect-scrollbar>
  </div>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';
  export default {
    name: 'Split',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
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
      },
      // 是否上、下分割
      vertical: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: function (val, val2) {
        this.split = val;
      }
    },
    methods: {
      // 鼠标按下
      emousedown: function (e) {
        var _this = this;
        var parentNode = e.target.parentNode;
        var disX = parentNode.getBoundingClientRect().left;
        var disY = parentNode.getBoundingClientRect().top;
        
        // 鼠标移动
        document.onmousemove = function (e) {
          // 移动时禁用默认事件
          e.preventDefault(); 
          // 计算移动的距离 
          var per = (e.clientX - disX) / parentNode.offsetWidth;

          // 垂直分割
          if (_this.vertical) {
            per = (e.clientY - disY) / parentNode.offsetHeight;
          }
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
      display: flex;
      flex-shrink: 0;
      align-items: center;
      width: 6px;
      cursor: col-resize;
    }
    > .split:hover {
      background-color: #f8f8f8;
    }
    > .split:after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      border-width: 0;
      border-color: rgba(51, 51, 51, .25);
      border-style: solid;
      border-top-width: 2px;
      border-bottom-width: 2px;
      background-color: rgba(51, 51, 51, .25);
      padding: 4px 0;
      background-clip: content-box;
    }
  }
  .wrap-split.vertical {
    flex-flow: column;

    > .left, > .right {
      width: 100%;
      height: inherit;
    }

    > .split {
      width: 100%;
      height: 6px;
      cursor: row-resize;
      justify-content: center;
    }
    > .split:after {
      padding: 0 4px;
      width: 2px;
      height: 100%;
      border-width: 0;
      border-left-width: 2px;
      border-right-width: 2px;
    }
  }
</style>