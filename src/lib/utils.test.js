import {partial, pipe} from './utils'

const add = (a,b) => a + b
const multiplyAll = (a, b, c) => a * b * c
const inc = (a) => a + 1
const dbl = (a) => a * 2

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

test('pipe passes the inc to dbl', () => {
	const incThenDbl = pipe(inc, dbl);

	const result = incThenDbl(2);

	expect(result).toBe(6);
})
test('pipe passes the dbl to inc', () => {
	const dblThenInc = pipe(dbl, inc);

	const result = dblThenInc(2);

	expect(result).toBe(5);
})
test('pipe works for multiple functions', () => {
	const incThenDblThenAddAndInc = pipe(add, inc, dbl, inc);

	const result = incThenDblThenAddAndInc(2, 1);

	expect(result).toBe(9);
})