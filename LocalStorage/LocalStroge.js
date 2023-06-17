import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Checkbox, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStore from '../lib/AsyncStore';
import { useFocusEffect } from '@react-navigation/native';

const LocalStroge = (props) => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [checkboxStatus, setCheckBoxStatus] = useState('unchecked')

    const storeData = async () => {
        const value = {
            Name: name,
            Number: number,
            Email: email,
            CheckBoxStatus: checkboxStatus,
        }
        if (checkboxStatus === 'checked') {
            await AsyncStorage.setItem(AsyncStore.react_native, 'checked')
            await AsyncStorage.setItem(AsyncStore.react_value, JSON.stringify(value))
            // console.log('Hello');
        }
        else {
             await AsyncStorage.setItem(AsyncStore.react_native, 'unchecked')
            // console.log('Hii');
        }
        setName('')
        setEmail('')
        setNumber('')
        props.navigation.navigate('Profile');
    }

    useFocusEffect(
        React.useCallback(() => {
            getData()
        }, [])
    )

    const getData = async () => {
        const getChekData = await AsyncStorage.getItem(AsyncStore.react_native,);
        getChekData === 'checked' ? setCheckBoxStatus('checked') : setCheckBoxStatus('unchecked')
    }

    return (
        <View style={{ margin: 5 }}>
            <TextInput
                style={{ margin: 5 }}
                placeholder='Enter Name'
                onChangeText={(name) => { setName(name) }}
                value={name} />
            <TextInput
                style={{ margin: 5 }}
                placeholder='Enter Number'
                onChangeText={(number) => { setNumber(number) }}
                value={number} />
            <TextInput
                style={{ margin: 5 }}
                placeholder='Enter Email'
                onChangeText={(email) => { setEmail(email) }}
                value={email} />
            <Button onPress={() => { storeData() }}>Submit</Button>
            <Checkbox
                onPress={() => { checkboxStatus === 'checked' ? setCheckBoxStatus('unchecked') : setCheckBoxStatus('checked') }}
                status={checkboxStatus} />
        </View>
    )
}
export default LocalStroge;