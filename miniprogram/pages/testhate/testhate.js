// pages/testhate/testhate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/fitness/detail', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        "uid": '9c1b9a52f5d054de228dc8fc92fca5f8',
        "user_type": 'trainee',
        "request_time": '1547004086000',
        "platform": 'small_program',
        "tk":'a3f7ffac6a46c288c83bcf3095d5eda7',
        "network": 'wifi',
        "product_id": '123',
        "app_version": '001',
        "bind_time": '1547006249233'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
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