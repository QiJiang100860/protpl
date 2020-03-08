<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
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
  font-family: "微软雅黑", Arial, Helvetica, sans-serif;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
}
</style>
