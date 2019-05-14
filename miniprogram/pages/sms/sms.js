var mmd = require('../../utils/mmd.js');
var us = getApp().globalData.userInfo
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
    },
    yy: '4G'
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
        network: this.data.user.nw,
        product_id: pi,
        app_version: av,
        gym_name: us.gym_name
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  login: function () {
    var that = this
    let pn = this.data.user.mob
    let sc = this.data.user.smcode
    let ps = mmd.hexMD5(this.data.user.pas)
    let ut = "trainee"
    let rt = Date.parse(new Date())
    let pt = "small_program"
    let pi = "123"
    let kt = mmd.hexMD5(pi + ":" + ut + ":" + rt)
    let sm = "sms"
    let av = "001"
    wx.login({
      success: function (res) {
        console.log(res.code)
        let cco = res.code
        wx.request({
          url: 'http://47.98.195.210/user/login', // 仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            phone_num: pn,
            user_type: ut,
            request_time: rt,
            platform: pt,
            tk: kt,
            sms_code: sc,
            login_type: sm,
            network: that.data.user.nw,
            product_id: pi,
            app_version: av,
            gym_name: us.gym_name
          },
          header: {
            'content-type': 'application/json' // 默认值
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
  tt: function () {
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
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