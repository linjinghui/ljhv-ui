// import Vue from 'vue';
import Router from 'vue-router';

const Index = () => import('./index/index.vue');
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

Vue.use(Router);

export default new Router({
  mode: 'hash', // history, hash
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, 
    {
      path: '/index',
      name: 'index',
      component: Index,
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
        }
      ]
    }
  ]
});
