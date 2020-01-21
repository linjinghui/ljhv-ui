<!--
功能介绍：
1、text: 自定义提示文本
2、modal: 是否模态窗口，即是否产生遮罩效果 - false默认|true
3、点击esc按键 等同隐藏功能
4、全局监听触发显示、隐藏
 -->

<template>
  <keep-alive>
    <div class="loading no-select" v-if="value">
      <lv-mask v-if="modal"></lv-mask>
      <p class="center-hv theme-c"><i class="lv-icon-loading move-loop"></i>{{text}}</p>
    </div>
  </keep-alive>
</template>

<script type="text/babel">
  import Mask from '../../mask/src/main';

  export default {
    name: 'Loading',
    components: {
      lvMask: Mask
    },
    props: {
      value: '',
      // 是否模态，即是否产生遮罩效果
      modal: {
        default: false
      },
      text: {
        default: '加载中...'
      }
    },
    beforeDestroy: function () {
      window.removeEventListener('keydown', this.escEvent);
    },
    mounted: function () {
      window.addEventListener('keydown', this.escEvent);
    },
    methods: {
      hideLoading: function () {
        this.$emit('input', false); 
      },
      escEvent: function (e) {
        let event = e || window.event;

        if (event.keyCode === 27) {
          this.hideLoading();
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .loading {
    > p {
      width: 200px;
      height: 50px;
      text-align: center;
      z-index: 1001;
      > i {
        display: block;
        margin-bottom: 6px;
        font-size: 24px;
      }
    }
  }
</style>