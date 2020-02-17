<template>
  <div class="wrap page-theme">
    <h1>复选框</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Video} from 'lv-web-ui';
Vue.component('lvVideo', Video);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>表单复选框，带多种功能参数定义</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="toggle">显示、隐藏</lv-button>
          <lv-video v-model="optVideo.show" v-bind="optVideo"></lv-video>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>v-model/value</td><td>绑定值</td><td>是</td><td>boolean|array|number|string</td><td>-</td><td>如果传入的非是数组，则表示单选</td></tr>
          <tr><td>disabled</td><td>禁用</td><td>-</td><td>boolean</td><td>-</td><td>false</td></tr>
          <tr><td>val</td><td>选中后回填的值</td><td>是</td><td>boolean|number|string</td><td>-</td><td>-</td></tr>
          <tr><td>before</td><td>选中前执行的函数</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button, Video} from '../../../packages/index.js';
  
  export default {
    name: 'Video',
    components: {
      lvButton: Button,
      lvVideo: Video
    },
    data () {
      return {
        optVideo: {
          show: '',
          model: false,
          title: '华为主题曲',
          option: {
            // 封面图片地址
            poster: 'http://pic1.nipic.com/2009-01-07/20091713417344_2.jpg', 
            // 是否自动播放
            autoplay: false, 
            // 是否循环播放
            loop: false, 
            // 默认需要跳转的时间
            seek: 0,
            video: [
              ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文标清', 0]
            ]
          }
        },
        show: false,
        opt: {
          // 封面图片地址
          poster: 'http://pic1.nipic.com/2009-01-07/20091713417344_2.jpg', 
          // 是否自动播放
          autoplay: false, 
          // 是否循环播放
          loop: false, 
          // 默认需要跳转的时间
          seek: 0,
          video: [
            ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文标清', 0]
          ]
        },
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = '';
    },
    methods: {
      toggle: function () {
        this.optVideo.show = !this.optVideo.show;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
