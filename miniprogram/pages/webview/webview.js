var app = getApp();
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
// pages/a/a.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: "",
    user_type: 'trainee',
    request_time: '1546598557000',
    platform: "small_program",
    tk: 'b6e9f3b78e9462e22f9ff605181b7e14',
    network: 'wifi',
    product_id: '123',
    app_version: '001',
    bind_time: '1546914900472',
    avatarUrl: '',
    usname: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    console.log(this.data.usname)
    this.setData({
      uid: us.uid,
      user_type: us.ut,
      request_time: Date.parse(new Date()),
      platform: us.pt,
      tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + Date.parse(new Date())),
      network: us.nw,
      product_id: us.pi,
      app_version: us.av,
      bind_time: app.globalData.bindtime,
      usname: us.nickName,
      avatarUrl: us.avatarUrl
    })
    console.log(this.data.uid + ',' + this.data.user_type + ',' + this.data.request_time + ',' + this.data.platform + ',' + this.data.tk + ',' + mmd.hexMD5(us.pi + ":" + us.ut + ":" + Date.parse(new Date())) + ',' + this.data.network + ',' + this.data.product_id + ',' + this.data.app_version + ',' + this.data.bind_time + ',' + this.data.usname + ',' + this.data.avatarUrl)
    // wx.request({
    //   url: 'https://ll.linkfeeling.cn/api/platform/user_data', // 仅为示例，并非真实的接口地址
    //   method: 'POST',
    //   data: {
    //     phone_num: pn,
    //     password: ps,
    //     user_type: ut,
    //     request_time: rt,
    //     platform: pt,
    //     tk: kt,
    //     login_type: sm,
    //     network: that.data.user.nw,
    //     product_id: pi,
    //     app_version: av
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })
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