import React from 'react';
import Label from './Label';
import { Link } from 'react-router';
import GetShortSummary from '../utils/SummaryHelper';
import GetDuration from '../utils/TimeHelper';
import Octicon from 'react-octicon';
import "../../styles/components/IssuesList.scss";

const IssuesList = ({issues}) => {
	return (
		<ul className="issue-list">
		    {issues.map((issue, index) => {

		    	const summary = GetShortSummary(issue.body, 140);
                const duration = GetDuration(issue.created_at);

		    	return (
		    		<li className="issue-item" key={index}>
		    		    <div className="issue">
		    		        <img src={issue.user.avatar_url} alt="Avatar for User" />
		    		        <p>
		    		           <a href={issue.user.html_url}>{issue.user.login}</a> opened an issue <span>{duration}</span>
		    		        </p>
		    		        <Link to={`/issues/${issue.number}`} className="comments-number">
		    		          <span><Octicon name="comment" /> {issue.comments}</span>
		    		        </Link>
		    		    </div>
		    		    <div className="issue-content">
		    		        <Link to={`/issues/${issue.number}`} className="issue-title">
		    		            <h5>
		    		               {`#${issue.number}`} - {issue.title}
		    		            </h5>
		    		        </Link>
		    		        <Label labels={issue.labels} /> 
		    		        <p className="issue-short-summary">{summary}</p>
		    		    </div>
		    		</li>
		    	);
		    })}
		</ul>
	);
}

IssuesList.propTypes = {
	issues: React.PropTypes.array.isRequired
};

export default IssuesList;