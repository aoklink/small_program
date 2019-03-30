var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dodo: false,
    isbig: false,
    isok: true,
    oyo: true,
    scrollindex: 0,  //当前页面的索引值
    totalnum: 6,  //总共页面数
    starty: 0,  //开始的位置x
    endy: 0, //结束的位置y
    critical: 80, //触发翻页的临界值
    margintop: 0,  //滑动下拉距离
    fontFamily: 'DINAlternate-Bold',
    ck: 1,
    tot: true,
    sharebg: 'https://ll.linkfeeling.cn/wx/wg.png', // 分享底部背景图
    shareTitle: '', // 分享标题
    shareCoverImg: 'https://ll.linkfeeling.cn/wx/bg.png', // 分享封面图
    shareQrImg: 'https://ll.linkfeeling.cn/wx/linkfeeling_gh.jpg', // 分享小程序二维码
    headImg: '', //用户头像
    nickName: '', // 昵称
    ytu: [
            'https://ll.linkfeeling.cn/wx/a.png',
            'https://ll.linkfeeling.cn/wx/f.png',
            'https://ll.linkfeeling.cn/wx/d.png',
            'https://ll.linkfeeling.cn/wx/b.png',
            'https://ll.linkfeeling.cn/wx/e.png',
            'https://ll.linkfeeling.cn/wx/c.png'
          ]
  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    console.log(py);
    this.setData({
      starty: py
    })
  },
  showa: function () {
    this.setData({
      howa: true,  
      howb: false,
      howc: false,
      howd: false,      
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showb: function () {
    this.setData({
      howa: false,
      howb: true,
      howc: false,
      howd: false,
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showc: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: true,
      howd: false,
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showd: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: true,
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showe: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: true,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showf: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: false,
      howf: true,
      howg: false,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showg: function () {
    console.log(999)
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: false,
      howf: false,
      howg: true,
      howh: false,
      howi: false,
      howj: false
    })
  },
  showh: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: false,
      howf: false,
      howg: false,
      howh: true,
      howi: false,
      howj: false
    })
  },
  showi: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: true,
      howj: false
    })
  },
  showj: function () {
    this.setData({
      howa: false,
      howb: false,
      howc: false,
      howd: false,
      howe: false,
      howf: false,
      howg: false,
      howh: false,
      howi: false,
      howj: true
    })
  },
  oppo: function () {
    console.log("点击")
    this.setData({
      tot: false
    })
  },
  kta: function(){
    var that = this
    console.log(99)
    that.setData({
      tot: true
    })
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
  bttg: function () {
    this.setData({
      tot: true,
      isok: false,
      isbig: false
    })
  },
  onShareAppMessage: function (res) {
    var that = this
    that.setData({
      tot: true
    })
    // let gbid = res.target.dataset.info.order_id;
    return {
      title: '分享',
      path: '/pages/home/home',
      // imageUrl: 'https://......./img/groupshare.png',  //用户分享出去的自定义图片大小为5:4,
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
        
        // console.log(998)
      },
      fail: function (res) {
        // 分享失败
      },
    }
  },
  scrollTouchend: function (e) {
    let py = e.changedTouches[0].pageY;
    let d = this.data;
    this.setData({
      endy: py,
    })
    console.log(e.changedTouches[0].pageY, d.starty);
    if (py - d.starty > d.critical && d.scrollindex > 0) {
      this.setData({
        scrollindex: d.scrollindex - 1
      })
    } else if (py - d.starty < -(d.critical) && d.scrollindex < this.data.totalnum - 1) {
      this.setData({
        scrollindex: d.scrollindex + 1
      })
    }
    this.setData({
      starty: 0,
      endy: 0,
      margintop: 0
    })
  },
  getDd: function (no) {
    var date = no;
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if(month >= 1 && month <= 9) {
    month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getHours() + seperator2 + date.getMinutes();
    return currentdate;
  },
  onLoad: function() {
    var that = this
    wx.showShareMenu({
      withShareTicket: true
    })  
    let rpx
    //获取屏幕宽度，获取自适应单位
    wx.getSystemInfo({
      success: function (res) {
        rpx = res.windowWidth / 375;
        console.log(res.windowWidth / 375)
        that.setData({
          ck: res.windowWidth / 375
        })
        console.log(rpx)
      }
    })
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/fitness/sport_report/update',
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
        bind_time: app.globalData.bindtime
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onReady: function() {
    var that = this
    var there = this
    try {
      var value = wx.getStorageSync(app.globalData.bindtime + 'scccal')
      if (value) {
        // Do something with return value
        there.setData({
          scccal: wx.getStorageSync(app.globalData.bindtime + 'scccal'),
          scc: wx.getStorageSync(app.globalData.bindtime + 'scc'),
          sctime: wx.getStorageSync(app.globalData.bindtime + 'sctime'),
          olo: wx.getStorageSync(app.globalData.bindtime + 'olo'),
          oll: wx.getStorageSync(app.globalData.bindtime + 'oll'),
          pcc: wx.getStorageSync(app.globalData.bindtime + 'pcc'),
          otup: wx.getStorageSync(app.globalData.bindtime + 'otup'),
          acc: wx.getStorageSync(app.globalData.bindtime + 'acc'),
          abb: wx.getStorageSync(app.globalData.bindtime + 'abb'),
          ccc: wx.getStorageSync(app.globalData.bindtime + 'ccc'),
          bbb: wx.getStorageSync(app.globalData.bindtime + 'bbb'),
          bcc: wx.getStorageSync(app.globalData.bindtime + 'bcc'),
          cbb: wx.getStorageSync(app.globalData.bindtime + 'cbb'),
          xcc: wx.getStorageSync(app.globalData.bindtime + 'xcc'),
          xbb: wx.getStorageSync(app.globalData.bindtime + 'xbb'),
          yqc: wx.getStorageSync(app.globalData.bindtime + 'yqc'),
          yqa: wx.getStorageSync(app.globalData.bindtime + 'yqa'),
          oloz: wx.getStorageSync(app.globalData.bindtime + 'oloz'),
          pcp: wx.getStorageSync(app.globalData.bindtime + 'pcp'),
          kobb: wx.getStorageSync(app.globalData.bindtime + 'kobb'),
          yaa: wx.getStorageSync(app.globalData.bindtime + 'yaa'),
          yya: wx.getStorageSync(app.globalData.bindtime + 'yya'),
          yyb: wx.getStorageSync(app.globalData.bindtime + 'yyb'),
          ybb: wx.getStorageSync(app.globalData.bindtime + 'ybb'),
          ycc: wx.getStorageSync(app.globalData.bindtime + 'ycc'),
          yyc: wx.getStorageSync(app.globalData.bindtime + 'yyc'),
          ydd: wx.getStorageSync(app.globalData.bindtime + 'ydd)'),
          yyd: wx.getStorageSync(app.globalData.bindtime + 'yyd'),
          yee: wx.getStorageSync(app.globalData.bindtime + 'yee'),
          yye: wx.getStorageSync(app.globalData.bindtime + 'yye'),
          yff: wx.getStorageSync(app.globalData.bindtime + 'yff'),
          yyf: wx.getStorageSync(app.globalData.bindtime + 'yyf'),
          ck: wx.getStorageSync(app.globalData.bindtime + 'ck'),

        })
        there.setData({
          dodo: true
        })
      }
      //运动曲线canvas
      const lcl = wx.createCanvasContext('ydqx')
      var ck = wx.getStorageSync(app.globalData.bindtime + 'ck')

      lcl.beginPath();
      lcl.lineWidth = 0.5
      var cfont = 10 * ck + "px Arial"
      lcl.setFontSize(10)
      lcl.setFillStyle("rgba(50, 69, 96, 1)")
      lcl.fillText("200", 0 * ck, 10 * ck)
      lcl.fillText("180", 0 * ck, 50 * ck)
      lcl.fillText("160", 0 * ck, 90 * ck)
      lcl.fillText("140", 0 * ck, 130 * ck)
      lcl.fillText("120", 0 * ck, 170 * ck)
      lcl.fillText("100", 0 * ck, 210 * ck)
      lcl.fillText("80", 0 * ck, 250 * ck)
      lcl.stroke();

      lcl.beginPath();
      lcl.lineWidth = 0.5
      lcl.setFillStyle("rgba(111,121,136,1)")
      lcl.fillText("峰值", 310 * ck, 10 * ck)
      lcl.fillText("锻炼", 310 * ck, 23 * ck)
      lcl.fillText("无氧", 310 * ck, 50 * ck)
      lcl.fillText("锻炼", 310 * ck, 63 * ck)
      lcl.fillText("有氧", 310 * ck, 90 * ck)
      lcl.fillText("耐力", 310 * ck, 103 * ck)
      lcl.fillText("脂肪", 310 * ck, 130 * ck)
      lcl.fillText("燃烧", 310 * ck, 143 * ck)
      lcl.fillText("动态", 310 * ck, 170 * ck)
      lcl.fillText("热身", 310 * ck, 183 * ck)
      lcl.fillText("激活", 310 * ck, 210 * ck)
      lcl.fillText("放松", 310 * ck, 223 * ck)
      lcl.stroke();

      lcl.beginPath();
      lcl.lineWidth = 0.5
      lcl.setStrokeStyle('rgba(175,193,212,0.5)');
      lcl.setLineDash([3 * ck, 3 * ck])
      lcl.moveTo(26 * ck, 7 * ck);
      lcl.lineTo(300 * ck, 7 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(26 * ck, 47 * ck);
      lcl.lineTo(300 * ck, 47 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(26 * ck, 87 * ck);
      lcl.lineTo(300 * ck, 87 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(26 * ck, 127 * ck);
      lcl.lineTo(300 * ck, 127 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(26 * ck, 167 * ck);
      lcl.lineTo(300 * ck, 167 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.setLineDash([3 * ck, 3 * ck])
      lcl.moveTo(26 * ck, 207 * ck);
      lcl.lineTo(300 * ck, 207 * ck);
      lcl.stroke()

      lcl.beginPath();
      lcl.lineWidth = 0.5
      lcl.setLineDash([0, 0])
      lcl.moveTo(26 * ck, 7 * ck);
      lcl.lineTo(26 * ck, 317 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(300 * ck, 7 * ck);
      lcl.lineTo(300 * ck, 317 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(117 * ck, 7 * ck);
      lcl.lineTo(117 * ck, 317 * ck);
      lcl.stroke()
      lcl.beginPath();
      lcl.moveTo(208 * ck, 7 * ck);
      lcl.lineTo(208 * ck, 317 * ck);
      lcl.stroke()

      //canvas运动曲线分布图表
      // console.log(data)
      ck = there.data.ck
      // console.log(ck)
      var kk = -2
      var bb = 407
      var sumddp = 26
      var lasttop = 60
      var lefttop = 26
      var ssuummdur = 0
      var arrbox = []
      var cha = 0
      var buc = {}
      var ftime = wx.getStorageSync(app.globalData.bindtime + 'ftime')
      var etime = wx.getStorageSync(app.globalData.bindtime + 'etime')

      data = wx.getStorageSync(app.globalData.bindtime + 'data')

      for (var i = 0; i < data.length; i++) {
        lcl.beginPath()
        lcl.lineWidth = 0.5
        if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
          lcl.setStrokeStyle = 'rgba(255,255,255,0)'
          lcl.fillStyle = '#FFD450'
          var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
          linearGradient1.addColorStop(0, '#FFD450');
          linearGradient1.addColorStop(1, 'rgba(255,236,178,0.2)');
          lcl.fillStyle = linearGradient1;
        }
        if (data[i].device_name.indexOf("哑铃") > -1 || data[i].device_name.indexOf("杠铃") > -1 || data[i].device_name.indexOf("飞鸟") > -1) {
          lcl.setStrokeStyle = 'rgba(255,255,255,0)'
          lcl.fillStyle = '#398EFF'
          var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
          linearGradient1.addColorStop(0, '#398EFF');
          linearGradient1.addColorStop(1, 'rgba(199,223,255,0.2)');
          lcl.fillStyle = linearGradient1;
        }
        if (data[i].device_name == "hiit") {
          lcl.setStrokeStyle = 'rgba(255,255,255,0)'
          lcl.fillStyle = '#FF5E7F'
          var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
          linearGradient1.addColorStop(0, '#FF5E7F');
          linearGradient1.addColorStop(1, 'rgba(255,93,127,0.2)');
          lcl.fillStyle = linearGradient1;
        }
        if (data[i].device_name == "") {
          lcl.setStrokeStyle = 'rgba(255,255,255,0)'
          lcl.fillStyle = '#7E879C'
          var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
          linearGradient1.addColorStop(0, '#7E879C');
          linearGradient1.addColorStop(1, 'rgba(216,221,238,0.2)');
          lcl.fillStyle = linearGradient1;
        }

        lcl.lineWidth = 0.5

        lcl.moveTo((lefttop + data[i].duration / ssuummdur * 274) * ck, (kk * data[i].run_data[data[i].run_data.length - 1] + bb) * ck)
        sumddp = sumddp + data[i].duration / ssuummdur * 274
        lcl.lineTo(sumddp * ck, 317 * ck)
        lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, 317 * ck)
        lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
        for (var j = 0; j < data[i].run_data.length; j++) {
          if (data[i].run_data[j] < 45) {


            lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
            // console.log(kk * data[i].run_data[j] + bb)
          } else {
            lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
          }
        }
        lcl.fill()
        lcl.stroke()
        lasttop = data[i].run_data[data[i].run_data.length - 1]
        lefttop = lefttop + data[i].duration / ssuummdur * 274
      }
      //顶部实线

      var kk = -2
      var bb = 407
      var sumddp = 26
      var lasttop = 60
      var lefttop = 26

      for (var i = 0; i < data.length; i++) {
        lcl.beginPath()
        lcl.lineWidth = 1
        if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
          lcl.setStrokeStyle = '#FFD450'
        }
        if (data[i].device_name == "力量") {
          lcl.setStrokeStyle = '#398EFF'
        }
        if (data[i].device_name == "hiit") {
          lcl.setStrokeStyle = '#FF5E7F'
        }
        if (data[i].device_name == "") {
          lcl.setStrokeStyle = '#7E879C'
        }

        // lcl.lineWidth = 0.5

        sumddp = sumddp + data[i].duration / ssuummdur * 274
        lcl.moveTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
        for (var j = 0; j < data[i].run_data.length; j++) {
          if (data[i].run_data[j] < 45) {
            lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
          } else {
            lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
          }
        }

        lcl.stroke()
        lasttop = data[i].run_data[data[i].run_data.length - 1]
        lefttop = lefttop + data[i].duration / ssuummdur * 274
      }
      //底部时间
      var kboa = wx.getStorageSync(app.globalData.bindtime + 'kboa')
      var kbob = wx.getStorageSync(app.globalData.bindtime + 'kbob')
      var kboc = wx.getStorageSync(app.globalData.bindtime + 'kboc')
      var kbod = wx.getStorageSync(app.globalData.bindtime + 'kbod')
      lcl.beginPath();
      lcl.lineWidth = 0.5
      lcl.setFillStyle("rgba(50,69,96,1)")
      lcl.fillText(kboa, 26 * ck, 332 * ck)
      lcl.fillText(kbob, 104 * ck, 332 * ck)
      lcl.fillText(kboc, 195 * ck, 332 * ck)
      lcl.fillText(kbod, 273 * ck, 332 * ck)
      lcl.stroke();
      // data[data.length - 1].end_time - data[0].start_time
      lcl.draw()


      //心率功效
      const yzy = wx.createCanvasContext('xlgx')
      // console.log(there.data.ck)
      var ck = wx.getStorageSync(app.globalData.bindtime + 'ck')


      var x1, x2, x3, x4, x5



      var ydgxbox
      ydgxbox = wx.getStorageSync(app.globalData.bindtime + 'ydgxbox')


      var zybox = JSON.parse(JSON.stringify(ydgxbox));
      zybox.sort(function (a, b) {
        return b - a;
      });
      // console.log(zybox)
      var suaax = 0;
      for (var i = 0; i < ydgxbox.length; i++) {
        if (ydgxbox[i] == zybox[0]) {
          suaax = i
        }
      }

      x1 = wx.getStorageSync(app.globalData.bindtime + 'x1')
      x2 = wx.getStorageSync(app.globalData.bindtime + 'x2')
      x3 = wx.getStorageSync(app.globalData.bindtime + 'x3')
      x4 = wx.getStorageSync(app.globalData.bindtime + 'x4')
      x5 = wx.getStorageSync(app.globalData.bindtime + 'x5')
      //
      yzy.beginPath();
      yzy.lineWidth = 35 * ck
      yzy.setStrokeStyle('#5A93FF');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, -0.5 * Math.PI, x1 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.setStrokeStyle('#72D6FF');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, x1 * Math.PI, x2 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.setStrokeStyle('#47F4B4');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, x2 * Math.PI, x3 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.setStrokeStyle('#FFAD2A');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, x3 * Math.PI, x4 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.setStrokeStyle('#FFA271');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, x4 * Math.PI, x5 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.setStrokeStyle('#FF7F65');
      yzy.arc(150 * ck, 100 * ck, 50 * ck, x5 * Math.PI, 1.5 * Math.PI)
      yzy.stroke();
      yzy.beginPath();
      yzy.lineWidth = 0.5 * ck
      yzy.fillStyle = '#FF7F65'
      yzy.setStrokeStyle('#FF7F65');
      yzy.moveTo(0 * ck, 40 * ck)
      yzy.lineTo(95 * ck, 40 * ck)
      yzy.arc(98 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.fill()
      yzy.stroke()
      yzy.beginPath();
      yzy.setStrokeStyle('#FFA271');
      yzy.fillStyle = '#FFA271'
      yzy.moveTo(0 * ck, 105 * ck)
      yzy.lineTo(72 * ck, 105 * ck)
      yzy.arc(72 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.fill()
      yzy.stroke()
      yzy.beginPath();
      yzy.setStrokeStyle('#FFAD2A');
      yzy.fillStyle = '#FFAD2A'
      yzy.moveTo(0 * ck, 160 * ck)
      yzy.lineTo(85 * ck, 160 * ck)
      yzy.arc(98 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.fill()
      yzy.stroke()
      yzy.beginPath();
      yzy.setStrokeStyle('#5A93FF');
      yzy.fillStyle = '#5A93FF'
      yzy.moveTo(210 * ck, 40 * ck)
      yzy.lineTo(305 * ck, 40 * ck)
      yzy.arc(207 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.stroke()
      yzy.fill()
      yzy.beginPath();
      yzy.moveTo(233 * ck, 105 * ck)
      yzy.lineTo(305 * ck, 105 * ck)
      yzy.arc(233 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.fillStyle = '#72D6FF'
      yzy.setStrokeStyle('#72D6FF');
      yzy.fill()
      yzy.stroke()
      yzy.beginPath();
      yzy.setStrokeStyle('#47F4B4');
      yzy.fillStyle = '#47F4B4'
      yzy.moveTo(210 * ck, 160 * ck)
      yzy.lineTo(305 * ck, 160 * ck)
      yzy.arc(207 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
      yzy.fill()
      yzy.stroke()

      //
      var cfont = 10 * ck + "px Arial"
      // console.log(cfont)
      // yzy.font= 12*ck+"px Arial"
      // yzy.fillStyle="#000"
      // yzy.fillText("激活放松",0*ck,25*ck)
      //
      yzy.setFontSize(10)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("激活放松", 0 * ck, 20 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("脂肪燃烧", 0 * ck, 83 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("无氧耐力", 0 * ck, 140 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("动态热身", 265 * ck, 20 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("有氧耐力", 265 * ck, 83 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      yzy.fillText("峰值锻炼", 265 * ck, 140 * ck)
      // yzy.font = cfont
      yzy.setFillStyle("#000")
      var opo = ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]
      yzy.fillText(suaax == 0 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[0] / opo * 100) + "%", 0 * ck, 35 * ck)
      yzy.fillText(suaax == 2 ? (100 - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[2] / opo * 100) + "%", 0 * ck, 98 * ck)
      yzy.fillText(suaax == 4 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[4] / opo * 100) + "%", 0 * ck, 155 * ck)
      yzy.fillText(suaax == 1 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[1] / opo * 100) + "%", 283 * ck, 35 * ck)
      yzy.fillText(suaax == 3 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[3] / opo * 100) + "%", 283 * ck, 98 * ck)
      yzy.fillText(suaax == 5 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[5] / opo * 100) + "%", 283 * ck, 155 * ck)
      yzy.draw()
      //生成图片
      var locolurl
      wx.downloadFile({
        url: us.avatarUrl,
        success: res => {
          // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
          // console.log(res)
          if (res.statusCode === 200) {
            console.log(res.tempFilePath)
            locolurl = res.tempFilePath//将下载下来的地址给data中的变量变量
          }
          // console.log(90)
          there.setData({
            headImg: locolurl
          })
        }, fail: res => {
          console.log(res);
        }
      })
      console.log(90)
      // var that = this;
      // 创建画布

      var ctx = wx.createCanvasContext('shareCanvas')
      // 白色背景
      ctx.beginPath()
      ctx.setFillStyle('#fff')
      ctx.fillRect(0, 0, 244, 434)

      // console.log(999)
      // ctx.beginPath()
      // 下载底部背景图
      wx.getImageInfo({
        src: there.data.sharebg,
        success: (res1) => {
          ctx.drawImage(res1.path, 0, 319, 244, 115)

          // 下载顶部图
          // ctx.beginPath()
          wx.getImageInfo({
            src: there.data.shareCoverImg,
            success: (res2) => {
              ctx.drawImage(res2.path, 0, 0, 244, 319)

              // 下载二维码
              wx.getImageInfo({
                src: there.data.shareQrImg,
                success: (res3) => {
                  let qrImgSize = 59
                  ctx.drawImage(res3.path, 172, 359, qrImgSize, qrImgSize)
                  ctx.stroke()
                  // ctx.draw(true)

                  // 用户昵称
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(there.data.oll, 22, 70)
                  // 打卡天数
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(there.data.scc, 21, 200)
                  //天字
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(there.data.scc).length * 15 + 21
                  ctx.fillText('天', lon, 200)
                  //时长
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(there.data.sctime, 21, 256)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(there.data.sctime).length * 10 + 21
                  ctx.fillText('分钟', lon, 256)

                  //热量
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(12) // 文字字号：16px
                  ctx.fillText(there.data.scccal, 88, 256)
                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                  ctx.setFontSize(10) // 文字字号：16px
                  var lon = String(there.data.scccal).length * 10 + 88
                  ctx.fillText('千卡', lon, 256)

                  ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                  // console.log(there.data.otup)

                  // 下载用户头像
                  wx.getImageInfo({
                    src: there.data.headImg,
                    success: (res4) => {
                      //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
                      ctx.arc(32, 35, 12, 0, Math.PI * 2, false)
                      // ctx.clip()
                      console.log(99)
                      // 绘制头像图片
                      let headImgSize = 24
                      ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
                      var ppk

                      if (there.data.otup.length == 0) {
                        ctx.draw(true)
                        there.setData({
                          oyo: false,
                        })
                      }
                      if (there.data.otup.length == 1) {
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ctx.draw(true)
                            there.setData({
                              oyo: false,
                            })
                          }
                        })
                      }
                      if (there.data.otup.length == 2) {
                        console.log(299)
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ppk = (20 + 27 * 1)
                            wx.getImageInfo({
                              src: there.data.otup[1],
                              success: (res7) => {
                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                ctx.draw(true)
                                there.setData({
                                  oyo: false,
                                })
                              }
                            })
                          }
                        })
                      }
                      if (there.data.otup.length == 3) {
                        console.log(399)
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ppk = (20 + 27 * 1)
                            wx.getImageInfo({
                              src: there.data.otup[1],
                              success: (res7) => {
                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                ppk = (20 + 27 * 2)
                                wx.getImageInfo({
                                  src: there.data.otup[2],
                                  success: (res8) => {
                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
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
                      if (there.data.otup.length == 4) {
                        console.log(499)
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ppk = (20 + 27 * 1)
                            wx.getImageInfo({
                              src: there.data.otup[1],
                              success: (res7) => {
                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                ppk = (20 + 27 * 2)
                                wx.getImageInfo({
                                  src: there.data.otup[2],
                                  success: (res8) => {
                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                    ppk = (20 + 27 * 3)
                                    wx.getImageInfo({
                                      src: there.data.otup[3],
                                      success: (res9) => {
                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
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
                      if (there.data.otup.length == 5) {
                        console.log(599)
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ppk = (20 + 27 * 1)
                            wx.getImageInfo({
                              src: there.data.otup[1],
                              success: (res7) => {
                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                ppk = (20 + 27 * 2)
                                wx.getImageInfo({
                                  src: there.data.otup[2],
                                  success: (res8) => {
                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                    ppk = (20 + 27 * 3)
                                    wx.getImageInfo({
                                      src: there.data.otup[3],
                                      success: (res9) => {
                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
                                        ppk = (20 + 27 * 4)
                                        wx.getImageInfo({
                                          src: there.data.otup[4],
                                          success: (res10) => {
                                            ctx.drawImage(res10.path, ppk, 275, 20, 20)
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
                      if (there.data.otup.length == 6) {
                        console.log(599)
                        ppk = (20 + 27 * 0)
                        wx.getImageInfo({
                          src: there.data.otup[0],
                          success: (res6) => {
                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                            ppk = (20 + 27 * 1)
                            wx.getImageInfo({
                              src: there.data.otup[1],
                              success: (res7) => {
                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                ppk = (20 + 27 * 2)
                                wx.getImageInfo({
                                  src: there.data.otup[2],
                                  success: (res8) => {
                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                    ppk = (20 + 27 * 3)
                                    wx.getImageInfo({
                                      src: there.data.otup[3],
                                      success: (res9) => {
                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
                                        ppk = (20 + 27 * 4)
                                        wx.getImageInfo({
                                          src: there.data.otup[4],
                                          success: (res10) => {
                                            ctx.drawImage(res10.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 5)
                                            wx.getImageInfo({
                                              src: there.data.otup[5],
                                              success: (res11) => {
                                                ctx.drawImage(res11.path, ppk, 275, 20, 20)
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
                    }
                  })
                }
              })
            }
          })
        }
      })

    } 
    catch (e) {
      wx.request({
        url: 'https://ll.linkfeeling.cn/api/fitness/detail',
        method: 'POST',
        data: {
          uid: us.uid,
          // uid: "9c1b9a52f5d054de228dc8fc92fca5f8",
          user_type: us.ut,
          request_time: us.rt,
          platform: us.pt,
          tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
          login_type: "wx",
          network: us.nw,
          product_id: us.pi,
          app_version: us.av,
          bind_time: app.globalData.bindtime
          // bind_time: "1553844250094"
          // uid: us.uid,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {

          console.log(res.data)
            if (res.data.code == 200) {
              if (res.data.data.items.length > 0) {

               
                var data = res.data.data
                console.log(data)
                there.setData({
                  olo: data.head_icon,
                  oll: decodeURIComponent(data.user_name),
                  scc: data.day_num
                })
                
                data = data.items
                // data.sort(function (a, b) {
                //   return a.server_time - b.server_time
                // });
                there.setData({
                  sctime: Math.round((data[data.length - 1].server_time - data[0].server_time) / 60000)
                })

                var scccal = 0
                //tuc【跑步机，椭圆机，单车，哑铃，杠铃，飞鸟】
                var tuc = [0, 0, 0, 0, 0, 0]
                for (var i = 0; i < data.length - 1; i++) {
                  //总热量
                  scccal = scccal + parseFloat(data[i].calorie)
                  ////////////////////////
                  //运动图标
                  if (data[i].device_name.indexOf("跑步机") > -1) {
                    tuc.splice(0, 1, 1)
                  }
                  if (data[i].device_name.indexOf("椭圆机") > -1) {
                    tuc.splice(1, 1, 1)
                  }
                  if (data[i].device_name.indexOf("单车") > -1) {
                    tuc.splice(2, 1, 1)
                  }
                  if (data[i].device_name.indexOf("哑铃") > -1) {
                    tuc.splice(3, 1, 1)
                  }
                  if (data[i].device_name.indexOf("杠铃") > -1) {
                    tuc.splice(4, 1, 1)
                  }
                  if (data[i].device_name.indexOf("飞鸟") > -1) {
                    tuc.splice(5, 1, 1)
                  }
                }
                for (var i = 0; i < tuc.length; i++) {
                  if (tuc[i] > 0) {
                    tuc.splice(i, 1, there.data.ytu[i])
                  }
                }
                var otup = []
                for (var i = 0; i < tuc.length; i++) {
                  // console.log(tuc[i].length)
                  if (tuc[i].length > 5) {
                    otup.push(tuc[i])
                  }
                }
                /////////////////////////

                // console.log(scccal)
                there.setData({
                  scccal: Math.round(scccal),
                  dodo: true,
                  otup: otup,
                })
                ////////////////////////////////////////////
                //生成图片
                var locolurl
                wx.downloadFile({
                  url: us.avatarUrl,
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
                      ctx.fillRect(0, 0, 244, 434)
                      // 下载底部背景图
                      wx.getImageInfo({
                        src: there.data.sharebg,
                        success: (res1) => {
                          ctx.drawImage(res1.path, 0, 319, 244, 115)

                          // 下载顶部图
                          // ctx.beginPath()
                          wx.getImageInfo({
                            src: there.data.shareCoverImg,
                            success: (res2) => {
                              ctx.drawImage(res2.path, 0, 0, 244, 319)

                              // 下载二维码
                              wx.getImageInfo({
                                src: there.data.shareQrImg,
                                success: (res3) => {
                                  let qrImgSize = 59
                                  ctx.drawImage(res3.path, 172, 359, qrImgSize, qrImgSize)
                                  ctx.stroke()
                                  // ctx.draw(true)

                                  // 用户昵称
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(12) // 文字字号：16px
                                  ctx.fillText(there.data.oll, 22, 70)
                                  // 打卡天数
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(12) // 文字字号：16px
                                  ctx.fillText(there.data.scc, 21, 200)
                                  //天字
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(10) // 文字字号：16px
                                  var lon = String(there.data.scc).length * 15 + 21
                                  ctx.fillText('天', lon, 200)
                                  //时长
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(12) // 文字字号：16px
                                  ctx.fillText(there.data.sctime, 21, 256)
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(10) // 文字字号：16px
                                  var lon = String(there.data.sctime).length * 10 + 21
                                  ctx.fillText('分钟', lon, 256)

                                  //热量
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(12) // 文字字号：16px
                                  ctx.fillText(there.data.scccal, 88, 256)
                                  ctx.setFillStyle('#fff')  // 文字颜色：黑色
                                  ctx.setFontSize(10) // 文字字号：16px
                                  var lon = String(there.data.scccal).length * 10 + 88
                                  ctx.fillText('千卡', lon, 256)

                                  ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                                  // console.log(there.data.otup)

                                  // 下载用户头像
                                  wx.getImageInfo({
                                    src: locolurl,
                                    success: (res4) => {
                                      //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
                                      ctx.arc(32, 35, 12, 0, Math.PI * 2, false)
                                      // ctx.clip()
                                      console.log(99)
                                      // 绘制头像图片
                                      var headImgSize = 24
                                      ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
                                      var ppk

                                      if (there.data.otup.length == 0) {
                                        ctx.draw(true)
                                        there.setData({
                                          oyo: false,
                                        })
                                      }
                                      if (there.data.otup.length == 1) {
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ctx.draw(true)
                                            there.setData({
                                              oyo: false,
                                            })
                                          }
                                        })
                                      }
                                      if (there.data.otup.length == 2) {
                                        console.log(299)
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 1)
                                            wx.getImageInfo({
                                              src: there.data.otup[1],
                                              success: (res7) => {
                                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                                ctx.draw(true)
                                                there.setData({
                                                  oyo: false,
                                                })
                                              }
                                            })
                                          }
                                        })
                                      }
                                      if (there.data.otup.length == 3) {
                                        console.log(399)
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 1)
                                            wx.getImageInfo({
                                              src: there.data.otup[1],
                                              success: (res7) => {
                                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                                ppk = (20 + 27 * 2)
                                                wx.getImageInfo({
                                                  src: there.data.otup[2],
                                                  success: (res8) => {
                                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
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
                                      if (there.data.otup.length == 4) {
                                        console.log(499)
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 1)
                                            wx.getImageInfo({
                                              src: there.data.otup[1],
                                              success: (res7) => {
                                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                                ppk = (20 + 27 * 2)
                                                wx.getImageInfo({
                                                  src: there.data.otup[2],
                                                  success: (res8) => {
                                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                                    ppk = (20 + 27 * 3)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[3],
                                                      success: (res9) => {
                                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
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
                                      if (there.data.otup.length == 5) {
                                        console.log(599)
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 1)
                                            wx.getImageInfo({
                                              src: there.data.otup[1],
                                              success: (res7) => {
                                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                                ppk = (20 + 27 * 2)
                                                wx.getImageInfo({
                                                  src: there.data.otup[2],
                                                  success: (res8) => {
                                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                                    ppk = (20 + 27 * 3)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[3],
                                                      success: (res9) => {
                                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
                                                        ppk = (20 + 27 * 4)
                                                        wx.getImageInfo({
                                                          src: there.data.otup[4],
                                                          success: (res10) => {
                                                            ctx.drawImage(res10.path, ppk, 275, 20, 20)
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
                                      if (there.data.otup.length == 6) {
                                        console.log(599)
                                        ppk = (20 + 27 * 0)
                                        wx.getImageInfo({
                                          src: there.data.otup[0],
                                          success: (res6) => {
                                            ctx.drawImage(res6.path, ppk, 275, 20, 20)
                                            ppk = (20 + 27 * 1)
                                            wx.getImageInfo({
                                              src: there.data.otup[1],
                                              success: (res7) => {
                                                ctx.drawImage(res7.path, ppk, 275, 20, 20)
                                                ppk = (20 + 27 * 2)
                                                wx.getImageInfo({
                                                  src: there.data.otup[2],
                                                  success: (res8) => {
                                                    ctx.drawImage(res8.path, ppk, 275, 20, 20)
                                                    ppk = (20 + 27 * 3)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[3],
                                                      success: (res9) => {
                                                        ctx.drawImage(res9.path, ppk, 275, 20, 20)
                                                        ppk = (20 + 27 * 4)
                                                        wx.getImageInfo({
                                                          src: there.data.otup[4],
                                                          success: (res10) => {
                                                            ctx.drawImage(res10.path, ppk, 275, 20, 20)
                                                            ppk = (20 + 27 * 5)
                                                            wx.getImageInfo({
                                                              src: there.data.otup[5],
                                                              success: (res11) => {
                                                                ctx.drawImage(res11.path, ppk, 275, 20, 20)
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
                                    }
                                  })
                                }
                              })
                            }
                          })
                        }
                      })
                    }
                  }, fail: res => {
                    console.log(res);
                  }
                })
                //////////////////////////////////
                console.log("页面出现")

                console.log(data)
                var llmax = 0
                //10个最大力量值
                var jjm = []
                var sumjjm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                for(var i=0;i<data.length;i++){
                  llmax < parseFloat(data[i].gravity) ? llmax = parseFloat(data[i].gravity) : llmax = llmax
                  if (parseFloat(data[i].gravity)>0){
                    sumjjm.push(parseFloat(data[i].gravity))
                  }
                } 
                sumjjm.sort(function (a, b) {
                  return b - a
                });
                jjm = sumjjm.slice(0,10)
                console.log(jjm[0])
                console.log(sumjjm)
                if(llmax>0){
                  there.setData({
                    fka: jjm[0] / llmax * 347 + 28,
                    fkb: jjm[1] / llmax * 347 + 28,
                    fkc: jjm[2] / llmax * 347 + 28,
                    fkd: jjm[3] / llmax * 347 + 28,
                    fke: jjm[4] / llmax * 347 + 28,
                    fkf: jjm[5] / llmax * 347 + 28,
                    fkg: jjm[6] / llmax * 347 + 28,
                    fkh: jjm[7] / llmax * 347 + 28,
                    fki: jjm[8] / llmax * 347 + 28,
                    fkj: jjm[9] / llmax * 347 + 28
                  })
                }else{
                  there.setData({
                    fka: 28,
                    fkb: 28,
                    fkc: 28,
                    fkd: 28,
                    fke: 28,
                    fkf: 28,
                    fkg: 28,
                    fkh: 28,
                    fki: 28,
                    fkj: 28
                  })
                }
                //力量图标bce
                var lltup = []
                for (var i = 0;i<there.data.otup.length;i++){
                  if (there.data.otup[i] == 'https://ll.linkfeeling.cn/wx/c.png'){
                    lltup.push(there.data.otup[i])
                  }
                  if (there.data.otup[i] == 'https://ll.linkfeeling.cn/wx/b.png') {
                    lltup.push(there.data.otup[i])
                  }
                  if (there.data.otup[i] == 'https://ll.linkfeeling.cn/wx/e.png') {
                    lltup.push(there.data.otup[i])
                  } 
                }
                console.log(llmax)
                there.setData({
                  llmax: llmax,
                  lltup: lltup,
                  kkkmid: llmax>0?Math.floor(parseFloat(llmax)*5)/10:''
                })

                //canvas运动曲线分布图表
                // console.log(data)
                ck = there.data.ck
                // console.log(ck)
                var kk = -2
                var bb = 407
                var sumddp = 26
                var lasttop = 60
                var lefttop = 26
                var ssuummdur = 0
                var arrbox = []
                var cha = 0
                var buc = {}
                var ftime = data[0].server_time
                var etime = data[data.length - 1].server_time
                
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ftime',
                    data: ftime
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'etime',
                    data: etime
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'ftime', ftime)
                  // wx.setStorageSync(app.globalData.bindtime + 'etime', etime)
                } catch (e) {
                  console.log("缓存失败")
                }
                buc.run_data = []
                //心率统计
                var run_effects = []
                var runa = 0
                var runb = 0
                var runc = 0
                var rund = 0
                var rune = 0
                var runf = 0
                // console.log(data)

                var xcc = 0
                var yqc = 0
                for (var i = 0; i < data.length - 1; i++) {
                  //本次消耗热量
                  if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
                    xcc = xcc + parseFloat(data[i].calorie)
                  }
                  if (data[i].device_name == 'hiit') {
                    yqc = yqc + parseFloat(data[i].calorie)
                  }
                  //运动曲线
                  if (data[i + 1].device_name == data[i].device_name) {
                    buc.run_data.push(data[i].heart_rate)
                    // console.log(buc)
                  }
                  if (data[i + 1].device_name != data[i].device_name) {
                    if (i == 1) {
                      buc.device_name = data[i].device_name
                      buc.duration = data[i].server_time - data[cha].server_time
                      buc.run_data.push(data[i].heart_rate)
                      cha = i
                      arrbox.push(buc)
                      buc = {}
                      buc.run_data = []
                    } else {
                      buc.device_name = data[i].device_name
                      buc.duration = data[i].server_time - data[cha].server_time
                      buc.run_data.push(data[i].heart_rate)
                      cha = i
                      arrbox.push(buc)
                      buc = {}
                      buc.run_data = []
                    }
                  }

                  //心率统计
                  if (data[i].result == 0) {
                    if (i == 0) {
                      runa = 0
                    } else {
                      runa = parseInt(runa) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                  if (data[i].result == 1) {
                    if (i == 0) {
                      runb = 0
                    } else {
                      runb = parseInt(runb) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                  if (data[i].result == 2) {
                    if (i == 0) {
                      runc = 0
                    } else {
                      runc = parseInt(runc) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                  if (data[i].result == 3) {
                    if (i == 0) {
                      rund = 0
                    } else {
                      rund = parseInt(rund) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                  if (data[i].result == 4) {
                    if (i == 0) {
                      rune = 0
                    } else {
                      rune = parseInt(rune) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                  if (data[i].result == 5) {
                    if (i == 0) {
                      runf = 0
                    } else {
                      runf = parseInt(runf) + parseInt(data[i].server_time - data[i - 1].server_time)
                    }
                  }
                }
                var bigl = 0
                xcc > yqc ? bigl = xcc : bigl = yqc
                if (bigl !== 0){
                  there.setData({
                    xcc: Math.round(xcc),
                    yqc: Math.round(yqc),
                    xbb: xcc / bigl * 610 + 10,
                    yqa: yqc / bigl * 610 + 10
                  })
                }else{
                  there.setData({
                    xcc: Math.round(xcc),
                    yqc: Math.round(yqc),
                    xbb: 10,
                    yqa: 10
                  })
                }
                run_effects.push(runa)
                run_effects.push(runb)
                run_effects.push(runc)
                run_effects.push(rund)
                run_effects.push(rune)
                run_effects.push(runf)
                // run_effects.splice(data[data.length - 1].result, 1, (run_effects[data[data.length - 1].result] + parseInt(data[data.length - 1].server_time)))
                // console.log(run_effects)
                //心率功效时间排序
                var zyx = JSON.parse(JSON.stringify(run_effects));
                zyx.sort(function (a, b) {
                  return b - a;
                });
                var pcp = 0
                for (var p = 0; p < run_effects.length; p++) {
                  pcp = pcp + run_effects[p]
                }
                // console.log(zyx)
                var pbig = zyx[0]
                var nob = 0
                var kobb
                //主要集中在
                for (var p = 0; p < run_effects.length; p++) {
                  if (pbig == run_effects[p]) {
                    nob = p
                  }
                }
                if (nob == 0) {
                  kobb = '激活放松'
                }
                if (nob == 1) {
                  kobb = '动态热身'
                }
                if (nob == 2) {
                  kobb = '脂肪燃烧'
                }
                if (nob == 3) {
                  kobb = '有氧耐力'
                }
                if (nob == 4) {
                  kobb = '无氧耐力'
                }
                if (nob == 5) {
                  kobb = '峰值锻炼'
                }
                // console.log(run_effects[2])
                there.setData({
                  pcp: Math.round(pcp / 60000),
                  kobb: kobb,
                  yaa: Math.round(run_effects[0] / 60000),
                  ybb: Math.round(run_effects[1] / 60000),
                  ycc: Math.round(run_effects[2] / 60000),
                  ydd: Math.round(run_effects[3] / 60000),
                  yee: Math.round(run_effects[4] / 60000),
                  yff: Math.round(run_effects[5] / 60000),
                  yya: run_effects[0] / pbig * 250 + 10,
                  yyb: run_effects[1] / pbig * 250 + 10,
                  yyc: run_effects[2] / pbig * 250 + 10,
                  yyd: run_effects[3] / pbig * 250 + 10,
                  yye: run_effects[4] / pbig * 250 + 10,
                  yyf: run_effects[5] / pbig * 250 + 10
                })

                buc.device_name = data[data.length - 1].device_name
                buc.duration = data[data.length - 1].server_time - data[cha].server_time
                buc.run_data.push(data[data.length - 1].heart_rate)
                // console.log(arrbox)
                // console.log(buc)
                arrbox.push(buc)
                // console.log(arrbox)
                data = arrbox
                
                // console.log(data)

                var acc = 0
                var bcc = 0
                var ccc = 0
                var xcc = 0
                var ycc = 0

              
                for (var i = 0; i < data.length; i++) {
                  ssuummdur = ssuummdur + data[i].duration
                  //本次运动时长
                  if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
                    acc = acc + data[i].duration
                  }
                  if (data[i].device_name.indexOf("哑铃") > -1 || data[i].device_name.indexOf("杠铃") > -1 || data[i].device_name.indexOf("飞鸟") > -1) {
                    bcc = bcc + data[i].duration
                  }
                  if (data[i].device_name == 'hiit') {
                    ccc = ccc + data[i].duration
                  }
                }
                var bigb
                acc > bcc ? bigb = acc : bigb = bcc
                bigb > ccc ? bigb = bigb : bigb = ccc

                there.setData({
                  acc: Math.round(acc / 60000),
                  bcc: Math.round(bcc / 60000),
                  ccc: Math.round(ccc / 60000),
                  pcc: Math.round(acc / 60000) + Math.round(bcc / 60000) + Math.round(ccc / 60000),
                  abb: acc / bigb * 610 + 10,
                  bbb: bcc / bigb * 610 + 10,
                  cbb: ccc / bigb * 610 + 10
                })
                there.setData({
                  oloz: Math.floor(there.data.pcc / there.data.sctime * 100)
                })
                
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'data',
                    data: data
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'data', data)
                } catch (e) {
                  console.log("缓存失败")
                }
                //运动曲线canvas
                const lcl = wx.createCanvasContext('ydqx')
                var ck = there.data.ck

                console.log(ck)
                lcl.beginPath();
                lcl.lineWidth = 0.5
                // lcl.setStrokeStyle('blue');
                // lcl.moveTo(233 * ck, 105 * ck)
                // lcl.lineTo(305 * ck, 105 * ck)
                var cfont = 10 * ck + "px Arial"
                lcl.setFontSize(10)
                lcl.setFillStyle("rgba(50, 69, 96, 1)")
                lcl.fillText("200", 0 * ck, 10 * ck)
                lcl.fillText("180", 0 * ck, 50 * ck)
                lcl.fillText("160", 0 * ck, 90 * ck)
                lcl.fillText("140", 0 * ck, 130 * ck)
                lcl.fillText("120", 0 * ck, 170 * ck)
                lcl.fillText("100", 0 * ck, 210 * ck)
                lcl.fillText("80", 0 * ck, 250 * ck)
                lcl.stroke();

                lcl.beginPath();
                lcl.lineWidth = 0.5
                lcl.setFillStyle("rgba(111,121,136,1)")
                lcl.fillText("峰值", 310 * ck, 10 * ck)
                lcl.fillText("锻炼", 310 * ck, 23 * ck)
                lcl.fillText("无氧", 310 * ck, 50 * ck)
                lcl.fillText("锻炼", 310 * ck, 63 * ck)
                lcl.fillText("有氧", 310 * ck, 90 * ck)
                lcl.fillText("耐力", 310 * ck, 103 * ck)
                lcl.fillText("脂肪", 310 * ck, 130 * ck)
                lcl.fillText("燃烧", 310 * ck, 143 * ck)
                lcl.fillText("动态", 310 * ck, 170 * ck)
                lcl.fillText("热身", 310 * ck, 183 * ck)
                lcl.fillText("激活", 310 * ck, 210 * ck)
                lcl.fillText("放松", 310 * ck, 223 * ck)
                lcl.stroke();

                lcl.beginPath();
                lcl.lineWidth = 0.5
                lcl.setStrokeStyle('rgba(175,193,212,0.5)');
                lcl.setLineDash([3 * ck, 3 * ck])
                lcl.moveTo(26 * ck, 7 * ck);
                lcl.lineTo(300 * ck, 7 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(26 * ck, 47 * ck);
                lcl.lineTo(300 * ck, 47 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(26 * ck, 87 * ck);
                lcl.lineTo(300 * ck, 87 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(26 * ck, 127 * ck);
                lcl.lineTo(300 * ck, 127 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(26 * ck, 167 * ck);
                lcl.lineTo(300 * ck, 167 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.setLineDash([3 * ck, 3 * ck])
                lcl.moveTo(26 * ck, 207 * ck);
                lcl.lineTo(300 * ck, 207 * ck);
                lcl.stroke()

                lcl.beginPath();
                lcl.lineWidth = 0.5
                lcl.setLineDash([0, 0])
                lcl.moveTo(26 * ck, 7 * ck);
                lcl.lineTo(26 * ck, 317 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(300 * ck, 7 * ck);
                lcl.lineTo(300 * ck, 317 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(117 * ck, 7 * ck);
                lcl.lineTo(117 * ck, 317 * ck);
                lcl.stroke()
                lcl.beginPath();
                lcl.moveTo(208 * ck, 7 * ck);
                lcl.lineTo(208 * ck, 317 * ck);
                lcl.stroke()

                for (var i = 0; i < data.length; i++) {
                  lcl.beginPath()
                  lcl.lineWidth = 0.5
                  if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
                    lcl.setStrokeStyle = 'rgba(255,255,255,0)'
                    lcl.fillStyle = '#FFD450'
                    var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
                    linearGradient1.addColorStop(0, '#FFD450');
                    linearGradient1.addColorStop(1, 'rgba(255,236,178,0.2)');
                    lcl.fillStyle = linearGradient1;
                  }
                  if (data[i].device_name.indexOf("哑铃") > -1 || data[i].device_name.indexOf("杠铃") > -1 || data[i].device_name.indexOf("飞鸟") > -1) {
                    lcl.setStrokeStyle = 'rgba(255,255,255,0)'
                    lcl.fillStyle = '#398EFF'
                    var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
                    linearGradient1.addColorStop(0, '#398EFF');
                    linearGradient1.addColorStop(1, 'rgba(199,223,255,0.2)');
                    lcl.fillStyle = linearGradient1;
                  }
                  if (data[i].device_name == "hiit") {
                    lcl.setStrokeStyle = 'rgba(255,255,255,0)'
                    lcl.fillStyle = '#FF5E7F'
                    var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
                    linearGradient1.addColorStop(0, '#FF5E7F');
                    linearGradient1.addColorStop(1, 'rgba(255,93,127,0.2)');
                    lcl.fillStyle = linearGradient1;
                  }
                  if (data[i].device_name == "") {
                    lcl.setStrokeStyle = 'rgba(255,255,255,0)'
                    lcl.fillStyle = '#7E879C'
                    var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
                    linearGradient1.addColorStop(0, '#7E879C');
                    linearGradient1.addColorStop(1, 'rgba(216,221,238,0.2)');
                    lcl.fillStyle = linearGradient1;
                  }

                  lcl.lineWidth = 0.5
                  // console.log(data[i].run_data.length)
                  // console.log(data[i].run_data[data[i].run_data.length - 1])
                  // console.log(kk * data[i].run_data[data[i].run_data.length - 1] + bb)
                  lcl.moveTo((lefttop + data[i].duration / ssuummdur * 274) * ck, (kk * data[i].run_data[data[i].run_data.length - 1] + bb) * ck)
                  sumddp = sumddp + data[i].duration / ssuummdur * 274
                  lcl.lineTo(sumddp * ck, 317 * ck)
                  lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, 317 * ck)
                  lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
                  for (var j = 0; j < data[i].run_data.length; j++) {
                    if (data[i].run_data[j] < 45) {


                      lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
                      // console.log(kk * data[i].run_data[j] + bb)
                    } else {
                      lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
                    }
                  }
                  lcl.fill()
                  lcl.stroke()
                  lasttop = data[i].run_data[data[i].run_data.length - 1]
                  lefttop = lefttop + data[i].duration / ssuummdur * 274
                }
                //顶部实线

                var kk = -2
                var bb = 407
                var sumddp = 26
                var lasttop = 60
                var lefttop = 26

                for (var i = 0; i < data.length; i++) {
                  lcl.beginPath()
                  lcl.lineWidth = 1
                  if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
                    lcl.setStrokeStyle = '#FFD450'
                  }
                  if (data[i].device_name == "力量") {
                    lcl.setStrokeStyle = '#398EFF'
                  }
                  if (data[i].device_name == "hiit") {
                    lcl.setStrokeStyle = '#FF5E7F'
                  }
                  if (data[i].device_name == "") {
                    lcl.setStrokeStyle = '#7E879C'
                  }

                  // lcl.lineWidth = 0.5

                  sumddp = sumddp + data[i].duration / ssuummdur * 274
                  lcl.moveTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
                  for (var j = 0; j < data[i].run_data.length; j++) {
                    if (data[i].run_data[j] < 45) {
                      lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
                    } else {
                      lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
                    }
                  }

                  lcl.stroke()
                  lasttop = data[i].run_data[data[i].run_data.length - 1]
                  lefttop = lefttop + data[i].duration / ssuummdur * 274
                }
                //底部时间
                // console.log(parseInt(ftime) + parseInt((etime - ftime)/3))
                // console.log(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3)))
                // console.log(there.getDd(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3))))

                var kboa = there.getDd(new Date(parseInt(ftime)))
                var kbob = there.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3))))
                var kboc = there.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3 * 2))))
                var kbod = there.getDd(new Date(parseInt(etime)))
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'kboa',
                    data: kboa
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'kbob',
                    data: kbob
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'kboc',
                    data: kboc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'kbod',
                    data: kbod
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'kboa', kboa)
                  // wx.setStorageSync(app.globalData.bindtime + 'kbob', kbob)
                  // wx.setStorageSync(app.globalData.bindtime + 'kboc', kboc)
                  // wx.setStorageSync(app.globalData.bindtime + 'kbod', kbod)
                } catch (e) {
                  console.log("缓存失败")
                }
                lcl.beginPath();
                lcl.lineWidth = 0.5
                lcl.setFillStyle("rgba(50,69,96,1)")
                lcl.fillText(kboa, 26 * ck, 332 * ck)
                lcl.fillText(kbob, 104 * ck, 332 * ck)
                lcl.fillText(kboc, 195 * ck, 332 * ck)
                lcl.fillText(kbod, 273 * ck, 332 * ck)
                lcl.stroke();
                // data[data.length - 1].end_time - data[0].start_time
                lcl.draw()


                //心率功效
                const yzy = wx.createCanvasContext('xlgx')
                // console.log(there.data.ck)
                var ck = there.data.ck

                // console.log(yzy.width)
                // yzy.width = yzy.width * ck
                // yzy.height = yzy.height * ck
                var x1, x2, x3, x4, x5
                var a1, a2, a3, a4, a5, a6

                // data = run_effects
                // var ydgxbox = [0, 0, 0, 0, 0, 0]
                // for (var i = 0; i < data.length; i++) {
                //   ydgxbox.splice(data[i].effect, 1, data[i].time)
                // }
                var ydgxbox
                ydgxbox = run_effects
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ydgxbox',
                    data: ydgxbox
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'ydgxbox', ydgxbox)
                } catch (e) {
                  console.log("缓存失败")
                }
                a1 = ydgxbox[1];
                a2 = ydgxbox[3];
                a3 = ydgxbox[5];
                a4 = ydgxbox[4];
                a5 = ydgxbox[2];
                a6 = ydgxbox[0];
                // $("#pya").html(Math.floor(ydgxbox[0] / 60000))
                // $("#pyb").html(Math.floor(ydgxbox[1] / 60000))
                // $("#pyc").html(Math.floor(ydgxbox[2] / 60000))
                // $("#pyd").html(Math.floor(ydgxbox[3] / 60000))
                // $("#pye").html(Math.floor(ydgxbox[4] / 60000))
                // $("#pyf").html(Math.floor(ydgxbox[5] / 60000))
                var zybox = JSON.parse(JSON.stringify(ydgxbox));
                zybox.sort(function (a, b) {
                  return b - a;
                });
                // console.log(zybox)
                var suaax = 0;
                for (var i = 0; i < ydgxbox.length; i++) {
                  if (ydgxbox[i] == zybox[0]) {
                    suaax = i
                  }
                }
                // document.getElementById("mktua").style.width = Math.floor(ydgxbox[0] / ydgxbox[suaax] * 13) + "rem"
                // document.getElementById("mktub").style.width = Math.floor(ydgxbox[1] / ydgxbox[suaax] * 13) + "rem"
                // document.getElementById("mktuc").style.width = Math.floor(ydgxbox[2] / ydgxbox[suaax] * 13) + "rem"
                // document.getElementById("mktud").style.width = Math.floor(ydgxbox[3] / ydgxbox[suaax] * 13) + "rem"
                // document.getElementById("mktue").style.width = Math.floor(ydgxbox[4] / ydgxbox[suaax] * 13) + "rem"
                // document.getElementById("mktuf").style.width = Math.floor(ydgxbox[5] / ydgxbox[suaax] * 13) + "rem"
                //颜色
                // document.getElementById("mktua").style.background = '#FFD450'
                // document.getElementById("mktub").style.background = '#5A93FF'
                // document.getElementById("mktuc").style.background = '#FF5E7F'
                // document.getElementById("mktud").style.background = '#5AC5FF'
                // document.getElementById("mktue").style.background = '#FFA750'
                // document.getElementById("mktuf").style.background = '#47F4B4'
                x1 = -0.5 + (Math.floor(a1 / (a1 + a2 + a3 + a4 + a5 + a6) * 1000) / 1000) * 2;
                x2 = -0.5 + (Math.floor((a1 + a2) / (a1 + a2 + a3 + a4 + a5 + a6) * 1000) / 1000) * 2;
                x3 = -0.5 + (Math.floor((a1 + a2 + a3) / (a1 + a2 + a3 + a4 + a5 + a6) * 1000) / 1000) * 2;
                x4 = -0.5 + (Math.floor((a1 + a2 + a3 + a4) / (a1 + a2 + a3 + a4 + a5 + a6) * 1000) / 1000) * 2;
                x5 = -0.5 + (Math.floor((a1 + a2 + a3 + a4 + a5) / (a1 + a2 + a3 + a4 + a5 + a6) * 1000) / 1000) * 2;
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'x1',
                    data: x1
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'x2',
                    data: x2
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'x3',
                    data: x3
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'x4',
                    data: x4
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'x5',
                    data: x5
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'x1', x1)
                  // wx.setStorageSync(app.globalData.bindtime + 'x2', x2)
                  // wx.setStorageSync(app.globalData.bindtime + 'x3', x3)
                  // wx.setStorageSync(app.globalData.bindtime + 'x4', x4)
                  // wx.setStorageSync(app.globalData.bindtime + 'x5', x5)
                } catch (e) {
                  console.log("缓存失败")
                }
                //
                yzy.beginPath();
                yzy.lineWidth = 35 * ck
                yzy.setStrokeStyle('#5A93FF');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, -0.5 * Math.PI, x1 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.setStrokeStyle('#72D6FF');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, x1 * Math.PI, x2 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.setStrokeStyle('#47F4B4');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, x2 * Math.PI, x3 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.setStrokeStyle('#FFAD2A');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, x3 * Math.PI, x4 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.setStrokeStyle('#FFA271');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, x4 * Math.PI, x5 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.setStrokeStyle('#FF7F65');
                yzy.arc(150 * ck, 100 * ck, 50 * ck, x5 * Math.PI, 1.5 * Math.PI)
                yzy.stroke();
                yzy.beginPath();
                yzy.lineWidth = 0.5 * ck
                yzy.fillStyle = '#FF7F65'
                yzy.setStrokeStyle('#FF7F65');
                yzy.moveTo(0 * ck, 40 * ck)
                yzy.lineTo(95 * ck, 40 * ck)
                yzy.arc(98 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.fill()
                yzy.stroke()
                yzy.beginPath();
                yzy.setStrokeStyle('#FFA271');
                yzy.fillStyle = '#FFA271'
                yzy.moveTo(0 * ck, 105 * ck)
                yzy.lineTo(72 * ck, 105 * ck)
                yzy.arc(72 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.fill()
                yzy.stroke()
                yzy.beginPath();
                yzy.setStrokeStyle('#FFAD2A');
                yzy.fillStyle = '#FFAD2A'
                yzy.moveTo(0 * ck, 160 * ck)
                yzy.lineTo(85 * ck, 160 * ck)
                yzy.arc(98 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.fill()
                yzy.stroke()
                yzy.beginPath();
                yzy.setStrokeStyle('#5A93FF');
                yzy.fillStyle = '#5A93FF'
                yzy.moveTo(210 * ck, 40 * ck)
                yzy.lineTo(305 * ck, 40 * ck)
                yzy.arc(207 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.stroke()
                yzy.fill()
                yzy.beginPath();
                yzy.moveTo(233 * ck, 105 * ck)
                yzy.lineTo(305 * ck, 105 * ck)
                yzy.arc(233 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.fillStyle = '#72D6FF'
                yzy.setStrokeStyle('#72D6FF');
                yzy.fill()
                yzy.stroke()
                yzy.beginPath();
                yzy.setStrokeStyle('#47F4B4');
                yzy.fillStyle = '#47F4B4'
                yzy.moveTo(210 * ck, 160 * ck)
                yzy.lineTo(305 * ck, 160 * ck)
                yzy.arc(207 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
                yzy.fill()
                yzy.stroke()

                //
                var cfont = 10 * ck + "px Arial"
                // console.log(cfont)
                // yzy.font= 12*ck+"px Arial"
                // yzy.fillStyle="#000"
                // yzy.fillText("激活放松",0*ck,25*ck)
                //
                yzy.setFontSize(10)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("激活放松", 0 * ck, 20 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("脂肪燃烧", 0 * ck, 83 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("无氧耐力", 0 * ck, 140 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("动态热身", 265 * ck, 20 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("有氧耐力", 265 * ck, 83 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                yzy.fillText("峰值锻炼", 265 * ck, 140 * ck)
                // yzy.font = cfont
                yzy.setFillStyle("#000")
                var opo = ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]
                yzy.fillText(suaax == 0 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[0] / opo * 100) + "%", 0 * ck, 35 * ck)
                yzy.fillText(suaax == 2 ? (100 - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[2] / opo * 100) + "%", 0 * ck, 98 * ck)
                yzy.fillText(suaax == 4 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[4] / opo * 100) + "%", 0 * ck, 155 * ck)
                yzy.fillText(suaax == 1 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[1] / opo * 100) + "%", 283 * ck, 35 * ck)
                yzy.fillText(suaax == 3 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[3] / opo * 100) + "%", 283 * ck, 98 * ck)
                yzy.fillText(suaax == 5 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[5] / opo * 100) + "%", 283 * ck, 155 * ck)
                yzy.draw()
                
                
                try {
                  wx.setStorage({
                    key: app.globalData.bindtime + 'scccal',
                    data: there.data.scccal
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'scc',
                    data: there.data.scc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'sctime',
                    data: there.data.sctime
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'olo',
                    data: there.data.olo
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'oll',
                    data: there.data.oll
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'pcc',
                    data: there.data.pcc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'otup',
                    data: there.data.otup
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'acc',
                    data: there.data.acc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'abb',
                    data: there.data.abb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ccc',
                    data: there.data.ccc
                  })

                  wx.setStorage({
                    key: app.globalData.bindtime + 'bbb',
                    data: there.data.bbb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'bcc',
                    data: there.data.bcc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'cbb',
                    data: there.data.cbb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'xcc',
                    data: there.data.xcc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'xbb',
                    data: there.data.xbb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yqc',
                    data: there.data.yqc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yqa',
                    data: there.data.yqa
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'oloz',
                    data: there.data.oloz
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'pcp',
                    data: there.data.pcp
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'kobb',
                    data: there.data.kobb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yaa',
                    data: there.data.yaa
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yya',
                    data: there.data.yya
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yyb',
                    data: there.data.yyb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ybb',
                    data: there.data.ybb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yyb',
                    data: there.data.yyb
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ycc',
                    data: there.data.ycc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yyc',
                    data: there.data.yyc
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ydd',
                    data: there.data.ydd
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yyd',
                    data: there.data.yyd
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yee',
                    data: there.data.yee
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yye',
                    data: there.data.yye
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yff',
                    data: there.data.yff
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'yyf',
                    data: there.data.yyf
                  })
                  wx.setStorage({
                    key: app.globalData.bindtime + 'ck',
                    data: there.data.ck
                  })
                  // wx.setStorageSync(app.globalData.bindtime + 'scccal', there.data.scccal)
                  // wx.setStorageSync(app.globalData.bindtime + 'scc', there.data.scc)
                  // wx.setStorageSync(app.globalData.bindtime + 'sctime', there.data.sctime)
                  // wx.setStorageSync(app.globalData.bindtime + 'olo', there.data.olo)
                  // wx.setStorageSync(app.globalData.bindtime + 'oll', there.data.oll)
                  // wx.setStorageSync(app.globalData.bindtime + 'pcc', there.data.pcc)
                  // wx.setStorageSync(app.globalData.bindtime + 'otup', there.data.otup)
                  // wx.setStorageSync(app.globalData.bindtime + 'acc', there.data.acc)
                  // wx.setStorageSync(app.globalData.bindtime + 'abb', there.data.abb)
                  // wx.setStorageSync(app.globalData.bindtime + 'ccc', there.data.ccc)
                  // wx.setStorageSync(app.globalData.bindtime + 'bbb', there.data.bbb)
                  // wx.setStorageSync(app.globalData.bindtime + 'bcc', there.data.bcc)
                  // wx.setStorageSync(app.globalData.bindtime + 'cbb', there.data.cbb)
                  // wx.setStorageSync(app.globalData.bindtime + 'xcc', there.data.xcc)
                  // wx.setStorageSync(app.globalData.bindtime + 'xbb', there.data.xbb)
                  // wx.setStorageSync(app.globalData.bindtime + 'yqc', there.data.yqc)
                  // wx.setStorageSync(app.globalData.bindtime + 'yqa', there.data.yqa)
                  // wx.setStorageSync(app.globalData.bindtime + 'oloz', there.data.oloz)
                  // wx.setStorageSync(app.globalData.bindtime + 'pcp', there.data.pcp)
                  // wx.setStorageSync(app.globalData.bindtime + 'kobb', there.data.kobb)
                  // wx.setStorageSync(app.globalData.bindtime + 'yaa', there.data.yaa)
                  // wx.setStorageSync(app.globalData.bindtime + 'yya', there.data.yya)
                  // wx.setStorageSync(app.globalData.bindtime + 'yyb', there.data.yyb)
                  // wx.setStorageSync(app.globalData.bindtime + 'ybb', there.data.ybb)
                  // wx.setStorageSync(app.globalData.bindtime + 'ycc', there.data.ycc)
                  // wx.setStorageSync(app.globalData.bindtime + 'yyc', there.data.yyc)
                  // wx.setStorageSync(app.globalData.bindtime + 'ydd', there.data.ydd)
                  // wx.setStorageSync(app.globalData.bindtime + 'yyd', there.data.yyd)
                  // wx.setStorageSync(app.globalData.bindtime + 'yee', there.data.yee)
                  // wx.setStorageSync(app.globalData.bindtime + 'yye', there.data.yye)
                  // wx.setStorageSync(app.globalData.bindtime + 'yff', there.data.yff)
                  // wx.setStorageSync(app.globalData.bindtime + 'yyf', there.data.yyf)
                  // wx.setStorageSync(app.globalData.bindtime + 'ck', there.data.ck)
                  // there.setData({
                  //   oyo: false,
                  // })
                } catch (e) {
                  console.log("缓存失败")
                }
              }
              else {
                wx.showToast({
                  title: '运动没有数据',
                  icon: '',     //默认值是success,就算没有icon这个值，就算有其他值最终也显示success
                  duration: 4000,      //停留时间
                })
              }
            } 
            
        } 
      })
    }
  }
})
