
import MoviePopup from "../../components/common/MoviePopup"
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviePopupCloseFn, moviePopupChooseDay, moviePopupChooseTime, updateLocallyBookedCodesData } from "../../actions";
import { withNavigation } from 'react-navigation';
import firebase from 'react-native-firebase'
import { days, times } from "../../variables/data"
import uuidv4 from 'uuid/v4';
import _ from "lodash";
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
        const uniqueCode = uuidv4()
        const bookedCode = {
            movieChosen: this.props.moviePopup.title,
            chosenDay: days[this.props.chosenDay],
            chosenTime: times[this.props.chosenTime],
            code: uniqueCode
        }
        const { currentUser } = firebase.auth()
        // Make sure they selected time 
        if (this.props.chosenTime === null) {
            alert('Please select show time');
        } else {
            // Close popup
            this.closeMovie();
            // save the uniqueCode to database
            let props = this.props
            firebase.database().ref('users/' + currentUser.uid + "/account/bookedCodes/" + uniqueCode).update(bookedCode)
            // convert it to array then add it to current bookedCodesData
            props.dispatch(updateLocallyBookedCodesData((bookedCode)))
            // Navigate away to Confirmation route
            this.props.navigation.navigate('Confirmation', { movie: bookedCode })
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
