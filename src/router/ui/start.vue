<template>
  <div class="wrap page-start">
    <h1>快速上手</h1>
    <dl>
      <dt><h3>关于lv-web-ui</h3></dt>
      <dd>lv-web-ui 是 基于Vue2.x实现封装的UI版本，专为PC端打造，在追求完美视觉体验的同时也保证了其性能高效。可以通过“扫描二维码”直接与作者进行沟通。</dd>
      <dd><img class="qrcode" width="140px" src="../../../static/auther.png"></dd>
    </dl>
    <dl>
      <dt><h3>NPM 安装</h3></dt>
      <dd>推荐使用 npm 来安装，能更好地和 webpack 模块打包器配合使用。</dd>
      <dd v-highlight>
        <pre><code># 最新稳定版
$ npm install lv-web-ui --save</code></pre>
      </dd>
    </dl>
    <dl>
      <dt><h3>脚手架工具(CLI)</h3></dt>
      <dd>ljhv 提供了一个脚手架工具(CLI)，为单页面应用 (SPA) 快速搭建基础框架。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。</dd>
      <dd v-highlight>
        <pre><code># 安装脚手架
$ npm install ljhv-cli -g
# 查看脚手架版本
$ ljhv-cli -V
# 创建工程
$ ljhv-cli init
# 安装依赖
$ npm install 
# 运行程序
$ npm run dev
...
# 打包上线
$ npm run build
# 也可以通过以下命令在打包的时候，开启可视化资源分析工具
$ npm run build BAP </code></pre>
      </dd>
    </dl>
  </div>
</template>

<script>
  // import {Button} from 'web-base-ui';
  
  export default {
    name: 'Start',
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
  .page-start {
    .qrcode {
      border: solid 1px #ccc;
    }
  }
</style>
