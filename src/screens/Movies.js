// Movies.js
import React from 'react'
import MoviePageNavContainer from "../containers/MoviePageNavContainer"
import MoviesContainer from "../containers/MoviesContainer"
import AppHeader from "../components/AppHeader"
const Movies = () => {
    return (
        <React.Fragment>
            <AppHeader
                screenTitle={"Movies"}
            >
                <React.Fragment>
                    <MoviesContainer />
                    <MoviePageNavContainer />
                </React.Fragment>
            </AppHeader>
        </React.Fragment >
    );

}


export default (Movies);
