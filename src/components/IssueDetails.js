import React from 'react';
import Label from './Label';
import Octicon from 'react-octicon';
import GetDuration from '../utils/TimeHelper';
import ParseAtMention from '../utils/ParseHelper';
import marked from 'marked';
import '../../styles/components/issueDetails.scss';

const IssueDetails = ({details}) => {

	return(
		<div className="issue-details">
		   {details.map((detail, index) => {

		   	   const duration = GetDuration(detail.created_at);
		   	   const fullSummary = ParseAtMention(detail.body);

		   	   return(
		   	   	    <div className="container" key={index}>
		   	   	        <h2>{`#${detail.number}`} - {detail.title}</h2>
					    <p>
					      <span className="opened-label"><Octicon name="info" /> {detail.state}</span>
					      <a href={detail.user.html_url}>{detail.user.login}</a> opened this issue {duration} ({detail.comments} comments) 
					      <Label labels={detail.labels} />
					    </p>
					    <hr />
					    <div className="issue-contents clearfix">
					       <div className="user-image">
					          <img src={detail.user.avatar_url} alt="Avatar for User" />
					       </div>
					       <div className="contents">
					          <div className="contents-header">
					             <a href={detail.user.html_url}>{detail.user.login}</a> added a comment {duration}
					          </div>
					          <div className="contents-block">
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