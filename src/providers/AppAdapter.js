// @flow
import { get } from 'js-dep-inj';

import { AppAdapterInterface } from './AppAdapter.interface';
import { menuItems } from '../statics/Sidebar';

export class AppAdapter implements AppAdapterInterface {
  app: any = null;

  render() {

  }

  setApp(appName: string) {
    if (appName.charAt(0) === '/') {
      appName = appName.substr(1);
    }
    this.app = get(menuItems.find(menuItem => menuItem.name === appName).adapter);
  }

  isAuthenticated() {
    return this.app.isAuthenticated();
  }
}
