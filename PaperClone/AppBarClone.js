import React from 'react';
import { BackHandler, Alert } from 'react-native';
import { Appbar } from 'react-native-paper';

const AppBarClone = () => {

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton());
    }

    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },
        ],
            {
                cancelable: false
            }
        )
        return true;
    }

    componentDidMount = () => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton());
    }

    componentWillUnmount = () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton());
    }

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={() => { onButtonPress() }} />
            <Appbar.Content title="Home" />
            {/* <Appbar.Action icon="magnify" onPress={() => { console.log("hii") }} /> */}
        </Appbar.Header>
    )
}
export default AppBarClone;