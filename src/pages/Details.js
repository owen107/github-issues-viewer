import React from 'react';
import GetIssueDetails from '../utils/DetailsHelper'

class Details extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			details: {},
			comments: []
		}
	}
	componentDidMount() {
		this.getIssueDetails(this.props.params.number);
	}
	getIssueDetails(number) {
		GetIssueDetails(number)
		  .then(function(data) {
		  	  this.setState({
		  	  	details: data.details,
		  	  	comments: data.comments
		  	  });
		  }.bind(this));
	}
	render() {
		console.log('Details: ', this.state.details);
		console.log('Comments: ', this.state.comments);
		return (
			<h2></h2>
		);
	}
}

export default Details;