<!-- 
功能介绍：
1、 图片占位符
2、 图片预览
 -->

<template>
  <img class="wrap-img" :id="id" :src="imgInfo.src" :alt="alt" :width="width" :height="height" :style="preview?'cursor:pointer':''">
</template>

<script type="text/babel">
  import Viewer from '../viewer/viewer.min.js';

  export default {
    name: 'Img',
    data: function () {
      return {
        id: 'Img_' + new Date().getTime() + parseInt(Math.random() * 100),
        imgInfo: {
          src: this.defSrc
        },
        viewer: ''
      };
    },
    props: {
      alt: {
        default: ''
      },
      src: {
        default: ''
      },
      // 默认图片
      defSrc: {
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAEYUlEQVR4nO3dW0/iChRA4fn/v1Hu90tRB7m1hT0vpznIoCD2uNrTtZPvwZA01L0iWCD8emp1QqL8ou+Ams0AhTJAoQxQKAMUygCFMkChDFAoAxTKAIUyQKEMUCgDFMoAhTJAoQxQKAMUygCFMkChDFAoAxTKAIUyQKEMUCgDFMoAhTJAoQxQKAMUygCFMkChDFAoAxTKAIUyQKEMUCgDFMoAhTJAoQxQKAMUygCFMkChDFAoAxTKAIUyQKEMUCgDFMoAhTJAoQxQKAMUqtYBLpNVZFkWTZ00TWOZrPA9NDLAZbKi91+ZqXOEtQ2wyX/5LifLMnwfjQvwfBbLJEbjaaMslsm73wG9j0YHOBxN8Pvz04ajiQGSDNAAUQZogCgDNEBU2QFOp/PYbLaRpmnsdvtIklW0Oz38PD9igLAyA1yv3+LapGkWvf4AP9drDBBWVoDJjQva+/0eP9drDBBWVoB5nn8aYETEaDzFz/eSAcLKCLDXH96MLyIiqeBLXQYIM0ADRJUR4FPLh2Ba4wO8/U/IAT/XawwQVlaAT61OrN+uX4bJsix6/SF+rtcYIKzMAJ9aFxei9/tIVs9eiP4BBlhTBgirc4CTySzW67eYTGcPH8MAYXUNcDZfvLvv09n8oeMYIKyOAV7GFxFxOp1iPPn6ZR4DhNUtwGvxnUc4+uI5GCCsTgHOZh/HV8zxeIzBcHz3MQ0QVpcA74mvmDzPoz+477qjAcLqEOB0Nr87vmKyLIte7/Z7EA0QVvUAH4mvmDRNo9Ptf3p8A4RVOcDvxFfM4XD49JUYA4RVNcAy4itmt99/GKEBwr4b4PPLa+R5Hi+vr5WMr5jtdhetdtcAq+bRAFvt7l8fQnp+fqlkfMW8bTZ/RWiANQyw1e7GZrO9uuTZbPF4fNP/Lr5i1us3A6yS87knwHanF7vd/sMFn06nGI2//lD+E/EV8/r62wCr4nxuBdjp9uNwONxc8PF4/NIbUH8yvmJW/zxdMMCaBNjtDSJN07sXfM81uCK+0+lURlNfnmWyMkDa+XwUYH8wjOyODx1dzm53/T/PKsRXzO/1+t3P9D4M8OL24XAcx+Px4QVfPumvUnzXht6HAZ7dNhpPvxVfMcnq+d1xJ9NZJeOLMMDKBFh2JIvFMtqdXszni8rGF2GAlQhwPl8y26/A0PtofIBN/9oGeh+NDnC7vf7qRpOG3kejA3QM0ADhofdhgA0feh8G2PCh92GADR96HwbY8KH3YYANH3ofjQvQr2v9d/y6VkDTX/k4H7+wGozwkff7/V8my/Nax1f7AFV/BiiUAQplgEIZoFAGKJQBCmWAQhmgUAYolAEKZYBCGaBQBiiUAQplgEIZoFAGKJQBCmWAQhmgUAYolAEKZYBCGaBQBiiUAQplgEIZoFAGKJQBCmWAQhmgUAYolAEKZYBCGaBQBiiUAQplgEIZoFAGKJQBCmWAQhmgUAYolAEKZYBCGaBQBiiUAQplgEIZoFAGKNQf0xwBFxL2C00AAAAASUVORK5CYII='
      },
      // 错误图片
      errSrc: {
        default: 'data:image/png;base64,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'
      },
      width: {
        default: ''
      },
      height: {
        default: ''
      },
      // 自动原始宽高
      autoWh: {
        type: Boolean,
        default: false
      },
      // 预览功能
      preview: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      src: function (val, val2) {
        this.loadUrl();
      }
    },
    beforeDestroy: function () {
      this.viewer && this.viewer.destroy();
    },
    mounted: function () {
      this.loadUrl();
      this.initViewer();
      // // 监听页面图片加载错误
      // document.addEventListener('error', function (e) {
      //   var elem = e.target;
      //   if (elem.tagName.toLowerCase() === 'img') {
      //     elem.src = './images/img-default.png';
      //   }
      // }, true);
    },
    methods: {
      loadUrl: function () {
        var _this = this;

        if (this.src) {
          var img = new Image();

          img.src = this.src;
          img.onload = function () {
            // 图片加载完成
            _this.$set(_this.imgInfo, 'src', img.src);
            if (_this.autoWh) {
              _this.$set(_this.imgInfo, 'width', img.width);
              _this.$set(_this.imgInfo, 'height', img.height);
            }            
          };
          img.onerror = function () {
            _this.$set(_this.imgInfo, 'src', _this.errSrc);
          };
        }
      },
      initViewer: function () {
        if ((this.preview + '') === 'true') {
          var imgs = document.getElementById(this.id);
          
          this.viewer = new Viewer(imgs, Object.assign({
            inline: false,
            // 显示右上角关闭按钮（jQuery 版本无效）
            button: true, 
            // 显示缩略图导航
            navbar: true, 
            // 显示当前图片的标题（现实 alt 属性及图片尺寸）
            title: true, 
            // 显示工具栏
            toolbar: true, 
            // 显示缩放百分比
            tooltip: true, 
            // 图片是否可移动
            movable: true, 
            // 图片是否可缩放
            zoomable: true, 
            // 图片是否可旋转
            rotatable: true, 
            // 图片是否可翻转
            scalable: true, 
            // 使用 CSS3 过度
            transition: true, 
            // 播放时是否全屏
            fullscreen: true, 
            // 是否支持键盘
            keyboard: true, 
            // 播放间隔，单位为毫秒
            interval: 5000, 
            // 鼠标滚动时的缩放比例
            zoomRatio: 0.1, 
            // 最小缩放比例
            minZoomRatio: 0.01, 
            // 最大缩放比例
            maxZoomRatio: 100, 
            // 设置图片查看器 modal 模式时的 z-index
            zIndex: 2015, 
            // 设置图片查看器 inline 模式时的 z-index
            zIndexInline: 0, 
            // url 字符串/函数 src 设置大图片的 url
            build: function () {
              // 
            },
            built: function () {
              // 
            },
            show: function () {
              // 
            },
            shown: function () {
              // 
            },
            hide: function () {
              // 
            },
            hidden: function () {
              // 
            },
            view: function () {
              // 
            },
            viewed: function () {
              // 
            }
          }, this.opt));
        }
      }
    }
  };
