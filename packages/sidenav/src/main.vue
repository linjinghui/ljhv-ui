<!-- 
功能介绍：
{
  icon, title, path, children
}-->

<template>
  <div class="sidenar" :class="{'mix':mix}" :id="id" :style="{'color':color}" @click="turnOffThree">
    <vperfect-scrollbar class="level-main" :settings="settings" :style="{'backgroundColor':background}">
      <ul>
        <template v-for="item in list">
          <li class="v-center" :key="item.title" :class="{'open':item.open,'active theme-b':currentPath===item.path}" @click.stop="clkItem(item,1)">
            <div class="v-center">
              <i v-if="item.icon" class="theme-c" :class="item.icon" :style="{'color':iconColor}"></i>
              {{item.title}}
            </div>
            <i v-if="item.children&&item.children.length>0" class="lv-icon-arrow-bottom"></i>
          </li>
          <!-- 二级 -->
          <ul :key="item.title+'_sub_ul'" v-if="item.children&&item.children.length>0" :style="{'maxHeight':item.open?(item.children.length*itemHeight+'px'):0}">
            <li class="v-center" v-for="subItem in item.children" :key="subItem.title+'_sub_li'" :class="{'open':subItem.open,'active theme-b':currentPath===subItem.path}" @click.stop="clkItem(subItem,2)">
              <div class="v-center">
                <i v-if="subItem.icon" class="theme-c" :class="subItem.icon" :style="{'color':iconColor}"></i>
                {{subItem.title}}
              </div>
              <i v-if="subItem.children&&subItem.children.length>0" class="lv-icon-arrow-right"></i>
            </li>
          </ul>
        </template>
      </ul>
    </vperfect-scrollbar>
    <!-- 三级 -->
    <vperfect-scrollbar class="level-three" :settings="settings" v-if="currentItem&&currentItem.children&&currentItem.children.length>0" :class="{'show':showThreeList}">
      <ul>
        <li class="v-center" v-for="item in currentItem.children" :key="item.title+'_three_li'" :class="{'open':item.open,'active theme-b':currentPath===item.path}" @click.stop="clkItem(item,3)">
          <div class="v-center">
            <i v-if="item.icon" class="theme-c" :class="item.icon" :style="{'color':iconColor}"></i>
            {{item.title}}
          </div>
        </li>
      </ul>
      <i class="lv-icon-list-l" @click="turnOffThree"></i>
    </vperfect-scrollbar>
    <!-- 最小化开关 -->
    <i class="swith lv-icon-list-l theme-b" v-if="showMix" @click="mix=!mix"></i>
  </div>
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
      // 是否展开所有
      openAll: {
        type: Boolean,
        default: false
      },
      // 显示箭头
      showArrow: {
        type: Boolean,
        default: true
      },
      // 显示最小化按钮
      showMix: {
        type: Boolean,
        default: true
      },
      // 跳转类型 hash|href
      type: {
        default: 'hash'
      },
      // 是否继承地址栏参数
      forward: {
        type: Boolean,
        default: false
      },
      // 文本色
      color: {
        default: ''
      },
      // 背景色
      background: {
        default: ''
      },
      // 图标颜色
      iconColor: {
        default: ''
      }
    },
    data: function () {
      return {
        id: 'sidenar_' + new Date().getTime() + parseInt(Math.random() * 100),
        settings: {
          wheelSpeed: 0.5
        },
        // 显示、隐藏第三层
        showThreeList: '',
        // 行高
        itemHeight: 0,
        // 当前选中的二级项
        currentItem: '',
        // 最小化显示
        mix: false
      };
    },
    computed: {
      // 当前路由地址
      currentPath: function () {
        return this.$route.path;
      }
    },
    watch: {
      $route: function (to, from) {
        this.openNodeByRoute();
      }
    },
    mounted: function () {
      this.getItemHeight();
      this.openNodeByRoute();
    },
    methods: {
      // 行点击
      clkItem: function (data, level) {
        this.mix = false;
        if (data.children && data.children.length > 0) {
          this.$set(data, 'open', !data.open);
        }

        if (level === 2) {
          if (data.open && data.children && data.children.length > 0) {
            this.turnOnThree(data);
          } else {
            this.turnOffThree();
          }
        }

        if (data.path) {
          var paramstr = location.href.split('?')[1];
          var pth = data.path;

          if (this.forward && paramstr) {
            pth += '?' + paramstr;
          }
          if (this.type === 'href') {
            location.href = pth;
          } else {
            location.hash = pth;
          }
        }
      },
      // 获取行高
      getItemHeight: function () {
        var dom = document.getElementById(this.id);
        var li = dom && dom.querySelector('li');

        this.itemHeight = li ? li.offsetHeight : 0;
      },
      // 显示第三层
      turnOnThree: function (data) {
        this.currentItem = data;
        this.$nextTick(function () {
          // 显示第三层
          this.showThreeList = true;
          // 箭头开启
          this.currentItem && (this.currentItem.open = true);
        });
      },
      // 关闭第三层
      turnOffThree: function () {
        var _this = this;

        // 隐藏第三层
        this.showThreeList = false;
        // 箭头关闭
        this.currentItem && (this.currentItem.open = false);
        // 当前节点数据清空
        setTimeout(function () {
          _this.currentItem = '';
        }, 300);
      },
      // 根据路由打开对应的节点
      openNodeByRoute: function () {
        for (var index = 0;index < this.list.length;index++) {
          var element = this.list[index];

          if (JSON.stringify(element.children).indexOf(this.currentPath) >= 0) {
            this.$set(element, 'open', true);
            if (element.children && element.children.length > 0) {
              for (var i = 0;i < element.children.length;i++) {
                var item = element.children[i];

                if (item.children && JSON.stringify(item.children).indexOf(this.currentPath) >= 0) {
                  this.$set(item, 'open', true);
                  break;
                }
              }
            }
            break;
          }
        } 
      }
    }
  };
