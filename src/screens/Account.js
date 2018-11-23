// Loading.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'
import AppHeader from "../components/AppHeader"
export class Account extends React.Component {
  state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })

  }
  handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      this.props.navigation.navigate('Login')
    }).catch(function (error) {
      console.log(error)
    });
  }
  render() {
    const { currentUser } = this.state
    return (
      <AppHeader
        screenTitle={"Account"}
      >
        <View style={styles.container}>
          <Text>
            Hi {currentUser && currentUser.email}!
                </Text>
          <Text style={{ textAlign: "center", color: "black" }} onPress={() => this.handleSignOut()}>
            Sign Out
        </Text>
        </View>
      </AppHeader>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default (Account);