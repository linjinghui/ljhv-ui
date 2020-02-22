<!-- 
功能介绍：
1、
// 文件列表 { name: '', size: '0b', url: '', progress: '' }
 -->

<template>
  <div class="wrap-upload" :id="id">
    <lv-button theme="simple" :disabled="max>0&&files.length>=max" :icon="icon" :file="fileOption" :select-file="selectFile" @upload-progress="uploadProgress" @upload-success="uploadSuccess" @upload-error="uploadError">
      {{text}} 
      <template v-if="max">{{files.length}}/{{max}}</template>
    </lv-button>
    <ul v-if="files&&files.length>0">
      <li class="item" v-for="(item,index) in files" :key="'file_'+index">
        <lv-img width="50px" height="50px" :preview="isImg(item.name)" :src="getFileTypeImg(item)"></lv-img>
        <div class="main">
          <p :class="{'download':item.url&&item.url.indexOf('http')===0}" :title="item.url&&item.url.indexOf('http')===0?'点击下载':''" @click="download(item.url)">{{item.name}}</p>
          <small>{{bytesToSize(item.size)}}</small>
          <lv-progress v-if="item.progress>=0" :progress="item.progress" :themebar="theme"></lv-progress>
          <i class="lv-icon-x" @click="clkRemove(item,index)"></i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/babel">
  import Button from '../../button/index.js';
  import Img from '../../img/src/main.vue';
  import Progress from '../../progress/src/main.vue';

  export default {
    name: 'Upload',
    components: {
      lvButton: Button,
      lvImg: Img,
      lvProgress: Progress
    },
    data: function () {
      return {
        id: 'upload_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      // 按钮文本
      text: {
        default: '选择文件'
      },
      files: {
        // 文件列表 { name: '', size: '0b', url: '', progress: '' }
        type: Array,
        default: function () {
          return [];
        }
      },
      // 最大文件数量
      max: {
        default: ''
      },
      // 按钮中的图标
      icon: {
        default: 'lv-icon-attach'
      },
      // 进度条颜色
      theme: {
        default: ''
      },
      // 文件上传数据
      fileOption: {
        type: Object,
        default: function () {
          return {};
        }
      },
      // 删除文件回调
      removeFile: {
        type: Function,
        default: function () {
          return function (file, callback) {
            callback && callback();
          };
        }
      },
      // 上传文件系统正常返回结果的回调
      uploaded: {
        type: Function,
        default: function () {
          return function (file, response, successCallback, errorCallback) {
            successCallback && successCallback(response.id, response.url);
          };
        }
      }
    },
    methods: {
      selectFile: function (files) {
        var _files = JSON.parse(JSON.stringify(this.files));
        // 过滤后的文件
        var newFiles = [];
        // 已存在的文件
        var existFiles = [];

        for (var i = 0;i < files.length;i++) {
          var item = files[i];
          
          if (JSON.stringify(this.files).indexOf('"name":"' + item.name + '"') === -1) {
            newFiles.push(item);
            _files.push({ _id: item._id, name: item.name, size: item.size, progress: 0 });
          } else {
            existFiles.push(item);
          }
        }
        // 控制最大数量
        if (this.max && _files.length > this.max) {
          // _files.splice(this.max, _files.length - this.max);
          // newFiles.splice(_files.length - this.max, _files.length - this.max);
          newFiles = newFiles.slice(0, _files.length - this.max);
          _files = _files.slice(0, this.max);
        }
        this.$emit('update:files', _files);
        if (existFiles && existFiles.length > 0) {
          this.$emit('upload-error', existFiles, 'file exist');
        }
        return newFiles;
      },
      uploadProgress: function (file, data) {
        var _this = this;
        var index = '';

        for (var i = this.files.length - 1;i >= 0;i--) {
          var _id = this.files[i]._id;

          if (_id && _id === file._id) {
            index = i;
            break;
          }
        }
        if (index !== '') {
          this.$set(this.files[index], 'progress', data * 100);
          if (data >= 1) {
            setTimeout(function () {
              _this.$set(_this.files[index], 'progress', -1);
            }, 1000);
          }
        }
      },
      uploadSuccess: function (file, response) {
        var _this = this;
        var _files = JSON.parse(JSON.stringify(this.files));

        // file, response, success, error
        this.uploaded(file, response, function (id, url) {
          // 成功回调
          var index = '';

          for (var i = _files.length - 1;i >= 0;i--) {
            var _id = _files[i]._id;

            if (_id && _id === file._id) {
              index = i;
              break;
            }
          }
          if (index !== '') {
            id && (_files[index].id = id);
            url && (_files[index].url = url);
            _this.$emit('update:files', _files);
            _this.$nextTick(function () {
              _this.uploadProgress(file, 1);
            });
          }
        }, function () {
          // 错误回调
          for (var index = _files.length - 1;index >= 0;index--) {
            var _id = _files[index]._id;

            if (_id && _id === file._id) {
              _files.splice(index, 1);
            }
          }
          _this.$emit('update:files', _files);
        });
      },
      // 上传错误
      uploadError: function (file, status) {
        this.$emit('upload-error', file, status);
        var _files = JSON.parse(JSON.stringify(this.files));

        for (var index = _files.length - 1;index >= 0;index--) {
          var _id = _files[index]._id;

          if (_id && _id === file._id) {
            _files.splice(index, 1);
          }
        }
        this.$emit('update:files', _files);
      },
      // 删除
      clkRemove: function (file, index) {
        var _this = this;
        var _files = JSON.parse(JSON.stringify(this.files));

        this.removeFile(file, function () {
          _files.splice(index, 1);
          _this.$emit('update:files', _files);
        });
      },
      // 下载文件
      download: function (url) {
        if (url && url.indexOf('http') > -1) {
          window.open(url);
        }
      },
      // 获取文件名后缀类型
      getSuffix: function (fileName) {
        if (!fileName) return '';
        var index = fileName.lastIndexOf('.');

        if (index === -1) return '';
        var suffix = fileName.substr(index + 1).toLowerCase();

        if (suffix === 'doc') suffix = 'docx';
        else if (suffix === 'ppt') suffix = 'pptx';
        else if (suffix === 'xls') suffix = 'xlsx';
        return suffix;
      },
      // 根据文件名，判断是否图片文件
      isImg: function (fileName) {
        var imgtypes = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp'];
        var suffix = this.getSuffix(fileName);

        if (!suffix) return false;
        return imgtypes.indexOf(suffix) > -1;
      },
      // 根据文件名，返回对应类型图地址 { name: '', url: '' }
      getFileTypeImg: function (file) {
        if (!file || !file.name) return '';
        var filetypes = ['doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'zip', 'rar', 'txt'];
        var name = file.name;
        var url = file.url;
        var suffix = this.getSuffix(name);

        if (this.isImg(name)) {
          return url;
        } else if (filetypes.indexOf(suffix) > -1) {
          return require('../imgs/' + suffix + '.png');
        } 
        return require('../imgs/other.png');
      },
      // 字节单位转换
      bytesToSize: function (bytes) {
        if (bytes === 0) return '0 B';
        if (!bytes) return '-';
        var k = 1024;
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));

        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
      }
    }
  };
</script>

<style lang="scss">
  .wrap-upload {
    .progress {
      height: 10px!important;
      border-radius: 0!important;

      .pg-bar .text {
        font-size: 12px!important;
      }
    }
  }
</style>
<style scoped lang="scss">
  .wrap-upload {
    position: relative;
    line-height: initial;

    .item {
      position: relative;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      padding: 10px 0;
      border-bottom: solid 1px transparent;

      > .main {
        position: relative;
        flex: 1;
        margin-left: 10px;

        p.download {
          cursor: pointer;
          text-decoration: underline;
        }

        small {
          display: block;
          margin-bottom: 4px;
        }

        .lv-icon-x {
          position: absolute;
          top: 0;
          right: 0;
          width: 18px;
          height: 18px;
          line-height: 18px;
          text-align: center;
        }
        .lv-icon-x:hover {
          color: #fff;
          background-color: gray;
          border-radius: 20px;
          cursor: pointer;
        }
      }
    }
    .item:hover {
      border-bottom: solid 1px #eee;
    }
  }

</style>