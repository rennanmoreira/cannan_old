import { HTTP_PROXY } from './index'

export const getList = listId =>
	HTTP_PROXY.get(`list/${listId}`)

export const getListTasks = listId =>
	HTTP_PROXY.get(`list/${listId}/task`)
