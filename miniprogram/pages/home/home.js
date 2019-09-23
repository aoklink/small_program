var app = getApp();
var mmd = require('../../utils/mmd.js');
var user = require('../../utils/user.js');
var us = getApp().globalData.userInfo
//////////////////////

//当前测试lp为link123
//////////////////////
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oka: true,
    getok: false,
    okb: false,
    pt: Math.random(),
    current: 2,
    // imgboxa: [],
    imgboxa: [],
    fontFamily: 'FT',
    nono: true,
    yoyo: true,
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
    seeall: '',
    yzyai: '',
    yyy: [1],
    yba: ["健康阳光", "态度和蔼", "国际认证"],
    ybb: ["身材超棒", "高级认证", "擅长瘦身"],
    opllbb: [{
        img_url: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720752123299.jpg",
        name: "leo",
        label: "健康阳光 态度和蔼 国际认证",
        // lab: this.data.yba,
        popl: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720752123299.jpg"
      },
      {
        img_url: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720706468465.jpg",
        name: "王静",
        label: "身材超棒 高级认证 擅长瘦身",
        // lab: this.data.ybb, 
        popl: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720706468465.jpg"
      },
      {
        img_url: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720706468465.jpg",
        name: "王静",
        label: "身材超棒 高级认证 擅长瘦身",
        // lab: this.data.ybb, 
        popl: "https://link-imgs.oss-cn-hangzhou.aliyuncs.com/link-platform/1554720706468465.jpg"
      }
    ]
  },
  seeglo: function() {
    this.setData({
      seeall: true
    })
  },
  gomy: function() {
    wx.navigateTo({
      url: '../my/my',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  mycell: function() {
    wx.navigateTo({
      url: '../mycellhuan/mycellhuan',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  prod: function() {
    wx.navigateTo({
      url: '../mydata/mydata',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  call: function() {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.cell //仅为示例，并非真实的电话号码
    })
  },
  mapp: function() {
    wx.openLocation({
      latitude: 30.1782620143, //目的地位置
      longitude: 120.1411628723,
      scale: 15,
      name: '领客菲力健身房', //自定义
      address: '杭州市滨江区浦沿街道东信大道66号启迪楼202' //自定义
    })
  },
  gomap: function() {
    wx.navigateTo({
      url: '../mapc/mapc',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  fullpage: function(event) {
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
  gopp: function(e) {
    console.log(e.currentTarget.dataset.inpp)
    us.inpp = e.currentTarget.dataset.inpp
    wx.navigateTo({
      url: '../activity/activity',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  fullno: function() {
    this.setData({
      bgbg: false,
      bg: true
    })
  },
  getCode: function () {
    // 查看是否授权
    var that = this
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              console.log("手按", res)
              var uee = res.encryptedData
              var uvv = res.iv
              wx.setStorageSync('userInfo', res.userInfo)
              wx.setStorage({
                key: 'userInfo',
                data: res.userInfo
              })
              console.log("授权成功")
              console.log(res.userInfo.nickName)
              console.log(user.name)
              user.uee = uee
              user.uvv = uvv
              user.name = res.userInfo.nickName
              user.head = res.userInfo.avatarUrl
              console.log(user.name)
              console.log(res.userInfo.nickName)
              us.nickName = res.userInfo.nickName
              console.log(res.userInfo.nickName)
              us.avatarUrl = res.userInfo.avatarUrl
              us.usname = res.userInfo.nickName
              wx.login({
                success: function (res) {
                  console.log(res.code)
                  that.setData({
                    hcc: res.code
                  })
                  console.log(that.data.hcc)
                  console.log(uee)
                  console.log(uvv)
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
                      app_version: us.av,
                      wx_data: uee,
                      wx_iv: uvv,
                      gym_name: us.gym_name || user.gym_name || "gaote_fitness"
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
                          url: 'https://ll.linkfeeling.cn/api/account/info',
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
                            gym_name: us.gym_name
                          },
                          header: {
                            'content-type': 'application/json' // 默认值
                          },
                          success(res) {
                            console.log(res.data)
                            us.sex = res.data.data.gender
                            us.age = res.data.data.age
                            us.height = res.data.data.stature
                            us.weight = res.data.data.weight
                            us.goal = res.data.data.goal
                            us.nickName = decodeURIComponent((res.data.data.name).replace(/\+/g, '%20'))
                            us.avatarUrl = res.data.data.head_icon
                            that.setData({
                              pl: us.nickName,
                              olo: us.avatarUrl
                            })
                          }
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
                            gym_name: us.gym_name
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
                              var arr1 = str1
                              // var leng1
                              // leng1 = str1.replace(/(^\[*)|(\]*$)/g, "").split(",")
                              // for (var i = 0; i < leng1.length; i++) {
                              //   arr1.push(leng1[i].replace(/(^"*)|("*$)/g, ""))
                              // }
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
                                var arr = str
                                // var leng
                                // leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                                // for (var j = 0; j < leng.length; j++) {
                                //   arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                                // }
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
                              console.log(res.data.data.coach)
                              var yyb = []
                              for (var i = res.data.data.coach.length - 1; i >= 0; i--) {
                                yyb.push(res.data.data.coach[i])
                              }
                              // console.log(res.data.data.coach[1].lab[0])
                              that.setData({
                                opll: yyb
                              })
                              var lclai = 1
                              if (that.data.opll.length == 1) {
                                lclai = 1
                                console.log(1)
                              }
                              if (that.data.opll.length == 2) {
                                lclai = 2
                                console.log(1)
                              }
                              if (that.data.opll.length > 2) {
                                lclai = 2.5
                                console.log(1)
                              }

                              that.setData({
                                yzyai: lclai
                              })
                              //健身房标签
                              var opl = []

                              var str = res.data.data.info.label
                              var parr = str.split(' ');
                              // console.log(parr)
                              res.data.data.info.lab = parr


                              that.setData({
                                yb: parr,
                                yoyo: false
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
            nono: false,
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  bindGetUserInfo: function(e) {
    // console.log(res)
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      // console.log(getApp().globalData.openid)
      var that = this
      wx.getUserInfo({
        success: function(res) {
          console.log("授权成功", res)
          console.log(res.userInfo)
          that.setData({
            getok: false
          })
          var uee = res.encryptedData
          var uvv = res.iv
          wx.setStorageSync('userInfo', res.userInfo)
          wx.setStorage({
            key: 'userInfo',
            data: res.userInfo
          })
          // wx.setStorageSync('username', res.userInfo.nickName)
          // wx.setStorage({
          //   key: 'username',
          //   data: res.userInfo.nickName
          // })
          // console.log(user.name)
          user.uee = uee
          user.uvv = uvv
          user.name = res.userInfo.nickName
          user.head = res.userInfo.avatarUrl
          console.log(user.name)
          // console.log(res.userInfo.nickName)
          // if (res.userInfo.nickName.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g) != null) {
          //   res.userInfo.nickName = 'vip用户';
          // }
          console.log(res.userInfo.nickName)
          us.nickName = res.userInfo.nickName
          console.log(res.userInfo.nickName)
          // that.setData({
          //   pl: res.userInfo.nickName,
          //   olo: res.userInfo.avatarUrl
          // })
          us.avatarUrl = res.userInfo.avatarUrl
          us.usname = res.userInfo.nickName
          wx.login({
            success: function(res) {
              console.log(res.code)
              that.setData({
                hcc: res.code
              })
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
                  app_version: us.av,
                  wx_data: uee,
                  wx_iv: uvv,
                  gym_name: us.gym_name || user.gym_name || "link_office"
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success(res) {
                  console.log(res.data)

                  if (res.data.code == 103) {
                    -
                    wx.navigateTo({
                      url: '../cellnumber/cellnumber',
                      // url: '../information/information',
                      success: function(res) {},
                      fail: function(res) {},
                      complete: function(res) {},
                    })
                  } else if (res.data.code == 200) {
                    console.log(res.data.data)
                    us.uid = res.data.data.uid
                    that.setData({
                      nono: true,

                    })
                    wx.request({
                      url: 'https://ll.linkfeeling.cn/api/account/info',
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
                        gym_name: us.gym_name
                      },
                      header: {
                        'content-type': 'application/json' // 默认值
                      },
                      success(res) {
                        console.log(res.data)
                        us.sex = res.data.data.gender
                        us.age = res.data.data.age
                        us.height = res.data.data.stature
                        us.weight = res.data.data.weight
                        us.goal = res.data.data.goal
                        us.nickName = decodeURIComponent((res.data.data.name).replace(/\+/g, '%20'))
                        us.avatarUrl = res.data.data.head_icon
                        that.setData({
                          pl: us.nickName,
                          olo: us.avatarUrl
                        })
                      }
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
                        gym_name: us.gym_name
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
                          var arr1 = str1
                          // var leng1
                          // leng1 = str1.replace(/(^\[*)|(\]*$)/g, "").split(",")
                          // for (var i = 0; i < leng1.length; i++) {
                          //   arr1.push(leng1[i].replace(/(^"*)|("*$)/g, ""))
                          // }
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
                            var arr = str
                            // var leng
                            // leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
                            // for (var j = 0; j < leng.length; j++) {
                            //   arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
                            // }
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
                          var lclai = 1
                          if (that.data.opll.length == 1) {
                            lclai = 1
                            console.log(1)
                          }
                          if (that.data.opll.length == 2) {
                            lclai = 2
                            console.log(1)
                          }
                          if (that.data.opll.length > 2) {
                            lclai = 2.5
                            console.log(1)
                          }

                          that.setData({
                            yzyai: lclai
                          })

                          //健身房标签
                          var opl = []

                          var str = res.data.data.info.label
                          var parr = str.split(' ');
                          // console.log(parr)
                          res.data.data.info.lab = parr


                          that.setData({
                            yb: parr,
                            yoyo: false
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

    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  //获取用户信息接口
  queryUsreInfo: function() {
    wx.request({
      url: getApp().globalData.urlPath + 'hstc_interface/queryByOpenid',
      data: {
        openid: getApp().globalData.openid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
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
      url: app.globalData.lp + 'platform/gym/info',
      method: 'POST',
      data: {
        uid: 'e699a00e7e305e409cce8714c027130b',
        user_type: us.ut,
        request_time: us.rt,
        platform: us.pt,
        tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        network: us.nw,
        product_id: us.pi,
        app_version: us.av,
        gym_name: us.gym_name
        // gym_name: '高特'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        if (res.data.code == 200) {
          var str1 = res.data.data.info.display_img_urls
          var arr1 = str1
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
            var arr = str
            // var leng
            // leng = str.replace(/(^\[*)|(\]*$)/g, "").split(",")
            // for (var j = 0; j < leng.length; j++) {
            //   arr.push(leng[j].replace(/(^"*)|("*$)/g, ""))
            // }
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
          console.log(res.data.data.coach)
          var yyb = []
          for (var i = res.data.data.coach.length - 1; i >= 0; i--) {
            yyb.push(res.data.data.coach[i])
          }
          // console.log(res.data.data.coach[1].lab[0])
          that.setData({
            opll: yyb
          })
          var lclai = 1
          if (that.data.opll.length == 1) {
            lclai = 1
            console.log(1)
          }
          if (that.data.opll.length == 2) {
            lclai = 2
            console.log(1)
          }
          if (that.data.opll.length > 2) {
            lclai = 2.5
            console.log(1)
          }

          that.setData({
            yzyai: lclai
          })
          //健身房标签
          var opl = []

          var str = res.data.data.info.label
          var parr = str.split(' ');
          // console.log(parr)
          res.data.data.info.lab = parr

          console.log(parr)
          that.setData({
            yb: parr,
            yoyo: false
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log(decodeURIComponent('Leo+%E4%BA%95%E4%B9%9D'.replace(/\+/g, '%20')))
    // wx.loadFontFace({
    //   family: this.data.fontFamily,
    //   source: 'url("https://ll.linkfeeling.cn/fonts/DIN%201451%20Std%20Engschrift.TTF")',
    //   success(res) {
    //     console.log(res.status)
    //   },
    //   fail: function (res) {
    //     console.log(res.status)
    //   },
    //   complete: function (res) {
    //     console.log(res.status)
    //   }
    // });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    wx.getUserInfo({
      fail: function (res) {
        console.log('getAuthUserInfo', res);
        that.setData({
          getok: true,
        })
      },
      success: function (res) {
        console.log("手按", res)
        res = res.rawData
        console.log(typeof (res))
        res = JSON.parse(res)
        console.log(res)
        console.log(res.nickName)
        user.name = res.nickName
        user.head = res.avatarUrl
        console.log(user.name)
        us.nickName = res.nickName
        us.avatarUrl = res.avatarUrl
        console.log(res.avatarUrl)
        us.usname = res.nickName
        that.setData({
          getok: false,
          canIUse: false
        })
        //进入绑定手环
        that.getCode()
        console.log(that.data.getok)
      }
    });
    console.log(that.data.getok)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  formSubmit: function(e) {
    // form_id发给后台
    var form_id = e.detail.formId;
    console.log(form_id);
    wx.login({
      success: function(res) {
        console.log(res);
        wx.request({
          url: app.globalData.lp + 'user/weChat/notice/add',
          data: {
            id: e.detail.formId,
            code: res.code,
            uid: us.uid,
            user_type: us.ut,
            request_time: us.rt,
            platform: us.pt,
            tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
            login_type: "wx",
            network: us.nw,
            product_id: us.pi,
            app_version: us.av,
            gym: us.gym_name
          },
          method: 'POST',
          header: {
            'content-type': 'application/json', // 默认值
          },
          success(res) {
            console.log(res.data)
          },
        })
      }
    })
  },
  toChildPage: function() {}
})