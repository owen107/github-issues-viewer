import React from 'react';
import Label from './Label';
import { Link } from 'react-router';
import GetShortSummary from '../utils/SummaryHelper';
import GetDuration from '../utils/TimeHelper';
import Octicon from 'react-octicon';

class IssuesList extends React.Component {
	render() {
		const { issues } = this.props;

		return (
			<ul className="list-group">
			    {issues.map((issue, index) => {

			    	const summary = GetShortSummary(issue.body, 140);
                    const duration = GetDuration(issue.created_at);

			    	return (
			    		<li className="list-group-item row" key={index}>
			    		    <div className="col-md-1">
			    		       <img src={issue.user.avatar_url} style={{width: 60}} />
			    		    </div>
			    		    <div className="col-md-11" style={{position: 'relative'}}>
			    		        <Link to={`/issues/${issue.number}`} className="issue-title">
			    		           <h5 style={{marginBottom: 0}}>{issue.title}</h5>
			    		        </Link>
			    		        <Label labels={issue.labels} />
			    		        <Link to={`/issues/${issue.number}`} style={{color: 'grey'}}>
			    		          <span style={{position: 'absolute', right: 0, top: 0, fontSize: 14}}><Octicon name="comment" /> {issue.comments}</span>
			    		        </Link>
			    		        <p>{`#${issue.number}`} {issue.closed_at || 'Opened'} {duration} by <a href={issue.user.html_url}>{issue.user.login}</a></p>
			    		        <span className="summary">{summary}</span>
			    		    </div>
			    		</li>
			    	);
			    })}
			</ul>
		);
	}
}

IssuesList.propTypes = {
	issues: React.PropTypes.array.isRequired
};

export default IssuesList;