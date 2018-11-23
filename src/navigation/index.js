import React from 'react'
// import the different screens
import AuthLoading from '../screens/AuthLoading'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Movies from '../screens/Movies'
import Account from "../screens/Account"
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Confirmation from "../screens/Confirmation"
import DrawerContent from "./DrawerContent"
const Drawer = createDrawerNavigator(
    {
        Movies: {
            screen: Movies
        },
        Account: {
            screen: Account
        }
    },
    {
        contentComponent: props => <DrawerContent {...props} />,
        drawerWidth: 320,

    }

);

const MyApp = createStackNavigator({
    Root: {
        screen: Drawer,
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