import React from 'react';

// Keep comment.id as Date.now() of commented time
const CommentsList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <a href={`#${comment.id}`}>
          <strong>Anonymous</strong> : {comment.message}
        </a>
      </li>
    ))}
  </ul>
);

export default CommentsList;
