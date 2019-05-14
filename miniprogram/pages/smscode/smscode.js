var app = getApp();
var mmd = require('../../utils/mmd.js');
var us = getApp().globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Length: 4,        //输入框个数
    isFocus: true,    //聚焦
    Value: "",        //输入的内容
    ispassword: false, //是否密文显示 true为密文， false为明文。
    mob: '',
    cur: '0',
    je1: true,
    je2: false,
    je3: false,
    je4: false,
    dat: 60,
    pl: true,
    yt: "验证码已发送",
    po: true,
    jj: '',
    fontFamily: 'FT'
  },
  zy: function () {
    
  },
  check: function () {
    let that = this
    console.log("check")
    wx.request({
      url: app.globalData.lp + 'account/check_sms_code', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        phone_num: us.mob,
        user_type: us.ut,
        request_time: us.rt,
        platform: us.pt,
        tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        network: us.nw,
        product_id: us.pi,
        app_version: us.av,
        sms_code: this.data.Value,
        gym_name: us.gym_name
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data.code)
        if (res.data.code == 200) {
          wx.navigateTo({
            url: '../information/information',
            success: function (res) { },
            fail: function (res) { },
            complete: function (res) { },
          })
        } else {
          console.log('no')
          that.setData({
            yt: "验证码错误，请重新输入",
            pl: false,

          })
          setTimeout(function () {
            that.setData({
              Value: '',
              cur: 0,
              jj: ''
            })
            console.log(that.data.Value.length)
          }, 1000)
        }
      }  
    })  
  },
  Focus(e) {
    var that = this;
    console.log(e.detail.value+'kk');
    us.smcode = e.detail.value
    var inputValue = e.detail.value;
    that.setData({
      Value: inputValue,
      cur: inputValue.length
    })
    if(inputValue.length == 4){
      that.check()
    }
  },
  Tap() {
    var that = this;
    that.setData({
      isFocus: true,
    })
  },
  repeat: function () {
    let that = this
    console.log(that.data.isFocus)
    if(that.data.dat < 1){
      console.log("请求验证码")
      that.setData({
        pl: true,
        po: true,
        dat: 60,
        yt: "验证码已发送",
        cur: 0
      })
      let interval = setInterval(function () {
        that.setData({
          dat: that.data.dat - 1
        })
        if (that.data.dat < 1) {
          that.setData({
            po: false
          })
          clearInterval(interval);
        }
      }, 1000)
    }
  },
  formSubmit(e) {
    console.log(e.detail.value.password);
  },
  onLoad: function () {
    console.log(app.globalData.userInfo.mob)
    this.setData({
      mob: app.globalData.userInfo.mob
    })
    let that = this
    let interval = setInterval(function(){
      that.setData({
        dat: that.data.dat - 1 
      })
      if (that.data.dat < 1) {
        that.setData({
          po: false
        })
        clearInterval(interval);
      }
    },1000)
    console.log("repeat")
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
  onReady: function () {
  
  }
})
