<!-- 
功能介绍：
1、
 -->

<template>
  <vperfect-scrollbar class="scroll-sidenar" :settings="settings">
    <dl class="wrap-sidenar" :id="id">
      <template v-for="(item,index) in list">
        <dt :key="'pt_'+index" :class="{'open':openIndexList.indexOf(index)>-1,'active theme-c':$route.path===item.path}" @click="toggle(index)">
          <slot name="item" :item="item">{{item.title}}</slot>
          <i class="cicon-arrow-bottom arrow" v-if="item.children&&item.children.length&&!hideArrow"></i>
        </dt>
        <div :key="'dpt_'+index" :ref="'dpt_'+index">
          <dd v-for="(citem,cindex) in item.children" :key="'cld_'+cindex" :class="{'active theme-c':$route.path===citem.path}">
            <slot name="item" :item="citem">{{citem.title}}</slot>
          </dd>
        </div>
      </template>
    </dl>
  </vperfect-scrollbar>
</template>

<script type="text/babel">
  import VuePerfectScrollbar from 'vue-perfect-scrollbar';

  export default {
    name: 'Sidenar',
    components: {
      'vperfect-scrollbar': VuePerfectScrollbar
    },
    props: {
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      // 是否可以展开多个
      showMult: {
        default: true
      },
      // 是否展开所有
      showAll: {
        default: false
      },
      // 隐藏箭头
      hideArrow: {
        default: false
      }
    },
    data: function () {
      return {
        id: 'sidenar_' + new Date().getTime() + parseInt(Math.random() * 100),
        settings: {
          wheelSpeed: 0.5
        },
        openIndexList: []
      };
    },
    watch: {
      $route: function (to, from) {
        this.watchRoute();
      }
    },
    mounted: function () {
      this.watchRoute();
      if (this.showMult && this.showAll) {
        // 显示所有子项
        this.openIndexList = (function (_this) {
          var arr = [];
          
          _this.list.forEach(function (element, index) {
            arr.push(index);
          });
          return arr;
        }(this));
      }
    },
    methods: {
      toggle: function (index, from) {
        if (index >= 0) {
          var _index = this.openIndexList.indexOf(index);

          if (_index === -1) {
            if (!this.showMult) {
              this.openIndexList = [];
            }
            this.openIndexList.push(index);
          } else if (!from) {
            // 如果是路由过来的，不处理
            this.openIndexList.splice(_index, 1);
          }
        }
      },
      watchRoute: function () {
        var result = '';
        var rpath = this.$route.path;

        for (var i = 0;i < this.list.length;i++) {
          var item = this.list[i];

          if (JSON.stringify(item).indexOf(rpath) > -1) {
            result = i;
            break;
          }
        }
        this.toggle(result, 'route');
      }
    }
  };
</script>

<style lang="scss">
  .wrap-sidenar {
    dt, dd {
      > *:not(.arrow) {
        flex: 1;
      }
    }
    [class^=cicon-arrow]:before, [class^=cicon-dbarrow]:before, [class^=cicon-dbarrow]:after {
      border-width: 1px;
    }
  }
</style>
<style scoped lang="scss">
  .scroll-sidenar {
    width: 100%;
    height: 100%;
  }
  .wrap-sidenar {
    padding: 10px;
    padding-left: 20px;
    user-select: none;
    overflow: hidden;

    dt, dd {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      line-height: 28px;
      cursor: pointer;

      > .arrow {
        font-size: 16px;
        transition: all 0.3s;
      }
    }
    dd {
      padding-left: 20px;
    }

    dt + div {
      max-height: 0;
      overflow: hidden;
      transition: all .3s ease-in-out;
    }
    dt.open + div {
      max-height: 1000px;
    }
    dt.open > .arrow {
      transform: rotate(270deg);
    }
  }
</style>