import React from 'react';
import IssuesList from '../components/IssuesList'
import GetIssues from '../utils/IssuesHelper';
import GetTotalPageNumber from '../utils/PagesHelper';
import ReactPaginate from 'react-paginate';
import '../../styles/main.scss';

const initialPageNum = 1;

class Default extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			issues: [],
			totalPage: 0,
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
		  	  	totalPage: GetTotalPageNumber(data.link)
		  	  });
		  }.bind(this));
	}
	handlePageClick(data) {
		// Increment the page number for new data request
		let page = data.selected + 1;
		this.getIssues(page);
	}
	render() {
		const width = 55 + '%';
		return(
			<div className="row" style={{marginTop: 20}}>
			   <IssuesList issues={this.state.issues} />
			   <div className="pagination-section" style={{width: width, marginLeft: 'auto', marginRight: 'auto'}}>
				   <ReactPaginate previousLabel={"Previous"}
	                   nextLabel={"Next"}
	                   breakLabel={<li className="page-item disabled"><a className="page-link">...</a></li>}
	                   pageNum={this.state.totalPage}
	                   marginPagesDisplayed={2}
	                   pageRangeDisplayed={5}
	                   clickCallback={(data) => this.handlePageClick(data)}
	                   containerClassName={"pagination"}
	                   subContainerClassName={"pagination"}
	                   pageClassName={"page-item"}
	                   pageLinkClassName={"page-link"}
	                   previousLinkClassName={"page-link"}
	                   previousClassName={"page-item"}
	                   nextClassName={"page-item"}
	                   nextLinkClassName={"page-link"}
	                   activeClassName={"active"} />
               </div>
			</div>

        );
	}
}

export default Default;