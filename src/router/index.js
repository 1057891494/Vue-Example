import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//路由跳转的组件，要提前注入
import Begin from '../components/Begin/Begin.vue';
import Basic from '../components/Basic/Basic.vue';

//路由配置
const router = new VueRouter({
    routes: [
        { path: '/begin', component: Begin },
        { path: '/basic', component: Basic }
    ]
});

//有点类似管道函数，每次跳转前会先调用这个方法，如果注册了新方法，一定要调用next()
router.beforeEach(function(to, from, next) {
    console.debug("跳转路由：" + to.path);
    next();
});

export default router;
