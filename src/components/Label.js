import React from 'react';
import '../../styles/main.scss';

const Label = ({labels}) => {
	return(
		<span className="labels">
		   {labels.map((label, index) => {
		   	  let color = `#${label.color}`;
		   	  return(
		   	  	 <a key={index} href={label.url} style={{background: color, color: 'white', marginRight: 5, borderRadius: 3}}>
		   	  	   {label.name}
		   	  	 </a>
		   	  );
		   })}
		</span>
	);
}

export default Label;