import axios from 'axios';

const url = 'https://api.github.com/repos/npm/npm/issues?per_page=25&page=';

// Get request for a list of isssues data, passing page number as argument
export default function getIssues(pageNum) {
	return axios.get(`${url}${pageNum}`)
	    .then((response) => ({ 
	    	issues: response.data, 
	    	link: response.headers.link 
	    }))
	    .catch((err) => console.log(err));
}