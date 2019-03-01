Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollindex: 0,  //当前页面的索引值
    totalnum: 4,  //总共页面数
    starty: 0,  //开始的位置x
    endy: 0, //结束的位置y
    critical: 80, //触发翻页的临界值
    margintop: 0,  //滑动下拉距离
    fontFamily: 'DINAlternate-Bold',
    ck: 1,

  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    console.log(py);
    this.setData({
      starty: py
    })
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
  onLoad: function() {
    wx.showShareMenu({
      withShareTicket: true
    })
    var that = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://www.linkfeeling.cn/platform/font/DIN 1451 Std Engschrift.TTF")',
      success(res) {
        console.log(res.status)
      }
    })
    
  },
  onReady: function() {
    var that = this
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/fitness/bracelet',
      method: 'POST',
      data: {
        // uid: us.uid,
        // user_type: us.ut,
        // request_time: us.rt,
        // platform: us.pt,
        // tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        // login_type: "wx",
        // network: us.nw,
        // product_id: us.pi,
        // app_version: us.av
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {

        console.log(res.data)
        if (res.data.code == 200) {

          var res
          res = { "code": "200", "msg": "ok", "data": { "day_num": "1", "total_time": "12000000", "total_time_img": "http://img.linkfeeling.cn/total_time.png", "total_calorie": "900", "total_calorie_img": "http://img.linkfeeing.cn/total_calorie.png", "gym_name": "领客菲力", "site": "杭州市滨江区东方通信科技园", "categories_imgs": [{ "category_name": "有氧运动", "imgs": ["http://ll.linkfeeling.cn/img/or.png", "http://ll.linkfeeling.cn/img/or.png", "http://ll.linkfeeling.cn/img/or.png"], "chart_from_color": "#ABCDEF", "chart_to_color": "#ABCDEF" }, { "category_name": "HIIT", "chart_from_color": "#ABCDEF", "chart_to_color": "#ABCDEF", "imgs": [] }], "categories_data": [{ "start_time": "1546672649000", "end_time": "1546701449133", "category_name": "有氧运动", "duration": 2000000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 72, "extra": "" }, { "effect": 0, "calorie": 5, "heart_rate": 122, "extra": "" }, { "effect": 0, "calorie": 5, "heart_rate": 142, "extra": "" }] }, { "start_time": "1546683360000", "end_time": "1546683560000", "category_name": "力量", "duration": 200000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 96, "extra": { "field_name": "power", "field_value": 100 } }, { "effect": 0, "calorie": 5, "heart_rate": 182, "extra": { "field_name": "power", "field_value": 120 } }, { "effect": 0, "calorie": 5, "heart_rate": 82, "extra": { "field_name": "power", "field_value": 80 } }] }, { "start_time": "1546701449133", "end_time": "1546701449133", "category_name": "空闲", "duration": 4000000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 92, "extra": { "field_name": "power", "field_value": 100 } }, { "effect": 0, "calorie": 5, "heart_rate": 72, "extra": { "field_name": "power", "field_value": 100 } }, { "effect": 0, "calorie": 5, "heart_rate": 132, "extra": { "field_name": "power", "field_value": 100 } }] }, { "start_time": "1546701449133", "end_time": "1546701449133", "category_name": "有氧运动", "duration": 2000000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 152, "extra": "" }, { "effect": 0, "calorie": 5, "heart_rate": 192, "extra": "" }, { "effect": 0, "calorie": 5, "heart_rate": 132, "extra": "" }] }, { "start_time": "1546683860000", "end_time": "1546684160000", "category_name": "力量", "duration": 300000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 96, "extra": { "field_name": "power", "field_value": 30 } }, { "effect": 0, "calorie": 5, "heart_rate": 182, "extra": { "field_name": "power", "field_value": 120 } }, { "effect": 0, "calorie": 5, "heart_rate": 82, "extra": { "field_name": "power", "field_value": 80 } }] }, { "start_time": "1546701449133", "end_time": "1546683449000", "category_name": "HIIT", "duration": 2000000, "run_data": [{ "effect": 0, "calorie": 5, "heart_rate": 112 }, { "effect": 0, "calorie": 5, "heart_rate": 62 }, { "effect": 0, "calorie": 5, "heart_rate": 72 }] }], "run_effects": [{ "effect": 0, "name": "激活放松", "time": 200000 }, { "effect": 1, "name": "动态热身", "time": 400000 }, { "effect": 2, "name": "脂肪燃烧", "time": 100000 }, { "effect": 3, "name": "有氧耐力", "time": 400000 }, { "effect": 4, "name": "无氧耐力", "time": 300000 }, { "effect": 5, "name": "峰值锻炼", "time": 300000 }] } }
          var data
          data = res.data.run_effects
          console.log(data)
          let rpx
          //获取屏幕宽度，获取自适应单位
          wx.getSystemInfo({
            success: function (res) {
              rpx = res.windowWidth / 375;
              that.setData({
                ck: res.windowWidth / 375
              })
            },
          })
          const yzy = wx.createCanvasContext('xlgx')
          console.log(that.data.ck)
          var ck = that.data.ck

          // console.log(yzy.width)
          // yzy.width = yzy.width * ck
          // yzy.height = yzy.height * ck
          var x1, x2, x3, x4, x5
          var a1, a2, a3, a4, a5, a6


          var ydgxbox = [0, 0, 0, 0, 0, 0]
          for (var i = 0; i < data.length; i++) {
            ydgxbox.splice(data[i].effect, 1, data[i].time)
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
          console.log(x1 + 'pp' + x2)

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
          yzy.fillText(Math.floor(ydgxbox[0] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 0 * ck, 35 * ck)
          // yzy.font = cfont
          yzy.setFillStyle("#000")
          yzy.fillText(Math.floor(ydgxbox[2] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 0 * ck, 98 * ck)
          // yzy.font = cfont
          yzy.setFillStyle("#000")
          yzy.fillText(Math.floor(ydgxbox[4] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 0 * ck, 155 * ck)
          // yzy.font = cfont
          yzy.setFillStyle("#000")
          yzy.fillText(Math.floor(ydgxbox[1] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 283 * ck, 35 * ck)
          // yzy.font = cfont
          yzy.setFillStyle("#000")
          yzy.fillText(Math.floor(ydgxbox[3] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 283 * ck, 98 * ck)
          // yzy.font = cfont
          yzy.setFillStyle("#000")
          yzy.fillText(Math.floor(ydgxbox[5] / (ydgxbox[0] + ydgxbox[1] + ydgxbox[3] + ydgxbox[2] + ydgxbox[4] + ydgxbox[5]) * 100) + "%", 283 * ck, 155 * ck)
          yzy.draw()
        }
      }
    })
  }
})
