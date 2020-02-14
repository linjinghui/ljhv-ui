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
      document.addEventListener('click', this.removMenu);
    },
    methods: {
      // 创建选择器代码
      creatMenu: function (top, left) {
        var _this = this;
        var menu = document.createElement('ul');
        var html = '';

        menu.className = 'wrap-select';
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
      insertMenu: function (dom, menu) {
        if (!document.querySelector('.wrap-select')) {
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
          var box = dom.elm.getBoundingClientRect();

          dom.elm.addEventListener(this.trigger === 'hover' ? 'mouseover' : 'click', function (event) {
            (event || window.event).stopPropagation();
            _this.insertMenu(dom.elm, _this.creatMenu(box.top + dom.elm.offsetHeight * 2, box.left + dom.elm.offsetWidth / 2 - 140 / 2));
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
  }
  .wrap-select:before,
  .wrap-select:after {
    content: '';
    position: absolute;
    top: -8px;
    left: 0;
    right: 0;
    margin: auto;
    width: 0px;
    height: 0px;
    border: solid 8px transparent;
    border-top: 0;
    border-bottom-color: #999;
    z-index: 2;
  }
  .wrap-select:after {
    border-bottom-color: #fff;
  }
</style>