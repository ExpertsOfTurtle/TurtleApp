Page({
    data: {
        openId : "",
        list: [
          {
            id: 'storageRecord',
            name: 'Danny',
            open: false,
            pages: ['storageRecord']
          }, {
                id: 'form',
                name: '表单',
                open: false,
                pages: ['button', 'list', 'input', 'slider', 'uploader']
            },
            {
                id: 'widget',
                name: '基础组件',
                open: false,
                pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loadmore', 'panel', 'preview', 'progress']
            },
            {
                id: 'feedback',
                name: '操作反馈',
                open: false,
                pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
            },
            {
                id: 'nav',
                name: '导航相关',
                open: false,
                pages: ['navbar', 'tabbar']
            },
            {
                id: 'search',
                name: '搜索相关',
                open: false,
                pages: ['searchbar']
            }
        ]
    },
    login : function(e) {
      var that = this;
      wx.login({
        success: function (res) {
          console.log("login:" + res.code);
          console.log(res);
          if (res.code) {
            wx.getUserInfo({
              success: function (res_user) {
                console.log("getUserInfo");
                console.log(res_user);
                wx.request({
                  url: 'http://localhost/auth/wechat/getOpenId?code=' + res.code,
                  method: 'GET',
                  header: {
                    'content-type': 'application/json'
                  },
                  success: function (getOpenIdRes) {
                    console.log("get Result:");
                    console.log(getOpenIdRes);
                    that.setData({openId : getOpenIdRes.data.openid});
                  }
                })
              }
            });
          }
        }
      });
      
    },
    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }
});
