import expect from 'expect';
import parseAtMention from '../../src/utils/ParseHelper';

describe('`parseAtMention` function', () => {

	it('should correctly parse @mention as github user link', () => {
		const string = "How are you? @owen107";
		const actual = parseAtMention(string);
		const expected = 'How are you? [@owen107](https://github.com/owen107)';
		expect(actual).toEqual(expected);
	});
});