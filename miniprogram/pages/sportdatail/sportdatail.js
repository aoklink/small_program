var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollindex: 0,  //当前页面的索引值
    totalnum: 6,  //总共页面数
    starty: 0,  //开始的位置x
    endy: 0, //结束的位置y
    critical: 80, //触发翻页的临界值
    margintop: 0,  //滑动下拉距离
    fontFamily: 'DINAlternate-Bold',
    ck: 1,
    tot: true
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
  bttg: function () {
    this.setData({
      tot: true
    })
    wx.navigateTo({
      url: '../test/test',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
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
    // wx.request({
    //   url: 'https://ll.linkfeeling.cn/api/user/account_info',
    //   method: 'POST',
    //   data: {
    //     uid: us.uid,
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
    //     console.log(res.data)
    //     if (res.data.code == 200) {
    //       that.setData({
    //         name: res.data.data.name,
    //         head_icon: res.data.data.head_icon,
    //       })
    //     }
    //   }
    // })
  },
  onReady: function() {
    var that = this
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/fitness/detail',
      method: 'POST',
      data: {
        uid: us.uid,
        // uid: "e50c0b2cbea000118c7c2fb63d49d542",
        user_type: us.ut,
        request_time: us.rt,
        platform: us.pt,
        tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        login_type: "wx",
        network: us.nw,
        product_id: us.pi,
        app_version: us.av,
        date_time: app.globalData.bindtime
      },
      // data: {
      //   uid: 'e50c0b2cbea000118c7c2fb63d49d542',
      //   date_time: "1552978917000",
      //   user_type: us.ut,
      //   request_time: us.rt,
      //   platform: us.pt,
      //   tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
      //   login_type: "wx",
      //   network: us.nw,
      //   product_id: us.pi,
      //   app_version: us.av
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {

        console.log(res.data)
        if (res.data.code == 200) {
          let rpx
          //获取屏幕宽度，获取自适应单位
          wx.getSystemInfo({
            success: function (res) {
              rpx = res.windowWidth / 375;
              that.setData({
                ck: res.windowWidth / 375
              })
              console.log(rpx)
            },
          })

          var data = res.data.data
          console.log(data)
          that.setData({
            olo: data.head_icon,
            oll: data.user_name,
            scc: data.day_num
          })
          us.gan = data.day_num
          data = data.items
          // console.log((data[data.length - 1].server_time - data[0].server_time) / 60000)
          that.setData({
            sctime: Math.ceil((data[data.length - 1].server_time - data[0].server_time)/60000)
          })
          us.gana = Math.ceil((data[data.length - 1].server_time - data[0].server_time) / 60000)
          //运动曲线canvas
          const lcl = wx.createCanvasContext('ydqx')
          var ck = that.data.ck

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

          //canvas运动曲线分布图表
          console.log(data)
          ck = that.data.ck
          console.log(ck)
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
          var scccal = 0
          var xcc = 0
          var yqc = 0
          for (var i = 0; i < data.length-1; i++){
            //总热量
            scccal = scccal + parseFloat(data[i].kc)
            //本次消耗热量
            if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1) {
              xcc = xcc + parseFloat(data[i].kc)
            }
            if (data[i].device_name == 'hiit') {
              yqc = yqc + parseFloat(data[i].kc)
            }
            //运动曲线
            if (data[i + 1].device_name == data[i].device_name) {
              buc.run_data.push(data[i].heart_rate)
              // console.log(buc)
            }
            if (data[i + 1].device_name != data[i].device_name){
              if(i==1){
                buc.device_name = data[i].device_name
                buc.duration = data[i].server_time - data[cha].server_time
                buc.run_data.push(data[i].heart_rate)
                cha = i 
                arrbox.push(buc)
                buc = {}
                buc.run_data = []
              }else{
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
            if (data[i].result == 0){
              if(i==0){
                runa = 0
              }else{
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
          xcc>yqc?bigl=xcc:bigl=yqc
          console.log(scccal)
          that.setData({
            scccal: Math.ceil(scccal),
            xcc: Math.ceil(xcc),
            yqc: Math.ceil(yqc),
            xbb: xcc/bigl*610 + 10,
            yqa: yqc/bigl*610 + 10
          })
          us.ganb = Math.ceil(scccal)
          run_effects.push(runa)
          run_effects.push(runb)
          run_effects.push(runc)
          run_effects.push(rund)
          run_effects.push(rune)
          run_effects.push(runf)
          // run_effects.splice(data[data.length - 1].result, 1, (run_effects[data[data.length - 1].result] + parseInt(data[data.length - 1].server_time)))
          console.log(run_effects)
          //心率功效时间排序
          var zyx = JSON.parse(JSON.stringify(run_effects));
          zyx.sort(function (a, b) {
            return b - a;
          });
          var pcp = 0
          for(var p=0;p<run_effects.length;p++){
            pcp = pcp + run_effects[p]
          }
          console.log(zyx)
          var pbig = zyx[0]
          var nob = 0
          var kobb
          //主要集中在
          for (var p = 0; p < run_effects.length; p++){
            if(pbig == run_effects[p]){
              nob = p
            }
          }
          if(nob == 0){
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
          console.log(run_effects[2])
          that.setData({
            pcp: Math.ceil(pcp/60000),
            kobb: kobb,
            yaa: Math.ceil(run_effects[0] / 60000),
            ybb: Math.ceil(run_effects[1] / 60000),
            ycc: Math.ceil(run_effects[2] / 60000),
            ydd: Math.ceil(run_effects[3] / 60000),
            yee: Math.ceil(run_effects[4] / 60000),
            yff: Math.ceil(run_effects[5] / 60000),
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
          console.log(data)

          var acc = 0 
          var bcc = 0 
          var ccc = 0 
          var xcc = 0
          var ycc = 0
 
          //tuc【跑步机，椭圆机，单车，哑铃，杠铃，飞鸟】
          var tuc = [0,0,0,0,0,0]
          for (var i = 0; i < data.length; i++) {
            ssuummdur = ssuummdur + data[i].duration
            //本次运动时长
            if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1){
              acc = acc + data[i].duration
            }
            if (data[i].device_name.indexOf("哑铃") > -1 || data[i].device_name.indexOf("杠铃") > -1 || data[i].device_name.indexOf("飞鸟") > -1) {
              bcc = bcc + data[i].duration
            }
            if (data[i].device_name == 'hiit') {
              ccc = ccc + data[i].duration
            }
            //运动图标
            if (data[i].device_name.indexOf("跑步机") > -1){
              tuc.splice(0,1,1)
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
          console.log(tuc)
          //分配图标
          var ytu = [
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/a.png',
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/f.png',
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/d.png',
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/b.png',
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/e.png',
            'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/sportdatail/c.png'
          ]
          for(var i=0;i<tuc.length;i++){
            if(tuc[i]>0){
              tuc.splice(i,1,ytu[i])
            }
          }
          var otup = []
          for(var i=0;i<tuc.length;i++){
            console.log(tuc[i].length)
            if(tuc[i].length>5){
              otup.push(tuc[i])
            }
          }
          var bigb
          acc > bcc ? bigb=acc:bigb=bcc
          bigb>ccc?bigb=bigb:bigb=ccc
          us.otup = otup
          // console.log(otup)
          that.setData({
            otup: otup,
            acc: Math.ceil(acc/60000),
            bcc: Math.ceil(bcc/60000),
            ccc: Math.ceil(ccc/60000),
            pcc: Math.ceil(acc / 60000) + Math.ceil(bcc / 60000) + Math.ceil(ccc / 60000),
            abb: acc / bigb * 610 + 10,
            bbb: bcc / bigb * 610 + 10,
            cbb: ccc / bigb * 610 + 10
          })
          that.setData({
            oloz: Math.floor(that.data.pcc / that.data.sctime *100)
          })
          for (var i = 0; i < data.length; i++) {
            lcl.beginPath()
            lcl.lineWidth = 0.5 
            if (data[i].device_name.indexOf("跑步机") > -1 || data[i].device_name.indexOf("椭圆机") > -1 || data[i].device_name.indexOf("单车") > -1){
              lcl.strokeStyle = 'rgba(255,255,255,0)'
              lcl.fillStyle = '#FFD450'
              var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
              linearGradient1.addColorStop(0, '#FFD450');
              linearGradient1.addColorStop(1, 'rgba(255,236,178,0.2)');
              lcl.fillStyle = linearGradient1;
            }
            if (data[i].device_name.indexOf("哑铃") > -1 || data[i].device_name.indexOf("杠铃") > -1 || data[i].device_name.indexOf("飞鸟") > -1) {
              lcl.strokeStyle = 'rgba(255,255,255,0)'
              lcl.fillStyle = '#398EFF'
              var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
              linearGradient1.addColorStop(0, '#398EFF');
              linearGradient1.addColorStop(1, 'rgba(199,223,255,0.2)');
              lcl.fillStyle = linearGradient1;
            }
            if (data[i].device_name == "hiit") {
              lcl.strokeStyle = 'rgba(255,255,255,0)'
              lcl.fillStyle = '#FF5E7F'
              var linearGradient1 = lcl.createLinearGradient(0, 0, 0, 300 * ck);
              linearGradient1.addColorStop(0, '#FF5E7F');
              linearGradient1.addColorStop(1, 'rgba(255,93,127,0.2)');
              lcl.fillStyle = linearGradient1;
            }
            if (data[i].device_name == "") {
              lcl.strokeStyle = 'rgba(255,255,255,0)'
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
              if (data[i].run_data[j]<45){
                
              
              lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
              // console.log(kk * data[i].run_data[j] + bb)
              }else{
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
              lcl.strokeStyle = '#FFD450'
            }
            if (data[i].device_name == "力量") {
              lcl.strokeStyle = '#398EFF'
            }
            if (data[i].device_name == "hiit") {
              lcl.strokeStyle = '#FF5E7F'
            }
            if (data[i].device_name == "") {
              lcl.strokeStyle = '#7E879C'
            }

            // lcl.lineWidth = 0.5

            sumddp = sumddp + data[i].duration / ssuummdur * 274
            lcl.moveTo((sumddp - data[i].duration / ssuummdur * 274) * ck, (kk * lasttop + bb) * ck)
            for (var j = 0; j < data[i].run_data.length; j++) {
              if (data[i].run_data[j] < 45) {
                lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * 45 + bb) * ck)
              }else{
                lcl.lineTo((lefttop + (j + 1) * data[i].duration / ssuummdur * 274 / data[i].run_data.length) * ck, (kk * data[i].run_data[j] + bb) * ck)
              }
            }

            lcl.stroke()
            lasttop = data[i].run_data[data[i].run_data.length - 1]
            lefttop = lefttop + data[i].duration / ssuummdur * 274
          }
          //底部时间
          console.log(parseInt(ftime) + parseInt((etime - ftime)/3))
          console.log(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3)))
          console.log(that.getDd(new Date(parseInt(ftime) + parseInt((etime - ftime) / 3))))

          var kboa = that.getDd(new Date(parseInt(ftime)))
          var kbob = that.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3))))
          var kboc = that.getDd(new Date(parseInt(parseInt(ftime) + parseInt((etime - ftime) / 3 * 2))))
          var kbod = that.getDd(new Date(parseInt(etime)))
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
          console.log(that.data.ck)
          var ck = that.data.ck

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
          console.log(zybox)
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
          console.log(cfont)
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
        }
      }
    })
  }
})
