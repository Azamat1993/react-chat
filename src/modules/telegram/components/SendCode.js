import React, { Component } from 'react';
import { connect } from 'react-redux';

import { send_code } from "../actions";

class SendCode extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        const { send_code } = this.props;

        send_code('+77014495500');
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <button>Send code</button>
        </form>
    }
}

SendCode = connect(null, {
    send_code
})(SendCode);

export {
    SendCode
}