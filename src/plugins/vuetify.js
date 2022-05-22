import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
	theme: {
		options: {
			customProperties: true,
		},
		themes: {
			light: {
				primary: colors.indigo.darken4,
				// secondary: '#424242',
				// accent: '#82B1FF',
				// error: '#FF5252',
				// info: '#2196F3',
				// success: '#4CAF50',
				// warning: '#FFC107'
			},
			dark: {
				primary: colors.indigo.darken4,
			}
		},
	},
	lang: {
		locales: { pt },
		current: 'pt',
	},
})
