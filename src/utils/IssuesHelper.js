import axios from 'axios';

const url = 'https://api.github.com/repos/npm/npm/issues?per_page=25&page=1';

export default function getIssues() {
	return axios.get(url)
	    .then((response) => ({ issues: response.data }))
	    .catch((err) => console.log(err));
}