import * as types from './types';
import {combineEpics} from 'redux-observable';
import {tap, switchMap, map} from 'rxjs/operators';
import { from } from 'rxjs';
import {get} from 'js-dep-inj';

let telegramApiProvider;

const setProvider = () => {
    if (!telegramApiProvider) {
        telegramApiProvider = get('TelegramApiProvider');
    }
};

const sendCodeEpic = action$ =>
    action$
        .ofType(types.TG_SEND_CODE)
        .pipe(
            tap(setProvider),
            switchMap(({payload}) => {
                return from(telegramApiProvider.invokeApi('auth.sendCode', {
                    sms_type: 0,
                    api_id: process.env.REACT_APP_API_ID,
                    api_hash: process.env.REACT_APP_API_HASH,
                    lang_code: 'en',
                    phone_number: payload
                }).then(res => res.data))
                    .pipe(map(res => {
                        return {
                            type: types.TG_SEND_CODE_SET,
                            payload: Object.assign({}, res, {
                               phone_number: payload
                            })
                        }
                    }));
            })
        );

const signInEpic = (action$, store) =>
    action$
        .ofType(types.TG_SIGN_IN)
        .pipe(
            tap(setProvider),
            switchMap(({payload}) => {
                return from(telegramApiProvider.invokeApi('auth.signIn', {
                    phone_number: store.value.telegram.phone_number,
                    phone_code_hash: store.value.telegram.phone_code_hash,
                    phone_code: payload
                })
                    .then(res => res.data))
                    .pipe(map(res => {
                        return {
                            type: types.TG_SIGN_IN_SET,
                            payload: res
                        }
                    }))
            })
        )

export default combineEpics(
    sendCodeEpic,
    signInEpic
)