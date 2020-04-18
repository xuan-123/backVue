import axios from 'axios'
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/h8',
    })
    instance.interceptors.request.use(config => {
        //为请求头对象,添加Token验证的Authorization字段
        config.headers.Authorization = window.sessionStorage.getItem('token')
        console.log(config)
        return config
    })

    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    

    return instance(config)
}
