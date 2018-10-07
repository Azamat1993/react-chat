import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sign_in } from "../actions";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            phone_code: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.sign_in(this.state.phone_code);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <form onSubmit={this.onSubmit}>
            <input type="text" name="phone_code" value={this.state.phone_code} onChange={this.onChange}/>
            <button>Sign in</button>
        </form>
    }
}

SignIn = connect(null, {
    sign_in
})(SignIn);

export {
    SignIn
}