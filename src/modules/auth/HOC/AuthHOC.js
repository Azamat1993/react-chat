import React, { Component } from 'react';

import { get } from 'js-dep-inj';

export default (ComposedComponent) => {
  class AuthHOC extends Component {
    constructor() {
      super();

      this.appProvider = get('AppAdapter');
    }

    render() {
      if (!this.appProvider.isAuthenticated()) {
        return this.appProvider.authComponent();
      }

      return <ComposedComponent {...this.props}/>;
    }
  }
  return AuthHOC;
}
