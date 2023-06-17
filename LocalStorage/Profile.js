import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import { JumpingTransition } from 'react-native-reanimated';
import AsyncStore from '../lib/AsyncStore';

const Profile = (props) => {

    const [data, setData] = useState({})
    const [check, setCheck] = useState('unchecked')

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const getChekData = await AsyncStorage.getItem(AsyncStore.react_native,);
        console.log('getChekData', getChekData);
        const getValueData = await AsyncStorage.getItem(AsyncStore.react_value);
        const getValue = JSON.parse(getValueData)
        setData(getValue)
        getChekData === 'checked' ? setCheck('checked') : setCheck('unchecked')
    }

    const storeData = async () => {
        if (check === 'checked') {
            const jsonValue = await AsyncStorage.setItem(AsyncStore.react_native, 'checked')
        }
        else {
            const jsonValue = await AsyncStorage.setItem(AsyncStore.react_native, 'unchecked')
        }
        props.navigation.navigate('Login');
    }

    return (
        <View>
            <Text>{data.Name ? data.Name : null}</Text>
            <Text>{data.Number ? data.Number : null}</Text>
            <Text>{data.Email ? data.Email : null}</Text>

            <Checkbox
                onPress={() => { check === 'checked' ? setCheck(('unchecked')) : setCheck(('checked')) }}
                status={check} />

            <Button onPress={() => { storeData() }}>Submit</Button>
        </View>

    )
}
export default Profile;