import axios from 'axios';

const url = "https://api.github.com/repos/npm/npm/issues";

// Get request for a single issue data, passing issue number as argument
var getIssueDetails = function(number) {
	return axios.get(`${url}/${number}`);
}

// Get request for comments data, passing issue number as argument
var getComments = function(number) {
	return axios.get(`${url}/${number}/comments`);
}

// Only return response when done resolving all promises
export default function	getIssueDetails(number) {
	return axios.all([getIssueDetails(number), getComments(number)])
	   .then((response) => ({ details: response[0].data, comments: response[1].data }))
	   .catch((err) => console.log(err));
}