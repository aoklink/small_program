var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
// pages/mydata/mydata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sportdata: [
      {
        date: '2018/08/12',
        smin: '30',
        skc: '900'
      },
      {
        date: '2018/08/13',
        smin: '40',
        skc: '600'
      },
      {
        date: '2018/08/14',
        smin: '50',
        skc: '800'
      },
    ],
    yzydata: [],
    spt: true,
    ttbox: []
  },
  yzylb: function (e) {
    console.log(e.currentTarget.dataset.yzy)
    app.globalData.bindtime = e.currentTarget.dataset.yzy
    wx.navigateTo({
      url: '../webview/webview',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/fitness/list', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "pos": '0',
        "uid": us.uid,
        "user_type": us.ut,
        "request_time": Date.parse(new Date()),
        "platform": us.pt,
        "tk": mmd.hexMD5(us.pi + ":" + us.ut + ":" + Date.parse(new Date())),
        "network": us.nw,
        "product_id": us.pi,
        "app_version": us.av,
        "load_flag": 'true',
        "count": '7'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.data.length)
        if(res.data.data.length < 1){
          that.setData({
            spt: false
          })
        }
        for (var i = 0; i < res.data.data.length; i++){
          res.data.data[i].time = Math.floor(res.data.data[i].time/60000)
        }
        that.setData({
          yzydata: res.data.data
        })
        for (var i = 0; i < res.data.data.length; i++) {
          console.log(that.yzytime(new Date(parseInt(res.data.data[i].bind_time))))
          that.data.ttbox.push(that.yzytime(new Date(parseInt(res.data.data[i].bind_time))))
        }
        console.log(that.data.ttbox)
        that.setData({
          ttbox: that.data.ttbox
        })
      }
    })
  },
  yzytime: function (no) {
    var date = no;
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    + " " + date.getHours() + seperator2 + date.getMinutes()
    + seperator2 + date.getSeconds();
    console.log(currentdate)
    return currentdate;
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