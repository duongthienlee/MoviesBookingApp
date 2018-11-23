// SignUp.js
import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, KeyboardAvoidingView } from 'react-native'
import CustomButton from "../components/common/button"
import logo from "../assets/logo.png"
import { signupRequest } from "../actions"
import { connect } from 'react-redux';
export class SignUp extends React.Component {
    state = { username: '', email: '', password: '', errorMessage: null, chosen: false }
    handleSignUp = () => {
        this.setState({ chosen: true })
        this.props.dispatch(signupRequest(this.state.email, this.state.password, this.state.username));
        // this.props.navigation.navigate('Main')
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
                        {this.props.signUpError &&
                            <Text style={{ color: 'red' }}>
                                {this.props.signUpError.toString()}
                            </Text>}
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={"white"}
                            autoCapitalize="none"
                            placeholder="Username"
                            onChangeText={username => this.setState({ username })}
                            value={this.state.username}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor={"white"}
                            autoCapitalize="none"
                            placeholder="Email"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />
                        <TextInput
                            secureTextEntry
                            style={styles.textInput}
                            placeholderTextColor={"white"}
                            autoCapitalize="none"
                            placeholder="Password"
                            onChangeText={password => this.setState({ password })}
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
                            value="Sign Up"
                            isChosen={this.state.chosen}
                            onChoose={this.handleSignUp}
                        />

                        <Text style={{ textAlign: "center", color: "white" }} onPress={() => this.props.navigation.navigate('Login')}>
                            Already have an account? <Text style={{ textTransform: "capitalize" }}>Login!</Text>
                        </Text>

                    </View>
                </KeyboardAvoidingView>
            </View>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
const mapStateToProps = (state) => ({
    signUpError: state.authHandlingErrorReducer.signUpError
})
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

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
        paddingBottom: 35
    }
})
