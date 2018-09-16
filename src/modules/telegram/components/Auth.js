import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as styles from './Auth.styles';
import {SendCode} from './SendCode';
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";

class Auth extends Component {
    render() {
        const { telegram: {phone_code_hash, phone_registered} } = this.props;

        console.log(phone_code_hash);

        const renderContent = () => {
            if (!phone_code_hash) {
                return <SendCode/>
            }

            if (phone_registered) {
                return <SignIn />;
            }

            return <SignUp />
        }

        return <styles.Container>
            {renderContent()}
        </styles.Container>
    }
}

Auth = connect(
    state => ({
        telegram: state.telegram
    })
)(Auth);

export {
    Auth
}