//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  goNewsTap: function() {
    // 路由跳转到taber页
    wx.switchTab({
      url: '../news/news',
    })
  }
})
