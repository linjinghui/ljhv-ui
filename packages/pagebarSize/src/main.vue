<template>
  <div class="wrapper-pagebar-pagesize">
    显示
    <cmp-drop-menu v-model="optionDropMenu.result" v-bind="optionDropMenu" :data="pageSizes" @cbkClkItem="cbkClkItem"></cmp-drop-menu>
    条
    <span></span>
    <cmp-pagebar v-model="pindex" :theme="theme" :lenth="lenth" :pageSize="pageSizes[optionDropMenu.result[0]]" :totalSize="totalSize" @callback="callback"></cmp-pagebar>
  </div>
</template>

<script type="text/babel">
  import Pagebar from '../../pagebar/src/main.vue';
  import DropMenu from '../../dropMenu/src/main.vue';

  export default {
    name: 'PagebarPagesize',
    components: {
      'cmpPagebar': Pagebar,
      'cmpDropMenu': DropMenu
    },
    data: function () {
      return {
        optionDropMenu: {
          placeholder: '',
          show: true,
          multi: false,
          disabled: false,
          readonly: true,
          result: [0]
        },
        pindex: this.value
      };
    },
    props: {
      'value': {
        default: ''
      },
      // simple
      'theme': {
        default: ''
      },
      'lenth': {
        default: 5
      },
      // 'index': {
      //   default: 0
      // },
      'pageSize': {
        default: 10
      },
      'pageSizes': {
        type: Array,
        default: function () {
          return [10, 20, 40, 80, 100];
        }
      },
      'totalSize': {
        default: 0
      }
    },
    watch: {
      value: function (val) {
        this.pindex = val;
      },
      pageSize: function (val) {
        this.setDropMenuResult(val);
      },
      pindex: function (val) {
        this.$emit('input', val);
      }
    },
    mounted: function () {
      this.setDropMenuResult(this.pageSize);
    },
    methods: {
      callback: function (data) {
        this.pindex = data;
        this.emt();
      },
      cbkClkItem: function (data) {
        this.pindex = 1;
        this.emt();
      },
      emt: function () {
        this.$emit('callback', {
          'pageSize': this.pageSizes[this.optionDropMenu.result[0]],
          'currentPage': this.pindex
        });
      },
      setDropMenuResult: function (pageSize) {
        if (isNaN(pageSize)) {
          this.$set(this.optionDropMenu.result, 0, 0);
        } else {
          var data = this.pageSizes;
          var index = 0;

          for (var i = 0;i < data.length;i++) {
            if (data[i] + '' === pageSize + '') {
              index = i;
            }
          }
          this.$set(this.optionDropMenu.result, 0, index);
        }
      }
    }
  };
</script>

<style lang="scss">
  .wrapper-pagebar-pagesize {
    >.wrap-drop-menu {
      display: inline-block;
      margin-left: 5px;
      margin-right: 5px;
      width: 70px;

      >.input {
        height: 26px;
        
        >input {          
          padding-right: 24px!important;
        }

        >.cicon-cross-crle-chr-cpt {
          display: none;
        }
      }

      >section {
        top: 28px!important;

        >.line {
          height: 22px;
          line-height: 22px;
        }
      }
    }
  }
</style>
<style scoped lang="scss">
  .wrapper-pagebar-pagesize {
    position: relative;
    display: flex;
    justify-items: center;
    width: 100%;
    color: #535353;
    font-size: 12px;

    > span {
      flex: 1;
    }
  }
</style>