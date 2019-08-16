import Mock from 'mockjs';

Mock.setup({
  // 表示响应时间介于 1000 和 3000 毫秒之间，默认值是'10-100'。
  timeout: '100-1000'
});

let demo = {
  'msg': 'im msg',
  'msgCode': 200,
  'msgDesc': 'im msgDesc',
  'result': '',
  'subMsg': 'im subMsg',
  'subMsgCode': 'im subMsgCode'
}

// 帐号密码登陆
Mock.mock(/(\/login\/account)/, {
  'msg': 'im msg',
  'msgCode': 200,
  'msgDesc': 'im msgDesc',
  'result': {
    'avatar': '@img',
    'enterpriseId': 0,
    'realName': '@name',
    'token': 'string',
    'userNumber|1': [66208688, 66071007, 66145044, 66889932]
  },
  'subMsg': 'im subMsg',
  'subMsgCode': 'im subMsgCode'
});