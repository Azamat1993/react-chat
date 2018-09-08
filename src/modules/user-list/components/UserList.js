import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { User } from '../../../instances';
import * as styles from './UserList.styles';
import { UserItem} from '.';

export class UserList extends Component {
  render() {
    const { users, authenticated } = this.props;

    if (!authenticated) {
      return null;
    }

    return <styles.Container>
      {users.map((user, i) => (
        <UserItem user={user} key={i}/>
      ))}
    </styles.Container>
  }
}

UserList.defaultProps = {
  users: [],
  authenticated: false
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.instanceOf(User)),
  authenticated: PropTypes.bool
}
