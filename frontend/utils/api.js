import axios from 'axios'

export const api = axios.create({
    baseURL: 'env',
    responseType: 'json'
})