// import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('./ui/index.vue');
const Start = () => import('./ui/start.vue');
const Log = () => import('./ui/log.vue');
const Theme = () => import('./ui/theme.vue');
const Font = () => import('./ui/font.vue');
const Button = () => import('./ui/button.vue');
const Cicon = () => import('./ui/cicon.vue');
const Input = () => import('./ui/input.vue');
const Radio = () => import('./ui/radio.vue');
const Checkbox = () => import('./ui/checkbox.vue');
const Swith = () => import('./ui/swith.vue');
const Slider = () => import('./ui/slider.vue');
const Menu = () => import('./ui/menu.vue');
const Dropmenu = () => import('./ui/dropmenu.vue');
const Datepicker = () => import('./ui/datepicker.vue');
const Tip = () => import('./ui/tip.vue');
const Confirm = () => import('./ui/confirm.vue');
const Loading = () => import('./ui/loading.vue');
const Progress = () => import('./ui/progress.vue');
const Tooltip = () => import('./ui/tooltip.vue');
const Rangemenu = () => import('./ui/rangemenu.vue');
const Table = () => import('./ui/table.vue');
const Sidebar = () => import('./ui/sidebar.vue');
const Img = () => import('./ui/img.vue');
const Shuttle = () => import('./ui/shuttle.vue');
const Pagebar = () => import('./ui/pagebar.vue');
const Textarea = () => import('./ui/textarea.vue');
const Editor = () => import('./ui/editor.vue');
const More = () => import('./ui/loadmore.vue');
const Sidenav = () => import('./ui/sidenav.vue');
const Rule = () => import('./ui/rule.vue');
const Navlist = () => import('./ui/navlist.vue');
const Slidercode = () => import('./ui/slidercode.vue');
const Tree = () => import('./ui/tree.vue');
const Breadcrumbs = () => import('./ui/breadcrumbs.vue');
const Routrecord = () => import('./ui/routrecord.vue');
const Select = () => import('./ui/select.vue');
const Form = () => import('./ui/form.vue');
const Upload = () => import('./ui/upload.vue');
const Prompt = () => import('./ui/prompt.vue');
const Weather = () => import('./ui/weather.vue');
const Numberkey = () => import('./ui/numberkey.vue');
const Lock = () => import('./ui/lock.vue');
const Video = () => import('./ui/video.vue');

Vue.use(Router);

export default new Router({
  mode: 'hash', // history, hash
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index'
    }, 
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/start',
      children: [
        {
          path: '/start',
          name: 'start',
          component: Start
        },
        {
          path: '/log',
          name: 'log',
          component: Log
        },
        {
          path: '/theme',
          name: 'theme',
          component: Theme
        },
        {
          path: '/font',
          name: 'font',
          component: Font
        },
        {
          path: '/button',
          name: 'button',
          component: Button
        },
        {
          path: '/cicon',
          name: 'cicon',
          component: Cicon
        },
        {
          path: '/input',
          name: 'input',
          component: Input
        },
        {
          path: '/radio',
          name: 'radio',
          component: Radio
        },
        {
          path: '/checkbox',
          name: 'checkbox',
          component: Checkbox
        },
        {
          path: '/swith',
          name: 'swith',
          component: Swith
        },
        {
          path: '/slider',
          name: 'slider',
          component: Slider
        },
        {
          path: '/menu',
          name: 'menu',
          component: Menu
        },
        {
          path: '/dropmenu',
          name: 'dropmenu',
          component: Dropmenu
        },
        {
          path: '/datepicker',
          name: 'datepicker',
          component: Datepicker
        },
        {
          path: '/tip',
          name: 'tip',
          component: Tip
        },
        {
          path: '/confirm',
          name: 'confirm',
          component: Confirm
        },
        {
          path: '/loading',
          name: 'loading',
          component: Loading
        },
        {
          path: '/progress',
          name: 'progress',
          component: Progress
        },
        {
          path: '/tooltip',
          name: 'tooltip',
          component: Tooltip
        },
        {
          path: '/rangemenu',
          name: 'rangemenu',
          component: Rangemenu
        },
        {
          path: '/table',
          name: 'table',
          component: Table
        },
        {
          path: '/sidebar',
          name: 'sidebar',
          component: Sidebar
        },
        {
          path: '/img',
          name: 'img',
          component: Img
        },
        {
          path: '/shuttle',
          name: 'shuttle',
          component: Shuttle
        },
        {
          path: '/pagebar',
          name: 'pagebar',
          component: Pagebar
        },
        {
          path: '/textarea',
          name: 'textarea',
          component: Textarea
        },
        {
          path: '/editor',
          name: 'editor',
          component: Editor
        },
        {
          path: '/loadmore',
          name: 'loadmore',
          component: More
        },
        {
          path: '/sidenav',
          name: 'sidenav',
          component: Sidenav
        },
        {
          path: '/rule',
          name: 'rule',
          component: Rule
        },
        {
          path: '/navlist',
          name: 'navlist',
          component: Navlist
        },
        {
          path: '/slidercode',
          name: 'slidercode',
          component: Slidercode
        },
        {
          path: '/tree',
          name: 'tree',
          component: Tree
        },
        {
          path: '/breadcrumbs',
          name: 'breadcrumbs',
          component: Breadcrumbs
        },
        {
          path: '/routrecord',
          name: '路由记录',
          component: Routrecord
        },
        {
          path: '/select',
          name: '选择器',
          component: Select
        },
        {
          path: '/form',
          name: '表单',
          component: Form
        },
        {
          path: '/upload',
          name: '上传文件',
          component: Upload
        },
        {
          path: '/prompt',
          name: '弹窗输入',
          component: Prompt
        },
        {
          path: '/weather',
          name: '天气预报',
          component: Weather
        },
        {
          path: '/numberkey',
          name: '数字键盘',
          component: Numberkey
        },
        {
          path: '/lock',
          name: '锁屏',
          component: Lock
        },
        {
          path: '/video',
          name: '视频播放器',
          component: Video
        }
      ]
    }
  ]
});
