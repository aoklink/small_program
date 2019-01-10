var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      mob: '',
      pas: '',
      smcode: ''
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
  smcode: function (e) {
    this.setData({
      'user.smcode': e.detail.value
    })
  },
  smscode: function () {
    let ut = "trainee"
    let pn = this.data.user.mob
    let rt = Date.parse(new Date())
    let pt = "small_program"
    let pi = "123"
    let nw = "3G"
    let av = "001"
    let kt = mmd.hexMD5(pi + ":" + ut + ":" + rt)
    wx.request({
      url: 'http://47.98.195.210/user/get_code', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        phone_num: pn,
        user_type: ut,
        request_time: rt,
        platform: pt,
        tk: kt,
        network: nw,
        product_id: pi,
        app_version: av
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  register: function () {

    let pn = this.data.user.mob
    let sc = this.data.user.smcode
    let ps = mmd.hexMD5(this.data.user.pas)
    let ut = "trainee"
    let rt = Date.parse(new Date())
    let pt = "small_program"
    let pi = "123"
    let nw = "3G"
    let av = "001"
    let kt = mmd.hexMD5(pi + ":" + ut + ":" + rt)
    wx.request({
      url: 'http://47.98.195.210/user/register', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        phone_num: pn,
        sms_code: sc,
        password: ps,
        user_type: ut,
        request_time: rt,
        platform: pt,
        tk: kt,
        network: nw,
        product_id: pi,
        app_version: av
        // phone_num: "13654917649",
        // sms_code: "045171",
        // password: "111111",
        // user_type: "trainee",
        // request_time: rt,
        // platform: "small_program",
        // tk: 'mmd.hexMD5("13654917649" + ":" + "trainee" + ":" + rt)',
        // network: "3G",
        // product_id: "123",
        // app_version: "001"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  lp: function () {
    wx.navigateTo({
      url: '../lp/lp',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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