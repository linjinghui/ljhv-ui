<template>
  <div class="wrap page-theme">
    <h1>区域菜单</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Rangemenu} from 'lv-web-ui';
Vue.component('lvRangemenu', Rangemenu);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>区域菜单，可自定义菜单内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-rangemenu v-model="list" @add="add"&gt;&lt;/lv-rangemenu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      list: ['淡淡的', '嗖嗖嗖', 'vvvv', '密麻麻']
    };
  },
  methods: {
    add () {
      this.list.push('item' + this.list.length);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-rangemenu v-model="list" @add="add"></lv-rangemenu>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>自定义菜单内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-rangemenu v-model="list2" @add="add2"&gt;
  &lt;template slot-scope="props"&gt;{props.item.name}&lt;/template&gt;
&lt;/lv-rangemenu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      list2: [
        {
          name: 'name0',
          age: 10
        }
      ]
    };
  },
  methods: {
    add2 () {
      this.list2.push({
        'name': 'name' + this.list2.length,
        'age': this.list2.length
      });
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-rangemenu v-model="list2" @add="add2">
            <template slot-scope="props">{{props.item.name}}</template>
          </lv-rangemenu>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {RangeMenu} from '../../../packages/index.js';
  
  export default {
    name: 'Rangemenu',
    components: {
      lvRangemenu: RangeMenu
    },
    data () {
      return {
        list: ['淡淡的', '嗖嗖嗖', 'vvvv', '密麻麻'],
        list2: [
          {
            name: 'name0',
            age: 10
          }
        ]
      };
    },
    watch: {
      list (val) {
        console.log('==watch list==');
        console.log(val);
      }
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      add () {
        this.list.push('item' + this.list.length);
      },
      add2 () {
        this.list2.push({
          'name': 'name' + this.list2.length,
          'age': this.list2.length
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
