import {combineReducers} from 'redux';

import telegram from './telegram/reducer';

const reducers = combineReducers({
    telegram
});

export default reducers;
