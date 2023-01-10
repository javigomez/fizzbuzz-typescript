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
	it('should return fizz when passing 3', () => {
		expect(fizzbuzz(5)).toBe('buzz');
	});
	it('should return fizzbuzz when passing 15', () => {
		expect(fizzbuzz(15)).toBe('fizzbuzz');
	});
	it('should return fizz when passing any number divisible by 3', () => {
		expect(fizzbuzz(6)).toBe('fizz');
	});
	it('should return buzz when passing any number divisible by 5', () => {
		expect(fizzbuzz(10)).toBe('buzz');
	});
	it('should return fizzbuzz when passing any number divisible by 15', () => {
		expect(fizzbuzz(30)).toBe('fizzbuzz');
	});
});
