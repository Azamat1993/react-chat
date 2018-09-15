import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import { Sidebar } from './modules/sidebar/components';
import { InboxMenu } from './modules/inbox-menu/components';
import { Main } from './modules/main/components';

import { menuItems } from './statics/Sidebar';
import { messageTypes, commTypes } from './statics/InboxMenu';

const Container = styled.div`
  display: flex;
  height: 100%;
`;

class App extends Component {
  render() {
    const paths = `:app(${menuItems.map(menuItem => menuItem.link).join('|')})`;

    return (
      <Container>
        <Sidebar apps={menuItems}/>
        <Route path={paths}
          component={(props) => <InboxMenu messageTypes={messageTypes} commTypes={commTypes} {...props}/>} />
        <Route path={paths} component={Main}/>
      </Container>
    );
  }
}

export default App;
