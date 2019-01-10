// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: 'WeChat',
    act: false,
    staffA: { firstName: 'Hulk', lastName: 'Hu' },
    staffB: { firstName: 'Shang', lastName: 'You' },
    staffC: { firstName: 'Gideon', lastName: 'Lin' },
    zero: 0,
    jj: [1, 2, 3, 4]
  },
  gotoPage: function (e) {
    var page = e.currentTarget.dataset.page;
    wx.navigateTo({
      url: '../charts/' + page + '/' + page
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this);
    // var that = this;
    // console.log(that);
    wx.login({
      //获取code
      success: function (res) {
        console.log(res)
      }
    })
  },
  changeName (e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  },
  yzy () {
    this.lcl();
  },
  lcl () {
    console.log('lcl');
  },
  add () {
    let length = this.data.jj.length
    console.log(length)
    this.data.jj.push(5)
    this.setData({
      'jj' : this.data.jj
    }),
    console.log(this.data.jj)
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