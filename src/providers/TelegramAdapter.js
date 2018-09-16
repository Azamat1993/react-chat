// @flow
import React from 'react';
import {AppAdapterInterface} from './AppAdapter.interface';
import {get} from 'js-dep-inj';

import {Auth} from '../modules/telegram/components';

export class TelegramAdapter implements AppAdapterInterface {
    store = get('Store').instance;
    telegramApiProvider = get('TelegramApiProvider');

    render() {
    }

    isAuthenticated() {
        return this.store.getState().telegram.isAuthenticated;
    }

    authComponent() {
        return <Auth />;
    }

    logout() {
        this.telegramApiProvider.invokeApi('auth.logOut');
    }
}
