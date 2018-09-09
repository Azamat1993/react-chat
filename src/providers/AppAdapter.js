// @flow
import { get } from 'js-dep-inj';

import { AppAdapterInterface } from './AppAdapter.interface';
import { menuItems } from '../statics/Sidebar';

export class AppAdapter implements AppAdapterInterface {
  app: any = null;

  render() {

  }

  setApp(appName: string) {
    this.app = get(menuItems.find(menuItem => menuItem.name === appName).adapter);
  }
}