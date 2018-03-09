<template>
  <section class='ct'>
    <begin-comp toChildData='这是父组件的数据' v-bind:dynamitData='pData'></begin-comp>
    <!--注册了increment事件-->
    <button-counter v-on:increment="incrementTotal"></button-counter>
    pCount={{pCount}}
    <input type="button" value="修改【默认的来自父组件的值】" @click='doChg'>
  </section>
</template>

<script>
export default {
  data() {
    return {
      pData: "默认的来自父组件的值",
      pCount: -10
    };
  },
  methods: {
    doChg() {
      this.pData = "[默认的来自父组件的值]" + new Date().valueOf();
    },
    incrementTotal() {
      this.pCount++;
    }
  },
  beforeCreate: function() {
    console.debug("Componet.vue目前状态：beforeCreate");
  },
  created: function() {
    console.debug("Componet.vue目前状态：created");
  },
  beforeMount: function() {
    console.debug("Componet.vue目前状态：beforeMount");
  },
  mounted: function() {
    console.debug("Componet.vue目前状态：mounted");
  },
  beforeUpdate: function() {
    console.debug("Componet.vue目前状态：beforeUpdate");
  },
  updated: function() {
    console.debug("Componet.vue目前状态：updated");
  },
  beforeDestroy: function() {
    console.debug("Componet.vue目前状态：beforeDestroy");
  },
  destroyed: function() {
    console.debug("Componet.vue目前状态：destroyed");
  }
};
</script>

<style>
.ct .title {
  color: red;
  margin: 0.3rem;
  margin-bottom: 0;
}
</style>
