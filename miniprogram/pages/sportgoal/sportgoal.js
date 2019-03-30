var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ok: '',
    kk: true,
    ww_co: ''
  },
  yza: function (e) {
    this.setData({
      ok: '1',
      kk: false
    })
    console.log(e.currentTarget.dataset.goal)
    us.goal = e.currentTarget.dataset.goal
  },
  yzb: function (e) {
    this.setData({
      ok: '2',
      kk: false
    })
    console.log(e.currentTarget.dataset.goal)
    us.goal = e.currentTarget.dataset.goal
  },
  yzc: function (e) {
    this.setData({
      ok: '3',
      kk: false
    })
    console.log(e.currentTarget.dataset.goal)
    us.goal = e.currentTarget.dataset.goal
  },
  yzd: function (e) {
    this.setData({
      ok: '4',
      kk: false
    })
    console.log(e.currentTarget.dataset.goal)
    us.goal = e.currentTarget.dataset.goal
  },
  yzy: function () {
    let that = this
    if (this.data.kk === false) {
      let tty = that.data.ww_co
      const userInfo = wx.getStorageSync('userInfo')
      var oname = encodeURIComponent(us.nickName || userInfo.nickName)
      wx.request({
        url: app.globalData.lp +'user/register', // 仅为示例，并非真实的接口地址
        method: 'POST',
        data: {
          phone_num: us.mob,
          user_type: us.ut,
          request_time: us.rt,
          platform: us.pt,
          tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
          network: us.nw,
          product_id: us.pi,
          app_version: us.av,
          sms_code: us.smcode,
          age: us.age,
          gender: us.sex,
          stature: us.height,
          weight: us.weight,
          situation: us.situation,
          goal: us.goal,
          wx_code: tty,
          user_name: oname,
          head_icon: us.avatarUrl || userInfo.avatarUrl
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res.data)
          if(res.data.code == 200){
            us.uid = res.data.uid      
            wx.reLaunch({
              url: '../home/home',
            })
            // wx.navigateTo({
            //   url: '../link/link',
            //   success: function (res) { },
            //   fail: function (res) { },
            //   complete: function (res) { },
            // })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      //获取code
      success: function (res) {
        console.log(res)
        that.setData({
          ww_co: res.code
        })
        console.log(us.wx_code)
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