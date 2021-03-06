import {addTodo, findById, toggleTodo, updateTodos, removeTodo, filterTodos} from './todoHelpers'

test('addTodo should add the passed todo the list', () => {
	const startTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false}
	]

	const newTodo = { id: 3, name: 'Deploy!!', isComplete: false}

	const expected = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	const result = addTodo(startTodos, newTodo);

	expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
	const startTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false}
	]

	const newTodo = { id: 3, name: 'Deploy!!', isComplete: false}

	const expected = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	const result = addTodo(startTodos, newTodo);

	expect(result).not.toBe(startTodos);
});

test('removeTodo should remove the passed todo from the list', () => {
	const startTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	const expected = [
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	const result = removeTodo(startTodos, 1);

	expect(result).toEqual(expected);
});

test('removeTodo should not mutate the existing todo array', () => {

	const startTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	const expected = [
		{ id: 1, name: 'Learn JSX', isComplete: true},
		{ id: 2, name: 'Build App', isComplete: false}
	]

	const result = removeTodo(startTodos, 3);

	expect(result).not.toBe(startTodos);
});


test('findById should return expected item from array', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]
	const expectedTodo = 
		{ id: 3, name: 'Deploy!!', isComplete: false}

	// Act
	const result = findById(3, todos);

	// expect
	expect(result).toEqual(expectedTodo);
});

test('toggleTodo should toggle the isComplete property of a todo', () => {
	// Arrange
	const todo = 
		{ id: 3, name: 'Deploy!!', isComplete: false}
	const toggledTodo = 
		{ id: 3, name: 'Deploy!!', isComplete: true}

	// Act
	const result = toggleTodo(todo);

	// expect
	expect(result).toEqual(toggledTodo);
});

test('toggleTodo should not mutate original todo', () => {
	// Arrange
	const todo = 
		{ id: 3, name: 'Deploy!!', isComplete: false}
	const toggledTodo = 
		{ id: 3, name: 'Deploy!!', isComplete: true}

	// Act
	const result = toggleTodo(todo);

	// expect
	expect(result).not.toBe(todo);
});

test('updateTodos should update an item by id', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]
	const updatedTodo =
		{ id: 2, name: 'Build App', isComplete: true}
	const updatedTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: true},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	// Act
	const result = updateTodos(todos, updatedTodo);

	// expect
	expect(result).toEqual(updatedTodos);
});

test('updateTodos should not mutate original array', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]
	const updatedTodo =
		{ id: 2, name: 'Build App', isComplete: true}
	const updatedTodos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: true},
		{ id: 3, name: 'Deploy!!', isComplete: false}
	]

	// Act
	const result = updateTodos(todos, updatedTodo);

	// expect
	expect(result).not.toBe(todos);
});

test('filterTodos return all items for \'/\'', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: true}
	]
	// Act
	const result = filterTodos(todos, '/');

	// expect
	expect(result).toEqual(todos);
});

test('filterTodos return complete items for \'/complete\'', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: true}
	]
	const expected = [
		{ id: 3, name: 'Deploy!!', isComplete: true}
	]
	// Act
	const result = filterTodos(todos, '/complete');

	// expect
	expect(result).toEqual(expected);
});

test('filterTodos return incomplete items for \'/active\'', () => {
	// Arrange
	const todos = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false},
		{ id: 3, name: 'Deploy!!', isComplete: true}
	]
	const expected = [
		{ id: 1, name: 'Learn JSX', isComplete: false},
		{ id: 2, name: 'Build App', isComplete: false}
	]
	// Act
	const result = filterTodos(todos, '/active');

	// expect
	expect(result).toEqual(expected);
});