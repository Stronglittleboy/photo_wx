// top-navigation-bar.js

Component({
    data: {
        currentIndex: 0, // 默认选中第一个
    },

    methods: {
        handleTabClick(event) {
            console.log(event.target.dataset);
            let tem = event.target.dataset.index;
            if (tem){
                const index = parseInt(tem);
                this.setData({
                    currentIndex: index,
                });
                // 在这里可以触发顶部导航栏切换的事件，例如触发页面切换等
                if (index === 2){

                }
            }
        },
    },
})
