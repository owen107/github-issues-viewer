import React from 'react';
import Label from './Label';
import Octicon from 'react-octicon';
import GetDuration from '../utils/TimeHelper';
import ParseAtMention from '../utils/ParseHelper';
const marked = require('marked');

const IssueDetails = ({details}) => {

	return(
		<div className="issue-details">
		   {details.map((detail, index) => {

		   	   const duration = GetDuration(detail.created_at);
		   	   const fullSummary = ParseAtMention(detail.body);

		   	   return(
		   	   	    <div className="container" key={index} style={{marginTop: 20}}>
		   	   	        <h2><span>{detail.number}</span> {detail.title}</h2>
					    <p>
					      <span className="label label-success" style={{textTransform: 'capitalize', marginRight: 10}}><Octicon name="info" /> {detail.state}</span>
					      <a href={detail.user.html_url}>{detail.user.login}</a> opened this issue {duration} - {detail.comments} comments 
					      <Label labels={detail.labels} />
					    </p>
					    <hr />
					    <div className="summary">
					       <img src={detail.user.avatar_url} className="col-md-1" style={{width: 70}} />
					       <div className="col-md-11 card" style={{paddingLeft: 0, paddingRight: 0}}>
					          <h5 className="card-header">
					             <a href={detail.user.html_url}>{detail.user.login}</a> commented {duration}
					          </h5>
					          <div className="card-block">
					              <p dangerouslySetInnerHTML={{__html: marked(fullSummary)}}></p>
					          </div>
					       </div>
					    </div>
		   	   	    </div>
		   	   );
		   })}
		</div>
	);
}

export default IssueDetails;