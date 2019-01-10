var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var ringChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wda: 200,
    wdb: 300,
    sptime: 78,
    spgong: '脂肪燃烧'
  },
  touchHandler: function (e) {
    console.log(ringChart.getCurrentDataIndex(e));
  },
  updateData: function () {
    ringChart.updateData({
      title: {
        name: ''
      },
      subtitle: {
        color: '#ff0000'
      }
    });
  },    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var windowWidth = 320;
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
        ringWidth: 40,
        pie: {
          offsetAngle: -90
        }
      },
      title: {
        name: '',
        color: '#7cb5ec',
        fontSize: 25
      },
      subtitle: {
        name: '',
        color: '#666666',
        fontSize: 15
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
      height: 180,
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
    yzy.moveTo(0, 50)
    yzy.lineTo(105, 50)
    yzy.arc(108, 50, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#FF7F65')
    yzy.fill('#FF7F65')
    yzy.arc(108, 50, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FF7F65')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(0, 115)
    yzy.lineTo(70, 115)
    yzy.arc(73, 115, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#FF7F65')
    yzy.fill('#FF7F65')
    yzy.arc(73, 115, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FF7F65')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(0, 180)
    yzy.lineTo(105, 180)
    yzy.arc(108, 180, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#FFAD2A')
    yzy.fill('#FFAD2A')
    yzy.arc(108, 180, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#FFAD2A')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305, 50)
    yzy.lineTo(200, 50)
    yzy.arc(197, 50, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#5A93FF')
    yzy.fill('#5A93FF')
    yzy.arc(197, 50, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#5A93FF')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305, 115)
    yzy.lineTo(235, 115)
    yzy.arc(232, 115, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#72D6FF')
    yzy.fill('#72D6FF')
    yzy.arc(232, 115, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#72D6FF')
    yzy.stroke()
    yzy.beginPath()
    yzy.moveTo(305, 180)
    yzy.lineTo(200, 180)
    yzy.arc(197, 180, 3, 0, 2 * Math.PI)
    yzy.setFillStyle('#47F4B4')
    yzy.fill('#47F4B4')
    yzy.arc(197, 180, 3, 0, 2 * Math.PI)
    yzy.setStrokeStyle('#47F4B4')
    yzy.stroke()
    yzy.beginPath()
    yzy.setFontSize(14)
    yzy.setFillStyle('#000')
    yzy.fill('#000')
    yzy.setStrokeStyle('#000')
    yzy.fillText('激活放松', 0, 25)
    yzy.fillText('脂肪燃烧', 0, 90)
    yzy.fillText('无氧耐力', 0, 155)
    yzy.fillText('动态热身', 250, 25)
    yzy.fillText('有氧耐力', 250, 90)
    yzy.fillText('峰值锻炼', 250, 155)
    yzy.fillText('10%', 0, 45)
    yzy.fillText('10%', 0, 110)
    yzy.fillText('10%', 0, 175)
    yzy.fillText('10%', 275, 45)
    yzy.fillText('10%', 275, 110)
    yzy.fillText('10%', 275, 175)
    yzy.draw()
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