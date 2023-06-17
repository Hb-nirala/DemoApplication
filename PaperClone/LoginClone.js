import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import { Button, Provider, Text, TextInput, Portal, Dialog, Divider, Checkbox } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons'

const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [isSecure, setIsSecure] = useState(true)

    const [checkboxStatus, setCheckboxStatus] = useState('checked')

    const passwordRef = useRef()

    const showModal = () => setVisible(true)
    const hideModal = () => setVisible(false)


    return (
        <Provider>

            <View style={styles.viewContainerStyle}>

                <TextInput
                    style={styles.textInputStyle}
                    label="Enter username"
                    mode='outlined'
                    placeholder='Enter Username'
                    onChangeText={(username) => { setUsername(username) }}
                    value={username}
                    returnKeyType='next'
                    onSubmitEditing={() => { passwordRef.current.focus() }}
                    blurOnSubmit={false}
                />


                <TextInput
                    style={styles.textInputStyle}
                    ref={passwordRef}
                    label="Enter Password"
                    mode='outlined'
                    placeholder='Enter Password'
                    onChangeText={(password) => { setPassword(password) }}
                    value={password}
                    secureTextEntry={isSecure}
                    right={isSecure ? <TextInput.Icon icon="eye-off" onPress={() => { setIsSecure(false) }} /> : <TextInput.Icon icon="eye" onPress={() => { setIsSecure(true) }} />
                    }

                />
                <View style={styles.viewCheckboxStyle}>

                    <Checkbox
                        status={checkboxStatus}
                        onPress={() => { checkboxStatus == 'checked' ? setCheckboxStatus('unchecked') : setCheckboxStatus('checked') }} />
                    <Text variant="bodyMedium">I am not a robot</Text>

                </View>
                <Portal>

                    <Dialog
                        onDismiss={hideModal}
                        visible={visible}
                        style={styles.DialogStyle}

                    >
                        <Dialog.Title style={styles.DialogTitleStyle}>
                            <Icon name="checkmark-circle-outline" size={100} color='green' /> Success</Dialog.Title>

                        <Dialog.Content>
                            <Text variant="bodyMedium" style={styles.textStyle}>You have SuccessFully Login</Text>
                        </Dialog.Content>

                        <Dialog.Actions>
                            <Button onPress={hideModal}>Done</Button>
                        </Dialog.Actions>

                    </Dialog>

                </Portal>

                <Button
                    labelStyle={{ fontSize: 20 }}
                    style={styles.buttonStyle}
                    mode='contained'
                    buttonColor='green'
                    textColor='white'
                    onPress={showModal}
                >
                    Login
                </Button>
                <Text variant="headlineSmall" style={styles.textLoginStyle}>Login With</Text>
                <Divider
                    horizontalInset={true}
                    bold={true}>
                </Divider>
                <View style={styles.viewIconStyle}>
                    <Image
                        style={styles.imageIconStyle}
                        source={require('../assets/google.png')} />
                    <Image
                        style={styles.imageIconStyle}
                        source={require('../assets/facebook.png')} />
                    <Image
                        style={styles.imageIconStyle}
                        source={require('../assets/twitter.png')} />
                </View>
            </View>
        </Provider>
    )
}
const styles = StyleSheet.create({
    viewContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,

    },
    buttonStyle: {
        margin: 10,
        width: screenWidth - 40,
        alignSelf: 'center'
    },
    DialogStyle: {
        padding: 10,
        alignItems: 'center',
        height: screenHeight / 2,
    },
    textStyle: {
        fontSize: 20,
        color: 'green'
    },
    textLoginStyle: {
        alignSelf: 'center',
    },
    imageIconStyle: {
        width: 30,
        height: 30,
        margin: 10,
    },
    viewIconStyle: {
        marginTop: 50,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    DialogTitleStyle: {
        padding: screenWidth * 0.15,
    },
    viewCheckboxStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textInputStyle: {
        margin: 5,
    }
})
export default Login;