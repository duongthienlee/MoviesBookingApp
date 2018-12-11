// Movies.js
import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Left, Right, Header, Body, Title } from "native-base";
import { withNavigation } from 'react-navigation';

const AppFrame = (props) => {
    return (
        <Container>

            <Header style={{ backgroundColor: 'rgba(48,61,82,1)' }}>
                <Left>
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={props.navigation.openDrawer}>
                        <Ionicons
                            name={'ios-menu'}
                            size={30}
                            style={{ color: "white" }}
                        />
                    </TouchableOpacity >
                </Left>
                <Body>
                    <Title style={{ color: "white" }}>
                        {props.screenTitle}
                    </Title>
                </Body>
                <Right>
                    <Text></Text>
                </Right>
            </Header>
            {props.children}
        </Container>
    );

}


export default withNavigation(AppFrame);
