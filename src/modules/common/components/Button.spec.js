import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Button } from './Button';

configure({adapter: new Adapter()})

describe('Button', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Button />);
    instance = wrapper.instance();
  });

  it('should render a button', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('should render children', () => {
    wrapper = shallow(<Button>Click me</Button>);
    instance = wrapper.instance();

    expect(wrapper.find('button').text()).toEqual('Click me')
  });

  it('should render default text as children', () => {
    expect(wrapper.find('button').text()).toEqual('Click')
  });

  it('should call onClick when pressed', () => {
    const myFn = jest.fn();

    wrapper = shallow(<Button onClick={myFn}/>);
    instance = wrapper.instance();

    wrapper.find('button').simulate('click');

    expect(myFn.mock.calls.length).toBe(1);
  });
})
