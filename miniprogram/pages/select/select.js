var app = getApp()
var us = getApp().globalData.userInfo
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrax:['男','女'],
    arrak:['减脂','局部塑形','增肌','保持健康'],
    array: ['14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'],
    arrab: ['120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230'],
    arrac: ['35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130', '131', '132', '133', '134', '135', '136', '137', '138', '139', '140', '141', '142', '143', '144', '145', '146', '147', '148', '149', '150', '151', '152', '153', '154', '155', '156', '157', '158', '159', '160', '161', '162', '163', '164', '165', '166', '167', '168', '169', '170', '171', '172', '173', '174', '175', '176', '177', '178', '179', '180', '181', '182', '183', '184', '185', '186', '187', '188', '189', '190', '191', '192', '193', '194', '195', '196', '197', '198', '199', '200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212', '213', '214', '215', '216', '217', '218', '219', '220', '221', '222', '223', '224', '225', '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '252', '253', '254', '255', '256', '257', '258', '259', '260', '261', '262', '263', '264', '265', '266', '267', '268', '269', '270', '271', '272', '273', '274', '275', '276', '277', '278', '279', '280', '281', '282', '283', '284', '285', '286', '287', '288', '289', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '300'],
    objectArray: [
      {
        id: 0,
        name: '14'
      },
      {
        id: 1,
        name: '15'
      },
      {
        id: 2,
        name: '16'
      },
      {
        id: 3,
        name: '17'
      },
      {
        id: 4,
        name: '18'
      },
      {
        id: 5,
        name: '19'
      },
      {
        id: 6,
        name: '20'
      },
      {
        id: 7,
        name: '21'
      },
      {
        id: 8,
        name: '22'
      },
      {
        id: 9,
        name: '23'
      },
      {
        id: 10,
        name: '24'
      },
      {
        id: 11,
        name: '25'
      },
      {
        id: 12,
        name: '26'
      },
      {
        id: 13,
        name: '27'
      },
      {
        id: 14,
        name: '28'
      },
      {
        id: 15,
        name: '29'
      },
      {
        id: 16,
        name: '30'
      },
      {
        id: 17,
        name: '31'
      },
      {
        id: 18,
        name: '32'
      },
      {
        id: 19,
        name: '33'
      },
      {
        id: 20,
        name: '34'
      },
      {
        id: 21,
        name: '35'
      },
      {
        id: 22,
        name: '36'
      },
      {
        id: 23,
        name: '37'
      },
      {
        id: 24,
        name: '38'
      },
      {
        id: 25,
        name: '39'
      }, {
        id: 26,
        name: '40'
      },
      {
        id: 27,
        name: '41'
      },
      {
        id: 28,
        name: '42'
      },
      {
        id: 29,
        name: '43'
      }, {
        id: 30,
        name: '44'
      },
      {
        id: 31,
        name: '45'
      },
      {
        id: 32,
        name: '46'
      },
      {
        id: 33,
        name: '47'
      },
      {
        id: 34,
        name: '48'
      },
      {
        id: 35,
        name: '49'
      },
      {
        id: 36,
        name: '50'
      },
      {
        id: 37,
        name: '51'
      },
      {
        id: 38,
        name: '52'
      },
      {
        id: 39,
        name: '53'
      },
      {
        id: 40,
        name: '54'
      },
      {
        id: 41,
        name: '55'
      },
      {
        id: 42,
        name: '56'
      },
      {
        id: 43,
        name: '57'
      },

      {
        id: 44,
        name: '58'
      },
      {
        id: 45,
        name: '59'
      }, {
        id: 46,
        name: '60'
      },
      {
        id: 47,
        name: '61'
      },
      {
        id: 48,
        name: '62'
      },
      {
        id: 49,
        name: '63'
      },
      {
        id: 50,
        name: '64'
      },
      {
        id: 51,
        name: '65'
      },
      {
        id: 52,
        name: '66'
      },
      {
        id: 53,
        name: '67'
      },
      {
        id: 54,
        name: '68'
      },
      {
        id: 55,
        name: '69'
      },
      {
        id: 56,
        name: '70'
      },
      {
        id: 57,
        name: '71'
      },
      {
        id: 58,
        name: '72'
      },
      {
        id: 59,
        name: '73'
      },
      {
        id: 60,
        name: '74'
      },
      {
        id: 61,
        name: '75'
      },
      {
        id: 62,
        name: '76'
      },
      {
        id: 63,
        name: '77'
      },
      {
        id: 64,
        name: '78'
      },
      {
        id: 65,
        name: '79'
      },
      {
        id: 66,
        name: '80'
      },
      {
        id: 67,
        name: '81'
      },
      {
        id: 68,
        name: '82'
      },
      {
        id: 69,
        name: '83'
      },
      {
        id: 70,
        name: '84'
      },
      {
        id: 71,
        name: '85'
      },
      {
        id: 72,
        name: '86'
      },
      {
        id: 73,
        name: '87'
      },
      {
        id: 74,
        name: '88'
      },
      {
        id: 75,
        name: '89'
      }, {
        id: 76,
        name: '90'
      },
    ],
    objectArrab: [
      {
        id: 0,
        name: '120'
      },
      {
        id: 1,
        name: '121'
      },
      {
        id: 2,
        name: '122'
      },
      {
        id: 3,
        name: '123'
      },
      {
        id: 4,
        name: '124'
      },
      {
        id: 5,
        name: '125'
      },
      {
        id: 6,
        name: '126'
      },
      {
        id: 7,
        name: '127'
      },
      {
        id: 8,
        name: '128'
      },
      {
        id: 9,
        name: '129'
      },
      {
        id: 10,
        name: '130'
      },
      {
        id: 11,
        name: '131'
      },
      {
        id: 12,
        name: '132'
      },
      {
        id: 13,
        name: '133'
      },
      {
        id: 14,
        name: '134'
      },
      {
        id: 15,
        name: '135'
      },
      {
        id: 16,
        name: '136'
      },
      {
        id: 17,
        name: '137'
      },
      {
        id: 18,
        name: '138'
      },
      {
        id: 19,
        name: '139'
      },
      {
        id: 20,
        name: '140'
      },
      {
        id: 21,
        name: '141'
      },
      {
        id: 22,
        name: '142'
      },
      {
        id: 23,
        name: '143'
      },
      {
        id: 24,
        name: '144'
      },
      {
        id: 25,
        name: '145'
      }, {
        id: 26,
        name: '146'
      },
      {
        id: 27,
        name: '147'
      },
      {
        id: 28,
        name: '148'
      },
      {
        id: 29,
        name: '149'
      }, {
        id: 30,
        name: '150'
      },
      {
        id: 31,
        name: '151'
      },
      {
        id: 32,
        name: '152'
      },
      {
        id: 33,
        name: '153'
      },
      {
        id: 34,
        name: '154'
      },
      {
        id: 35,
        name: '155'
      },
      {
        id: 36,
        name: '156'
      },
      {
        id: 37,
        name: '157'
      },
      {
        id: 38,
        name: '158'
      },
      {
        id: 39,
        name: '159'
      },
      {
        id: 40,
        name: '160'
      },
      {
        id: 41,
        name: '161'
      },
      {
        id: 42,
        name: '162'
      },
      {
        id: 43,
        name: '163'
      },

      {
        id: 44,
        name: '164'
      },
      {
        id: 45,
        name: '165'
      }, {
        id: 46,
        name: '166'
      },
      {
        id: 47,
        name: '167'
      },
      {
        id: 48,
        name: '168'
      },
      {
        id: 49,
        name: '169'
      },
      {
        id: 50,
        name: '170'
      },
      {
        id: 51,
        name: '171'
      },
      {
        id: 52,
        name: '172'
      },
      {
        id: 53,
        name: '173'
      },
      {
        id: 54,
        name: '174'
      },
      {
        id: 55,
        name: '175'
      },
      {
        id: 56,
        name: '176'
      },
      {
        id: 57,
        name: '177'
      },
      {
        id: 58,
        name: '178'
      },
      {
        id: 59,
        name: '179'
      },
      {
        id: 60,
        name: '180'
      },
      {
        id: 61,
        name: '181'
      },
      {
        id: 62,
        name: '182'
      },
      {
        id: 63,
        name: '183'
      },
      {
        id: 64,
        name: '184'
      },
      {
        id: 65,
        name: '185'
      },
      {
        id: 66,
        name: '186'
      },
      {
        id: 67,
        name: '187'
      },
      {
        id: 68,
        name: '188'
      },
      {
        id: 69,
        name: '189'
      },
      {
        id: 70,
        name: '190'
      },
      {
        id: 71,
        name: '191'
      },
      {
        id: 72,
        name: '192'
      },
      {
        id: 73,
        name: '193'
      },
      {
        id: 74,
        name: '194'
      },
      {
        id: 75,
        name: '195'
      }, {
        id: 76,
        name: '196'
      },
    ],
    objectArrac: [
      {
        id: 0,
        name: '65'
      },
      {
        id: 1,
        name: '66'
      },
      {
        id: 2,
        name: '67'
      },
      {
        id: 3,
        name: '68'
      },
      {
        id: 4,
        name: '69'
      },
      {
        id: 5,
        name: '70'
      },
      {
        id: 6,
        name: '71'
      },
      {
        id: 7,
        name: '72'
      },
      {
        id: 8,
        name: '73'
      },
      {
        id: 9,
        name: '74'
      },
      {
        id: 10,
        name: '75'
      },
      {
        id: 11,
        name: '76'
      },
      {
        id: 12,
        name: '77'
      },
      {
        id: 13,
        name: '78'
      },
      {
        id: 14,
        name: '79'
      },
      {
        id: 15,
        name: '80'
      },
      {
        id: 16,
        name: '81'
      },
      {
        id: 17,
        name: '82'
      },
      {
        id: 18,
        name: '83'
      },
      {
        id: 19,
        name: '84'
      },
      {
        id: 20,
        name: '85'
      },
      {
        id: 21,
        name: '86'
      },
      {
        id: 22,
        name: '87'
      },
      {
        id: 23,
        name: '88'
      },
      {
        id: 24,
        name: '89'
      },
      {
        id: 25,
        name: '90'
      },
      {
        id: 26,
        name: '91'
      },
      {
        id: 27,
        name: '92'
      },
      {
        id: 28,
        name: '93'
      },
      {
        id: 29,
        name: '94'
      }, {
        id: 30,
        name: '95'
      },
      {
        id: 31,
        name: '96'
      },
      {
        id: 32,
        name: '97'
      },
      {
        id: 33,
        name: '98'
      },
      {
        id: 34,
        name: '99'
      },
      {
        id: 35,
        name: '100'
      },
      {
        id: 36,
        name: '101'
      },
      {
        id: 37,
        name: '102'
      },
      {
        id: 38,
        name: '103'
      },
      {
        id: 39,
        name: '104'
      },
      {
        id: 40,
        name: '105'
      },
      {
        id: 41,
        name: '106'
      },
      {
        id: 42,
        name: '107'
      },
      {
        id: 43,
        name: '108'
      },

      {
        id: 44,
        name: '109'
      },
      {
        id: 45,
        name: '110'
      }, {
        id: 46,
        name: '111'
      },
      {
        id: 47,
        name: '112'
      },
      {
        id: 48,
        name: '113'
      },
      {
        id: 49,
        name: '114'
      },
      {
        id: 50,
        name: '115'
      },
      {
        id: 51,
        name: '116'
      },
      {
        id: 52,
        name: '117'
      },
      {
        id: 53,
        name: '118'
      },
      {
        id: 54,
        name: '119'
      },
      {
        id: 55,
        name: '120'
      },
      {
        id: 56,
        name: '121'
      },
      {
        id: 57,
        name: '122'
      },
      {
        id: 58,
        name: '123'
      },
      {
        id: 59,
        name: '124'
      },
      {
        id: 60,
        name: '125'
      },
      {
        id: 61,
        name: '126'
      },
      {
        id: 62,
        name: '127'
      },
      {
        id: 63,
        name: '128'
      },
      {
        id: 64,
        name: '129'
      },
      {
        id: 65,
        name: '130'
      },
      {
        id: 66,
        name: '131'
      },
      {
        id: 67,
        name: '132'
      },
      {
        id: 68,
        name: '133'
      },
      {
        id: 69,
        name: '134'
      },
      {
        id: 70,
        name: '135'
      },
      {
        id: 71,
        name: '136'
      },
      {
        id: 72,
        name: '137'
      },
      {
        id: 73,
        name: '138'
      },
      {
        id: 74,
        name: '139'
      },
      {
        id: 75,
        name: '140'
      }, {
        id: 76,
        name: '141'
      },
    ],
    jh: 0,
    kp: 0,
    index: 10,
    pph: 50,
    ppw: 25,
    ok: false,
    kk: true,
    fontFamily: 'FT'
  },
  njj: function(e) {
    console.log(e.detail.value)
    wx.request({
      url: 'https://ll.linkfeeling.cn/api/user/account_info',
      method: 'POST',
      data: {
        uid: us.uid,
        user_type: us.ut,
        request_time: us.rt,
        platform: us.pt,
        tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
        login_type: "wx",
        network: us.nw,
        product_id: us.pi,
        app_version: us.av
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
        if (res.data.code == 200) {
          that.setData({
            sex: res.data.data.gender,
            age: res.data.data.age,
            name: res.data.data.name,
            goal: res.data.data.goal,
            weight: res.data.data.weight,
            head_icon: res.data.data.head_icon,
            height: res.data.data.stature,
            pkk: res.data.data.gender == '男' ? 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/my/boy.png' : 'https://link-imgs.oss-cn-hangzhou.aliyuncs.com/wx_small/my/girl.png'
          })
        }
      }
    })
  },
  bindPickerChangey: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      kp: e.detail.value
    })
    console.log(this.data.arrax[e.detail.value])
    us.goal = this.data.arrax[e.detail.value]
  },
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
    console.log(this.data.array[e.detail.value])
    us.age = this.data.array[e.detail.value]
  },
  bindPickerChangex: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      jh: e.detail.value
    })
    console.log(this.data.arrax[e.detail.value])
    us.sex = this.data.arrax[e.detail.value]
  },
  bindPickerChangeb: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pph: e.detail.value
    })
    console.log(this.data.arrab[e.detail.value])
    us.height = this.data.arrab[e.detail.value]
  },
  bindPickerChangec: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      ppw: e.detail.value
    })
    console.log(this.data.arrac[e.detail.value])
    us.height = this.data.arrac[e.detail.value]
  },
  bsex: function (e) {
    let that = this
    us.sex = e.currentTarget.dataset.man
    // console.log(e.currentTarget.dataset.man)
    that.setData({
      kk: !that.data.kk
    })
  },
  gonext: function () {
    wx.navigateTo({
      url: '../sportnow/sportnow',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://www.linkfeeling.cn/platform/font/DIN 1451 Std Engschrift.TTF")',
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