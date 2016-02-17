import expect from 'expect';
import getDuration from '../../src/utils/TimeHelper';

describe('`getDuration` function', () => {

	it('should correctly get the duration if time is given', () => {
		const time = '2016-02-05T12:13:44Z';
		const actual = getDuration(time);
		const expected = '12 days ago';
		expect(actual).toEqual(expected);
	});
});