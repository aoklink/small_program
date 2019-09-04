var user = require('utils/user.js');
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
      pi: "link_office",
      sm: "pwd",
      av: "1.8.0",
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
      usname: '',
      shopcell: '',
      gan: '',
      gana: '',
      ganb: '',
      gym_name: 'link_test'
    },
    bindtime: '',
    ccc: '',
    yzy: 'yangzeyuan',
    ctxPath: 'https://m.hao123.com/',
    lp: 'https://dev.linkfeeling.cn/api/',
    fontFamily: 'FT',
    inpp: '',
    aclun: [],
    address: '',
    shopname: '',
    shoplogo: ''
  },
  //检查微信小程序是否最新版本
  checkForUpdate: function () {
    const updateManager = wx.getUpdateManager()
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () { })
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
    }),
    wx.loadFontFace({
      family: this.globalData.fontFamily,
      source: 'url("https://sungd.github.io/Pacifico.ttf")',
      success(res) {
        console.log(res.status)
      },
      fail: function (res) {
        console.log(res.status)
      },
        complete: function (res) {
        console.log(res.status)
      }
    });
  },
  onLaunch: function (options) {
    this.checkForUpdate(),
    wx.cloud.init({
      traceUser: true,
    })
  },
  onShow: function (options) {
    if (options.scene == 1007 || options.scene == 1008) {
      // 通过单人聊天会话分享进入通过群聊会话分享进入
      user.sceneok = 0
    } else {
      user.sceneok = 1
    }
  }
})
