import { FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, POP_UP_IS_OPEN, POP_UP_IS_CLOSE, CHOOSE_DAY, CHOOSE_TIME } from "./types";

export const fetchMoviesBegin = () => ({
  type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: { movies }
});

export const fetchMoviesError = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: { error }
});

export const moviePopupOpenFn = (payload) => ({
  type: POP_UP_IS_OPEN,
  payload
});
export const moviePopupCloseFn = (payload) => ({
  type: POP_UP_IS_CLOSE,
  payload
});
export const moviePopupChooseDay = (payload) => ({
  type: CHOOSE_DAY,
  payload
});
export const moviePopupChooseTime = (payload) => ({
  type: CHOOSE_TIME,
  payload
});



const api = "https://api.themoviedb.org/3/movie/now_playing?api_key=4c48652eccb64ec1a831a8b9a24f8477&language=en-US&page="
export function fetchMovies(page) {
  return dispatch => {
    dispatch(fetchMoviesBegin());
    return fetch(api + page)
      .then(handleErrors)
      .then(response => response.json())
      .then(responseJson => {
        dispatch(fetchMoviesSuccess(responseJson.results));
        console.log("test, movie title  " + responseJson.results.total_pages)
        return responseJson.results;
      })
      .catch(error => dispatch(fetchMoviesFailure(error)));
  };
}



// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
