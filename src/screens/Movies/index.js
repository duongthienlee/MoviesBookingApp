// Movies.js
import React from 'react'
import MoviePageNavContainer from "../../containers/MoviePageNavContainer"
import MoviesContainer from "../../containers/MoviesContainer"
import AppFrame from "../../AppFrame"
import GetUserInfoContainer from "../../containers/GetUserInfoContainer"
import { StatusBar } from "react-native"
const Movies = () => {
    return (
        <GetUserInfoContainer>

            <AppFrame
                screenTitle={"Movies"}
            >
                <React.Fragment>
                    <StatusBar
                        backgroundColor="rgba(37, 48, 66,1)"
                        barStyle="light-content"
                    />
                    <MoviesContainer />
                    <MoviePageNavContainer />
                </React.Fragment>
            </AppFrame>
        </GetUserInfoContainer >
    );

}


export default (Movies);
