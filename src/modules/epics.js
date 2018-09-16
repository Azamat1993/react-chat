import { combineEpics } from 'redux-observable';

import telegramEpic from './telegram/epics';

export default combineEpics(
    telegramEpic
)