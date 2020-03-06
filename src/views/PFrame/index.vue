<template>
  <div class="frame">
    <p-left></p-left>
    <p-header></p-header>
    <p-nav></p-nav>
    <p-bread></p-bread>
    <p-content></p-content>
    <p-footer></p-footer>
  </div>
</template>


<script>
import PLeft from "./PLeft";
import PHeader from "./PHeader";
import PNav from "./PNav";
import PBread from "./PBread";
import PContent from "./PContent";
import PFooter from "./PFooter";
export default {
  components: { PLeft, PHeader, PContent, PFooter, PNav, PBread },
  data() {
    return {
      
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const config = window.GCfg
      console.log(config)
    }
  }
};
</script>

<style lang="less" scoped>
.frame {
  height: 100%;
}
</style>