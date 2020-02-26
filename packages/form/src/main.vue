<!-- 
功能介绍：
1、form-title
2、默认块级, 可选inline 行级
 -->

<template>
  <div class="wrap-form" :id="id">
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'Form',
    data: function () {
      return {
        id: 'form_' + new Date().getTime() + parseInt(Math.random() * 100)
      };
    },
    props: {
      value: {
        default: ''
      }
    },
    watch: {
      value: function (val, val2) {
        if (val && val2 === '') {
          // 第一次加载
        }
      }
    },
    computed: {
      // 
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      // 
    },
    methods: {
      // 
    }
  };
</script>

<style scoped lang="scss">
  .wrap-form {
    padding: 10px;
    line-height: initial;

    .form-title {
      padding-top: 10px;
      padding-bottom: 20px;
      text-align: center;
      font-size: 18px;
    }

    .form-item {
      margin-bottom: 14px;

      > label {
        display: block;
        padding: 5px 0;
      }
    }

    .form-footer {
      padding-top: 20px;
      padding-bottom: 10px;
      text-align: center;
      > * {
        margin-left: 10px;
      }
      > *:first-child {
        margin-left: 0;
      }
    }
  }
  .wrap-form.inline {
    .form-item {
      display: flex;
      flex-shrink: 0;
      // al
      > label {
        width: 90px;
      }

      > .main {
        flex: 1;
      }
    }
  }
  
  .form-item.block {
    display: block!important;
  }
  .form-item.inline {
    display: flex!important;
    flex-shrink: 0;
    
    > label {
      width: 90px;
    }

    > .main {
      flex: 1;
    }
  }

  
</style>