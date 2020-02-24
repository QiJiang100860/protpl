<template>
  <div id="app">
    <p-frame></p-frame>
  </div>
</template>

<script>
import PFrame from "@/views/PFrame";
export default {
  components: { PFrame },
  data() {
    return {
      test: "123"
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
</style>
