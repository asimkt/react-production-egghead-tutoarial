import {addTodo} from './todoHelpers'

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