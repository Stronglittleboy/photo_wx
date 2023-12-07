// // app.ts
// App<IAppOption>({
//       globalData: {},
//   onLaunch() {
//     wx.getSystemInfo({
//       success: e => {
//         this.globalData.StatusBar = e.statusBarHeight;
//         let custom = wx.getMenuButtonBoundingClientRect();
//         this.globalData.Custom = custom;
//         this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
//       }
//     })
//     // 展示本地存储能力
//     const logs = wx.getStorageSync('logs') || []
//     logs.unshift(Date.now())
//     wx.setStorageSync('logs', logs)
//
//     // 登录
//     wx.login({
//       success: res => {
//         console.log(res.code)
//         // 发送 res.code 到后台换取 openId, sessionKey, unionId
//       },
//     })
//   },
// })

// app.ts

interface IGlobalData {
  StatusBar: number;
  Custom: any;
  CustomBar: number;
}

interface IAppOption {
  globalData: IGlobalData;
  userInfo?: any;
}

App<IAppOption>({
  globalData: {
    StatusBar: 0,
    Custom: {} , // Use `as` assertion to inform TypeScript about the type
    CustomBar: 0,
  },
  onLaunch() {
    wx.getSystemInfo({
      success: (e:any) => {
        this.globalData.StatusBar = e.statusBarHeight;
        const custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      },
    });

    // Other logic...
  },
});
