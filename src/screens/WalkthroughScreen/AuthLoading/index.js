// Loading.js
import React from 'react'
import { View, ActivityIndicator, Image, StatusBar } from 'react-native'
import firebase from 'react-native-firebase'
import blackLogo from "../../../assets/blackLogo.png"
import styles from "./AuthLoading.style"
export default class AuthLoading extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Root' : 'Login')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgba(48,61,82,1)"
          barStyle="light-content"
        />
        <Image
          style={{ alignSelf: 'center', marginBottom: 20 }}
          source={blackLogo} />
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
