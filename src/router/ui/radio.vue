<template>
  <div class="wrap page-theme">
    <h1>单选框</h1>
    <dl>
      <dd><h3>带确认选中功能的单选框</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-radio v-model="food" val="1" :beforeclk="beforeClk"&gt;男&lt;/lv-radio&gt;
&lt;lv-radio v-model="food" val="2" :beforeclk="beforeClk"&gt;女&lt;/lv-radio&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      food: '1'
    };
  },
  methods: {
    beforeClk: function () {
      return window.confirm('确认选中？');
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-radio v-model="food" val="1" :beforeclk="beforeClk">男</lv-radio>
          <lv-radio v-model="food" val="2" :beforeclk="beforeClk">女</lv-radio>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Radio} from 'web-base-ui';
  
  export default {
    name: 'Radio',
    components: {
      lvRadio: Radio
    },
    data () {
      return {
        food: '1'
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      beforeClk: function () {
        return window.confirm('确认选中？');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
