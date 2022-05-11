const services = {
	getList: require('@/services/lists')['getList']
}

const getDefaultState = () => ({
	lists: [],
	currentList: null,
	loading: {
		lists: false,
		currentList: false
	}
})

const getters = {
	lists: (state) => state.lists,
	currentList: (state) => state.currentList
}

const mutations = {
	RESET_STATE(state) {
		Object.assign(state, getDefaultState())
	},
	SET_LISTS: (state, lists) => {
		state.lists = lists
	},
	SET_CURRENT_LIST: (state, list) => {
		state.currentList = list
	},
	START_LOADING: (state, property) => {
		state.loading[property] = true
	},
	STOP_LOADING: (state, property) => {
		state.loading[property] = false
	},
}

const actions = {
	serviceRequest: ({ commit }, { service, data, mutation, loading = '' }) => {
		loading && commit('START_LOADING', loading)

		return services[service](data).then(res => {
			commit(mutation, res.data)
			return Promise.resolve(res)
		}).catch(error => {
			console.error(`[CANNAN] Erro no serviço ${service}`, error)
			return Promise.reject(error)
		}).finally(() =>
			loading && commit('STOP_LOADING', loading)
		)
	},
	requestGetList: ({ dispatch }, listId) => dispatch('serviceRequest', {
		data: listId,
		service: 'getList',
		loading: 'currentList',
		mutation: 'SET_CURRENT_LIST'
	})
}

export default {
	namespaced: true,
	state: getDefaultState(),
	getters,
	actions,
	mutations,
}