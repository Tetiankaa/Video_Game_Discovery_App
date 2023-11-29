import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e4ec5a7b12f04884910065fd4063baf2'
    }
})

export {apiClient}