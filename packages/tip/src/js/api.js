export let noticeJsModalClassName = 'noticejs-modal';
export let closeAnimation = 'noticejs-fadeOut';

export let Defaults = {
    // 标题
    title: '',
    // 提示内容
    text: '',
    // 类型：success, info, warning, error
    type: 'info',
    // 位置：topLeft, topCenter, middleLeft, middleRight, middleCenter, bottomLeft, bottomRight, bottomCenter
    position: 'topCenter',
    // 新的提示框 是否在顶部插入
    newestOnTop: false,
    // 显示时长
    timeout: 3000,
    // 是否显示进度条
    progressBar: false,
    // 关闭方式：['button', 'click']
    closeWith: ['button'],
    // 动画效果，支持 animate.css
    animation: {
        open: 'animated fadeIn',
        close: 'animated fadeOut'
    },
    // 是否模态
    modal: false,
    // 提示框宽度，指定数字
    width: 320,
    scroll: {
        maxHeightContent: 300,
        showOnHover: true
    },
    // 是否左侧显示关闭按钮
    rtl: false,
    callbacks: {
        beforeShow: [],
        onShow: [],
        afterShow: [],
        onClose: [],
        afterClose: [],
        onClick: [],
        onHover: [],
        onTemplate: []
    }
}