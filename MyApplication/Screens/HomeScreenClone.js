import React, { useState } from 'react';
import { Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Provider } from 'react-native-paper';
import AppBarClone from '../../PaperClone/AppBarClone';

const deviceWidth = Dimensions.get('screen').width
const deviceHeight = Dimensions.get('screen').height

const HomeScreenClone = (props) => {
    const [loginData, setLoginData] = useState('')

    // console.log('loginData===', loginData)
    const takeLoginData = (data) => {
        setLoginData(data)
    }


    return (
        <Provider>
            <AppBarClone />
            <ImageBackground
                style={HomeScreenStyle.viewContainerStyle}
                resizeMode='cover'
                source={{ uri: 'https://wallpaperaccess.com/full/57159.jpg' }}>
                <Text style={HomeScreenStyle.textStyle}>{loginData.name != undefined ? 'Welcome Back!' : 'Welcome'}</Text>

                {loginData.name != undefined ? <Text style={HomeScreenStyle.textStyle}>{loginData.name}</Text> : <Text style={HomeScreenStyle.textStyle}>User</Text>}
                {/* // <TouchableOpacity
            //     // onPress={() => { props.navigation.navigate('Login' )}
            //     style={HomeScreenStyle.touchableStyle}>
            //     <Text style={HomeScreenStyle.textStyle}>Login</Text>
            // </TouchableOpacity>} */}

            </ImageBackground>
        </Provider>
    )
}
const HomeScreenStyle = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'white',
    },
    touchableStyle: {
        marginTop: 10,
        alignSelf: 'center',
        width: deviceWidth / 2,
        height: deviceHeight / 8,
        backgroundColor: 'green',
        justifyContent: 'center',
        borderRadius: 20,
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
    }
})
export default HomeScreenClone;