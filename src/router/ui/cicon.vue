<template>
  <div class="wrap page-cicon">
    <h1>css图标</h1>
    <dl>
      <dd><h3>概述</h3></dd>
      <dd>提供了几种常用的纯css3样式图标，通过设置font-size 属性控制大小</dd>
    </dl>
    <dl>
      <dd><h3>图标</h3></dd>
      <dd class="example">
        <section v-highlight>
          <pre><code class="html" v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <!-- <lv-tooltip text="提示内容" :arrow="true" :followCursor="false">
            <i>text支持HTML代码</i>
          </lv-tooltip> -->

          <template v-for="item in icons">
            <lv-tooltip :key="item" :text="'<i class=\''+item+'\'></i>'" :allowHTML="false">
              <lv-button width="50px" height="60px" theme="simple" :icon="item" :copyData="'<i class=\''+item+'\'></i>'" @copy-success="cbkCopy"></lv-button>
              <!-- <i :class="item"></i> -->
            </lv-tooltip>
          </template>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Tooltip, Button} from '../../../packages/index.js';

  export default {
    name: 'Theme',
    components: {
      lvTooltip: Tooltip,
      lvButton: Button
    },
    data () {
      return {
        
        icons: ['lv-icon-full', 'lv-icon-email', 'lv-icon-wjx-e', 'lv-icon-home', 'lv-icon-man', 'lv-icon-mobile', 'lv-icon-position', 'lv-icon-phone', 'lv-icon-ddd', 'lv-icon-out', 'lv-icon-wjx', 'lv-icon-pc', 'lv-icon-out-full', 'lv-icon-camera', 'lv-icon-woman', 'lv-icon-fresh', 'lv-icon-time', 'lv-icon-sys', 'lv-icon-zan', 'lv-icon-wifi-2', 'lv-icon-attach', 'lv-icon-list-r', 'lv-icon-list-l', 'lv-icon-edit', 'lv-icon-sort', 'lv-icon-del', 'lv-icon-date', 'lv-icon-search', 'lv-icon-radio-2', 'lv-icon-radio', 'lv-icon-tick-2', 'lv-icon-ewm', 'lv-icon-ling', 'lv-icon-user', 'lv-icon-point-2', 'lv-icon-eye', 'lv-icon-arrow', 'lv-icon-tick', 'lv-icon-top', 'lv-icon-point', 'lv-icon-x', 'lv-icon-loading', 'lv-icon-eye-close', 'lv-icon-pwd', 'lv-icon-x-2', 'lv-icon-arrow-top-2', 'lv-icon-arrow-bottom-2', 'lv-icon-arrow-left-2', 'lv-icon-arrow-right-2 ', 'lv-icon-arrow-top', 'lv-icon-arrow-bottom', 'lv-icon-arrow-left', 'lv-icon-arrow-right', 'lv-icon-arrowt-top', 'lv-icon-arrowt-bottom', 'lv-icon-arrowt-left', 'lv-icon-arrowt-right'],
        code: ''
      };
    },
    mounted: function () {
      this.code = '<i class="lv-icon-x-2"></i>';
    },
    methods: {
      cbkCopy: function () {
        this.$tip({ text: '代码已复制到剪贴板' });
      }
    }
  };
</script>

<style lang="scss">
  .page-cicon dl {
    .button {
      padding: 0!important;
      > i {
        font-size: 40px;
      }
    } 
  }
</style>

