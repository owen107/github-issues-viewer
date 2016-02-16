import axios from 'axios';

const url = "https://api.github.com/repos/npm/npm/issues";

var getIssueDetails = function(number) {
	return axios.get(`${url}/${number}`);
}

var getComments = function(number) {
	return axios.get(`${url}/${number}/comments`);
}

export default function	getIssueDetails(number) {
	return axios.all([getIssueDetails(number), getComments(number)])
	   .then((response) => ({ details: response[0].data, comments: response[1].data }))
	   .catch((err) => console.log(err));
}