
import MoviePopup from "../../components/common/MoviePopup"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviePopupCloseFn, moviePopupChooseDay, moviePopupChooseTime } from "../../actions";
import { withNavigation } from 'react-navigation';
class index extends Component {
    closeMovie = () => {
        this.props.dispatch(moviePopupCloseFn(false));
        this.props.dispatch(moviePopupChooseDay(0));
        this.props.dispatch(moviePopupChooseTime(null));
    }

    chooseDay = (day) => {
        this.props.dispatch(moviePopupChooseDay(day));
    }

    chooseTime = (time) => {
        this.props.dispatch(moviePopupChooseTime(time));
    }
    bookTicket = () => {
        // Make sure they selected time 
        if (this.props.chosenTime === null) {
            alert('Please select show time');
        } else {
            // Close popup
            this.closeMovie();
            // Navigate away to Confirmation route
            this.props.navigation.navigate('Confirmation', { code: Math.random().toString(36).substring(6).toUpperCase() })
        }
    }
    render() {
        return (
            <MoviePopup
                movie={this.props.moviePopup}
                isOpen={this.props.popupIsOpen}
                onClose={this.closeMovie}
                chosenDay={this.props.chosenDay}
                chosenTime={this.props.chosenTime}
                onChooseDay={this.chooseDay}
                onChooseTime={this.chooseTime}
                onBook={this.bookTicket}
            />
        );
    }
}
const mapStateToProps = (state) => ({
    popupIsOpen: state.moviePopupReducer.popupIsOpen,
    moviePopup: state.moviePopupReducer.moviePopup,
    chosenDay: state.moviePopupReducer.chosenDay,
    chosenTime: state.moviePopupReducer.chosenTime,
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation((index)));
