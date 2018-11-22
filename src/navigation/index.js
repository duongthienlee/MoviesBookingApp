import React from 'react'
// import the different screens
import AuthLoading from '../screens/AuthLoading'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Movies from '../screens/Movies'
import Account from "../screens/Account"
import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator,
    DrawerActions
} from 'react-navigation';
import { Button } from 'react-native';
import { Icon } from 'react-native-elements';
import Confirmation from "../screens/Confirmation"

const InnerDrawer = createDrawerNavigator(
    {
        Movies: Movies,
        Account: Account
    },
    {
        getCustomActionCreators: (route, stateKey) => {
            console.log('inner: ' + stateKey);
            return {
                toggleInnerDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
            };
        },
    }
);
const StackNav = createStackNavigator({
    drawerLeft: {
        screen: InnerDrawer,
        navigationOptions: ({ navigation }) => ({
            headerLeft: (
                <Icon
                    name='map-o'
                    type='font-awesome'
                    size={25}
                    color={'#FF9F1C'}
                    underlayColor={'white'}

                    onPress={navigation.toggleInnerDrawer}
                />

            ),
        }),
    },
});

const MyApp = createStackNavigator({
    Root: {
        screen: StackNav,
    },
    Confirmation: Confirmation,

});


// switch Navigator for login&Signup screens 
const AppNavigation = createSwitchNavigator(
    {
        AuthLoading,
        SignUp,
        Login,
        MyApp
    },
    {
        initialRouteName: 'AuthLoading'
    }
)

export default AppNavigation;