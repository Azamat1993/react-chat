import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as styles from './Sidebar.styles';

export class Sidebar extends PureComponent {
  render() {
    const { apps } = this.props;
    return <styles.Container>
      {apps.map(app => (
        <Link key={app.name} to={app.link}>
          {app.name}
        </Link>
      ))}
    </styles.Container>
  }
}

Sidebar.defaultProps = {
  apps: []
}

Sidebar.propTypes = {
  apps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      adapter: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  )
}
