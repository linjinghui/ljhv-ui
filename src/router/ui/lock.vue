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
      <dd><h3>锁屏功能</h3></dd>
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
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>显示</td><td>是</td><td>boolean</td><td>-</td><td>-</td></tr>
          <tr><td>name</td><td>用户名</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>avant</td><td>头像地址</td><td>是</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>bmap</td><td>背景图</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
        </table>
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
        show: false,
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-lock v-model="show" name="张三" avant="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2028726140,2813284699&fm=173&app=49&f=JPEG?w=640&h=639&s=A0C2944FC01267DE408C8CB70300C001"></lv-lock>';
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
