import { POP_UP_IS_OPEN, POP_UP_IS_CLOSE, CHOOSE_DAY, CHOOSE_TIME } from "../actions/types";
const pageState = {
    popupIsOpen: false,
    moviePopup: null,
    chosenDay: 0,
    chosenTime: null,
    isLoading: true,
};

export default function (state = pageState, action) {
    switch (action.type) {
        case POP_UP_IS_OPEN:
            return {
                ...state,
                popupIsOpen: action.payload.status,
                moviePopup: action.payload.moviePopup
            }
        case POP_UP_IS_CLOSE:
            return {
                ...state,
                popupIsOpen: action.payload
            }
        case CHOOSE_DAY:
            return {
                ...state,
                chosenDay: action.payload
            }
        case CHOOSE_TIME:
            return {
                ...state,
                chosenTime: action.payload
            }
        default:
            return state;
    }
}
