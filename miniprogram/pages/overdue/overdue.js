//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    city: '',
    country: '',
    nickName: '',
    province: ''
  },
  //发起http请求
  login: function () {
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
      },
      fail(res) {
        console.log(999)
      }
    })
  }
})
