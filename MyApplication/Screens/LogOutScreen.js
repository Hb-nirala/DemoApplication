import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const LogOutScreen = () => {
    return (
        <View style={LogoutScreenStyle.viewContainerStyle}>
            <TouchableOpacity style={LogoutScreenStyle.touichableStyle}>
                <Text style={LogoutScreenStyle.textStyle}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
const LogoutScreenStyle = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touichableStyle: {
        width: deviceWidth / 2,
        height: deviceHeight / 8,
        backgroundColor: '#e00618',
        justifyContent: 'center',
        borderRadius: 30,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
    }
})

export default LogOutScreen;