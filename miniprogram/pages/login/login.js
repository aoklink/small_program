var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ppy: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // wx.login({
    //   //获取code
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       ppy: res.code
    //     })
    //   }
    // })
  //   var that = this;
  //   // 查看是否授权
  //   wx.getSetting({
  //     success: function (res) {
  //       if (res.authSetting['scope.userInfo']) {
  //         wx.getUserInfo({
  //           success: function (res) {
  //             console.log("授权成功")
  //             us.nickName = res.userInfo.nickName
  //             us.avatarUrl = res.userInfo.avatarUrl
  //             wx.login({
  //               success: function (res) {
  //                 console.log(res.code)
  //                 wx.request({
  //                   url: app.globalData.lp+'user/login', // 仅为示例，并非真实的接口地址
  //                   method: 'POST',
  //                   data: {
  //                     wx_code: that.data.ppy,
  //                     user_type: us.ut,
  //                     request_time: us.rt,
  //                     platform: us.pt,
  //                     tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
  //                     login_type: "wx",
  //                     network: us.nw,
  //                     product_id: us.pi,
  //                     app_version: us.av
  //                   },
  //                   header: {
  //                     'content-type': 'application/json' // 默认值
  //                   },
  //                   success(res) {
  //                     if(res.data.code == 103) {
  //                       wx.navigateTo({
  //                         url: '../cellnumber/cellnumber',
  //                         // url: '../information/information',
  //                         success: function(res) {},
  //                         fail: function(res) {},
  //                         complete: function(res) {},
  //                       })
  //                     } else if (res.data.code == 200){
  //                       console.log("ok")
  //                       wx.navigateTo({
  //                         url: '../link/link',
  //                         success: function (res) { },
  //                         fail: function (res) { },
  //                         complete: function (res) { },
  //                       })
  //                     }
  //                   }
  //                 })
  //               }
  //             })
  //           }
  //         });
  //       }
  //     }
  //   })
  },
  bindGetUserInfo: function (e) {
    // console.log(res)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      // console.log(getApp().globalData.openid)
      var that = this
      wx.login({
        //获取code
        success: function (res) {
          console.log(res)
          that.setData({
            ppy: res.code
          })
          console.log(e.detail.userInfo)
          wx.request({
            url: app.globalData.lp + 'user/login', // 仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
              wx_code: that.data.ppy,
              user_type: us.ut,
              request_time: us.rt,
              platform: us.pt,
              tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
              login_type: "wx",
              network: us.nw,
              product_id: us.pi,
              app_version: us.av
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              if (res.data.code == 103) {
                wx.navigateTo({
                  url: '../cellnumber/cellnumber',
                  // url: '../information/information',
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              } else if (res.data.code == 200) {
                wx.navigateTo({
                  url: '../link/link',
                  success: function (res) { },
                  fail: function (res) { },
                  complete: function (res) { },
                })
              }
            }
          })
        }
      })
      
      //
        
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  //获取用户信息接口
  queryUsreInfo: function () {
    wx.request({
      url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
      data: {
        openid: getApp().globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        getApp().globalData.userInfo = res.data;
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