<template>
  <div class="wrap page-theme">
    <h1>滑块验证码</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {SliderCode} from 'lv-web-ui';
Vue.component('lvSliderCode', SliderCode);</code></pre>
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
          <lv-slidercode></lv-slidercode>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {SliderCode} from '../../../packages/index.js';
  
  export default {
    name: 'Slidercode',
    components: {
      lvSlidercode: SliderCode
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
