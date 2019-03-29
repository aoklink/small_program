var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
Page({
  data: {
    sharebg: 'https://ll.linkfeeling.cn/wx/wg.png', // 分享底部背景图
    shareTitle: '', // 分享标题
    shareCoverImg: 'https://ll.linkfeeling.cn/wx/bg.png', // 分享封面图
    shareQrImg: 'https://ll.linkfeeling.cn/wx/linkfeeling_gh.jpg', // 分享小程序二维码
    headImg: '', //用户头像
    nickName: '', // 昵称
  },
  onLoad: function (options) {
    var locolurl
    wx.downloadFile({
      url: us.avatarUrl,
      success: res => {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        console.log(res)
        if (res.statusCode === 200) {
          console.log(res.tempFilePath)
          locolurl = res.tempFilePath//将下载下来的地址给data中的变量变量
        }
        this.setData({
          nickName: us.nickName,
          headImg: locolurl,
          gan: us.gan,
          gana: us.gana,
          ganb: us.ganb,
          otup: us.otup
        })
      }, fail: res => {
        console.log(res);
      }
    })
    let that = this;
    // 创建画布
    const ctx = wx.createCanvasContext('shareCanvas')
    // 白色背景
    ctx.setFillStyle('#fff')
    ctx.fillRect(0, 0, 244, 434)
    ctx.draw()
    console.log(999)
    // 下载底部背景图
    wx.getImageInfo({
      src: that.data.sharebg,
      success: (res1) => {
        ctx.drawImage(res1.path, 0, 319, 244, 115)
        // 下载顶部图
        wx.getImageInfo({
          src: that.data.shareCoverImg,
          success: (res2) => {
            ctx.drawImage(res2.path, 0, 0, 244, 319)
            // 下载二维码
            wx.getImageInfo({
              src: that.data.shareQrImg,
              success: (res3) => {
                let qrImgSize = 59
                ctx.drawImage(res3.path, 172, 359, qrImgSize, qrImgSize)
                ctx.stroke()
                ctx.draw(true)

                // 用户昵称
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(12) // 文字字号：16px
                ctx.fillText(that.data.nickName, 22, 70)
                // 打卡天数
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(12) // 文字字号：16px
                ctx.fillText(that.data.gan, 21, 200)
                //天字
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(10) // 文字字号：16px
                var lon = String(that.data.gan).length * 15 +21
                ctx.fillText('天', lon, 200)
                //时长
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(12) // 文字字号：16px
                ctx.fillText(that.data.gana, 21, 256)
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(10) // 文字字号：16px
                var lon = String(that.data.gana).length * 10 + 21
                ctx.fillText('分钟', lon, 256)
                
                //热量
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(12) // 文字字号：16px
                ctx.fillText(that.data.ganb, 88, 256)
                ctx.setFillStyle('#fff')  // 文字颜色：黑色
                ctx.setFontSize(10) // 文字字号：16px
                var lon = String(that.data.ganb).length * 10 + 88
                ctx.fillText('千卡', lon, 256)

                ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                var otup = that.data.otup
                for(var i=0;i<otup.length;i++){
                  var ppk = (20 + 27 * i)
                  ctx.drawImage(otup[i], ppk, 275, 20, 20)
                  ctx.draw(true)
                }
                // 下载用户头像
                wx.getImageInfo({
                  src: that.data.headImg,
                  success: (res4) => {
                    //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
                    ctx.arc(32, 35, 12, 0, Math.PI * 2, false)
                    ctx.clip()
                    console.log(99)
                    // 绘制头像图片
                    let headImgSize = 24
                    ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
                    // ctx.stroke() // 圆形边框
                    ctx.draw(true)
                  }
                })
              }
            })
          }
        })
      }
    })
  },
  downloadImg: function () {
    // 保存到相册
    wx.canvasToTempFilePath({
      canvasId: 'shareCanvas',
      success: function (res) {
        console.log(123)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (res) {
            wx.showToast({
              title: '分享图片已保存到相册'
            })
          },
          fail: function (res) {
            console.log(res)
            console.log(789)
            // if (res.errMsg === "saveImageToPhotosAlbum:fail:auth denied") {
            // if (res.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
            //   console.log("打开设置窗口");
            //   wx.openSetting({
            //     success(settingdata) {
            //       console.log(settingdata)
            //       if (settingdata.authSetting["scope.writePhotosAlbum"]) {
            //         console.log("获取权限成功，再次点击图片保存到相册")
            //       } else {
            //         console.log("获取权限失败")
            //       }
            //     },
            //     fail: function () {
            //       console.log(999)
            //     }
            //   })
            // }
            doAuth('saveImageToPhotosAlbum')
          }
        })
      }
    }, this)
  }
})
