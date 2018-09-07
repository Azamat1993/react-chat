import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class Input extends PureComponent {
  render() {
    const { type, name, onChange, value } = this.props;
    return <input type={type} name={name} onChange={onChange} value={value}/>
  }
}

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
