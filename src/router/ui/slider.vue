<template>
  <div class="wrap page-theme">
    <h1>滑块</h1>
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
          <div style="width: 300px;">
            <lv-slider v-model="percent" max="110"></lv-slider>
          </div>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Slider} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvSlider: Slider
    },
    data () {
      return {
        percent: 50
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
