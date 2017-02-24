import React from 'react';

const HighlightButtonsGroup =  ({ toggleCommentBox, hidden }) => (
  <div hidden={hidden}>
    <button>high</button>
    <button onClick={toggleCommentBox}>comment</button>
    <button>nothing</button>
  </div>
)

export default HighlightButtonsGroup;
