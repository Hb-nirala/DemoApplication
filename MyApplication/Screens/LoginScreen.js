import React, { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { Button, Provider, Text, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const LoginScreen = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSecure, setIsSecure] = useState(true)
    // const [signdata, setSignData] = useState()

    const passwordRef = useRef()

    const login = () => {
        var loginDataObj = {
            name: username,
            passcode: password,
        }

        props.navigation.navigate('Home')
        // props?.route?.params?.takeLoginData(loginDataObj)
    }

    // const takeSignUpData = (data) => {
    //     var localArr = [...signdata]
    //     localArr.push(data)
    //     setSignData(localArr)
    // }

    // console.log('signdata===', signdata)

    return (
        <Provider>
            <View style={loginStyles.viewContainerStyle}>

                <Icon name="user-circle" size={70} />

                <TextInput
                    style={loginStyles.TextInputStyle}
                    placeholder='Username'
                    returnKeyType='next'
                    blurOnSubmit={false}
                    onSubmitEditing={() => { passwordRef.current.focus() }}
                    onChangeText={(username) => { setUsername(username) }}
                />

                <TextInput
                    ref={passwordRef}
                    style={loginStyles.TextInputStyle}
                    placeholder='Password'
                    returnKeyType='done'
                    onChangeText={(password) => { setPassword(password) }}
                    secureTextEntry={isSecure}
                    right={isSecure ? <TextInput.Icon icon="eye-off" onPress={() => { setIsSecure(false) }} /> : <TextInput.Icon icon="eye" onPress={() => { setIsSecure(true) }} />}
                />

                <Button
                    style={loginStyles.TouchableStyle}
                    textColor='white'
                    mode='elevated'
                    buttonColor='green'
                    onPress={() => { login() }}>Login</Button>

                <Button
                    style={loginStyles.TouchableStyle}
                    textColor='white'
                    mode='elevated'
                    buttonColor='green'
                    onPress={() => { login() }}> New User ? SignUp</Button>
            </View>
        </Provider>
    )
}
const loginStyles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInputStyle: {
        width: deviceWidth - 20,
        backgroundColor: 'white',
        margin: 5,
    },
    TouchableStyle: {
        width: deviceWidth / 2,
        height: deviceHeight * 0.1,
        marginTop: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 10,
    },
    TextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 30,
    },
    textHeader: {
        fontSize: 30,
        color: 'black',
    }
})
export default LoginScreen;