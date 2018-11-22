// renders a confirmation code along with a button to close that screen and go back to movie list.

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View, Image
} from 'react-native';
import logo from "../assets/blackLogo.png"
export default class Confirmation extends Component {

    static navigationOptions = {
        title: 'Confirmation',
    };

    render() {
        const { code } = this.props;
        return (
            <View style={styles.container}>
                <Image source={logo} />
                <Text style={styles.header}>Your confirmation code</Text>
                <Text style={styles.code}>{this.props.navigation.state.params.code}</Text>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    // Go back when pressed
                    onPress={() => this.props.navigation.goBack()}
                >
                    <Text style={styles.button}>Done</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {

        color: '#333',
        fontSize: 20,
    },
    code: {

        color: '#333',
        fontSize: 36,
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'rgb(38,41,43)',
        borderRadius: 100,
        margin: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    button: {

        color: '#FFFFFF',
        fontSize: 18,
    },
});