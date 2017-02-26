import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import LandingPage from './index';
import Content from './components/Content';
import CommentBox from './components/CommentBox';
import HighlightButtonsGroup from './components/HighlightButtonsGroup';
import CommentsList from './components/CommentsList';

describe('LandingPage', () => {
  it('has a Content component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('has a CommentBox component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });

  it('has a CommentsList component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(CommentsList)).toHaveLength(1);
  });

  it('has a HighlightButtonsGroup component', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.find(HighlightButtonsGroup)).toHaveLength(1);
  });

  describe('LandingPage/Content', () => {
    it('clicking editmode toggle makes  content editable', () => {
      const contentWrapper = mount(<Content/>);
      contentWrapper.find('button').simulate('click');
      expect(contentWrapper.state('editable')).toEqual(true);
      expect(
        contentWrapper.find('section').prop('contentEditable')
      ).toEqual(true);
    });

    it('renders title', () => {
      const contentWrapper = render(<Content />);
      expect(contentWrapper.text()).toContain('The Psychopathology');
    });
  });

  describe('LandingPage/highlightBtnGroup', () => {
    it('clicking comment button make CommentBox visible', () => {
      const saveAndRestoreSelection = jest.fn()
      const hbgWrapper = shallow(
        <HighlightButtonsGroup
          saveAndRestoreSelection={saveAndRestoreSelection}
          hidden={false}
          layout={{left: '0', right: '0', position: 'absolute' , width: 30, height: 70}}
        />
      );

      hbgWrapper.find('button').simulate('click');
      expect(saveAndRestoreSelection).toBeCalled();
    });
  });

  describe('LandingPage/CommentBox', () => {
    it('Changes value upon input ', () => {
      const commentBoxWrapper = shallow(<CommentBox />);
      commentBoxWrapper.find('textarea').simulate('change', {
        target: { value: 'Prem'}
      });

     expect(commentBoxWrapper.state('comment')).toEqual('Prem');
    });
  });
});
