const marked = require('marked');

export default function parseAtMention(string) {
	return string.replace(/(^|\s)@(\w+)/, '$1[@$2](https://github.com/$2)');
}