// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
    data: {
        motto: 'Hello World',
        cityList: [
            {cityName: "杭州", type: 1, value: 1},
            {cityName: "西安", type: 1, value: 2},
            {cityName: "深圳", type: 1, value: 3},
            {cityName: "上海", type: 1, value: 4},
            {cityName: "昆明", type: 1, value: 5},
            {cityName: "沈阳", type: 1, value: 6},
            {cityName: "合肥", type: 1, value: 7},
            {cityName: "济宁", type: 1, value: 8},
            {cityName: "北京", type: 1, value: 9},

        ],
        userInfo: {
            avatarUrl: defaultAvatarUrl,
            nickName: '',
        },
        hasUserInfo: false,
        canIUseGetUserProfile: wx.canIUse('getUserProfile'),
        canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    },
    methods: {
        // 事件处理函数
        bindViewTap() {
            wx.navigateTo({
                url: '../logs/logs',
            })
        },
        onChooseAvatar(e: any) {
            const {avatarUrl} = e.detail
            const {nickName} = this.data.userInfo
            this.setData({
                "userInfo.avatarUrl": avatarUrl,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
        onInputChange(e: any) {
            const nickName = e.detail.value
            const {avatarUrl} = this.data.userInfo
            this.setData({
                "userInfo.nickName": nickName,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
      handleButtonClick(e:any){
          let value = e.target.dataset.value;
          /*输出结果*/
        console.log(value);
        wx.navigateTo({
                url: '../home/home',
                success: function (res) {
                    // 通过eventChannel向被打开页面传送数据
                    res.eventChannel.emit('acceptDataFromOpenerPage', {data: 'test'})
                }
            }
         )

      },
        getUserProfile() {
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
                desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res)
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        },
    },
})
