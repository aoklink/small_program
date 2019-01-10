var app = getApp()
var us = getApp().globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ok: '',
    kk: true
  },
  yza: function (e) {
    this.setData({
      ok: '1',
      kk: false
    })
    console.log(e.currentTarget.dataset.now)
    us.situation = e.currentTarget.dataset.man
  },
  yzb: function (e) {
    this.setData({
      ok: '2',
      kk: false
    })
    console.log(e.currentTarget.dataset.now)
    us.situation = e.currentTarget.dataset.man
  },
  yzc: function (e) {
    this.setData({
      ok: '3',
      kk: false
    })
    console.log(e.currentTarget.dataset.now)
    us.situation = e.currentTarget.dataset.man
  },
  yzy: function () {
    if (this.data.kk === false){
      wx.navigateTo({
        url: '../sportgoal/sportgoal',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
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