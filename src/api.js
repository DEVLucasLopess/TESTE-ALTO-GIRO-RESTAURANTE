const API_BASE = 'https://restaurante.altogiro.net:3003/v1'

export default {
	getCategories: async () => {
		// GET /api/categories
		const json = [
			{
				id: 1,
				name: 'segunda-feira',
				image: './assets/segunda_copia_2.png',
			},
			{
				id: 2,
				name: 'terça-feira',
				image: './assets/terca_copia_2.png',
			},
			{
				id: 3,
				name: 'quarta-feira',
				image: './assets/quarta_copia_2.png',
			},
			{
				id: 4,
				name: 'quinta-feira',
				image: './assets/quinta_copia_2.png',
			},
			{
				id: 5,
				name: 'sexta-feira',
				image: './assets/sexta_copia_2.png',
			},
		]
		return json
	},

	getMenu: async (search) => {
		// GEY /api/products
		let fields = {}

		if (search != '') {
			fields.search = search
		}

		let queryString = new URLSearchParams(fields).toString()

		const res = await fetch(API_BASE + '/menu?' + queryString)
		const json = await res.json()
		return json
	},
}
