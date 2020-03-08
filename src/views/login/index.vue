<template>
    <div>
        <el-button @click="login">登陆</el-button>
    </div>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push({path:"/home"})
        }
    }
}
</script>