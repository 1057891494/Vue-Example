import Vue from 'vue';
import App from './App.vue';
import router from './router'

//根对象
new Vue({
    //挂载点
    el: '#root',
    //路由配置
    router: router,
    //启动组件
    render: function(callback) { return callback(App); },
    //下面是Vue对象的几种状态
    beforeCreate: function() {
        console.debug('目前状态：beforeCreate');
    },
    created: function() {
        console.debug('目前状态：created');
    },
    beforeMount: function() {
        console.debug('目前状态：beforeMount');
    },
    mounted: function() {
        console.debug('目前状态：mounted');
    },
    beforeUpdate: function() {
        console.debug('目前状态：beforeUpdate');
    },
    updated: function() {
        console.debug('目前状态：updated');
    },
    beforeDestroy: function() {
        console.debug('目前状态：beforeDestroy');
    },
    destroyed: function() {
        console.debug('目前状态：destroyed');
    }
});
