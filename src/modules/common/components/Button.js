import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Button extends PureComponent {
  render() {
    const { children, onClick } = this.props;
    return <button onClick={onClick}>{children}</button>
  }
}

Button.defaultProps = {
  children: 'Click'
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func
}
