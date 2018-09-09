import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import { initialize } from 'js-dep-inj';

import { InboxMenu } from './InboxMenu';
import * as styles from './InboxMenu.styles';

configure({adapter: new Adapter()});

const messageTypes = [
  {
    title: 'All Messages',
    amount: 21,
    link: '/all'
  },
  {
    title: 'Unread',
    amount: 89,
    link: '/unread'
  },
  {
    title: 'Important',
    amount: 6,
    link: '/important'
  },
  {
    title: 'Drafts',
    amount: 27,
    link: '/draft'
  }
]

const commTypes = [
  {
    title: 'Teams',
    amount: 4,
    link: '/teams'
  },
  {
    title: 'Groups',
    amount: 3,
    link: '/groups'
  }
];

class AppAdapter {}

initialize({
  providers: [AppAdapter]
})

describe('InboxMenu', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<InboxMenu />);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should receive and render messageTypes', () => {
    wrapper = shallow(<InboxMenu messageTypes={messageTypes}/>);
    instance = wrapper.instance();
    expect(wrapper.find(styles.Box).at(0).find(Link).length).toBe(4);
  });

  it('should receive and render commTypes', () => {
    wrapper = shallow(<InboxMenu commTypes={commTypes}/>);
    instance = wrapper.instance();
    expect(wrapper.find(styles.Box).at(1).find(Link).length).toBe(2);
  });
})
