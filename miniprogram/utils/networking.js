
function gainData(count, pos, success, fail) {
  wx.request({
    url: "https://ll.linkfeeling.cn/api/fitness/list",//接口地址  
    method: 'POST',
    data: {
      "pos": pos,
      "uid": 'e50c0b2cbea000118c7c2fb63d49d542',
      "user_type": "trainee",
      "request_time": Date.parse(new Date()),
      "platform": "small_program",
      "tk": "0be543b011c2c1247c80051a42449b46",
      "network": "4G",
      "product_id": "Linkfeeling",
      "app_version": "001",
      "flag": 'true',
      "count": '5'
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