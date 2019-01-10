var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      mob: '',
      pas: '',
      smcode: '',
      nw: '4G'
    }
  },
  mobb: function (e) {
    this.setData({
      'user.mob': e.detail.value
    })
  },
  pass: function (e) {
    this.setData({
      'user.pas': e.detail.value
    })
  },
  rp: function () {
    wx.navigateTo({
      url: '../rp/rp',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  login: function () {
    wx.getNetworkType({
      success: function (res) {
        let cc = res.networkType
        this.setData({
          'user.nw': cc
        })
      }
    })
    let ut = "trainee"
    let rt = Date.parse(new Date())
    let pt = "small_program"
    let pi = "123"
    let kt = mmd.hexMD5(pi + ":" + ut + ":" + rt)
    let sm = "weixin"
    let av = "001"
    let nt = this.data.user.nw
    wx.login({
      success: function (res) {
        let cco = res.code
        wx.request({
          url: 'http://47.98.195.210/user/login', // 仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            user_type: ut,
            request_time: rt,
            platform: pt,
            tk: kt,
            login_type: sm,
            network: nt, 
            product_id: pi,
            app_version: av,
            wx_code: cco
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success(res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  lp: function () {
    wx.navigateTo({
      url: '../lp/lp',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})