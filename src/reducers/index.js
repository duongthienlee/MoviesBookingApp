import { combineReducers } from "redux";
import fetchMovieReducer from "./fetchMovieReducer";
import moviePageNavReducer from "./moviePageNavReducer";
import moviePopupReducer from "./moviePopupReducer";

export default combineReducers({
  fetchMovieReducer,
  moviePageNavReducer,
  moviePopupReducer
});