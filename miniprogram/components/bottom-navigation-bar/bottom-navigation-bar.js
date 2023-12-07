Component({
    properties: {},
    data: {
        currentIndex: 0, // 默认选中第一个
    },

    methods: {
        handleTabClick(event) {
            console.log(event.currentTarget.dataset);
            let tem = event.currentTarget.dataset.index;
            if (tem) {
                const index = parseInt(tem);
                console.log(index,'============');
                this.setData({
                    currentIndex: index,
                });
                // 在这里可以触发顶部导航栏切换的事件，例如触发页面切换等
                if (index === 2) {

                }
            }
        },
    },
});
