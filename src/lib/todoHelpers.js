export const addTodo = (list, todo) => [...list, todo]

export const removeTodo = (list, id) => {
	const removeTodoIndex = list.findIndex(item => item.id === id)
	return [
		...list.splice(0, removeTodoIndex),
		...list.splice(removeTodoIndex+1)
	]
}

export const generateId = () => Math.floor(Math.random() * 10000);

export const findById = (id, list) => list.find(item => item.id === id)

export const toggleTodo = (todo) => ({ ...todo, isComplete: !todo.isComplete})

export const updateTodos = (todos, updatedTodo) => {
	const updatedTodoIndex = todos.findIndex( item => item.id === updatedTodo.id);
	return [
		...todos.slice(0, updatedTodoIndex),
		updatedTodo,
		...todos.slice(updatedTodoIndex+1)
	]
}

export const filterTodos = (list, route) => {
	switch(route) {
		case '/active':
			return list.filter(item => !item.isComplete)
		case '/complete':
			return list.filter(item => item.isComplete)
		default:
			return list
	}
}