import apiClient from '../apiClient';

export const getProducts = () => {
    return apiClient.get('/products')
}

export const getProductDetail = (id) => {
    return apiClient.get(`/products/${id}`)
}