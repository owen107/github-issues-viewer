import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Comment from '../../src/components/Comment';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

describe('`Comment` Component', () => {
  
  const comments = [
	  {
      body: 'Hello World!',
      created_at: '2016-02-05T12:13:44Z',
      user: {
        login: 'owen107',
        html_url: 'https://github.com/owen107',
        avatar_url: 'https://avatars.githubusercontent.com/u/234659?v=3'
      }
    }
  ];

  const renderer = TestUtils.createRenderer();
  renderer.render(<Comment comments={comments} />);
  const result = renderer.getRenderOutput();
  console.log(result.props.children[0].props.children[1].props.children);

  it('should render the comments as `div` type and have `comments` classname', () => {
      const type = result.type;
      const className = result.props.className;
      expect(type).toBe('div');
      expect(className).toBe('comments container');
  });

  // it('should includes correct label child component', () => {
     
  //    const expected = '<a href="https://api.github.com/repos/npm/npm/labels/support" style={{background: \'#FF91AF\', borderRadius: 3, color: \'white\', marginRight: 5}} > support </a>';
  //    expect(result).toIncludeJSX(expected);
  // });

  // it('should render correct children name, color and url', () => {
  // 	 const childOne = result.props.children[0];
  // 	 const childTwo = result.props.children[1];

  // 	 expect(childOne.props.children).toEqual('support');
  // 	 expect(childOne.props.href).toEqual('https://api.github.com/repos/npm/npm/labels/support');
  // 	 expect(childOne.props.style.background).toEqual('#FF91AF');
  // 	 expect(childTwo.props.children).toEqual('windows');
  // 	 expect(childTwo.props.href).toEqual('https://api.github.com/repos/npm/npm/labels/windows');
  // 	 expect(childTwo.props.style.background).toEqual('#0b02e1');
  // });

});