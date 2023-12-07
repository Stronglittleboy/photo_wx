// double-layer-card.js

Component({
    properties: {
        backgroundImage: {
            type: String,
            value: '', // 下层图片地址
        },
        topRightText: {
            type: String,
            value: '', // 右上角文字
        },
        centerBottomText: {
            type: String,
            value: '', // 水平居中靠底部的文字
        },
        bottomIcon: {
            type: String,
            value: '', // 底部图标地址
        },
    },
    methods:{

        chooseProduct(e){
            console.log(e.target.dataset);
            console.log(e.currentTarget.dataset);
            // wx.navigateTo({
            //         url: '../product/product',
            //         success: function (res) {
            //             // 通过eventChannel向被打开页面传送数据
            //             res.eventChannel.emit('acceptDataFromOpenerPage', {data: 'test'})
            //         }
            //     }
            // )
        }
    }
})
