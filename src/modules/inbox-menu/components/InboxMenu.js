import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as styles from './InboxMenu.styles.js';

export class InboxMenu extends PureComponent {
  render() {
    const { messageTypes, commTypes } = this.props;

    const renderBox = (types) => {
      return <styles.Box>
        {renderElements(types)}
      </styles.Box>
    }

    const renderElements = (types) => {
      return types.map((type, i) => (
        <Link key={i} to={type.link}></Link>
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
      amount: PropTypes.number.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}