var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    otu: '',
    ofci: '',
    po: '',
    url: '',
    pj: '',
    cellnum: 'ADC-23111',
    shopname: 'Linkfeeling',
    tita: '',
    titb: '',
    ok: 'true'
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
     wx.request({
       url: 'https://ll.linkfeeling.cn/api/fitness/bracelet', // 仅为示例，并非真实的接口地址
      method: 'POST',
      data: {
        uid: us.uid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.data.bind_status == false){
          that.setData({
            po: '手环暂未绑定',
            pj: 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/mycellhuan/cell.png',
            tita: '“ 请向服务人员索取领客手环，',
            titb: '否则无法统计到您的运动数据哦~ ”',
            ok: true,
            pp: 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/mycellhuan/warn.png'
          })
        }
        if (res.data.data.bind_status == true) {
          that.setData({
            po: '手环绑定成功',
            pj: 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/mycellhuan/cell.png',
            tita: '“ 临走时请归还手环',
            titb: '否则无法生成您的锻炼报告 ”',
            ok: false,
            pp: 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/mycellhuan/warn.png'
          })
        }
        that.setData({
          ofci: res.data.data.gym_name,
          otu: res.data.data.bind_status
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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