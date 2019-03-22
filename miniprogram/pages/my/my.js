var app = getApp();
var mmd = require('../../utils/mmd.js');
var us = getApp().globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nono: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ppy: '',
    oka: true,
    smi: '-',
    hcc: '',
    skc: '-',
    mrun: '-',
    myy: '-',
    mzy: '-',
    mzp: '-',
    pbj: '-',
    tyj: '-',
    dc: '-',
    llxl: '-',
    pl: '',
    olo: '',
    spt: false,
    ww: {
      msg: "ok",
      code: "200",
      data: {
        total_kc: 3000006,
        data: [{
          name: "椭圆机",
          kc: 18,
          time: 5450700070
        }, {
          name: "跑步机",
          kc: 12,
          time: 1363800000800
        }, {
          name: "单车",
          kc: 6,
          time: 1255600
        }],
        total_time: 694000021
      }
    },
    sex: '',
    age: '',
    name: '',
    goal: '',
    weight: '',
    head_icon: '',
    height: '',
    fontFamily: 'FT'
  },
  mycell: function () {
    wx.navigateTo({
      url: '../mycellhuan/mycellhuan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  godetal: function () {
    wx.navigateTo({
      url: '../sportdatail/sportdatail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  prod: function () {
    wx.navigateTo({
      url: '../mydata/mydata',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  goselect: function () {
    wx.navigateTo({
      url: '../select/select',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  gohouse: function () {
    wx.navigateTo({
      url: '../myhouse/myhouse',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  gocellhuan: function () {
    wx.navigateTo({
      url: '../mycellhuan/mycellhuan',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/user/account_info',
      method: 'POST',
      data: {
        uid: us.uid,
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
        console.log(res.data)
        that.setData({
          sex: res.data.data.gender,
          age: res.data.data.age,
          name: res.data.data.name,
          goal: res.data.data.goal,
          weight: res.data.data.weight,
          head_icon: res.data.data.head_icon,
          height: res.data.data.stature,
          pkk: res.data.data.gender == '男' ? 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/my/boy.png' : 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/my/girl.png'
        })
        us.sex = res.data.data.gender
        us.age =  res.data.data.age
        us.height =  res.data.data.stature
        us.weight = res.data.data.weight
        us.goal = res.data.data.goal
        us.nickName = res.data.data.name
        us.avatarUrl = res.data.data.head_icon
      }
    })
    ,
      wx.loadFontFace({
        family: this.data.fontFamily,
        source: 'url("https://www.linkfeeling.cn/platform/font/DIN 1451 Std Engschrift.TTF")',
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