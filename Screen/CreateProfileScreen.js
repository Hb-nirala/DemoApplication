import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    SectionList,
    Text,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CreateProfileScreen = ({ navigation }) => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phonenumber, setPhoneNumber] = useState(null)
    const [gender, setGender] = useState(null)

    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const genderRef = useRef()

    const createProfile = () => {
        navigation.navigate('Profile',
            {
                name: name,
                email: email,
                phonenumber: phonenumber,
                gender: gender,
            }
        )
        setName('')
        setEmail('')
        setGender('')
        setPhoneNumber('')

    }

    return (
        <View style={styles.viewCreateProfileStyle}>
            <TextInput
                returnKeyType='next'
                onSubmitEditing={() => emailRef.current.focus()}
                blurOnSubmit={false}
                style={styles.textInputStyle}
                placeholder='Enter Name'
                onChangeText={(name) => { setName(name) }}
                value={name}
            />

            <TextInput
                ref={emailRef}
                returnKeyType='next'
                onSubmitEditing={() => phoneNumberRef.current.focus()}
                blurOnSubmit={false}
                style={styles.textInputStyle}
                placeholder='Enter Email'
                onChangeText={(email) => { setEmail(email) }}
                value={email}
            />

            <TextInput
                ref={phoneNumberRef}
                returnKeyType='next'
                onSubmitEditing={() => genderRef.current.focus()}
                blurOnSubmit={false}
                style={styles.textInputStyle}
                placeholder='Enter Phone Number'
                onChangeText={(phonenumber) => { setPhoneNumber(phonenumber) }}
                value={phonenumber}
            />

            <TextInput
                ref={genderRef}
                returnKeyType='done'
                style={styles.textInputStyle}
                placeholder='Enter Gender'
                onChangeText={(gender) => { setGender(gender) }}
                value={gender}
            />

            <TouchableOpacity
                onPress={() => { createProfile() }}
                style={styles.touchableCreateProfileBtn}>
                <Text style={styles.textCreateProfileStyle}>Create Profile</Text>
            </TouchableOpacity>
        </View>
    )
};
const styles = StyleSheet.create({
    viewCreateProfileStyle: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#5e6672',
    },
    textInputStyle: {
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: 'white',
    },
    touchableCreateProfileBtn: {
        alignSelf: 'center',
        alignItems: 'center',
        width: deviceWidth * 0.5,
        backgroundColor: '#feb342',
        marginTop: 30,
        borderRadius: 20,
    },
    textCreateProfileStyle: {
        color: 'black',
        fontSize: 20,
        padding: 10,

    }
});

export default CreateProfileScreen;