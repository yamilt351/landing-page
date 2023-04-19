import React from 'react';
import { comment } from './data';
import './comments.css';

function Comments() {
  return (
    <div className="content-comments">
      {comment.map((comments) => {
        const { id, description, username,img } = comments;
        return (
          <div key={id} className='user-comments'>
            <div className="name-and-photo-container">
              <h3>{username}</h3>
              <img src={img} alt="user" className='user-photo'/>
            </div>
            <div className="comment-container">
              <p>{description} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
