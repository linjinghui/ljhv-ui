<!-- 
功能介绍：
https://github.com/niandeng-ckplayer/chplayer
1、
 -->

<template>
  <div class="wrap-video">
    <!-- {
      start: {
        type: Number,
        default: 0
      },
      crossOrigin: {
        type: String,
        default: ''
      },
      playsinline: {
        type: Boolean,
        default: false
      },
      customEventName: {
        type: String,
        default: 'statechanged'
      },
      options: {
        type: Object,
        required: true
      },
      events: {
        type: Array,
        default: () => []
      },
      globalOptions: {
        type: Object,
        default: () => ({
          // autoplay: false,
          controls: true,
          // preload: 'auto',
          // fluid: false,
          // muted: false,
          controlBar: {
            remainingTimeDisplay: false,
            playToggle: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeMenuButton: {
              inline: false,
              vertical: true
            }
          },
          techOrder: ['html5'],
          plugins: {}
        })
      },
      globalEvents: {
        type: Array,
        default: () => []
      }
     -->
    <video-player class="video-player-box" :options="option" :playsinline="true" v-on="$listeners"></video-player>
  </div>
</template>

<script type="text/babel">
  // import 'video.js/dist/video-js.css';
  import videojs from 'video.js';
  import { videoPlayer } from 'vue-video-player';
  import 'videojs-contrib-hls';
  window.videojs = videojs;
  require('video.js/dist/lang/zh-CN');

  export default {
    name: 'Video',
    components: {
      'videoPlayer': videoPlayer
    },
    data: function () {
      var id = 'vdo_' + new Date().getTime() + parseInt(Math.random() * 100);
      
      return {
        id: id
      };
    },
    props: {
      option: {
        type: Object,
        default: function () {
          return {};
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
      // playerReadied: function (player) {
      //   // 跳到第10s
      //   console.log('example player 1 readied', player);
      //   player.currentTime(10);
      // }
    }
  };
</script>

<style lang="scss">
  @import '../../../node_modules/video.js/dist/video-js.css';
  .wrap-video {
    .video-js {
      width: 100%;
      height: 100%;
    }
    .video-js .vjs-control-bar {
      font-size: 14px;
      
      .vjs-playback-rate .vjs-playback-rate-value {
        font-size: 1.2em;
        line-height: 2.4;
      }
    }
    .video-js .vjs-big-play-button {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
    }
  }
</style>
<style scoped lang="scss">
  .wrap-video {
    position: relative;
    width: 100%;
    height: 100%;

    .video-player-box {
      width: 100%;
      height: 100%;
    }
  }
</style>