var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otu: '',
    ofci: '',
    po: '',
    url: '',
    pj: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
     wx.request({
       url: 'https://ll.linkfeeling.cn/api/fitness/bracelet', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        uid: us.uid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.data.bind_status == false){
          that.setData({
            po: '手环未绑定',
            pj: 'http://ll.linkfeeling.cn/img/ok.png'
          })
        }
        if (res.data.data.bind_status == true) {
          that.setData({
            po: '手环已绑定',
            pj: 'http://ll.linkfeeling.cn/img/oj.png'
          })
        }
        that.setData({
          ofci: res.data.data.gym_name,
          otu: res.data.data.bind_status
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