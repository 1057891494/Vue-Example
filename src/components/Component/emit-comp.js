import Vue from 'vue';

const emitComp = Vue.component('button-counter', {
    template: '<div><div class="title">-4.$emit--</div><button v-on:click="incrementCounter">点击改变数字{{ counter }}</button></div>',
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function() {
            this.counter += 1;
            // 触发父组件的increment事件
            this.$emit('increment');
        }
    },
});

export default emitComp;
