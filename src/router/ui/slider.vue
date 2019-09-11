<template>
  <div class="wrap page-theme">
    <h1>滑块</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Slider} from 'lv-web-ui';
Vue.component('lvSlider', Slider);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>可设置初始值，带禁用功能的滑块</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># percent 初始进度值，百分比
# disabled 是否禁用 默认false
# edrag 拖拽后的回调，返回坐标值的百分比
&lt;lv-slider percent="30" :disabled="false" @edrag="callback"&gt;&lt;/lv-slider&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    callback (data) {
      console.log('======');
      console.log(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <div style="width: 300px;">
            <lv-slider percent="60" :disabled="false" @edrag="callback"></lv-slider>
          </div>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Slider} from '../../../packages/index.js';
  
  export default {
    name: 'Slider',
    components: {
      lvSlider: Slider
    },
    data () {
      return {};
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        console.log('======');
        console.log(data);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
