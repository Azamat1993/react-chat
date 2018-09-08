import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { User } from '../../..//instances';

import { UserList, UserItem } from '.';

configure({adapter: new Adapter()});

const users = [
  new User(),
  new User()
]

describe('UserList', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<UserList authenticated={true}/>);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render passed in users', () => {
    wrapper = shallow(<UserList authenticated={true} users={users}/>);
    instance = wrapper.instance();

    expect(wrapper.find(UserItem).length).toBe(2);
  });

  it('should not render if unauthenticated', () => {
    wrapper = shallow(<UserList authenticated={false}/>);
    instance = wrapper.instance();

    expect(wrapper.html()).toBeNull();
  });

  it('should render if authenticated', () => {
    expect(wrapper.html()).not.toBeNull();
  });
});
