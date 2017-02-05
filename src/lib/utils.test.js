import {partial} from './utils'

const add = (a,b) => a + b;
const multiplyAll = (a, b, c) => a * b * c;

test('partial applies the first argument AOT', () => {
	const addOne = partial(add, 1);

	const result = addOne(2)

	expect(result).toBe(3);
})

test('partial should apply any number of arguments', () => {
	const multiplyWithTenAndTwo = partial(multiplyAll, 10, 2);

	const result = multiplyWithTenAndTwo(3);

	expect(result).toBe(60);
})