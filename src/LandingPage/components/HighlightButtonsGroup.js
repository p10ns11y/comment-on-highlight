import React from 'react';
import './HighlightButtonsGroup.css';

const HighlightButtonsGroup =  ({ toggleCommentBox, hidden, layout }) => (
  <div hidden={hidden}
    style={{
      position: layout.position,
      left: layout.left,
      top: layout.top,
      width: `${layout.widthInPixel}px`,
      height: `${layout.heightInPixel}px`
    }}
  >
    <div className="buttons-group">
      <button
        onClick={toggleCommentBox}
        className="buttons-group__comment-btn"
      >
        comment
      </button>
      <div className="buttons-group__down-arrow-tip"></div>
    </div>
  </div>
)

export default HighlightButtonsGroup;
