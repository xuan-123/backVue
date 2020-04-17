<template>
    <el-button @click="tu">退出</el-button>
</template>
<script>
    export default{
        methods:{
            tu(){
                  this.$confirm('是否退出当前用户','提示',{
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    type:'warning'
                }).then(()=>{
                    this.$message({
                        type:'success',
                        message:'已退出,请重新登录'
                    });
                     window.sessionStorage.clear()
                    this.$router.push('/login')
                }).catch(()=>{
                    this.$message({
                        type:'info',
                        message:'已取消退出'
                    })
                })
            }
        }
    }
</script>