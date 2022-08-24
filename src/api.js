const API_BASE = 'https://restaurante.altogiro.net:3003/v1/menu';

const API_BASE_2 = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        // GET /api/categories
        const res = await fetch(API_BASE_2+'/categories');
        const json = await res.json();
        return json;
    },

    getImage: async () => {
        const Image = [
            {
                img: './assets/segunda_copia_2.png',
                title: 'segunda-feira'
            },
            {
                img: './assets/terca_copia_2.png',
                title: 'terca-feira'
            },
            {
                img: '/assets/quarta_copia_2.png',
                tile: 'quarta-feira'
            },
            {
                img: '/assets/quinta_copia_2.png',
                tile: 'quarta-feira'
            },
            {
                img: '/assets/sexta_copia_2.png',
                tile: 'quarta-feira'
            }
        ];
    },

        getMenu: async () => {
        // GEY /api/products
        const res = await fetch(API_BASE);
        const json = await res.json();
        return json;
    }
};