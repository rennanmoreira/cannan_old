import { HTTP_PROXY } from './index'

// TODO: Colocar verificador de quais métodos estao sendo usados
export const getList = listId =>
	HTTP_PROXY.get(`list/${listId}`)

export const getListTasks = listId =>
	HTTP_PROXY.get(`list/${listId}/task?include_closed=true`)
