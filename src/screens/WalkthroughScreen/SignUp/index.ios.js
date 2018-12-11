// SignUp.js
import React from 'react'
import { Text, TextInput, View, Image, KeyboardAvoidingView } from 'react-native'
import CustomButton from "../../../components/common/button"
import logo from "../../../assets/logo.png"
import { signupRequest } from "../../../actions"
import { connect } from 'react-redux';
import styles from "../LoginSignUp.style"
export class SignUp extends React.Component {
    state = { username: '', email: '', password: '', errorMessage: null, chosen: false }
    handleSignUp = () => {
        this.setState({ chosen: true })
        this.props.dispatch(signupRequest(this.state.email, this.state.password, this.state.username));
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

