//*****************************************************************
//  Component for displaying a list of comments for a single issue
//*****************************************************************

import React from 'react';
import GetDuration from '../utils/TimeHelper';
import marked from 'marked';
import ParseAtMention from '../utils/ParseHelper';
import '../../styles/components/issueDetails.scss';

const Comment = ({comments}) => {

	return(
		<div className="container">
		    {comments.map((comment, index) => {
		   	    const duration = GetDuration(comment.created_at);
		   	    const fullSummary = ParseAtMention(comment.body);
		   	    const avatarName = `Avatar for @${comment.user.login}`;

		   	    return (
			   	   	<div className="issue-contents clearfix" key={index}>
			   	   	   <div className="user-image">
			   	   	      <img src={comment.user.avatar_url} alt={avatarName} />
			   	   	   </div>
				       <div className="contents">
				          <div className="contents-header">
				             <a href={comment.user.html_url}>{comment.user.login}</a> added a comment {duration}
				          </div>
				          <div className="contents-block">
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