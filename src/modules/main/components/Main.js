import React, { Component } from 'react';

import AuthHOC from '../../auth/HOC/AuthHOC';

class Main extends Component {
  render() {
    return <div>main page</div>
  }
}

Main = AuthHOC(Main);

export {
  Main
}
