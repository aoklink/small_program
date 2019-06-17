var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
var user = require('../../utils/user.js');

// us.hadd= "领客菲力演示店"
// us.add= "东方通信科技园"
// us.daynu= "33"
// us.hsatit= "一杯啤酒"
// us.hsatitb= "一杯啤酒"
// us.hscore= "83"
// us.htimga= "https://img.linkfeeling.cn/wx_small/sportdatail/beer.png"
// us.htimgb= "https://img.linkfeeling.cn/wx_small/sportdatail/beer.png"
// us.oll= "GaryGou"
// us.otup= []
// us.qrcode= "https://img.linkfeeling.cn/link-platform/1554720820787132.jpg"
// us.scccal= "43"
// us.sctime= "11"
// us.jz = "哈哈哈哈"
// us.pjh = '99'
// us.yzyavatarUrl= "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTL7k7nwW7fE2gWP9aCXRHvqAR8XXZupuwzuibq8PtPdNabhQiakGP6wkeO8mC6V9T5Jia6UGf6FoQfxA/132"
// us.yzytime= "1560334342470"
// us.yzyuid= "e50c0b2cbea000118c7c2fb63d49d542"
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
    sharebg: 'https://img.linkfeeling.cn/wx_small/sportdatail/share.png', // 分享底部背景图
    shab: 'https://img.linkfeeling.cn/wx_small/share/locat.png',
    shac: 'https://img.linkfeeling.cn/wx_small/share/logo.png',
    shareTitle: '', // 分享标题
    shareCoverImg: 'https://img.linkfeeling.cn/wx/share.png', // 分享封面图
    shareQrImg: 'https://img.linkfeeling.cn/link-platform/1557124892691268.jpg', // 分享小程序二维码
    headImg: '', //用户头像
    nickName: '', // 昵称
    ytu: [
      // 'https://ll.linkfeeling.cn/wx/a.png',
      // 'https://ll.linkfeeling.cn/wx/f.png',
      // 'https://ll.linkfeeling.cn/wx/d.png',
      // 'https://ll.linkfeeling.cn/wx/b.png',
      // 'https://ll.linkfeeling.cn/wx/e.png',
      // 'https://ll.linkfeeling.cn/wx/c.png',
      // 'https://ll.linkfeeling.cn/wx/g.png'
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
    console.log(there.data.oyo)
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
          console.log(there.data.shareCoverImg)
          
          // 下载顶部图
          // ctx.beginPath()
          wx.getImageInfo({
            src: there.data.shareCoverImg,
            success: (res2) => {
              ctx.drawImage(res2.path, 0, 0, 285, 399)
              ctx.draw(true)
              // 下载二维码
              wx.getImageInfo({
                src: us.qrcode,
                success: (res3) => {
                  let qrImgSize = 59
                  ctx.drawImage(res3.path, 215, 324, qrImgSize, qrImgSize)
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
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('累计打卡(天)', 119, 257)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.daynu, 135, 287)
                  //天字
                  // ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  // ctx.setFontSize(10) // 文字字号：16px
                  // var lon = String(us.daynu).length * 10 + 23
                  // ctx.fillText('天', lon, 210)
                  //平均心率
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('平均心率(次/分钟)', 200, 257)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.pjh, 255, 287)
                  //评分
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('本次评分', 21, 89)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(36) // 文字字号：16px
                  ctx.fillText(us.hscore, 21, 140)
                  //时长
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('时长(分钟)', 15, 257)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.sctime, 15, 287)
                  // ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  // ctx.setFontSize(10) // 文字字号：16px
                  // var lon = String(us.sctime).length * 10 + 228
                  // ctx.fillText('分钟', lon, 210)
                  //心率集中
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('心率主要集中在', 200, 195)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(11) // 文字字号：16px
                  ctx.fillText(us.jz, 225, 225)
                  //热量
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('消耗(千卡)', 15, 195)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(16) // 文字字号：16px
                  ctx.fillText(us.scccal, 15, 225)
                  // ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  // ctx.setFontSize(10) // 文字字号：16px
                  // var lon = String(us.scccal).length * 10 + 123
                  // ctx.fillText('千卡', lon, 210)

                  //本次运动相当于
                  
                  ctx.setFillStyle('#B5B9CA')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText('本次运动相当于消耗了', 174, 89)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText(us.hsatit, 174, 109)
                  
                  //地址
                  
                  // ctx.setFillStyle('#000')  // 文字颜色：黑色
                  // ctx.setFontSize(12) // 文字字号：16px
                  // ctx.fillText('FITTING GYM运动健身工作室', 32, 352)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(us.hadd, 32, 347)
                  
                  ctx.setFillStyle('#bbb')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  ctx.fillText(us.add, 32, 369)

                  // ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                  
                  // 下载食物
                  wx.getImageInfo({
                    src: us.htimga,
                    success: (res99) => {
                      ctx.drawImage(res99.path, 200,110, 68, 80)
                      wx.getImageInfo({
                        src: there.data.shab,
                        success: (res44) => {
                          ctx.drawImage(res44.path, 11, 340, 9, 9)
                          wx.getImageInfo({
                            src: there.data.shac,
                            success: (res55) => {
                              ctx.drawImage(res55.path, 213, 23, 57, 12)
                              // 下载器械
                              wx.getImageInfo({
                                src: locolurl,
                                success: (res4) => {
                                  //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
                                  ctx.arc(36, 39, 16, 0, Math.PI * 2, false)
                                  var headImgSize = 32
                                  ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
                                  ctx.draw(true)
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
      },
      fail: res => {
        console.log(res);
        console.log('失败')      }
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