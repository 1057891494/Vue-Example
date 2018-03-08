<template>
  <section class='Event'>
    <ul>
      <li class="title">--1.监听事件--</li>
      <li>
        <input type="button" value="点击增加右边数字" v-on:click='num++' /> {{num}}
      </li>
    </ul>
    <ul>
      <li class="title">--2.事件处理方法--</li>
      <li>
        <input type="button" value='点击我调用事件' v-on:click='doIt' />
        <input type="button" value='点击我调用事件' @click='doIt' />
      </li>
    </ul>
    <ul>
      <li class="title">--3.内联处理器中的方法--</li>
      <li>
        <input type="button" value='点击我调用事件' v-on:click='doMethod("param1")' />
        <input type="button" value='点击我调用事件' v-on:click='doMethod("param2")' />
        <input type="button" value='点击我调用事件' v-on:click='doMethod2("param3")' />
      </li>
    </ul>
    <ul>
      <li class="title">--4.事件修饰符--</li>
      <li>
        <!--就是关于阻止冒泡事件等等一些东西，具体的查API，这里给出一个简单的例子-->
        <a v-on:click.stop="doIt">阻止单击事件继续传播</a>
      </li>
    </ul>
    <ul>
      <li class="title">--5.按键修饰符--</li>
      <li>
        <!--在监听键盘事件时，我们经常需要检查常见的键值。Vue 允许为 v-on 在监听键盘事件时添加按键修饰符-->
        <!-- v-on:keyup.13="doIt" -->
        <!--部分常见的有别名-->
        <input v-on:keyup.enter="doIt" value='只有在keyCode是 13 时调用' type='button'>
      </li>
    </ul>
    <!-- 还有别的修饰符，这里就略过了 -->
  </section>
</template>

<script>
  export default {
    data() {
      return {
        num: 0
      };
    },
    methods: {
      doIt() {
        alert("你调用了我");
      },
      doMethod: function(param) {
        alert(param);
      },
      doMethod2(param) {
        alert(param);
      }
    }
  };
</script>

<style>
  .Event ul {
    margin: 0.3rem;
    margin-bottom: 0;
  }

  .Event .title {
    color: red;
  }
</style>
