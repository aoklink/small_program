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
  /**
   * 生命周期函数--监听页面加载
   */
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
            ppy: res.code,
            olo: e.detail.userInfo.avatarUrl,
            pl: e.detail.userInfo.nickName
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
                // wx.navigateTo({
                //   url: '../link/link',
                //   success: function (res) { },
                //   fail: function (res) { },
                //   complete: function (res) { },
                // })
                that.setData({
                  nono: true,

                })
                us.uid = res.data.uid
                var uusso = res.data.uid
                wx.request({
                  url: 'https://ll.linkfeeling.cn/api/fitness/summary', // 仅为示例，并非真实的接口地址
                  method: 'POST',
                  data: {
                    "uid": uusso,
                    "user_type": us.ut,
                    "request_time": Date.parse(new Date()),
                    "platform": us.pt,
                    "tk": mmd.hexMD5(us.pi + ":" + us.ut + ":" + Date.parse(new Date())),
                    "network": us.nw,
                    "product_id": us.pi,
                    "app_version": us.av
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                    if (res.data.code == 200) {
                      console.log(res.data.data.summary)
                      let vc = res.data.data.summary
                      for (let i = 0; i < vc.length; i++) {
                        console.log(vc[i])
                        if (vc[i].name == '跑步机') {
                          that.setData({
                            pbj: Math.floor(vc[i].time / 60000),
                            mrun: vc[i].kc,
                          })
                          console.log(that.data.pbj)
                        }
                        if (vc[i].name == '椭圆机') {
                          that.setData({
                            tyj: Math.floor(vc[i].time / 60000),
                            myy: vc[i].kc,
                          })
                        }
                        if (vc[i].name == '单车') {
                          that.setData({
                            dc: Math.floor(vc[i].time / 60000),
                            mzy: vc[i].kc,
                          })
                        }
                        if (vc[i].name == '力量训练') {
                          that.setData({
                            llxl: Math.floor(vc[i].time / 60000),
                            mzp: vc[i].kc,
                          })
                        }
                      }
                      // 本地数据
                      that.setData({
                        oka: false,
                        // smi: res.data.data.total_time,
                        // skc: res.data.data.total_kc
                        smi: Math.floor(res.data.data.total_time / 60000),
                        skc: res.data.data.total_kc
                      })
                    }
                    else {
                      console.log(res.data)
                    }
                  }


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
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.login({
      //获取code
      success: function (res) {
        console.log(res)
        that.setData({
          hcc: res.code
        })
      }
    })
    wx.getNetworkType({
      success: function (res) {
        console.log(res.networkType);
        us.nw = res.networkType
      }
    })
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log("授权成功")
              us.nickName = res.userInfo.nickName
              that.setData({
                pl: res.userInfo.nickName,
                olo: res.userInfo.avatarUrl
              })
              us.avatarUrl = res.userInfo.avatarUrl
              us.usname = res.userInfo.nickName
              wx.login({
                success: function (res) {
                  console.log(res.code)
                  wx.request({
                    url: app.globalData.lp + 'user/login', // 仅为示例，并非真实的接口地址
                    method: 'POST',
                    data: {
                      wx_code: that.data.hcc,
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
                      
                      if (res.data.code == 103) {
                        wx.navigateTo({
                          url: '../cellnumber/cellnumber',
                          // url: '../information/information',
                          success: function (res) { },
                          fail: function (res) { },
                          complete: function (res) { },
                        })
                      }
                      else if (res.data.code == 200) {
                        console.log(res.data.data)
                        us.uid = res.data.data.uid
                        that.setData({
                          nono: true,
                        })
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
                            if (res.data.code == 200) {
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
                            }
                          }
                        })
                      }
                    }
                  })
                }
              })
            }
          });
        }
        else {
          that.setData({
            nono: false
          })
        }
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