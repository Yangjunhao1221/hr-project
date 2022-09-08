import request from '@/utils/request'
//用户登录接口
export function loginAPI(data) {
    return request({
        url: '/sys/login',
        method: 'GET',
        data
    })
}

export function getInfo(token) {

}

export function logout() {

}
