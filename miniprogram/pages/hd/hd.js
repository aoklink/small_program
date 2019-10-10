var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
var user = require('../../utils/user.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindtime: '',
    uid: ''
  },
  Test: function (e) {
    var that = this;
    //接受h5页面传过来的参数
    var data = e.detail.data;
    console.log(data)
    var wboid = data[0].wboid;
    
  }, 
  // onShareAppMessage: function (res) {
  //   console.log(999);
  //   var that = this
  //   return {
  //     title: us.nickName + '的运动报告',
  //     path: '/pages/hd/hd?bind_time=' + that.data.bindtime + '&uid=' + that.data.uid,
  //     success: function (shareTickets) {
  //       // 转发成功
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //     },
  //     complete: function (res) {
  //       // 不管成功失败都会执行
  //     }
  //   }
  // },
  // onShareAppMessage: function (res) {
  //   var that = this
  //   // console.log(that.data.bindtime);
  //   return {
  //     // title: us.nickName + '的运动报告',
  //     title: '123',
  //     // path: 'https://ll.linkfeeling.cn/wx/share.html?bind_time=' + that.data.bindtime + '&uid=' + that.data.uid,
  //     path: 'https://ll.linkfeeling.cn/wx/share.html?bind_time=1557540496466&uid=d255540aa900743c90dcc33ab7a11b30&yzy=10',
  //     success: function (shareTickets) {
  //       // 转发成功
  //     },
  //     fail: function (res) {
  //       // 转发失败
  //     },
  //     complete: function (res) {
  //       // 不管成功失败都会执行
  //     }
  //   }
  // },
  onShareAppMessage: function (res) {
    console.log(88);
    var that = this
    return {
      title: us.nickName + '的运动报告',
      path: '/pages/hd/hd?bind_time=' + that.data.bindtime + '&uid=' + that.data.uid,
      // path: '/pages/hd/hd?bind_time=1562672595863&uid=8dd14058a21b109b34bf7a93bb9b7462',
      success: function (shareTickets) {
        // 转发成功
        console.log(77)
      },
      fail: function (res) {
        // 转发失败
        console.log(66)
      },
      complete: function (res) {
        // 不管成功失败都会执行
      }
    }
  },
  handleGetMessage: function (e) {
    // console.log(e)
    console.log(e.detail.data)
    var data = e.detail.data
    us.add = data[0].add
    us.daynu = data[0].daynu
    us.hadd = data[0].aadd
    us.hsatit = data[0].hsatit
    us.hscore = data[0].hscore
    us.htimga = data[0].htimga
    us.oll = data[0].oll
    us.otup = data[0].otup
    us.scccal = data[0].scccal
    us.sctime = data[0].sctime
    us.yzyavatarUrl = data[0].yzyavatarUrl
    us.yzytime = data[0].yzytime
    us.yzyuid = data[0].yzyuid
    us.qrcode = data[0].qrcode
    us.jz = data[0].jz
    us.pjh = data[0].pjh
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    this.setData({
      bindtime: e.bind_time || app.globalData.bindtime || us.bindtimecurrent,
      uid: e.uid || us.uid,
      src: e.src || app.globalData.src || us.src,
      url: us.src
    })
    console.log(this.data.bindtime)
    console.log(this.data.uid)
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

  }
})