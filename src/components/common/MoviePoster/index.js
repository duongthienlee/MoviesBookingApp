import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 3, rows = 3;

export default class MoviePoster extends Component {
    // Component prop types
    static propTypes = {
        // Movie object with title, genre, and poster
        movie: PropTypes.object.isRequired,
        // Called when user taps on a poster
        onOpen: PropTypes.func.isRequired,
    }
    render() {
        const { movie, onOpen } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onOpen(movie)}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: "https://image.tmdb.org/t/p/w500/" + movie.poster_path }} style={styles.image} />
                </View>
                <Text style={styles.title} numberOfLines={1}>{movie.title}</Text>
                <Text style={styles.IMDB} numberOfLines={1}> IMDB: {movie.vote_average}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginBottom: 10,
        height: (height - 100) / rows - 10,
        width: (width - 10) / cols - 10,
    },
    imageContainer: {
        flex: 1,                          // take up all available space
    },
    image: {
        borderRadius: 10,                 // rounded corners
        ...StyleSheet.absoluteFillObject, // fill up all space in a container
    },
    title: {
        fontSize: 14,
        marginTop: 4,
    },
    IMDB: {
        color: '#BBBBBB',
        fontSize: 12,
        lineHeight: 14,
    },
});