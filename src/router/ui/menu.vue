<template>
  <div class="wrap page-theme">
    <h1>菜单</h1>
    <dl>
      <dd><h3>可多选菜单</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-menu v-bind="option1" v-model="option1.result" @cbkClkItem="callback"&gt;&lt;/lv-menu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option1: {
        # 是否显示
        show: true,
        # 是否多选
        multi: true,
        # 列表项
        data: ['黄金高', '双皮奶', '拉希米', '换节奏', '北京烤鸭', '无泡沫', '长达作为'],
        # 选中结果下标集
        result: [1, 3]
      }
    };
  },
  methods: {
    callback (data) {
      console.log(data);
      console.log(this.option2.result);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-menu v-bind="option1" v-model="option1.result" @cbkClkItem="callback"></lv-menu>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>单选、自定义菜单项内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-menu v-bind="option2" v-model="option2.result" @cbkClkItem="callback2"&gt;
  &lt;p slot="line" slot-scope="props"&gt;{props.item.name}&lt;/p&gt;
&lt;/lv-menu&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      option2: {
        show: true,
        multi: false,
        data: [
          {name: 'name1', age: 11}, 
          {name: 'name2', age: 12}, 
          {name: 'name3', age: 13}, 
          {name: 'name4', age: 14}
        ],
        result: [1, 2]
      }
    };
  },
  methods: {
    callback2 (data) {
      console.log(data);
      console.log(this.option2.result);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-menu v-bind="option2" v-model="option2.result" @cbkClkItem="callback2">
            <p slot="line" slot-scope="props">{{props.item.name}}</p>
          </lv-menu>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Menu} from 'web-base-ui';
  
  export default {
    name: 'Menu',
    components: {
      lvMenu: Menu
    },
    data () {
      return {
        option1: {
          show: true,
          multi: true,
          data: ['黄金高', '双皮奶', '拉希米', '换节奏', '北京烤鸭', '无泡沫', '长达作为'],
          result: [1, 3]
        },
        option2: {
          show: true,
          multi: false,
          data: [{name: 'name1', age: 11}, {name: 'name2', age: 12}, {name: 'name3', age: 13}, {name: 'name4', age: 14}],
          result: [2]
        }
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
        console.log(data);
        console.log(this.option1.result);
      },
      callback2 (data) {
        console.log(data);
        console.log(this.option2.result);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
