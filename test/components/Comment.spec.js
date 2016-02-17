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
  
  it('should render the comments as `div` type and have `comments` classname', () => {
      const type = result.type;
      const className = result.props.className;
      expect(type).toBe('div');
      expect(className).toBe('container');
  });

  it('should include correct user avatar', () => {
     const expected = <img src="https://avatars.githubusercontent.com/u/234659?v=3" alt="Avatar for @owen107" />;
     expect(result).toIncludeJSX(expected);
  });

  it('should include correct user login and url', () => {
  	 const expected = <a href="https://github.com/owen107">owen107</a>;
  	 expect(result).toIncludeJSX(expected);
  });

});