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
    wx.login({
      success: function (res) {
        console.log(res.code)
        //发送请求
        wx.request({
          url: '自己的域名', //仅为示例，并非真实的接口地址
          data: {
            code: res.code
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res)
          }
        })
      }
    })
  },
  //验证登录是否过期
  checksession: function () {
    wx.checkSession({
      success: function (res) {
        console.log(res, '登录未过期')
        wx.showToast({
          title: '登录未过期啊',
        })
      },
      fail: function (res) {
        console.log(res, '登录过期了')
        wx.showModal({
          title: '提示',
          content: '你的登录信息过期了，请重新登录',
        })
        //再次调用wx.login()
        wx.login({
          success: function (res) {
            console.log(res.code)
            //发送请求
            wx.request({
              url: '自己的域名', //仅为示例，并非真实的接口地址
              data: {
                code: res.code
              },
              header: {
                'content-type': 'application/json' // 默认值
              },
              success(res) {
                console.log(res)
              }
            })
          }
        })
      }
    })
  },
  //获取用户的信息
  info: function () {
    var that = this
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo)
        var city = res.userInfo.city
        var country = res.userInfo.country
        var nickName = res.userInfo.nickName
        var province = res.userInfo.province
        that.setData({
          city: city,
          country: country,
          nickName: nickName,
          province: province
        })
      }
    })
  }
})
