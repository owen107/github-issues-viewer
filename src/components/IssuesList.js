import React from 'react';
import moment from 'moment';
import Label from './Label';
import { Link } from 'react-router';

class IssuesList extends React.Component {
	render() {
		const { issues } = this.props;
		let time = moment().diff(moment(issues.created_at));
		let duration = moment.duration(time).humanize(); 

		return (
			<ul className="list-group">
			    {issues.map((issue, index) => {

			    	let issueNumber = `#${issue.number}`;
			    	let abstract = issue.body.substr(0, 140);

			    	return (
			    		<li className="list-group-item row" key={index}>
			    		    <div className="col-md-1">
			    		       <img src={issue.user.avatar_url} style={{width: 60}} />
			    		    </div>
			    		    <div className="col-md-11">
			    		        <Link to={`/issues/${issue.number}`} className="issue-title">
			    		           <h5 style={{marginBottom: 0}}>{issue.title}</h5>
			    		        </Link>
			    		        <Label labels={issue.labels} />
			    		        <p>{issueNumber} {issue.closed_at || 'Opened'} {duration} by <a href={issue.user.html_url}>{issue.user.login}</a></p>
			    		        <span className="summary">{abstract}</span>
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