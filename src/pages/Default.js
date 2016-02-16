import React from 'react';
import IssuesList from '../components/IssuesList'
import GetIssues from '../utils/IssuesHelper';

class Default extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issues: []
		}
	}
	componentDidMount() {
		this.getIssues();
	}
	getIssues() {
		GetIssues()
		  .then(function(data) {
		  	  this.setState({
		  	  	issues: data.issues
		  	  });
		  }.bind(this));
	}
	render() {
		return(
			<div className="row" style={{marginTop: 20}}>
			   <IssuesList issues={this.state.issues} />
			</div>
        );
	}
}

export default Default;