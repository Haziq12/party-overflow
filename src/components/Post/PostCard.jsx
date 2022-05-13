import React from 'react'
import '../../styles/Card.css'
import PostActions from './PostActions';
import UserCard from '../misc/UserCard'
import Codeblock from '../Code/Codeblock'

const PostCard = (props) => {
  console.log(props.post)
  return (
    <div className="post-card">
      <div className="card-header">
        <UserCard profile={props.post.added_by}/>
        <PostActions {...props}/>
      </div>

      <div className="question-container">
        <p>{props.post.question}</p>
      </div>

      <div className="code-container">
        {props.post.codeblock &&
          <Codeblock codeblock={props.post.codeblock} />
        }
      </div>

      <div className="comment-link"></div>
    </div>
  );
};

export default PostCard