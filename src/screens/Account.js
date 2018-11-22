// Loading.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Account extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Account',
    drawerIcon: ({ tintColor }) => (
      <Ionicons
        name={'ios-settings'}
        size={18}
        style={{ color: tintColor }}
      />
    )
  };


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
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
                </Text>
        <Text style={{ textAlign: "center", color: "black" }} onPress={() => this.handleSignOut()}>
          Sign Out
        </Text>
      </View>
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