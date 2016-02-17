import React from 'react';
import Octicon from 'react-octicon';
import '../../styles/pages/main.scss';

const Main = ({ children }) => {
	return(
		<div>
			<header className="main-header">
			  <h2>
			    <Octicon mega name="mark-github"/>
	            <a className="navbar-brand" href="#">Github Issues Viewer</a>
	          </h2>
	        </header>
			<div className="main-container">
			   {children}
			</div>
			<footer className="main-footer">
			    <p><Octicon name="octoface"/> @ 2016</p>
			</footer>
		</div>
	); 
}

export default Main;