import {fizzbuzz} from '../core/fizzbuzz'

describe('fizzbuzz', () => {
	it('should return 1 as string when passing 1', () => {
		expect(fizzbuzz(1)).toBe('1');
	});
	it('should return 2 as string when passing 2', () => {
		expect(fizzbuzz(2)).toBe('2');
	});
	it('should return fizz when passing 3', () => {
		expect(fizzbuzz(3)).toBe('fizz');
	});
});
