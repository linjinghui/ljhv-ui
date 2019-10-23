/**
 * 拖拽指令 v-drag、 v-drag:x、v-drag:y
 * v-drag:x="{x:20}" 初始值 x 20%
 * 指令使用者 设置 disable 可以禁用拖拽
 * 拖拽后会通过edrag通知使用者
 * 需要指定一个父层拖拽区域 class="wrap-drag"
 * */
export default {
  // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
  bind: function () {},
  unbind: function () {},
  // 指令的定义
  inserted: function (el, binding, vnode) {
    var isMouseDown = false;
    var startPageX = '';
    var startPageY = '';
    var elTranslateX = '';
    var elTranslateY = '';
    // 查找拖拽区域 wrap-drag 元素
    var wrapDrag = (function (el, parentSelector) {
      var p = el.parentNode;

      while (!p.className || p.className.indexOf(parentSelector) === -1) {
        p = p.parentNode;
        if (p.nodeName === 'BODY') {
          break;
        }
      }
      return p;
    }(el, 'wrap-drag'));
    var wrapDragWidth = wrapDrag.getBoundingClientRect().width;
    var wrapDragHeight = wrapDrag.getBoundingClientRect().height;
    var wrapDragLeft = wrapDrag.getBoundingClientRect().left;
    var wrapDragTop = wrapDrag.getBoundingClientRect().top;
    var emit = function (data) {
      var eventName = 'edrag';
      if (vnode.componentInstance) {
      	vnode.componentInstance.$emit(eventName, {detail: data});
      } else {
      	vnode.elm.dispatchEvent(new CustomEvent(eventName, {detail: data}));
      }
    }

    var start = function (evt) {
      var touches = evt.changedTouches[0];
      startPageX = touches.pageX;
      startPageY = touches.pageY;
      elTranslateX = el.style.transform.match(/translateX\(([0-9.]+)px/);
      elTranslateY = el.style.transform.match(/translateY\(([0-9.]+)px/);
      elTranslateX = elTranslateX ? parseInt(elTranslateX[1]) : 0;
      elTranslateY = elTranslateY ? parseInt(elTranslateY[1]) : 0;
    }
    var move = function (evt) {
      var touches = evt.changedTouches[0];
      var moveX = touches.pageX - startPageX + elTranslateX;
      var moveY = touches.pageY - startPageY + elTranslateY;
      moveX = Math.max(moveX, 0);
      moveX = Math.min(moveX, wrapDragWidth - el.offsetWidth);
      moveY = Math.max(moveY, 0);
      moveY = Math.min(moveY, wrapDragHeight - el.offsetHeight);
      if (binding.arg === 'x') {
        el.style.transform = 'translateX(' + (moveX) + 'px)';
      } else if (binding.arg === 'y') {
        el.style.transform = 'translateY(' + (moveY) + 'px)';
      } else {
        el.style.transform = 'translateX(' + (moveX) + 'px) translateY(' + (moveY) + 'px)';
      }
      emit({
        x: moveX,
        y: moveY,
        wrapDragWidth: wrapDragWidth,
        wrapDragHeight: wrapDragHeight,
        px: (moveX / (wrapDragWidth - el.offsetWidth)),
        py: (moveY / (wrapDragHeight - el.offsetHeight))
      });
    }
    var end = function (evt) {}
    var cancel = function (evt) {}

    // 初始回调
    move({
      touches: [{ 
        pageX: (wrapDragWidth - el.offsetWidth) * (binding.value.px || 0), 
        pageY: (wrapDragHeight - el.offsetHeight) * (binding.value.py || 0)
      }],
      changedTouches: [{ 
        pageX: (wrapDragWidth - el.offsetWidth) * (binding.value.px || 0), 
        pageY: (wrapDragHeight - el.offsetHeight) * (binding.value.py || 0)
      }]
    });

    // touch mouse事件绑定
    if (!binding.value.disabled) {
      el.addEventListener('touchstart', start, false);
      el.addEventListener('touchmove', move, false);
      el.addEventListener('touchend', end, false);
      el.addEventListener('touchcancel', cancel, false);
      el.addEventListener('mousedown', function (evt) {
        isMouseDown = true;
        evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
        evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
        start(evt);
      }, false);
      window.addEventListener('mousemove', function (evt) {
        evt.preventDefault();
        if (isMouseDown === true) {
          evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
          evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
          move(evt);
        }
      }, false);
      window.addEventListener('mouseup', function (evt) {
        isMouseDown = false;
        evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
        evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
        end(evt);
      }, false);
      // el.addEventListener('mouseout', function (evt) {
      //   isMouseDown = false;
      //   evt.touches = [{ pageX: evt.pageX, pageY: evt.pageY }];
      //   evt.changedTouches = [{ pageX: evt.pageX, pageY: evt.pageY }];
      //   cancel(evt);
      // }, false);
    }
  }
};