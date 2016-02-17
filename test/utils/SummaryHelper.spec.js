import expect from 'expect';
import getSummary from '../../src/utils/SummaryHelper';

describe('`getSummary` function', () => {
    
    const maxLength = 140;
    
	it('should return same summary if length is less than 140 characters', () => {
		const actual = getSummary('Hello World!', maxLength);
		const expected = 'Hello World!';
		expect(actual).toEqual(expected);
	});

	it('should return empty string if summary is `null`', () => {
		const actual = getSummary(null, maxLength);
		expect(actual).toEqual("");
	});

	it('should correctly truncate summary if 140th character is a space', () => {

		const string = "The examples/ folder has my example projects and I'd like to run them using the most recent my-package. The src/ folder has my-package file and";
		const actual = getSummary(string, maxLength);
		const expected = "The examples/ folder has my example projects and I'd like to run them using the most recent my-package. The src/ folder has my-package file..."
		expect(actual).toEqual(expected);
	});

	it('should correctly truncate summary if 140th character is not a space', () => {

		const string = "The examples/ folder has my example projects and I'd like to run them using the most recent my-package. The src/ folder has my-package files and";
		const actual = getSummary(string, maxLength);
		const expected = "The examples/ folder has my example projects and I'd like to run them using the most recent my-package. The src/ folder has my-package..."
		expect(actual).toEqual(expected);
	});
});