//*****************************************************************
//  Reusable component for displaying a list of labels in 
//  both the issue default and details page
//*****************************************************************

import React from 'react';

const Label = ({labels}) => {
	const display = labels.length > 0 ? 'inline-block' : 'none';
	return(
		<span className="labels" style={{display: display}}>
		   {labels.map((label, index) => {
		   	  
		   	  const color = `#${label.color}`;
		   	  const fontColor = color !== '#FFFFFF' ? 'white' : 'black';
		   	  const labelUrl = `https://github.com/npm/npm/labels/${label.name}`;

		   	  return(
		   	  	 <a key={index} href={labelUrl} style={{background: color, color: fontColor}}>
		   	  	   {label.name}
		   	  	 </a>
		   	  );
		   })}
		</span>
	);
}

export default Label;