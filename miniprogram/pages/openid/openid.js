// pages/home/home.js
const APP_ID = 'wxcb5d9b79f76b11b7'; //输入小程序appid
const APP_SECRET = '12ef7eae9fec908eb4567fb01acab5da'; //输入小程序app_secret
var OPEN_ID = '' //储存获取到openid
var SESSION_KEY = '' //储存获取到session_key
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getOpenIdTap: function () {
    var that = this;
    wx.login({
      success: function (res) {
        console.log(res)
        wx.request({
          //获取openid接口
          url: 'https: //api.weixin.qq.com/sns/jscode2session',
          data: {
            appid: APP_ID,
            secret: APP_SECRET,
            js_code: res.code,
            grant_type: 'authorization_code'
          },
          method: 'GET',
          success: function (res) {
            console.log(res.data)
            OPEN_ID = res.data.openid; //获取到的openid
            SESSION_KEY = res.data.session_key; //获取到session_key
            console.log(OPEN_ID.length)
            console.log(SESSION_KEY.length)
            that.setData({
              openid: res.data.openid.substr(0,
                10) + '********' + res.data.openid.substr(res.data.openid.length - 8, res.data.openid.length),
              session_key: res.data.session_key.substr(0,
                8) + '********' + res.data.session_key.substr(res.data.session_key.length - 6, res.data.session_key.length)
            })
          }
        })
      }
    })
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