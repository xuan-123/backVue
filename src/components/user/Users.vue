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
                            <el-button type="primary" @click="addDialo=true">添加用户</el-button>
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
                        <!-- 添加用户对话框 -->
                        <el-dialog
                            title="提示"
                            :visible.sync="addDialo"
                            width="30%"
                            @close="addClose"
                            >
                        <el-form :model="addForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="username">
                                <el-input v-model="addForm.username"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="addForm.password"></el-input>
                            </el-form-item>
                            <el-form-item label="邮箱" prop="email">
                                <el-input v-model="addForm.email"></el-input>
                            </el-form-item>
                            <el-form-item label="手机" prop="tel">
                                <el-input v-model="addForm.tel"></el-input>
                            </el-form-item>
                        </el-form>

                            <span slot="footer" class="dialog-footer">
                                <el-button @click="addDialo = false">取 消</el-button>
                                <el-button type="primary" @click="addUser">确 定</el-button>
                            </span>
                        </el-dialog>
            </div>
        </el-card>
     
        
    </div>
</template>
<script>
    export default{
        data(){
            return {
                
                addForm:{
                    username:'',
                    password:'',
                    email:'',
                    tel:''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                     password: [
                        { required: true, message: '请输密码', trigger: 'blur' },
                   
    ],
                     email: [
                        { required: true, message: '请输邮箱', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    tel:[
                        
                        { required: true, message: '请输手机', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 11 个字符', trigger: 'blur' }

                        
                    ]
                },
                addDialo:'false',//控制添加用户的添加与隐藏
                inputText:'',
                userlist:[
                    {
                        'id':'1',
                        'name':"xuan",
                        'email':'1875666@12.com',
                        'tel':'18734556666',
                        'role':'超级管理员',
                        'statu':true
                    },
                    {
                    'id':'2',
                    'name':"lei",
                    'email':'187566256@12.com',
                    'tel':'13366262354',
                    'role':'超级管理员',
                    'statu':true

                },
                {
                    'id':'3',
                    'name':"li",
                    'email':'1875655266@12.com',
                    'tel':'18734577788',
                    'role':'超级管理员',
                    'statu':true
                },
               
            ]
            }
        },
        created(){
            let addUser = localStorage.getItem('addUser')
            this.userlist.push(JSON.parse(addUser))
        },
        methods:{
            changeStatu(message){
                console.log(message)
                this.$message.success('更新状态为'+message.statu)
            },
            clearText(){
                this.$message.success('清空成功')
            },
            addClose(){
                this.$refs.ruleForm.resetFields()
            },
            addUser(){
                this.$refs.ruleForm.validate(valid =>{
                    if(!valid) return 
                  
                   
               localStorage.setItem('addUser',JSON.stringify(this.addForm))
                let addUser = localStorage.getItem('addUser')
                // addUser.push(userPush)
                this.userlist.push(JSON.parse(addUser))
                })
                this.addDialo = false
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