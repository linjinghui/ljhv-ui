<!--
功能介绍：
1、
 -->

<template>
  <div class="wrap-tip" :class="[{'cmb':isMobile,'show':value},type]" :id="id">
    <i class="cicon-cross-crle" v-if="type==='danger'"></i>
    <i class="cicon-tick-crle" v-else-if="type==='success'"></i>
    <i class="cicon-exclamation-crle" v-else-if="type==='warning'"></i>
    <span class="text">{{text}}</span>
    <i class="cicon-cross" @click="clk_hide"></i>
  </div>
</template>

<script type="text/babel">
  import {browerVersion} from 'web-js-tool';

  export default {
    name: 'Tip',
    data: function () {
      return {
        timer: '',
        id: 'tip_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      full: {
        default: false
      },
      value: {
        default: false
      },
      text: {
        default: '提示内容'
      },
      type: {
        default: ''
      },
      time: {
        type: Number,
        default: 3000
      },
      textAlign: {
        default: 'left'
      }
    },
    watch: {
      value: function (val) {
        let _this = this;

        if (val + '' === 'true') {
          // 开始定时
          this.timer = setTimeout(function () {
            _this.clk_hide();
          }, this.time);
          // 计算长度
          // setTimeout(function () {
          //   _this.countLength();
          // }, 30);
        } else {
          // 清除定时器
          clearTimeout(this.timer);
        }
      },
      text: function () {
        this.countLength();
      }
    },
    computed: {
      isMobile: function () {
        return browerVersion().android || browerVersion().ios;
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('keyup', this.evt_keyup);
    },
    mounted: function () {
      window.addEventListener('keyup', this.evt_keyup);
      this.countLength();
    },
    methods: {
      clk_hide: function () {
        this.$emit('input', false);
      },
      evt_keyup: function (event) {
        let e = event || window.event;
        let keyCode = e.keyCode;

        if (keyCode === 27 && this.value) {
          this.clk_hide();
        }
      },
      countLength: function () {
        var dom = document.querySelector('#' + this.id); 
            
        dom.style.marginLeft = '-' + parseInt((dom.offsetWidth || dom.clientWidth) / 2) + 'px';
        this.$nextTick(function () {
          dom.style.marginLeft = '-' + parseInt((dom.offsetWidth || dom.clientWidth) / 2) + 'px';
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .wrap-tip {
    position: fixed;
    left: 50%;
    top: -100px;
    min-width: 160px;
    max-width: 80%;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 14px;
    color: #666;
    opacity: 0.95;
    border-radius: 4px;
    box-shadow: 1px 2px 8px #ccc;
    background-color: #f3faff;
    white-space: nowrap;
    word-break: break-all;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    z-index: 2000;
    transition: all .2s ease-in;

    [class^="cicon"] {
      font-size: 22px;
      color: #fff;
    }
    .cicon-cross-crle, .cicon-tick-crle, .cicon-exclamation-crle {
      margin-right: 5px;
      overflow: hidden;
      background-color: transparent;
    }
    .cicon-tick-crle {
      border: solid 1px #13ce66;
    }
    .cicon-cross-crle {
      border: solid 1px #fe6060;
    }
    .cicon-exclamation-crle {
      color: #45abff;
      border-style: solid;
      border-width: 1px;
      border-color: inherit;
    }

    .text {
      display: inline-block;
      height: 24px;
      line-height: 24px;
    }

    .cicon-cross {
      float: right;
      font-size: 24px;
      color: #9b9b9b;
      cursor: pointer;
    }

    .cicon-cross:hover {
      color: inherit;
    }
  }
  .wrap-tip.success {
    background-color: #f4fff9;
  }
  .wrap-tip.info {
    background-color: #f3faff;
  }
  .wrap-tip.warning {
    background-color: #f3faff;
  }
  .wrap-tip.danger {
    background-color: #fdf3f3;
  }

  // 移动端
  .wrap-tip.cmb {
    top: auto;
    bottom: -100px;
    padding: 10px 20px;
    color: #fff;
    background-color: #000;
    box-shadow: unset;
    text-align: center;

    > .cicon-cross {
      display: none;
    }
  }
  .wrap-tip.cmb.success,
  .wrap-tip.cmb.warning,
  .wrap-tip.cmb.danger {
    display: none;
    bottom: 50%!important;
    min-width: 120px;
    transition: unset;

    > [class^="cicon"]:not(.cicon-cross) {
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      font-size: 38px;
      border-width: 2px;
      color: #fff;
      border-color: inherit;
    }
  }

  // 动画
  .wrap-tip:not(.cmb).show {
    top: 20px;
  }
  .wrap-tip.cmb.show {
    display: block;
    bottom: 20px;
  }
  
</style>