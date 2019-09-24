<template>
  <div class="wrap page-theme">
    <h1>侧边导航</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Sidenav} from 'lv-web-ui';
Vue.component('lvSidenav', Sidenav);</code></pre>
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
        <section style="padding:10px;">
          <div style="width:240px;height:400px;border:solid 1px;">
            <lv-sidenav></lv-sidenav>
          </div>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Sidenav} from '../../../packages/index.js';
  
  export default {
    name: 'Sidenav',
    components: {
      lvSidenav: Sidenav
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
