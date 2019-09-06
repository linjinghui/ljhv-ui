<template>
  <div class="wrap page-theme">
    <h1>加载中</h1>
    <dl>
      <dd><h3>动画加载中, 按ESC可退出</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button theme="primary" @click="showLoading"&gt;加载动画&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    showLoading () {
      this.$loading({
        // 显示隐藏
        show: true, 
        // 文本内容
        text: '请您稍后', 
        // 是否遮罩背景(默认false)
        modal: true
      });
    }
  }
}
&lt;/script&gt;</code></pre>
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
    name: 'Theme',
    components: {
      lvButton: Button
    },
    data () {
      return {
        // 
      };
    },
    mounted: function () {
      // 
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
