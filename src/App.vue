<template>
  <section class='root-view'>
        <header><h1>{{ msg }}</h1></header>
        <nav>
            <ul>
                <!--路由导航-->
                <li><router-link to="/begin">入门了解</router-link></li>
                <li><router-link to="/basic">基础练习</router-link></li>
            </ul>
        </nav>
        <!--路由跳转视图-->
        <router-view></router-view>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "Vue2 学习基地"
    };
  }
};
</script>

<style>

</style>
