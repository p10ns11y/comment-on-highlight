import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import LandingPage from './index';
import Content from './components/Content';
import CommentBox from './components/CommentBox';
import HighlightButtonsGroup from './components/HighlightButtonsGroup';
import CommentsList from './components/CommentsList';

it('has a Content component', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(Content)).toHaveLength(1);
});

it('has a Content component', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(CommentBox)).toHaveLength(1);
});

it('has a Content component', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(CommentsList)).toHaveLength(1);
});

it('has a Content component', () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(HighlightButtonsGroup)).toHaveLength(1);
});
