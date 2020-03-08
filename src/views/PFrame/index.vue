<template>
  <div class="frame">
    <p-header v-if="frame.header"></p-header>
    <div class="container">
      <el-scrollbar>
        <p-left class="left-wrapper" v-if="frame.left"></p-left>
      </el-scrollbar>

      <div class="right-wrapper">
        <p-nav v-if="frame.nav"></p-nav>
        <p-bread v-if="frame.breadcrumb"></p-bread>
        <p-content></p-content>
      </div>
    </div>
    <p-footer v-if="frame.footer"></p-footer>
  </div>
</template>


<script>
import PLeft from "./cmp/PLeft";
import PHeader from "./cmp/PHeader";
import PNav from "./cmp/PNav";
import PBread from "./cmp/PBread";
import PContent from "./cmp/PContent";
import PFooter from "./cmp/PFooter";
export default {
  components: { PLeft, PHeader, PContent, PFooter, PNav, PBread },
  data() {
    return {
      frame: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const config = window.GCfg;
      console.log("框架全局配置参数", config);
      const { frame } = config;
      this.frame = frame;
    }
  }
};
</script>

<style lang="less" scoped>
.frame {
  height: 100%;
}
.container {
  display: flex;
  padding-top: 70px;
  height: 100%;
  padding-bottom: 40px;
  .el-scrollbar {
    width: 200px;
  }
  .right-wrapper {
    width: 100%;
    background: #f0f0f0;
  }
}
</style>