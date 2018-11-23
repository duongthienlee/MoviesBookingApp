
import { SIGN_UP_ERROR, LOGIN_ERROR } from "../actions/types";
const initialState = {
    signUpError: null,
    loginError: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_ERROR:
            return {
                ...state,
                signUpError: action.payload.error,

            };
        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.payload.error,
            };
        default:
            return state;
    }
}
