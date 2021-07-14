<template>
  <r-raster :option="option"></r-raster>
</template>

<script>
export default {
  data() {
    return {
      option: [
        {
          span: "3",
          style: "font-size:10px",
          text: "AAA",
          click: () => {},
        },
        {
          span: "6",
          style: "font-size:10px;color:blue",
          text: "AAAccc",
          click: () => {},
        },
      ],
    };
  },
};
</script>

<style lang="scss">
</style>