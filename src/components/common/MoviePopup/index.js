import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Animated,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    ScrollView
} from 'react-native';
import { days, times } from "../../../variables/data"
import CustomButton from "../button"
import Options from '../Options';
const { height } = Dimensions.get('window');
// Set default popup height to 67% of screen height
const defaultHeight = height * 0.67;
console.log("height = " + height);
export default class MoviePopup extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        // Movie object that has title, genre, poster, days and times
        movie: PropTypes.object,
        // Index of chosen day
        chosenDay: PropTypes.number,
        // Index of chosem show time
        chosenTime: PropTypes.number,
        // Gets called when user chooses day
        onChooseDay: PropTypes.func,
        // Gets called when user chooses time
        onChooseTime: PropTypes.func,
        // Gets called when user books their ticket
        onBook: PropTypes.func,
        // Gets called when popup closed
        onClose: PropTypes.func,
    }

    state = {
        // Animates slide ups and downs when popup open or closed
        animatedValue: new Animated.Value(this.props.isOpen ? 0 : height),
        // Backdrop opacity
        opacity: new Animated.Value(0),
        // Popup height that can be changed by pulling it up or down
        height: defaultHeight,
        // Visibility flag
        visible: this.props.isOpen,
    };


    // Handle isOpen changes to either open or close popup
    componentWillReceiveProps(nextProps) {
        // isOpen prop changed to true from false
        if (!this.props.isOpen && nextProps.isOpen) {
            this.animateOpen();
        }
        // isOpen prop changed to false from true
        else if (this.props.isOpen && !nextProps.isOpen) {
            this.animateClose();
        }
    }

    // Open popup
    animateOpen() {
        // Update state first
        this.setState({ visible: true }, () => {
            Animated.parallel([
                // Animate opacity
                Animated.timing(
                    this.state.opacity, { duration: 400, toValue: 0.5 } // semi-transparent
                ),
                // And slide up
                Animated.timing(
                    this.state.animatedValue, { duration: 400, toValue: 0 } // top of the screen
                ),
            ]).start();
        });
    }

    // Close popup
    animateClose() {
        Animated.parallel([
            // Animate opacity
            Animated.timing(
                this.state.opacity, { duration: 400, toValue: 0 } // transparent
            ),
            // Slide down
            Animated.timing(
                this.state.animatedValue, { duration: 400, toValue: height } // bottom of the screen
            ),
        ]).start(() => this.setState({
            // Reset to default values
            height: defaultHeight,
            visible: false,
        }));
    }

    render() {
        const {
            movie,
            chosenDay,
            chosenTime,
            onChooseDay,
            onChooseTime,
            onBook
        } = this.props;
        // Pull out movie data

        // Render nothing if not visible
        if (!this.state.visible) {
            return null;
        }
        return (
            <View style={styles.container}>
                {/* Closes popup if user taps on semi-transparent backdrop */}
                <TouchableWithoutFeedback onPress={this.props.onClose}>
                    <Animated.View style={[styles.backdrop, { opacity: this.state.opacity }]} />

                </TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.modal, {
                        // Animates height
                        height: this.state.height,
                        // Animates animatedValue on the screen
                        transform: [{ translateY: this.state.animatedValue }]
                    }]}
                >
                    {/* Content */}
                    <View style={styles.content}>
                        {/* Movie poster, title and genre */}
                        <View
                            style={styles.movieContainer}
                        >
                            {/* Poster */}
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path }} style={styles.image} />
                            </View>
                            {/* Title and genre */}
                            <ScrollView
                                contentContainerStyle={styles.scrollContent}
                                // Hide all scroll indicators
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={true}
                            >
                                <View style={styles.movieInfo}>
                                    <Text style={styles.title}>{movie.title}</Text>
                                    <Text style={styles.genre}>{movie.overview}</Text>
                                </View>
                            </ScrollView>
                        </View>
                        {/* Showtimes  */}
                        <View>
                            <Text style={styles.sectionHeader}>Day</Text>
                            <Options
                                values={days}
                                chosen={chosenDay}
                                onChoose={onChooseDay}
                            />

                            <Text style={styles.sectionHeader}>Showtime</Text>
                            <Options
                                values={times}
                                chosen={chosenTime}
                                onChoose={onChooseTime}
                            />
                        </View>
                    </View>
                    {/* Footer */}

                    <View style={{ flexDirection: "row", alignSelf: "center", paddingLeft: 20, paddingRight: 20 }}>

                        <View style={{ flex: 1 }}>
                            <CustomButton
                                buttonStyles={{
                                    borderColor: "rgba(38,41,43,1)",
                                    borderWidth: 1,
                                    borderRightWidth: 0,
                                    borderTopLeftRadius: 10,
                                    borderBottomLeftRadius: 10,
                                    padding: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                    marginBottom: 25,
                                    width: "100%"
                                }}
                                value="Close"
                                isChosen={false}
                                onChoose={this.props.onClose}
                            />
                        </View>
                        <View style={{ flex: 1 }}>
                            <CustomButton
                                buttonStyles={{
                                    borderColor: "rgba(38,41,43,1)",
                                    borderWidth: 1,
                                    padding: 10,
                                    marginRight: 10,
                                    marginTop: 10,
                                    marginBottom: 25,
                                    borderTopRightRadius: 10,
                                    borderBottomRightRadius: 10,
                                    width: "100%"
                                }}
                                value="Book My Tickets"
                                isChosen={false}
                                onChoose={onBook}
                            />
                        </View>
                    </View>
                </Animated.View>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    // Main container
    container: {
        ...StyleSheet.absoluteFillObject,   // fill up all screen
        justifyContent: 'flex-end',         // align popup at the bottom
        backgroundColor: 'transparent',     // transparent background
    },
    // Semi-transparent background below popup
    backdrop: {
        ...StyleSheet.absoluteFillObject,   // fill up all screen
        backgroundColor: 'black',
    },
    // Popup
    modal: {
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        margin: 20,
        marginBottom: 0,
    },
    // Movie container
    movieContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        maxWidth: 500,
        marginRight: 10,
    },
    image: {
        borderRadius: 10,                   // rounded corners
        ...StyleSheet.absoluteFillObject,   // fill up all space in a container
    },
    scrollContent: {
        flexDirection: 'row',   // arrange posters in rows
        flexWrap: 'wrap'       // allow multiple rows
    },
    movieInfo: {
        marginTop: 40,
        alignItems: "center",
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'center', // center vertically
    },
    title: {
        fontSize: 20,
    },
    genre: {
        color: '#BBBBBB',
        fontSize: 14,
    },
    sectionHeader: {

        color: '#AAAAAA',
    },
    // Footer
    footer: {
        padding: 20,
    },
    buttonContainer: {
        backgroundColor: 'rgba(38,41,43,1)',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});