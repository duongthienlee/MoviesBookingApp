// Movies.js
import React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchMovies } from "../../actions";
import MoviePopupContainer from "../MoviePopupContainer"
import MovieList from "../MovieList"

let page = 1;
class MoviesContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchMovies(page));
    }

    render() {

        if (this.props.loading) {
            return (
                <View style={{
                    flex: 1, justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={styles.container}>

                <ScrollView style={{ flexGrow: 1 }}
                    contentContainerStyle={styles.scrollContent}
                    // Hide all scroll indicators
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <MovieList />

                </ScrollView>

                <MoviePopupContainer />

            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1 // start below status bar
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap'       // allow multiple rows
    }
});

const mapStateToProps = (state) => ({
    loading: state.fetchMovieReducer.loading,
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
