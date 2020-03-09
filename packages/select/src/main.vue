<!-- 
功能介绍：
 -->

<script type="text/babel">
  export default {
    name: 'Select',
    data: function () {
      return {
        id: 'select_' + new Date().getTime() + parseInt(Math.random() * 100),
        slotDom: '',
        memu: ''
      };
    },
    props: {
      width: {
        default: 120
      },
      list: {
        type: Boolean,
        default: function () {
          return [];
        }
      },
      // 触发方式 click|hover
      trigger: {
        default: 'click'
      }
    },
    beforeDestroy: function () {
      this.removMenu();
      document.removeEventListener('click', this.removMenu);
    },
    mounted: function () {
      var _this = this;

      document.addEventListener('click', this.removMenu);
      window.onresize = function () {
        _this.removMenu();
      };
    },
    methods: {
      // 创建选择器代码
      creatMenu: function (top, left) {
        var _this = this;
        var menu = document.createElement('ul');
        var html = '<i class="arrow" style="top:' + (top - 8 + 1) + 'px;left:' + (left + (this.width - 16) / 2) + 'px;"></i>';

        menu.className = 'wrap-select';
        menu.style.width = this.width + 'px';
        menu.style.top = top + 'px';
        menu.style.left = left + 'px';
        this.list.forEach(element => {
          html += '<li>' + (element.icon ? '<i class="' + element.icon + '"></i>' : '') + element.name + '</li>';
        });
        menu.innerHTML = html;
        menu.addEventListener('click', function (event) {
          var e = event || window.event;
          var index = [].indexOf.call(e.target.parentNode.childNodes, e.target);

          _this.$emit('click', _this.list[index]);
        });
        return menu;
      },
      insertMenu: function (dom, menu, menuTop, menuLeft) {
        if (!document.querySelector('.wrap-select')) {
          if (menuLeft + this.width > document.body.clientWidth - 5) {
            // 超出屏幕宽度
            menu.style.left = document.body.clientWidth - 5 - this.width + 'px';
          }
          dom.parentNode.insertBefore(menu, dom);
          this.memu = menu;
        }
      },
      removMenu: function () {
        this.memu && this.memu.remove();
      }
    },
    render: function (createElement) {
      var dom = (function (children) {
        return children && children.filter(function (c) {
          return c && c.tag;
        })[0];
      }(this.$slots.default));

      this.$nextTick(function () {
        if (dom.elm) {
          var _this = this;

          dom.elm.addEventListener(this.trigger === 'hover' ? 'mouseover' : 'click', function (event) {
            var box = dom.elm.getBoundingClientRect();
            var menuLeft = box.left + dom.elm.offsetWidth / 2 - _this.width / 2;
            var menuTop = box.top + dom.elm.offsetHeight + 14;
            
            (event || window.event).stopPropagation();
            _this.insertMenu(dom.elm, _this.creatMenu(menuTop, menuLeft), menuTop, menuLeft);
          });

          this.slotDom = { dom: dom.elm };
        }
      });

      return dom;
    }
  };
</script>

<style lang="scss">
  .wrap-select {
    position: fixed;
    top: 500px;
    left: 500px;
    padding: 5px 0;
    width: 140px;
    border: solid 1px #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #fff;
    line-height: initial;
    z-index: 5;

    > li {
      padding: 4px 10px;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      cursor: pointer;
    }
    > li:hover {
      background-color: #f5f7fa;
    }

    > .arrow {
      position: fixed;
      width: 0px;
      height: 0px;
      border: solid 8px transparent;
      border-top: 0;
      border-bottom-color: #999;
    }
    > .arrow:after {
      content: '';
      position: absolute;
      left: -8px;
      top: 0;
      width: 0px;
      height: 0px;
      border: solid 8px transparent;
      border-top: 0;
      border-bottom-color: #fff;
    }
  }
</style>