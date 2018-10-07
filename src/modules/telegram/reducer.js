import * as types from './types';

const initialState = {
    isAuthenticated: false,
    phone_code_hash: null,
    phone_number: null,
    user: {},
    phone_registered: false
};

export default (state = initialState, action = {}) => {
    const {type, payload} = action;
    switch (type) {
        case types.TG_SEND_CODE_SET:
            const edited = {
                phone_code_hash: payload.phone_code_hash,
                phone_number: payload.phone_number
            };
            if (payload.pFlags && payload.pFlags.phone_registered) {
               edited['phone_registered'] = true;
            }

            return Object.assign({}, state, edited);

        case types.TG_SIGN_IN_SET:
            return Object.assign({}, state, {
                user: payload.user,
                isAuthenticated: true
            });
        default:
            return state;
    }
}