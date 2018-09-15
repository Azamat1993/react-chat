import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as styles from './Sidebar.styles';

export class Sidebar extends PureComponent {
  render() {
    const { apps } = this.props;
    return <styles.Container>
      {apps.map(app => (
        <styles.Link activeClassName="is-active" key={app.name} to={app.link}>
          <styles.Img src={require(`../icons/${app.icon}`)} />
        </styles.Link>
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
