// Movies.js
import React from 'react'

import MoviePageNavContainer from "../containers/MoviePageNavContainer"
import Ionicons from 'react-native-vector-icons/Ionicons';
import MoviesContainer from "../containers/MoviesContainer"
class Movies extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Movies',
        drawerIcon: ({ tintColor }) => (
            <Ionicons
                name='ios-home'
                size={18}
                style={{ color: tintColor }}
            />
        )
    };
    render() {

        return (
            <React.Fragment>
                <MoviesContainer />
                <MoviePageNavContainer />
            </React.Fragment>
        );

    }
}

export default (Movies);
