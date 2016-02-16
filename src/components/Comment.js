import React from 'react';
import moment from 'moment';

const Comment = ({comments}) => {

	return(
		<div className="comments container">
		    {comments.map((comment, index) => {
		   	    const now = moment();
	    	    const createdAt = moment(comment.created_at, moment.ISO_8601);
	    	    const duration = moment.duration(now.diff(createdAt)).humanize();

		   	    return (
			   	   	<div className="comment" key={index}>
			   	   	   <img src={comment.user.avatar_url} className="col-md-1" style={{width: 70}} />
				       <div className="col-md-11 card" style={{paddingLeft: 0, paddingRight: 0}}>
				          <h5 className="card-header">
				             <a href={comment.user.html_url}>{comment.user.login}</a> commented {duration}
				          </h5>
				          <div className="card-block">
				              <p>{comment.body}</p>
				          </div>
				       </div>
				    </div>
		   	    );
		    })}
	    </div>    
	);
}

export default Comment;