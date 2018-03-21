<template>
  <section>
    {{inputData|firstFilter}}
  </section>
</template>

<script>
export default {
  data() {
    return {
      inputData: 1234567
    };
  }
};
</script>
