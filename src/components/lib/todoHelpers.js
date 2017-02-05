export const addTodo = (list, todo) => [...list, todo]

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