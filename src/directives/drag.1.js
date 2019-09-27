/**
 * 拖拽指令 v-drag、 v-drag:x、v-drag:y
 * v-drag:x="{x:20}" 初始值 x 20%
 * 指令使用者 设置 disable 可以禁用拖拽
 * 拖拽后会通过edrag通知使用者
 * 需要指定一个父层class="wrap-drag"
 * */
export default {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function () {
    // 
  },
  unbind: function () {
    // 
  },
  // 指令的定义
  inserted: function (el, binding, vnode) {
    // 给元素绑定/解绑事件
    var toggleListener = function (el, type, eventName, handler) {
      let eventNames = eventName.split(',');
      
      type = type || 'add';
      if (eventName === 'mousemove' || eventName === 'touchmove') {
        eventNames = ['mousemove', 'touchmove'];
      }
      eventNames.forEach(function (item) {
        if (type === 'add') {
          el.addEventListener(item, handler);
        } else {
          el.removeEventListener(item, handler);
        }
      });
    };
    // 查找上级 wrap-drag 元素
    var getParents = function (el, parentSelector) {
      var p = el.parentNode;

      while (p.className.indexOf(parentSelector) >= 0) {
        p = p.parentNode;
      }
      return p;
    };
    var domWrapDrag = getParents(el, 'wrap-drag');
    // wrap-drag xy坐标
    var boundingClientRect = domWrapDrag.getBoundingClientRect();
    var minx = boundingClientRect.x + el.offsetWidth / 2;
    var maxx = boundingClientRect.x + boundingClientRect.width - el.offsetWidth / 2;
    var miny = boundingClientRect.y + el.offsetHeight / 2;
    var maxy = boundingClientRect.y + boundingClientRect.height - el.offsetHeight / 2;
    // 获取鼠标坐标
    var mousePosition = function (event) {
      let e = event || window.event;
      let ret = '';

      e.preventDefault();
      e.stopPropagation();

      if (e.type === 'touchmove') {
        e.clientY = e.touches[0].clientY;
        e.clientX = e.touches[0].clientX;
      }
      ret = {
        x: e.clientX || e.pageX || e.x,
        y: e.clientY || e.pageY || e.y,
        mx: e.movementX,
        my: e.movementY
      };
      
      return ret;
    };
    // 设置位置
    var setTransform = function (x, y, px, py) {
      el.style.transform = binding.arg === 'x' ? 'translateX(' + x + 'px)' : binding.arg === 'y' ? 'translateY(' + y + 'px)' : 'translate(' + x + 'px, ' + y + 'px)';
      var eventName = 'edrag';
      // px: 百分比位置
      var eventData = {x: x, y: y, px: px, py: py};
      if (vnode.componentInstance) {
      	vnode.componentInstance.$emit(eventName, {detail: eventData});
      } else {
      	vnode.elm.dispatchEvent(new CustomEvent(eventName, {detail: eventData}));
      }
    }
    // 鼠标移动事件
    var handler = function () {
      // 鼠标xy坐标
      var mx = mousePosition().x;
      var my = mousePosition().y;
      // bar位移xy位置
      var x = 0;
      var y = 0;
      var px = 0;
      var py = 0;

      if (mx < minx) {
        x = 0;
        px = 0;
      } else if (mx > maxx) {
        x = boundingClientRect.width - el.offsetWidth;
        px = 100;
      } else {
        x = mx - minx;
        px = x / (boundingClientRect.width - el.offsetWidth) * 100;
      }

      if (my < miny) {
        y = 0;
        py = 0;
      } else if (my > maxy) {
        y = boundingClientRect.height - el.offsetHeight;
        py = 100;
      } else {
        y = my - miny;
        py = y / (boundingClientRect.height - el.offsetHeight) * 100;
      }

      setTransform(x, y, px, py);
    };

    // 初始化位置, 百分比
    if (binding.value) {
      var _x = 0;
      var _y = 0;

      if (binding.arg !== 'y' && binding.value.x) {
        _x = (boundingClientRect.width - el.offsetWidth) * binding.value.x / 100;
      } 
      if (binding.arg !== 'x' && binding.value.y) {
        _y = (boundingClientRect.height - el.offsetHeight) * binding.value.y / 100;
      }
      setTransform(_x, _y, binding.value.x || 0, binding.value.y || 0);
    }

    if (!el.getAttribute('disabled')) {
      // 给目标元素添加模拟拖拽事件
      toggleListener(el, 'add', 'mousedown,touchstart', function (event) {
        let e = event || window.event;

        e.preventDefault();
        e.stopPropagation();
        // window 添加mousemove事件
        toggleListener(window, 'add', 'mousemove', handler);
      });
      // 移除目标元素的模拟拖拽事件
      toggleListener(window, 'add', 'mouseup,touchend', function (event) {
        toggleListener(window, 'remove', 'mousemove', handler);
      });
    }
  }
};