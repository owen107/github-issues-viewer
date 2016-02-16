import React from 'react';

const Main = ({ children }) => {
	return(
		<div className="main-container">
			<nav className="navbar navbar-light bg-faded">
	          <a className="navbar-brand" href="#">npm/npm</a>
	        </nav>
			<div className="container">
			   {children}
			</div>
		</div>
	); 
}

export default Main;