import React, { Component } from 'react';
import styled from 'styled-components';

import { Sidebar } from './modules/sidebar/components';

const Container = styled.div`
  display: flex;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Sidebar />
      </Container>
    );
  }
}

export default App;
