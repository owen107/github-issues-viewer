//*****************************************************************
//  Component for displaying a common footer sharing across both
//  the default and details pages
//*****************************************************************

import React from 'react';
import Octicon from 'react-octicon';

const Footer = ({name}) => {
	return(
		<footer className="main-footer">
		    <p><Octicon name="octoface"/> {name}</p>
		</footer>
	);
}

export default Footer;