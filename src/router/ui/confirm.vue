<template>
  <div class="wrap page-theme">
    <h1>确认框</h1>
    <dl>
      <dd><h3>全局确认框，支持自定义内容</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button @click="clkBtn"&gt;确认框&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    clkBtn () {
      var _this = this;

      this.$confirm({
        # 显示隐藏
        show: true,
        # 是否需要底层遮罩效果
        modal: true,
        heading: '投票',
        content: '你今天还能为其他未投过票的参选者投&lt;font style="color: red;"&gt;1&lt;/font&gt;票',
        # 小图标类型, 可空 success(默认)|error|warning|bigsuccess|bigerror|bigwarning
        type: '',
        # 自定义内容样式，可不传，默认文本居中显示
        stl: {
          # 标题样式
          header: {
            # 文本位置：left|center
            'text-align': 'center'
          },
          # 内容样式
          section: {
            # 文本位置：left|center|right
            'text-align': 'center'
          },
          # 按钮样式
          footer: {
            # 按钮位置：left|center|right
            'text-align': 'center'
          }
        },
        buttons: [{
          text: '放弃修改',
          # 按钮主题： primary|success|info|warning|danger|#f56c6c
          theme: 'line'
        }, {
          text: '选择文件',
          theme: 'primary',
          fileoption: {
            multiple: true
          }
        }],
        callback: function (data) {
          _this.$confirm({ show: false });
          console.log('======confirm callback=====');
          console.log(data);
        }
      });
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="clkBtn">确认框</lv-button>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>带输入框的确认弹窗</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>&lt;lv-button @click="clkBtn"&gt;文本确认框&lt;/lv-button&gt;
&lt;script type="text/babel"&gt;
export default {
  methods: {
    showPrompt () {
      var _this = this;

      this.$prompt({
        show: true,
        modal: true,
        heading: '自定义标题',
        initText: 'ddd',
        placeholder: 'lala',
        maxlength: 10,
        stl: {
          footer: {
            'text-align': 'right'
          }
        },
        buttons: [{
          text: '放弃修改',
          theme: 'success'
        }, {
          text: '修改',
          theme: 'danger'
        }],
        callback: function (data) {
          _this.$prompt({ show: false });
          console.log('======Prompt callback=====');
          console.log(data);
        }
      });
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="showPrompt">文本确认框</lv-button>
        </section>
      </dd>
    </dl>

    <dl>
      <dd><h3>自定义弹窗</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code>import {Dialog} from 'web-base-ui';
&lt;lv-dialog style="width:620px;height:450px;" v-model="optionDialog.show" v-bind="optionDialog" @callback="callbackDialog"&gt;
  &lt;span slot="title"&gt;自定义标题&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p v-for="(item,index) in 20" :key="'item_'+index"&gt;dddddddddddddddd&lt;/p&gt;
  &lt;/div&gt;
&lt;/lv-dialog&gt;
&lt;script type="text/babel"&gt;
export default {
  data () {
    return {
      optionDialog: {
        show: false,
        modal: true,
        stl: {
          header: {
            'text-align': 'left'
          },
          footer: {
            'text-align': 'right'
          }
        },
        buttons: [{
          text: '放弃修改',
          theme: 'line'
        }, {
          text: '修改',
          theme: 'warning'
        }]
      }
    };
  },
  methods: {
    callbackDialog (data) {
      this.optionDialog.show = false;
    }
  }
}
&lt;/script&gt;</code></pre>
        </section>
        <section style="padding:10px;">
          <lv-button @click="optionDialog.show=true">显示自定义弹窗</lv-button>
          <lv-dialog style="width:620px;height:450px;" v-model="optionDialog.show" v-bind="optionDialog" @callback="callbackDialog">
            <span slot="title">自定义标题1</span>
            <div slot="content">
              <p v-for="(item,index) in 20" :key="'item_'+index">dddddddddddddddd</p>
            </div>
          </lv-dialog>
        </section>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button, Dialog} from 'web-base-ui';
  
  export default {
    name: 'Theme',
    components: {
      lvButton: Button,
      lvDialog: Dialog
    },
    data () {
      return {
        optionDialog: {
          show: false,
          modal: true,
          stl: {
            header: {
              'text-align': 'left'
            },
            footer: {
              'text-align': 'right'
            }
          },
          buttons: [{
            text: '放弃修改',
            theme: 'line'
          }, {
            text: '修改',
            theme: 'warning'
          }]
        }
      };
    },
    mounted: function () {
      // 
    },
    methods: {
      parseHtmlStr (htmlstr) {
        console.log(htmlstr.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
      },
      clkBtn () {
        var _this = this;

        this.$confirm({
          show: true,
          modal: true,
          heading: '投票',
          content: ' 你今天还能为其他未投过票的参选者投<font style="color: red;">1</font>票',
          // error|success|warning|bigsuccess|bigerror|bigwarning
          type: '',
          stl: {
            header: {
              // left|center
              'text-align': 'center'
            },
            section: {
              // left|center|right
              'text-align': 'center'
            },
            footer: {
              // left|center|right
              'text-align': 'center'
            }
          },
          buttons: [{
            text: '放弃修改',
            // primary|success|info|warning|danger|#f56c6c
            theme: 'line'
          }, {
            text: '选择文件',
            theme: 'primary',
            fileoption: {
              multiple: true
            }
          }],
          callback: function (data) {
            _this.$confirm({ show: false });
            console.log('======confirm callback=====');
            console.log(data);
          }
        });
      },
      showPrompt () {
        var _this = this;

        this.$prompt({
          show: true,
          modal: true,
          heading: '自定义标题',
          initText: 'ddd',
          placeholder: 'lala',
          stl: {
            footer: {
              'text-align': 'right'
            }
          },
          maxlength: 10,
          buttons: [{
            text: '放弃修改',
            theme: 'success'
          }, {
            text: '修改',
            theme: 'danger'
          }],
          callback: function (data) {
            _this.$prompt({ show: false });
            console.log('======Prompt callback=====');
            console.log(data);
          }
        });
      },
      callbackDialog (data) {
        console.log('=======callbackDialog========');
        console.log(data);
        this.optionDialog.show = false;
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
