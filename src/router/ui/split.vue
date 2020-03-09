<template>
  <div class="wrap page-theme">
    <h1>分割面板</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Split} from 'lv-web-ui';
Vue.component('lvSplit', Split);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3></h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-split style="height:300px;" v-model="split">
            <div slot="left" style="height:100%;">
              <lv-split style="height:100%" v-model="split2" :vertical="true">
                <div slot="left" style="height:100%;border:solid 1px #ddd;">上</div>
                <div slot="right" style="height:100%;border:solid 1px #ddd;">下</div>
              </lv-split>
            </div>
            <div slot="right" style="height:100%;border:solid 1px #ddd;">右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|右侧|</div>
          </lv-split>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>分割比例</td><td>是</td><td>float</td><td>-</td><td>0.5</td></tr>
          <tr><td>vertical</td><td>是否垂直分割</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Split} from '../../../packages/index.js';
  
  export default {
    name: 'Split',
    components: {
      lvSplit: Split
    },
    data () {
      return {
        split: 0.9,
        split2: 0.5,
        code: ''
      };
    },
    mounted: function () {
      this.code = '<lv-split style="height:300px;" v-model="split">\n' +
      ' <div slot="left" style="height:100%;border:solid 1px #ddd;">\n' +
      '   <lv-split style="height:100%" v-model="split2" :vertical="true">\n' +
      '     <div slot="left" style="height:100%;border:solid 1px #ddd;">上</div>\n' +
      '     <div slot="right" style="height:100%;border:solid 1px #ddd;">下</div>\n' +
      '   </lv-split>\n' +
      ' </div>\n' +
      ' <div slot="right" style="height:100%;border:solid 1px #ddd;">右侧</div>\n' +
      '</lv-split>';
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
