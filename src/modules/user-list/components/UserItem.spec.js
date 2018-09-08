import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { UserItem } from './UserItem';
import * as styles from './UserItem.styles';

configure({adapter: new Adapter()});

describe('UserItem', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<UserItem />);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });
});
