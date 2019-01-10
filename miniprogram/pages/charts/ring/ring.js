var wxCharts = require('../../../utils/wxcharts.js');
var app = getApp();
var ringChart = null;
Page({
    data: {
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
    onReady: function (e) {
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
            height: 200,
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
      yzy.moveTo(10, 55)
      yzy.lineTo(90, 55)      
      yzy.arc(95, 55, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#FF7F65')
      yzy.fill('#FF7F65')
      yzy.arc(95, 55, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#FF7F65')
      yzy.stroke()
      yzy.beginPath()
      yzy.moveTo(10, 125)
      yzy.lineTo(90, 125)
      yzy.arc(95, 125, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#FF7F65')
      yzy.fill('#FF7F65')
      yzy.arc(95, 125, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#FF7F65')
      yzy.stroke()
      yzy.beginPath()
      yzy.moveTo(10, 195)
      yzy.lineTo(90, 195)
      yzy.arc(95, 195, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#FFAD2A')
      yzy.fill('#FFAD2A')
      yzy.arc(95, 195, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#FFAD2A')
      yzy.stroke()
      yzy.beginPath()
      yzy.moveTo(365, 55)
      yzy.lineTo(285, 55)
      yzy.arc(280, 55, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#5A93FF')
      yzy.fill('#5A93FF')
      yzy.arc(280, 55, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#5A93FF')
      yzy.stroke()
      yzy.beginPath()
      yzy.moveTo(365, 125)
      yzy.lineTo(285, 125)
      yzy.arc(280, 125, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#72D6FF')
      yzy.fill('#72D6FF')
      yzy.arc(280, 125, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#72D6FF')
      yzy.stroke()
      yzy.beginPath()
      yzy.moveTo(365, 195)
      yzy.lineTo(285, 195)
      yzy.arc(280, 195, 3, 0, 2 * Math.PI)
      yzy.setFillStyle('#47F4B4')
      yzy.fill('#47F4B4')
      yzy.arc(280, 195, 3, 0, 2 * Math.PI)
      yzy.setStrokeStyle('#47F4B4')
      yzy.stroke()
      yzy.beginPath()
      yzy.setFontSize(14)
      yzy.setFillStyle('#000')
      yzy.fill('#000')
      yzy.setStrokeStyle('#000')
      yzy.fillText('激活放松', 10, 30)
      yzy.fillText('脂肪燃烧', 10, 98)
      yzy.fillText('无氧耐力', 10, 165)
      yzy.fillText('动态热身', 310, 30)
      yzy.fillText('有氧耐力', 310, 95)
      yzy.fillText('峰值锻炼', 310, 165)
      yzy.fillText('10%', 10, 50)
      yzy.fillText('10%', 10, 120)
      yzy.fillText('10%', 10, 190)
      yzy.fillText('10%', 335, 50)
      yzy.fillText('10%', 335, 120)
      yzy.fillText('10%', 335, 190)
      yzy.draw()
    }
});

