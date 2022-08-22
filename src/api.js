const API_BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        // GET /api/categories
        const res = await fetch(API_BASE+'/categories');
        const json = await res.json();
        return json;
    },

    getProducts: async () => {
        // GEY /api/products
        const res = await fetch(API_BASE+'/products');
        const json = await res.json();
        return json;
    }
};