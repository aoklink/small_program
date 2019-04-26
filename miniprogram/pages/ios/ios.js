var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
const doAuth = require('../../utils/doAuth.js')
var user = require('../../utils/user.js');
// app.globalData.bindtime = '1554982731292'
// us.uid = "7e44bc47069d2016144e175778a11359"
// us.avatarUrl  = "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKg9tednwUD4JOOHCIicoRTgMyXkibXPtvXfr9oicMFrdMKwCgDIhJCweYfnvZaXyvvyiaH3IPlkDbdbw/132"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    spyh: "-'"+'-"',
    kboot:false,
    shaok: true,
    oka: true,
    okb: false,
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
    sharebg: 'https://ll.linkfeeling.cn/wx/share.png', // 分享底部背景图
    shareTitle: '', // 分享标题
    shareCoverImg: 'https://ll.linkfeeling.cn/wx/share.png', // 分享封面图
    shareQrImg: 'https://ll.linkfeeling.cn/wx/linkfeeling_gh.jpg', // 分享小程序二维码
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
    ],
    winHeight: "",//窗口高度
    currentTab: 0, //预设当前项的值
    scrollLeft: 0, //tab标题的滚动条位置
    expertList: [{ //假数据
      img: "avatar.png",
      name: "欢顔",
      tag: "知名情感博主",
      answer: 134,
      listen: 2234
    }]
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav: function (e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) { return false; }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor: function () {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    console.log(py);
    this.setData({
      starty: py
    })
  },
  getEng: function (no) {
    var date = no;
    var mon = date.toDateString().split(" ")[1]
    var currentdate = mon + '.' + date.getFullYear()
    return currentdate;
  },
  geted: function (no) {
    var date = no;
    var strDate = date.getDate();
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = strDate
    return currentdate;
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
      tot: false,
      shaok: false
    })
  },
  kta: function () {
    var that = this
    console.log(99)
    that.setData({
      tot: true,
      shaok: true
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
    var hour = date.getHours()
    var smin = date.getMinutes()
    if (hour >= 1 && hour <= 9) {
      hour = "0" + hour;
    }
    if (smin >= 0 && smin <= 9) {
      smin = "0" + smin;
    }
    var currentdate = hour + seperator2 + smin;
    return currentdate;
  },
  onLoad: function () {
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
        // uid: "7e44bc47069d2016144e175778a11359",
        user_type: us.ut,
        request_time: us.rt,
        platform: us.pt,
        tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        login_type: "wx",
        network: us.nw,
        product_id: us.pi,
        app_version: us.av,
        bind_time: app.globalData.bindtime
        // bind_time: "1554726910001"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  onReady: function () {
    var that = this
    var there = this
    // try {
    //   var value = wx.getStorageSync(app.globalData.bindtime + 'scccal')
    //   if (value) {
    //     // Do something with return value
    //     there.setData({
    //       scccal: wx.getStorageSync(app.globalData.bindtime + 'scccal'),
    //       scc: wx.getStorageSync(app.globalData.bindtime + 'scc'),
    //       sctime: wx.getStorageSync(app.globalData.bindtime + 'sctime'),
    //       olo: wx.getStorageSync(app.globalData.bindtime + 'olo'),
    //       oll: wx.getStorageSync(app.globalData.bindtime + 'oll'),
    //       pcc: wx.getStorageSync(app.globalData.bindtime + 'pcc'),
    //       otup: wx.getStorageSync(app.globalData.bindtime + 'otup'),
    //       acc: wx.getStorageSync(app.globalData.bindtime + 'acc'),
    //       abb: wx.getStorageSync(app.globalData.bindtime + 'abb'),
    //       ccc: wx.getStorageSync(app.globalData.bindtime + 'ccc'),
    //       bbb: wx.getStorageSync(app.globalData.bindtime + 'bbb'),
    //       bcc: wx.getStorageSync(app.globalData.bindtime + 'bcc'),
    //       cbb: wx.getStorageSync(app.globalData.bindtime + 'cbb'),
    //       xcc: wx.getStorageSync(app.globalData.bindtime + 'xcc'),
    //       xbb: wx.getStorageSync(app.globalData.bindtime + 'xbb'),
    //       yqc: wx.getStorageSync(app.globalData.bindtime + 'yqc'),
    //       yqa: wx.getStorageSync(app.globalData.bindtime + 'yqa'),
    //       oloz: wx.getStorageSync(app.globalData.bindtime + 'oloz'),
    //       pcp: wx.getStorageSync(app.globalData.bindtime + 'pcp'),
    //       kobb: wx.getStorageSync(app.globalData.bindtime + 'kobb'),
    //       yaa: wx.getStorageSync(app.globalData.bindtime + 'yaa'),
    //       yya: wx.getStorageSync(app.globalData.bindtime + 'yya'),
    //       yyb: wx.getStorageSync(app.globalData.bindtime + 'yyb'),
    //       ybb: wx.getStorageSync(app.globalData.bindtime + 'ybb'),
    //       ycc: wx.getStorageSync(app.globalData.bindtime + 'ycc'),
    //       yyc: wx.getStorageSync(app.globalData.bindtime + 'yyc'),
    //       ydd: wx.getStorageSync(app.globalData.bindtime + 'ydd)'),
    //       yyd: wx.getStorageSync(app.globalData.bindtime + 'yyd'),
    //       yee: wx.getStorageSync(app.globalData.bindtime + 'yee'),
    //       yye: wx.getStorageSync(app.globalData.bindtime + 'yye'),
    //       yff: wx.getStorageSync(app.globalData.bindtime + 'yff'),
    //       yyf: wx.getStorageSync(app.globalData.bindtime + 'yyf'),
    //       ck: wx.getStorageSync(app.globalData.bindtime + 'ck'),

    //     })
    //     there.setData({
    //       dodo: true
    //     })
    //   }
    //   //运动曲线canvas
    //   const lcl = wx.createCanvasContext('ydqx')
    //   var ck = wx.getStorageSync(app.globalData.bindtime + 'ck')

    //   lcl.beginPath();
    //   lcl.lineWidth = 0.5
    //   var cfont = 10 * ck + "px Arial"
    //   lcl.setFontSize(10)
    //   lcl.setFillStyle("rgba(50, 69, 96, 1)")
    //   lcl.fillText("200", 0 * ck, 10 * ck)
    //   lcl.fillText("180", 0 * ck, 50 * ck)
    //   lcl.fillText("160", 0 * ck, 90 * ck)
    //   lcl.fillText("140", 0 * ck, 130 * ck)
    //   lcl.fillText("120", 0 * ck, 170 * ck)
    //   lcl.fillText("100", 0 * ck, 210 * ck)
    //   lcl.fillText("80", 0 * ck, 250 * ck)
    //   lcl.stroke();

    //   lcl.beginPath();
    //   lcl.lineWidth = 0.5
    //   lcl.setFillStyle("rgba(111,121,136,1)")
    //   lcl.fillText("峰值", 310 * ck, 10 * ck)
    //   lcl.fillText("锻炼", 310 * ck, 23 * ck)
    //   lcl.fillText("无氧", 310 * ck, 50 * ck)
    //   lcl.fillText("锻炼", 310 * ck, 63 * ck)
    //   lcl.fillText("有氧", 310 * ck, 90 * ck)
    //   lcl.fillText("耐力", 310 * ck, 103 * ck)
    //   lcl.fillText("脂肪", 310 * ck, 130 * ck)
    //   lcl.fillText("燃烧", 310 * ck, 143 * ck)
    //   lcl.fillText("动态", 310 * ck, 170 * ck)
    //   lcl.fillText("热身", 310 * ck, 183 * ck)
    //   lcl.fillText("激活", 310 * ck, 210 * ck)
    //   lcl.fillText("放松", 310 * ck, 223 * ck)
    //   lcl.stroke();

    //   lcl.beginPath();
    //   lcl.lineWidth = 0.5
    //   lcl.setStrokeStyle('rgba(175,193,212,0.5)');
    //   lcl.setLineDash([3 * ck, 3 * ck])
    //   lcl.moveTo(26 * ck, 7 * ck);
    //   lcl.lineTo(300 * ck, 7 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(26 * ck, 47 * ck);
    //   lcl.lineTo(300 * ck, 47 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(26 * ck, 87 * ck);
    //   lcl.lineTo(300 * ck, 87 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(26 * ck, 127 * ck);
    //   lcl.lineTo(300 * ck, 127 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(26 * ck, 167 * ck);
    //   lcl.lineTo(300 * ck, 167 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.setLineDash([3 * ck, 3 * ck])
    //   lcl.moveTo(26 * ck, 207 * ck);
    //   lcl.lineTo(300 * ck, 207 * ck);
    //   lcl.stroke()

    //   lcl.beginPath();
    //   lcl.lineWidth = 0.5
    //   lcl.setLineDash([0, 0])
    //   lcl.moveTo(26 * ck, 7 * ck);
    //   lcl.lineTo(26 * ck, 317 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(300 * ck, 7 * ck);
    //   lcl.lineTo(300 * ck, 317 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(117 * ck, 7 * ck);
    //   lcl.lineTo(117 * ck, 317 * ck);
    //   lcl.stroke()
    //   lcl.beginPath();
    //   lcl.moveTo(208 * ck, 7 * ck);
    //   lcl.lineTo(208 * ck, 317 * ck);
    //   lcl.stroke()

    //   //canvas运动曲线分布图表
    //   // console.log(data)
    //   ck = there.data.ck
    //   // console.log(ck)
    //   var kk = -2
    //   var bb = 407
    //   var sumddp = 26
    //   var lasttop = 60
    //   var lefttop = 26
    //   var ssuummdur = 0
    //   var arrbox = []
    //   var cha = 0
    //   var buc = {}
    //   var ftime = wx.getStorageSync(app.globalData.bindtime + 'ftime')
    //   var etime = wx.getStorageSync(app.globalData.bindtime + 'etime')

    //   data = wx.getStorageSync(app.globalData.bindtime + 'data')

    //   for (var i = 0; i < data.length; i++) {
    //     lcl.beginPath()
    //     lcl.lineWidth = 0.5
    //     if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
    //       lcl.setStrokeStyle = 'rgba(255,255,255,0)'
    //       lcl.fillStyle = '#FFD450'
    //       var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
    //       linearGradient1.addColorStop(0, '#FFD450');
    //       linearGradient1.addColorStop(1, 'rgba(255,236,178,0.2)');
    //       lcl.fillStyle = linearGradient1;
    //     }
    //     if (data[i].c.indexOf("哑铃") > -1 || data[i].c.indexOf("杠铃") > -1 || data[i].c.indexOf("飞鸟") > -1) {
    //       lcl.setStrokeStyle = 'rgba(255,255,255,0)'
    //       lcl.fillStyle = '#398EFF'
    //       var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
    //       linearGradient1.addColorStop(0, '#398EFF');
    //       linearGradient1.addColorStop(1, 'rgba(199,223,255,0.2)');
    //       lcl.fillStyle = linearGradient1;
    //     }
    //     if (data[i].c == "hiit" || data[i].c == "HIIT") {
    //       lcl.setStrokeStyle = 'rgba(255,255,255,0)'
    //       lcl.fillStyle = '#FF5E7F'
    //       var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
    //       linearGradient1.addColorStop(0, '#FF5E7F');
    //       linearGradient1.addColorStop(1, 'rgba(255,93,127,0.2)');
    //       lcl.fillStyle = linearGradient1;
    //     }
    //     if (data[i].c == "rest" || data[i].c == "") {
    //       lcl.setStrokeStyle = 'rgba(255,255,255,0)'
    //       lcl.fillStyle = '#7E879C'
    //       var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
    //       linearGradient1.addColorStop(0, '#7E879C');
    //       linearGradient1.addColorStop(1, 'rgba(216,221,238,0.2)');
    //       lcl.fillStyle = linearGradient1;
    //     }

    //     lcl.lineWidth = 0.5

    //     lcl.moveTo((lefttop + data[i].duration / ssuummdur * 274) * ck, (kk * data[i].run_data[data[i].run_data.length - 1] + bb) * ck)
    //     sumddp = sumddp + data[i].duration / ssuummdur * 274
    //     lcl.lineTo(sumddp * ck, 317 * ck)
    //     lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, 317 * ck)
    //     lcl.lineTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
    //     for (var j = 0; j < data[i].run_data.length; j++) {
    //       if (data[i].run_data[j] < 45) {


    //         lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
    //         // console.log(kk * data[i].run_data[j] + bb)
    //       } else {
    //         lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
    //       }
    //     }
    //     lcl.fill()
    //     lcl.stroke()
    //     lasttop = data[i].run_data[data[i].run_data.length - 1]
    //     lefttop = lefttop + data[i].duration / ssuummdur * 274
    //   }
    //   //顶部实线

    //   var kk = -2
    //   var bb = 407
    //   var sumddp = 26
    //   var lasttop = 60
    //   var lefttop = 26

    //   for (var i = 0; i < data.length; i++) {
    //     lcl.beginPath()
    //     lcl.lineWidth = 1
    //     if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
    //       lcl.setStrokeStyle = '#FFD450'
    //     }
    //     if (data[i].c.indexOf("哑铃") > -1 || data[i].c.indexOf("杠铃") > -1 || data[i].c.indexOf("飞鸟") > -1) {
    //       lcl.setStrokeStyle = '#398EFF'
    //     }
    //     if (data[i].c == "hiit" || data[i].c == "HIIT") {
    //       lcl.setStrokeStyle = '#FF5E7F'
    //     }
    //     if (data[i].c == "rest" || data[i].c == "") {
    //       lcl.setStrokeStyle = '#7E879C'
    //     }

    //     // lcl.lineWidth = 0.5

    //     sumddp = sumddp + data[i].duration / ssuummdur * 274
    //     lcl.moveTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
    //     for (var j = 0; j < data[i].run_data.length; j++) {
    //       if (data[i].run_data[j] < 45) {
    //         lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
    //       } else {
    //         lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
    //       }
    //     }

    //     lcl.stroke()
    //     lasttop = data[i].run_data[data[i].run_data.length - 1]
    //     lefttop = lefttop + data[i].duration / ssuummdur * 274
    //   }
    //   //底部时间
    //   var kboa = wx.getStorageSync(app.globalData.bindtime + 'kboa')
    //   var kbob = wx.getStorageSync(app.globalData.bindtime + 'kbob')
    //   var kboc = wx.getStorageSync(app.globalData.bindtime + 'kboc')
    //   var kbod = wx.getStorageSync(app.globalData.bindtime + 'kbod')
    //   lcl.beginPath();
    //   lcl.lineWidth = 0.5
    //   lcl.setFillStyle("rgba(50,69,96,1)")
    //   lcl.fillText(kboa, 26 * ck, 332 * ck)
    //   lcl.fillText(kbob, 104 * ck, 332 * ck)
    //   lcl.fillText(kboc, 195 * ck, 332 * ck)
    //   lcl.fillText(kbod, 273 * ck, 332 * ck)
    //   lcl.stroke();
    //   // data[data.length - 1].end_time - data[0].start_time
    //   lcl.draw()


    //   //心率功效
    //   const yzy = wx.createCanvasContext('xlgx')
    //   // console.log(there.data.ck)
    //   var ck = wx.getStorageSync(app.globalData.bindtime + 'ck')


    //   var x1, x2, x3, x4, x5



    //   var ydgxbox
    //   ydgxbox = wx.getStorageSync(app.globalData.bindtime + 'ydgxbox')


    //   var zybox = JSON.parse(JSON.stringify(ydgxbox));
    //   zybox.sort(function (a, b) {
    //     return b - a;
    //   });
    //   // console.log(zybox)
    //   var suaax = 0;
    //   for (var i = 0; i < ydgxbox.length; i++) {
    //     if (ydgxbox[i] == zybox[0]) {
    //       suaax = i
    //     }
    //   }

    //   x1 = wx.getStorageSync(app.globalData.bindtime + 'x1')
    //   x2 = wx.getStorageSync(app.globalData.bindtime + 'x2')
    //   x3 = wx.getStorageSync(app.globalData.bindtime + 'x3')
    //   x4 = wx.getStorageSync(app.globalData.bindtime + 'x4')
    //   x5 = wx.getStorageSync(app.globalData.bindtime + 'x5')
    //   //
    //   yzy.beginPath();
    //   yzy.lineWidth = 35 * ck
    //   yzy.setStrokeStyle('#5A93FF');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, -0.5 * Math.PI, x1 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#72D6FF');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, x1 * Math.PI, x2 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#47F4B4');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, x2 * Math.PI, x3 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#FFAD2A');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, x3 * Math.PI, x4 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#FFA271');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, x4 * Math.PI, x5 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#FF7F65');
    //   yzy.arc(150 * ck, 100 * ck, 50 * ck, x5 * Math.PI, 1.5 * Math.PI)
    //   yzy.stroke();
    //   yzy.beginPath();
    //   yzy.lineWidth = 0.5 * ck
    //   yzy.fillStyle = '#FF7F65'
    //   yzy.setStrokeStyle('#FF7F65');
    //   yzy.moveTo(0 * ck, 40 * ck)
    //   yzy.lineTo(95 * ck, 40 * ck)
    //   yzy.arc(98 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.fill()
    //   yzy.stroke()
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#FFA271');
    //   yzy.fillStyle = '#FFA271'
    //   yzy.moveTo(0 * ck, 105 * ck)
    //   yzy.lineTo(72 * ck, 105 * ck)
    //   yzy.arc(72 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.fill()
    //   yzy.stroke()
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#FFAD2A');
    //   yzy.fillStyle = '#FFAD2A'
    //   yzy.moveTo(0 * ck, 160 * ck)
    //   yzy.lineTo(85 * ck, 160 * ck)
    //   yzy.arc(98 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.fill()
    //   yzy.stroke()
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#5A93FF');
    //   yzy.fillStyle = '#5A93FF'
    //   yzy.moveTo(210 * ck, 40 * ck)
    //   yzy.lineTo(305 * ck, 40 * ck)
    //   yzy.arc(207 * ck, 40 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.stroke()
    //   yzy.fill()
    //   yzy.beginPath();
    //   yzy.moveTo(233 * ck, 105 * ck)
    //   yzy.lineTo(305 * ck, 105 * ck)
    //   yzy.arc(233 * ck, 105 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.fillStyle = '#72D6FF'
    //   yzy.setStrokeStyle('#72D6FF');
    //   yzy.fill()
    //   yzy.stroke()
    //   yzy.beginPath();
    //   yzy.setStrokeStyle('#47F4B4');
    //   yzy.fillStyle = '#47F4B4'
    //   yzy.moveTo(210 * ck, 160 * ck)
    //   yzy.lineTo(305 * ck, 160 * ck)
    //   yzy.arc(207 * ck, 160 * ck, 2 * ck, 0, 2 * Math.PI)
    //   yzy.fill()
    //   yzy.stroke()

    //   //
    //   var cfont = 10 * ck + "px Arial"
    //   // console.log(cfont)
    //   // yzy.font= 12*ck+"px Arial"
    //   // yzy.fillStyle="#000"
    //   // yzy.fillText("激活放松",0*ck,25*ck)
    //   //
    //   yzy.setFontSize(10)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("激活放松", 0 * ck, 20 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("脂肪燃烧", 0 * ck, 83 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("无氧耐力", 0 * ck, 140 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("动态热身", 265 * ck, 20 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("有氧耐力", 265 * ck, 83 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   yzy.fillText("峰值锻炼", 265 * ck, 140 * ck)
    //   // yzy.font = cfont
    //   yzy.setFillStyle("#000")
    //   var opo = ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]
    //   yzy.fillText(suaax == 0 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[0] / opo * 100) + "%", 0 * ck, 35 * ck)
    //   yzy.fillText(suaax == 2 ? (100 - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[2] / opo * 100) + "%", 0 * ck, 98 * ck)
    //   yzy.fillText(suaax == 4 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[4] / opo * 100) + "%", 0 * ck, 155 * ck)
    //   yzy.fillText(suaax == 1 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[1] / opo * 100) + "%", 283 * ck, 35 * ck)
    //   yzy.fillText(suaax == 3 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[0] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[3] / opo * 100) + "%", 283 * ck, 98 * ck)
    //   yzy.fillText(suaax == 5 ? (100 - Math.floor(ydgxbox[2] / opo * 100) - Math.floor(ydgxbox[4] / opo * 100) - Math.floor(ydgxbox[1] / opo * 100) - Math.floor(ydgxbox[3] / opo * 100) - Math.floor(ydgxbox[5] / opo * 100)) + "%" : Math.floor(ydgxbox[5] / opo * 100) + "%", 283 * ck, 155 * ck)
    //   yzy.draw()
    //   //生成图片
    //   var locolurl
    //   wx.downloadFile({
    //     url: user.head,
    //     success: res => {
    //       // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //       // console.log(res)
    //       if (res.statusCode === 200) {
    //         console.log(res.tempFilePath)
    //         locolurl = res.tempFilePath//将下载下来的地址给data中的变量变量
    //       }
    //       // console.log(90)
    //       there.setData({
    //         headImg: locolurl
    //       })
    //     }, fail: res => {
    //       console.log(res);
    //     }
    //   })
    //   console.log(90)
    //   // var that = this;
    //   // 创建画布

    //   var ctx = wx.createCanvasContext('shareCanvas')
    //   // 白色背景
    //   ctx.beginPath()
    //   ctx.setFillStyle('#fff')
    //   ctx.fillRect(0, 0, 244, 434)

    //   // console.log(999)
    //   // ctx.beginPath()
    //   // 下载底部背景图
    //   wx.getImageInfo({
    //     src: there.data.sharebg,
    //     success: (res1) => {
    //       ctx.drawImage(res1.path, 0, 319, 244, 115)

    //       // 下载顶部图
    //       // ctx.beginPath()
    //       wx.getImageInfo({
    //         src: there.data.shareCoverImg,
    //         success: (res2) => {
    //           ctx.drawImage(res2.path, 0, 0, 244, 319)

    //           // 下载二维码
    //           wx.getImageInfo({
    //             src: there.data.shareQrImg,
    //             success: (res3) => {
    //               let qrImgSize = 59
    //               ctx.drawImage(res3.path, 172, 359, qrImgSize, qrImgSize)
    //               ctx.stroke()
    //               // ctx.draw(true)

    //               // 用户昵称
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(12) // 文字字号：16px
    //               ctx.fillText(there.data.oll, 22, 70)
    //               // 打卡天数
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(12) // 文字字号：16px
    //               ctx.fillText(there.data.scc, 21, 200)
    //               //天字
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(10) // 文字字号：16px
    //               var lon = String(there.data.scc).length * 15 + 21
    //               ctx.fillText('天', lon, 200)
    //               //时长
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(12) // 文字字号：16px
    //               ctx.fillText(there.data.sctime, 21, 256)
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(10) // 文字字号：16px
    //               var lon = String(there.data.sctime).length * 10 + 21
    //               ctx.fillText('分钟', lon, 256)

    //               //热量
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(12) // 文字字号：16px
    //               ctx.fillText(there.data.scccal, 88, 256)
    //               ctx.setFillStyle('#fff')  // 文字颜色：黑色
    //               ctx.setFontSize(10) // 文字字号：16px
    //               var lon = String(there.data.scccal).length * 10 + 88
    //               ctx.fillText('千卡', lon, 256)

    //               ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
    //               // console.log(there.data.otup)

    //               // 下载用户头像
    //               wx.getImageInfo({
    //                 src: there.data.headImg,
    //                 success: (res4) => {
    //                   //先画圆形，制作圆形头像(圆心x，圆心y，半径r)
    //                   ctx.arc(32, 35, 12, 0, Math.PI * 2, false)
    //                   // ctx.clip()
    //                   console.log(99)
    //                   // 绘制头像图片
    //                   let headImgSize = 24
    //                   ctx.drawImage(res4.path, 20, 23, headImgSize, headImgSize)
    //                   var ppk

    //                   if (there.data.otup.length == 0) {
    //                     ctx.draw(true)
    //                     there.setData({
    //                       oyo: false,
    //                     })
    //                   }
    //                   if (there.data.otup.length == 1) {
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ctx.draw(true)
    //                         there.setData({
    //                           oyo: false,
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 2) {
    //                     console.log(299)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ctx.draw(true)
    //                             there.setData({
    //                               oyo: false,
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 3) {
    //                     console.log(399)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ppk = (20 + 27 * 2)
    //                             wx.getImageInfo({
    //                               src: there.data.otup[2],
    //                               success: (res8) => {
    //                                 ctx.drawImage(res8.path, ppk, 275, 20, 20)
    //                                 ctx.draw(true)
    //                                 there.setData({
    //                                   oyo: false,
    //                                 })
    //                               }
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 4) {
    //                     console.log(499)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ppk = (20 + 27 * 2)
    //                             wx.getImageInfo({
    //                               src: there.data.otup[2],
    //                               success: (res8) => {
    //                                 ctx.drawImage(res8.path, ppk, 275, 20, 20)
    //                                 ppk = (20 + 27 * 3)
    //                                 wx.getImageInfo({
    //                                   src: there.data.otup[3],
    //                                   success: (res9) => {
    //                                     ctx.drawImage(res9.path, ppk, 275, 20, 20)
    //                                     ctx.draw(true)
    //                                     there.setData({
    //                                       oyo: false,
    //                                     })
    //                                   }
    //                                 })
    //                               }
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 5) {
    //                     console.log(599)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ppk = (20 + 27 * 2)
    //                             wx.getImageInfo({
    //                               src: there.data.otup[2],
    //                               success: (res8) => {
    //                                 ctx.drawImage(res8.path, ppk, 275, 20, 20)
    //                                 ppk = (20 + 27 * 3)
    //                                 wx.getImageInfo({
    //                                   src: there.data.otup[3],
    //                                   success: (res9) => {
    //                                     ctx.drawImage(res9.path, ppk, 275, 20, 20)
    //                                     ppk = (20 + 27 * 4)
    //                                     wx.getImageInfo({
    //                                       src: there.data.otup[4],
    //                                       success: (res10) => {
    //                                         ctx.drawImage(res10.path, ppk, 275, 20, 20)
    //                                         ctx.draw(true)
    //                                         there.setData({
    //                                           oyo: false,
    //                                         })
    //                                       }
    //                                     })
    //                                   }
    //                                 })
    //                               }
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 6) {
    //                     console.log(599)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ppk = (20 + 27 * 2)
    //                             wx.getImageInfo({
    //                               src: there.data.otup[2],
    //                               success: (res8) => {
    //                                 ctx.drawImage(res8.path, ppk, 275, 20, 20)
    //                                 ppk = (20 + 27 * 3)
    //                                 wx.getImageInfo({
    //                                   src: there.data.otup[3],
    //                                   success: (res9) => {
    //                                     ctx.drawImage(res9.path, ppk, 275, 20, 20)
    //                                     ppk = (20 + 27 * 4)
    //                                     wx.getImageInfo({
    //                                       src: there.data.otup[4],
    //                                       success: (res10) => {
    //                                         ctx.drawImage(res10.path, ppk, 275, 20, 20)
    //                                         ppk = (20 + 27 * 5)
    //                                         wx.getImageInfo({
    //                                           src: there.data.otup[5],
    //                                           success: (res11) => {
    //                                             ctx.drawImage(res11.path, ppk, 275, 20, 20)
    //                                             ctx.draw(true)
    //                                             there.setData({
    //                                               oyo: false,
    //                                             })
    //                                           }
    //                                         })
    //                                       }
    //                                     })
    //                                   }
    //                                 })
    //                               }
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                   if (there.data.otup.length == 7) {
    //                     console.log(599)
    //                     ppk = (20 + 27 * 0)
    //                     wx.getImageInfo({
    //                       src: there.data.otup[0],
    //                       success: (res6) => {
    //                         ctx.drawImage(res6.path, ppk, 275, 20, 20)
    //                         ppk = (20 + 27 * 1)
    //                         wx.getImageInfo({
    //                           src: there.data.otup[1],
    //                           success: (res7) => {
    //                             ctx.drawImage(res7.path, ppk, 275, 20, 20)
    //                             ppk = (20 + 27 * 2)
    //                             wx.getImageInfo({
    //                               src: there.data.otup[2],
    //                               success: (res8) => {
    //                                 ctx.drawImage(res8.path, ppk, 275, 20, 20)
    //                                 ppk = (20 + 27 * 3)
    //                                 wx.getImageInfo({
    //                                   src: there.data.otup[3],
    //                                   success: (res9) => {
    //                                     ctx.drawImage(res9.path, ppk, 275, 20, 20)
    //                                     ppk = (20 + 27 * 4)
    //                                     wx.getImageInfo({
    //                                       src: there.data.otup[4],
    //                                       success: (res10) => {
    //                                         ctx.drawImage(res10.path, ppk, 275, 20, 20)
    //                                         ppk = (20 + 27 * 5)
    //                                         wx.getImageInfo({
    //                                           src: there.data.otup[5],
    //                                           success: (res11) => {
    //                                             ctx.drawImage(res11.path, ppk, 275, 20, 20)
    //                                             ppk = (20 + 27 * 6)
    //                                             wx.getImageInfo({
    //                                               src: there.data.otup[6],
    //                                               success: (res11) => {
    //                                                 ctx.drawImage(res11.path, ppk, 275, 20, 20)
    //                                                 ctx.draw(true)
    //                                                 there.setData({
    //                                                   oyo: false,
    //                                                 })
    //                                               }
    //                                             })
    //                                           }
    //                                         })
    //                                       }
    //                                     })
    //                                   }
    //                                 })
    //                               }
    //                             })
    //                           }
    //                         })
    //                       }
    //                     })
    //                   }
    //                 }
    //               })
    //             }
    //           })
    //         }
    //       })
    //     }
    //   })

    // }
    // catch (e) {
      wx.request({
        // url: 'https://ll.linkfeeling.cn/api/fitness/detail',
        url: 'https://dev.linkfeeling.cn/api/fitness/detail',
        method: 'POST',
        data: {
          uid: us.uid,
          // uid: "7e44bc47069d2016144e175778a11359",
          user_type: us.ut,
          request_time: us.rt,
          platform: us.pt,
          tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
          login_type: "wx",
          network: us.nw,
          product_id: us.pi,
          app_version: us.av,
          bind_time: app.globalData.bindtime
          // bind_time: "1554781747050"
          // uid: us.uid,
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {

          console.log(res.data)
          if (res.data.code == 200) {
            var data = res.data.data
            console.log(data)
            there.setData({
              olo: data.head_icon,
              oll: decodeURIComponent(data.user_name),
              hadd: data.gym_name,
              daynu: data.day_num,
              add: data.address,
              eng: there.getEng(new Date(parseInt(app.globalData.bindtime))),
              end: there.geted(new Date(parseInt(app.globalData.bindtime))),
              kptime: data.statistics_data.week.curr_time_ratio + "%",
              kpcal: data.statistics_data.week.curr_calorie_ratio + "%",
            })
            if (data.statistics_data.summary.time_fav_device_all_time>0){
              there.setData({
                kboot: true,
                suptime: Math.floor(data.statistics_data.summary.time_fav_device_all_time / 60000)
              })
              if (data.statistics_data.summary.time_fav_device_name.indexOf("跑步机") > -1) {
                there.setData({
                  suptip: "跑步机"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("椭圆机") > -1) {
                there.setData({
                  suptip: "椭圆机"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("单车") > -1) {
                there.setData({
                  suptip: "单车"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("哑铃") > -1) {
                there.setData({
                  suptip: "哑铃"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("杠铃") > -1) {
                there.setData({
                  suptip: "杠铃"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("飞鸟") > -1) {
                there.setData({
                  suptip: "飞鸟"
                })
              }
              if (data.statistics_data.summary.time_fav_device_name.indexOf("hiit") > -1 || data.statistics_data.summary.time_fav_device_name.indexOf("HIIT") > -1) {
                there.setData({
                  suptip: "HIIT"
                })
              }
              if (data.statistics_data.summary.time_fav_device_rank == 1) {
                there.setData({
                  supno: "最"
                })
              }
              if (data.statistics_data.summary.time_fav_device_rank > 1) {
                there.setData({
                  supno: "第" + data.statistics_data.summary.time_fav_device_rank
                })
              }

              there.setData({
                kbbpa: Math.round(data.statistics_data.summary.time_fav_device_all_time / data.statistics_data.summary.all_device_all_time * 100)
              })
              //消耗热量
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("跑步机") > -1) {
                there.setData({
                  suptib: "跑步机"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("椭圆机") > -1) {
                there.setData({
                  suptib: "椭圆机"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("单车") > -1) {
                there.setData({
                  suptib: "动感单车"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("哑铃") > -1) {
                there.setData({
                  suptib: "哑铃"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("杠铃") > -1) {
                there.setData({
                  suptib: "杠铃"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("飞鸟") > -1) {
                there.setData({
                  suptib: "小飞鸟"
                })
              }
              if (data.statistics_data.summary.calorie_fav_device_name.indexOf("hiit") > -1 || data.statistics_data.summary.calorie_fav_device_name.indexOf("HIIT") > -1) {
                there.setData({
                  suptib: "HIIT"
                })
              }
              there.setData({
                supcal: Math.round(data.statistics_data.summary.calorie_fav_device_all_calorie),
                subno: data.statistics_data.summary.calorie_fav_device_rank,
                kbbpb: Math.round(data.statistics_data.summary.calorie_fav_device_all_calorie / data.statistics_data.summary.all_device_all_calorie * 100)
              })
            }
            

            
   

            //励志语录
            var hzarr = [
              "脸蛋是天生的，身材可不是",
              "脸蛋是天生的，身材可不是",
              "健身没有什么捷径可走",
              "觉得自己为时已晚的时候，恰恰是最早的时候",
              "生命在于运动",
              "运动是一切生命的源泉",
              "时间会证明一切，汗水从不会骗人",
              "塑造自己，过程很疼，但你最终你能收获一个更好的自己",
              "不怕千人阻挡，只怕自己投降",
              "生活不可能像你想象得那么好，但也不会像你想象得那么糟",
              "没有天生的胖子，也没有瘦不下来的胖子",
              "YEAH！脂肪正在燃烧呢！",
              "成功的路上并不拥挤，因为坚持的人不多",
              "身体健康者常年轻",
              "人生要走万里路，迈好强身第一步",
              "与其为病痛暗自垂泪，不如运动为生命添彩",
              "放弃可以找到一万个理由，坚持只需一个信念！",
              "黑发不知锻炼好，白首定悔健身迟"
            ]
            var ranin = Math.floor((Math.random() * hzarr.length))
            there.setData({
              hztit: hzarr[ranin]
            })
            data = data.items
            var sdata = JSON.parse(JSON.stringify(data));
            data.sort(function (a, b) {
              return a.b - b.b
            });
            there.setData({
              sctime: Math.round((data[data.length - 1].b - data[0].b) / 60000)
            })

            //运动曲线canvas
            var lcl = wx.createCanvasContext("ydqx");
            var ck = there.data.ck

            var cfont = 10 * ck + "px Arial"
            console.log(ck)
            lcl.beginPath();
            lcl.lineWidth = 0.5

            var cfont = 10 * ck + "px Arial"
            lcl.font = cfont
            lcl.fillStyle = 'rgba(50, 69, 96, 1)'
            

            lcl.fillText("200", 0 * ck, 10 * ck)
            lcl.fillText("175", 0 * ck, 53 * ck)
            lcl.fillText("150", 0 * ck, 96 * ck)
            lcl.fillText("125", 0 * ck, 139 * ck)
            lcl.fillText("100", 0 * ck, 182 * ck)
            lcl.fillText("75", 0 * ck, 225 * ck)
            lcl.fillText("50", 0 * ck, 268 * ck)
            lcl.stroke();

            lcl.beginPath();
            lcl.lineWidth = 0.5
            // lcl.strokeStyle='rgba(175,193,212,0.5)'
            lcl.setStrokeStyle('#AFC1D4')
            lcl.setLineDash([3 * ck, 3 * ck])
            lcl.moveTo(26 * ck, 7 * ck);
            lcl.lineTo(328 * ck, 7 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 50 * ck);
            lcl.lineTo(328 * ck, 50 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 93 * ck);
            lcl.lineTo(328 * ck, 93 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 136 * ck);
            lcl.lineTo(328 * ck, 136 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 179 * ck);
            lcl.lineTo(328 * ck, 179 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 222 * ck);
            lcl.lineTo(328 * ck, 222 * ck);
            lcl.stroke()
            lcl.beginPath();
            lcl.moveTo(26 * ck, 265 * ck);
            lcl.lineTo(328 * ck, 265 * ck);
            lcl.stroke()

            //canvas运动曲线分布图表
            // console.log(data)
            ck = there.data.ck
            console.log(ck)
            var kk = -43 / 25
            var bb = 351
            var sumddp = 26
            var lasttop = 60
            var lefttop = 26
            var ssuummdur = 0
            var arrbox = []
            var cha = 0
            var buc = {}
            buc.cal = 0
            var ftime = data[0].b
            var etime = data[data.length - 1].b
            buc.run_data = []
            //心率统计
            var run_effects = []
            var runa = 0
            var runb = 0
            var runc = 0
            var rund = 0
            var rune = 0
            var runf = 0
            console.log(data)
            var llmax = 0

            //心率区间
            var smaha = data[0].g//最小心率
            var bigha = data[0].g//最大心率
            var aveha = 0//平均心率
            console.log(data)
            //10个最大力量值
            var jjm = []
            var sumjjm = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            var sumbba = 0//跑步机距离
            var speeda = 0//跑步机速度
            var spdbga = 0//跑步机最大速度
            var spdooa = 0//跑步机速度长度
            var sumbbb = 0//椭圆机距离
            var speedb = 0//椭圆机速度
            var spdbgb = 0//椭圆机最大速度
            var spdoob = 0//椭圆机速度长度
            var sumbbc = 0//单车距离
            var speedc = 0//单车速度
            var spdbgc = 0//单车最大速度
            var spdooc = 0//单车速度长度
            for (var i = 0; i < data.length; i++) {
              smaha < parseInt(data[i].g) ? smaha = smaha : smaha = parseInt(data[i].g)
              bigha > parseInt(data[i].g) ? bigha = bigha : bigha = parseInt(data[i].g)
              aveha = aveha + parseInt(data[i].g)
              llmax < parseFloat(data[i].e) ? llmax = parseFloat(data[i].e) : llmax = llmax
              if (parseFloat(data[i].e) > 0) {
                sumjjm.push(parseFloat(data[i].e))
              }

              if (data[i].c.indexOf("跑步机") > -1) {
                if (data[i].d != '') {
                  sumbba = sumbba + parseFloat(data[i].d)
                }
                if (data[i].i != '') {
                  speeda = speeda + parseFloat(data[i].i)
                  spdbga > parseFloat(data[i].i) ? spdbga = spdbga : spdbga = parseFloat(data[i].i)
                  spdooa = spdooa + 1
                }
              }
              if (data[i].c.indexOf("椭圆机") > -1) {
                if (data[i].d != '') {
                  sumbbb = sumbbb + parseFloat(data[i].d)
                }
                if (data[i].i != '') {
                  speedb = speedb + parseFloat(data[i].i)
                  spdbgb > parseFloat(data[i].i) ? spdbgb = spdbgb : spdbgb = parseFloat(data[i].i)
                  spdoob = spdoob + 1
                }
              }
              there.setData({
                aveha: Math.round(aveha / data.length)
              })
              if (data[i].c.indexOf("单车") > -1) {
                if (data[i].d != '') {
                  sumbbc = sumbbc + parseFloat(data[i].d)
                }
                if (data[i].i != '') {
                  speedc = speedc + parseFloat(data[i].i)
                  spdbgc > parseFloat(data[i].i) ? spdbgc = spdbgc : spdbgc = parseFloat(data[i].i)
                  spdooc = spdooc + 1
                }
              }
              // if (data[i].c.indexOf("哑铃") > -1) {

              // }
              // if (data[i].c.indexOf("杠铃") > -1) {

              // }
              // if (data[i].c.indexOf("飞鸟") > -1) {

              // }
              // if (data[i].c.indexOf("hiit") > -1 || data[i].c.indexOf("HIIT") > -1) {

              // }
            }



            //强度
            var usage = 25
            if (bigha / (220 - parseInt(usage)) < 0.55) {
              there.setData({
                pvsto: "低"
              })
            }
            if (bigha / (220 - parseInt(usage)) > 0.9) {
              there.setData({
                pvsto: "高"
              })
            }
            if (bigha / (220 - parseInt(usage)) >= 0.55 && bigha / (220 - parseInt(usage)) < 0.65) {
              there.setData({
                pvsto: "低"
              })
            }
            if (bigha / (220 - parseInt(usage)) >= 0.65 && bigha / (220 - parseInt(usage)) < 0.75) {
              there.setData({
                pvsto: "中"
              })
            }
            if (bigha / (220 - parseInt(usage)) >= 0.75 && bigha / (220 - parseInt(usage)) < 0.9) {
              there.setData({
                pvsto: "高"
              })
            }

            sumjjm.sort(function (a, b) {
              return b - a
            });
            jjm = sumjjm.slice(0, 10)

            // if(llmax>0){
            //   document.getElementById("fka").style.height = (jjm[0] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkb").style.height = (jjm[1] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkc").style.height = (jjm[2] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkd").style.height = (jjm[3] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fke").style.height = (jjm[4] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkf").style.height = (jjm[5] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkg").style.height = (jjm[6] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkh").style.height = (jjm[7] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fki").style.height = (jjm[8] / llmax*17.35 + 1.4) +'rem'
            //   document.getElementById("fkj").style.height = (jjm[9] / llmax*17.35 + 1.4) +'rem'
            // }else{
            //   document.getElementById("fka").style.height = 1.4 +'rem'
            //   document.getElementById("fkb").style.height = 1.4 +'rem'
            //   document.getElementById("fkc").style.height = 1.4 +'rem'
            //   document.getElementById("fkd").style.height = 1.4 +'rem'
            //   document.getElementById("fke").style.height = 1.4 +'rem'
            //   document.getElementById("fkf").style.height = 1.4 +'rem'
            //   document.getElementById("fkg").style.height = 1.4 +'rem'
            //   document.getElementById("fkh").style.height = 1.4 +'rem'
            //   document.getElementById("fki").style.height = 1.4 +'rem'
            //   document.getElementById("fkj").style.height = 1.4 +'rem'
            // }
            var scccal = 0
            var xcc = 0
            var yqc = 0
            // console.log(data)



            for (var i = 0; i < data.length - 1; i++) {
              //总热量
              scccal = scccal + parseFloat(data[i].f)
              //本次消耗热量
              if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
                xcc = xcc + parseFloat(data[i].f)
              }
              if (data[i].c == 'hiit' || data[i].c == 'HIIT') {
                yqc = yqc + parseFloat(data[i].f)
              }
              //运动曲线
              if (data[i + 1].c == data[i].c) {
                buc.run_data.push(data[i].g)
                buc.cal = buc.cal + parseFloat(data[i].f)
                // console.log(buc)
              }
              if (data[i + 1].c != data[i].c) {
                if (i == 1) {
                  buc.c = data[i].c
                  buc.duration = data[i].b - data[cha].b
                  buc.run_data.push(data[i].g)
                  cha = i
                  arrbox.push(buc)
                  buc = {}
                  buc.run_data = []
                  buc.cal = 0
                } else {
                  buc.c = data[i].c
                  buc.duration = data[i].b - data[cha].b
                  buc.run_data.push(data[i].g)
                  cha = i
                  arrbox.push(buc)
                  buc = {}
                  buc.run_data = []
                  buc.cal = 0
                }
              }

              //心率统计
              if (data[i].a == 0) {
                if (i == 0) {
                  runa = 0
                } else {
                  runa = parseInt(runa) + parseInt(data[i].b - data[i - 1].b)
                }
              }
              if (data[i].a == 1) {
                if (i == 0) {
                  runb = 0
                } else {
                  runb = parseInt(runb) + parseInt(data[i].b - data[i - 1].b)
                }
              }
              if (data[i].a == 2) {
                if (i == 0) {
                  runc = 0
                } else {
                  runc = parseInt(runc) + parseInt(data[i].b - data[i - 1].b)
                }
              }
              if (data[i].a == 3) {
                if (i == 0) {
                  rund = 0
                } else {
                  rund = parseInt(rund) + parseInt(data[i].b - data[i - 1].b)
                }
              }
              if (data[i].a == 4) {
                if (i == 0) {
                  rune = 0
                } else {
                  rune = parseInt(rune) + parseInt(data[i].b - data[i - 1].b)
                }
              }
              if (data[i].a == 5) {
                if (i == 0) {
                  runf = 0
                } else {
                  runf = parseInt(runf) + parseInt(data[i].b - data[i - 1].b)
                }
              }
            }
            var bigl = 0
            xcc > yqc ? bigl = xcc : bigl = yqc
            console.log(scccal)
            there.setData({
              scccal: Math.round(scccal),
              xcc: Math.round(xcc),
              yqc: Math.round(yqc)
            })
            //评分
            var hzsum = 60
            var hzsa = 0 //打卡天数
            var hzsb = 0 //运动时长
            var hzsc = 0 //消耗热量
            var hzsd = 1 //运动强度
            if (there.data.daynu > 0 && there.data.daynu < 8) {
              hzsa = 1
            }
            if (there.data.daynu > 7 && there.data.daynu < 16) {
              hzsa = 3
            }
            if (there.data.daynu > 15 && there.data.daynu < 31) {
              hzsa = 5
            }
            if (there.data.daynu > 30) {
              hzsa = 10
            }
            if (there.data.sctime > 120 && there.data.sctime < 30) {
              hzsb = 1
            }
            if (there.data.sctime >= 30 && there.data.sctime < 60) {
              hzsb = 3
            }
            if (there.data.sctime >= 60 && there.data.sctime < 90) {
              hzsb = 5
            }
            if (there.data.sctime >= 90 && there.data.sctime <= 120) {
              hzsb = 10
            }
            if (there.data.scccal >= 0 && there.data.scccal < 500) {
              hzsc = 1
            }
            if (there.data.scccal >= 500 && there.data.scccal < 1000) {
              hzsc = 3
            }
            if (there.data.scccal >= 1000 && there.data.scccal < 1500) {
              hzsc = 5
            }
            if (there.data.scccal >= 1500) {
              hzsc = 10
            }
            if (there.data.pvsto == '低') {
              hzsd = 3
            }
            if (there.data.pvsto == '中') {
              hzsd = 5
            }
            if (there.data.pvsto == '高') {
              hzsd = 10
            }

            hzsum = hzsum + hzsa + hzsb + hzsc + hzsd
            there.setData({
              hscore: hzsum
            })

            //热量换算
            if (there.data.scccal >= 0 && there.data.scccal < 100) {
              //  var calarr = [
              // "一个苹果",
              // "6颗棉花糖",
              // "一杯啤酒"
              //  ]
              var calarr = [
                "一杯啤酒"
              ]
              var xnj = Math.floor((Math.random() * calarr.length))
              there.setData({
                hsatit: calarr[xnj],
                htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/beer.png',
                htimgb: '42rpx',
                htimgc: "172rpx 206rpx"
              })
            }
            if (there.data.scccal >= 100 && there.data.scccal < 300) {
              //  var calarr = [
              // "一杯肯德基大可",
              // "一份奶油蛋糕",
              // "一份小薯",
              // "一对奥尔良鸡翅",
              // "一个冰淇淋甜筒"
              //  ]
              var calarr = [
                // "一杯肯德基大可",
                // "一份奶油蛋糕",
                // "一份小薯",
                // "一对奥尔良鸡翅",
                "一个冰淇淋甜筒"
              ]
              var xnj = Math.floor((Math.random() * calarr.length))
              there.setData({
                hsatit: calarr[xnj],
                htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/icecream.png',
                htimgb: '38rpx',
                htimgc: "176rpx 206rpx"
              })
            }
            if (there.data.scccal >= 300 && there.data.scccal < 500) {
              //  var calarr = [
              // "一个巧克力牛角面包",
              // "一包乐事薯片",
              // "一个香辣鸡腿堡",
              // "一对香辣鸡翅"
              //  ]
              var calarr = [
                "一个香辣鸡腿堡"
              ]
              var xnj = Math.floor((Math.random() * calarr.length))
              there.setData({
                hsatit: calarr[xnj],
                htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/hamburger.png',
                htimgb: '40rpx',
                htimgc: "178rpx 202rpx"
              })
            }
            if (there.data.scccal >= 500 && there.data.scccal < 1000) {
              //  var calarr = [
              // "一杯星冰乐",
              // "一个芝士三明治",
              // "一块吮指鸡"
              //  ]
              var calarr = [
                "一杯星冰乐"
              ]
              var xnj = Math.floor((Math.random() * calarr.length))
              there.setData({
                hsatit: calarr[xnj],
                htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/frappuccino.png',
                htimgb: '42rpx',
                htimgc: "158rpx 230rpx"
              })
            }
            if (there.data.scccal >= 1000) {
              var calarr = [
                "一个全家桶"
              ]
              var xnj = Math.floor((Math.random() * calarr.length))
              there.setData({
                hsatit: calarr[xnj],
                htimga: 'https://img.linkfeeling.cn/wx_small/sportdatail/familyBucket.png',
                htimgb: '42rpx',
                htimgc: "188rpx 220rpx"
              })
            }


            // if(bigl>0){
            //   document.getElementById("xbb").style.width = (xcc/bigl*30.5 + 0.5) +'rem'
            //   document.getElementById("yqa").style.width = (yqc/bigl*30.5 + 0.5) +'rem'
            // }else{
            //   document.getElementById("xbb").style.width = 0.5 +'rem'
            //   document.getElementById("yqa").style.width = 0.5 +'rem'
            // }

            run_effects.push(runa)
            run_effects.push(runb)
            run_effects.push(runc)
            run_effects.push(rund)
            run_effects.push(rune)
            run_effects.push(runf)

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
            //占据时间
            // console.log(pbig / pcp)
            there.setData({
              pcp: Math.round(pbig / pcp * 100) + '%'
            })
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
            // console.log(kobb)

            there.setData({
              kobb: kobb,
              yaa: Math.round(run_effects[0] / 60000),
              ybb: Math.round(run_effects[1] / 60000),
              ycc: Math.round(run_effects[2] / 60000),
              ydd: Math.round(run_effects[3] / 60000),
              yee: Math.round(run_effects[4] / 60000),
              yff: Math.round(run_effects[5] / 60000)
            })

            // document.getElementById("yya").style.width = (run_effects[0] / pbig * 12.5 + 0.5)+'rem'
            // document.getElementById("yyb").style.width = (run_effects[1] / pbig * 12.5 + 0.5)+'rem'
            // document.getElementById("yyc").style.width = (run_effects[2] / pbig * 12.5 + 0.5)+'rem'
            // document.getElementById("yyd").style.width = (run_effects[3] / pbig * 12.5 + 0.5)+'rem'
            // document.getElementById("yye").style.width = (run_effects[4] / pbig * 12.5 + 0.5)+'rem'
            // document.getElementById("yyf").style.width = (run_effects[5] / pbig * 12.5 + 0.5)+'rem'


            buc.c = data[data.length - 1].c
            buc.duration = data[data.length - 1].b - data[cha].b
            buc.run_data.push(data[data.length - 1].g)

            arrbox.push(buc)

            data = arrbox
            console.log(data)

            var acc = 0
            var bcc = 0
            var ccc = 0
            var xcc = 0
            var ycc = 0

            //tuc【跑步机，椭圆机，单车，哑铃，杠铃，飞鸟, hiit】
            var tuc = [0, 0, 0, 0, 0, 0, 0]
            //运动时长
            var tima = 0//跑步机
            var timb = 0//椭圆机
            var timc = 0//单车
            var timd = 0//哑铃
            var time = 0//杠铃
            var timf = 0//小飞鸟
            var timg = 0//hiit
            for (var i = 0; i < data.length; i++) {
              ssuummdur = ssuummdur + data[i].duration
              //本次运动时长
              if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
                acc = acc + data[i].duration
              }
              if (data[i].c.indexOf("哑铃") > -1 || data[i].c.indexOf("杠铃") > -1 || data[i].c.indexOf("飞鸟") > -1) {
                bcc = bcc + data[i].duration
              }
              if (data[i].c == 'hiit' || data[i].c == 'HIIT') {
                ccc = ccc + data[i].duration
              }
              //运动图标
              if (data[i].c.indexOf("跑步机") > -1) {
                tuc.splice(0, 1, 1)
                tima = tima + data[i].duration
              }
              if (data[i].c.indexOf("椭圆机") > -1) {
                tuc.splice(1, 1, 1)
                timb = timb + data[i].duration
              }
              if (data[i].c.indexOf("单车") > -1) {
                tuc.splice(2, 1, 1)
                timc = timc + data[i].duration
              }
              if (data[i].c.indexOf("哑铃") > -1) {
                tuc.splice(3, 1, 1)
                timd = timd + data[i].duration
              }
              if (data[i].c.indexOf("杠铃") > -1) {
                tuc.splice(4, 1, 1)
                time = time + data[i].duration
              }
              if (data[i].c.indexOf("飞鸟") > -1) {
                tuc.splice(5, 1, 1)
                timf = timf + data[i].duration
              }
              if (data[i].c.indexOf("hiit") > -1 || data[i].c.indexOf("HIIT") > -1) {
                tuc.splice(6, 1, 1)
                timg = timg + data[i].duration
              }
            }
            //小飞鸟力量
            var tykc = 0//小飞鸟总组数
            var tymc = 0//小飞鸟总次数
            var jzmaxc = 0//小飞鸟极限重量
            for (var i = 0; i < sdata.length; i++) {
              if (parseInt(sdata[i].h) > 0) {
                tykc = tykc + 1
                tymc = tymc + parseInt(sdata[i].h)
                jzmaxc > sdata[i].e ? jzmaxc = jzmaxc : jzmaxc = sdata[i].e
              }
            }
            there.setData({
              tykc: tykc,
              jzmaxc: jzmaxc,
              tymc: Math.round(tymc/tykc)
            })
            //////////////////////////
            var arr = []
            if (tima > 30000) {
              arr.push('跑步机')
            }
            if (timb > 30000) {
              arr.push('椭圆机')
            }
            if (timc > 30000) {
              arr.push('单车')
            }
            if (timd > 30000) {
              arr.push('哑铃')
            }
            if (time > 30000) {
              arr.push('杠铃')
            }
            if (timf > 30000) {
              arr.push('小飞鸟')
            }
            if (timg > 30000) {
              arr.push('HIIT')
            }
            there.setData({
              arr: arr
            })
            // // var arr = ['跑步机','椭圆机','单车','哑铃','杠铃','小飞鸟','HIIT']
            // var wid = arr.length * 200
            // document.getElementById("pkp").style.width = wid + "px";

            // $.each(arr, function (index, item) {
            //   if (arr[index] == '跑步机') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtal"><div class="mtot">运动距离</div><div class="mtbb"><span id="sumbba"></span>&nbsp;&nbsp;km</div></div><div class="mhtam"><div class="mtot">运动时长</div><div class="mtbb"><span id="tima"></span>&nbsp;&nbsp;分钟</div></div></div><div class="mhtb"><div class="mhtal"><div class="mtot">最高配速</div><div class="mtbb"><span id="spdbga"></span>&nbsp;&nbsp;</div></div><div class="mhtam"><div class="mtot">平均配速</div><div class="mtbb"><span id="speeda"></span>&nbsp;&nbsp;</div></div><div class="mhtar"><div class="mtot">消耗热量</div><div class="mtbb"><span id="sttacal"></span>&nbsp;&nbsp;千卡</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div><div class="mhte">训练照片</div><div class="mhtf"><div></div><div></div><div></div>          </div></div>')
            //   }
            //   if (arr[index] == '椭圆机') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtal"><div class="mtot">运动距离</div><div class="mtbb"><span id="sumbbb"></span>&nbsp;&nbsp;km</div></div><div class="mhtam"><div class="mtot">运动时长</div><div class="mtbb"><span id="timb"></span>&nbsp;&nbsp;分钟</div></div></div><div class="mhtb"><div class="mhtal"><div class="mtot">最高配速</div><div class="mtbb"><span id="spdbgb"></span>&nbsp;&nbsp;</div></div><div class="mhtam"><div class="mtot">平均配速</div><div class="mtbb"><span id="speedb"></span>&nbsp;&nbsp;</div></div><div class="mhtar"><div class="mtot">消耗热量</div><div class="mtbb"><span id="sttacalb"></span>&nbsp;&nbsp;千卡</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div><div class="mhte">训练照片</div><div class="mhtf"><div></div><div></div><div></div>          </div></div>')
            //   }
            //   if (arr[index] == '单车') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtal"><div class="mtot">运动距离</div><div class="mtbb"><span id="sumbbc"></span>&nbsp;&nbsp;km</div></div><div class="mhtam"><div class="mtot">运动时长</div><div class="mtbb"><span id="timc"></span>&nbsp;&nbsp;分钟</div></div></div><div class="mhtb"><div class="mhtal"><div class="mtot">最高配速</div><div class="mtbb"><span id="spdbgc"></span>&nbsp;&nbsp;</div></div><div class="mhtam"><div class="mtot">平均配速</div><div class="mtbb"><span id="speedc"></span>&nbsp;&nbsp;</div></div><div class="mhtar"><div class="mtot">消耗热量</div><div class="mtbb"><span id="sttacalc"></span>&nbsp;&nbsp;千卡</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div><div class="mhte">训练照片</div><div class="mhtf"><div></div><div></div><div></div>          </div></div>')
            //   }
            //   if (arr[index] == '哑铃') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtamb"><div class="mtot">运动时长</div><div class="mtbb"><span id="timd">99</span>&nbsp;&nbsp;分钟</div></div></div><div class="mhta"><div class="mhtal"><div class="mtot">平均次数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;次/每组</div></div><div class="mhtam"><div class="mtot">总组数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;组</div></div><div class="mhtar"><div class="mtot">极限重量</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;KG</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div></div>')
            //   }
            //   if (arr[index] == '杠铃') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtamb"><div class="mtot">运动时长</div><div class="mtbb"><span id="time">99</span>&nbsp;&nbsp;分钟</div></div></div><div class="mhta"><div class="mhtal"><div class="mtot">平均次数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;次/每组</div></div><div class="mhtam"><div class="mtot">总组数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;组</div></div><div class="mhtar"><div class="mtot">极限重量</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;KG</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div></div>')
            //   }
            //   if (arr[index] == '小飞鸟') {
            //     var showList = $('<div class="swiper-slide"><div class="scona"><div class="mhta"><div class="mhtamb"><div class="mtot">运动时长</div><div class="mtbb"><span id="timf">99</span>&nbsp;&nbsp;分钟</div></div></div><div class="mhta"><div class="mhtal"><div class="mtot">平均次数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;次/每组</div></div><div class="mhtam"><div class="mtot">总组数</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;组</div></div><div class="mhtar"><div class="mtot">极限重量</div><div class="mtbb"><span>10</span>&nbsp;&nbsp;KG</div></div></div><div class="mhtc">教练评语</div><div class="mhtd"><div class="mhtdl"><span></span><span>张清</span></div><div class="mhtdr">今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作今天相较于上次，进步很大，动作的完成度和标 准性有了很大的提高。不错，做的很棒，继续努 力” 今天相较于上次，进步很大，动作 </div></div></div>')
            //   }
            //   if (arr[index] == 'HIIT') {
            //     var showList = $('<div class="swiper-slide"><div class="scong"><div class="mhta"><div class="mhtamg"><div class="mtot">运动时长</div><div class="mtbb"><span id="timg"></span>&nbsp;&nbsp;分钟</div></div><div class="mhtarg"><div class="mtot">消耗热量</div><div class="mtbb"><span id="sttacalg"></span>&nbsp;&nbsp;千卡</div></div></div></div></div></div>')
            //   }
            //   $("#oko").append(showList)
            // })


            // var mySwiper = new Swiper('.swiper-container', {
            //   pagination: '.my-pagination-ul',
            //   paginationClickable: true,
            //   paginationBulletRender: function (index, className) {
            //     return '<li class="' + className + '">' + arr[index] + '</li>';
            //   }
            // })





            /////////////////////
            there.setData({
              tima: Math.round(tima / 60000),
              timb: Math.round(timb / 60000),
              timc: Math.round(timc / 60000),
              timd: Math.round(timd / 60000),
              time: Math.round(time / 60000),
              timf: Math.round(timf / 60000),
              timg: Math.round(timg / 60000),
              sumbba: Math.round(sumbba * 10) / 10,
              sumbbb: Math.round(sumbbb * 10) / 10,
              sumbbc: Math.round(sumbbc * 10) / 10,
              psmbi: smaha + '-' + bigha,
              llmax: llmax,
              llpka: llmax > 0 ? llmax : '',
              llpkb: llmax > 0 ? Math.floor(parseFloat(llmax) * 5) / 10 : '',
              spdbga: Math.floor(60 / spdbga) + "'" + Math.floor((60 % spdbga) * 60 / spdbga) + '"',
              spdbgb: Math.floor(60 / spdbgb) + "'" + Math.floor((60 % spdbgb) * 60 / spdbgb) +'"',
              spdbgc: Math.floor(60 / spdbgc) + "'" + Math.floor((60 % spdbgc) * 60 / spdbgc) + '"',
              speeda: Math.floor(60 / (speeda / spdooa)) + "'" + Math.floor((60 % (speeda / spdooa) * 60 / (speeda / spdooa))) + '"',
              speedb: Math.floor(60 / (speedb / spdoob)) + "'" + Math.floor((60 % (speedb / spdoob) * 60 / (speedb / spdoob))) + '"',
              speedc: Math.floor(60 / (speedc / spdooc)) + "'" + Math.floor((60 % (speedc / spdooc) * 60 / (speedc / spdooc))) + '"',
            })
            //跑步机平均速度
            // console.log(tuc)
            // localStorage.setItem("tuc", tuc.join(''))
            //分配图标
            var ytu = [
              'https://ll.linkfeeling.cn/wx/a.png',
              'https://ll.linkfeeling.cn/wx/f.png',
              'https://ll.linkfeeling.cn/wx/d.png',
              'https://ll.linkfeeling.cn/wx/b.png',
              'https://ll.linkfeeling.cn/wx/e.png',
              'https://ll.linkfeeling.cn/wx/c.png',
              'https://ll.linkfeeling.cn/wx/g.png'
            ]
            for (var i = 0; i < tuc.length; i++) {
              if (tuc[i] > 0) {
                tuc.splice(i, 1, ytu[i])
              }
            }
            var otup = []
            for (var i = 0; i < tuc.length; i++) {
              // console.log(tuc[i].length)
              if (tuc[i].length > 5) {
                otup.push(tuc[i])
              }
            }
            var bigb
            acc > bcc ? bigb = acc : bigb = bcc
            bigb > ccc ? bigb = bigb : bigb = ccc

            there.setData({
              otup: otup,
              dodo: true
            })
            // $.each(otup, function (index, item) {
            //   var showList = $('<span style="background: url(' + otup[index] + ') center no-repeat;background-size: 4rem 4rem;"></span>')
            //   $("#oya").append(showList)
            // })

            // $.each(otup, function (index, item) {
            //   var showList = $('<span style="background: url(' + otup[index] + ') center no-repeat;background-size: 4rem 4rem;"></span>')
            //   $("#oym").append(showList)
            // })

            // $.each(otup, function (index, item) {
            //   var showList = $('<span style="background: url(' + otup[index] + ') center no-repeat;background-size: 4rem 4rem;"></span>')
            //   $("#oyb").append(showList)
            // })

            otup = otup

            // console.log(data)


            // document.getElementById("abb").style.width = (acc / bigb * 30.5 + 0.5) +'rem'
            // document.getElementById("cbb").style.width = (bcc / bigb * 30.5 + 0.5) +'rem'
            // document.getElementById("bbb").style.width = (ccc / bigb * 30.5 + 0.5) +'rem'

            there.setData({
              oloz: Math.round(there.data.pcc / there.data.sctime * 100)
            })
            // console.log(data)

            //力量图标bce
            var lltup = []
            for (var i = 0; i < otup.length; i++) {
              if (otup[i] == 'https://ll.linkfeeling.cn/wx/c.png') {
                lltup.push(otup[i])
              }
              if (otup[i] == 'https://ll.linkfeeling.cn/wx/b.png') {
                lltup.push(otup[i])
              }
              if (otup[i] == 'https://ll.linkfeeling.cn/wx/e.png') {
                lltup.push(otup[i])
              }
            }
            // console.log(otup)
            // console.log(lltup)
            // $.each(lltup, function (index, item) {
            //   var showList = $('<span style="background: url(' + lltup[index] + ') center no-repeat;background-size: 4rem 4rem;"></span>')
            //   $("#oyv").append(showList)
            // })
            // console.log(llmax)
            // there.setData({
            //   llmax: llmax,
            //   lltup: lltup,
            //   kkkmid: llmax>0?Math.floor(parseFloat(llmax)*5)/10:''
            // })

            ck = there.data.ck

            for (var i = 0; i < data.length; i++) {
              lcl.beginPath()
              lcl.lineWidth = 0.5
              if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
                lcl.fillStyle = '#FFD450'
                var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 250 * ck);
                linearGradient1.addColorStop(0, '#FFD450');
                linearGradient1.addColorStop(1, 'rgba(255,236,178,0.5)');
                lcl.fillStyle = linearGradient1;
              }
              if (data[i].c.indexOf("哑铃") > -1 || data[i].c.indexOf("杠铃") > -1 || data[i].c.indexOf("飞鸟") > -1) {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
                lcl.fillStyle = '#398EFF'
                var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 250 * ck);
                linearGradient1.addColorStop(0, '#398EFF');
                linearGradient1.addColorStop(1, 'rgba(199,223,255,0.5)');
                lcl.fillStyle = linearGradient1;
              }
              if (data[i].c == "hiit" || data[i].c == 'HIIT') {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
                lcl.fillStyle = '#FF5E7F'
                var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 250 * ck);
                linearGradient1.addColorStop(0, '#FF5E7F');
                linearGradient1.addColorStop(1, 'rgba(255,93,127,0.5)');
                lcl.fillStyle = linearGradient1;
              }
              if (data[i].c == "" || data[i].c == "rest") {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
                lcl.fillStyle = '#7E879C'
                var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 250 * ck);
                linearGradient1.addColorStop(0, '#7E879C');
                linearGradient1.addColorStop(1, 'rgba(216,221,238,0.5)');
                lcl.fillStyle = linearGradient1;
              }

              lcl.moveTo((lefttop + data[i].duration / ssuummdur * 302) * ck, (kk * data[i].run_data[data[i].run_data.length - 1] + bb) * ck)
              sumddp = sumddp + data[i].duration / ssuummdur * 302
              lcl.lineTo(sumddp * ck, 265 * ck)
              lcl.lineTo((sumddp - data[i].duration / ssuummdur * 302) * ck, 265 * ck)
              lcl.lineTo((sumddp - data[i].duration / ssuummdur * 302) * ck, (kk * lasttop + bb) * ck)
              for (var j = 0; j < data[i].run_data.length; j++) {
                if (data[i].run_data[j] < 50) {


                  lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 302 / data[i].run_data.length) * ck, (kk * 50 + bb) * ck)

                } else {
                  lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 302 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
                }
              }
              lcl.fill()
              lcl.stroke()
              lasttop = data[i].run_data[data[i].run_data.length - 1]
              lefttop = lefttop + data[i].duration / ssuummdur * 302
            }
            
            //顶部实线

            var kk = -43 / 25
            var bb = 351
            var sumddp = 26
            var lasttop = 60
            var lefttop = 26

            for (var i = 0; i < data.length; i++) {
              lcl.beginPath()
              lcl.lineWidth = 0.5 * ck
              if (data[i].c.indexOf("跑步机") > -1 || data[i].c.indexOf("椭圆机") > -1 || data[i].c.indexOf("单车") > -1) {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
              }
              if (data[i].c.indexOf("哑铃") > -1 || data[i].c.indexOf("杠铃") > -1 || data[i].c.indexOf("飞鸟") > -1) {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
              }
              if (data[i].c == "hiit" || data[i].c == 'HIIT') {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
              }
              if (data[i].c == "" || data[i].c == "rest") {
                lcl.setStrokeStyle('rgba(255,255,255,0)')
              }


              sumddp = sumddp + data[i].duration / ssuummdur * 302
              lcl.moveTo((sumddp - data[i].duration / ssuummdur * 302) * ck, (kk * lasttop + bb) * ck)
              for (var j = 0; j < data[i].run_data.length; j++) {
                if (data[i].run_data[j] < 50) {
                  lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 302 / data[i].run_data.length) * ck, (kk * 50 + bb) * ck)
                } else {
                  lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 302 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
                }
              }

              lcl.stroke()
              lasttop = data[i].run_data[data[i].run_data.length - 1]
              lefttop = lefttop + data[i].duration / ssuummdur * 302
            }
            //底部时间302
            // console.log(parseInt(ftime) + parseInt((etime - ftime) / 3))
            // console.log(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3)))
            // console.log(there.getDd(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3))))

            var kboa = there.getDd(new Date(parseInt(ftime)))
            var kbob = there.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3))))
            var kboc = there.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3 * 2))))
            var kbod = there.getDd(new Date(parseInt(etime)))
            lcl.beginPath();
            lcl.lineWidth = 0.5
            lcl.fillStyle = "rgba(50,69,96,1)"
            lcl.fillText(kboa, 26 * ck, 285 * ck)
            lcl.fillText(kbob, 118 * ck, 285 * ck)
            lcl.fillText(kboc, 210 * ck, 285 * ck)
            lcl.fillText(kbod, 302 * ck, 285 * ck)
            lcl.stroke();
            lcl.draw()

            //运动时长百分比
            var xxx = wx.createCanvasContext("ydsc");
            var ck = there.data.ck
            // ydsc.width = ydsc.width * ck;
            // ydsc.height = ydsc.height * ck;
            xxx.beginPath();
            xxx.lineWidth = 30 * ck
            xxx.setStrokeStyle('rgba(88,130,239,0.2)')
            xxx.arc(60 * ck, 70 * ck, 40 * ck, 0 * Math.PI, 2 * Math.PI)
            xxx.stroke();
            var xx = there.data.kbbpa / 100
            xxx.beginPath();
            xxx.lineWidth = 30 * ck
            xxx.setStrokeStyle('rgba(88,130,239,1)')
            xxx.arc(60 * ck, 70 * ck, 40 * ck, -0.5 * Math.PI, (xx * 2 - 0.5) * Math.PI)
            xxx.stroke();
            xxx.draw()

            //消耗热量百分比
            var yyy = wx.createCanvasContext("xhrl");
            var ck = there.data.ck
            // xhrl.width = xhrl.width * ck;
            // xhrl.height = xhrl.height * ck;
            yyy.beginPath();
            yyy.lineWidth = 30 * ck
            yyy.setStrokeStyle('rgba(239,93,112,.2)')
            yyy.arc(60 * ck, 70 * ck, 40 * ck, 0 * Math.PI, 2 * Math.PI)
            yyy.stroke();
            var yy = there.data.kbbpb / 100
            yyy.beginPath();
            yyy.lineWidth = 30 * ck
            yyy.setStrokeStyle('rgba(239,93,112,1)')
            yyy.arc(60 * ck, 70 * ck, 40 * ck, -0.5 * Math.PI, (yy * 2 - 0.5) * Math.PI)
            yyy.stroke();
            yyy.draw()

            //运动时长热量
            var stta = { "time": 0, "cal": 0, "name": "跑步机" }//跑步机
            var sttb = { "time": 0, "cal": 0, "name": "椭圆机" }//椭圆机
            var sttc = { "time": 0, "cal": 0, "name": "动感单车" }//动感单车
            var sttd = { "time": 0, "cal": 0, "name": "哑铃" }//哑铃
            var stte = { "time": 0, "cal": 0, "name": "杠铃" }//杠铃
            var sttf = { "time": 0, "cal": 0, "name": "小飞鸟" }//小飞鸟
            var sttg = { "time": 0, "cal": 0, "name": "HIIT" }//杠铃

            for (var i = 0; i < data.length; i++) {
              ssuummdur = ssuummdur + data[i].duration
              //本次运动时长
              if (data[i].c.indexOf("跑步机") > -1) {
                stta.time = stta.time + data[i].duration
                stta.cal = stta.cal + data[i].cal
              }
              if (data[i].c.indexOf("椭圆机") > -1) {
                sttb.time = sttb.time + data[i].duration
                sttb.cal = sttb.cal + data[i].cal
              }
              if (data[i].c.indexOf("单车") > -1) {
                sttc.time = sttc.time + data[i].duration
                sttc.cal = sttc.cal + data[i].cal
              }
              if (data[i].c.indexOf("哑铃") > -1) {
                sttdtime = sttd.time + data[i].duration
                sttd.cal = sttd.cal + data[i].cal
              }
              if (data[i].c.indexOf("杠铃") > -1) {
                stte.time = stte.time + data[i].duration
                stte.cal = stte.cal + data[i].cal
              }
              if (data[i].c.indexOf("飞鸟") > -1) {
                sttf.time = sttf.time + data[i].duration
                sttf.cal = sttf.cal + data[i].cal
              }
              if (data[i].c.indexOf("hiit") > -1 || data[i].c.indexOf("HIIT") > -1) {
                sttg.time = sttg.time + data[i].duration
                sttg.cal = sttg.cal + data[i].cal
              }
            }
            var sttarr = []
            if (stta.time > 30000) {
              stta.time = Math.round(stta.time / 60000)
              sttarr.push(stta)
            }
            if (sttb.time > 30000) {
              sttb.time = Math.round(sttb.time / 60000)
              sttarr.push(sttb)
            }
            if (sttc.time > 30000) {
              sttc.time = Math.round(sttc.time / 60000)
              sttarr.push(sttc)
            }
            if (sttd.time > 30000) {
              sttd.time = Math.round(sttd.time / 60000)
              sttarr.push(sttd)
            }
            if (stte.time > 30000) {
              stte.time = Math.round(stte.time / 60000)
              sttarr.push(stte)
            }
            if (sttf.time > 30000) {
              sttf.time = Math.round(sttf.time / 60000)
              sttarr.push(sttf)
            }
            if (sttg.time > 30000) {
              sttg.time = Math.round(sttg.time / 60000)
              sttarr.push(sttg)
            }

            //卡路里
            var sttarrb = []
            if (stta.cal > 0.5) {
              stta.cal = Math.round(stta.cal)
              sttarrb.push(stta)
            }
            if (sttb.cal > 0.5) {
              sttb.cal = Math.round(sttb.cal)
              sttarrb.push(sttb)
            }
            if (sttc.cal > 0.5) {
              sttc.cal = Math.round(sttc.cal)
              sttarrb.push(sttc)
            }
            if (sttd.cal > 0.5) {
              sttd.cal = Math.round(sttd.cal)
              sttarrb.push(sttd)
            }
            if (stte.cal > 0.5) {
              stte.cal = Math.round(stte.cal)
              sttarrb.push(stte)
            }
            if (sttf.cal > 0.5) {
              sttf.cal = Math.round(sttf.cal)
              sttarrb.push(sttf)
            }
            if (sttg.cal > 0.5) {
              sttg.cal = Math.round(sttg.cal)
              sttarrb.push(sttg)
            }
            // console.log(sttarr)

            //消耗热量
            there.setData({
              sttacal: Math.round(stta.cal),
              sttacalb: Math.round(sttb.cal),
              sttacalc: Math.round(sttc.cal),
              sttacalg: Math.round(sttg.cal),
              sttarr: sttarr,
              sttarrb: sttarrb
            })

            //显示||隐藏
            if (sttarr.length == 0) {
              document.getElementById("kbox").style.display = 'none'
            }
            if (sttarrb.length == 0) {
              document.getElementById("kboxb").style.display = 'none'
            }


            //运动总时长
            var pcc = 0
            for (var i = 0; i < sttarr.length; i++) {
              pcc = pcc + sttarr[i].time
            }
            
            //运动总热量
            var scyby = 0
            for (var i = 0; i < sttarrb.length; i++) {
              scyby = scyby + Math.round(sttarrb[i].cal)
            }
            there.setData({
              pcc: pcc,
              scyby: scyby
            }) 

      
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
                  ctx.fillRect(0, 0, 285, 399)
                  // 下载顶部图
                  // ctx.beginPath()
                  wx.getImageInfo({
                    src: there.data.shareCoverImg,
                    success: (res2) => {
                      ctx.drawImage(res2.path, 0, 0, 285, 399)
                      // 下载二维码
                      wx.getImageInfo({
                        src: there.data.shareQrImg,
                        success: (res3) => {
                          let qrImgSize = 59
                          ctx.drawImage(res3.path, 215, 334, qrImgSize, qrImgSize)
                          ctx.stroke()

                          // 用户昵称
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(12) // 文字字号：14px
                          ctx.fillText(there.data.oll, 65, 35)
                          //日期
                          ctx.setFillStyle('rgba(255,255,255,0.5)')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：10px
                          ctx.fillText(there.getMd(new Date(parseInt(app.globalData.bindtime))), 65, 50)
                          // 打卡天数
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(16) // 文字字号：16px
                          ctx.fillText(there.data.daynu, 21, 210)
                          //天字
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          var lon = String(there.data.daynu).length * 10 + 23
                          ctx.fillText('天', lon, 210)
                          //评分
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(36) // 文字字号：16px
                          ctx.fillText(there.data.hscore, 21, 140)
                          //时长
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(16) // 文字字号：16px
                          ctx.fillText(there.data.sctime, 221, 210)
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          var lon = String(there.data.sctime).length * 10 + 223
                          ctx.fillText('分钟', lon, 210)

                          //热量
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(16) // 文字字号：16px
                          ctx.fillText(there.data.scccal, 121, 210)
                          ctx.setFillStyle('#fff')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          var lon = String(there.data.scccal).length * 10 + 123
                          ctx.fillText('千卡', lon, 210)

                          //本次运动相当于
                          ctx.setFillStyle('rgb(50,50,50)')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          ctx.fillText('您的本次运动相当于消耗了', 35, 305)
                          ctx.setFillStyle('#000')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          ctx.fillText(there.data.hsatit, 35, 319)

                          //地址
                          ctx.setFillStyle('#000')  // 文字颜色：黑色
                          ctx.setFontSize(12) // 文字字号：16px
                          ctx.fillText(there.data.hadd, 32, 367)
                          ctx.setFillStyle('#bbb')  // 文字颜色：黑色
                          ctx.setFontSize(10) // 文字字号：16px
                          ctx.fillText(there.data.add, 32, 382)

                          // ctx.arc(72, 35, 12, 0, Math.PI * 2, false)
                          // ctx.draw(true)
                          // console.log(there.data.otup)
                          // 下载食物
                          wx.getImageInfo({
                            src: there.data.htimga,
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
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
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
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
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
                                  if (there.data.otup.length == 3) {
                                    console.log(399)
                                    ppk = (20 + 27 * 0)
                                    wx.getImageInfo({
                                      src: there.data.otup[0],
                                      success: (res6) => {
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
                                          success: (res7) => {
                                            ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 2)
                                            wx.getImageInfo({
                                              src: there.data.otup[2],
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
                                  if (there.data.otup.length == 4) {
                                    console.log(499)
                                    ppk = (20 + 27 * 0)
                                    wx.getImageInfo({
                                      src: there.data.otup[0],
                                      success: (res6) => {
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
                                          success: (res7) => {
                                            ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 2)
                                            wx.getImageInfo({
                                              src: there.data.otup[2],
                                              success: (res8) => {
                                                ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 3)
                                                wx.getImageInfo({
                                                  src: there.data.otup[3],
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
                                  if (there.data.otup.length == 5) {
                                    console.log(599)
                                    ppk = (20 + 27 * 0)
                                    wx.getImageInfo({
                                      src: there.data.otup[0],
                                      success: (res6) => {
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
                                          success: (res7) => {
                                            ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 2)
                                            wx.getImageInfo({
                                              src: there.data.otup[2],
                                              success: (res8) => {
                                                ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 3)
                                                wx.getImageInfo({
                                                  src: there.data.otup[3],
                                                  success: (res9) => {
                                                    ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 4)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[4],
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
                                  if (there.data.otup.length == 6) {
                                    console.log(599)
                                    ppk = (20 + 27 * 0)
                                    wx.getImageInfo({
                                      src: there.data.otup[0],
                                      success: (res6) => {
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
                                          success: (res7) => {
                                            ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 2)
                                            wx.getImageInfo({
                                              src: there.data.otup[2],
                                              success: (res8) => {
                                                ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 3)
                                                wx.getImageInfo({
                                                  src: there.data.otup[3],
                                                  success: (res9) => {
                                                    ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 4)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[4],
                                                      success: (res10) => {
                                                        ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 5)
                                                        wx.getImageInfo({
                                                          src: there.data.otup[5],
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
                                  if (there.data.otup.length == 7) {
                                    console.log(599)
                                    ppk = (20 + 27 * 0)
                                    wx.getImageInfo({
                                      src: there.data.otup[0],
                                      success: (res6) => {
                                        ctx.drawImage(res6.path, ppk, htto, heih, heih)
                                        ppk = (20 + 27 * 1)
                                        wx.getImageInfo({
                                          src: there.data.otup[1],
                                          success: (res7) => {
                                            ctx.drawImage(res7.path, ppk, htto, heih, heih)
                                            ppk = (20 + 27 * 2)
                                            wx.getImageInfo({
                                              src: there.data.otup[2],
                                              success: (res8) => {
                                                ctx.drawImage(res8.path, ppk, htto, heih, heih)
                                                ppk = (20 + 27 * 3)
                                                wx.getImageInfo({
                                                  src: there.data.otup[3],
                                                  success: (res9) => {
                                                    ctx.drawImage(res9.path, ppk, htto, heih, heih)
                                                    ppk = (20 + 27 * 4)
                                                    wx.getImageInfo({
                                                      src: there.data.otup[4],
                                                      success: (res10) => {
                                                        ctx.drawImage(res10.path, ppk, htto, heih, heih)
                                                        ppk = (20 + 27 * 5)
                                                        wx.getImageInfo({
                                                          src: there.data.otup[5],
                                                          success: (res11) => {
                                                            ctx.drawImage(res11.path, ppk, htto, heih, heih)
                                                            ppk = (20 + 27 * 6)
                                                            wx.getImageInfo({
                                                              src: there.data.otup[6],
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
              }
            })

            // try {
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'scccal',
            //     data: there.data.scccal
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'scc',
            //     data: there.data.scc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'sctime',
            //     data: there.data.sctime
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'olo',
            //     data: there.data.olo
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'oll',
            //     data: there.data.oll
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'pcc',
            //     data: there.data.pcc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'otup',
            //     data: there.data.otup
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'acc',
            //     data: there.data.acc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'abb',
            //     data: there.data.abb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'ccc',
            //     data: there.data.ccc
            //   })

            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'bbb',
            //     data: there.data.bbb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'bcc',
            //     data: there.data.bcc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'cbb',
            //     data: there.data.cbb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'xcc',
            //     data: there.data.xcc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'xbb',
            //     data: there.data.xbb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yqc',
            //     data: there.data.yqc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yqa',
            //     data: there.data.yqa
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'oloz',
            //     data: there.data.oloz
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'pcp',
            //     data: there.data.pcp
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'kobb',
            //     data: there.data.kobb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yaa',
            //     data: there.data.yaa
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yya',
            //     data: there.data.yya
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yyb',
            //     data: there.data.yyb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'ybb',
            //     data: there.data.ybb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yyb',
            //     data: there.data.yyb
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'ycc',
            //     data: there.data.ycc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yyc',
            //     data: there.data.yyc
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'ydd',
            //     data: there.data.ydd
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yyd',
            //     data: there.data.yyd
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yee',
            //     data: there.data.yee
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yye',
            //     data: there.data.yye
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yff',
            //     data: there.data.yff
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'yyf',
            //     data: there.data.yyf
            //   })
            //   wx.setStorage({
            //     key: app.globalData.bindtime + 'ck',
            //     data: there.data.ck
            //   })
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
            // } catch (e) {
            //   console.log("缓存失败")
            // }
          }

        }
      })
    // }
  }
})
