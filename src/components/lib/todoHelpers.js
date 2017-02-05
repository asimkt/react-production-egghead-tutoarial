export const addTodo = (list, todo) => [...list, todo]

export const generateId = () => Math.floor(Math.random() * 10000);