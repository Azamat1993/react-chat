import { get } from 'js-dep-inj';
import {createEpicMiddleware} from 'redux-observable';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../modules/reducers';

export class Store {
  constructor() {
    this.storage = get('Storage');
    this.instance = this.initialize();
  }

  getInitialState() {
    return this.storage.getStore();
  }

  initialize() {
    const epicMiddleware = createEpicMiddleware();
    const instance = createStore(
      reducers,
      this.getInitialState(),
      applyMiddleware(epicMiddleware)
    );
    return instance;
  }
}
