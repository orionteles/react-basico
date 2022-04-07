import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': ''
    }
})

export default apiFilmes