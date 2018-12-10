// Login.js
import React from 'react'
import { Image, KeyboardAvoidingView, Text, TextInput, View } from 'react-native'
import logo from "../../../assets/logo.png"
import CustomButton from "../../../components/common/button"
import { loginRequest } from "../../../actions"
import { connect } from 'react-redux';
import styles from "../LoginSignUp.style"
export class Login extends React.Component {
    state = { email: '', password: '', errorMessage: null, chosen: false }
    handleLogin = () => {
        const { email, password } = this.state
        this.props.dispatch(loginRequest(email, password));
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

                        {this.props.loginError &&
                            <Text style={{ color: 'red' }}>
                                {this.props.loginError.toString()}
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
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    };
}
const mapStateToProps = (state) => ({
    loginError: state.authHandlingErrorReducer.loginError
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
