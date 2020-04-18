<template>
    <div class="login">
        <div class="login_box">
            <div class="avatar">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginRef" :model="loginForm" :rules="rules"  label-width="0px" class="ipt">
                <!-- 用户名 -->
                <el-form-item  prop='username'>
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop='password'>
                    <el-input type="password" v-model="loginForm.password" prefix-icon="el-icon-view"></el-input>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLogin">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                loginForm:{
                    username:'',
                    password:''
                },
                 rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
                    ],
                    password:[
                         { required: true, message: '请输入密码', trigger: 'blur' },
                         { min: 3, max: 16, message: '长度在 3 到 16 个字符', trigger: 'blur' }
                    ]
                 }
            }
        },

        methods:{
            //登录表单重置
            resetLogin(){
                this.$refs.loginRef.resetFields()
          
            },
            login(){
                this.$refs.loginRef.validate((valid)=>{
                    if(!valid) return;
                    this.$axios({
                        method:'post',
                        url:'http://123.207.32.32:3000/login',
                        data:{
                           code:this.loginForm
                        }   
                    }).then(res=>{
                        //拿到token
                       const token = res.data.token
                       //将token保存到本地
                       window.sessionStorage.setItem('token',token)
                       this.$message.success('登录成功');
                       //登录成功跳转到后台主页
                       this.$router.push('/home')
                    })
                })
               
            }
        }
    }
</script>
<style lang="less" scoped>
   .login{
       background-color: #2b4b6b;
       height: 100%;
   }
   .login_box{
       width: 450px;
       height: 300px;
       background-color: #fff;
       border-radius: 3px;
       position: absolute;
       left: 50%;
       top: 50%;
       transform:translate(-50%,-50%)
   }
   .avatar{
       width: 130px;
       height: 130px;
       border: 1px solid #ccc;
       border-radius: 50%;
       padding: 10px;
       box-shadow: 0 0 10px #ccc;
       position: absolute;
       left: 50%;
       transform: translate(-50%,-50%);
       background-color: #fff;
       img{
       width: 100%;
       height: 100%;
       border-radius: 50%;
       background-color: #eee;
    }  
   }
   .ipt{
       position: absolute;
       bottom:0;
       width: 100%;
       padding: 0 20px;
       box-sizing: border-box;
   }
   .btn{
       display:flex;
       justify-content: flex-end;
   }
    
  
</style>