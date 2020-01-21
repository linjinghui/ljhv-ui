<template>
  <div class="wrap page-theme">
    <h1>加载中</h1>
    <dl>
      <dd><h3>动画加载中, 按ESC可退出</h3></dd>
      <dd class="example">
        <section v-highlight>
          <pre v-highlightjs><code class="javascript" v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" @click="showLoading">加载动画</lv-button>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Loading',
    components: {
      lvButton: Button
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = 'this.$loading({show: true, text: "请您稍后", modal: true });';
    },
    methods: {
      showLoading () {
        var _this = this;

        _this.$loading({
          show: true,
          text: '请您稍后',
          modal: true
        });
        setTimeout(function () {
          _this.$loading({show: false});
        }, 5000);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
