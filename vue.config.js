module.exports = {
	transpileDependencies: [
		'vuetify'
	],
	pwa: {
		name: 'Cannan',
		themeColor: '#1A237E',
		msTileColor: '#1A237E',
		manifestOptions: {
			background_color: '#1A237E'
		}
	},
	devServer: {
		port: 9000,
	},
}
