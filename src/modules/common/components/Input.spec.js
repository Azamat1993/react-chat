import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Input } from './Input';

configure({adapter: new Adapter()})

describe('Input', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Input />);
    instance = wrapper.instance();
  });

  it('should render an input', () => {
    expect(wrapper.find('input')).toHaveLength(1);
  });

  describe('input field', () => {
    let input;

    const init = (props) => {
      wrapper = shallow(<Input {...props}/>);
      instance = wrapper.instance();
      input = wrapper.find('input');
    };

    it('should receive type', () => {
      init({
        type: 'password'
      });

      expect(input.prop('type')).toEqual('password')
    });

    it('should receive name', () => {
      init({
        name: 'username'
      })

      expect(input.prop('name')).toEqual('username')
    });

    it('onChange should call a function', () => {
      const myFn = jest.fn();

      init({
        onChange: myFn
      });

      input.simulate('change')

      expect(myFn.mock.calls.length).toBe(1)
    });

    it('should set value', () => {
      init({
        value: 'asd'
      })

      expect(input.prop('value')).toEqual('asd')
    });
  })
})
