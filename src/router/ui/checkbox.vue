<template>
  <div class="wrap page-theme">
    <h1>复选框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Checkbox} from 'lv-web-ui';
Vue.component('lvCheckbox', Checkbox);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>// data 参数在 click， beforeclk事件中会回传
// required 是否必选（默认false）
// disabled 是否禁用（默认false）
// beforeclk 勾选\取消勾选前的回调
// click 勾选\取消勾选后的回调
&lt;lv-checkbox v-model="selected" data="123" :required="false" :disabled="false" :beforeclk="beforeClk" @click="clkCheckbox"&gt;复选框&lt;/lv-checkbox&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      selected: true
    };
  },
  methods: {
    clkCheckbox (data) {
      console.log(data);
    },
    beforeClk: function (data) {
      console.log(data);
      return window.confirm('确认选中？');
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-checkbox v-model="selected" data="123" :required="false" :disabled="false" :beforeclk="beforeClk" @click="clkCheckbox">复选框</lv-checkbox>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Checkbox} from '../../../packages/index.js';
  
  export default {
    name: 'Checkbox',
    components: {
      lvCheckbox: Checkbox
    },
    data () {
      return {
        selected: true
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      clkCheckbox (data) {
        console.log('clkCheckbox=', this.selected);
      },
      beforeClk: function (data) {
        console.log('beforeClk=', data);
        return window.confirm('确认选中？');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
