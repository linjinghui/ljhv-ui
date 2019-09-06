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
           <pre><code># disabled: 是否禁用(默认false)
&lt;lv-swith v-model="swith" disabled="false"&gt;&lt;/lv-swith&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      swith: true
    };
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-swith v-model="swith" disabled="false"></lv-swith>
        </section>
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
        swith: true
      };
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
