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
      pi: "link_office",
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
      usname: '',
      shopcell: '',
      gan: '',
      gana: '',
      ganb: '',
      gym_name: 'link_office'
    },
    bindtime: '',
    ccc: '',
    yzy: 'yangzeyuan',
    ctxPath: 'https://m.hao123.com/',
    lp: 'https://ll.linkfeeling.cn/api/',
    fontFamily: 'FT',
    inpp: '',
    aclun: [],
    address: '',
    shopname: '',
    shoplogo: ''
  },
  onLoad: function (options) {
    console.log('gg')
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
  }
})
