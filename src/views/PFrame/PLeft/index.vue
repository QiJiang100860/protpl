<template>
  <div class="left-wrapper">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    created(){
        console.log(this.$router.options.routes)
    }
}
</script>

<style lang="less" scoped>
.left-wrapper{
    position: fixed;
    width: 180px;
    top: 70px;
    left: 0;
    height: 100%;
    background: #000;
}
</style>