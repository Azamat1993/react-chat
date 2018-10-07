import * as types from './types';

export const send_code = (phone_number) => {
    return {
        type: types.TG_SEND_CODE,
        payload: phone_number
    }
};

export const sign_in = (phone_code) => {
    console.log(phone_code)
    return {
        type: types.TG_SIGN_IN,
        payload: phone_code
    }
};

export const sign_up = () => {
    return {
        type: types.TG_SIGN_UP
    }
}