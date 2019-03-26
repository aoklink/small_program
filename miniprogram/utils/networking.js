var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('mmd.js');
function gainData(count, pos, success, fail) {
  wx.request({
    url: "https://ll.linkfeeling.cn/api/fitness/list",//接口地址  
    method: 'POST',
    data: {
      "pos": pos,
      "uid": us.uid,
      "user_type": us.ut,
      "request_time": Date.parse(new Date()),
      "platform": us.pt,
      "tk": mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
      "network": us.nw,
      "product_id": us.pi,
      "app_version": us.av,
      "flag": 'true',
      "count": '10'
    },
    header: {
      'content-type': 'application/json'
    },
    success: function (res) {
      if (res.data.code == 200) {
        success(res.data.data)
      } else {
        success(res.data.message)
      }

    },
    fail: function (res) {
      fail(res.data.message);
    }
  })
}

module.exports = {
  gainData: gainData
}