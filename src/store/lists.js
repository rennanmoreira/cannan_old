const menuOptions = [{
	spaceName: 'Início',
	routeName: 'home',
	spaceId: '',
	listId: '',
	icon: 'mdi-home'
}, {
	spaceName: 'Tarefas',
	routeName: 'tarefa',
	spaceId: '55020473',
	listId: '192910044',
	icon: 'mdi-account'
}, {
	spaceName: 'Trabalho',
	routeName: 'trabalho',
	spaceId: '54979629',
	listId: '187027604',
	icon: 'mdi-account'
}]

const services = {
	getList: require('@/services/lists')['getList'],
	getListTasks: require('@/services/lists')['getListTasks'],
}

const getDefaultState = () => ({
	lists: [],
	menuOptions,
	currentList: null,
	currentMenuIndex: 0,
	currentListTasks: [],
	loading: {
		lists: false,
		currentList: false,
		currentListTasks: false
	}
})

const getters = {
	currentMenu: (state) => state.menuOptions[state.currentMenuIndex],
}

const mutations = {
	RESET_STATE(state) {
		Object.assign(state, getDefaultState())
	},
	SET_LISTS: (state, lists) => {
		state.lists = lists
	},
	ADD_LIST: (state, list) => {
		state.lists.push(list) // TODO: Verificar se esta salvando e propagando corretamente
	},
	SET_CURRENT_LIST: (state, list) => {
		state.currentList = list
	},
	SET_CURRENT_LIST_TASKS: (state, tasks) => {
		state.currentListTasks = tasks
	},
	SET_CURRENT_LIST_TASKS_REQUEST: (state, response) => {
		state.currentListTasks = response.tasks
	},
	SET_CURRENT_MENU_INDEX: (state, index) => {
		state.currentMenuIndex = index
	},
	CLEAN_CURRENT_LIST: (state) => {
		Object.assign(state.currentList, null)
		Object.assign(state.currentListTasks, [])
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
	requestGetList: ({ dispatch }, listId) => {
		dispatch('serviceRequest', {
			data: listId,
			service: 'getListTasks',
			loading: 'currentListTasks',
			mutation: 'SET_CURRENT_LIST_TASKS_REQUEST'
		})

		return dispatch('serviceRequest', {
			data: listId,
			service: 'getList',
			loading: 'currentList',
			mutation: 'SET_CURRENT_LIST'
		})
	}
}

export default {
	namespaced: true,
	state: getDefaultState(),
	getters,
	actions,
	mutations,
}