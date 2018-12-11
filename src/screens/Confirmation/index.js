// renders a confirmation code along with a button to close that screen and go back to movie list.

import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity,
    View, Image,

} from 'react-native';
import logo from "../../assets/blackLogo.png"
import styles from "./Confirmation.style"
import QRCode from 'react-native-qrcode';
export default class Confirmation extends Component {

    static navigationOptions = {
        title: 'Confirmation',
    };

    render() {
        const { chosenDay, chosenTime, code, movieChosen } = this.props.navigation.state.params.movie;
        return (
            <View style={styles.container}>

                <Image source={logo} style={styles.img} />
                <Text style={styles.header}>Your confirmation code</Text>
                <View style={styles.code}>
                    <QRCode
                        value={code}
                        size={150}
                        bgColor='rgba(48,61,82,1)'
                        fgColor='white' />
                </View>
                <View style={styles.moviesInfoView}>
                    <Text style={styles.moviesInfo}>Movies: {movieChosen}</Text>
                    <Text style={styles.moviesInfo}>Date: {chosenDay}</Text>
                    <Text style={styles.moviesInfo}>Time: {chosenTime}</Text>
                </View>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        // Go back when pressed
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.button}>Done</Text>
                    </TouchableOpacity>
                    <Text style={styles.navigateToAccount} >
                        View your booked movies list ?
                    </Text>
                    <Text onPress={() => this.props.navigation.navigate('Account')} style={styles.clickThis}>
                        click this!
                    </Text>
                </View>
            </View>
        );
    }
}


