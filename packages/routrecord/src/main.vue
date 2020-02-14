<!-- 
功能介绍：
监听、记录 route路由 记录
 -->

<template>
  <ul class="rout-record" :id="id">
    <div class="context-menu" v-if="showMenu" :style="{'top':mouse.y,'left':mouse.x}">
      <a @click="clkMenu('current')">关闭</a>
      <a @click="clkMenu('other')">关闭其他</a>
      <a @click="clkMenu('left')" v-if="rclickIndex>0">关闭左侧</a>
      <a @click="clkMenu('right')" v-if="rclickIndex<list.length-1">关闭右侧</a>
    </div>
    <li v-for="(item,index) in list" :key="item.name+'_'+index" :class="{'active theme-b':currentPath===item.path}" @click="jump(item)" @click.middle.prevent.stop="clkMiddle(index)" @contextmenu.prevent="rclick($event,index)">
      <i class="point" v-if="currentPath===item.path"></i>
      {{item.name}}
      <i class="lv-icon-x" v-if="list.length>1&&currentPath===item.path" @click.stop="clkRemove(index)"></i>
    </li>
  </ul>
</template>

<script type="text/babel">
  export default {
    name: 'Routrecord',
    data: function () {
      return {
        id: 'routrecord_' + new Date().getTime() + parseInt(Math.random() * 100),
        list: [],
        showMenu: false,
        mouse: { x: 0, y: 0 },
        rclickIndex: ''
      };
    },
    props: {
      value: {
        default: ''
      }
    },
    watch: {
      $route: function (to, from) {
        this.pushList();
      }
    },
    computed: {
      // 当前路由地址
      currentPath: function () {
        return this.$route.path;
      }
    },
    beforeDestroy: function () {
      document.removeEventListener('click', this.hideMenu);
    },
    mounted: function () {
      document.addEventListener('click', this.hideMenu);
      this.pushList();
    },
    methods: {
      pushList: function () {
        if (JSON.stringify(this.list).indexOf(this.$route.name) === -1) {
          this.list.push({
            name: this.$route.name,
            path: this.$route.path,
            hash: this.$route.hash,
            fullPath: this.$route.fullPath,
            query: this.$route.query
          });
        }
      },
      jump: function (data) {
        location.hash = data.path;
      },
      clkRemove: function (index) {
        var data = this.list[index + 1] || this.list[index - 1];

        this.list.splice(index, 1);
        if (data) {
          this.jump(data);
        }
      },
      rclick: function (event, index) {
        if (this.list.length > 1) {
          var e = event || window.event;

          this.mouse.x = e.clientX + 10 + 'px';
          this.mouse.y = e.clientY + 10 + 'px';
          this.showMenu = true;
          this.rclickIndex = index;
        }
      },
      hideMenu: function () {
        this.showMenu = false;
      },
      clkMiddle: function (index) {
        if (this.list.length > 1) {
          this.rclickIndex = index;
          this.clkMenu('current');
        }
      },
      // 右键弹窗项点击
      clkMenu: function (type) {
        if (type === 'current') {
          // 删除当前
          this.list.splice(this.rclickIndex, 1);
        } else if (type === 'other') {
          // 删除其他
          this.list = [this.list[this.rclickIndex]];
        } else if (type === 'left') {
          // 删除左侧
          this.list.splice(0, this.rclickIndex);
        } else if (type === 'right') {
          // 删除右侧
          this.list.splice(this.rclickIndex + 1, this.list.length - 1);
        }
        if (JSON.stringify(this.list).indexOf('"' + this.currentPath + '"') === -1) {
          this.jump(this.list[this.list.length - 1]);
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .rout-record {
    position: relative;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    line-height: initial;
    user-select: none;

    > li {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      margin-right: 5px;
      padding: 6px 10px;
      border: solid 1px #ddd;
      border-radius: 2px;
      cursor: pointer;
      transition: all .3s;

      > .point {
        display: block;
        margin-right: 5px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #fff;
      }

      > .lv-icon-x {
        display: block;
        margin-left: 5px;
        width: 16px;
        height: 16px;
        font-size: 16px;
        border-radius: 50%;
      }
      > .lv-icon-x:hover {
        color: #666;
        background-color: #fff;
      }
    }
    > li.active {
      border: solid 1px transparent;
    }

    .context-menu {
      position: fixed;
      top: 0;
      left: 0;
      padding: 5px 0;
      width: 100px;
      border: solid 1px #e4e7ed;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      background-color: #fff;
      font-size: 12px;
      overflow: hidden;
      z-index: 5;

      > a {
        display: block;
        padding: 4px 10px;
        cursor: pointer;
      }
      > a:hover {
        background-color: #eee;
      }
    }
  }
</style>