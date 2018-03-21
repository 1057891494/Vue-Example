import Vue from 'vue';

Vue.directive('focus', {
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: function(el, binding, vnode, oldVnode) {
        console.log('钩子函数：inserted');
        console.error(el, binding, vnode, oldVnode);
        // 聚焦元素
        el.focus();
    },
    //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: function(el, binding, vnode, oldVnode) {
        console.log('钩子函数：bind');
        console.error(el, binding, vnode, oldVnode);

        /**
         * el:指令所绑定的元素，可以用来直接操作 DOM 。
         */
        console.log($$(el));

        /**
         * binding:一个包含很多数据的对象【只读,除了el都是只读】
         */
        console.log(binding);
    },
    //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
    update: function(el, binding, vnode, oldVnode) {
        console.log('钩子函数：update');
        console.error(el, binding, vnode, oldVnode);
    },
    //指令所在组件的 VNode 及其子 VNode 全部更新后调用。
    componentUpdated: function(el, binding, vnode, oldVnode) {
        console.log('钩子函数：componentUpdated');
        console.error(el, binding, vnode, oldVnode);
    },
    //只调用一次，指令与元素解绑时调用。
    unbind: function(el, binding, vnode, oldVnode) {
        console.log('钩子函数：unbind');
        console.error(el, binding, vnode, oldVnode);
    }
});
