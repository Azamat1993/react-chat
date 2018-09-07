import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  render() {
    const { authenticated, onClick } = this.props;
    return <div className='header'>
      {authenticated && <button onClick={onClick} className="logout"></button>}
    </div>
  }
}

Header.defaultProps = {
  authenticated: false,
  onClick: () => {
    console.warning('onClick prop wasn\'t passed into Header');
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Header;
