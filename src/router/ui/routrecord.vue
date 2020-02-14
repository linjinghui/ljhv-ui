<template>
  <div class="wrap page-theme">
    <h1>路由记录</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Routrecord} from 'lv-web-ui';
Vue.component('lvRoutrecord', Routrecord);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>路由记录插件</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-routrecord></lv-routrecord>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Routrecord} from '../../../packages/index.js';
  
  export default {
    name: 'Routrecord',
    components: {
      lvRoutrecord: Routrecord
    },
    data () {
      return {
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-routrecord></lv-routrecord>';
    },
    methods: {
      
    }
  };
</script>
