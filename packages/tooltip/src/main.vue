<!--
功能介绍：
1、自定义提示内容 - text, 支持HTML
 -->

<script type="text/babel">
  import tippy, {followCursor} from 'tippy.js';
  // import tippy from 'tippy.js';

  export default {
    name: 'Tooltip',
    data: function () {
      return {
        id: 'tooltip_' + new Date().getTime() + parseInt(Math.random() * 100),
        // 目标元素对象
        slotDom: {}
      };
    },
    props: {
      text: '',
      // 主题 light-border|translucent
      theme: {
        default: 'translucent'
      },
      // 是否显示箭头
      arrow: {
        type: Boolean,
        default: true
      },
      // 是否跟随鼠标
      followCursor: {
        type: Boolean,
        default: false
      },
      // 是否允许html代码
      allowHTML: {
        type: Boolean,
        default: true
      }
    },
    // 1、构造目标元素 并 获取目标元素长、宽、相对位置left、top
    render: function (createElement) {
      let dom = (function (children) {
        return children && children.filter(function (c) {
          return c && c.tag;
        })[0];
      }(this.$slots.default));

      this.$nextTick(function () {
        if (dom.elm) {
          console.log('==this.allowHTML==', this.allowHTML);
          var option = {
            arrow: this.arrow,
            // fade|shift-away|shift-toward|scale|perspective
            animation: 'scale',
            allowHTML: this.allowHTML,
            // light|light-border|material|translucent
            interactive: true,
            theme: this.theme,
            content: this.text
            // plugins: [followCursor]
          };
          
          option.followCursor = this.followCursor;
          if (this.followCursor) {
            option.plugins = [followCursor];
          }
          tippy(dom.elm, option);
          this.slotDom = { dom: dom.elm };
        }
      });
      return dom;
    }
  };
</script>

<style>
  @import url('tippy.js/dist/tippy.css');
  @import url('tippy.js/themes/light-border.css');
  @import url('tippy.js/animations/scale.css');
</style>