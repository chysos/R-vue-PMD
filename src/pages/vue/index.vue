<template>
  <r-vue :options="options"></r-vue>
</template>

<script>
import options from './option.json'
export default {
  data() {
    return {
      options: options
    };
  },
};
</script>

<style lang="scss">
</style>