<template>
  <div class="wrap page-home">
    <header>
      <h1>LJHV-UI 使用文档</h1>
    </header>
    <nav>
      <dl v-for="(item,index) in navData" :key="'nav_'+index">
        <dt><h4>{{item.title}}</h4></dt>
        <dd v-for="(citem,index) in item.children" :key="'nav_c_'+index" :class="{'theme-c':$route.name===citem.path}">
          <router-link :to="citem.path">{{citem.title}}</router-link>
        </dd>
      </dl>
    </nav>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  // import {Button} from 'web-base-ui';
  
  export default {
    name: 'Index',
    components: {
      // cmpButton: Button
    },
    data () {
      return {
        navData: [
          {
            title: '开始',
            children: [
              { title: '快速上手', path: 'start' },
              { title: '更新日志', path: 'log' }
            ]
          },
          {
            title: '组件',
            children: [
              { title: '全局设置', path: 'theme' },
              { title: '文本大小', path: 'font' },
              { title: '按钮', path: 'button' },
              { title: '图标', path: 'cicon' },
              { title: '输入框', path: 'input' },
              { title: '单选框', path: 'radio' },
              { title: '复选框', path: 'checkbox' },
              { title: '开关', path: 'swith' },
              { title: '滑块-test', path: 'slider' },
              { title: '菜单', path: 'menu' }
            ]
          }
        ]
      };
    },
    watch: {
      $route (to, from) {
        console.log(to.name);
        console.log(from);
      }
    },
    mounted: function () {
      // 
    },
    methods: {}
  };
</script>

<style lang="scss">
  .page-home > section > div {
    > dl {
      margin-top: 20px;
      line-height: 28px;
      
      > dd {
        padding-left: 20px;
      }

      > .example {
        position: relative;
        display: flex;
        flex-shrink: 0;

        > section {
          flex: 1;
          border: solid 1px #eee;
        }
      }
    }
  }
</style>
<style scoped lang="scss">
  .page-home {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;

    > header {
      padding-left: 20px;
      height: 60px;
      line-height: 60px;
      border-bottom: solid 1px #eee;
      background-color: #fff;
    }

    > nav {
      float: left;
      padding-left: 20px;
      width: 220px;
      height: calc(100% - 60px);
      line-height: 28px;

      > dl {
        margin-top: 10px;
        > dd {
          padding-left: 10px;
          cursor: pointer;
        }
      }
    }

    > section {
      float: left;
      width: calc(100% - 220px);
      height: calc(100% - 60px);
      background-color: #fff;
      overflow: auto;
      color: #666;
    }
    > section > div {
      padding: 20px;
    }
  }
</style>