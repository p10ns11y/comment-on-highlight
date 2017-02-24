import React from 'react';

import Content from './components/Content';
import CommentBox from './components/CommentBox';
import HighlightButtonsGroup from './components/HighlightButtonsGroup';
import CommentsList from './components/CommentsList';

class LandingPage extends React.Component {
  state = {
    hiddenCommentBox: true,
    popedUpButtonGroup: false,
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

  toggleCommentBox = () => {
    this.toggleState('hiddenCommentBox');
  }

  // Could be used outside click of HighlightButtonsGroup
  toggleButtonGroup = () => {
    this.toggleState('popedUpButtonGroup');
  }

  updateCommentList = (newComment) => {
    this.setState({ comments: [...this.state.comments, newComment]});
  }

  render() {
    const { hiddenCommentBox, popedUpButtonGroup } = this.state;

    return (
      <div>
        <Content />
        <HighlightButtonsGroup
          hidden={popedUpButtonGroup}
          toggleCommentBox={this.toggleCommentBox}
        />
        <CommentBox
          hidden={hiddenCommentBox}
          updateCommentList={this.updateCommentList}
          toggleCommentBox={this.toggleCommentBox}
          toggleButtonGroup={this.toggleButtonGroup}
        />
        <CommentsList
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default LandingPage;
