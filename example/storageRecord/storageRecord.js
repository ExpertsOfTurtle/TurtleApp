Page({
    data :{
        objectName : "",
        objectPosition : "",
        taskList : [{
          "id":10,
          "title":"danny"
        },
          {
            "id": 5,
            "title": "wfwf"
          }]
    },
    add : function () {
      console.log("objectName:" + this.data.objectName);
      console.log("objectPosition:" + this.data.objectPosition);
      this.queryTask();
    },
    queryTask : function () {
      var that = this;
      wx.request({
        url: 'https://turtlebone.top/task/task/queryMyTask?tokenId=DFS',
        header : {
          "Content-Type":"application/json"
        },
        method: "POST", 
        data: {},
        complete: function (res) {
          console.log(res);
          that.openToast();
         // that.setData({ taskList:res.data});
        }
      })
    },
    bindInputName : function(e) {
      this.setData({objectName : e.detail.value});
    },
    bindInputPosition: function (e) {
      this.setData({ objectPosition: e.detail.value });
    },
    openToast: function () {
        var msg = "物品【" +this.data.objectName + "】存放在 " + this.data.objectPosition;
        wx.showToast({
            title: msg,
            icon: 'success',
            duration: 3000
        });
    },
    openLoading: function () {
        wx.showToast({
            title: '数据加载中',
            icon: 'loading',
            duration: 3000
        });
    }
});