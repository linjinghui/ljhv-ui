<template>
  <div class="wrap page-theme">
    <h1>分页工具</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Pagebar} from 'lv-web-ui';
Vue.component('lvPagebar', Pagebar);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>常规分页</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// index：当前页
// theme：主题，可不传。 simple
// pageSize: 每页显示记录数
// totalSize: 总记录数
// callback：选择后回调
&lt;lv-pagebar v-model="index" theme="simple" pageSize="10" totalSize="101" @callback="callback"&gt;&lt;/lv-pagebar&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    callback (data) {
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-pagebar v-model="index" theme="simple" pageSize="10" totalSize="101" @callback="callback"></lv-pagebar>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>带页大小选择的分页</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code> // pageSizes 可选的每页显示记录数，[10, 30, 50]
&lt;lv-pagebarpagesize v-model="index" pageSize="50" :pageSizes="pageSizes" totalSize="101" @callback="callback"&gt;&lt;/lv-pagebarpagesize&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      pageSizes: [30, 50, 100]
    };
  },
  methods: {
    callback (data) {
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-pagebarpagesize v-model="index2" pageSize="50" :pageSizes="pageSizes" totalSize="101" @callback="callback"></lv-pagebarpagesize>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Pagebar, PagebarPagesize} from '../../../packages/index.js';
  
  export default {
    name: 'Pagebar',
    components: {
      lvPagebar: Pagebar,
      lvPagebarpagesize: PagebarPagesize
    },
    data () {
      return {
        index: 1,
        index2: 1,
        pageSizes: [30, 50, 100]
      };
    },
    watch: {
      index2 (val) {
        console.log('index2', val);
      }
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        console.log(data);
      }
    }
  };
</script>
