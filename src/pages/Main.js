import React from 'react';
import Octicon from 'react-octicon';

const Main = ({ children }) => {
	return(
		<div className="main-container">
			<nav className="navbar navbar-light bg-faded">
			  <Octicon mega name="mark-github"/>
	          <a className="navbar-brand" href="#">Github Issues Viewer</a>
	        </nav>
			<div className="container">
			   {children}
			</div>
		</div>
	); 
}

export default Main;