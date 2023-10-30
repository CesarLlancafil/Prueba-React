import axios from "axios"

const BASE_URL = "https://fakestoreapi.com/"

export const instance = axios.create({
    baseURL: BASE_URL
})

const endpoint = "products"

export const characters = {
    getAll: function({page = 1}:{page?: number}){
        return instance.get(endpoint, {params:{
            page
        }})
    },
    getById: function({id}:{id: string | undefined}){
        return instance.get(`${endpoint}/${id}`)
    }
} 