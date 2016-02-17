import React from 'react';
import IssuesList from '../components/IssuesList'
import GetIssues from '../utils/IssuesHelper';
import GetTotalPageNumber from '../utils/PagesHelper';
import ReactPaginate from 'react-paginate';
import '../../styles/components/pagination.scss';

const initialPageNum = 1

class Default extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issues: [],
			totalPage: 0,
			previousLabel: '',
			nextLabel: ''
		}
	}
	componentDidMount() {
		this.getIssues(initialPageNum);
	}
	getIssues(pageNum) {
		GetIssues(pageNum)
		  .then(function(data) {
		  	  this.setState({
		  	  	issues: data.issues,
		  	  	totalPage: GetTotalPageNumber(data.link),
		  	  	previousLabel: 'Previous',
		  	  	nextLabel: 'Next'
		  	  });
		  }.bind(this));
	}
	handlePageClick(data) {
		// Increment the page number for new data request
		let page = data.selected + 1;
		this.getIssues(page);
	}
	render() {
		return(
			<div className="wrapper">
			   <IssuesList issues={this.state.issues} />
			   <div className="pagination-section">
			       <div className="container">
					   <ReactPaginate previousLabel={this.state.previousLabel}
		                   nextLabel={this.state.nextLabel}
		                   breakLabel={<li className="page-item disabled"><a className="page-link">...</a></li>}
		                   pageNum={this.state.totalPage}
		                   marginPagesDisplayed={2}
		                   pageRangeDisplayed={5}
		                   clickCallback={(data) => this.handlePageClick(data)}
		                   containerClassName={"pagination"}
		                   subContainerClassName={"sub-pagination"}
		                   pageClassName={"page-item"}
		                   pageLinkClassName={"page-link"}
		                   previousLinkClassName={"page-link"}
		                   previousClassName={"page-item"}
		                   nextClassName={"page-item"}
		                   nextLinkClassName={"page-link"}
		                   activeClassName={"active"} />
	               </div>
               </div>
			</div>

        );
	}
}

export default Default;