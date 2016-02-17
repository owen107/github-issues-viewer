import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Label from '../../src/components/Label';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('`Label` Component', () => {
  
  const labels = [
	{
      url: "https://api.github.com/repos/npm/npm/labels/support",
      name: "support",
      color: "FF91AF"
    },
    {
      url: "https://api.github.com/repos/npm/npm/labels/windows",
      name: "windows",
      color: "0b02e1"
    }
  ];

  const renderer = TestUtils.createRenderer();
  renderer.render(<Label labels={labels} />);
  const result = renderer.getRenderOutput();

  it('should render the labels as `span` type', () => {
    const actual = result.type;
    expect(actual).toBe('span');
  });

  it('should includes correct label child component', () => {
     
     const expected = '<a href="https://api.github.com/repos/npm/npm/labels/support" style={{background: \'#FF91AF\', borderRadius: 3, color: \'white\', marginRight: 5}} > support </a>';
     expect(result).toIncludeJSX(expected);
  });

  it('should render correct children name, color and url', () => {
  	 const childOne = result.props.children[0];
  	 const childTwo = result.props.children[1];

  	 expect(childOne.props.children).toEqual('support');
  	 expect(childOne.props.href).toEqual('https://api.github.com/repos/npm/npm/labels/support');
  	 expect(childOne.props.style.background).toEqual('#FF91AF');
  	 expect(childTwo.props.children).toEqual('windows');
  	 expect(childTwo.props.href).toEqual('https://api.github.com/repos/npm/npm/labels/windows');
  	 expect(childTwo.props.style.background).toEqual('#0b02e1');
  });

});