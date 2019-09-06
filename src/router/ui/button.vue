<template>
  <div class="wrap page-button">
    <h1>按钮</h1>
    <dl>
      <dd><h3>描述</h3></dd>
      <dd v-highlight>常用的按钮组件，提供5种状态颜色，4种常用场景</dd>
    </dl>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Button} from 'lv-web-ui';
Vue.component('lvButton', Button);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button @click="clkBtn('默认主题')"&gt;默认主题&lt;/lv-button&gt;
&lt;lv-button theme="primary" @click="clkBtn('PRIMARY')"&gt;PRIMARY&lt;/lv-button&gt;
&lt;lv-button theme="success" @click="clkBtn('成功')"&gt;成功&lt;/lv-button&gt;
&lt;lv-button theme="info" @click="clkBtn('INFO')"&gt;INFO&lt;/lv-button&gt;
&lt;lv-button theme="warning" @click="clkBtn('警告')"&gt;警告&lt;/lv-button&gt;
&lt;lv-button theme="danger" @click="clkBtn('危险')"&gt;危险&lt;/lv-button&gt;
&lt;lv-button theme="line" @click="clkBtn('线性')"&gt;线性&lt;/lv-button&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn('默认主题')">默认主题</lv-button>
          <lv-button theme="primary" @click="clkBtn('PRIMARY')">PRIMARY</lv-button>
          <lv-button theme="success" @click="clkBtn('成功')">成功</lv-button>
          <lv-button theme="info" @click="clkBtn('INFO')">INFO</lv-button>
          <lv-button theme="warning" @click="clkBtn('警告')">警告</lv-button>
          <lv-button theme="danger" @click="clkBtn('危险')">危险</lv-button>
          <lv-button theme="line" @click="clkBtn('线性')">线性</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>十秒后才能点击-示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button theme="primary" v-model="second" @click="clkSend"&gt;点击发送&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
  export default {
    data () {
      return {
        second: 0
      };
    },
    methods: {
      clkSend () {
        this.second = 10;
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" v-model="second" @click="clkSend">点击发送</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>拷贝复制 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button theme="primary" copydata="拷贝内容" @cbk_copy="cbkCopy"&gt;复制到剪贴板&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
  export default {
    methods: {
      cbkCopy (data) {
        alert('文本：' + data + ' 复制成功！');
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" copydata="拷贝内容" @cbk_copy="cbkCopy">复制到剪贴板</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>选择文件 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button theme="primary" :fileoption="fileOption" @cbk_file="cbkFile"&gt;选择文件&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
  export default {
    data () {
      return {
        fileOption: {
          // accept: 'image/gif, image/jpeg',
          multiple: true
        }
      };
    },
    methods: {
      cbkFile (data) {
        console.log(data);
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" :fileoption="fileOption" @cbk_file="cbkFile">选择文件</lv-button>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>调用打印机 - 示例</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code># 打印功能需要在html页面中引入jquery
&lt;script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"&gt;&lt;/script&gt;
# prnt 属性传入需要打印的区域css搜索路径
&lt;lv-button theme="primary" prnt="#tbl>table" @click="clkDy"&gt;点击打印&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
  export default {
    methods: {
      clkPrint () {
        console.log('打印');
      }
    }
  }
&lt;/script&gt;
</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button theme="primary" prnt="#tbl>table" @click="clkPrint">点击打印</lv-button>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button} from '../../../packages/index.js';
  
  export default {
    name: 'Button',
    components: {
      lvButton: Button
    },
    data () {
      return {
        second: 0,
        fileOption: {
          // accept: 'image/gif, image/jpeg',
          multiple: true
        }
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      clkBtn (text) {
        this.$tip({ show: true, text: text, theme: 'none' });
      },
      clkSend () {
        this.second = 10;
      },
      cbkCopy (data) {
        alert('文本：' + data + ' 复制成功！');
      },
      cbkFile (data) {
        console.log(data);
      },
      clkPrint () {
        console.log('打印');
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-button {}
</style>
