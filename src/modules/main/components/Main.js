import React, {Component} from 'react';
import {get} from 'js-dep-inj';

import AuthHOC from '../../auth/HOC/AuthHOC';

class Main extends Component {
    telegramApiProvider = get('TelegramApiProvider');

    appAdapter = get('AppAdapter');

    componentDidMount() {
        this.telegramApiProvider.invokeApi('account.checkUsername', {
            username: 'asdsadasds'
        })
            .then((res) => {
                console.log(res);
            }).catch(err => {
            console.log(err);
        })
    }

    onLogout = () => {
        this.appAdapter.logout();
    }

    render() {
        return <div>
            <button onClick={this.onLogout}>Log out</button>
        </div>
    }
}

Main = AuthHOC(Main);

export {
    Main
}
