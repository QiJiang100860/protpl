<template>
  <div class="frame">
    <p-left v-if="left"></p-left>
    <p-header v-if="header"></p-header>
    <p-nav v-if="nav"></p-nav>
    <p-bread v-if="breadcrumb"></p-bread>
    <p-content></p-content>
    <p-footer v-if="footer"></p-footer>
  </div>
</template>


<script>
import PLeft from "./PLeft";
import PHeader from "./PHeader";
import PNav from "./PNav";
import PBread from "./PBread";
import PContent from "./PContent";
import PFooter from "./PFooter";
import { frame } from "../../../public/globalConfig.js";
export default {
  components: { PLeft, PHeader, PContent, PFooter, PNav, PBread },
  data() {
    return {
      left: null,
      header: null,
      footer: null,
      nav: null,
      breadcrumb: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const { left, header, footer, nav, breadcrumb } = frame;
      this.left = left;
      this.header = header;
      this.footer = footer;
      this.nav = nav;
      this.breadcrumb = breadcrumb;
    }
  }
};
</script>

<style lang="less" scoped>
.frame {
  height: 100%;
}
</style>