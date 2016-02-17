import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Header from '../../src/components/Header';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('`Header` Component', () => {
	
	const renderer = TestUtils.createRenderer();
    renderer.render(<Header name='hello world' />);
    const result = renderer.getRenderOutput();
    
    it('should render the given string correctly', () => {
    	const actual = result.props.children.props.children[1].props.children;
    	expect(actual).toEqual('hello world');
    });

    it('should include JSX correctly', () => {
    	const expected = <a className="navbar-brand" href="#">hello world</a>
    	expect(result).toIncludeJSX(expected);
    });
});