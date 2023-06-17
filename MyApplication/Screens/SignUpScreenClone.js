import React, { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    TextInput,
} from 'react-native';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const SignUpScreenClone = (props) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const phoneRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const signUpFunction = () => {
        var signUpData = {
            userName: name,
            userPhoneNumber: phone,
            userEmail: email,
            user: username,
            userPassword: password,
            userConfirmPassword: confirmPassword
        }
        props.navigation.navigate('Login')
        props.route.params.takeSignUpData(signUpData)

    }



    return (
        <View style={loginStyles.viewContainerStyle}>


            <TextInput
                style={loginStyles.TextInputStyle}
                placeholder='Enter Name'
                returnKeyType='next'
                keyboardType='text'
                onSubmitEditing={() => { phoneRef.current.focus() }}
                onChangeText={(name) => { setName(name) }}
                value={name}
                blurOnSubmit={false}
            />


            <TextInput
                ref={phoneRef}
                style={loginStyles.TextInputStyle}
                placeholder='Enter Phone Number'
                returnKeyType='next'
                keyboardType='number'
                onSubmitEditing={() => { emailRef.current.focus() }}
                onChangeText={(phone) => { setPhone(phone) }}
                value={phone}
                blurOnSubmit={false}
            />

            <TextInput
                ref={emailRef}
                style={loginStyles.TextInputStyle}
                placeholder='Enter Email Address'
                returnKeyLabel='next'
                keyboardType='email'
                onSubmitEditing={() => { usernameRef.current.focus() }}
                onChangeText={(email) => { setEmail(email) }}
                value={email}
                blurOnSubmit={false}
            />

            <TextInput
                ref={usernameRef}
                style={loginStyles.TextInputStyle}
                placeholder='Create username'
                returnKeyType='next'
                keyboardType='text'
                onSubmitEditing={() => { passwordRef.current.focus() }}
                onChangeText={(username) => { setUserName(username) }}
                value={username}
                blurOnSubmit={false}
            />

            <TextInput
                ref={passwordRef}
                style={loginStyles.TextInputStyle}
                placeholder='Create Password'
                returnKeyType='next'
                secureTextEntry={true}
                onSubmitEditing={() => { confirmPasswordRef.current.focus() }}
                onChangeText={(password) => { setPassword(password) }}
                value={password}
                blurOnSubmit={false}
            />

            <TextInput
                ref={confirmPasswordRef}
                style={loginStyles.TextInputStyle}
                placeholder='Confirm Password'
                returnKeyType='done'
                secureTextEntry={true}
                onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
                value={confirmPassword}
            />

            <TouchableOpacity
                onPress={() => { signUpFunction()}}
                style={loginStyles.TouchableStyle}>
                <Text style={loginStyles.TextStyle}>SignUp</Text>
            </TouchableOpacity>

        </View>
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

export default SignUpScreenClone;