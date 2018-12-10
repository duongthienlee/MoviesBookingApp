import React from 'react';
import {
    View
} from 'react-native';
import CustomButton from "../../components/common/button";
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions";

let page = 1;
class MoviePageNav extends React.Component {
    state = { onChoosePrevBtn: false, onChooseNextBtn: false }

    nextPageHandle = () => {
        page++
        this.setState({
            onChoosePrevBtn: false,
            onChooseNextBtn: true
        });
        this.props.dispatch(fetchMovies(page));



    }
    prevPageHandle = () => {
        page > 1 && page--
        this.setState({
            onChoosePrevBtn: true,
            onChooseNextBtn: false
        });
        this.props.dispatch(fetchMovies(page));
    }
    render() {
        return (
            <View style={{ flexDirection: "row", alignSelf: "center", height: 50 }}>
                <View style={{ flex: 1 }}>
                    <CustomButton
                        buttonStyles={{
                            borderRightWidth: 1,
                            padding: 15,
                            width: "100%",
                            height: "100%",
                            justifyContent: "center"
                        }}
                        value="Prev"
                        isChosen={this.state.onChoosePrevBtn}
                        onChoose={this.prevPageHandle}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <CustomButton
                        buttonStyles={{
                            borderRightWidth: 1,
                            padding: 15,
                            width: "100%",
                            height: "100%",
                            justifyContent: "center"

                        }}
                        value="Next"
                        isChosen={this.state.onChooseNextBtn}
                        onChoose={this.nextPageHandle}
                    />

                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => ({
    onChooseNextBtn: state.moviePageNavReducer.onChooseNextBtn,
    onChoosePrevBtn: state.moviePageNavReducer.onChoosePrevBtn
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviePageNav);


