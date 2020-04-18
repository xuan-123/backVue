<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">用户管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片 -->
        <el-card class="box-card">
            <div class="text item">     
                <div style="margin-top: 15px;">
                    <el-row :gutter="20">
                        <el-col :span="7">
                            <el-input placeholder="请输入内容" v-model="inputText"  class="input-with-select" clearable  @clear="clearText">
                                <el-button slot="append" icon="el-icon-search"></el-button>
                            </el-input>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary">添加用户</el-button>
                        </el-col>
                    </el-row>
                </div>
                   <!-- 表格 -->
                <el-table :data="userlist" border stripe>
                    <el-table-column type="index"></el-table-column>
                    <el-table-column label="姓名" prop="name"></el-table-column>
                    <el-table-column label="邮箱" prop="email"></el-table-column>
                    <el-table-column label="电话" prop="tel"></el-table-column>
                    <el-table-column label="角色" prop="role"></el-table-column>
                    <el-table-column label="状态" >
                        <template slot-scope="scope">
                            <el-switch v-model="scope.row.statu" @change="changeStatu(scope.row)" >
                            </el-switch>   
                        </template>
                        </el-table-column>
                        <el-table-column label="操作" prop="role">
                            <template slot-scope="">
                                <div ></div>
                                <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
                                <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
                                <el-tooltip  effect="dark" content="分配角色" placement="top" :enterable="false">
                                    <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
                                </el-tooltip>
                            </template>
                        </el-table-column>
                </el-table>
                        <div class="block">
                            <span class="demonstration">完整功能</span>
                            <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[1, 2, 5, 10]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                            </el-pagination>
                        </div>
            </div>
        </el-card>
     
        
    </div>
</template>
<script>
    export default{
        data(){
            return {
                inputText:'',
                 userlist:[
                    {
                        id:'1',
                        name:"xuan",
                        email:'1875666@12.com',
                        tel:'18734556666',
                        role:'超级管理员',
                        'statu':true
                    },
                    {
                    id:'2',
                    name:"lei",
                    email:'187566256@12.com',
                    tel:'13366262354',
                    role:'超级管理员',
                    'statu':true

                },
                {
                    id:'3',
                    name:"li",
                    email:'1875655266@12.com',
                    tel:'18734577788',
                    role:'超级管理员',
                    'statu':true

                }
            ]
            }
        },
        methods:{
            changeStatu(message){
                console.log(message)
                this.$message.success('更新状态为'+message.statu)
            },
            clearText(){
                this.$message.success('清空成功')
            }

        }
    }
</script>
<style lang="less" scoped>
.el-table{
    margin-top: 15px;
    font-size: 12px;
}
.el-breadcrumb{
    margin-bottom: 20px;
    font-size: 12px;
}
 .text {
    font-size: 12px;
  }
  .box-card{
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15) !important;
  }

</style>