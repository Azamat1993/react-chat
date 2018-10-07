import {get} from 'js-dep-inj';
import {createEpicMiddleware} from 'redux-observable';
import {createStore, applyMiddleware} from 'redux';
import {throttleTime} from 'rxjs/operators';
import {Observable} from 'rxjs';

import reducers from '../modules/reducers';
import rootEpic from '../modules/epics';

export class Store {
    observer$ = null;

    constructor() {
        this.storage = get('Storage');
        this.instance = this.initialize();

        this.asObservable()
            .subscribe((storeState) => {
                this.storage.setStore(storeState);
            })
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

        epicMiddleware.run(rootEpic);

        return instance;
    }

    asObservable() {
        if (!this.observer$) {
            this.observer$ = Observable.create((observer) => {
                try {
                    this.instance.subscribe(() => {
                        observer.next(this.instance.getState());
                    });
                } catch (err) {
                    observer.error(err);
                }
            })
        }

        return this.observer$;
    }
}
