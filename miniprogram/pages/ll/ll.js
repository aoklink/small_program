var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
// pages/mydata/mydata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    text: ''
  },
  handletouchmove: function (event) {
    // console.log(event)
    if (this.data.flag !== 0) {
      return
    }
    let currentX = event.touches[0].pageX;
    let currentY = event.touches[0].pageY;
    let tx = currentX - this.data.lastX;
    let ty = currentY - this.data.lastY;
    let text = "";
    //左右方向滑动
    // if (Math.abs(tx) > Math.abs(ty)) {
    //   if (tx < 0) {
    //     text = "向左滑动";
    //     this.data.flag = 1
    //   }
    //   else if (tx > 0) {
    //     text = "向右滑动";
    //     this.data.flag = 2
    //   }

    // }
    //上下方向滑动
    // else {
      if (ty < 0) {w
        text = "向上滑动";
        this.data.flag = 3

      }
      else if (ty > 0) {
        text = "向下滑动";
        this.data.flag = 4
      }

    // }

    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX;
    this.data.lastY = currentY;
    this.setData({
      text: text,
    });
  },

  handletouchtart: function (event) {
    // console.log(event)
    this.data.lastX = event.touches[0].pageX;
    this.data.lastY = event.touches[0].pageY;
  },
  handletouchend: function (event) {
    this.data.flag = 0
    this.setData({
      text: "没有滑动",
    });
  },
  
  //下拉刷新
  onPullDownRefresh: function () {
    console.log("刷新");

    wx.setNavigationBarTitle({
      title: '刷新中……'
    })//动态设置当前页面的标题。

    wx.showNavigationBarLoading();//在当前页面显示导航条加载动画。

    this.loadProduct2();//重新加载产品信息

    wx.hideNavigationBarLoading();//隐藏导航条加载动画。

    wx.stopPullDownRefresh();//停止当前页面下拉刷新。

    console.log("关闭");

    wx.setNavigationBarTitle({
      title: '寸草心+'
    })//动态设置当前页面的标题。

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.startPullDownRefresh({
    //   success: function (event) {
    //     console.log("刷新");
    //   }
    // })
    // wx.stopPullDownRefresh()
          
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