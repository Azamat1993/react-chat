// @flow

import {AppAdapterInterface} from './AppAdapter.interface';

export class WhatsappAdapter implements AppAdapterInterface {
    render() {
    }

    isAuthenticated() {
        return false;
    }

    authComponent() {
        return null;
    }

    logout() {
        // @todo
    }
}
