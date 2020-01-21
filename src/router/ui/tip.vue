<template>
  <div class="wrap page-theme">
    <h1>提示框</h1>
    <dl>
      <dd><h3>带4种主题的提示框, 3秒后自动消失</h3></dd>
      <dd class="example">
        <section v-highlight>
          <pre v-highlightjs><code class="javascript" v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn">提示框</lv-button>
        </section>
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
      this.code = 
        '// type: success|error|warning \n' +
        '// title: 标题 \n' +
        '// text: 提示内容 \n' +
        '// type: 类型：success, info, warning, error \n' +
        '// position: 位置：topLeft, topCenter, middleLeft, middleRight, middleCenter, bottomLeft, bottomRight, bottomCenter \n' +
        '// newestOnTop: 新的提示框 是否在顶部插入 \n' +
        '// timeout: 显示时长 \n' +
        '// progressBar: 是否显示进度条 \n' +
        '// closeWith: 关闭方式：["button", "click"] \n' +
        '// animation: 动画效果，支持 animate.css \n' +
        '// modal: 是否模态 \n' +
        '// width: 提示框宽度，指定数字 \n' +
        'this.$tip({ text: "提示内容11", type: "success" });';
    },
    methods: {
      clkBtn () {
        this.$tip({ text: '提示内容11', type: 'success' });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
