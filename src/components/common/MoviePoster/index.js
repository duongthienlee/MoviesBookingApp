import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import styles from "./MoviePoster.style"


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
