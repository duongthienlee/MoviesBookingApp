import React, { Component } from 'react';
import { ImageBackground } from 'react-native'
import bg from "../assets/bg.jpg"
import { NavigationActions, withNavigation } from 'react-navigation';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'react-native-firebase'
import styles from './Sidebar.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
class DrawerItems extends Component {
    navigateToScreen = (route) => () => {
        const navigate = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigate);
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={bg}
                    style={{ resizeMode: 'stretch' }}>
                    <View style={styles.headerBannerContainer}>
                        <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{this.props.updatedUser ? this.props.updatedUser.account.username : "name(need persistent data for redux)"}</Text>
                        <Text style={{ color: 'white', fontSize: 14, paddingTop: 5 }}>{this.props.updatedUser ? this.props.updatedUser.account.email : "email(need persistent data for redux)"}</Text>
                    </View>
                </ImageBackground>
                <View>
                    <TouchableOpacity style={styles.itemWrappers} onPress={this.navigateToScreen('Movies')}>
                        <View style={this.props.navigation.state.index === 0 ? { backgroundColor: "rgba(45,46,48,0.1)", ...styles.itemContainer } : { backgroundColor: "rgba(48,61,82,0)", ...styles.itemContainer }} >
                            <Ionicons
                                name='ios-home'
                                size={22}
                                style={styles.itemIcons}
                            />
                            <Text style={styles.itemLabels}>Movies </Text>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemWrappers} onPress={this.navigateToScreen('Account')}>
                        <View style={this.props.navigation.state.index === 1 ? { backgroundColor: "rgba(45,46,48,0.1)", ...styles.itemContainer } : { backgroundColor: "rgba(48,61,82,0)", ...styles.itemContainer }} >
                            <Ionicons
                                name='ios-settings'
                                size={22}
                                style={styles.itemIcons}
                            />
                            <Text style={styles.itemLabels}>Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}
const mapStateToProps = (state) => ({
    updatedUser: state.userSetReducer.updatedUser,
})
export default connect(mapStateToProps)(withNavigation(DrawerItems));
