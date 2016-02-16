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
		console.log('Data: ', this.state.issues);
		return(
			<div className="row">
			   <IssuesList issues={this.state.issues} />
			</div>
        );
	}
}

export default Default;