import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Footer from '../../src/components/Footer';
import expectJSX from 'expect-jsx';
import Octicon from 'react-octicon';
expect.extend(expectJSX);

describe('`Footer` Component', () => {
	
	const renderer = TestUtils.createRenderer();
    renderer.render(<Footer name='github @2016' />);
    const result = renderer.getRenderOutput();
    
    it('should render the given string correctly', () => {
    	const actual = result.props.children.props.children[2];
    	expect(actual).toEqual('github @2016');
    });

    it('should include JSX correctly', () => {
    	const expected = <p><Octicon name="octoface"/> github @2016</p>
    	expect(result).toIncludeJSX(expected);
    });
});