</script>

<style scoped lang="scss">
  .v-center {
    display: flex;
    flex-shrink: 0;
    align-items: center;
  }

  .sidenar {
    position: relative;
    width: 100%;
    height: 100%;
    line-height: initial;
    font-size: 14px;
    user-select: none;
    transition: width .2s;
  }
  .level-main,
  .level-three {
    width: 100%;
    height: 100%;

    > ul {
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .level-main {
    position: relative;
    z-index: 2;
  }

  li {
    padding: 10px;
    cursor: pointer;

    > div {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      > i {
        margin-right: 6px;
        width: 20px;
        height: 20px;
        font-size: 18px;
        line-height: 20px;
        text-align: center;
      }
    }
    > i {
      margin-left: 10px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      text-align: center;
      transition: transform .2s;
    }
  }
  li.open > i {
    transform: rotateZ(180deg);
  }
  li.active > div > i {
    color: inherit;
  }
  li:not(.active):not([disabled]):hover {
    background-color: rgba(248, 248, 248, 0.2);
  }

  ul > ul {
    transition: all .2s;
    overflow: hidden;

    > li {
      padding-left: 36px;
    }
    > li.open {
      color: #555;
      background-color: #d8d8d8;

      > div > i {
        color: inherit;
      }
    }
  }

  // 三级
  .level-three {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: left .3s;
    color: #666;
    background-color: #d8d8d8;

    .lv-icon-list-l {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      padding-left: 2px;
      width: 22px;
      height: 22px;
      font-size: 22px;
      text-align: right;
      cursor: pointer;
      overflow: hidden;
    }
  }
  .level-three.show {
    left: 100%;
  }

  // 最小化开关
  .swith {
    position: absolute;
    top: 0;
    right: -40px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
  }
  .swith:before {
    display: block;
    transition: transform .3s;
  }
  .swith:hover {
    opacity: .9;
  }

  // 最小化显示
  .sidenar.mix {
    width: 0px;

    ul > ul,
    .lv-icon-arrow-bottom,
    .lv-icon-arrow-right {
      display: none;
    }
    
    .swith:before {
      transform: rotateZ(180deg);
    }
  }
</style>