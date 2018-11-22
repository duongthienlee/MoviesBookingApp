import React from 'react';
import MoviePoster from '../../components/common/MoviePoster';
import { connect } from 'react-redux';
import { moviePopupOpenFn } from "../../actions";
const MovieList = (props) => {
    // MoviePopup
    openMovie = (movie) => {
        let payload = { "status": true, "moviePopup": movie }
        props.dispatch(moviePopupOpenFn(payload));
    }
    return (
        <React.Fragment>
            {props.moviesData.map((movie, index) =>
                <MoviePoster
                    movie={movie}
                    // get movie object when click
                    onOpen={this.openMovie}
                    key={index}
                />)}
        </React.Fragment>
    );
}


const mapStateToProps = (state) => ({
    moviesData: state.fetchMovieReducer.moviesData,
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList);


