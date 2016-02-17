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

		   	  return(
		   	  	 <a key={index} href={label.url} style={{background: color, color: fontColor}}>
		   	  	   {label.name}
		   	  	 </a>
		   	  );
		   })}
		</span>
	);
}

export default Label;