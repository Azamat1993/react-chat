import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { get } from 'js-dep-inj';
import { Route } from 'react-router-dom';

import * as styles from './InboxMenu.styles.js';
import { menuItems } from '../../../statics/Sidebar';
import { UserList } from '../../user-list/components';

export class InboxMenu extends PureComponent {
  constructor(props) {
    super(props);

    this.appProvider = get('AppAdapter');

    const {match: {params: {app} }} = props;
    this.appProvider.setApp(app);
  }

  render() {
    const { messageTypes, commTypes, match } = this.props;
    const authenticated = this.appProvider.isAuthenticated();
    const renderBox = (types) => {
      return <styles.Box>
        {renderElements(types)}
      </styles.Box>
    }

    const renderElements = (types) => {
      return types.map((type, i) => (
        <styles.Link key={i} to={match.url + type.link}>
          {type.title}
        </styles.Link>
      ))
    }

    const renderContent = () => {
      if (!authenticated) {
        // @todo should auth page
        return 'should auth';
      }

      return <React.Fragment>
        {renderBox(messageTypes)}
        <styles.Hr />
        {renderBox(commTypes)}
        <styles.Hr />
      </React.Fragment>
    }

    return <React.Fragment>
        <styles.Container>
          {renderContent()}
        </styles.Container>
        <UserList authenticated={authenticated}/>
      </React.Fragment>
  }
}

InboxMenu.defaultProps = {
  messageTypes: [],
  commTypes: []
}

InboxMenu.propTypes = {
  messageTypes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired
    })
  ),
  commTypes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      amount: PropTypes.number,
      link: PropTypes.string.isRequired
    })
  )
}
