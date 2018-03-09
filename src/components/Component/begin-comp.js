import Vue from 'vue';

//注册组件【在./components/Component.vue中调用了】
const beginComp = Vue.component('begin-comp', {
    //这里提前说明一下接收哪些数据
    props: ['toChildData', 'dynamitData'],
    template: '<div>' +
        '<div class="title">-1.组件使用--</div>' +
        '注册在entry.js的组件[全局注册]<br />' +
        '<div class="title">-2.组件事件--</div>' +
        '<input type="button" value="点击的按钮" @click="showinfo"><br />' +
        '<input type="button" value="点击改变数据" @click="changeData(01)"><br />' +
        '<div class="title">-3.父组件传递数据给子组件prop--</div>' +
        '来自父组件的数据：{{toChildData}}<br />' +
        '来自父组件的数据(动态改变)：{{dynamitData}}' +
        '</div>',
    data() {
        return {
            message: '这是默认的数据'
        };
    },
    methods: {
        showinfo() {
            alert(this.message);
        },
        changeData(flag) {
            this.message = flag + ":" + new Date().valueOf();
        }
    },
    beforeCreate: function() {
        console.debug('自定义组件目前状态：beforeCreate');
    },
    created: function() {
        console.debug('自定义组件目前状态：created');
    },
    beforeMount: function() {
        console.debug('自定义组件目前状态：beforeMount');
    },
    mounted: function() {
        console.debug('自定义组件目前状态：mounted');
    },
    beforeUpdate: function() {
        console.debug('自定义组件目前状态：beforeUpdate');
    },
    updated: function() {
        console.debug('自定义组件目前状态：updated');
    },
    beforeDestroy: function() {
        console.debug('自定义组件目前状态：beforeDestroy');
    },
    destroyed: function() {
        console.debug('自定义组件目前状态：destroyed');
    }
});

export default beginComp;
