import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
import CalcWatch from '../components/CalcWatch.vue';
import ClassStyle from '../components/ClassStyle.vue';
import IfShow from '../components/IfShow.vue';
import VFor from '../components/VFor.vue';
import Events from '../components/Event.vue';
import FormInput from '../components/FormInput.vue';
import Component from '../components/Component/Component.vue';
import Directive from '../components/directive/directive.vue';
import Filter from '../components/filter/filter.vue';

//路由配置
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: 'calcWatch'
        },
        {
            path: '/calcWatch',
            component: CalcWatch
        },
        {
            path: '/classStyle',
            component: ClassStyle
        },
        {
            path: '/ifShow',
            component: IfShow
        },
        {
            path: '/vFor',
            component: VFor
        },
        {
            path: '/event',
            component: Events
        },
        {
            path: '/formInput',
            component: FormInput
        },
        {
            path: '/component',
            component: Component
        },
        {
            path: '/directive',
            component: Directive
        },
        {
            path: '/filter',
            component: Filter
        }
    ]
});

//有点类似管道函数，每次跳转前会先调用这个方法，如果注册了该方法，一定要调用next()
router.beforeEach(function(to, from, next) {
    console.debug("跳转路由：" + to.path);
    next();
});

export default router;
