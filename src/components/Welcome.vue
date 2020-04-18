<template>
    <div>
        <div>test</div>
        <button @click="lala">接口</button>
    </div>
</template>
<script>
 import {request} from '../network/request'
    export default{
        methods:{
            lala(){
                request({
                url: '/home/multidata'    
                }).then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>