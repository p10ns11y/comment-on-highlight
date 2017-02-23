import React from 'react';

const CommentsList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <strong>Anonymous</strong> : {comment.message}
      </li>
    ))}
  </ul>
);

export default CommentsList;
