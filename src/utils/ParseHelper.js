/**
 * @param {string} string String to be parsed
 * @return {string} The original string parsed as a link
 */

export default function parseAtMention(string) {
	return string.replace(/(^|\s)@(\w+)/, '$1[@$2](https://github.com/$2)');
}