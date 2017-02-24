import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils'
import { shallow } from 'enzyme';

import App from './App';
import LandingPage from './LandingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactTestUtils.renderIntoDocument(<App/>);
});

it('has LandingPage ', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(createElement(LandingPage))).toBe(true);
  expect(wrapper).toContainReact(createElement(LandingPage));
});

it('has only one LandingPage', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(LandingPage)).toHaveLength(1);
});
