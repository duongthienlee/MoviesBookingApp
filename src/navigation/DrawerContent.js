import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import DrawerItems from "./DrawerItems"

const DrawerContent = (props) => {
    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>

    );
}




export default (DrawerContent);