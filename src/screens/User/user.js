import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Checkbox } from 'react-native-paper'
import AppContext from '../../Context/AppContext'
import AsyncStore from '../../lib/AsyncStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const User = (props) => {
    const { loginData, onLogoutClick } = useContext(AppContext)
    const [check, setCheck] = useState('unchecked')

    // console.log('props.route.params==', props?.route?.params?.values);
    // console.log("loginData===",typeof {loginData});

    useEffect(() => {
        getData()
    }, [])


    const getData = async () => {
        const getChekData = await AsyncStorage.getItem(AsyncStore.react_native,);
        console.log('getChekData', getChekData);
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
            <Text>{loginData.email}</Text>
            <Text>{loginData.password}</Text>
            <Checkbox
                onPress={() => { check === 'checked' ? setCheck(('unchecked')) : setCheck(('checked')) }}
                status={check} />
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('PDF') }}>
                PDF
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('Map') }}>
                Map Screen
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { onLogoutClick(props), storeData() }}>
                Logout
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('VideoPlayer') }}>
                VideoPlayer
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('DocumentPicker') }}>
                DocumentPicker
            </Button>
        </View>
    )
}
export default User