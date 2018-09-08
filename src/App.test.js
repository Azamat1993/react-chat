import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
  });

  it('should render Sidebar', () => {
    expect(wrapper.find(Sidebar).length).toBe(1);
  });

  it('should render InboxMenu', () => {
    expect(wrapper.find(InboxMenu).length).toBe(1);
  });
});
