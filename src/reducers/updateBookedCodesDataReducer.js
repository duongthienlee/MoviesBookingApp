

import { UPDATE_BOOKED_CODES_DATA, UPDATE_LOCALLY_BOOKED_CODES_DATA } from "../actions/types";
import _ from "lodash";
const bookedCodesState = {
    bookedCodesData: [],

};
export default function (state = bookedCodesState, action) {
    switch (action.type) {
        case UPDATE_BOOKED_CODES_DATA:
            return {
                ...state,
                bookedCodesData: action.payload
            }
        case UPDATE_LOCALLY_BOOKED_CODES_DATA:
            return {
                ...state,
                bookedCodesData: state.bookedCodesData.concat(action.payload)
            }
        default:
            return state;
    }
}
