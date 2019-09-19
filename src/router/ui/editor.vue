<template>
  <div class="wrap page-theme">
    <h1>富文本编辑器</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Editor} from 'lv-web-ui';
Vue.component('lvEditor', Editor);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd class="example">
        <section v-highlight>
           <pre><code>// 完整 toolbar 如下
[
  // 标题           
  [{ font: ['serif', 'monospace'] }], 
  [{ font: ['Microsoft-YaHei', 'Sim-Sun', 'Kai-Ti', 'Sim-Hei', 'Li-Shu', 'Andale-Mono', 'Arial', 'Arial-Black', 'Comic-Sons-Ms', 'Impact', 'Times-New-Roman', 'Sans-Serif'] }], 
  // 文本方向 
  [{ size: ['small', false, 'large', 'huge'] }], 
  // 字体大小 
  [{ header: [1, 2, 3, 4, 5, 6, false] }], 
  // 引用 代码块 
  [{ header: 1 }, { header: 2 }], 
  // 1、2 级标题 
  [{ list: 'ordered' }, { list: 'bullet' }], 
  // 有序、无序列表 
  [{ script: 'sub' }, { script: 'super' }], 
  // 上标/下标 
  [{ indent: '-1' }, { indent: '+1' }], 
  // 加粗 斜体 下划线 删除线
  ['blockquote', 'code-block'], 
  // 清除文本格式 
  ['link', 'image'],
  [{ color: [] }, { background: [] }], 
  // 字体颜色、字体背景颜色 
  ['bold', 'italic', 'underline', 'strike'], 
  // 缩进
  [{'direction': 'rtl'}], 
  // 字体种类 
  [{ align: [] }],           
  // 链接、图片、视频 , 'video'
  ['link', 'image', 'video'],
  // 对齐方式 
  ['clean']
]

&lt;lv-editor v-model="content" placeholder="请输入内容" :toolbar="toolbar" :upImage="upImage"&gt;&lt;/lv-editor&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    upImage (files, callback) {
      console.log('======这里上传图片到服务器=======');      
      var file = files[0].file;
      var size = files[0].size;
      var name = files[0].name;
      var suffix = files[0].suffix;
      var data = {
        code: 200,
        url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      };

      console.log(size + ':' + name + ':' + suffix, file);
      callback(data);
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-editor v-model="content" placeholder="请输入内容" :toolbar="toolbar" :upImage="upImage"></lv-editor>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Editor} from '../../../packages/index.js';
  
  export default {
    name: 'Editor',
    components: {
      lvEditor: Editor
    },
    data () {
      return {
        content: '',
        toolbar: [
          // 标题           
          [{ font: ['serif', 'monospace'] }], 
          [{ font: ['Microsoft-YaHei', 'Sim-Sun', 'Kai-Ti', 'Sim-Hei', 'Li-Shu', 'Andale-Mono', 'Arial', 'Arial-Black', 'Comic-Sons-Ms', 'Impact', 'Times-New-Roman', 'Sans-Serif'] }], 
          // 文本方向 
          [{ size: ['small', false, 'large', 'huge'] }], 
          // 字体大小 
          [{ header: [1, 2, 3, 4, 5, 6, false] }], 
          // 引用 代码块 
          [{ header: 1 }, { header: 2 }], 
          // 1、2 级标题 
          [{ list: 'ordered' }, { list: 'bullet' }], 
          // 有序、无序列表 
          [{ script: 'sub' }, { script: 'super' }], 
          // 上标/下标 
          [{ indent: '-1' }, { indent: '+1' }], 
          // 加粗 斜体 下划线 删除线
          ['blockquote', 'code-block'], 
          // 清除文本格式 
          ['link', 'image'],
          [{ color: [] }, { background: [] }], 
          // 字体颜色、字体背景颜色 
          ['bold', 'italic', 'underline', 'strike'], 
          // 缩进
          [{'direction': 'rtl'}], 
          // 字体种类 
          [{ align: [] }],           
          // 链接、图片、视频 , 'video'
          ['link', 'image', 'video'],
          // 对齐方式 
          ['clean']
        ]
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      upImage (files, callback) {
        console.log('======这里上传图片到服务器=======');      
        var file = files[0].file;
        var size = files[0].size;
        var name = files[0].name;
        var suffix = files[0].suffix;
        var data = {
          code: 200,
          url: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
        };

        console.log(size + ':' + name + ':' + suffix, file);
        callback(data);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
