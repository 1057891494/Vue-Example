import Vue from 'vue';
import App from './App.vue';
import router from './router';

//注册组件【在./components/Component.vue中调用了】
Vue.component('begin-comp', {
    template: '<div>注册在entry.js的组件[全局注册]' +
        '<input type="button" value="点击的按钮" @click="showinfo">' +
        '<input type="button" value="点击改变数据" @click="changeData(01)">' +
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

//根对象
var vm = new Vue({
    //挂载点
    el: '#root',
    //路由配置
    router: router,
    //启动组件
    render: function(callback) { return callback(App); },
    //下面是Vue对象的几种状态
    beforeCreate: function() {
        console.debug('Vue对象目前状态：beforeCreate');
    },
    created: function() {
        console.debug('Vue对象目前状态：created');
    },
    beforeMount: function() {
        console.debug('Vue对象目前状态：beforeMount');
    },
    mounted: function() {
        console.debug('Vue对象目前状态：mounted');
    },
    beforeUpdate: function() {
        console.debug('Vue对象目前状态：beforeUpdate');
    },
    updated: function() {
        console.debug('Vue对象目前状态：updated');
    },
    beforeDestroy: function() {
        console.debug('Vue对象目前状态：beforeDestroy');
    },
    destroyed: function() {
        console.debug('Vue对象目前状态：destroyed');
    }
});
