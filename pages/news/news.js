// 取模块化中的数据
var newsDatas=require('../data/newsdata.js');
// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    indicatoractivecolor:"#0c8ed9",
    autoplay: true,
    interval: 5000,
    duration: 1000,
    useData:[]
  },
  // 跳转到详情页
  goNewsDetail:function(event){
    // 取自定义参数newsid
    var newsId=event.currentTarget.dataset.newsid;
    wx.navigateTo({
      // 带参数跳转
      url:'news-detail/news-detail?newsId='+newsId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 从模块中取数据并赋值给useData
    this.setData({
      useData:newsDatas.newsData
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