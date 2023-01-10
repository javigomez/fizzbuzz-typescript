import {fizzbuzz} from '../core/fizzbuzz'

describe('fizzbuzz', () => {
	it('should return 1 as string when passing 1', () => {
		const result = fizzbuzz(1)
		const expected = 3;
		expect(result).toBe(expected);
	});
});
