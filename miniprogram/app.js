//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

  },
  globalData: {
    userInfo: {
      mob: '',
      nw: '4G',
      smcode: '',
      ut: "trainee",
      rt: Date.parse(new Date()),
      pt: "small_program",
      pi: "123",
      sm: "pwd",
      av: "001",
      wx_code: "",
      sex: '男',
      age: '24',
      height: '170',
      weight: '60',
      situation: '',
      goal: '',
      nickName: '',
      avatarUrl: '',
      uid: '',
      usname: ''
    },
    bindtime: '',
    ccc: '',
    yzy: 'yangzeyuan',
    ctxPath: 'https://m.hao123.com/',
    lp: 'https://ll.linkfeeling.cn/api/',
  },
  onLoad: function (options) {
    let that = this;
    wx.getNetworkType({
      success: function (res) {
        let cc = res.networkType
        that.setData({
          'user.nw': cc
        })
      }
    })
  }
})
