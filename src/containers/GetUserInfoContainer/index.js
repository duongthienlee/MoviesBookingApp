import React, { Component } from 'react';
import { connect } from 'react-redux'
import firebase from 'react-native-firebase'
import { userSet, updateBookedCodesData } from "../../actions"
import _ from "lodash";
class index extends Component {
    componentDidMount() {
        const { currentUser } = firebase.auth()
        let props = this.props
        firebase.database().ref('users/' + currentUser.uid).once('value').then(function (snapshot) {
            let userData = snapshot.val();
            props.dispatch(userSet(userData))

        })
        firebase.database().ref('users/' + currentUser.uid + "/account").once('value').then(function (snapshot) {
            let bookedCodesData = snapshot.val();
            props.dispatch(updateBookedCodesData(_.values(bookedCodesData.bookedCodes)))

        })
    }
    render() {
        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(mapDispatchToProps)(index);
