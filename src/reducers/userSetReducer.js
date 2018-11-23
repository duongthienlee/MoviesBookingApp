
import { USER_SET } from "../actions/types";


const initialState = {
    updatedUser: null,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case USER_SET:
            return {
                ...state,
                updatedUser: action.payload
            };

        default:
            return state;
    }
}
