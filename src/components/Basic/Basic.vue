<template>
  <section>
        <header><h1>{{ msg }}</h1></header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      msg: "开始学习 Vue2 basic"
    };
  }
};
</script>

<style>
h1 {
  color: red;
}
</style>
