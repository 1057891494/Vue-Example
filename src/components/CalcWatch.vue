<template>
  <section class='CalcWatch'>
    <ul>
      <li class='title'>--1.数据绑定--</li>
      <li><input type="button" @click="doChange" value='点击我改变数据' /></li>
      <li>Message: {{ msg }}</li>
      <li><span v-once>这个将不会改变: {{ msg }}</span></li>
    </ul>
    <ul>
      <li class='title'>--2.计算属性(默认getter方法)--</li>
      <li>原始数据:{{info}}</li>
      <li>使用计算属性反转后的数据:{{reversedInfo}}</li>
    </ul>
    <ul>
      <li class="title">--3.侦听属性--</li>
      <li><input type="text" v-model='firstName' /></li>
      <li><input type="text" v-model='lastName' /></li>
      <li>fullName:{{firstName}} {{lastName}}</li>
      <li>{{watchinfo}}</li>
    </ul>
    <ul>
      <li class='title'>--4.计算属性的setter方法--</li>
      <li><input type="button" @click='doChangeTarget' value='改变target' /></li>
      <li>targetnew：{{targetnew}}</li>
      <li>target：{{target}}</li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        msg: "初始化数据",
        info: "0->1->2",
        firstName: "yello",
        lastName: "xing",
        fullName: "yello xing",
        watchinfo: "试试修改上面二个输入框后再查看我",
        target: "默认目标"
      };
    },
    watch: {
      firstName: function(newval, oldval) {
        this.watchinfo =
          "firstName改变了，新值为：" + newval + ",旧值为：" + oldval;
      },
      lastName: function(newval, oldval) {
        this.watchinfo =
          "lastName改变了，新值为：" + newval + ",旧值为：" + oldval;
      }
    },
    methods: {
      doChange() {
        this.msg = "[" + new Date().valueOf() + "]修改后的数据";
      },
      doChangeTarget() {
        /*
          点击【改变target】按钮会修改targetnew的值，
          由于自定义的setter方法修改的是target的值，
          而targetnew取的值是target的，
          因此最终的结果是：
          target和targetnew的值都一起更新了
        */
        this.targetnew = "[" + new Date().valueOf() + "]改变目标";
      }
    },
    computed: {
      //这里声明了计算属性reversedInfo，默认只有getter方法
      reversedInfo: function() {
        return this.info
          .split("")
          .reverse()
          .join("");
      },
      //这里演示setter方法
      targetnew: {
        set: function(newValue) {
          this.target = "新目标为：" + newValue;
        },
        get: function() {
          return this.target;
        }
      }
    }
  };
</script>

<style>
  .CalcWatch ul {
    margin: 0.3rem;
    margin-bottom: 0;
  }

  .CalcWatch .title {
    color: red;
  }
</style>
