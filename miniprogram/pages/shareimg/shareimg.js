var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
var user = require('../../utils/user.js');
// us.otup = 
// [
//   'https://ll.linkfeeling.cn/wx/a.png',
//   'https://ll.linkfeeling.cn/wx/f.png',
//   'https://ll.linkfeeling.cn/wx/d.png',
//   'https://ll.linkfeeling.cn/wx/b.png',
//   'https://ll.linkfeeling.cn/wx/e.png',
//   'https://ll.linkfeeling.cn/wx/c.png',
//   'https://ll.linkfeeling.cn/wx/g.png',
//   'https://ll.linkfeeling.cn/wx/g.png'
// ]
// app.globalData.bindtime = '1554982731292'
// us.uid = "7e44bc47069d2016144e175778a11359"
// us.avatarUrl  = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKg9tednwUD4JOOHCIicoRTgMyXkibXPtvXfr9oicMFrdMKwCgDIhJCweYfnvZaXyvvyiaH3IPlkDbdbw/132"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oka: true,
    oyo: true,
    sharebg: 'https://ll.linkfeeling.cn/wx/share.png', // 分享底部背景图
    shareTitle: '', // 分享标题
    shareCoverImg: 'https://ll.linkfeeling.cn/wx/share.png', // 分享封面图
    shareQrImg: 'https://img.linkfeeling.cn/link-platform/1557124892691268.jpg', // 分享小程序二维码
    headImg: '', //用户头像
    nickName: '', // 昵称
    ytu: [
      'https://ll.linkfeeling.cn/wx/a.png',
      'https://ll.linkfeeling.cn/wx/f.png',
      'https://ll.linkfeeling.cn/wx/d.png',
      'https://ll.linkfeeling.cn/wx/b.png',
      'https://ll.linkfeeling.cn/wx/e.png',
      'https://ll.linkfeeling.cn/wx/c.png',
      'https://ll.linkfeeling.cn/wx/g.png'
    ]
    // oll: '小明',
    // daynu: 12,
    // hscore: 87,
    // sctime: 66,
    // scccal: 99,
    // hsatit: '一个人肉包子',
    // add: '怡红院',
    // hadd: '长江壹号',
    // htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/icecream.png',
  },
  oppo: function () {
    wx.redirectTo({
      url: '../home/home',
    })
  },
  getMd: function (no) {
    var date = no;
    var seperator1 = "/";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
    console.log(currentdate)
    return currentdate;
  },
  downloadImg: function () {
    // 保存到相册
    var that = this
    wx.canvasToTempFilePath({
      canvasId: 'shareCanvas',
      success: function (res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            wx.showToast({
              title: '分享图片已保存到相册'
            })
            that.setData({
              isok: true
            })
          },
          fail: function (res) {
            console.log(res)
            doAuth('saveImageToPhotosAlbum')
          }
        })
      }
    }, this)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    console.log(us)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onLoad: function () {
    var there = this
    setTimeout(function () {
      there.setData({
        oka: false
      })
    }, 2000)
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var there = this
    //生成图片
    var locolurl
    wx.downloadFile({
      url: us.yzyavatarUrl,
      success: res => {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res.tempFilePath)
          locolurl = res.tempFilePath//将下载下来的地址给data中的变量变量
          // 创建画布
          var ctx = wx.createCanvasContext('shareCanvas')
          // 白色背景
          ctx.beginPath()
          ctx.setFillStyle('#fff')
          ctx.fillRect(0, 0, 285, 399)
          // 下载顶部图
          // ctx.beginPath()
          wx.getImageInfo({
            src: there.data.shareCoverImg,
            success: (res2) => {
              ctx.drawImage(res2.path, 0, 0, 285, 399)
              // 下载二维码
              wx.getImageInfo({
                src: us.qrcode,
                success: (res3) => {
                  let qrImgSize = 59
                  ctx.drawImage(res3.path, 215, 334, qrImgSize, qrImgSize)
                  ctx.stroke()

                  // 用户昵称
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：14px
                  ctx.fillText(us.oll, 65, 35)
                  //日期
                  ctx.setFillStyle('rgba(255,255,255,0.5)')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：10px
                  ctx.fillText(there.getMd(new Date(parseInt(us.yzytime))), 65, 50)
                  // 打卡天数
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.daynu, 21, 210)
                  //天字
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(us.daynu).length * 10 + 23
                  ctx.fillText('天', lon, 210)
                  //评分
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(36) // 文字字号：16px
                  ctx.fillText(us.hscore, 21, 140)
                  //时长
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.sctime, 226, 210)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(us.sctime).length * 10 + 228
                  ctx.fillText('分钟', lon, 210)

                  //热量
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.scccal, 121, 210)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(us.scccal).length * 10 + 123
                  ctx.fillText('千卡', lon, 210)

                  //本次运动相当于
                  ctx.setFillStyle('rgb(50,50,50)')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('您的本次运动相当于消耗了', 35, 305)
                  ctx.setFillStyle('#000')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText(us.hsatit, 35, 319)

                  //地址
                  // ctx.setFillStyle('#000')  // 文字颜色：黑色
                  // ctx.setFontSize(12) // 文字字号：16px
                  // ctx.fillText('FITTING GYM运动健身工作室', 32, 352)
                  ctx.setFillStyle('#000')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(us.hadd, 32, 367)
                  ctx.setFillStyle('#bbb')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText(us.add, 32, 382)

                  // ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                  // console.log(us.otup)
                  // 下载食物
                  wx.getImageInfo({
                    src: us.htimga,
                    success: (res99) => {
                      ctx.drawImage(res99.path, 200, 250, 68, 80)
                      // 下载器械
                      wx.getImageInfo({
                        src: locolurl,
                        success: (res4) => {
                          //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
                          ctx.arc(36, 39, 16, 0, Math.PI * 2, false)
                          // ctx.clip()
                          console.log(99)
                          // 绘制头像图片
                          var headImgSize = 32
                          ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
                          var ppk
                          var heih = 28
                          var htto = 235
                          ctx.draw(true)
                          if (us.otup.length == 0) {
                            ctx.draw(true)
                            there.setData({
                              oyo: false,
                            })
                          }
                          if (us.otup.length == 1) {
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ctx.draw(true)
                                there.setData({
                                  oyo: false,
                                })
                              }
                            })
                          }
                          if (us.otup.length == 2) {
                            console.log(299)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ctx.draw(true)
                                    there.setData({
                                      oyo: false,
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 3) {
                            console.log(399)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ctx.draw(true)
                                        there.setData({
                                          oyo: false,
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 4) {
                            console.log(499)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ctx.draw(true)
                                            there.setData({
                                              oyo: false,
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 5) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ctx.draw(true)
                                                there.setData({
                                                  oyo: false,
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 6) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ctx.draw(true)
                                                    there.setData({
                                                      oyo: false,
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 7) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ctx.draw(true)
                                                        there.setData({
                                                          oyo: false,
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 8) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ctx.draw(true)
                                                            there.setData({
                                                              oyo: false,
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 9) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ctx.draw(true)
                                                                there.setData({
                                                                  oyo: false,
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 10) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ctx.draw(true)
                                                                    there.setData({
                                                                      oyo: false,
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 11) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ctx.draw(true)
                                                                        there.setData({
                                                                          oyo: false,
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 12) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ctx.draw(true)
                                                                            there.setData({
                                                                              oyo: false,
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 13) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ppk = (20 + 27 * 12)
                                                                            wx.getImageInfo({
                                                                              src: us.otup[12],
                                                                              success: (res22) => {
                                                                                ctx.drawImage(res22.path, ppk, htto, heih, heih)
                                                                                ctx.draw(true)
                                                                                there.setData({
                                                                                  oyo: false,
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 14) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ppk = (20 + 27 * 12)
                                                                            wx.getImageInfo({
                                                                              src: us.otup[12],
                                                                              success: (res22) => {
                                                                                ctx.drawImage(res22.path, ppk, htto, heih, heih)
                                                                                ppk = (20 + 27 * 13)
                                                                                wx.getImageInfo({
                                                                                  src: us.otup[13],
                                                                                  success: (res23) => {
                                                                                    ctx.drawImage(res23.path, ppk, htto, heih, heih)
                                                                                    ctx.draw(true)
                                                                                    there.setData({
                                                                                      oyo: false,
                                                                                    })
                                                                                  }
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 15) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ppk = (20 + 27 * 12)
                                                                            wx.getImageInfo({
                                                                              src: us.otup[12],
                                                                              success: (res22) => {
                                                                                ctx.drawImage(res22.path, ppk, htto, heih, heih)
                                                                                ppk = (20 + 27 * 13)
                                                                                wx.getImageInfo({
                                                                                  src: us.otup[13],
                                                                                  success: (res23) => {
                                                                                    ctx.drawImage(res23.path, ppk, htto, heih, heih)
                                                                                    ppk = (20 + 27 * 14)
                                                                                    wx.getImageInfo({
                                                                                      src: us.otup[14],
                                                                                      success: (res24) => {
                                                                                        ctx.drawImage(res24.path, ppk, htto, heih, heih)
                                                                                        ctx.draw(true)
                                                                                        there.setData({
                                                                                          oyo: false,
                                                                                        })
                                                                                      }
                                                                                    })
                                                                                  }
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 16) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ppk = (20 + 27 * 12)
                                                                            wx.getImageInfo({
                                                                              src: us.otup[12],
                                                                              success: (res22) => {
                                                                                ctx.drawImage(res22.path, ppk, htto, heih, heih)
                                                                                ppk = (20 + 27 * 13)
                                                                                wx.getImageInfo({
                                                                                  src: us.otup[13],
                                                                                  success: (res23) => {
                                                                                    ctx.drawImage(res23.path, ppk, htto, heih, heih)
                                                                                    ppk = (20 + 27 * 14)
                                                                                    wx.getImageInfo({
                                                                                      src: us.otup[14],
                                                                                      success: (res24) => {
                                                                                        ctx.drawImage(res24.path, ppk, htto, heih, heih)
                                                                                        ppk = (20 + 27 * 15)
                                                                                        wx.getImageInfo({
                                                                                          src: us.otup[15],
                                                                                          success: (res25) => {
                                                                                            ctx.drawImage(res25.path, ppk, htto, heih, heih)
                                                                                            ctx.draw(true)
                                                                                            there.setData({
                                                                                              oyo: false,
                                                                                            })
                                                                                          }
                                                                                        })
                                                                                      }
                                                                                    })
                                                                                  }
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                          if (us.otup.length == 17) {
                            console.log(599)
                            ppk = (20 + 27 * 0)
                            wx.getImageInfo({
                              src: us.otup[0],
                              success: (res6) => {
                                ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                ppk = (20 + 27 * 1)
                                wx.getImageInfo({
                                  src: us.otup[1],
                                  success: (res7) => {
                                    ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                    ppk = (20 + 27 * 2)
                                    wx.getImageInfo({
                                      src: us.otup[2],
                                      success: (res8) => {
                                        ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 3)
                                        wx.getImageInfo({
                                          src: us.otup[3],
                                          success: (res9) => {
                                            ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 4)
                                            wx.getImageInfo({
                                              src: us.otup[4],
                                              success: (res10) => {
                                                ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 5)
                                                wx.getImageInfo({
                                                  src: us.otup[5],
                                                  success: (res11) => {
                                                    ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 6)
                                                    wx.getImageInfo({
                                                      src: us.otup[6],
                                                      success: (res11) => {
                                                        ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 7)
                                                        wx.getImageInfo({
                                                          src: us.otup[7],
                                                          success: (res17) => {
                                                            ctx.drawImage(res17.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 8)
                                                            wx.getImageInfo({
                                                              src: us.otup[8],
                                                              success: (res18) => {
                                                                ctx.drawImage(res18.path, ppk, htto, heih, heih)
                                                                ppk = (20 + 27 * 9)
                                                                wx.getImageInfo({
                                                                  src: us.otup[9],
                                                                  success: (res19) => {
                                                                    ctx.drawImage(res19.path, ppk, htto, heih, heih)
                                                                    ppk = (20 + 27 * 10)
                                                                    wx.getImageInfo({
                                                                      src: us.otup[10],
                                                                      success: (res20) => {
                                                                        ctx.drawImage(res20.path, ppk, htto, heih, heih)
                                                                        ppk = (20 + 27 * 11)
                                                                        wx.getImageInfo({
                                                                          src: us.otup[11],
                                                                          success: (res21) => {
                                                                            ctx.drawImage(res21.path, ppk, htto, heih, heih)
                                                                            ppk = (20 + 27 * 12)
                                                                            wx.getImageInfo({
                                                                              src: us.otup[12],
                                                                              success: (res22) => {
                                                                                ctx.drawImage(res22.path, ppk, htto, heih, heih)
                                                                                ppk = (20 + 27 * 13)
                                                                                wx.getImageInfo({
                                                                                  src: us.otup[13],
                                                                                  success: (res23) => {
                                                                                    ctx.drawImage(res23.path, ppk, htto, heih, heih)
                                                                                    ppk = (20 + 27 * 14)
                                                                                    wx.getImageInfo({
                                                                                      src: us.otup[14],
                                                                                      success: (res24) => {
                                                                                        ctx.drawImage(res24.path, ppk, htto, heih, heih)
                                                                                        ppk = (20 + 27 * 15)
                                                                                        wx.getImageInfo({
                                                                                          src: us.otup[15],
                                                                                          success: (res25) => {
                                                                                            ctx.drawImage(res25.path, ppk, htto, heih, heih)
                                                                                            ppk = (20 + 27 * 16)
                                                                                            wx.getImageInfo({
                                                                                              src: us.otup[16],
                                                                                              success: (res26) => {
                                                                                                ctx.drawImage(res26.path, ppk, htto, heih, heih)
                                                                                                ctx.draw(true)
                                                                                                there.setData({
                                                                                                  oyo: false,
                                                                                                })
                                                                                              }
                                                                                            })
                                                                                          }
                                                                                        })
                                                                                      }
                                                                                    })
                                                                                  }
                                                                                })
                                                                              }
                                                                            })
                                                                          }
                                                                        })
                                                                      }
                                                                    })
                                                                  }
                                                                })
                                                              }
                                                            })
                                                          }
                                                        })
                                                      }
                                                    })
                                                  }
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                    })
                                  }
                                })
                              }
                            })
                          }
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
      },
      fail: res => {
        console.log(res);
        console.log('失败')
        wx.showModal({
          title: '提示',
          content: '生成失败稍后请重试',
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
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