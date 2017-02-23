import React from 'react';

import Content from './components/Content';
import CommentBox from './components/CommentBox';
import HighlightButtonsGroup from './components/HighlightButtonsGroup';
import CommentsList from './components/CommentsList';

class LandingPage extends React.Component {
  state = {
    hideCommentInput: true,
    comments: [
      { id: 'czx11s', message: 'great article' },
      { id: 'cdx12s', message: 'very well written !' },
      { id: 'cza13s', message: 'wow an eye opener!' }
    ]
  }

  // Taking advantage of es6 object computed property
  toggleState = (updateState) => {
    this.setState({ [updateState]: !this.state[updateState] });
  }

  toggleCommentInput = () => {
    this.toggleState('hideCommentInput');
  }

  updateCommentList = (newComment) => {
    this.setState({ comments: [...this.state.comments, newComment]});
  }

  render() {
    const { hideCommentInput } = this.state;

    return (
      <div>
        <Content />
        <HighlightButtonsGroup
          toggleCommentInput={this.toggleCommentInput}
        />
        <CommentBox
          hidden={hideCommentInput}
          updateCommentList={this.updateCommentList}
        />
        <CommentsList
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default LandingPage;
