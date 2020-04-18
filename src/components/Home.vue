<template>
<el-container class="home-container">
    <!-- 头部区 -->
    <el-header>
        <div class="headerName">
            <h3>后台管理系统</h3>
        </div>
        <el-button class="goBack" @click="tu">退出</el-button>
    </el-header>
    <el-container>
        <!-- 侧边栏 -->
        <el-aside :width="iscollasp?'64px':'200px'">
            <div class="toggle-button" @click="toggleSelect">|||</div>
            <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#409eff"
            unique-opened
            :collapse="iscollasp"
            :collapse-transition="false"
            router
            :default-active="activePath"
            >
            <!-- 一级菜单1  -->
            <el-submenu :index="list.id+''" v-for="(list,index) in menulist" :key="index">
                <template slot="title">
                <i :class="list.iconfont+''"></i>
                <span>{{list.authName}}</span>
                </template>
            <el-menu-item :index="listitem.path +''" v-for="listitem in list.children" :key="listitem.id"
                @click="saveNavState(listitem.path)"
            >
                 <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{listitem.authName}}</span>
                </template>
            </el-menu-item>
        </el-submenu>
  
 
    </el-menu>
        </el-aside>
        <!-- 主体 -->
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</el-container>

</template>
<script>
    export default{
        created(){
            this.activePath = window.sessionStorage.getItem('saveNavState')

        },
        data(){
            return {
               iscollasp:true,
               activePath:'',
                menulist:[
                    {
                        id:'00001',
                        authName:'用户管理',
                        iconfont:'el-icon-user-solid',
            
                        children:[
                            {
                                id:10001,
                                authName:'用户列表',
                                path:'userlist',

                            }
                        ]
                    },
                     {
                        id:'00002',
                        iconfont:'el-icon-s-tools',
                        authName:'权限管理',
                  
                        children:[
                            {
                                id:20001,
                                authName:'角色列表',
                                path:'jslist',
                            },
                            {
                                id:20002,
                                authName:'权限列表',
                                path:'authlist'

                            }
                        ]
                    },
                     {
                        id:'00003',
                        iconfont:'el-icon-s-goods',
                        authName:'商品管理',
                  
                        children:[
                            {
                                id:30001,
                                authName:'商品列表',
                                path:'goodlist',
                            },
                            {
                                id:30002,
                                authName:'分类参数',
                                path:'getometa'
                            },
                            {
                                id:30003,
                                authName:'商品分类',
                                path:'goodgeto'
                            }
                        ]
                    },
                    {
                        id:'00004',
                        iconfont:'el-icon-s-order',
                        authName:'订单管理',
                    
                        children:[
                            {
                                id:40001,
                                authName:'订单分类',
                                path:'ordergeto'
                            }
                        ]
                    },
                    {
                        id:'00005',
                        iconfont: 'el-icon-s-data',
                        authName:'数据统计',
                    
                        children:[
                            {
                                id:50001,
                                authName:'数据详情',
                                path:'datadetail'
                            }
                        ]
                    }
                ]
            }
        },
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
            },
            //点击展开侧边栏
            toggleSelect(){
                this.iscollasp = !this.iscollasp
            },
            //保存链接的激活状态
            saveNavState(activePath){
                window.sessionStorage.setItem('activePath',activePath)
                this.activePath = activePath
            }
        }
    }
</script>
<style lang="less" scoped>
.toggle-button{
    width: 100%;
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor:pointer
}
.headerName{
    color: #fff;
    float: left;
}
.goBack{
    margin-top: 10px;
    float:right;
}
.home-container{
    height: 100%;
}
.el-header{
    background: #373d41;
}

.el-aside{
    background-color: #333744;
    .el-menu{
        border-right: none;
    }
}
.el-main{
    background-color: #eaedf1;
}
</style>