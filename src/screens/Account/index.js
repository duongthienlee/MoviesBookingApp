import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    View, Text, Image, FlatList, ScrollView, TouchableHighlight, ActivityIndicator, StatusBar
} from 'react-native'
import firebase from 'react-native-firebase'
import CustomButton from "../../components/common/button"
import styles from "./Account.style"
import AppFrame from "../../AppFrame"
class Account extends Component {
    state = {
        chosen: false,
    }
    handleSignOut = () => {
        firebase.auth().signOut().then(function () {
            this.setState({ chosen: true }, this.props.navigation.navigate('Login'))
        }).catch(function (error) {
            console.log(error)
        });
    }
    listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                    marginBottom: "5%"
                }}
            />
        );
    };
    render() {
        console.log(this.props.bookedCodesData)
        return (
            <AppFrame
                screenTitle={"Account"}
            >
                <View style={styles.container}>
                    <StatusBar
                        backgroundColor="rgba(37, 48, 66,1)"
                        barStyle="light-content"
                    />
                    <View style={{ marginBottom: 10, ...styles.flexAlignInRowStyle }}>
                        <View style={styles.flexVerticalHorizontal}>
                            <Image style={styles.img} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                        </View>
                        <View style={{ paddingTop: 50, ...styles.flexVerticalHorizontal }}>
                            <Text style={styles.username}>
                                {this.props.updatedUser && this.props.updatedUser.account.username}
                            </Text>
                            <Text>{this.props.updatedUser && this.props.updatedUser.account.email}</Text>
                        </View>
                    </View>

                    <View style={styles.listHeaderView}>
                        <Text style={styles.listHeader}>Your movies booking code</Text>
                    </View>

                    {this.props.bookedCodesData ?
                        <ScrollView>
                            <View
                                style={{ paddingLeft: 20, paddingRight: 20 }}
                            >
                                <View style={{ marginBottom: 20, ...styles.flexAlignInRowStyle }} >
                                    <View style={styles.flexVerticalHorizontal}>
                                        <Text style={styles.listHeader}>Date</Text>
                                    </View>
                                    <View style={styles.flexVerticalHorizontal}>
                                        <Text style={styles.listHeader}>Time</Text>
                                    </View>
                                    <View style={styles.flexVerticalHorizontal}>
                                        <Text style={styles.listHeader}>Movies</Text>
                                    </View>
                                </View>
                                <FlatList
                                    keyExtractor={item => item.code}
                                    renderItem={({ item }) =>
                                        <React.Fragment>
                                            <View style={styles.flexAlignInRowStyle}>
                                                <View style={styles.flexVerticalHorizontal}>
                                                    <Text >{item.chosenDay}</Text>
                                                </View>
                                                <View style={styles.flexVerticalHorizontal}>
                                                    <Text >{item.chosenTime}</Text>
                                                </View>
                                                <View style={styles.flexVerticalHorizontal}>
                                                    <Text >{item.movieChosen}</Text>
                                                </View>
                                            </View>

                                            <View style={{ display: "flex", alignSelf: 'center' }}>
                                                <TouchableHighlight
                                                    style={styles.buttonContainer}
                                                    onPress={() => {
                                                        this.props.navigation.navigate('Confirmation', { movie: item })
                                                    }}>
                                                    <Text style={styles.button}>Open booking code</Text>
                                                </TouchableHighlight>

                                            </View>
                                        </React.Fragment>
                                    }
                                    data={this.props.bookedCodesData}
                                    ItemSeparatorComponent={this.listSeparator}
                                />
                            </View>
                        </ScrollView>
                        :
                        <ActivityIndicator size="large" />
                    }
                    < View style={styles.logoutButtonView}>
                        <CustomButton
                            buttonStyles={styles.buttonStyle}
                            value="Sign out"
                            isChosen={this.state.chosen}
                            onChoose={this.handleSignOut}
                        />
                    </View>
                </View>
            </AppFrame >
        );
    }
}

const mapStateToProps = (state) => ({
    updatedUser: state.userSetReducer.updatedUser,
    bookedCodesData: state.updateBookedCodesDataReducer.bookedCodesData,
})
export default connect(mapStateToProps)(Account);