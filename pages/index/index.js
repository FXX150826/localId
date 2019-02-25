//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"PageLocation"
  },
  //绑定事件
  getLocation:function(e){
    //调用微信接口，获取当前位置
    wx.getLocation({
      //类型：默认为wgs84，返回的是GPS坐标
      //wgs84是为GPS全球定位系统的使用而建立的坐标系统

      type:"wgs84",

      //接口调用成功，所执行的函数
      success: function(res) {
        console.log(res);

        //调用微信接口，打开内置地图
        wx.openLocation({
          //纬度
          latitude: res.latitude,
          //经度
          longitude: res.longitude,
          //缩放比例5-18
          scale:18,
          //为当前位置命名
          name:"华北科技学院",
          //地址详细说明
          address:"................"

        })
      },
    })
  }
})