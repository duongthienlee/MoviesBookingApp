import { combineReducers } from "redux";
import fetchMovieReducer from "./fetchMovieReducer";
import moviePageNavReducer from "./moviePageNavReducer";
import moviePopupReducer from "./moviePopupReducer";
import userSetReducer from "./userSetReducer"
import authHandlingErrorReducer from "./authHandlingErrorReducer"
export default combineReducers({
  fetchMovieReducer,
  moviePageNavReducer,
  moviePopupReducer,
  userSetReducer,
  authHandlingErrorReducer
});