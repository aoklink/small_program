const app = getApp()
const doAuth = require('./doAuth.js')
Page({
  data: {

  },
  onLoad: function () {
    wx.login({
      success(res){
        console.log(res)
      },
      fail(err){
        console.error(err)
      }
    })
  },
  doAuth(){
    doAuth('saveImageToPhotosAlbum')
    // wx.chooseAddress();
    // wx.getSetting({
    //   success:function(){
    //     wx.showModal({
    //       title: 'title',
    //       content: 'content',
    //       cancelText: '取消',
    //       confirmText: '确定',
    //       confirmColor: '#21c0ae',
    //       success: function (res) {
    //         console.log('efg');
    //         wx.openSetting({})
    //       }
    //     })
    //   }
    // })
  }
})
