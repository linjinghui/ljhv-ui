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
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code> // noPaste 是否不允许粘贴，默认false
// disabled 是否禁用，默认false
// autoHeight 是否高度自增，默认false
// rows 行数
&lt;lv-textarea v-model="text" placeholder="请输入内容" rows="3" maxlength="220" :noPaste="false" :disabled="false" :autoHeight="true"&gt;&lt;/lv-textarea&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-textarea v-model="text" placeholder="请输入内容" rows="3" maxlength="220" :noPaste="false" :disabled="false" :autoHeight="true"></lv-textarea>
        </section>
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
        text: 'aaa'
      };
    },
    watch: {
      text: function (val) {
        console.log('watch text', val);
      }
    },
    mounted: function () {
      // 
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
