<template>
  <div class="wrap page-theme">
    <h1>数字键盘</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Numberkey} from 'lv-web-ui';
Vue.component('lvNumberkey', Numberkey);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-numberkey v-model="pwd" width="200" color="red" img="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-numberkey>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Numberkey} from '../../../packages/index.js';
  
  export default {
    name: 'Theme',
    components: {
      lvNumberkey: Numberkey
    },
    data () {
      return {
        pwd: '',
        code: ''
      };
    },
    watch: {
      pwd: function (val) {
        console.log('==pwd==', val);
      }
    },
    mounted: function () {
      this.code = '';
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
