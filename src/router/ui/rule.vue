<template>
  <div class="wrap page-theme">
    <h1>主题色</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Rule} from 'lv-web-ui';
Vue.component('lvRule', Rule);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>xxxx</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;script type="text/babel"&gt;
export default {
  data () {
    return {};
  },
  methods: {
    xxx () {}
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="position:relative;padding:10px;">
          <lv-rule :minNum="4" :maxNum="20" :sliderItemStep="20" :stepNum="0.05" :stepWidth="5" unit="%" :ignorePoint="true" @callback="callback"></lv-rule>
          {{val}}
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Rule} from '../../../packages/index.js';
  
  export default {
    name: 'Rule',
    components: {
      lvRule: Rule
    },
    data () {
      return {
        val: ''
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        this.val = data;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
