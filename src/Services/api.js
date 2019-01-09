import axios from 'axios';

/**
 * Получить все продукты.
 */
export const getProducts = () => {
    return axios.get('http://localhost:1234/product');
}

/**
 * Получить продукт по id.
 */
export const getProductById = (id) => {
    return axios.get('http://localhost:1234/product/' + id);
}

/**
 * Создать продукт.
 */
export const createProduct = (model) => {
    return axios.post('http://localhost:1234/product/create', model);
}

/**
 * Удалить продукт.
 */
export const deleteProduct = (id) => {
    return axios.delete('http://localhost:1234/product/' + id + '/delete');
}

/**
 * Обновить запись по id.
 */
export const updateProduct = (id, model) => {
    return axios.put('http://localhost:1234/product/' + id + '/update', model);
}
