import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { get } from 'js-dep-inj';

import * as styles from './InboxMenu.styles.js';
import { menuItems } from '../../../statics/Sidebar';

export class InboxMenu extends PureComponent {
  constructor() {
    super();

    this.appProvider = get('AppAdapter');
  }

  componentWillUpdate(nextProps) {
    const {match: {params: {app} }} = nextProps;
    this.appProvider.setApp(app);
  }

  render() {
    const { messageTypes, commTypes, match } = this.props;
    const renderBox = (types) => {
      return <styles.Box>
        {renderElements(types)}
      </styles.Box>
    }

    const renderElements = (types) => {
      return types.map((type, i) => (
        <Link key={i} to={match.url + type.link}>
          {type.title}
        </Link>
      ))
    }

    return <styles.Container>
      {renderBox(messageTypes)}
      <styles.Hr />
      {renderBox(commTypes)}
      <styles.Hr />
    </styles.Container>
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
