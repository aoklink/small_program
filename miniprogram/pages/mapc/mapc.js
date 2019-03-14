Page({

  /**
   * 页面的初始数据
   */
  data: {
    // markers: [{
    //   iconPath: "", //浮标样式
    //   id: 0,
    //   latitude: 30.1782620143, //浮标位置
    //   longitude: 120.1411628723,
    //   width: 35,  //浮标大小
    //   height: 45
    // }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.openLocation({
      latitude: 30.1782620143, //目的地位置
      longitude: 120.1411628723,
      scale: 15,
      name: '领客菲力健身房', //自定义
      address: '杭州市滨江区浦沿街道东信大道66号启迪楼202' //自定义
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
    // wx.reLaunch({
    //   url: '../home/home'
    // })
    wx.navigateBack({
      delta: 1   //默认值是1
    })
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