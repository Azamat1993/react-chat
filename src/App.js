import React, { Component } from 'react';
import styled from 'styled-components';

import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';
import { UserList } from './modules/user-list/components';

const Container = styled.div`
  display: flex;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <InboxMenu />
        <UserList />
      </Container>
    );
  }
}

export default App;
