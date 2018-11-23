import {
  USER_SET, LOGIN_ERROR, SIGN_UP_ERROR,
  FETCH_MOVIES_BEGIN, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
  POP_UP_IS_OPEN, POP_UP_IS_CLOSE, CHOOSE_DAY, CHOOSE_TIME
} from "./types";
import firebase from 'react-native-firebase'
import { NavigationActions } from 'react-navigation'

//-------------------------------------------------- other booking actions-------------------------------------------------
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

//-------------------------------------------------- fetch movie stuff-------------------------------------------------
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
      .catch(error => dispatch(fetchMoviesError(error)));
  };
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


//-------------------------------------------signUp and Login stuff with firebase--------------------------------------
export const userSet = (payload) => ({
  type: USER_SET,
  payload
});
export const signUpError = error => ({
  type: SIGN_UP_ERROR,
  payload: { error }
});
export const loginError = error => ({
  type: LOGIN_ERROR,
  payload: { error }
});
export const signupRequest = (email, password, username) => dispatch => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((authData) => {
      // package up our user.account object and .set(account) without any key value pairs 
      let account = {}
      console.log("check " + authData.user.uid)
      account.email = email.toLowerCase()
      account.uid = authData.user.uid
      account.username = username
      // store to db
      firebase.database().ref('users/' + authData.user.uid).set({
        account
      }).then(() => {
        // Grap a snapshot from the db to validate account creation and update the redux store locally
        firebase.database().ref('users/' + authData.user.uid).once('value').then(function (snapshot) {
          let username = snapshot.val();
          dispatch(userSet(username));
          // navigate to Main
          dispatch(NavigationActions.navigate({ routeName: 'Main' }))
        })

      })
    })
    .catch(error => dispatch(signUpError(error)));
}

export const loginRequest = (email, password) => dispatch => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((authData) => {
      firebase.database().ref('users/' + authData.user.uid).once('value').then(function (snapshot) {
        let username = snapshot.val();
        { !username.account ? console.log('errrrrrrrrr') : dispatch(userSet(username)) }
        dispatch(NavigationActions.navigate({ routeName: 'Main' }))
      })
    })
    .catch(error => dispatch(loginError(error)));
};



