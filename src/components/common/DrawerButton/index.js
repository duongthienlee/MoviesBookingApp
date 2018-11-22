import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default DrawerButton = () => {
    return (
        < TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
            <Ionicons
                name={'ios-settings'}
                size={18}
                style={{ color: "red" }}
            />
        </TouchableOpacity >
    );
}



