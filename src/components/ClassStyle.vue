<template>
  <section class='ClassStyle'>
    <ul>
      <li class='title'>--1.绑定 HTML Class--</li>
      <li class='little-title'>#对象语法</li>
      <li><input type="button" @click='toggleFlag' value='切换flag的真假按钮'></li>
      <li>
        <div v-bind:class="{blueclass:flag}">flag为真的时候，字是蓝色</div>
      </li>
      <li class="little-title">#数组对象</li>
      <!--下面的[class1,class2]会取data的值替换-->
      <li>
        <div v-bind:class='[class1,class2]' onclick='alert($$(this).class())'>点击我查看class</div>
      </li>
      <li><input type="button" @click='isDoIt=!isDoIt' value='切换isDoIt的真假按钮'></li>
      <!--注意参数是字符串还是变量，和对象语法对比一下-->
      <li>
        <div v-bind:class='[isDoIt?"isDoItTrue":"isDoItFalse"]' onclick='alert($$(this).class())'>点击我查看class</div>
      </li>
      <li>
        <div v-bind:class='[isDoIt?class1:class2]' onclick='alert($$(this).class())'>点击我查看class</div>
      </li>
      <!--组件的渲染类似，这里先跳过-->
    </ul>
    <ul>
      <li class='title'>--2.绑定内联样式--</li>
      <li class="little-title">#对象语法</li>
      <li>
        <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }" onclick='alert($$(this).attr("style"))'>点击我查看sytle</div>
      </li>
      <li>
        <div v-bind:style="styleObject" onclick='alert($$(this).attr("style"))'>点击我查看sytle</div>
      </li>
      <li class="little-title">#数组语法</li>
      <li>
        <div v-bind:style="[styleObject,styleObject2]" onclick='alert($$(this).attr("style"))'>点击我查看sytle</div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        flag: false,
        class1: "classname1",
        class2: "classname2",
        isDoIt: false,
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
          color: 'red',
          fontSize: '13px'
        },
        styleObject2: {
          backgroundColor: 'gray'
        }
      };
    },
    methods: {
      toggleFlag() {
        this.flag = !this.flag;
      }
    }
  };
</script>

<style>
  .ClassStyle .blueclass {
    color: blue;
  }

  .ClassStyle .little-title {
    color: brown;
    line-height: 2em;
  }

  .ClassStyle ul {
    margin: 0.3rem;
    margin-bottom: 0;
  }

  .ClassStyle .title {
    color: red;
  }
</style>
