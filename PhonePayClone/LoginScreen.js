import React, { useRef } from 'react';
import { Dimensions, ScrollView, StatusBar, View } from 'react-native';
import { Avatar, Button, Divider, Portal, Provider, Text, TextInput } from 'react-native-paper';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const LoginScreen = () => {

    const passwordField1 = useRef()
    const passwordField2 = useRef()
    const passwordField3 = useRef()
    const passwordField4 = useRef()

    return (
        <Provider>

            <ScrollView>

                <StatusBar
                    animated={true}
                    backgroundColor="#522f93"
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden}
                />

                <Avatar.Image
                    size={100}
                    style={{ alignSelf: 'center', marginTop: 40 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKmJd7F0S3Raf7rnCZhOKeBev5iy5yo0xYbo-9wR7N1QIBoHSFP55eykLc6mcdDBmaN8&usqp=CAU' }} />

                <View style={{ width: deviceWidth * 0.8, alignSelf: 'center' }}>

                    <Text variant='displayMedium'
                        style={{
                            marginTop: 20,
                            textAlign: 'center',
                            color: '#58459e'
                        }}
                    >Welcome back!</Text>

                    <Text variant='headlineLarge'
                        style={{ textAlign: 'center' }} >Login to continue with PhonePe</Text>

                </View>

                <TextInput
                    style={{ width: deviceWidth * 0.8, alignSelf: 'center', backgroundColor: 'white' }}
                    placeholder='Enter Mobile Number'
                    returnKeyType='next'
                    keyboardType='numeric'
                    onSubmitEditing={() => { passwordField1.current.focus() }}
                    blurOnSubmit={false}
                />

                <View style={{ marginTop: 20, width: deviceWidth * 0.8, alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TextInput
                        ref={passwordField1}
                        returnKeyType='next'
                        maxLength={1}
                        style={{ width: deviceWidth * 0.15, backgroundColor: 'white' }}
                        onSubmitEditing={() => { passwordField2.current.focus() }}
                        blurOnSubmit={false}

                    />

                    <TextInput
                        ref={passwordField2}
                        returnKeyType='next'
                        maxLength={1}
                        style={{ width: deviceWidth * 0.15, backgroundColor: 'white' }}
                        onSubmitEditing={() => { passwordField3.current.focus() }}
                        blurOnSubmit={false}


                    />

                    <TextInput
                        ref={passwordField3}
                        returnKeyType='next'
                        maxLength={1}
                        style={{ width: deviceWidth * 0.15, backgroundColor: 'white' }}
                        onSubmitEditing={() => { passwordField4.current.focus() }}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        ref={passwordField4}
                        returnKeyType='done'
                        maxLength={1}
                        textAlign="center"
                        style={{ width: deviceWidth * 0.15, backgroundColor: 'white' }}
                    />

                </View>

                <Button
                    style={{ marginTop: 20, alignSelf: 'center', width: deviceWidth * 0.8, height: deviceHeight * 0.1, justifyContent: 'center' }}
                    mode="contained"
                    labelStyle={{ fontSize: 20 }}
                >Login</Button>

                <Button
                    style={{ marginTop: 20, alignSelf: 'center', width: deviceWidth * 0.8, height: deviceHeight * 0.1, justifyContent: 'center' }}
                    labelStyle={{ fontSize: 20 }}
                >Forgot Password?</Button>

                <Divider style={{ width: deviceWidth * 0.8, alignSelf: 'center', }} />

                <Text variant='headlineSmall'
                    style={{ marginTop: 20, alignSelf: 'center', }}>Don't have PhonePe account?</Text>

                <Button labelStyle={{ fontSize: 20 }}>REGISTER</Button>

            </ScrollView>

        </Provider>
    )
}
export default LoginScreen;