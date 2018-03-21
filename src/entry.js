import Vue from 'vue';
import App from './App.vue';
import router from './router';

//自定义的组件必须在new Vue之前导入
import beginComp from './components/Component/begin-comp.js';
import emitComp from './components/Component/emit-comp.js';

// 自定义指令（全局的）
import './components/directive/begin-dir';

//过滤器{全部}
import './components/filter/begin-filter';

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
