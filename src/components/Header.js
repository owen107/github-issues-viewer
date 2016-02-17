import React from 'react';
import Octicon from 'react-octicon';

const Header = ({name}) => {
	return(
		<header className="main-header">
		  <h2>
		    <Octicon mega name="mark-github"/>
            <a className="navbar-brand" href="#">{name}</a>
          </h2>
        </header>
	);
}

export default Header;