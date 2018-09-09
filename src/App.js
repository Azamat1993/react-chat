import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';
import { UserList } from './modules/user-list/components';

import { menuItems } from './statics/Sidebar';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar apps={menuItems}/>
        <Route path={`/:app(${menuItems.map(menuItem => menuItem.link).join('|')})`}
          component={InboxMenu}/>
        <UserList authenticated={true}/>
      </Container>
    );
  }
}

export default App;
