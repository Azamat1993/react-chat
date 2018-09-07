import React, { Component } from 'react';
import { get } from 'js-dep-inj';
import logo from './logo.svg';

class App extends Component {
  render() {

    get('WebSocket');
    return (
      <div>ad</div>
    );
  }
}

export default App;
