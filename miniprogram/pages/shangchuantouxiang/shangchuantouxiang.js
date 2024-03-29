var util = require('../../utils/utils.js');
var app = getApp();

Page({
  data: {
    userImg: "../../img/aa.jpg", // 头像图片路径
    actionSheetHidden: true, // 是否显示底部可选菜单
    actionSheetItems: [
      { bindtap: 'changeImage', txt: '修改头像' },
      { bindtap: 'viewImage', txt: '查看头像' }
    ] // 底部可选菜单
  },
  // 初始化加载获取设备长宽
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
  },
  // 点击头像 显示底部菜单
  clickImage: function () {
    var that = this;
    that.setData({
      actionSheetHidden: !that.data.actionSheetHidden
    })
  },
  // 点击其他区域 隐藏底部菜单
  actionSheetbindchange: function () {
    var that = this;
    that.setData({
      actionSheetHidden: !that.data.actionSheetHidden
    })
  },
  // 上传头像
  changeImage: function () {
    var that = this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片，只有一张图片获取下标为0
        var tempFilePaths = res.tempFilePaths[0];
        that.setData({
          userImg: tempFilePaths,
          actionSheetHidden: !that.data.actionSheetHidden
        })
        util.uploadFile('/itdragon/uploadImage', tempFilePaths, 'imgFile', {}, function (res) {
          console.log(res);
          if (null != res) {
            that.setData({
              userImg: res
            })
          } else {
            // 显示消息提示框
            wx.showToast({
              title: '上传失败',
              icon: 'error',
              duration: 2000
            })
          }
        });
      }
    })
  },
  // 查看原图
  viewImage: function () {
    var that = this;
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [that.data.userImg] // 需要预览的图片http链接列表
    })
  },
  //上传文件
  uploadFile: function(url, filePath, name, formData, cb) {
    console.log('a=' + filePath)
    wx.uploadFile({
      url: rootDocment + url,
      filePath: filePath,
      name: name,
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: formData, // HTTP 请求中其他额外的 form data
      success: function (res) {
        if (res.statusCode == 200 && !res.data.result_code) {
          return typeof cb == "function" && cb(res.data)
        } else {
          return typeof cb == "function" && cb(false)
        }
      },
      fail: function () {
        return typeof cb == "function" && cb(false)
      }
    })
  },
  //cell
  bind_tal: function () {
    wx.makePhoneCall({
      phoneNumber: '13654917649' //仅为示例，并非真实的电话号码
    })
  }
});
