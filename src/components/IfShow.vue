<template>
  <section class='IfShow'>
    <ul>
      <li class="title">--1.v-if--</li>
      <li><input type="button" value="切换flag真和假【v-if v-else v-else-if】" @click='isFlag=!isFlag'></li>
      <li><input type="button" value="切换flag2真和假【v-if v-else v-else-if】" @click='isFlag2=!isFlag2'></li>
      <li>
        <div v-if='isFlag'>你看见这个说明flag为真</div>
        <div v-if='!isFlag'>你看见这个说明flag为假</div>
      </li>
      <li>
        <div v-if='isFlag'>你看见这个说明flag为真</div>
        <div v-else>你看见这个说明flag为假</div>
      </li>
      <li>
        <div v-if='isFlag'>你看见这个说明flag为真</div>
        <div v-else-if="isFlag2">你看见这个说明flag为假,flag2为真</div>
        <div v-else>你看见这个说明flag和flag2都为假</div>
      </li>
    </ul>
    <ul>
      <li class="title">--2.v-show--</li>
      <li><input type="button" value="切换flag3真和假【v-show】" @click='isFlag3=!isFlag3'></li>
      <li>
        <div v-show='isFlag3'>你看见这个说明flag3为真</div>
        <div v-show='!isFlag3'>你看见这个说明flag3为假</div>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isFlag: false,
        isFlag2: false,
        isFlag3: false
      };
    }
  }
</script>

<style>
  .IfShow ul {
    margin: 0.3rem;
    margin-bottom: 0;
  }

  .IfShow .title {
    color: red;
  }
</style>
