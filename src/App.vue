<template>
  <section class='root-view'>
    <header>
      <h1>{{ msg }}</h1>
    </header>
    <nav>
      <ul>
        <!--路由导航-->
        <li>
          <router-link to="/calcWatch">计算属性和侦听器</router-link>
        </li>
        <li>
          <router-link to="/classStyle">Class与Style绑定</router-link>
        </li>
        <li>
          <router-link to="/ifShow">条件渲染</router-link>
        </li>
        <li>
          <router-link to="/vFor">列表渲染</router-link>
        </li>
        <li>
          <router-link to="/event">事件处理</router-link>
        </li>
        <li>
          <router-link to="/formInput">表单输入绑定</router-link>
        </li>
        <li>
          <router-link to="/component">组件</router-link>
        </li>
        <li>
          <router-link to="/directive">指令</router-link>
        </li>
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
  .root-view>header {
    font-size: 0;
  }

  .root-view>nav>ul {
    background-color: black;
    font-size: 0;
    line-height: 0.4rem;
    padding: 0 0.3rem 0 0.3rem;
  }

  .root-view>nav>ul>li:not(:last-child) {
    margin-right: 0.1rem;
  }

  .root-view>nav>ul>li {
    font-size: 0.16rem;
    display: inline-block;
  }

  .root-view>nav>ul>li>a:hover {
    color: rgb(240, 227, 227);
  }

  .root-view>nav>ul>li>a.router-link-active {
    color: #fff;
    outline: none;
  }

  .root-view>nav>ul>li>a {
    color: #60818e;
  }
</style>
