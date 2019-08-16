import {getUrlParamt} from '../../node_modules/web-js-tool/libs/js/util.js';
import * as ZH from './zh.js';
import * as EN from './en.js';

var LAN = '';
var urlLanguage = getUrlParamt('language');

if (urlLanguage === 'en') {
  LAN = EN;
} else {
  LAN = ZH;
}

const BASE = LAN.BASE;

export {BASE};