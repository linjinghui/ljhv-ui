<template>
  <div class="wrap page-theme">
    <h1>开关</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Swith} from 'lv-web-ui';
Vue.component('lvSwith', Swith);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>开关，带禁用功能</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-swith v-model="swith" inactive-val="3" active-val="4" inactive-text="关闭" active-text="开启" :disabled="false"></lv-swith>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>boolean|number|string</td><td>-</td><td>-</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>active-val</td><td>激活后回填的值</td><td>-</td><td>boolean|number|string</td><td>-</td><td>true</td></tr>
          <tr><td>inactive-val</td><td>未激活后回填的值</td><td>-</td><td>boolean|number|string</td><td>-</td><td>false</td></tr>
          <tr><td>active-text</td><td>激活文本</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>inactive-val</td><td>未激活文本</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>color</td><td>未激活时候的颜色</td><td>-</td><td>十六进制色值</td><td>-</td><td>-</td></tr>
          <tr><td>before</td><td>选中前执行的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Swith} from '../../../packages/index.js';
  
  export default {
    name: 'Swith',
    components: {
      lvSwith: Swith
    },
    data () {
      return {
        swith: true,
        code: ''
      };
    },
    watch: {
      swith: function (data) {
        console.log('==', data);
      }
    },
    mounted: function () {
      this.code = '<lv-swith v-model="swith" inactive-val="3" active-val="4" inactive-text="关闭" active-text="开启" :disabled="false"></lv-swith>';
    },
    methods: {
      beforeClk: function (callback) {
        if (window.confirm('确认选中？')) {
          callback();
        }
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
