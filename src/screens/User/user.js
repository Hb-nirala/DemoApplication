import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-paper'
import AppContext from '../../Context/AppContext'

const User = (props) => {
    const { loginData } = useContext(AppContext)

    // console.log('props.route.params==', props?.route?.params?.values);
    // console.log("loginData===",typeof {loginData});

    return (
        <View>
            <Text>{loginData.email}</Text>
            <Text>{loginData.password}</Text>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('PDF') }}>
                PDF
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { props.navigation.navigate('Map') }}>
                Map Screen
            </Button>
            <Button style={{ marginTop: 30 }} onPress={() => { console.log(""); }}>
                Logout
            </Button>
        </View>
    )
}
export default User