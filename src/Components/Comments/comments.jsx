import React from 'react';
import { comment } from './data';
import './comments.css';
import { AiFillStar } from 'react-icons/ai';

function Comments() {
  return (
    <div className="content-comments">
      {comment.map((comments) => {
        const { id, description, username, img, score } = comments;
        let stars = [];
        for (let i = 0; i < score; i++) {
          stars.push(<AiFillStar key={i} className="stars" />);
        }
        return (
          <div key={id} className="user-comments">
            <div className="name-and-photo-container">
              <h3>{username}</h3>
              <div className="photo-score-container">
                <img src={img} alt="user" className="user-photo" />
                <div>{stars}</div>
              </div>
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
