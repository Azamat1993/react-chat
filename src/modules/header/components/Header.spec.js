import { render } from 'react-testing-library';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Header from './Header';

configure({adapter: new Adapter()})

describe('Header', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Header onClick={() => {}}/>);
    instance = wrapper.instance();
  });

  it('should render a container div', () => {
    expect(wrapper.find('div.header')).toHaveLength(1);
  });

  it('should get authenticated prop', () => {
    expect(instance.props.authenticated).toBeDefined();
  });

  it('if authenticated prop wasn\t passed, it should be false', () => {
    expect(instance.props.authenticated).toBe(false);
  });

  it('should set prop authenticated into true', () => {
    wrapper = shallow(<Header authenticated={true} />);
    instance = wrapper.instance();

    expect(instance.props.authenticated).toBe(true);
  });

  it('should receive onClick prop', function() {
    expect(instance.props.onClick).toBeDefined();
  });

  it('should render logout button when authenticated', () => {
    wrapper = shallow(<Header authenticated={true} />);
    instance = wrapper.instance();
    expect(wrapper.find('button.logout')).toHaveLength(1);
  });

  it('should not render logout button when authenticated', () => {
    wrapper = shallow(<Header authenticated={false} />);
    instance = wrapper.instance();
    expect(wrapper.find('button.logout')).toHaveLength(0);
  });

  it('should call onClick when authenticated', () => {
    const onClick = jest.fn();
    wrapper = shallow(<Header authenticated={true} onClick={onClick} />);
    instance = wrapper.instance();

    const button = wrapper.find('button.logout');
    button.simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
  });
})
