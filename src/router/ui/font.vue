<template>
  <div class="wrap page-font">
    <h1>文本大小</h1>
    <dl>
      <dd><h1>22号文本</h1></dd>
      <dd v-highlight>
        <pre><code>&lt;h1&gt;22号文本&lt;/h1&gt;</code></pre>
      </dd>
      <dd><h2>20号文本</h2></dd>
      <dd v-highlight>
        <pre><code>&lt;h2&gt;20号文本&lt;/h2&gt;</code></pre>
      </dd>
      <dd><h3>18号文本</h3></dd>
      <dd v-highlight>
        <pre><code>&lt;h3&gt;18号文本&lt;/h3&gt;</code></pre>
      </dd>
      <dd><h4>16号文本</h4></dd>
      <dd v-highlight>
        <pre><code>&lt;h4&gt;16号文本&lt;/h4&gt;</code></pre>
      </dd>
      <dd><small>12号文本</small></dd>
      <dd v-highlight>
        <pre><code>&lt;small&gt;12号文本&lt;/small&gt;</code></pre>
      </dd>
    </dl>
  </div>
</template>

<script>
  // import {Button} from 'web-base-ui';
  
  export default {
    name: 'Font',
    components: {
      // cmpButton: Button
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
      xxx: function () {
        // 
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-font {}
</style>
