const baseUrl = 'http://localhost:9000/todos'

export const loadTodos = () => {
	return fetch(baseUrl).then(res => res.json())
}