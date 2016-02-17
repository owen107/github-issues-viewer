import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../../styles/pages/main.scss';

const Main = ({ children }) => {
	return(
		<div>
			<Header name="Github Issues Viewer" />
			<div className="main-container">
			   {children}
			</div>
			<Footer name="@ 2016" />
		</div>
	); 
}

export default Main;