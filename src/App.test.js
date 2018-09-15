import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';
import { UserList } from './modules/user-list/components';

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
      <App />
    </BrowserRouter>, div);
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

  xit('should render InboxMenu', () => {
    expect(wrapper.find(InboxMenu).length).toBe(1);
  });
});
