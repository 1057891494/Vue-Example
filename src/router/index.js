import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
import CalcWatch from '../components/CalcWatch/CalcWatch.vue';
import ClassStyle from '../components/ClassStyle/ClassStyle.vue';

//路由配置
const router = new VueRouter({
    routes: [
        { path: '/', redirect: 'calcWatch' },
        { path: '/calcWatch', component: CalcWatch },
        { path: '/classStyle', component: ClassStyle }
    ]
});

//有点类似管道函数，每次跳转前会先调用这个方法，如果注册了新方法，一定要调用next()
router.beforeEach(function(to, from, next) {
    console.debug("跳转路由：" + to.path);
    next();
});

export default router;
