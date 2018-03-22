<template>
  <section>
    <hr />
    原始数据：
    {{inputData}}
    <hr />
    金额大写：
    {{inputData|firstFilter}}
    <hr />
    中文汉字一：
    {{inputData|numberChineseFtr(true)}}
    <hr />
    中文汉字二：
    {{inputData|numberChineseFtr(false)}}
    <hr />
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputData: 520
    };
  }
};
</script>
