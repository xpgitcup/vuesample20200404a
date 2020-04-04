import axios from 'axios'
import {Message} from 'element-ui';
import router from '../router'

axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use(success => {
    if (success.status && success.status == 200 && success.data.status == 500) {
        Message.error({message: success.data.msg})
        return;
    }
    if (success.data.msg) {
        Message.success({message: success.data.msg})
    }
    return success.data;
}, error => {
    switch (error.response.status) {
        case 401:
            Message.error({message: '尚未登录，请登录!'})
            router.replace('/');
            break;
        case 403:
            Message.error({message: '权限不足，请联系管理员!'})
            break;
        case 404:
            Message.error({message: '服务器被吃了( ╯□╰ )'})
            break;
        case 500:
            Message.error({message: '服务器被吃了( ╯□╰ )'})
            break;
        case 504:
            Message.error({message: '服务器被吃了( ╯□╰ )'})
            break;
        default:
            console.log(error)
            Message.error({message: '未知错误( ╯□╰ )'})
    }
    return;
})

let base = '';

export const postKeyValueRequestJson = (url, params) => {
    console.log('base=' + base);
    console.log('url=' + url);
    console.log(params);
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const postKeyValueRequest = (url, params) => {
    // console.log('base=' + base);
    // console.log('url=' + url);
    // console.log(params);
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }

            // console.log('转换完毕：' + url);
            // console.log('???');
            // console.log(ret);

            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
            // 'Content-Type': 'application/json'
        }
    });
}

export const postRequest = (url, params) => {
    // console.log("开始调用...");
    // console.log(url);
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}

export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}

export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        data: params
    })
}

export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        data: params
    })
}
