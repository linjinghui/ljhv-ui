<template>
  <div class="wrap page-theme">
    <h1>视频播放器</h1>
    <dl>
      <dd><h3>引入组件</h3></dd>
      <dd v-highlight>
        <pre><code>import {Video} from 'lv-web-ui';
Vue.component('lvVideo', Video);</code></pre>
      </dd>
    </dl>
    <dl>
      <dd><h3>支持MP4、HLS、M3U8视频格式</h3></dd>
      <dd class="example">
        <section v-highlight>
           <pre><code v-text="code"></code></pre>
        </section>
        <section style="padding:10px;">
          <lv-video style="width:400px;height:300px;" :option="option" @play="onPlayerPlay" @pause="onPlayerPause" @ended="onPlayerEnded" @waiting="onPlayerWaiting" @playing="onPlayerPlaying"
            @loadeddata="onPlayerLoadeddata" @timeupdate="onPlayerTimeupdate" @canplay="onPlayerCanplay" @canplaythrough="onPlayerCanplaythrough" @statechanged="playerStateChanged"
            @ready="playerReadied"></lv-video>
        </section>
      </dd>
    </dl>
    <dl>
      <dd><h3>参数说明</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>option</td><td>配置参数</td><td>是</td><td>object</td><td>-</td><td>-</td></tr>
          <tr><td>@play</td><td>播放回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@pause</td><td>暂停回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@ended</td><td>播放结束回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@waiting</td><td>视频等待回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@playing</td><td>播放中回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@loadeddata</td><td>视频加载回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@timeupdate</td><td>播放时间变化回调</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@canplay</td><td>canplay</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@canplaythrough</td><td>canplaythrough</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@statechanged</td><td>statechanged</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
          <tr><td>@ready</td><td>ready</td><td>-</td><td>function</td><td>-</td><td>-</td></tr>
        </table>
      </dd>
    </dl>
    <dl>
      <dd><h3>option 参数说明(<a href="https://docs.videojs.com/currenttimedisplay">更多API参考</a>)</h3></dd>
      <dd class="attribute">
        <table>
          <tr><td>参数</td><td>说明</td><td>必填</td><td>类型</td><td>可选值</td><td>默认值</td></tr>
          <tr><td>autoplay</td><td>是否自动播放</td><td>-</td><td>boolean</td><td>-</td><td>-</td></tr>
          <tr><td>controls</td><td>是否显示控制条</td><td>-</td><td>boolean</td><td>-</td><td>-</td></tr>
          <tr><td>controlBar</td><td>定制控制条</td><td>-</td><td>object</td><td>-</td><td>例如：{<br>
            children: [ 'playToggle', 'progressControl', 'remainingTimeDisplay', 'volumePanel', 'fullscreenToggle' ]<br>
          }</td></tr>
          <tr><td>loop</td><td>是否循环播放</td><td>-</td><td>boolean</td><td>-</td><td>-</td></tr>
          <tr><td>muted</td><td>是否静音</td><td>-</td><td>boolean</td><td>-</td><td>-</td></tr>
          <tr><td>poster</td><td>封面地址</td><td>-</td><td>string</td><td>-</td><td>-</td></tr>
          <tr><td>preload</td><td>预加载</td><td>-</td><td>string</td><td>auto|metadata|none</td><td>-</td></tr>
          <tr><td>language</td><td>语言</td><td>-</td><td>string</td><td>zh-CN|en</td><td>-</td></tr>
          <tr><td>playbackRates</td><td>播放速度</td><td>-</td><td>array</td><td>-</td><td>例如：[0.7, 1.0, 1.5, 2.0]</td></tr>
          <tr><td>sources</td><td>视频源</td><td>-</td><td>array</td><td>-</td><td>[{<br>
              type: 'application/x-mpegURL',<br>
              src: 'http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8'<br>
            }]</td></tr>
        </table>
      </dd>
    </dl>
  </div>
</template>

<script>
  import {Button, Video} from '../../../packages/index.js';
  
  export default {
    name: 'Video',
    components: {
      lvButton: Button,
      lvVideo: Video
    },
    data () {
      return {
        option: {
          // 是否自动播放
          // autoplay: true,
          // 是否显示控制条
          controls: true,
          controlBar: {
            children: [ 'playToggle', 'progressControl', 'remainingTimeDisplay', 'volumePanel', 'fullscreenToggle' ]
            // // 播放速度
            // playbackRateMenuButton: false,
            // // 字幕设置
            // subsCapsButton: false,
            // // 倒计时
            // remainingTimeDisplay: true,
            // // 全屏
            // fullscreenToggle: true,
            // // 播放、暂停
            // playToggle: true,
            // // 声音
            // volumePanel: true,
            // // 进度条
            // progressControl: true
          },
          // 是否循环播放,
          loop: false,
          // 是否静音
          muted: false,
          // 封面地址 
          poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
          // 预加载 auto|metadata|none
          preload: 'auto',
          language: 'zh-CN',
          // 播放速度
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: 'application/x-mpegURL',
              src: 'http://cdn.theoplayer.com/video/star_wars_episode_vii-the_force_awakens_official_comic-con_2015_reel_(2015)/index.m3u8'
            }, 
            {
              type: 'video/mp4',
              src: 'http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4'
            }, 
            {
              type: 'video/mp4',
              src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
            }
          ]
        },
        code: ''
      };
    },
    watch: {
      selected: function (val) {
        console.log('selected=', val);
      }
    },
    mounted: function () {
      this.code = '<lv-video style="width:400px;height:300px;" :option="option" @play="onPlayerPlay" @pause="onPlayerPause" @ended="onPlayerEnded"\n' +
      '  @waiting="onPlayerWaiting" @playing="onPlayerPlaying"\n' +
      '  @loadeddata="onPlayerLoadeddata" @timeupdate="onPlayerTimeupdate" @canplay="onPlayerCanplay"\n' +
      '  @canplaythrough="onPlayerCanplaythrough" @statechanged="playerStateChanged"\n' +
      '  @ready="playerReadied"></lv-video>';
    },
    methods: {
      onPlayerPlay: function (e) {
        console.log('=onPlayerPlay=', e);
      },
      onPlayerPause: function (e) {
        console.log('=onPlayerPause=', e);
      },
      onPlayerEnded: function (e) {
        console.log('=onPlayerEnded=', e);
      },
      onPlayerWaiting: function (e) {
        console.log('=onPlayerWaiting=', e);
      },
      onPlayerPlaying: function (e) {
        console.log('=onPlayerPlaying=', e);
      },
      onPlayerLoadeddata: function (e) {
        console.log('=onPlayerLoadeddata=', e);
      },
      onPlayerTimeupdate: function (e) {
        console.log('=onPlayerTimeupdate=', e);
      },
      onPlayerCanplay: function (e) {
        console.log('=onPlayerCanplay=', e);
      },
      onPlayerCanplaythrough: function (e) {
        console.log('=onPlayerCanplaythrough=', e);
      },
      playerStateChanged: function (e) {
        console.log('=playerStateChanged=', e);
      },
      playerReadied: function (e) {
        console.log('=playerReadied=', e);
      }
    }
  };
</script>

<style lang="scss"></style>
<style scoped lang="scss">
  .page-theme {}
</style>
