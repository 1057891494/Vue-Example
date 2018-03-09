<template>
  <section>
    <begin-comp></begin-comp>
  </section>
</template>

<script>
export default {
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

</style>
