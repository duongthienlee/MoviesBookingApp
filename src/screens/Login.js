// Login.js
import React from 'react'
import { StyleSheet, Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
import bg from "../assets/bg.jpeg"
import logo from "../assets/logo.png"
import CustomButton from "../components/common/button"

export default class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null, chosen: false }
    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
        this.setState({ chosen: true })
    }
    render() {
        return (

            <View style={styles.viewContainer}>
                <KeyboardAvoidingView style={styles.viewContainer} behavior="padding">
                    <View style={styles.logoView}>
                        <Image
                            style={{ alignSelf: 'center' }}
                            source={logo} />
                    </View>

                    <View style={styles.inputView}>
                        {this.state.errorMessage &&
                            <Text style={{ color: 'red' }}>
                                {this.state.errorMessage}
                            </Text>}
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={"white"}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={email => this.setState({ email, chosen: false })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.textInput}
                            placeholderTextColor={"white"}
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={password => this.setState({ password, chosen: false })}
                            value={this.state.password}
                        />
                    </View>

                    <View style={styles.buttonView}>
                        <CustomButton
                            buttonStyles={{
                                borderColor: "rgba(38,41,43,1)",
                                borderWidth: 1,
                                borderRadius: 10,
                                padding: 15,
                                marginTop: 10,
                                marginBottom: 10,
                                width: "100%",
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            value="Login"
                            isChosen={this.state.chosen}
                            onChoose={this.handleLogin}
                        />

                        <Text style={{ textAlign: "center", color: "white" }} onPress={() => this.props.navigation.navigate('SignUp')}>
                            Don't have an account? <Text style={{ textTransform: "capitalize" }}>register now!</Text>
                        </Text>


                    </View>
                </KeyboardAvoidingView>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: 'rgba(48,61,82,1)',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    // Logo view 
    logoView: {
        flex: 0.35,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    // Input view 
    inputView: {
        flex: 0.45,
        justifyContent: 'flex-end',


    },
    textInput: {
        height: 50,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        color: "white"
    },
    // Button view 
    buttonView: {
        flex: 0.20,
        justifyContent: "flex-end",
        paddingBottom: 35,
    }
})