</script>

<style lang="scss">
  .viewer-container,.viewer-navbar{background-color:#000;overflow:hidden}.viewer-canvas,.viewer-container,.viewer-footer,.viewer-player{right:0;bottom:0;left:0}.viewer-button,.viewer-canvas,.viewer-container,.viewer-footer,.viewer-list,.viewer-navbar,.viewer-open,.viewer-title,.viewer-toolbar,.viewer-toolbar>li{overflow:hidden}.viewer-close:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen-exit:before,.viewer-fullscreen:before,.viewer-next:before,.viewer-one-to-one:before,.viewer-play:before,.viewer-prev:before,.viewer-reset:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-zoom-in:before,.viewer-zoom-out:before{font-size:0;line-height:0;display:block;width:20px;height:20px;color:transparent;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAAUCAYAAABWOyJDAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAQPSURBVHic7Zs/iFxVFMa/0U2UaJGksUgnIVhYxVhpjDbZCBmLdAYECxsRFBTUamcXUiSNncgKQbSxsxH8gzAP3FU2jY0kKKJNiiiIghFlccnP4p3nPCdv3p9778vsLOcHB2bfveeb7955c3jvvNkBIMdxnD64a94GHMfZu3iBcRynN7zAOI7TG15gHCeeNUkr8zaxG2lbYDYsdgMbktBsP03jdQwljSXdtBhLOmtjowC9Mg9L+knSlcD8TNKpSA9lBpK2JF2VdDSR5n5J64m0qli399hNFMUlpshQii5jbXTbHGviB0nLNeNDSd9VO4A2UdB2fp+x0eCnaXxWXGA2X0au/3HgN9P4LFCjIANOJdrLr0zzZ+BEpNYDwKbpnQMeAw4m8HjQtM6Z9qa917zPQwFr3M5KgA6J5rTJCdFZJj9/lyvGhsDvwFNVuV2MhhjrK6b9bFiE+j1r87eBl4HDwCF7/U/k+ofAX5b/EXBv5JoLMuILzf3Ap6Z3EzgdqHMCuF7hcQf4HDgeoHnccncqdK/TvSDWffFXI/exICY/xZyqc6XLWF1UFZna4gJ7q8BsRvgd2/xXpo6P+D9dfT7PpECtA3cnWPM0GXGFZh/wgWltA+cDNC7X+AP4GzjZQe+k5dRxuYPeiuXU7e1qwLpDz7dFjXKRaSwuMLvAlG8zZlG+YmiK1HoFqT7wP2z+4Q45TfEGcMt01xLoNZEBTwRqD4BLpnMLeC1A41UmVxsXgXeBayV/Wx20rpTyrpnWRft7p6O/FdqzGrDukPNtkaMoMo3FBdBSQMOnYBCReyf05s126fU9ytfX98+mY54Kxnp7S9K3kj6U9KYdG0h6UdLbkh7poFXMfUnSOyVvL0h6VtIXHbS6nOP+s/Zm9mvyXW1uuC9ohZ72E9uDmXWLJOB1GxsH+DxPftsB8B6wlGDN02TAkxG6+4D3TWsbeC5CS8CDFce+AW500LhhOW2020TRjK3b21HEmgti9m0RonxbdMZeVzV+/4tF3cBpP7E9mKHNL5q8h5g0eYsCMQz0epq8gQrwMXAgcs0FGXGFRcB9wCemF9PkbYqM/Bas7fxLwNeJPdTdpo4itQti8lPMqTpXuozVRVXPpbHI3KkNTB1NfkL81j2mvhDp91HgV9MKuRIqrykj3WPq4rHyL+axj8/qGPmTqi6F9YDlHOvJU6oYcTsh/TYSzWmTE6JT19CtLTJt32D6CmHe0eQn1O8z5AXgT4sx4Vcu0/EQecMydB8z0hUWkTd2t4CrwNEePqMBcAR4mrBbwyXLPWJa8zrXmmLEhNBmfpkuY2102xxrih+pb+ieAb6vGhuA97UcJ5KR8gZ77K+99xxeYBzH6Q3/Z0fHcXrDC4zjOL3hBcZxnN74F+zlvXFWXF9PAAAAAElFTkSuQmCC);background-repeat:no-repeat}.viewer-zoom-in:before{content:'Zoom In';background-position:0 0}.viewer-zoom-out:before{content:'Zoom Out';background-position:-20px 0}.viewer-one-to-one:before{content:'One to One';background-position:-40px 0}.viewer-reset:before{content:'Reset';background-position:-60px 0}.viewer-prev:before{content:'Previous';background-position:-80px 0}.viewer-play:before{content:'Play';background-position:-100px 0}.viewer-next:before{content:'Next';background-position:-120px 0}.viewer-rotate-left:before{content:'Rotate Left';background-position:-140px 0}.viewer-rotate-right:before{content:'Rotate Right';background-position:-160px 0}.viewer-flip-horizontal:before{content:'Flip Horizontal';background-position:-180px 0}.viewer-flip-vertical:before{content:'Flip Vertical';background-position:-200px 0}.viewer-fullscreen:before{content:'Enter Full Screen';background-position:-220px 0}.viewer-fullscreen-exit:before{content:'Exit Full Screen';background-position:-240px 0}.viewer-close:before{content:'Close';background-position:-260px 0}.viewer-container{font-size:0;line-height:0;position:absolute;top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,.5);direction:ltr!important;-ms-touch-action:none;touch-action:none;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none}.viewer-container ::-moz-selection,.viewer-container::-moz-selection{background-color:transparent}.viewer-container ::selection,.viewer-container::selection{background-color:transparent}.viewer-container img{display:block;width:100%;min-width:0!important;max-width:none!important;height:auto;min-height:0!important;max-height:none!important}.viewer-player,.viewer-tooltip{display:none;position:absolute}.viewer-canvas{position:absolute;top:0}.viewer-canvas>img{width:auto;max-width:90%!important;height:auto;margin:15px auto}.viewer-footer{position:absolute;text-align:center}.viewer-navbar{background-color:rgba(0,0,0,.5)}.viewer-list{-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;height:50px;margin:0;padding:1px 0}.viewer-list>li{font-size:0;line-height:0;float:left;overflow:hidden;width:30px;height:50px;cursor:pointer;opacity:.5;color:transparent;filter:alpha(opacity=50)}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-active{opacity:1;filter:alpha(opacity=100)}.viewer-player{top:0;cursor:none;background-color:#000}.viewer-player>img{position:absolute;top:0;left:0}.viewer-toolbar{width:280px;margin:0 auto 5px;padding:3px 0}.viewer-toolbar>li{float:left;width:24px;height:24px;cursor:pointer;border-radius:50%;background-color:#000;background-color:rgba(0,0,0,.5)}.viewer-toolbar>li:hover{background-color:#000;background-color:rgba(0,0,0,.8)}.viewer-toolbar>li:before{margin:2px}.viewer-toolbar>li+li{margin-left:1px}.viewer-toolbar>.viewer-play{width:30px;height:30px;margin-top:-3px;margin-bottom:-3px}.viewer-toolbar>.viewer-play:before{margin:5px}.viewer-tooltip{font-size:12px;line-height:20px;top:50%;left:50%;width:50px;height:20px;margin-top:-10px;margin-left:-25px;text-align:center;color:#fff;border-radius:10px;background-color:#000;background-color:rgba(0,0,0,.8)}
  .viewer-title{height:18px;font-size:12px;line-height:1;display:inline-block;max-width:90%;margin:0 5% 5px;white-space:nowrap;text-overflow:ellipsis;opacity:.8;color:#fff;filter:alpha(opacity=80)}
  .viewer-title:hover{opacity:1;filter:alpha(opacity=100)}.viewer-button{position:absolute;top:-40px;right:-40px;width:80px;height:80px;cursor:pointer;border-radius:50%;background-color:#000;background-color:rgba(0,0,0,.5)}.viewer-button:before{position:absolute;bottom:15px;left:15px}.viewer-fixed{position:fixed}.viewer-show{display:block}.viewer-hide{display:none}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.viewer-fade{opacity:0;filter:alpha(opacity=0)}.viewer-in{opacity:1;filter:alpha(opacity=100)}.viewer-transition{-webkit-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out}@media (max-width:767px){.viewer-hide-xs-down{display:none}}@media (max-width:991px){.viewer-hide-sm-down{display:none}}@media (max-width:1199px){.viewer-hide-md-down{display:none}}
</style>
<style scoped lang="scss">
  .wrap-img {}
</style>