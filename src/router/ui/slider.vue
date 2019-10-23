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
           <pre><code>// percent 初始进度值，百分比
// disabled 是否禁用 默认false
// value 初始位置
// min 最小值 默认0
// max 最大值 默认100
// point 保留小数点位数 默认0
// callback 拖拽后的回调
&lt;lv-slider :disabled="false" :value="10" :min="0" :max="100" :point="0" @callback="callback"&gt;&lt;/lv-slider&gt;
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
          <div style="width:100%;border:solid 1px;">
            <lv-slider :disabled="false" :value="10" :min="0" :max="100" :point="0" @callback="callback"></lv-slider>
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
    watch: {},
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      callback (data) {
        console.log('==callback==', data);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
