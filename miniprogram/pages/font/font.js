// pages/font/font.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontFamilya: 'FTa',
    fontFamilyb: 'FTb',
    fontFamilyc: 'FTc',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.loadFontFace({
      family: that.data.fontFamilya,
      source: 'url("https://ll.linkfeeling.cn/fonts/DIN%201451%20Std%20Engschrift.TTF")',
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
    wx.loadFontFace({
      family: that.data.fontFamilyb,
      source: 'url("https://font.linkfeeling.cn/wx/DIN%201451%20Std%20Engschrift.TTF")',
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
    wx.loadFontFace({
      family: that.data.fontFamilyc,
      source: 'url("http://font.linkfeeling.cn/wx/DIN%201451%20Std%20Engschrift.TTF")',
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