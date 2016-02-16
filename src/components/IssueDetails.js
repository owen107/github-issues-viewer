import React from 'react';
import moment from 'moment';
import Label from './Label';
import Octicon from 'react-octicon';

const IssueDetails = ({details}) => {

	return(
		<div className="issue-details">
		   {details.map((detail, index) => {

		   	   const now = moment();
    		   const createdAt = moment(detail.created_at, moment.ISO_8601);
               const duration = moment.duration(now.diff(createdAt)).humanize();

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
					          <h3 className="card-header">
					             <a href={detail.user.html_url}></a> commented {duration}
					          </h3>
					          <div className="card-block">
					              <p>{detail.body}</p>
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