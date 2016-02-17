//*****************************************************************
//  Component for details page, including IssueDetails and Comments
//*****************************************************************

import React from 'react';
import GetIssueDetails from '../utils/DetailsHelper'
import IssueDetails from '../components/IssueDetails';
import Comment from '../components/Comment';

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			details: [],
			comments: []
		}
	}
	componentDidMount() {
		// Initially request data for specific issue details and its comments
		this.getIssueDetails(this.props.params.number);
	}
	getIssueDetails(number) {
		GetIssueDetails(number)
		  .then(function(data) {
		  	  this.setState({
		  	  	details: [data.details],
		  	  	comments: data.comments
		  	  });
		  }.bind(this));
	}
	render() {
		return (
			<div className="container">
			  <IssueDetails details={this.state.details} />
			  <Comment comments={this.state.comments} />
			</div>
		);
	}
}

export default Details;