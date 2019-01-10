var app = getApp();
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tr: true,
    yzy: '',
    oo: true,
    ok: true,
    tit: '手机号已绑定，请重新输入',
    rrr: true
  },
  cy: function (e) {
    let that = this;
    let nb = e.detail.value;
    var phone = that.data.yzy;
    this.setData({
      yzy: nb,
    })
    if(nb.length > 0){
      that.setData({
        oo: false
      })
    }else{
      that.setData({
        oo: true
      })
    }
    if (nb.length > 10) {
      that.setData({
        ok: false
      })
    } else {
      that.setData({
        ok: true
      })
    }
  },
  getfocus:function () {
    this.setData({
      tr: true
    })
    console.log()
  },
  tt: function () {
    this.getfocus()
  },
  yz: function () {
    let that = this;
    that.setData({
      rrr: true
    })
  },
  cyzy: function (e) {
    var that = this
    console.log(e.detail.value)
    if (e.detail.value.length == 11) {
      that.setData({
        ok: false
      })
    }
  },
  check: function () {
    var that = this;
    setTimeout(function () {
      var phone = that.data.yzy;
      if (!(/^1[3456789]\d{9}$/.test(phone))) {
        that.setData({
          rrr: false,
          tit: '手机号格式错误，请重新输入'
        })
      }
      else{
        us.mob = that.data.yzy
        let kt = mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt)
        wx.request({
          url: app.globalData.lp +'user/check_register', // 仅为示例，并非真实的接口地址
          method: 'POST',
          data: {
            phone_num: us.mob,
            user_type: us.ut,
            request_time: us.rt,
            platform: us.pt,
            tk: kt,
            network: us.nw,
            product_id: us.pi,
            app_version: us.av
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res.data.code)
            if (res.data.code == 103){
              console.log(res.data.code == 103?true:false)
              console.log("发送")
              wx.request({
                url: app.globalData.lp + 'user/get_code', // 仅为示例，并非真实的接口地址
                method: 'POST',
                data: {
                  phone_num: us.mob,
                  user_type: us.ut,
                  request_time: us.rt,
                  platform: us.pt,
                  tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
                  network: us.nw,
                  product_id: us.pi,
                  app_version: us.av
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success(res) {
                  console.log(res.code)
                  wx.navigateTo({
                    url: '../smscode/smscode',
                    success: function (res) { },
                    fail: function (res) { },
                    complete: function (res) { },
                  })
                }
              }) 
            } else if (res.data.code == 104) {
              console.log("手机号已注册")
              that.setData({
                rrr: false,
                tit: '手机号已注册'
              })
            } else{
              console.log(res.data)
            }
          }
        })
        
      }
    },200)
  },
  clean: function () {
    this.setData({
      yzy: ''
    })
    this.getfocus()
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
    // var that = this;
    // setTimeout(function(){
      this.getfocus()
    // },500)
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