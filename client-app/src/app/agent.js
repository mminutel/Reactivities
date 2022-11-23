import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const sleep = (delay) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

axios.interceptors.response.use(async response => {
    try {
        await sleep(1000);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody,),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
}

const Activities = {
    list: () => requests.get('/activities'),
    details: (id) => requests.get(`/activities/${id}`),
    create: (activity) => axios.post('activities', activity),
    update: (activity) => axios.put(`/activities/${activity.id}`, activity),
    delete: (id) => axios.delete(`activities/${id}`)
}

const agent = {
    Activities
}

export default agent;

