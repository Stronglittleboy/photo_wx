// components/switchLab/switchLab.ts

interface LabListInterface {
    labelName: string;
    type: string;
    value: string;
}

type LabListFunction = () => LabListInterface[];


Component({

    /**
     * 组件的属性列表
     */
    properties: {
        labList: {
            type: null as any as ((() => LabListInterface[]) & ArrayConstructor), // 使用交叉类型，绕过类型检查
            value: [] as any as LabListInterface[],
            observer: 'labListObserver'
        },
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        labListObserver(newVal: LabListInterface[], oldVal: LabListInterface[]) {
            console.log(newVal, oldVal);
        },
        chooseLab(e: any) {
            console.log(e.target.dataset);

        }
    }
})
