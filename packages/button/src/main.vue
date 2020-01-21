<!-- 
功能介绍：
1、普通按钮（主题：主要|成功|信息|警告|危险）
2、复制到剪贴版按钮（成功: 返回剪贴内容，错误：error）
3、选择文件按钮（返回文件参数）
4、计时器按钮
5、打印按钮
选择文件夹：webkitdirectory=""
 -->

<template>
  <button class="button" :class="theme||'theme-b'" :id="id" :disabled="disabled" :data-clipboard-text="copyData" @click="clk">
    <template v-if="icon">
      <i :class="icon"></i>&nbsp;
    </template>
    <template v-if="file&&!disabled">
      <label class="lab-file" :for="'file_'+id"><slot></slot></label>
      <input type="file" :id="'file_'+id" :accept="file.accept" :multiple="file.multiple" @change="fileChange">
    </template>
    <span class="second" v-else-if="second" v-text="second+'s'"></span>
    <slot v-else></slot>
  </button>
</template>

<script type="text/babel">
  import ClipboardJS from 'clipboard';

  export default {
    name: 'Button',
    data: function () {
      return {
        id: 'btn_' + new Date().getTime() + parseInt(Math.random() * 100),
        second: 0
      };
    },
    props: {
      // 主题：primary|success|info|warning|error|line|simple
      theme: '',
      // 禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 禁用时长（秒）
      disabledDuring: {
        type: Number,
        default: 0
      },
      // 复制剪贴板内容
      copyData: '',
      // 选择文件 {accept, multiple, uploadUrl, header, formData, fileFormName}
      file: '',
      // 打印ID
      print: '',
      // 阻止事件冒泡
      stop: {
        type: Boolean,
        default: false
      },
      // 阻止默认行为
      prevent: {
        type: Boolean,
        default: false
      },
      // 图标
      icon: ''
    },
    watch: {},
    computed: {},
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 初始化剪贴板
      this.initCopy();
      if (this.print) {
        require('../lib/jquery.PrintArea.js');
      }
    },
    methods: {
      clk: function (e) {
        let _this = this;
        
        this.stop && e.stopPropagation();
        this.prevent && e.preventDefault();

        if (this.print) {
          var $ = window.$;
          // iframe|popup 新窗口打开
          var mode = 'iframe';
          var close = true;
          var extraCss = '';
          var keepAttr = ['class', 'id', 'style'];
          var headElements = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
          var options = { mode: mode, popClose: close, extraCss: extraCss, retainAttr: keepAttr, extraHead: headElements };

          $(this.print).printArea(options);
        }
        this.$emit('click');
        // 倒计时
        if (this.disabledDuring > 0) {
          this.second = this.disabledDuring;
          this.disabled = true;
          this.timer = setInterval(function () {
            _this.second -= 1;
            if (_this.second <= 0) {
              clearInterval(_this.timer);
              _this.disabled = false;
            }
          }, 1000);
        }
      },
      initCopy: function () {
        let _this = this;

        if (this.copyData) {
          this.clipboard = new ClipboardJS('#' + this.id);
          this.clipboard.on('success', function (e) {
            _this.$emit('copy-success', _this.copyData);
          });

          this.clipboard.on('error', function (e) {
            _this.$emit('copy-error', 'error');
          });
        }
      },
      fileChange: function (e) {
        let el = e.target;
        let files = [];

        if (el.files) {
          for (let i = 0;i < el.files.length;i++) {
            let file = el.files[i];
            let name = file.webkitRelativePath || file.relativePath || file.name;
            let suffix = (name && name.split('.').length > 1) ? (name.split('.')[name.split('.').length - 1]) : '';

            files.push({
              size: file.size,
              name: name,
              type: file.type,
              suffix: suffix,
              file,
              el
            });
          }
        }
        this.upLoadFile(el.files);
        this.$emit('select-file', files);
        // 清除input记录
        el.value = '';
      },
      upLoadFile: function (files) {
        if (this.file.uploadUrl && files && files.length > 0) {
          var _this = this;
          var formData = new FormData();
          var request = new XMLHttpRequest();
          var fileFormName = this.file.fileFormName || 'file';
          var header = this.file.header || {};
          var fData = this.file.formData || {};
          var timeout = 30000;
          var timer = '';
          
          // 上传进度
          request.onprogress = function (event) {
            if (event.lengthComputable) {
              _this.$emit('upload-progress', event.loaded / event.total);
            }
          };

          request.open('post', this.file.uploadUrl, true);

          // 设置请求头
          request.setRequestHeader('Content-Type', 'multipart/form-data');
          for (let key in header) {
            request.setRequestHeader(key, header[key]);
          }

          // 设置请求参数
          for (let i = 0;i < files.length;i++) {
            formData.append(fileFormName, files[i], files[i].name);
          }
          for (let key in fData) {
            formData.append(key, fData[key]);
          }

          // 发送请求
          request.send(formData);

          // 处理超时
          timer = setTimeout(function () {
            request.abort();
          }, timeout);

          request.onreadystatechange = function () {
            if (request.readyState === 4) {
              timer && clearTimeout(timer);
              if (request.status === 200) {
                var result = '';

                try {
                  result = JSON.parse(request.response);
                } catch (error) {
                  result = request.response;
                }
                _this.$emit('upload-success', result);
              } else {
                _this.$emit('upload-error', request.status);
              }
            }
          };
          
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .button {
    position: relative;
    // display: inline-block;
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    padding: 4px 15px;
    color: #fff;
    font-size: 12px;
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    transition-property: all;
    overflow: visible;
    outline: medium;
    text-transform: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    
    input[type='file'] {
      display: none;
    }
    > i {
      display: inline-block;
    }
  }
  .button.primary {
    background-color: #409eff;
  }
  .button.success {
    background-color: #67c23a;
  }
  .button.info {
    background-color: #909399;
  }
  .button.warning {
    background-color: #e6a23c;
  } 
  .button.danger {
    background-color: #f56c6c;
  }
  .button.line {
    border-color: #ddd;
    color: inherit;
    background-color: #fff;
  }
  .button.simple {
    padding: 0;
    color: inherit;
    background-color: transparent;
  }

  .button[disabled] {
    cursor: text;
  }

  .button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  .button:not([disabled]):hover {
    opacity: 0.8;
  }

  .button:not([disabled]):active {
    opacity: 0.9;
  }

  .second {
    font-size: 16px;
  }

  .lab-file {
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .lab-file:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
</style>