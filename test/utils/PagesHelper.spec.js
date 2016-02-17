import expect from 'expect';
import getTotalPage from '../../src/utils/PagesHelper';

describe('`getTotalPage` function', () => {

	it('should correctly get the total page number if the page is not the last page', () => {

		const string = '<https://api.github.com/repositories/321278/issues?per_page=25&page=78>; rel="next", <https://api.github.com/repositories/321278/issues?per_page=25&page=78>; rel="last", <https://api.github.com/repositories/321278/issues?per_page=25&page=1>; rel="first", <https://api.github.com/repositories/321278/issues?per_page=25&page=76>; rel="prev"';

		const actual = getTotalPage(string);
		const expected = 78;
		expect(actual).toEqual(expected);
	});

	it('should correctly get the total page number if the page is the last page', () => {
		
		const string = '<https://api.github.com/repositories/321278/issues?per_page=25&page=1>; rel="first", <https://api.github.com/repositories/321278/issues?per_page=25&page=99>; rel="prev"';
	    const actual = getTotalPage(string);
		const expected = 100;
		expect(actual).toEqual(expected);
	});
});