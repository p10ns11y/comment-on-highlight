import React from 'react';
import './CommentBox.css';

class CommentBox extends React.Component {
  state = {
    comment: ''
  }

  handleCommentSubmit = (e) => {
    e.preventDefault();

    const { updateCommentList } = this.props;

    if (this.state.comment) {
      updateCommentList({
        id: Date.now(),
        message: this.state.comment
      });
    }
  }

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
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
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default CommentBox;
