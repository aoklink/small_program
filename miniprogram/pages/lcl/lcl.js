var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var ringChart = null;
Page({
  data: {
    wda: 200,
    wdb: 300,
    sptime: 78,
    spgong: '脂肪燃烧',
    scrollindex: 0,  //当前页面的索引值
    totalnum: 5,  //总共页面数
    starty: 0,  //开始的位置x
    endy: 0, //结束的位置y
    critical: 100, //触发翻页的临界值
    margintop: 0,  //滑动下拉距离
  },
  onLoad: function () {
    let rpx = 1;
    wx.getSystemInfo({
      success(res) {
        rpx = res.windowWidth / 375;
      },
    })
  },
  onReady: function () {
    let rpx = 1;
    wx.getSystemInfo({
      success(res) {
        rpx = res.windowWidth / 375;
      },
    })
    var windowWidth = 320 * rpx;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    ringChart = new wxCharts({
      animation: true,
      canvasId: 'ringCanvas',
      type: 'ring',
      extra: {
        ringWidth: 40 * rpx,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: '',
        color: '#7cb5ec',
        fontSize: 25 * rpx
      },
      subtitle: {
        name: '',
        color: '#666666',
        fontSize: 15 * rpx
      },
      series: [{
        name: '动态热身',
        data: 50,
        stroke: false,
        color: '#5A93FF'
      }, {
        name: '有氧耐力',
        data: 50,
        stroke: false,
        color: '#72D6FF'
      }, {
        name: '峰值锻炼',
        data: 50,
        stroke: false,
        color: '#47F4B4'
      }, {
        name: '无氧耐力',
        data: 50,
        stroke: false,
        color: '#FFAD2A'
      }, {
        name: '脂肪燃烧',
        data: 50,
        stroke: false,
        color: '#FFA271'
      }, {
        name: '激活放松',
        data: 50,
        stroke: false,
        color: '#FF7F65'
      },],
      disablePieStroke: true,
      width: windowWidth,
      height: 180 * rpx,
      dataLabel: false,
      legend: false,
      background: '#fff',
      padding: 0
    });
    ringChart.addEventListener('renderComplete', () => {
      console.log('renderComplete');
    });
    setTimeout(() => {
      ringChart.stopAnimation();
    }, 500);
    const yzy = wx.createCanvasContext('cana')
    yzy.moveTo(0, 50 * rpx)
    yzy.lineTo(105 * rpx, 50 * rpx)
    yzy.arc(108 * rpx, 50 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#FF7F65')
    yzy.fill('#FF7F65')
    yzy.arc(108 * rpx, 50 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FF7F65')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(0, 115 * rpx)
    yzy.lineTo(70 * rpx, 115 * rpx)
    yzy.arc(73 * rpx, 115 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#FF7F65')
    yzy.fill('#FF7F65')
    yzy.arc(73 * rpx, 115 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FF7F65')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(0, 180 * rpx)
    yzy.lineTo(105 * rpx, 180 * rpx)
    yzy.arc(108 * rpx, 180 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#FFAD2A')
    yzy.fill('#FFAD2A')
    yzy.arc(108 * rpx, 180 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FFAD2A')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305 * rpx, 50 * rpx)
    yzy.lineTo(200 * rpx, 50 * rpx)
    yzy.arc(197 * rpx, 50 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#5A93FF')
    yzy.fill('#5A93FF')
    yzy.arc(197 * rpx, 50 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#5A93FF')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305 * rpx, 115 * rpx)
    yzy.lineTo(235 * rpx, 115 * rpx)
    yzy.arc(232 * rpx, 115 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#72D6FF')
    yzy.fill('#72D6FF')
    yzy.arc(232 * rpx, 115 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#72D6FF')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305 * rpx, 180 * rpx)
    yzy.lineTo(200 * rpx, 180 * rpx)
    yzy.arc(197 * rpx, 180 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setFillStyle('#47F4B4')
    yzy.fill('#47F4B4')
    yzy.arc(197 * rpx, 180 * rpx, 3 * rpx, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#47F4B4')
    yzy.stroke()
    yzy.beginPath()
    yzy.setFontSize(14 * rpx)
    yzy.setFillStyle('#000')
    yzy.fill('#000')
    yzy.setStrokeStyle('#000')
    yzy.fillText('激活放松', 0, 25 * rpx)
    yzy.fillText('脂肪燃烧', 0, 90 * rpx)
    yzy.fillText('无氧耐力', 0, 155 * rpx)
    yzy.fillText('动态热身', 250 * rpx, 25 * rpx)
    yzy.fillText('有氧耐力', 250 * rpx, 90 * rpx)
    yzy.fillText('峰值锻炼', 250 * rpx, 155 * rpx)
    yzy.fillText('10%', 0, 45 * rpx)
    yzy.fillText('10%', 0, 110 * rpx)
    yzy.fillText('10%', 0, 175 * rpx)
    yzy.fillText('10%', 275 * rpx, 45 * rpx)
    yzy.fillText('10%', 275 * rpx, 110 * rpx)
    yzy.fillText('10%', 275 * rpx, 175 * rpx)
    yzy.draw()
    // lcl图表
    const lcl = wx.createCanvasContext('yzy')
    let data = [{ x: 20, y: 20 }, { x: 21, y: 220 }, { x: 22, y: 120 }, { x: 23, y: 20 }, { x: 24, y: 220 }, { x: 25, y: 120 }, { x: 26, y: 20 }, { x: 27, y: 220 }, { x: 28, y: 120 }, { x: 29, y: 20 }, { x: 30, y: 220 }, { x: 31, y: 120 }, { x: 32, y: 20 }, { x: 33, y: 220 }, { x: 34, y: 120 }, { x: 35, y: 20 }, { x: 36, y: 220 }, { x: 37, y: 120 }, { x: 38, y: 20 }, { x: 39, y: 220 }, { x: 40, y: 120 }, { x: 41, y: 20 }, { x: 42, y: 220 }, { x: 43, y: 120 }, { x: 44, y: 20 }, { x: 45, y: 220 }, { x: 46, y: 120 }]
    lcl.beginPath()
    lcl.lineWidth = 0.5 * rpx
    console.log(data[data.length - 1].x)
    lcl.moveTo(data[data.length - 1].x * rpx, data[data.length - 1].y * rpx)
    lcl.lineTo(data[data.length - 1].x * rpx, 300 * rpx)
    lcl.lineTo(data[0].x * rpx, 300 * rpx)
    lcl.lineTo(data[0].x * rpx, data[0].y * rpx)
    // lcl.stroke()
    // lcl.beginPath() 
    lcl.lineWidth = 0.5 * rpx
    lcl.moveTo(data[0].x * rpx, data[0].y * rpx)
    lcl.lineTo(data[0].x * rpx, data[0].y * rpx)
    for (var i = 0; i < data.length ; i++){
      // lcl.lineTo(data[i].x * rpx, data[i].y * rpx)
      lcl.lineTo(data[i].x * rpx, Math.round(50 * Math.random()))
    }
    lcl.lineTo(data[data.length - 1].x * rpx, data[data.length - 1].y * rpx)
    lcl.setStrokeStyle('yellow')
    lcl.setFillStyle('yellow')
    lcl.fill('yellow')
    lcl.stroke()
    lcl.draw()
  },
  scrollTouchstart: function (e) {
    let py = e.touches[0].pageY;
    this.setData({
      starty: py
    })
  },
  scrollTouchmove: function (e) {
    let py = e.touches[0].pageY;
    let d = this.data;
    this.setData({
      endy: py,
    })
    if (py - d.starty < 100 && py - d.starty > -100) {
      this.setData({
        margintop: py - d.starty
      })
    }
  },
  scrollTouchend: function (e) {
    let d = this.data;
    if (d.endy - d.starty > 100 && d.scrollindex > 0) {
      this.setData({
        scrollindex: d.scrollindex - 1
      })
    } else if (d.endy - d.starty < -100 && d.scrollindex < this.data.totalnum - 1) {
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
})
