/**
 * @param {string} string The link in request header, e.g.
 * ('<https://api.github.com/repositories/321278/issues?per_page=25&page=2>; rel="next", 
 <https://api.github.com/repositories/321278/issues?per_page=25&page=78>; rel="last"')
 * @return {number} totalPage The total number of pages for issues
 */

export default function getTotalPageNumber(string) {

	  const arr = string.split(',');
	  let lastLink, url, totalPage;

	  if (arr && arr.length > 0) {
	  	for(let i=0; i < arr.length; i++) {
	  		let link = arr[i];
	  		if (link.indexOf('rel="last"') > -1) lastLink = link;
	  	}
	    
	    if (lastLink) {
	    	url = lastLink.split(';')[0];
	        totalPage = parseInt(url.split('&page=')[1].replace('>', ''));
	    } else {
	        url = arr[1].split(';')[0];
	        totalPage = parseInt(url.split('&page=')[1].replace('>', '')) + 1;
	    }
	  }

	  return totalPage;
} 