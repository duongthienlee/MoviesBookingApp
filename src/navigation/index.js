import React from 'react'
// import the different screens
import AuthLoading from '../screens/WalkthroughScreen/AuthLoading'
import SignUp from '../screens/WalkthroughScreen/SignUp'
import Login from '../screens/WalkthroughScreen/Login'
import Movies from '../screens/Movies'
import Account from "../screens/Account"
import { createSwitchNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation';
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