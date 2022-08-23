const API_BASE = 'https://restaurante.altogiro.net:3003/v1/menu';
const API_BASE_2 = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        // GET /api/categories
        const res = await fetch(API_BASE_2+'/categories');
        const json = await res.json();
        return json;
    },

    getProducts: async () => {
        // GEY /api/products
        const res = await fetch(API_BASE_2+'/products');
        const json = await res.json();
        return json;
    },

        getMenu: async () => {
        // GEY /api/products
        const res = await fetch(API_BASE);
        const json = await res.json();
        return json;
    }
};