// Movies.js
import React from 'react'
import MoviePageNavContainer from "../../containers/MoviePageNavContainer"
import MoviesContainer from "../../containers/MoviesContainer"
import AppFrame from "../../AppFrame"
import GetUserInfoContainer from "../../containers/GetUserInfoContainer"
const Movies = () => {
    return (
        <GetUserInfoContainer>
            <AppFrame
                screenTitle={"Movies"}
            >
                <React.Fragment>
                    <MoviesContainer />
                    <MoviePageNavContainer />
                </React.Fragment>
            </AppFrame>
        </GetUserInfoContainer >
    );

}


export default (Movies);
