<!-- 
功能介绍：
1、每次设置锁屏密码
 -->

<template>
  <div class="lock" :id="id" v-if="show" :style="{'backgroundImage':bmap&&'url('+bmap+')'}">
    <div class="main">
      <i class="lv-icon-wifi-2"></i>
      <p>欢迎回来</p>
      <lv-img class="avant" width="120px" height="120px" :src="avant"></lv-img>
      <p>{{name}}</p>
      <lv-button :disabled="pwd.length<=0" :theme="btnTheme" class="btn-login" @click="login">{{btnText}}</lv-button>
      <lv-numberkey v-model="pwd" width="100%" color="#fff"></lv-numberkey>
    </div>
  </div>
</template>

<script type="text/babel">
  import Img from '../../img/src/main';
  import Numberkey from '../../numberkey/src/main';
  import Button from '../../button/src/main';

  export default {
    name: 'Lock',
    components: {
      lvImg: Img,
      lvNumberkey: Numberkey,
      lvButton: Button
    },
    data: function () {
      return {
        id: 'lock_' + new Date().getTime() + parseInt(Math.random() * 100),
        btnTheme: '',
        btnText: '登录',
        show: false,
        // 数字键盘输入的数字密码
        pwd: ''
      };
    },
    props: {
      // 显示隐藏
      value: {
        type: Boolean,
        default: false
      },
      // 用户名
      name: '',
      // 用户头像
      avant: '',
      // 背景图
      bmap: {
        default: ''
      }
    },
    watch: {
      value: function (val, val2) {
        val && this.showLock();
      }
    },
    computed: {
      // 
    },
    beforeDestroy: function () {
      // 
    },
    mounted: function () {
      this.getLockPwd() && (this.show = true);
    },
    methods: {
      showLock: function () {
        var _this = this;

        this.$prompt({
          show: true,
          headText: '请设置锁屏密码',
          modal: true,
          esc: false,
          align: 'center',
          placeholder: '请输入锁屏密码',
          callback: function (data, value) {
            if (data.text === '取消' || (data.text === '确定' && value)) {
              _this.$prompt({ show: false });
            }
            if (value) {
              _this.setLockPwd(value);
              _this.show = true;
              _this.$nextTick(function () {
                _this.addListenerMdyCss();
              });
            } else {
              _this.$emit('input', false);
            }
          }
        });
      },
      hideLock: function () {
        this.pwd = '';
        this.show = false;
        this.$emit('input', false);
      },
      setLockPwd: function (pwd) {
        pwd && localStorage.setItem('LOCK_KEY', pwd);
      },
      getLockPwd: function () {
        return localStorage.getItem('LOCK_KEY') || '';
      },
      clearLockPwd: function () {
        localStorage.clear('LOCK_KEY');
      },
      login: function () {
        var password = this.getLockPwd();

        if (this.pwd && password && this.pwd === password) {
          // 密码校验成功
          this.hideLock();
          this.clearLockPwd();
        } else {
          this.pwsError();
        }
      },
      // 密码错误
      pwsError: function () {
        var _this = this;

        this.pwd = '';
        this.btnText = '密码错误';
        this.btnTheme = 'danger';
        setTimeout(function () {
          _this.btnText = '登录';
          _this.btnTheme = '';
        }, 1500);
      },
      // 阻止F12 修改样式
      addListenerMdyCss: function () {
        var dom = document.getElementById(this.id);
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
        var observer = new MutationObserver(function (mutations) {
          console.log('dom changed', mutations);
          dom.style.display = 'block';
        });

        observer.observe(dom, {
          attributes: true, 
          attributeFilter: ['style']
        });
      }
    }
  };
</script>

<style scoped lang="scss">
  .lock {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    line-height: initial;
    color: #fff;
    font-size: 16px;
    background-image: url('../imgs/bgp.jpg');
    background-color: #545c64;
    background-size: cover;
    z-index: 10001;

    .main {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 240px;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    p {
      // padding: 10px 0;
    }

    .lv-icon-wifi-2 {
      font-size: 30px;
    }

    .avant {
      margin-top: 80px;
      margin-bottom: 10px;
      border-radius: 50%;
    }

    .btn-login {
      margin-top: 60px;
      margin-bottom: 40px;
      width: 100%;
      line-height: 30px;
      justify-content: center;
    }
  }

  @media (max-height: 640px) {
    .avant {
      margin-top: 40px;
      margin-bottom: 10px;
    }

    .btn-login {
      margin-top: 20px;
      margin-bottom: 10px;
      line-height: 22px;
    }
  }
</style>