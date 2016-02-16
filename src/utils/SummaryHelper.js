export default function getShortSummary(string, length) {
	if(string.length <= length) {
		return string;
	}

	const summary = string.substr(0, length);
	const space = summary.match(/^\s*\S+(\s)/);

	return space ? `${summary.substr(0, summary.lastIndexOf(space[1]))}...` : `${summary.slice(0, -1)}`
}