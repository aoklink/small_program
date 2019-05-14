var app = getApp();
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
var user = require('../../utils/user.js');
Page({
  data: {
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }]
  },
  // 滚动切换标签样式
  go: function (e) {
    wx.navigateTo({
      url: '../yy/yy?id=123',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  getCurrentPageUrl() {
    var pages = getCurrentPages() //获取加载的页面
    var currentPage = pages[pages.length - 1] //获取当前页面的对象
    var url = currentPage.route //当前页面url
    console.log(url)
    return url
  },
  onShareAppMessage: function (res) {
    console.log(999);
    var that = this
    return {
      title: us.nickName + '的运动报告',
      path: '/pages/hd/hd?bind_time=' + that.data.bindtime + '&uid=' + that.data.uid,
      success: function (shareTickets) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      },
      complete: function (res) {
        // 不管成功失败都会执行
      }
    }
  },
  onLoad: function (e) {
    app.globalData.bindtime = 1557540496466
    us.bindtimecurrent = 1557540496466
    us.uid = 'd255540aa900743c90dcc33ab7a11b30'
  }
})