var app = getApp();
var mmd = require('../../utils/mmd.js');
var us = getApp().globalData.userInfo
//////////////////////

//当前测试lp为link123



//////////////////////
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 2,
    // imgboxa: [],
    imgboxa: [],
    fontFamily: 'FT',
    nono: true,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ppy: '',
    oka: true,
    smi: '-',
    bgbg: false,
    hcc: '',
    skc: '-',
    mrun: '-',
    myy: '-',
    mzy: '-',
    mzp: '-',
    pbj: '-',
    tyj: '-',
    ybc: [],
    dc: '-',
    llxl: '-',
    pl: '',
    olo: '',
    bg: true,
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
    trt: 0,
    yb: [],
    act: [],
    seeall: ''
  },
  seeglo: function () {
    this.setData({
      seeall: true
    })
  },
  gomy: function () {
    wx.navigateTo({
      url: '../my/my',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  mycell: function () {
    wx.navigateTo({
      url: '../mycellhuan/mycellhuan',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
  call: function () {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.cell //仅为示例，并非真实的电话号码
    })
  },
  mapp: function () {
    wx.openLocation({
      latitude: 30.1782620143, //目的地位置
      longitude: 120.1411628723,
      scale: 15,
      name: '领客菲力健身房', //自定义
      address: '杭州市滨江区浦沿街道东信大道66号启迪楼202' //自定义
    })
  },
  gomap: function () {
    wx.navigateTo({
      url: '../mapc/mapc',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  fullpage: function (event) {
    var that = this
    var ink = event.currentTarget.dataset['index'];
    var zybox = JSON.parse(JSON.stringify(that.data.imgboxa))
    var nba = JSON.parse(JSON.stringify(that.data.imgboxa))
    zybox.splice(0, ink)
    nba.splice(ink, nba.length - ink)
    var d = zybox.concat(nba)
    wx.previewImage({
      current: d[0], // 当前显示图片的http链接
      urls: d // 需要预览的图片http链接列表
    })
  },
  gopp: function(e){
    console.log(e.currentTarget.dataset.inpp)
    us.inpp = e.currentTarget.dataset.inpp
    wx.navigateTo({
      url: '../activity/activity',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  fullno: function () {
    this.setData({
      bgbg: false,
      bg: true
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
          // wx.request({
          //   url: app.globalData.lp + 'user/login', // 仅为示例，并非真实的接口地址
          //   method: 'POST',
          //   data: {
          //     wx_code: that.data.ppy,
          //     user_type: us.ut,
          //     request_time: us.rt,
          //     platform: us.pt,
          //     tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
          //     login_type: "wx",
          //     network: us.nw,
          //     product_id: us.pi,
          //     app_version: us.av
          //   },
          //   header: {
          //     'content-type': 'application/json' // 默认值
          //   },
          //   success(res) {
          //     if (res.data.code == 103) {
          //       wx.navigateTo({
          //         url: '../cellnumber/cellnumber',
          //         // url: '../information/information',
          //         success: function (res) { },
          //         fail: function (res) { },
          //         complete: function (res) { },
          //       })
          //     } else if (res.data.code == 200) {
          //       // wx.navigateTo({
          //       //   url: '../link/link',
          //       //   success: function (res) { },
          //       //   fail: function (res) { },
          //       //   complete: function (res) { },
          //       // })
          //       that.setData({
          //         nono: true,

          //       })
          //       us.uid = res.data.data.uid
          //       var uusso = res.data.data.uid
          //       console.log(res.data.data.uid)
          //       wx.request({
          //         url: 'https://ll.linkfeeling.cn/api/fitness/summary', // 仅为示例，并非真实的接口地址
          //         method: 'POST',
          //         data: {
          //           "uid": uusso,
          //           "user_type": us.ut,
          //           "request_time": Date.parse(new Date()),
          //           "platform": us.pt,
          //           "tk": mmd.hexMD5(us.pi + ":" + us.ut + ":" + Date.parse(new Date())),
          //           "network": us.nw,
          //           "product_id": us.pi,
          //           "app_version": us.av
          //         },
          //         header: {
          //           'content-type': 'application/json' // 默认值
          //         },
          //         success(res) {
          //           if (res.data.code == 200) {
          //             console.log(res.data.data.summary)
          //             let vc = res.data.data.summary
                      
          //             // 本地数据
          //             that.setData({
          //               oka: false,
          //               // smi: res.data.data.total_time,
          //               // skc: res.data.data.total_kc
          //               smi: Math.floor(res.data.data.total_time / 60000),
          //               skc: res.data.data.total_kc
          //             })
          //           }
          //           else {
          //             console.log(res.data)
          //           }
          //         }


          //       })
          //     }
          //   }
          // })
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
                  url: app.globalData.lp + 'platform/gym/info',
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
                    app_version: us.av,
                    gym_name: '领客菲力概念店'
                  },
                  header: {
                    'content-type': 'application/json' // 默认值
                  },
                  success(res) {
                    console.log(res)
                    if (res.data.code == 200) {
                      // console.log(res.data.data)
                      // console.log(typeof (res.data.data))
                      // console.log(res.data.data.info)
                      // console.log(typeof (res.data.data.info.display_img_urls))
                      // console.log(res.data.data.info.display_img_urls)
                      //
                      var str1 = res.data.data.info.display_img_urls
                      var arr1 = []
                      var leng1
                      leng1 = str1.replace(/(^\[*)|(\]*$)/g, "").split(",")
                      for (var i = 0; i < leng1.length; i++) {
                        arr1.push(leng1[i].replace(/(^"*)|("*$)/g, ""))
                      }
                      // console.log(arr1)
                      us.shopcell = res.data.data.info.phone
                      us.address = res.data.data.info.address
                      us.shopname = res.data.data.info.name
                      us.shoplogo = res.data.data.info.logo_url
                      that.setData({
                        shopadd: res.data.data.info.address,
                        shopname: res.data.data.info.name,
                        opqc: arr1.length,
                        imgboxa: arr1,
                        cell: res.data.data.info.phone
                      })
                      // console.log(that.data.imgboxa)
                      // console.log(res.data.data.class)
                      // console.log(res.data.data.class.length)
                      var yby = []
                      for (var i = 0; i < res.data.data.class.length; i++) {
                        var str = res.data.data.class[i].img_urls
                        var arr = []
                        var leng
                        leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                        for (var j = 0; j < leng.length; j++) {
                          arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                        }
                        // console.log(arr)
                        res.data.data.class[i].lun = arr
                        yby.push(arr[0])
                        // console.log(yby)
                      }
                      // console.log(yby)
                      for (var i = 0; i < res.data.data.class.length; i++) {
                        res.data.data.class[i].popl = yby[i]
                      }
                      // console.log(res.data.data.class)
                      us.aclun = res.data.data.class
                      that.setData({
                        act: res.data.data.class
                      })
                      if (that.data.act.length < 4) {
                        that.setData({
                          seeall: true
                        })
                      }
                      //coach
                      var yby = []
                      for (var i = 0; i < res.data.data.coach.length; i++) {
                        var str = res.data.data.coach[i].img_url
                        var arr = []
                        var leng
                        leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                        for (var j = 0; j < leng.length; j++) {
                          arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                        }
                        // console.log(arr)
                        yby.push(arr[0])
                        // console.log(yby)
                      }

                      // console.log(res.data.data.coach[1].label)

                      // console.log(res.data.data.coach)
                      var opl = []
                      for (var i = 0; i < res.data.data.coach.length; i++) {
                        var str = res.data.data.coach[i].label
                        var parr = str.split(' ');
                        // console.log(parr)
                        res.data.data.coach[i].lab = parr
                      }
                      for (var i = 0; i < res.data.data.coach.length; i++) {
                        res.data.data.coach[i].popl = yby[i]
                      }
                      var yyb = []
                      for (var i = res.data.data.coach.length - 1; i >= 0; i--) {
                        yyb.push(res.data.data.coach[i])
                      }
                      // console.log(res.data.data.coach[1].lab[0])
                      that.setData({
                        opll: yyb
                      })
                      //健身房标签
                      var opl = []

                      var str = res.data.data.info.label
                      var parr = str.split(' ');
                      // console.log(parr)
                      res.data.data.info.lab = parr


                      that.setData({
                        yb: parr
                      })
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
    }),
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
                          url: app.globalData.lp+'platform/gym/info',
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
                            app_version: us.av,
                            gym_name: '领客菲力概念店'
                          },
                          header: {
                            'content-type': 'application/json' // 默认值
                          },
                          success(res) {
                            console.log(res)
                            if (res.data.code == 200) {
                              // console.log(res.data.data)
                              // console.log(typeof (res.data.data))
                              // console.log(res.data.data.info)
                              // console.log(typeof (res.data.data.info.display_img_urls))
                              // console.log(res.data.data.info.display_img_urls)
                              //
                              var str1 = res.data.data.info.display_img_urls
                              var arr1 = []
                              var leng1
                              leng1 = str1.replace(/(^\[*)|(\]*$)/g, "").split(",")
                              for (var i = 0; i < leng1.length; i++) {
                                arr1.push(leng1[i].replace(/(^"*)|("*$)/g, ""))
                              }
                              // console.log(arr1)
                              us.shopcell = res.data.data.info.phone
                              us.address = res.data.data.info.address
                              us.shopname = res.data.data.info.name
                              us.shoplogo = res.data.data.info.logo_url
                              that.setData({
                                shopadd: res.data.data.info.address,
                                shopname: res.data.data.info.name,
                                opqc: arr1.length,
                                imgboxa: arr1,
                                cell: res.data.data.info.phone
                              })
                              // console.log(that.data.imgboxa)
                              // console.log(res.data.data.class)
                              // console.log(res.data.data.class.length)
                              var yby = []
                              for (var i = 0; i < res.data.data.class.length;i++){
                                var str = res.data.data.class[i].img_urls
                                var arr = []
                                var leng
                                leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                                for (var j = 0; j < leng.length; j++) {
                                  arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                                }
                                // console.log(arr)
                                res.data.data.class[i].lun = arr
                                yby.push(arr[0])
                                // console.log(yby)
                              }
                              // console.log(yby)
                              for (var i = 0; i < res.data.data.class.length; i++){
                                res.data.data.class[i].popl = yby[i]
                              }
                              // console.log(res.data.data.class)
                              us.aclun = res.data.data.class
                              that.setData({
                                act: res.data.data.class
                              })
                              if(that.data.act.length < 4){
                                that.setData({
                                  seeall: true
                                })
                              }
                              //coach
                              var yby = []
                              for (var i = 0; i < res.data.data.coach.length; i++) {
                                var str = res.data.data.coach[i].img_url
                                var arr = []
                                var leng
                                leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                                for (var j = 0; j < leng.length; j++) {
                                  arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                                }
                                // console.log(arr)
                                yby.push(arr[0])
                                // console.log(yby)
                              }
                              
                              // console.log(res.data.data.coach[1].label)
                             
                              // console.log(res.data.data.coach)
                              var opl = []
                              for (var i = 0; i < res.data.data.coach.length; i++) {
                                var str = res.data.data.coach[i].label
                                var parr = str.split(' ');
                                // console.log(parr)
                                res.data.data.coach[i].lab = parr
                              }
                              for (var i = 0; i < res.data.data.coach.length; i++) {
                                res.data.data.coach[i].popl = yby[i]
                              }
                              var yyb = []
                              for (var i = res.data.data.coach.length-1; i >= 0; i--){
                                yyb.push(res.data.data.coach[i])
                              }
                              // console.log(res.data.data.coach[1].lab[0])
                              that.setData({
                                opll: yyb
                              })
                              //健身房标签
                              var opl = []
                              
                              var str = res.data.data.info.label
                              var parr = str.split(' ');
                              // console.log(parr)
                              res.data.data.info.lab = parr
                             
                              
                              that.setData({
                                yb: parr
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
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://ll.linkfeeling.cn/fonts/DIN%201451%20Std%20Engschrift.TTF")',
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