import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import {Button, Provider, RadioButton, Text, TextInput } from 'react-native-paper';


const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const SignUpClone = () => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [male, setMale] = useState(false)
    const [female, setFemale] = useState(false)

    const phoneRef = useRef()
    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    return (
        <Provider>

            <TextInput
                style={Styles.TextInputStyle}
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
                style={Styles.TextInputStyle}
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
                style={Styles.TextInputStyle}
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
                style={Styles.TextInputStyle}
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
                style={Styles.TextInputStyle}
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
                style={Styles.TextInputStyle}
                placeholder='Confirm Password'
                returnKeyType='done'
                secureTextEntry={true}
                onChangeText={(confirmPassword) => { setConfirmPassword(confirmPassword) }}
                value={confirmPassword}
            />
            <View style={Styles.radioButtonGroupStyle}>
                <Text>Gender</Text>

                <RadioButton.Group>
                    <View style={Styles.radioButtonGroup}>
                        <View style={Styles.radioButton}>

                            <RadioButton value='Male' status={male ? 'checked' : 'unchecked'}
                                onPress={() => { setFemale(false); setMale(!male); }} />
                            <Text>Male</Text>

                        </View>

                        <View style={Styles.radioButton}>

                            <RadioButton value='Female' status={female ? 'checked' : 'unchecked'}
                                onPress={() => { setMale(false); setFemale(!female) }} />
                            <Text>Female</Text>

                        </View>
                    </View>
                </RadioButton.Group>
            </View>
            <Button textColor='white'
                mode='contained-tonal'
                buttonColor='green'
                onPress={()=>{}}>
                Submit
            </Button>
        </Provider>
    )
}
const Styles = StyleSheet.create({
    TextInputStyle: {
        margin: 10,
    },
    radioButton: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
    },
    radioButtonGroupStyle: {
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: (deviceWidth * 0.7) - 20,
    },
    radioButtonGroup: {
        flexDirection: 'row',
    },



})
export default SignUpClone;