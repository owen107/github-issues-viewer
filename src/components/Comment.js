import React from 'react';
import GetDuration from '../utils/TimeHelper';
const marked = require('marked');
import ParseAtMention from '../utils/ParseHelper';

const Comment = ({comments}) => {

	return(
		<div className="comments container">
		    {comments.map((comment, index) => {
		   	    const duration = GetDuration(comment.created_at);
		   	    const fullSummary = ParseAtMention(comment.body);

		   	    return (
			   	   	<div className="comment" key={index}>
			   	   	   <img src={comment.user.avatar_url} className="col-md-1" style={{width: 70}} />
				       <div className="col-md-11 card" style={{paddingLeft: 0, paddingRight: 0}}>
				          <h5 className="card-header">
				             <a href={comment.user.html_url}>{comment.user.login}</a> commented {duration}
				          </h5>
				          <div className="card-block">
				              <p dangerouslySetInnerHTML={{__html: marked(fullSummary)}}></p>
				          </div>
				       </div>
				    </div>
		   	    );
		    })}
	    </div>    
	);
}

export default Comment;