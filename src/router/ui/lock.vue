<template>
  <div class="wrap page-theme">
    <h1>锁屏</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Lock} from 'lv-web-ui';
Vue.component('lvLock', Lock);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkLock">锁屏</lv-button>
          <lv-lock v-model="show" name="张三" avant="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-lock>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Lock, Button} from '../../../packages/index.js';
  
  export default {
    name: 'Theme',
    components: {
      lvLock: Lock,
      lvButton: Button
    },
    data () {
      return {
        pwd: '',
        show: false
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      clkLock () {
        this.show = true;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
