import Vue from 'vue'
import VueRouter from 'vue-router'
//创建路由组件
//路由懒加载方式：
const Login = () => import('../components/Login')
const Home = ()=> import('../components/Home')
const Welcome = () => import('../components/Welcome')
const Uesrs = () =>import('../components/user/Users')
const JsList = ()=>import('../components/auth/JsList')
const AuthList = ()=>import('../components/auth/AuthList')
const GetoMeta = () => import('../components/goods/GetoMeta')
const GoodGeto = () => import('../components/goods/GoodGeto')
const Goodlist = () => import('../components/goods/GoodList')
const OrderGeto =()=>import('../components/ordergeto/OrderGeto')
const DataDetail = () => import('../components/data/DataDetail')
//通过Vue.use(插件),安装插件
Vue.use(VueRouter)
//创建VueRouter对象
const routes = [
    //配置路由映射，组件和路径映射关系 
    {
        path:'',
        redirect:"/login"
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home,
        // redirect: '/welcome',
        children:[
            {
                path:'welcome',
                component: Welcome
            },
            {
                path:'userlist',
                component: Uesrs
            },
            {
                path:'jslist',
                component: JsList
            },
            {
                path:'authlist',
                component:AuthList
            },
            {
                path:'getometa',
                component: GetoMeta
            },
            {
                path:'goodgeto',
                component:GoodGeto
            },
            {
                path:'goodlist',
                component: Goodlist
            },
            {
                path:'ordergeto',
                component: OrderGeto
            },
            {
                path:'datadetail',
                component:DataDetail
            },
            {
                path:'',
                redirect:'Welcome'
            }
            
        ]
    },
   
   
]
const router =new VueRouter({
    routes
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
    //to 将要访问的路径 
    //from 代表从哪个路径跳转
    //next 是一个函数，表示放行
    if(to.path==='/login') return next()
    //从缓存中取出token
    const tokenStr = window.sessionStorage.getItem('token')
    //如果缓存中没有token,代表没有登录，next到登录页
    if(!tokenStr) return next('/login')
    next()
})


//将router对象传入到Vue实例 ，先导出
export default router