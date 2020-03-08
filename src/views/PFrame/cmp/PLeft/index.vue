<template>
  <el-menu
    class="el-menu"
    router
    unique-opened
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <div v-for="(item,index) in routers" :key="index">
      <el-submenu :index="item.path" v-if="item.children.length>1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(citem,cindex) in item.children"
            :key="cindex"
            :index="item.path+'/'+citem.path"
          >{{citem.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item :index="item.path" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      routers: [],
    };
  },
  created() {
    this.filterRouter();
  },
  methods: {
    // 暂时在这里过滤路由，将来依赖借口返回值
    filterRouter() {
      this.routers = this.$router.options.routes.filter(item => {
        return item.isMeau;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.el-menu .el-submenu .el-menu-item {
  min-width: auto;
}
</style>