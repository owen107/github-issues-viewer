/**
 * @param {string} string String would be truncated
 * @param {number} length The maximum length for string
 * @return {string} The original string truncated at either clean line or word
 */

export default function getShortSummary(string, length) {
	// Change string to empty string when null
	string = string || "";
	if(string.length <= length) {
		return string;
	} else{
		const summary = string.substr(0, length);
		const space = summary.match(/^\s*\S+(\s)/);

		return space ? `${summary.substr(0, summary.lastIndexOf(space[1]))}...` : `${summary.slice(0, -1)}`
	}
}