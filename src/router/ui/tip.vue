<template>
  <div class="wrap page-theme">
    <h1>提示框</h1>
    <dl>
      <dd><h3>带4种主题的提示框, 2秒后自动消失</h3></dd>
      <dd class="example">
        <section v-highlight>
          <pre v-highlightjs><code class="javascript" v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn">提示框</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>type</td><td>类型</td><td>-</td><td>string</td><td>success|info|warning|error</td><td>success</td></tr>
          <tr><td>title</td><td>标题</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>text</td><td>提示内容</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>position</td><td>位置</td><td>-</td><td>string</td><td>topLeft|topCenter|middleLeft|<br>middleRight|middleCenter|bottomLeft<br>|bottomRight|bottomCenter</td><td>-</td></tr>
          <tr><td>timeout</td><td>显示时长(秒*10)</td><td>-</td><td>number</td><td>-</td><td>20(2秒)</td></tr>
          <tr><td>width</td><td>提示框宽度，指定数字</td><td>-</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>modal</td><td>是否模态</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Tip',
    components: {
      lvButton: Button
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = 'this.$tip({ text: "提示内容11", type: "success" });';
    },
    methods: {
      clkBtn () {
        this.$tip({ 
          title: '标题',
          text: 'Notification message'
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
