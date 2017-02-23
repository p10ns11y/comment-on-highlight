import React from 'react';

const HighlightButtonsGroup =  ({ toggleCommentInput }) => (
  <div>
    <button>high</button>
    <button onClick={toggleCommentInput}>comment</button>
    <button>nothing</button>
  </div>
)

export default HighlightButtonsGroup;
