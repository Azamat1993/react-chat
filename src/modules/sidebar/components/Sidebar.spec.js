import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Sidebar } from './Sidebar';
import { Link } from 'react-router-dom';

configure({adapter: new Adapter()})

const apps = [
  {
    name: 'telegram',
    adapter: 'TelegramAdapter',
    icon: 'telegram.svg',
    link: '/telegram'
  },
  {
    name: 'Whatsapp',
    adapter: 'WhatsappAdapter',
    icon: 'whatsapp.svg',
    link: '/whatsapp'
  }
]

describe('Header', () => {
  let wrapper;
  let instance;

  beforeEach(() => {
    wrapper = shallow(<Sidebar />);
    instance = wrapper.instance();
  });

  it('should be defined', () => {
    expect(instance).toBeDefined();
  });

  it('should receive apps prop', () => {
    wrapper = shallow(<Sidebar apps = {apps}/>);
    instance = wrapper.instance();

    expect(wrapper.find(Link).length).toBe(2);
  });
})
