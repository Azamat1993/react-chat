// @flow

import { AppAdapterInterface } from './AppAdapter.interface';

export class TelegramAdapter implements AppAdapterInterface {
  render() {}

  isAuthenticated() {
    return true;
  }
}
