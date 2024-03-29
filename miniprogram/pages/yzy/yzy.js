var networking = require('../../utils/networking.js');
var app = getApp()
var us = getApp().globalData.userInfo
var mmd = require('../../utils/mmd.js');
var user = require('../../utils/user.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userCode: "ZDWLJC",
    array: [], // 服务器数组，数组
    header_list: [{
        title: "接单",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "调度",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "在途",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
      {
        title: "交车",
        hidden: "0" // 初始默认0默认状态 1选择状态
      },
    ],
    /** 下拉刷新，下拉加载参数 */
    pos: 1, // 每次触发下拉事件pageIndex=0，上拉事件pageIndex+5 默认为0
    loading: false, // "上拉加载"的变量，默认false，隐藏 
    loaded: false, //“没有数据”的变量，默认false，隐藏 
    yzydata: [],
    spt: true,
    ttbox: [],
    fontFamily: 'FT',
    pos: 1
  },
  yzylb: function(e) {
    console.log(e.currentTarget.dataset.src)
    app.globalData.bindtime = e.currentTarget.dataset.yzy
    us.bindtimecurrent = e.currentTarget.dataset.yzy
    app.globalData.src = e.currentTarget.dataset.src
    us.src = e.currentTarget.dataset.src
    wx.navigateTo({
      // url: '../sportdatail/sportdatail',
      url: '../hd/hd',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  yzytime: function(no) {
    var date = no;
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var shour = date.getHours()
    var smin = date.getMinutes()
    var ssec = date.getSeconds()
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (shour >= 0 && shour <= 9) {
      shour = "0" + shour
    }
    if (smin >= 0 && smin <= 9) {
      smin = "0" + smin
    }
    if (ssec >= 0 && ssec <= 9) {
      ssec = "0" + ssec
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
      " " + shour + seperator2 + smin +
      seperator2 + ssec;
    console.log(currentdate)
    return currentdate;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalData.lp)
    console.log(124)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this
    if(us.uid){
      that.gainLoadingListData()
    }else{
      wx.getUserInfo({
        success: function (res) {
          var uee = res.encryptedData
          var uvv = res.iv
          wx.setStorageSync('userInfo', res.userInfo)
          wx.setStorage({
            key: 'userInfo',
            data: res.userInfo
          })
          user.uee = uee
          user.uvv = uvv
          user.name = res.userInfo.nickName
          user.head = res.userInfo.avatarUrl
          console.log(user.name)
          console.log(res.userInfo.nickName)
          us.nickName = res.userInfo.nickName
          console.log(res.userInfo.nickName)
          us.avatarUrl = res.userInfo.avatarUrl
          us.usname = res.userInfo.nickName
          wx.login({
            success: function (res) {
              console.log(res.code)
              that.setData({
                hcc: res.code
              })
              console.log(that.data.hcc)
              console.log(uee)
              console.log(uvv)
              wx.request({
                url: app.globalData.lp + 'user/login', // 仅为示例，并非真实的接口地址
                method: 'POST',
                data: {
                  wx_code: that.data.hcc,
                  user_type: us.ut,
                  request_time: us.rt,
                  platform: us.pt,
                  tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
                  login_type: "wx",
                  network: us.nw,
                  product_id: us.pi,
                  app_version: us.av,
                  wx_data: uee,
                  wx_iv: uvv,
                  gym_name: us.gym_name || user.gym_name || "gaote_fitness"
                },
                header: {
                  'content-type': 'application/json' // 默认值
                },
                success(res) {
                  console.log(res.data)
                  if (res.data.code == 200) {
                    console.log(res.data.data)
                    us.uid = res.data.data.uid
                    that.gainLoadingListData()
                    console.log(19999924)
                  }
                }
              })
            }
          })
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log(app.globalData.lp)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log("下拉刷新")
    let that = this;
    that.setData({
      pageIndex: 0, // 每次触发下拉事件pageIndex=0
      pos: 1
    })
    that.gainLoadingListData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉加载")
    let that = this;
    that.setData({
      loading: true, //把"上拉加载"的变量设为false，显示 
      pos: that.data.pos + 1

    })
    // 上拉获取更多数据
    this.gainMoreLoadingListData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 初始化数据或是下拉刷新数据
   */
  gainLoadingListData: function() {
    let that = this;
    that.setData({
      yzydata: [],
      ttbox: []
    })
    let pos = that.data.pos;
    let userCode = that.data.userCode;
    var count
    networking.gainData(count, pos, function(data) {
      console.log(data)
      if (data.length < 1) {
        that.setData({
          spt: false
        })
      }
      for (var i = 0; i < data.length; i++) {
        data[i].time = Math.round(data[i].time / 60000)
        data[i].cal = Math.round(data[i].calorie)
      }
      that.setData({
        yzydata: data,
        ttbox: []
      })
      console.log(that.data.yzydata)
      console.log(that.data.ttbox)
      for (var i = 0; i < data.length; i++) {
        that.data.ttbox.push(that.yzytime(new Date(parseInt(data[i].bind_time))))
      }
      console.log(that.data.ttbox)
      that.setData({
        ttbox: that.data.ttbox
      })
      wx.stopPullDownRefresh(); // 数据请求成功后，停止刷新
    }, function(message) {
      console.log("message=", message)
    })
  },

  /**
   * 上拉获取更多数据
   */
  gainMoreLoadingListData: function() {
    let that = this;
    let pos = that.data.pos;
    console.log(pos)
    let userCode = that.data.userCode;
    var count
    console.log("pos == ", pos);
    networking.gainData(count, pos, function(data) {
      console.log(data)
      if (data.length != 0) { // 数组不为空
        for (var i = 0; i < data.length; i++) {
          data[i].time = Math.round(data[i].time / 60000)
          data[i].cal = Math.round(data[i].calorie)
        }
        console.log(data)
        var ttbox = that.data.ttbox
        console.log(ttbox)
        for (var i = 0; i < data.length; i++) {
          ttbox.push(that.yzytime(new Date(parseInt(data[i].bind_time))))
        }
        console.log(ttbox)
        that.setData({
          ttbox: that.data.ttbox
        })
        // that.setData({
        //   yzydata: data
        // })
        var yzydata = that.data.yzydata.concat(data);
        for (var index in yzydata) {
          var date = new Date(yzydata[index].orderTime)
          var y = date.getFullYear();
          var m = (date.getMonth() + 1);
          var d = date.getDate();
          var h = date.getHours();
          var mm = date.getMinutes();
          m = m > 9 ? m : '0' + m;
          d = d > 9 ? d : '0' + d;
          // h = h > 9 ? h : '0' + h;
          // mm = mm > 9 ? mm : '0' + mm;
          var dateStr = [y, m, d, ].join('-');
          // var timeStr = [h, mm].join(':')
          // var format = dateStr + " " + timeStr;
          var format = dateStr
          yzydata[index].orderTime = format;
        }

        that.setData({
          yzydata: yzydata,
          loading: true, //把"上拉加载"的变量设为false，显示 
        })
      } else { // 数组为空
        that.setData({
          loading: false, //把"上拉加载"的变量设为true，隐藏
          loaded: true, //把"上拉加载完成"的变量设为false，显示

        })
      }

    }, function(message) {
      console.log("message=", message)
    })
  },


  formSubmit: function(e) {
    // form_id发给后台
    var form_id = e.detail.formId;
    console.log(form_id);
    wx.login({
      success: function(res) {
        console.log(res);
        wx.request({
          url: app.globalData.lp + 'user/weChat/notice/add',
          data: {
            id: e.detail.formId,
            code: res.code,
            uid: us.uid,
            user_type: us.ut,
            request_time: us.rt,
            platform: us.pt,
            tk: mmd.hexMD5(us.pi + ":" + us.ut + ":" + us.rt),
            login_type: "wx",
            network: us.nw,
            product_id: us.pi,
            app_version: us.av,
            gym: us.gym_name
          },
          method: 'POST',
          header: {
            'content-type': 'application/json', // 默认值
          },
          success(res) {
            console.log(res.data)
          },
        })
      }
    })
  },
  toChildPage: function() {}

})