import { DECREASE_PAGE, INCREASE_PAGE } from "../actions/types";
const pageState = {
  page: 1,
  onChooseNextBtn: false,
  onChoosePrevBtn: false,
};

export default function (state = pageState, action) {
  switch (action.type) {
    case DECREASE_PAGE:
      return {
        ...state,
        onChoosePrevBtn: true,
        onChooseNextBtn: false,
        page: action.payload,

      };
    case INCREASE_PAGE:
      return {
        ...state,
        onChoosePrevBtn: false,
        onChooseNextBtn: true,
        page: action.payload,

      };
    default:
      return state;
  }
}
