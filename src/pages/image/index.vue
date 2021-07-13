<template>
  <r-image :option="option"></r-image>
</template>

<script>
export default {
  data() {
    return {
      option: {
        src: require("@/static/icons/4.jpg"),
        width: "100%",
        height: "200px",
        shape: "square",
        borderRadius: 0,
        lazyLoad: true,
        loadingIcon: "photo",
        errorIcon: "error-circle",
        showLoading: true,
        showError: true,
        fade: true,
        webp: false,
        duration: "500ms",
        bgColor: "#f3f4f6",
      },
    };
  },
};
</script>

<style lang="scss">
</style>