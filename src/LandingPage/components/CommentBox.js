import React from 'react';
import './CommentBox.css';

class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleCommentSubmit = (e) => {
    e.preventDefault();

    const {
      updateCommentList,
      toggleCommentBox,
      toggleButtonsGroup
    } = this.props;

    if (this.state.comment) {
      const uniqueId = Date.now();

      this.wrapSelectedTextWithId(uniqueId);

      updateCommentList({
        id: uniqueId,
        message: this.state.comment
      });

      toggleButtonsGroup();
      toggleCommentBox();
      this.reset();
    }
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  reset = () => { this.setState({ comment: '' }); }

  wrapSelectedTextWithId = (uniqueId) => {
    const markWrapper = document.createElement('mark');
    markWrapper.setAttribute('id', uniqueId);
    this.props.selectedRange.surroundContents(markWrapper);
  }

  render() {
    const { hidden } = this.props;

    return (
      <div hidden={hidden}>
        <form
          className="comment-box"
          onSubmit={this.handleCommentSubmit}
        >
          <label htmlFor="commentBox" className="visuallyhidden">
            Add your comment
          </label>
          <textarea
            id="commentBox"
            className="comment-box__text-area"
            placeholder="Add your comment"
            onChange={this.handleCommentChange}
            value={this.state.comment}
          >
          </textarea>
          <button type="submit" className="comment-box__submit-button">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
