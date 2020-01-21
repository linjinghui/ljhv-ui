<template>
  <div class="wrap page-theme">
    <h1>文本域</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Textarea} from 'lv-web-ui';
Vue.component('lvTextarea', Textarea);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>用例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-textarea v-model="text" placeholder="请输入内容" rows="3" maxlength="220" :autofocus="true" :noPaste="false" :disabled="false" :autoheight="false"></lv-textarea>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>否</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>name</td><td>表单name属性</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>placeholder</td><td>占位文本</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>maxlength</td><td>内容长度</td><td>否</td><td>number</td><td>-</td><td>-</td></tr>
          <tr><td>rows</td><td>行数</td><td>否</td><td>number</td><td>-</td><td>10</td></tr>
          <tr><td>readonly</td><td>是否只读</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>nopaste</td><td>是否不允许粘贴</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>autofocus</td><td>是否自动聚焦</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>disabled</td><td>是否禁用</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>autoheight</td><td>是否高度自增</td><td>否</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Textarea} from '../../../packages/index.js';
  
  export default {
    name: 'Textarea',
    components: {
      lvTextarea: Textarea
    },
    data () {
      return {
        text: 'aaa',
        code: ''
      };
    },
    watch: {
      text: function (val) {
        console.log('watch text', val);
      }
    },
    mounted: function () {
      this.code = '<lv-textarea v-model="text" placeholder="请输入内容" rows="3" maxlength="220" :noPaste="false" :disabled="false" :autoheight="true"></lv-textarea>';
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
