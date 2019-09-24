<!-- 
功能介绍：
1、
 -->

<template>
  <vperfect-scrollbar class="scroll-sidenar" :settings="settings">
    <dl class="wrap-sidenar" :id="id">
      <template v-for="(item,index) in plist">
        <dt :key="'pt_'+index" @click="clkDt(item,index)">
          <slot name="item" :item="item">{{item.title}}</slot>
          <i class="cicon-arrow-bottom arrow" :class="{'show':item.show}" v-if="item.children&&item.children.length"></i>
        </dt>
        <template v-for="(citem,cindex) in item.children">
          <dd :key="'cld_'+cindex" :class="{'show':item.show,'theme-c':$route.name===citem.path}" :style="{'animation-delay': 0.04*(cindex+1)+'s'}">
            <slot name="item" :item="citem">{{citem.title}}</slot>
          </dd>
        </template>
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
          return [
            {
              title: '开始',
              children: [
                { title: '快速上手', path: 'start' },
                { title: '更新日志', path: 'log' }
              ]
            },
            {
              title: '全局组件',
              children: [
                { title: '全局设置', path: 'theme' },
                { title: '文本大小', path: 'font' },
                { title: '图标', path: 'cicon' },
                { title: '确认框', path: 'confirm' },
                { title: '加载中', path: 'loading' },
                { title: '提示框', path: 'tip' }
              ]
            },
            {
              title: '表单组件',
              children: [
                { title: '按钮', path: 'button' },
                { title: '输入框', path: 'input' },
                { title: '单选框', path: 'radio' },
                { title: '复选框', path: 'checkbox' },
                { title: '开关', path: 'swith' },
                { title: '下拉框', path: 'dropmenu' },
                { title: '日期选择器', path: 'datepicker' },
                { title: '文本域', path: 'textarea' }
              ]
            },
            {
              title: '组件',
              children: [
                { title: '表格', path: 'table' },
                { title: '滑块', path: 'slider' },
                { title: '菜单', path: 'menu' },
                { title: '进度条', path: 'progress' },
                { title: 'title提示', path: 'tooltip' },
                { title: '区域菜单', path: 'rangemenu' },
                { title: '侧边栏', path: 'sidebar' },
                { title: '图片', path: 'img' },
                { title: '穿梭框', path: 'shuttle' },
                { title: '分页工具', path: 'pagebar' },
                { title: '富文本编辑器', path: 'editor' },
                { title: '加载更多', path: 'loadmore' },
                { title: '侧边导航', path: 'sidenav' }
              ]
            }
          ];
        }
      },
      // 是否可以展开多个
      showMult: {
        default: true
      }
    },
    data: function () {
      return {
        id: 'sidenar_' + new Date().getTime() + parseInt(Math.random() * 100),
        settings: {
          wheelSpeed: 0.5
        },
        plist: this.list,
        showIndex: ''
      };
    },
    watch: {
      list (val) {
        this.plist = val;
      },
      $route: function (to, from) {
        console.log(from, to);
        var name = to.name;

        if (name === 'secretKey' || name === 'spaceFile' || name === 'fileRecycle') {
          name = 'objectSpace';
        }
        this.routePath = name;
        this.funSetNavActiveByRoute();
      }
    },
    mounted: function () {
      console.log(this.$route);
    },
    methods: {
      clkDt (info, index) {
        if (!this.showMult && this.showIndex !== '' && this.showIndex !== index) {
          // 关闭其他子层
          this.$set(this.plist[this.showIndex], 'show', false);
        }
        if (info.children && info.children.length) {
          // 显示隐藏子层
          this.showIndex = info.show ? '' : index;
          this.$set(info, 'show', !info.show);
        } else {
          this.clkItem(info);
        }
      },
      clkItem (info) {
        this.$emit('click', info);
      }
    }
  };
</script>

<style scoped lang="scss">

  @keyframes dshow {
    
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .scroll-sidenar {
    width: 100%;
    height: 100%;
  }
  .wrap-sidenar {
    padding: 10px;
    padding-left: 20px;
    user-select: none;
    overflow: hidden;

    > dt, > dd {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      > .arrow {
        font-size: 16px;
        transition: all 0.4s;
      }
      > .arrow.show {
        transform: rotate(270deg);
      }
    }
    > dd {
      display: none;
      padding-left: 20px;
      opacity: 0;
      transform: translateX(50px);
    }
    > dd.show {
      display: block;
      animation: dshow 0.1s forwards;
    }
  }
</style>