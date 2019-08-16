<template>
  <div class="wrap">
    LOGIN
    <button @click="stip">tip</button>|
    <button @click="sload">load</button>|
    <button @click="sconfirm">confirm</button>|
    <button @click="sprompt">prompt</button>|
    <cmp-button @click="login">登录</cmp-button>|
    {{JSON.stringify(user)}}
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import {Button} from 'web-base-ui';
  
  export default {
    name: 'Login',
    components: {
      cmpButton: Button
    },
    data () {
      return {
        // 
      };
    },
    computed: {
      ...mapState(['user'])
    },
    mounted: function () {
      let _this = this;

      console.log(this.$store.state.user);      
      setTimeout(() => {
        _this.$store.commit('setAge');
      }, 3000);
    },
    methods: {
      login: function () {
        this.$root.toPage('', 1);
      },
      stip: function () {
        this.$tip({ show: true, text: '提示内容', theme: 'warning' });
      },
      sload: function () {
        this.$loading({ show: true, text: ' 加载中...', modal: true });
      },
      sconfirm: function () {
        var _this = this;

        this.$confirm({
          show: true,
          modal: true,
          heading: '提示',
          content: ' 确定删除？',
          type: 'warning',
          stl: {
            header: {
              // left|center
              'text-align': 'left'
            },
            section: {
              // left|center|right
              'text-align': 'center'
            },
            footer: {
              // left|center|right
              'text-align': 'center'
            }
          },
          buttons: [{
            text: '取消1',
            theme: 'line'
          }, {
            text: '确定2',
            theme: 'primary'
          }],
          callback: function (data) {
            _this.$confirm({ show: false });
          }
        });
      },
      sprompt: function () {
        var _this = this;
        
        this.$prompt({
          show: true,
          modal: true,
          heading: '自定义标题1',
          placeholder: '请输入姓名',
          stl: {
            footer: {
              // left|center|right
              'text-align': 'right'
            }
          },
          buttons: [{
            text: '取消2',
            theme: 'line'
          }, {
            text: '确定3',
            theme: 'primary'
          }],
          callback: function (data) {
            _this.$prompt({ show: false });
            console.log('======Prompt callback22=====');
            console.log(data);
          }
        });
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .wrap {
    // 
  }

</style>
