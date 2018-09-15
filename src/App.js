import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';

import { menuItems } from './statics/Sidebar';
import { messageTypes, commTypes } from './statics/InboxMenu';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar apps={menuItems}/>
        <Route path={`:app(${menuItems.map(menuItem => menuItem.link).join('|')})`}
          component={(props) => <InboxMenu messageTypes={messageTypes} commTypes={commTypes} {...props}/>} />
      </Container>
    );
  }
}

export default App;
